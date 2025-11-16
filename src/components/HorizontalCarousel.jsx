import React, { useEffect, useRef, useState } from "react";

export default function HorizontalCarousel({ items, interval = 5000 }) {
  const [centerIdx, setCenterIdx] = useState(0);
  const timeoutRef = useRef();

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCenterIdx((prev) => (prev + 1) % items.length);
    }, interval);
    return () => clearTimeout(timeoutRef.current);
  }, [centerIdx, items.length, interval]);

  // Helper to get the correct image for each slot
  const getImageIdx = (offset) => (centerIdx + offset + items.length) % items.length;

  return (
    <div className="w-full flex flex-col items-center">
      {/* Heading and subheading should be in the parent (App.jsx), not here */}
      <div className="h-8" /> {/* Adds gap between heading and images */}
      <div className="flex flex-row items-center justify-center gap-2 md:gap-6"
           style={{ transition: 'transform 0.7s cubic-bezier(0.22, 1, 0.36, 1)' }}>
        {/* Show 2 images left, center, 2 right */}
        {[-2, -1, 0, 1, 2].map((offset) => {
          const idx = getImageIdx(offset);
          const isCenter = offset === 0;
          return (
            <div
              key={idx}
              className={`transition-all duration-500 ${
                isCenter
                  ? "scale-110 shadow-2xl z-10"
                  : "scale-90 opacity-60 z-0"
              } rounded-xl overflow-hidden bg-gray-200`}
              style={{
                width: isCenter ? 400 : 180,
                height: isCenter ? 260 : 120,
                marginLeft: offset === -2 ? 0 : -32,
                marginRight: offset === 2 ? 0 : -32,
                boxShadow: isCenter
                  ? "0 8px 32px 0 rgba(0,0,0,0.18)"
                  : "0 2px 8px 0 rgba(0,0,0,0.08)",
              }}
            >
              <img
                src={items[idx].src}
                alt={items[idx].caption || ""}
                className="w-full h-full object-cover"
                draggable="false"
              />
            </div>
          );
        })}
      </div>
      {/* Caption for center image */}
      <div className="mt-8 text-center text-gray-700 text-base max-w-md min-h-[2.5rem]">
        {items[centerIdx].caption}
      </div>
    </div>
  );
}