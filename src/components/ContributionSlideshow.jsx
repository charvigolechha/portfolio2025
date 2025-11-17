import React, { useState, useEffect } from "react";

export default function ContributionSlideshow({ slides, interval = 3500 }) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  // Double the interval time
  const effectiveInterval = interval * 1.5;

  useEffect(() => {
    if (paused) return;
    const timer = setTimeout(
      () => setCurrent((prev) => (prev + 1) % slides.length),
      effectiveInterval
    );
    return () => clearTimeout(timer);
  }, [current, slides.length, effectiveInterval, paused]);

  const goToSlide = (idx) => setCurrent(idx);

  return (
    <div className="w-full flex flex-col items-center">
      <div
        className="w-full h-72 md:h-96 bg-gray-100 rounded-lg flex items-center justify-center border border-gray-200 mb-2 overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <img
          src={slides[current].image}
          alt={slides[current].caption}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="text-gray-700 text-m mb-4 text-center font-medium">
        {slides[current].caption}
      </div>
      {/* Carousel indicators */}
      <div className="flex gap-2 mt-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`w-3 h-3 rounded-full border border-gray-400 transition
              ${current === idx ? "bg-blue-600 border-blue-600" : "bg-gray-200"}
            `}
            aria-label={`Go to slide ${idx + 1}`}
            style={{ outline: "none" }}
          />
        ))}
      </div>
    </div>
  );
}
