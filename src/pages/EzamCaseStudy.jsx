import React from "react";

export default function EzamCaseStudy() {
  return (
    <div className="bg-neutral-900 min-h-screen text-white">
      {/* Header */}
      <header className="max-w-4xl mx-auto px-4 pt-12 pb-8 flex flex-col gap-2">
        <div className="flex justify-between items-start text-sm text-gray-200 mb-8">
          <span>golechhacharvi@gmail.com</span>
          <span>March 2024</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-2">EZAM</h1>
        <h2 className="text-xl md:text-2xl font-medium mb-2">UX Research & Product Design</h2>
        <div className="flex flex-wrap gap-2 items-center">
          <span className="bg-gray-800 text-gray-200 px-3 py-1 rounded-full text-xs font-semibold">
            Winner: Titan’s Design Impact Movement
          </span>
        </div>
        <div className="w-full h-64 md:h-96 bg-gray-700 rounded-xl flex items-center justify-center mt-8 mb-4">
          <span className="text-gray-300 text-lg">[IMG_1]</span>
        </div>
      </header>

      {/* Overview & Problem Statement */}
      <main className="max-w-4xl mx-auto px-4 pb-20">
        <section className="flex flex-col md:flex-row gap-10 items-start mb-12">
          <div className="flex-1 bg-neutral-800 rounded-xl p-8 mb-6 md:mb-0">
            <h3 className="text-2xl font-bold text-amber-300 mb-4">Overview</h3>
            <p className="text-lg text-gray-100 mb-2">
              EZAM is an innovative game designed to <span className="font-semibold">foster inclusivity</span> by enabling visually impaired and sighted individuals to engage in a shared, enjoyable gaming experience. The game emphasizes <span className="font-semibold">tactile interactions</span>, removing visual biases and <span className="font-semibold">ensuring equal participation</span> for all players. With a focus on independence and social connection, EZAM <span className="font-semibold">bridges the gap</span> between diverse user abilities.
            </p>
          </div>
          <div className="flex-shrink-0 w-full md:w-72 h-72 bg-gray-700 rounded-xl flex items-center justify-center">
            <span className="text-gray-300 text-lg">[IMG_2]</span>
          </div>
        </section>
        <section className="bg-neutral-800 rounded-xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-amber-300 mb-4">Problem Statement</h3>
          <p className="text-lg text-gray-100">
            How might we enable the <span className="font-semibold">visually impaired and abled</span> to engage in an <span className="font-semibold">inclusive</span>, auditory and/or tactile-focused game <span className="font-semibold">eliminating visual advantages</span> and ensuring a balanced experience for all?
          </p>
        </section>
      </main>
    </div>
  );
}