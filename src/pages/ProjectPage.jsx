import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { MdSportsEsports, MdPsychology, MdLeaderboard, MdTimeline, MdRecordVoiceOver, MdCalendarToday, MdGroups, MdFavorite, MdTrendingUp, MdSchool, MdVisibility } from "react-icons/md";
import Button from "../components/Button";

export default function ProjectPage() {
  const [atBottom, setAtBottom] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    function handleScroll() {
      if (!footerRef.current) return;
      const footerRect = footerRef.current.getBoundingClientRect();
      // Increase the buffer to avoid flicker
      setAtBottom(footerRect.top < window.innerHeight - 120);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="project-case-study bg-white text-black">
      {/* Fixed Back to Home button (top right) */}
      {!atBottom && (
        <div
          className="fixed right-8 z-50"
          style={{ top: 88, justifyContent: "center" }} // removed width
        >
          <Link
            to="/"
            className="flex items-center gap-2 bg-gray-100 text-gray-800 hover:bg-gray-200 shadow-md font-semibold px-6 py-3 rounded-full transition"
            // removed width style
          >
            <span className="text-xl">&#8592;</span>
            Back to Home
          </Link>
        </div>
      )}

      {/* Hero Section */}
      <section className="hero-section py-16 px-4 md:px-0 border-b border-gray-200">
        <div className="w-full max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-left">
            Driving Player Progression in Casual Puzzle Games
          </h1>
          <h2 className="text-xl md:text-2xl font-normal mb-6 text-left text-gray-800">
            A data-informed UX case study
          </h2>
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
              <span className="w-5 h-5 bg-gray-300 rounded-full flex items-center justify-center text-xs font-bold overflow-hidden">
                <img
                  src="/images/psg/Icon-PSG.png" 
                  alt="Playsimple Games Logo"
                  className="w-full h-full object-cover"
                />
              </span>
              Playsimple Games
            </span>
            <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
              <MdCalendarToday className="text-base align-middle" />
              July - Sept 2025
            </span>
            <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
              <MdGroups className="text-base align-middle" />
              UX, Product, Game Design, Analysts, UI, Developers
            </span>
          </div>
          <div className="w-full">
            <div className="w-full h-64 md:h-80 bg-gray-100 rounded-xl flex items-center justify-center border border-gray-300 mb-4 overflow-hidden">
              {/* HERO VISUAL */}
              <img
                src="/images/psg/Hero-PSG.png"
                alt="Hero Visual"
                className="w-full h-full object-cover"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">D7/D1 Retention ↑</span>
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">Session Time ↑</span>
            <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-semibold">Higher Grid Starts ↑</span>
            <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold">Puzzle Completion Rates ↑</span>
          </div>
          <div className="w-full">
            <p className="mt-2 text-lg text-gray-800">
              I helped improve retention and engagement for <span className="font-semibold">Jigsaw Puzzles</span> by identifying why players stalled early, pinpointing the psychological blockers behind low progression, and designing a motivation-driven reward system that encourages natural learning and long-term play.
            </p>
          </div>
        </div>
      </section>

      {/* 01 — Context + Business Goal */}
      <section className="py-20 px-4 md:px-0 border-b border-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-left">01 — Context + Business Goal</h2>
          {/* Top half: About Jigsaw + features */}
          <div className="flex flex-row gap-6 mb-6">
            {/* Game logo */}
            <div className="flex-shrink-0">
              <div className="relative w-48 h-48 rounded-2xl overflow-hidden bg-gray-100 flex items-center justify-center border border-gray-300">
                <img
                  src="/images/psg/AppIcon-PSG.png"
                  alt="Game Logo"
                  className="w-full h-full object-cover"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            {/* About Jigsaw + features */}
            <div className="flex-1 flex flex-col justify-center">
              <h3 className="text-xl font-bold mb-2 text-left">About Jigsaw Puzzle Explorer</h3>
              <p className="text-gray-800 text-base mb-3 text-left">
                PSGs’ Jigsaw rapidly rose from outside the top 25 to <span className="font-bold">fighting for #3 global spot</span> in the Jigsaw space in terms of revenue share, powered by PlaySimple’s deeply analytical approach to game design.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs font-semibold">6 grid sizes (36–200 pieces)</span>
                <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs font-semibold">13 categories, 12k+ puzzles</span>
                <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs font-semibold">2 metas (Adventure, Stories)</span>
                <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs font-semibold">6 in-game power-ups</span>
              </div>
            </div>
          </div>
          {/* Bottom half: Who we build for & Business Goal */}
          <div className="flex flex-col md:flex-row gap-6 mt-8">
            <div className="flex-1">
              <h4 className="font-bold mb-1 text-left">Who we build for</h4>
              <ul className="list-disc ml-5 text-gray-700 text-base mb-2">
                <li>Casual players</li>
                <li>35–60 year old, 66% women</li>
                <li>Based in US, UK, Canada, Australia</li>
                <li>Motivated by relaxation and aesthetics</li>
                <li>Prefer low-pressure play</li>
              </ul>
            </div>
            <div className="flex-1 flex items-stretch">
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-5 flex items-center w-full">
                <div>
                  <h4 className="font-bold mb-1">Business Goal:</h4>
                  <p className="text-purple-900 font-medium">
                    Strengthen the game’s core health metrics (retention, engagement, and LTV) by reducing friction and motivating players to <span className="font-bold">transition into deeper, more rewarding gameplay loops.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Space */}
      <section className="py-20 px-4 md:px-0 bg-gray-50 border-b border-gray-200">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-left">02 — Problem Space</h2>
          <div className="mb-4">
            <h3 className="font-semibold text-lg mb-1 text-left">Initial Problem Statement</h3>
            <p className="text-gray-800 mb-6 text-left">
              Identify key moments when players lose momentum, and design interventions to reduce friction and sustain long-term engagement.
            </p>
            <div className="w-full h-40 rounded-xl flex items-center justify-center mb-8 overflow-hidden">
              <div className="flex w-full h-full gap-3">
                <div className="h-full w-[55%] bg-white rounded-xl overflow-hidden shadow border border-gray-200 flex items-center justify-center">
                  <img
                    src="/images/psg/Starts-PSG.png"
                    alt="Problem Visual 1"
                    className="w-full h-full object-cover"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="h-full w-[15%] bg-white rounded-xl overflow-hidden shadow border border-gray-200 flex items-center justify-center">
                  <img
                    src="/images/psg/Funnel-PSG.png"
                    alt="Problem Visual 2"
                    className="w-full h-full object-cover"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="h-full w-[30%] bg-white rounded-xl overflow-hidden shadow border border-gray-200 flex items-center justify-center">
                  <img
                    src="/images/psg/UserInterviews-PSG.png"
                    alt="Problem Visual 3"
                    className="w-full h-full object-cover"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
            </div>
            {/* Blockers */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow p-6">
                <h4 className="font-bold text-base mb-1">No linear progression system</h4>
                <p className="text-gray-700 text-sm">Players lacked a sense of mastery or improvement.</p>
              </div>
              <div className="bg-white rounded-xl shadow p-6">
                <h4 className="font-bold text-base mb-1">Intimidation</h4>
                <p className="text-gray-700 text-sm">Higher puzzles looked harder than they actually were.</p>
              </div>
              <div className="bg-white rounded-xl shadow p-6">
                <h4 className="font-bold text-base mb-1">No long-term motivation</h4>
                <p className="text-gray-700 text-sm">Players didn’t see progress.</p>
              </div>
              <div className="bg-white rounded-xl shadow p-6">
                <h4 className="font-bold text-base mb-1">No push toward higher grid sizes</h4>
                <p className="text-gray-700 text-sm">Players stayed “stuck”.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research & Discovery */}
      <section className="py-20 px-4 md:px-0 border-b border-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">03 — Research & Discovery</h2>
          <div className="mb-6">
            <h3 className="font-semibold text-lg mb-2 text-left text-gray-900">Methods</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-2">
            <div className="bg-white rounded-xl shadow p-4 flex items-center gap-3">
              <MdSportsEsports className="text-blue-500 text-2xl" />
              <span className="font-semibold">Gameplay Analysis</span>
            </div>
            <div className="bg-white rounded-xl shadow p-4 flex items-center gap-3">
              <MdPsychology className="text-green-500 text-2xl" />
              <span className="font-semibold">Behavioral Study</span>
            </div>
            <div className="bg-white rounded-xl shadow p-4 flex items-center gap-3">
              <MdLeaderboard className="text-purple-500 text-2xl" />
              <span className="font-semibold">Competitor Benchmarking</span>
            </div>
            <div className="bg-white rounded-xl shadow p-4 flex items-center gap-3">
              <MdTimeline className="text-yellow-500 text-2xl" />
              <span className="font-semibold">Funnel & Cohort Analysis</span>
            </div>
            <div className="bg-white rounded-xl shadow p-4 flex items-center gap-3">
              <MdRecordVoiceOver className="text-pink-500 text-2xl" />
              <span className="font-semibold">User Interviews</span>
            </div>
          </div>
        </div>
      </section>

      {/* Key Insights */}
      <section className="py-20 px-4 md:px-0 border-b border-gray-200 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">04 — Key Insights</h2>
          <div className="w-full h-64 bg-gray-100 rounded-lg flex items-center justify-center border border-gray-300 mb-8 overflow-hidden">
            <img
              src="/images/psg/Bucket-PSG.png"
              alt="Key Insights Visual"
              className="w-full h-full object-cover"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left column: Insight 1 & 3 */}
            <div className="flex flex-col gap-8">
              {/* Insight 1 */}
              <div className="bg-white rounded-xl shadow p-6">
                <h3 className="font-semibold text-lg mb-2">Insight 1 — Players fell into 3 behavioral types</h3>
                <ul className="list-disc ml-6 text-gray-700 mb-2">
                  <li>Newbies (6–8 grids)</li>
                  <li>Transition (mix of low + high grids)</li>
                  <li>Pro (10–20 grids)</li>
                </ul>
                <p className="text-gray-700">Newbies formed the largest group—but had the weakest engagement.</p>
              </div>
              {/* Insight 3 */}
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
            </div>
            {/* Right column: Insight 2, 4, 5 */}
            <div className="flex flex-col gap-8">
              {/* Insight 2 */}
              <div className="bg-white rounded-xl shadow p-6">
                <h3 className="font-semibold text-lg mb-2">Insight 2 — Motivation must be intrinsic</h3>
                <ul className="list-disc ml-6 text-gray-700 mb-2">
                  <li>Players who come for relaxation avoid pressure-based challenges.</li>
                  <li>They respond best to: instant gratification, effort-based rewards, natural learning</li>
                </ul>
              </div>
              {/* Insight 4 */}
              <div className="bg-white rounded-xl shadow p-6">
                <h3 className="font-semibold text-lg mb-2">Insight 4 — Higher grids are intimidating</h3>
                <p className="text-gray-700 mb-2">
                  Players hesitate to start bigger puzzles—even when performance data shows they are capable.
                </p>
              </div>
              {/* Insight 5 */}
              <div className="bg-white rounded-xl shadow p-6">
                <h3 className="font-semibold text-lg mb-2">Insight 5 — No progression layer exists</h3>
                <ul className="list-disc ml-6 text-gray-700">
                  <li>Non-linear gameplay = no milestones</li>
                  <li>No sense of leveling</li>
                  <li>No perception of growth</li>
                </ul>
                <p className="text-gray-700">Players didn’t feel like they were “getting better”.</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Opportunity Areas */}
      <section className="py-20 px-4 md:px-0 border-b border-gray-200 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">05 — Opportunity Areas</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-pink-50 border border-pink-200 rounded-xl p-6 flex flex-col items-start">
              <div className="flex items-center gap-2 mb-2">
                <MdFavorite className="text-2xl text-pink-500" />
                <span className="font-bold text-pink-800">Opportunity A</span>
              </div>
              <div className="text-gray-700 font-medium mb-1">Build intrinsic motivation into the core loop.</div>
              <div className="text-gray-600 text-sm">Reward effort and development, not just completion.</div>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 flex flex-col items-start">
              <div className="flex items-center gap-2 mb-2">
                <MdVisibility className="text-2xl text-purple-500" />
                <span className="font-bold text-purple-800">Opportunity B</span>
              </div>
              <div className="text-gray-700 font-medium mb-1">Reduce intimidation of higher-grid puzzles.</div>
              <div className="text-gray-600 text-sm">Make progression feel safe, supported, and achievable.</div>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-xl p-6 flex flex-col items-start">
              <div className="flex items-center gap-2 mb-2">
                <MdSchool className="text-2xl text-green-600" />
                <span className="font-bold text-green-800">Opportunity C</span>
              </div>
              <div className="text-gray-700 font-medium mb-1">Highlight mastery & improvement.</div>
              <div className="text-gray-600 text-sm">Show players how they’re getting better.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Competitor Benchmarking */}
      <section className="py-20 px-4 md:px-0 border-b border-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">06 — Competitor Benchmarking</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-start">
              <div className="w-full h-98 rounded-lg flex items-center justify-center mb-4 overflow-hidden">
                <img
                  src="/images/psg/Scapes2-PSG.png"
                  alt="Oakever Visual"
                  className="w-full h-full object-cover"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <h3 className="font-semibold text-lg mb-2">Oakever – Jigsawscapes</h3>
            </div>
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-start">
              <div className="w-full h-98 rounded-lg flex items-center justify-center mb-4 overflow-hidden">
                <img
                  src="/images/psg/EZB2-PSG.png"
                  alt="EasyBrain Visual"
                  className="w-full h-full object-cover"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <h3 className="font-semibold text-lg mb-2">EasyBrain – Jigsaw Puzzles</h3>
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


      {/* Concept Direction */}
      <section className="py-20 px-4 md:px-0 border-b border-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">07 — Concept Direction</h2>
          <p className="mb-6">
            We explored systems that could: reward early behavior, normalize higher grid transitions, highlight progress, motivate long-term play
          </p>
          <p className="text-xl mb-6 font-semibold">
            Diverged to
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 font-semibold">
              Adaptive difficulty cues
            </div>
            <div className="bg-green-50 border border-green-200 rounded-xl p-4 font-semibold">
              Micro-goals inside puzzles
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 font-semibold">
              Personalized puzzle recommendations
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 font-semibold">
              Soft nudges toward higher grids
            </div>
            <div className="bg-pink-50 border border-pink-200 rounded-xl p-4 font-semibold">
              Mastery-based milestone rewards
            </div>
            <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-4 font-semibold">
              Progress-based reward system (leaderboard)
            </div>
            <p className="text-xl mb-2 font-semibold">
              Converged upon
            </p>
          </div>
          <div className="w-full  bg-gray-100 rounded-lg flex items-center justify-center border border-gray-300 overflow-hidden">
            <img
              src="/images/psg/Converged-PSG.png"
              alt="Concept Direction Visual"
              className="w-full h-full object-cover"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      {/* Why Leaderboard? */}
      <section className="py-20 px-4 md:px-0 border-b border-gray-200 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">08 — Why Leaderboard?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="bg-white rounded-2xl shadow p-8 flex flex-col h-full border border-blue-100">
              <div className="flex items-center gap-2 mb-4">
                <span className="inline-block w-3 h-3 bg-blue-400 rounded-full"></span>
                <h3 className="font-bold text-lg text-blue-900">Not for competition—for intrinsic motivation</h3>
              </div>
              <p className="mb-4 text-gray-700">
                While traditional leaderboards drive social competition, this one was conceived to drive:
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 bg-blue-400 rounded-full"></span>
                  <span className="text-blue-700 font-medium">Intrinsic motivation to progress</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 bg-blue-400 rounded-full"></span>
                  <span className="text-blue-700 font-medium">Moment-to-moment reward cycles</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 bg-blue-400 rounded-full"></span>
                  <span className="text-blue-700 font-medium">Clear progress visibility</span>
                </li>
              </ul>
            </div>
            {/* Right Column */}
            <div className="bg-white rounded-2xl shadow p-8 flex flex-col h-full border border-indigo-100">
              <div className="flex items-center gap-2 mb-4">
                <span className="inline-block w-3 h-3 bg-indigo-400 rounded-full"></span>
                <h3 className="font-bold text-lg text-indigo-900">Why token-based?</h3>
              </div>
              <span className="block italic text-indigo-700 mb-4 text-base">“I fix a piece → I earn a token. I fix more pieces → I earn more.”</span>
              <p className="mb-2 text-gray-700">Unlike competitor systems that reward only completed puzzles, we chose tokens because:</p>
              <ul className="space-y-2 mt-2">
                <li className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 bg-indigo-400 rounded-full"></span>
                  <span className="text-indigo-700 font-medium">Micro motivation</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 bg-indigo-400 rounded-full"></span>
                  <span className="text-indigo-700 font-medium">Steady dopamine loops</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 bg-indigo-400 rounded-full"></span>
                  <span className="text-indigo-700 font-medium">Sense of effort → reward</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 bg-indigo-400 rounded-full"></span>
                  <span className="text-indigo-700 font-medium">Confidence building</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 bg-indigo-400 rounded-full"></span>
                  <span className="text-indigo-700 font-medium">Natural skill growth</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Problems → Solutions Framework */}
      <section className="py-20 px-4 md:px-0 border-b border-gray-200">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">09 — Problems → Solutions Framework</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow p-6 flex flex-col gap-2">
              <h3 className="font-semibold text-lg mb-2">Problem 01 : Players stalled at lower grids.</h3>
              <p>
                <span className="font-semibold">Solution:</span> Use token rewards tied to grid size to encourage gradual movement toward bigger puzzles, making progression guided and intrinsically motivating.
              </p>
              <div className="w-full bg-gray-100 rounded-lg flex items-center justify-center border border-gray-300 mt-2 overflow-hidden">
                <img
                  src="/images/psg/Solution1-PSG.png"
                  alt="Problems Solutions Visual"
                  className="w-full h-full object-cover"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div className="bg-white rounded-xl shadow p-6 flex flex-col gap-2">
              <h3 className="font-semibold text-lg mb-2">Problem 02 : No long-term motivation loop</h3>
              <p>
                <span className="font-semibold">Solution:</span> Introduce a weekly leaderboard using token accumulation to create goal-oriented, habit-forming play without changing core gameplay.
              </p>
              <div className="w-full bg-gray-100 rounded-lg flex items-center justify-center border border-gray-300 mt-2 overflow-hidden">
                <img
                  src="/images/psg/Solution2-PSG.png"
                  alt="Problems Solutions Visual"
                  className="w-full h-full object-cover"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div className="bg-white rounded-xl shadow p-6 flex flex-col gap-2">
              <h3 className="font-semibold text-lg mb-2">Problem 03 : No mid-puzzle reinforcement</h3>
              <p>
                <span className="font-semibold">Solution:</span> Reward effort by giving tokens for pieces fixed. This builds momentum and reduces mid-puzzle abandonment.
              </p>
              <div className="w-full bg-gray-100 rounded-lg flex items-center justify-center border border-gray-300 mt-2 overflow-hidden">
                <img
                  src="/images/psg/Solution3-PSG.png"
                  alt="Problems Solutions Visual"
                  className="w-full h-full object-cover"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div className="bg-white rounded-xl shadow p-6 flex flex-col gap-2">
              <h3 className="font-semibold text-lg mb-2">Problem 04 : Newbies were stuck in low-engagement loops</h3>
              <p>
                <span className="font-semibold">Solution:</span> Use reward mechanics to gently push players toward “pro-like” behaviours—higher grids, longer sessions, completing puzzles—without altering gameplay.
              </p>
              <div className="w-full bg-gray-100 rounded-lg flex items-center justify-center border border-gray-300 mt-2 overflow-hidden">
                <img
                  src="/images/psg/Solution4-PSG.png"
                  alt="Problems Solutions Visual"
                  className="w-full h-full object-cover"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Leaderboard MVP (50% Rollout) */}
      <section className="py-20 px-4 md:px-0 border-b border-gray-200 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">10 — The Leaderboard MVP (50% Rollout)</h2>
          <div className="w-full bg-gray-100 rounded-lg flex items-center justify-center border border-gray-300 mb-6 overflow-hidden">
            <img
              src="/images/psg/MVP-PSG.png"
              alt="Leaderboard MVP Visual"
              className="w-full h-full object-cover"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      {/* Early Results */}
      <section className="py-20 px-4 md:px-0 border-b border-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">11 — Early Results</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-center flex flex-col items-center">
              <img
                src="/images/psg/Results1-PSG.png"
                alt="Session Time"
                className="w-full mb-6 object-contain"
              />
              <div className="text-3xl font-bold text-green-700 mb-1">+27%</div>
              <div className="text-s text-green-700 font-semibold mb-1">Session time<br />
              <span className="text-xs text-gray-700 font-mono">44 → 56 mins</span></div>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-center flex flex-col items-center">
              <img
                src="/images/psg/Results2-PSG.png"
                alt="Puzzle Solve Rate"
                className="w-full mb-6 object-contain"
              />
              <div className="text-3xl font-bold text-blue-700 mb-1">+5%</div>
              <div className="text-s text-blue-700 font-semibold mb-1">Puzzle solve rate<br />
              <span className="text-xs text-gray-700 font-mono">65% → 70%</span></div>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 text-center flex flex-col items-center">
              <img
                src="/images/psg/Results3-PSG.png"
                alt="Higher Grid Players"
                className="w-full mb-6 object-contain"
              />
              <div className="text-3xl font-bold text-yellow-700 mb-1">+2.5%</div>
              <div className="text-s text-yellow-700 font-semibold mb-1">Higher Grid players<br />
              <span className="text-xs text-gray-700 font-mono">33% → 35.5%</span></div>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 text-center flex flex-col items-center">
              <img
                src="/images/psg/Results4-PSG.png"
                alt="D7/D1 Ratio"
                className="w-full mb-6 object-contain"
              />
              <div className="text-3xl font-bold text-purple-700 mb-1">+14.6%</div>
              <div className="text-s text-purple-700 font-semibold mb-1">D7/D1 Ratio<br />
              <span className="text-xs text-gray-700 font-mono">41% → 48%</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Design System & Visuals */}
      <section className="py-20 px-4 md:px-0 border-b border-gray-200 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">12 — Final Design System & Visuals</h2>
          <div className="w-full rounded-lg flex items-center justify-center overflow-hidden">
            <img
              src="/images/psg/DS-PSG.png"
              alt="Final Design System Visual"
              className="w-full h-full object-cover"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      {/* Why this solution works? */}
      <section className="py-20 px-4 md:px-0 border-b border-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">13 — Why this solution works?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex items-start gap-4 bg-pink-50 border border-pink-200 rounded-xl p-5">
              <MdFavorite className="text-3xl text-pink-500 mt-1" />
              <div>
                <div className="font-semibold text-pink-800 mb-1">Strengthens intrinsic motivation</div>
                <div className="text-gray-700 text-sm">Rewards effort, not pressure.</div>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-blue-50 border border-blue-200 rounded-xl p-5">
              <MdTrendingUp className="text-3xl text-blue-500 mt-1" />
              <div>
                <div className="font-semibold text-blue-800 mb-1">Creates progression</div>
                <div className="text-gray-700 text-sm">Weekly loops = soft leveling system.</div>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-green-50 border border-green-200 rounded-xl p-5">
              <MdSchool className="text-3xl text-green-600 mt-1" />
              <div>
                <div className="font-semibold text-green-800 mb-1">Drives natural learning</div>
                <div className="text-gray-700 text-sm">More fixes → more skill → higher confidence.</div>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-purple-50 border border-purple-200 rounded-xl p-5">
              <MdVisibility className="text-3xl text-purple-500 mt-1" />
              <div>
                <div className="font-semibold text-purple-800 mb-1">Reduces intimidation</div>
                <div className="text-gray-700 text-sm">Visible growth encourages trying bigger puzzles.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-20 px-4 md:px-0 border-b border-gray-200 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">14 — Next Steps</h2>
          <ul className="list-disc ml-6 text-gray-700">
            <li>Full global rollout</li>
            <li>Explore bot-seeded leaderboard tiers</li>
            <li>Build sustainable long-term goals</li>
            <li>Personalize progression pathways</li>
          </ul>
        </div>
      </section>

      {/* Closing Summary */}
      <section className="py-20 pb-8 px-4 md:px-0">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">15 — Closing Summary</h2>
          <p className="text-lg text-gray-800">
            I transformed Jigsaw Puzzle Explorer’s progression model by turning moment-to-moment play into a system of visible growth and intrinsic motivation—driving measurable improvements in engagement, retention, and player confidence.
          </p>
        </div>
      </section>


      <footer
        ref={footerRef}
        className="w-full py-8 text-center text-gray-400 text-sm font-medium mt-[-1rem]"
      >
        Last updated in November, 2025.
      </footer>
    </div>
  );
}