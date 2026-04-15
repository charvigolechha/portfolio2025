import React, { useEffect, useRef, useState } from "react";

const ITEM_RATIO = 0.6; // center item = 60% of container width

export default function HorizontalCarousel({ items, interval = 5000 }) {
  const n = items.length;
  const [current, setCurrent] = useState(0);
  const [containerW, setContainerW] = useState(0);
  const containerRef = useRef();
  const timeoutRef = useRef();

  // Measure container width, update on resize
  useEffect(() => {
    if (!containerRef.current) return;
    const ro = new ResizeObserver(([entry]) => {
      setContainerW(entry.contentRect.width);
    });
    ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

  // Auto-advance
  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % n);
    }, interval);
    return () => clearTimeout(timeoutRef.current);
  }, [current, n, interval]);

  const itemW = containerW * ITEM_RATIO;
  const offset = (containerW - itemW) / 2 - current * itemW;

  return (
    <div className="w-full flex flex-col items-center select-none">

      {/* Overflow wrapper */}
      <div ref={containerRef} className="w-full overflow-hidden">
        <div
          className="flex"
          style={{
            transform: `translateX(${offset}px)`,
            transition: containerW ? "transform 0.45s cubic-bezier(0.34, 1.2, 0.64, 1)" : "none",
          }}
        >
          {items.map((item, i) => (
            <div
              key={i}
              className="flex-shrink-0 px-2"
              style={{
                width: itemW,
                opacity: i === current ? 1 : 0.45,
                transition: "opacity 0.4s ease",
              }}
              onClick={() => setCurrent(i)}
            >
              <img
                src={item.src}
                alt={item.caption || ""}
                className="w-full aspect-[16/9] object-cover block rounded-lg cursor-pointer"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Caption */}
      <p className="mt-3 text-sm text-gray-500 italic text-center px-4 min-h-[1.25rem]">
        {items[current].caption}
      </p>

      {/* Dots */}
      <div className="flex items-center gap-1.5 mt-3">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === current ? "w-4 bg-gray-400" : "w-1.5 bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>

    </div>
  );
}