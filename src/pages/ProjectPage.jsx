import React from "react";
import { Link } from "react-router-dom";

export default function ProjectPage() {
  return (
    <div className="project-case-study bg-white text-black">
      {/* Top Back Button */}
      <div className="w-full max-w-5xl mx-auto pt-8 px-4 md:px-0 flex">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-700 font-semibold shadow transition mb-8"
        >
          <span aria-hidden="true" className="text-xl">←</span>
          Back to Home
        </Link>
      </div>

      {/* 00 — Hero Section */}
      <section className="hero-section py-20 px-4 md:px-0 border-b border-gray-200 flex flex-col items-center">
        <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 flex flex-col items-center md:items-start">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center md:text-left">
              Jigsaw Puzzle Explorer: Player Progression & Motivation
            </h1>
            <h2 className="text-xl md:text-2xl font-medium mb-6 text-center md:text-left">
              A data-informed UX case study
            </h2>
            <ul className="mb-6 text-base md:text-lg text-gray-700 space-y-1">
              <li>
                <span className="font-semibold">Role:</span> UX Designer
              </li>
              <li>
                <span className="font-semibold">Timeline:</span> July–Sept 2025
              </li>
              <li>
                <span className="font-semibold">Team:</span> UX, Product, Game Design, Analysts, UI, Developers
              </li>
            </ul>
            <div className="flex flex-wrap gap-4 mb-4">
              <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">D7/D1 Retention ↑</span>
              <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">Session Time ↑</span>
              <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-semibold">Higher Grid Starts ↑</span>
              <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold">Puzzle Completion Rates ↑</span>
            </div>
          </div>
          <div className="flex-1 flex justify-center items-center">
            {/* HERO VISUAL */}
            <div className="w-full max-w-md h-56 bg-gray-100 rounded-xl flex items-center justify-center border border-gray-300">
              {/* VISUAL HERE: Full-width banner–Jigsaw Puzzle Explorer UI + progression arrows + tokens flowing from puzzle pieces → leaderboard */}
              <span className="text-gray-400 text-lg">[HERO VISUAL HERE]</span>
            </div>
          </div>
        </div>
        <p className="mt-10 max-w-3xl text-lg text-center text-gray-800">
          I helped PSGs’ Jigsaw improve retention and engagement by identifying why players stalled early, identifying the psychological blockers behind low progression, and designing a motivation-driven reward system that encourages natural learning and long-term play.
        </p>
      </section>

      {/* 01 — Context + Business Goal */}
      <section className="py-20 px-4 md:px-0 border-b border-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">01 — Context + Business Goal</h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-2">About Jigsaw Puzzle Explorer</h3>
              <div className="w-full h-40 bg-gray-100 rounded-lg flex items-center justify-center border border-gray-300 mb-4">
                {/* VISUAL HERE: Game screenshots / Core gameplay grid / App Store card */}
                <span className="text-gray-400">[VISUAL HERE]</span>
              </div>
              <p className="mb-2">
                PSGs’ Jigsaw rapidly rose from outside the top 25 to fighting for the #3 global spot in the Jigsaw space in terms of revenue share, powered by PlaySimple’s deeply analytical approach to game design.
              </p>
              <ul className="list-disc ml-6 mb-2 text-gray-700">
                <li>6 grid sizes (36–200 pieces)</li>
                <li>13 categories, 12k+ puzzles</li>
                <li>2 metas (Adventure, Stories)</li>
                <li>4 in-game power-up</li>
              </ul>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-2">Who we design for</h3>
              <ul className="list-disc ml-6 mb-2 text-gray-700">
                <li>Casual players 35–60, primarily women</li>
                <li>Based majorly in US, UK, Canada, Australia</li>
                <li>Motivated by relaxation, aesthetics, low-pressure play</li>
              </ul>
              <h3 className="text-xl font-semibold mt-6 mb-2">Business Goal</h3>
              <p>
                Strengthen the game’s core health metrics (retention, engagement, and LTV) by reducing early friction and motivating players to transition into deeper, more rewarding gameplay loops.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 02 — Problem Space */}
      <section className="py-20 px-4 md:px-0 border-b border-gray-200 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">02 — Problem Space</h2>
          <div className="w-full h-32 bg-gray-100 rounded-lg flex items-center justify-center border border-gray-300 mb-6">
            {/* VISUAL HERE: Funnel drop-offs, grid-size distribution heatmap */}
            <span className="text-gray-400">[VISUAL HERE]</span>
          </div>
          <h3 className="text-xl font-semibold mb-2">Initial Problem Statement</h3>
          <p className="mb-4">
            Identify key moments when players lose momentum, and design interventions to reduce friction and sustain long-term engagement.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow p-6">
              <span className="font-bold text-lg">No long-term motivation</span>
              <p className="text-gray-700">Players didn’t see progress.</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <span className="font-bold text-lg">No push toward higher grid sizes</span>
              <p className="text-gray-700">Players stayed “stuck”.</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <span className="font-bold text-lg">Intimidation</span>
              <p className="text-gray-700">Higher puzzles looked harder than they actually were.</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <span className="font-bold text-lg">No linear system</span>
              <p className="text-gray-700">Players lacked a sense of mastery or improvement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 03 — Research & Discovery */}
      <section className="py-20 px-4 md:px-0 border-b border-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">03 — Research & Discovery</h2>
          <div className="w-full h-32 bg-gray-100 rounded-lg flex items-center justify-center border border-gray-300 mb-6">
            {/* VISUAL HERE: research process diagram */}
            <span className="text-gray-400">[VISUAL HERE]</span>
          </div>
          <ul className="list-disc ml-6 text-gray-700 space-y-1">
            <li>Gameplay Analysis</li>
            <li>Behavioral study</li>
            <li>Competitor benchmarking</li>
            <li>Funnel and Cohort Analysis</li>
            <li>User Interviews</li>
          </ul>
        </div>
      </section>

      {/* 04 — Key Insights */}
      <section className="py-20 px-4 md:px-0 border-b border-gray-200 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">04 — Key Insights</h2>
          <div className="w-full h-32 bg-gray-100 rounded-lg flex items-center justify-center border border-gray-300 mb-8">
            {/* VISUAL HERE: Player segments chart, performance comparison bars */}
            <span className="text-gray-400">[VISUAL HERE]</span>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="font-semibold text-lg mb-2">Insight 1 — Players fell into 3 behavioral types</h3>
              <ul className="list-disc ml-6 text-gray-700 mb-2">
                <li>Newbies (6–8 grids)</li>
                <li>Transition (mix of low + high grids)</li>
                <li>Pro (10–20 grids)</li>
              </ul>
              <p className="text-gray-700">Newbies formed the largest group—but had the weakest engagement.</p>
            </div>
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="font-semibold text-lg mb-2">Insight 2 — Motivation must be intrinsic</h3>
              <ul className="list-disc ml-6 text-gray-700 mb-2">
                <li>Players who come for relaxation avoid pressure-based challenges.</li>
                <li>They respond best to: instant gratification, effort-based rewards, natural learning</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="font-semibold text-lg mb-2">Insight 3 — Pro players behave differently</h3>
              <ul className="list-disc ml-6 text-gray-700 mb-2">
                <li>Fix more pieces early</li>
                <li>Revisit puzzles more</li>
                <li>Complete more sessions</li>
                <li>Progress grid sizes consistently</li>
              </ul>
              <p className="text-gray-700">These behaviors weren’t surfaced or reinforced for newbies.</p>
            </div>
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="font-semibold text-lg mb-2">Insight 4 — Higher grids are intimidating</h3>
              <p className="text-gray-700 mb-2">
                Players hesitate to start bigger puzzles—even when performance data shows they are capable.
              </p>
              <h3 className="font-semibold text-lg mb-2 mt-4">Insight 5 — No progression layer exists</h3>
              <ul className="list-disc ml-6 text-gray-700">
                <li>Non-linear gameplay = no milestones</li>
                <li>No sense of leveling</li>
                <li>No perception of growth</li>
              </ul>
              <p className="text-gray-700">Players didn’t feel like they were “getting better”.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 05 — Competitor Benchmarking */}
      <section className="py-20 px-4 md:px-0 border-b border-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">05 — Competitor Benchmarking</h2>
          <div className="w-full h-32 bg-gray-100 rounded-lg flex items-center justify-center border border-gray-300 mb-6">
            {/* VISUAL HERE: Competitor matrix visual, Competitor table / UX breakdown comparison */}
            <span className="text-gray-400">[VISUAL HERE]</span>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="font-semibold text-lg mb-2">Oakever – Jigsaw Scapes</h3>
              <ul className="list-disc ml-6 text-gray-700">
                <li>Has a leaderboard</li>
                <li>Points are given after puzzle completion</li>
                <li>Does not reinforce “I fix a piece → I get rewarded”</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="font-semibold text-lg mb-2">EasyBrain – Jigsaw Puzzles</h3>
              <ul className="list-disc ml-6 text-gray-700">
                <li>No leaderboard system</li>
                <li>No motivation layer beyond daily puzzles</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 p-6 bg-blue-50 border-l-4 border-blue-400 rounded">
            <h4 className="font-semibold text-blue-800 mb-2">Opportunity</h4>
            <p className="text-blue-900">
              No competitor rewards moment-to-moment action—a gap JPE can uniquely own.
            </p>
          </div>
        </div>
      </section>

      {/* 06 — Opportunity Areas */}
      <section className="py-20 px-4 md:px-0 border-b border-gray-200 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">06 — Opportunity Areas</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="font-semibold text-lg mb-2">Opportunity A</h3>
              <p>Build intrinsic motivation into the core loop. Reward effort and development, not just completion.</p>
            </div>
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="font-semibold text-lg mb-2">Opportunity B</h3>
              <p>Reduce intimidation of higher-grid puzzles. Make progression feel safe, supported, and achievable.</p>
            </div>
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="font-semibold text-lg mb-2">Opportunity C</h3>
              <p>Highlight mastery & improvement. Show players how they’re getting better.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 07 — Concept Direction */}
      <section className="py-20 px-4 md:px-0 border-b border-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">07 — Concept Direction</h2>
          <p className="mb-6">
            We explored systems that could: reward early behavior, normalize higher grid transitions, highlight progress, motivate long-term play
          </p>
          <ul className="list-disc ml-6 text-gray-700 mb-6">
            <li>Adaptive difficulty cues</li>
            <li>Micro-goals inside puzzles</li>
            <li>Personalized puzzle recommendations</li>
            <li>Soft nudges toward higher grids</li>
            <li>Mastery-based milestone rewards</li>
          </ul>
          <div className="p-6 bg-green-50 border-l-4 border-green-400 rounded mb-6">
            <h4 className="font-semibold text-green-800 mb-2">But the concept that best addressed all problem areas was:</h4>
            <p className="text-green-900 text-lg font-bold">→ Token-Based Leaderboard System</p>
          </div>
          <div className="w-full h-32 bg-gray-100 rounded-lg flex items-center justify-center border border-gray-300">
            {/* VISUAL HERE: token flow, leaderboard mock */}
            <span className="text-gray-400">[VISUAL HERE]</span>
          </div>
        </div>
      </section>

      {/* 08 — Why Leaderboard? */}
      <section className="py-20 px-4 md:px-0 border-b border-gray-200 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">08 — Why Leaderboard?</h2>
          <div className="mb-6">
            <h3 className="font-semibold text-lg mb-2">Not for competition — for intrinsic motivation.</h3>
            <p>
              While traditional leaderboards drive social competition, this one was conceived to drive:
              <ul className="list-disc ml-6 text-gray-700 mt-2">
                <li>intrinsic motivation to progress</li>
                <li>moment-to-moment reward cycles</li>
                <li>clear progress visibility</li>
              </ul>
            </p>
          </div>
          <div className="mb-6">
            <h3 className="font-semibold text-lg mb-2">Why token-based?</h3>
            <p>
              Unlike competitor systems that reward only completed puzzles, we chose tokens because:
              <br />
              <span className="block italic my-2">“I fix a piece → I earn a token. I fix more pieces → I earn more.”</span>
              This supports:
              <ul className="list-disc ml-6 text-gray-700 mt-2">
                <li>micro motivation</li>
                <li>steady dopamine loops</li>
                <li>sense of effort → reward</li>
                <li>Confidence building</li>
                <li>natural skill growth</li>
              </ul>
            </p>
          </div>
        </div>
      </section>

      {/* 09 — Problems → Solutions Framework */}
      <section className="py-20 px-4 md:px-0 border-b border-gray-200">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">09 — Problems → Solutions Framework</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow p-6 flex flex-col gap-2">
              <h3 className="font-semibold text-lg mb-2">Problem 01 : Players stalled at lower grids.</h3>
              <p>
                <span className="font-semibold">Solution 01:</span> Use token rewards tied to grid size to encourage gradual movement toward bigger puzzles, making progression guided and intrinsically motivating.
              </p>
              <div className="w-full h-24 bg-gray-100 rounded-lg flex items-center justify-center border border-gray-300 mt-2">
                {/* VISUAL HERE: Grid-size progression chart */}
                <span className="text-gray-400">[VISUAL HERE]</span>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow p-6 flex flex-col gap-2">
              <h3 className="font-semibold text-lg mb-2">Problem 02 : No long-term motivation loop</h3>
              <p>
                <span className="font-semibold">Solution 02:</span> Introduce a weekly leaderboard using token accumulation to create goal-oriented, habit-forming play without changing core gameplay.
              </p>
              <div className="w-full h-24 bg-gray-100 rounded-lg flex items-center justify-center border border-gray-300 mt-2">
                {/* VISUAL HERE: leaderboard cycle diagram */}
                <span className="text-gray-400">[VISUAL HERE]</span>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow p-6 flex flex-col gap-2">
              <h3 className="font-semibold text-lg mb-2">Problem 03 : No mid-puzzle reinforcement</h3>
              <p>
                <span className="font-semibold">Solution 04:</span> Reward effort by giving tokens for pieces fixed. This builds momentum and reduces mid-puzzle abandonment.
              </p>
              <div className="w-full h-24 bg-gray-100 rounded-lg flex items-center justify-center border border-gray-300 mt-2">
                {/* VISUAL HERE: Token burst animation */}
                <span className="text-gray-400">[VISUAL HERE]</span>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow p-6 flex flex-col gap-2">
              <h3 className="font-semibold text-lg mb-2">Problem 04 : Newbies were stuck in low-engagement loops</h3>
              <p>
                <span className="font-semibold">Solution 05:</span> Use reward mechanics to gently push players toward “pro-like” behaviours—higher grids, longer sessions, completing puzzles—without altering gameplay.
              </p>
              <div className="w-full h-24 bg-gray-100 rounded-lg flex items-center justify-center border border-gray-300 mt-2">
                {/* VISUAL HERE: Newbie vs. Pro engagement chart */}
                <span className="text-gray-400">[VISUAL HERE]</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10 — The Leaderboard MVP (50% Rollout) */}
      <section className="py-20 px-4 md:px-0 border-b border-gray-200 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">10 — The Leaderboard MVP (50% Rollout)</h2>
          <div className="w-full h-32 bg-gray-100 rounded-lg flex items-center justify-center border border-gray-300 mb-6">
            {/* VISUAL HERE: Leaderboard Wireframe / Token flow diagram / UX screens */}
            <span className="text-gray-400">[VISUAL HERE]</span>
          </div>
          <ul className="list-disc ml-6 text-gray-700 mb-4">
            <li>Instant rewards on piece fix</li>
            <li>Soft competition, zero pressure</li>
            <li>Encourages mastery behaviors</li>
            <li>Adds long-term goals</li>
            <li>Scalable & event-ready</li>
          </ul>
        </div>
      </section>

      {/* 11 — Early Results */}
      <section className="py-20 px-4 md:px-0 border-b border-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">11 — Early Results</h2>
          <div className="w-full h-32 bg-gray-100 rounded-lg flex items-center justify-center border border-gray-300 mb-6">
            {/* VISUAL HERE: before/after graph or conversion bar chart */}
            <span className="text-gray-400">[VISUAL HERE]</span>
          </div>
          <ul className="list-disc ml-6 text-gray-700">
            <li>Session time: +[27 % (44 mins to 56 mins)]</li>
            <li>Puzzle solve rate: +[5 % (65% to 70%)]</li>
            <li>Higher grid start ratio: +[2.5% (33% to 35.5%)]</li>
            <li>D7/D1 Ratio: +[14.6 % (41% to 48%)]</li>
          </ul>
        </div>
      </section>

      {/* 12 — Final Design System & Visuals */}
      <section className="py-20 px-4 md:px-0 border-b border-gray-200 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">12 — Final Design System & Visuals</h2>
          <ul className="list-disc ml-6 text-gray-700 mb-6">
            <li>Leaderboard Home</li>
            <li>Tokens Flow</li>
            <li>Progression Milestones</li>
            <li>Reward Ribbons</li>
            <li>Celebration Moments</li>
            <li>Grid size progression prompts</li>
          </ul>
          <div className="w-full h-40 bg-gray-100 rounded-lg flex items-center justify-center border border-gray-300">
            {/* VISUAL HERE: VISUAL_PLACEHOLDER_BLOCK */}
            <span className="text-gray-400">[VISUAL HERE]</span>
          </div>
        </div>
      </section>

      {/* 13 — Why this solution works? */}
      <section className="py-20 px-4 md:px-0 border-b border-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">13 — Why this solution works?</h2>
          <ul className="list-disc ml-6 text-gray-700">
            <li>Strengthens intrinsic motivation: Rewards effort, not pressure.</li>
            <li>Creates progression: Weekly loops = soft leveling system.</li>
            <li>Drives natural learning: More fixes → more skill → higher confidence.</li>
            <li>Reduces intimidation: Visible growth encourages trying bigger puzzles.</li>
          </ul>
        </div>
      </section>

      {/* 14 — Next Steps */}
      <section className="py-20 px-4 md:px-0 border-b border-gray-200 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">14 — Next Steps</h2>
          <ul className="list-disc ml-6 text-gray-700">
            <li>Full global rollout</li>
            <li>Explore bot-seeded leaderboard tiers</li>
            <li>Build sustainable daily/weekly goals</li>
            <li>Personalize progression pathways</li>
          </ul>
        </div>
      </section>

      {/* 15 — Closing Summary */}
      <section className="py-20 px-4 md:px-0">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">15 — Closing Summary</h2>
          <p className="text-lg text-gray-800">
            I transformed Jigsaw Puzzle Explorer’s progression model by turning moment-to-moment play into a system of visible growth and intrinsic motivation—driving measurable improvements in engagement, retention, and player confidence.
          </p>
          <Link to="/" className="inline-block mt-10 px-6 py-3 bg-black text-white rounded-full font-semibold shadow hover:bg-gray-900 transition">
            ← Back to Home
          </Link>
        </div>
      </section>
    </div>
  );
}