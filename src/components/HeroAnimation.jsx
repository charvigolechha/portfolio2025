import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

// The still drawing. It shows on its own as soon as it arrives.
// (index.html also preloads it so the download starts before any JavaScript runs.)
const BASE_SRC = "/illustrations/girl-back.webp";

// Small WebP versions (~6–9 KB each) of the original hand-drawn SVGs (~1 MB each).
const OBJECTS = [
  { src: "/illustrations/tennis.webp",   startAngle: 0   },
  { src: "/illustrations/book.webp",     startAngle: 60  },
  { src: "/illustrations/camera.webp",   startAngle: 120 },
  { src: "/illustrations/skate.webp",    startAngle: 180 },
  { src: "/illustrations/pallette.webp", startAngle: 240 },
  { src: "/illustrations/flow.webp",     startAngle: 300 },
];

// Everything that moves. These appear together, or not at all.
const LAYER_SRCS = [
  "/illustrations/ponytail.webp",
  "/illustrations/hand-left.png",
  "/illustrations/hand-right.png",
  ...OBJECTS.map(o => o.src),
];

// Download one image. Resolves when it has loaded, rejects if it fails.
// (Handlers are attached BEFORE src is set, so even a cached image is caught.)
const loadImage = (src) => new Promise((resolve, reject) => {
  const img = new Image();
  img.onload  = () => resolve(src);
  img.onerror = () => reject(new Error(`Failed to load ${src}`));
  img.src = src;
});

// Promise.all (not allSettled): if ANY layer fails, the whole thing rejects,
// so we never show a half-built animation. Cached so it only runs once.
let layersPromise = null;
const loadLayers = () => (layersPromise ??= Promise.all(LAYER_SRCS.map(loadImage)));

export default function HeroAnimation() {
  const [baseState, setBaseState]       = useState("loading"); // "loading" | "ready" | "failed"
  const [layersReady, setLayersReady]   = useState(false);
  const containerRef  = useRef(null);
  const objectRefs    = useRef([]);
  const ponytailRef   = useRef(null);
  const leftHandRef   = useRef(null);
  const rightHandRef  = useRef(null);
  const speedRef      = useRef(0.25);   // degrees added per frame
  const anglesRef     = useRef(OBJECTS.map(o => o.startAngle));

  // Moving parts only switch on once the drawing AND every layer are ready.
  const animate = baseState === "ready" && layersReady;

  useEffect(() => {
    let cancelled = false;

    // Load the drawing through a separate Image object. (Safer than <img onLoad>, which can
    // be missed when the image is already cached from the preload in index.html.)
    loadImage(BASE_SRC)
      .then(() => { if (!cancelled) setBaseState("ready"); })
      .catch(() => { if (!cancelled) setBaseState("failed"); });

    loadLayers()
      .then(() => { if (!cancelled) setLayersReady(true); })
      .catch(() => { /* a layer failed: keep showing the still drawing */ });
    return () => { cancelled = true; };
  }, []);

  useEffect(() => {
    if (!animate) return;

    const container = containerRef.current;
    const ponytail  = ponytailRef.current;
    const leftHand  = leftHandRef.current;
    const rightHand = rightHandRef.current;

    // --- Ponytail idle sway ---
    gsap.to(ponytail, {
      rotation: 6,
      duration: 2.0,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
      transformOrigin: "50% 0%", // pivot at the root of the ponytail
    });

    // --- Left hand: typing (subtle x shift) ---
    const typeHand = () => {
      gsap.to(leftHand, {
        x: Math.random() > 0.5 ? 3 : -5,
        duration: 0.8 + Math.random() * 0.5,
        ease: "power1.inOut",
        delay: 0.2 + Math.random() * 0.6,
        onComplete: typeHand,
      });
    };
    typeHand();

    // --- Right hand: mouse (subtle y drift) ---
    const moveMouse = () => {
      gsap.to(rightHand, {
        y: Math.random() > 0.4 ? 5 : 0,
        duration: 1.2 + Math.random() * 0.8,
        ease: "power2.inOut",
        delay: 0.4 + Math.random() * 0.8,
        onComplete: moveMouse,
      });
    };
    moveMouse();

    // --- Orbit ticker ---
    const tick = (time, deltaTime) => {
      const { width, height } = container.getBoundingClientRect();

      // ⚙️ Tune these to match your illustration:
      // centerX/Y = where her head is, as a fraction of the image dimensions
      // radiusX   = how wide the orbit is (horizontal spread)
      // radiusY   = how tall the orbit is (smaller = flatter = more depth illusion)
      const centerX = width  * 0.50;
      const centerY = height * 0.28;
      const radiusX = width  * 0.24;
      const radiusY = height * 0.04;

      anglesRef.current = anglesRef.current.map((angle, i) => {
        const newAngle = angle + speedRef.current * (deltaTime / 16.667);
        const rad      = (newAngle * Math.PI) / 180;

        const x = centerX + radiusX * Math.cos(rad);
        const y = centerY + radiusY * Math.sin(rad);

        // sin(rad) goes -1 (far/back) → +1 (close/front)
        const sinVal  = Math.sin(rad);
        const progress = (sinVal + 1) / 2; // normalised 0→1

        const baseSize = width * 0.08; // icon size relative to container
        const scale   = (0.25 + 1.6 * progress) * (baseSize / 48);
        // fade to 0 in the back 20% of the orbit (disappear into screen)
        // × fadeIn.value so the objects fade in with the other layers
        const opacity = (progress < 0.2 ? 0 : progress) * fadeIn.value;

        gsap.set(objectRefs.current[i], {
          x,
          y,
          xPercent: -50, // keep icon centred on its orbit point
          yPercent: -50,
          scale,
          opacity,
          zIndex: sinVal > 0 ? 20 : 2,
        });

        return newAngle;
      });
    };

    // --- Fade the orbit in over 0.6s (ponytail + hands fade via CSS, same timing) ---
    const fadeIn = { value: 0 };
    gsap.to(fadeIn, { value: 1, duration: 0.6, ease: "power2.out" });

    gsap.ticker.add(tick);

    // --- Hover: slow down / speed up ---
    const slowDown = () => { speedRef.current = 0.1; };
    const speedUp  = () => { speedRef.current = 0.25; };
    container.addEventListener("mouseenter", slowDown);
    container.addEventListener("mouseleave", speedUp);

    return () => {
      gsap.ticker.remove(tick);
      gsap.killTweensOf(ponytail);
      gsap.killTweensOf(leftHand);
      gsap.killTweensOf(rightHand);
      gsap.killTweensOf(fadeIn);
      container.removeEventListener("mouseenter", slowDown);
      container.removeEventListener("mouseleave", speedUp);
    };
  }, [animate]);

  // Ponytail + hands: hidden until everything is ready, then fade in together.
  const layerStyle = { opacity: animate ? 1 : 0, transition: "opacity 0.6s ease-out" };

  return (
    // aspectRatio reserves the drawing's space up front, so nothing jumps while it loads.
    <div ref={containerRef} className="relative w-full select-none" style={{ aspectRatio: "2000 / 1126" }}>

      {/* Placeholder — a soft grey shape while the drawing downloads */}
      {/* (outer div fades out; inner div pulses — animate-pulse controls opacity itself, so they can't share one div) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: baseState === "loading" ? 1 : 0, transition: "opacity 0.4s ease-out" }}
      >
        <div className="w-full h-full rounded-2xl bg-gray-100 animate-pulse" />
      </div>

      {/* Base layer — full illustration. Works on its own as the fallback. */}
      <img
        src={BASE_SRC}
        alt="Illustration of Charvi at her desk"
        fetchPriority="high"
        className="w-full h-full block object-contain"
        style={{
          position: "relative",
          zIndex: 5,
          opacity: baseState === "ready" ? 1 : 0,
          transition: "opacity 0.5s ease-out",
        }}
        draggable={false}
      />

      {/* Ponytail — positioned over her head, animates separately */}
      {/* ⚙️ Adjust top/left/width to match your illustration */}
      <img
        ref={ponytailRef}
        src="/illustrations/ponytail.webp"
        alt=""
        className="absolute pointer-events-none"
        style={{ top: "30%", left: "44.5%", width: "11%", zIndex: 15, ...layerStyle }}
        draggable={false}
      />

      {/* Left hand — keyboard, z below orbiting objects */}
      {/* ⚙️ Adjust top/left/width to match your illustration */}
      <img
        ref={leftHandRef}
        src="/illustrations/hand-left.png"
        alt=""
        className="absolute pointer-events-none"
        style={{ top: "75%", left: "25%", width: "6.6%", zIndex: 3, ...layerStyle }}
        draggable={false}
      />

      {/* Right hand — mouse */}
      {/* ⚙️ Adjust top/left/width to match your illustration */}
      <img
        ref={rightHandRef}
        src="/illustrations/hand-right.png"
        alt=""
        className="absolute pointer-events-none"
        style={{ top: "76%", left: "71%", width: "4.5%", zIndex: 3, ...layerStyle }}
        draggable={false}
      />

      {/* Orbiting objects — start at top-left, GSAP moves them */}
      {/* objectFit "contain" keeps each drawing's shape inside its 48×48 box (like the old SVGs did) */}
      {OBJECTS.map((obj, i) => (
        <img
          key={obj.src}
          ref={el => (objectRefs.current[i] = el)}
          src={obj.src}
          alt=""
          className="absolute pointer-events-none"
          style={{ top: 0, left: 0, width: 48, height: 48, objectFit: "contain", opacity: 0 }}
          draggable={false}
        />
      ))}

    </div>
  );
}