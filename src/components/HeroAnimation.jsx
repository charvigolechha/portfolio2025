import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const OBJECTS = [
  { src: "/illustrations/tennis.svg",  startAngle: 0   },
  { src: "/illustrations/book.svg",    startAngle: 72  },
  { src: "/illustrations/camera.svg",  startAngle: 144 },
  { src: "/illustrations/skate.svg",   startAngle: 216 },
  { src: "/illustrations/pallette.svg",startAngle: 288 },
];

export default function HeroAnimation() {
  const containerRef  = useRef(null);
  const objectRefs    = useRef([]);
  const ponytailRef   = useRef(null);
  const leftHandRef   = useRef(null);
  const rightHandRef  = useRef(null);
  const speedRef      = useRef(0.4);   // degrees added per frame
  const anglesRef     = useRef(OBJECTS.map(o => o.startAngle));

  useEffect(() => {
    const container = containerRef.current;

    // --- Ponytail idle sway ---
    gsap.to(ponytailRef.current, {
      rotation: 6,
      duration: 1.8,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
      transformOrigin: "50% 0%", // pivot at the root of the ponytail
    });

    // --- Left hand: typing (subtle x shift) ---
    const typeHand = () => {
      gsap.to(leftHandRef.current, {
        x: Math.random() > 0.5 ? 3 : -5,
        duration: 0.4 + Math.random() * 0.3,
        ease: "power1.inOut",
        delay: 0.1 + Math.random() * 0.4,
        onComplete: typeHand,
      });
    };
    typeHand();

    // --- Right hand: mouse (subtle y drift) ---
    const moveMouse = () => {
      gsap.to(rightHandRef.current, {
        y: Math.random() > 0.4 ? 5 : 0,
        duration: 0.6 + Math.random() * 0.6,
        ease: "power2.inOut",
        delay: 0.2 + Math.random() * 0.5,
        onComplete: moveMouse,
      });
    };
    moveMouse();

    // --- Orbit ticker ---
    const tick = () => {
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
        const newAngle = angle + speedRef.current;
        const rad      = (newAngle * Math.PI) / 180;

        const x = centerX + radiusX * Math.cos(rad);
        const y = centerY + radiusY * Math.sin(rad);

        // sin(rad) goes -1 (far/back) → +1 (close/front)
        const sinVal  = Math.sin(rad);
        const progress = (sinVal + 1) / 2; // normalised 0→1

        const baseSize = width * 0.08; // icon size relative to container
        const scale   = (0.25 + 1.6 * progress) * (baseSize / 48);
        // fade to 0 in the back 20% of the orbit (disappear into screen)
        const opacity = progress < 0.2 ? 0 : progress;

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

    gsap.ticker.add(tick);

    // --- Hover: slow down / speed up ---
    const slowDown = () => { speedRef.current = 0.1; };
    const speedUp  = () => { speedRef.current = 0.3; };
    container.addEventListener("mouseenter", slowDown);
    container.addEventListener("mouseleave", speedUp);

    return () => {
      gsap.ticker.remove(tick);
      gsap.killTweensOf(ponytailRef.current);
      gsap.killTweensOf(leftHandRef.current);
      gsap.killTweensOf(rightHandRef.current);
      container.removeEventListener("mouseenter", slowDown);
      container.removeEventListener("mouseleave", speedUp);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full select-none">

      {/* Base layer — full illustration */}
      <img
        src="/illustrations/girl-back.png"
        alt="Charvi illustration"
        className="w-full h-auto block"
        style={{ position: "relative", zIndex: 5 }}
        draggable={false}
      />

      {/* Ponytail — positioned over her head, animates separately */}
      {/* ⚙️ Adjust top/left/width to match your illustration */}
      <img
        ref={ponytailRef}
        src="/illustrations/ponytail.png"
        alt=""
        className="absolute pointer-events-none"
        style={{ top: "30%", left: "44.5%", width: "11%", zIndex: 15 }}
        draggable={false}
      />

      {/* Left hand — keyboard, z below orbiting objects */}
      {/* ⚙️ Adjust top/left/width to match your illustration */}
      <img
        ref={leftHandRef}
        src="/illustrations/hand-left.png"
        alt=""
        className="absolute pointer-events-none"
        style={{ top: "75%", left: "25%", width: "6.6%", zIndex: 3 }}
        draggable={false}
      />

      {/* Right hand — mouse */}
      {/* ⚙️ Adjust top/left/width to match your illustration */}
      <img
        ref={rightHandRef}
        src="/illustrations/hand-right.png"
        alt=""
        className="absolute pointer-events-none"
        style={{ top: "76%", left: "71%", width: "4.5%", zIndex: 3 }}
        draggable={false}
      />

      {/* Orbiting objects — start at top-left, GSAP moves them */}
      {OBJECTS.map((obj, i) => (
        <img
          key={obj.src}
          ref={el => (objectRefs.current[i] = el)}
          src={obj.src}
          alt=""
          className="absolute pointer-events-none"
          style={{ top: 0, left: 0, width: 48, height: 48, opacity: 0 }}
          draggable={false}
        />
      ))}

    </div>
  );
}