import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import ContributionSlideshow from "../components/ContributionSlideshow";
import {
  MdGroups,
  MdCalendarToday,
  MdLightbulb,
  MdTimeline,
  MdEditNote,
  MdChat,
  MdMeetingRoom,
  MdCheckCircle,
  MdRocketLaunch,
  MdOutlineDoneAll,
  MdSummarize,
  MdVisibilityOff,
  MdBlock,
  MdPsychology,
  MdHelpOutline,
  MdSearch,
  MdShuffle,
  MdDesignServices,
  MdVisibility,
  MdArrowBack, 
} from "react-icons/md";
import icMemo1 from "../assets/contributions/ic-memo-1.svg";
import icMemo2 from "../assets/contributions/ic-memo-2.svg";
import icMemo3 from "../assets/contributions/ic-memo-3.svg";
import icMemo4 from "../assets/contributions/ic-memo-4.svg";
import icMemo5 from "../assets/contributions/ic-memo-5.svg";
import chatDeal1 from "../assets/contributions/chat-deal-1.svg";
import chatDeal2 from "../assets/contributions/chat-deal-2.svg";
import chatDeal3 from "../assets/contributions/chat-deal-3.svg";
import chatDeal4 from "../assets/contributions/chat-deal-4.svg";
import chatDeal5 from "../assets/contributions/chat-deal-5.svg";
import meetingPrep1 from "../assets/contributions/meeting-prep-1.svg";
import meetingPrep2 from "../assets/contributions/meeting-prep-2.svg";
import meetingPrep3 from "../assets/contributions/meeting-prep-3.svg";
import meetingPrep4 from "../assets/contributions/meeting-prep-4.svg";

export default function AgenticAIProjectPage() {
  return (
    <div className="bg-white text-black">
          {/* Top Back Button */}
          <div className="w-full max-w-5xl mx-auto pt-8 px-4 md:px-0">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-700 font-semibold shadow transition mb-8"
            >
              <span aria-hidden="true" className="text-xl">←</span>
              Back to Home
            </Link>
          </div>

      {/* Hero Section */}
      <section className="py-16 px-4 md:px-0 border-b border-gray-200">
        <div className="w-full max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-left">
            Making AI Work for Private Equity Analysts
          </h1>
          <h2 className="text-xl md:text-2xl font-normal mb-6 text-left text-gray-800">
            A UX case study on designing agentic workflows for private markets.
          </h2>
          <div className="w-full bg-gray-100 rounded-xl flex items-center justify-center border border-gray-300 mb-4 overflow-hidden">
            <img
              src="/images/ip/Hero-IP.png"
              alt="Agentic AI Hero Visual"
              className="w-full h-full object-cover"
              style={{ objectFit: "cover" }}
            />
          </div>
          {/* Company, Timeline, Team */}
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
              {/* Placeholder for company logo */}
              <span className="w-5 h-5 bg-blue-200 rounded-full flex items-center justify-center text-xs font-bold overflow-hidden">
                <img
                  src="/images/ip/Icon-IP.png"
                  alt="Company Logo"
                  className="w-full h-full object-cover"
                  style={{ objectFit: "cover" }}
                />
              </span>
              Infinite Possibilities
            </span>
            <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
              <MdCalendarToday className="text-base align-middle" />
              May–Sept 2025
            </span>
            <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
              <MdGroups className="text-base align-middle" />
              Founder, Product, UX, Engineering
            </span>
          </div>
          {/* Quick Summary */}
          <div className="bg-white rounded-xl shadow p-8 mb-6">
            <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-4 inline-block">
              Quick Summary
            </span>
            <p className="text-gray-900 text-lg font-medium mt-2">
              I designed the reporting tools, chat, and meeting-prep experiences for Deal Advisor Agent — translating an ambiguous vision into clear, trustworthy workflows PE analysts can actually use.
            </p>
          </div>
          {/* Impact Highlights */}
          <div className="bg-blue-50 border border-blue-100 rounded-2xl shadow-md p-8 mb-6">
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6 inline-block">
              Impact Highlights
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="flex flex-col items-center bg-white border border-blue-200 rounded-xl px-4 py-6 shadow-sm">
                <MdGroups className="text-blue-500 text-3xl mb-2" />
                <span className="font-semibold text-gray-800 text-center">
                  Clear agentic workflows<br />for deal teams
                </span>
              </div>
              <div className="flex flex-col items-center bg-white border border-blue-200 rounded-xl px-4 py-6 shadow-sm">
                <MdChat className="text-green-600 text-3xl mb-2" />
                <span className="font-semibold text-gray-800 text-center">
                  Chat-first interface<br />without losing capabilities
                </span>
              </div>
              <div className="flex flex-col items-center bg-white border border-blue-200 rounded-xl px-4 py-6 shadow-sm">
                <MdEditNote className="text-purple-600 text-3xl mb-2" />
                <span className="font-semibold text-gray-800 text-center">
                  Editable, traceable<br />IC memo UX
                </span>
              </div>
              <div className="flex flex-col items-center bg-white border border-blue-200 rounded-xl px-4 py-6 shadow-sm">
                <MdMeetingRoom className="text-indigo-500 text-3xl mb-2" />
                <span className="font-semibold text-gray-800 text-center">
                  Foundations for<br />meeting-prep agent
                </span>
              </div>
              <div className="flex flex-col items-center bg-white border border-blue-200 rounded-xl px-4 py-6 shadow-sm">
                <MdLightbulb className="text-yellow-500 text-3xl mb-2" />
                <span className="font-semibold text-gray-800 text-center">
                  Shaped early 0→1<br />product direction
                </span>
              </div>
              <div className="flex flex-col items-center bg-white border border-blue-200 rounded-xl px-4 py-6 shadow-sm">
                <MdTimeline className="text-pink-500 text-3xl mb-2" />
                <span className="font-semibold text-gray-800 text-center">
                  Scalable UX patterns<br />for enterprise use
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Context Section */}
      <section className="py-20 px-4 md:px-0 border-b border-gray-200 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">01 — Context</h2>
          <div className="flex flex-col gap-6">
            {/* Market & Constraints */}
            <div className="bg-white rounded-xl shadow p-6">
              <div className="font-semibold text-gray-800 mb-4 text-lg md:text-xl">
                Market & Constraints
              </div>
              <div className="mb-6">
                Agentic Private Markets (built by Infinite Possibilities) creates AI agents for private equity and venture capital teams — users who operate under:
              </div>
              <div className="flex flex-wrap gap-6 justify-center mb-4">
                <div className="flex flex-col items-center">
                  <div className="w-36 h-36 rounded-full bg-blue-50 flex flex-col items-center justify-center mb-2 border border-blue-100 shadow-sm">
                    <span className="text-blue-600 text-lg font-bold mb-1">1</span>
                    <span className="text-sm text-center text-gray-700 px-4">
                      Sparse early-stage information
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-36 h-36 rounded-full bg-blue-50 flex flex-col items-center justify-center mb-2 border border-blue-100 shadow-sm">
                    <span className="text-blue-600 text-lg font-bold mb-1">2</span>
                    <span className="text-sm text-center text-gray-700 px-4">
                      Aggressive timelines
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-36 h-36 rounded-full bg-blue-50 flex flex-col items-center justify-center mb-2 border border-blue-100 shadow-sm">
                    <span className="text-blue-600 text-lg font-bold mb-1">3</span>
                    <span className="text-sm text-center text-gray-700 px-4">
                      High-stakes decisions
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-36 h-36 rounded-full bg-blue-50 flex flex-col items-center justify-center mb-2 border border-blue-100 shadow-sm">
                    <span className="text-blue-600 text-lg font-bold mb-1">4</span>
                    <span className="text-sm text-center text-gray-700 px-4">
                      Strict expectations of traceability
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-gray-800 text-base">
                The platform supports 10,000+ concurrent users, making clarity essential.
              </p>
            </div>
            {/* Target Audience */}
            <div className="bg-white rounded-xl shadow p-6">
              <div className="font-semibold text-gray-800 mb-4 text-lg md:text-xl">
                Target Audience
              </div>
              <div className="flex flex-col md:flex-row items-center">
                {/* Illustration Placeholder */}
                <div className="flex-shrink-0 w-48  rounded-xl flex items-center justify-center mb-4 md:mb-0 md:mr-6 overflow-hidden">
                  <img
                    src="/images/ip/TA-IP.png"
                    alt="Analyst/Principal Illustration"
                    className="w-full h-full object-cover"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                {/* Audience Details */}
                <div className="flex-1 flex flex-col items-center md:items-start">
                  <span className="text-lg font-bold text-gray-900 mb-1 text-center md:text-left">
                    PE/VC Analysts & Principals
                  </span>
                  <span className="text-base text-gray-700 mb-2 text-center md:text-left">
                    Typically 30–50 years old
                  </span>
                  <ul className="list-disc ml-5 text-gray-700 text-base space-y-1 text-left">
                    <li>Highly analytical</li>
                    <li>Time-pressed</li>
                    <li>Skeptical of AI “magic”</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Market Gap */}
            <div className="bg-white rounded-xl shadow p-6">
              <div className="font-semibold text-gray-800 mb-4 text-lg md:text-xl">
                Market Gap
              </div>
              <div className="mb-4">
                <div className="flex items-start mb-2">
                  <span className="inline-block w-3 h-3 bg-red-400 rounded-full mt-2 mr-3"></span>
                  <div>
                    <span className="font-semibold text-gray-900">No agentic AI tools existed for private markets.</span>
                    <div className="text-gray-700 text-base">
                      Existing finance AI tools were dense and hard to use — even for experts — so we couldn’t adapt existing UX patterns.
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-2">
                <span className="font-semibold text-gray-900">We had to define new patterns for:</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
                  <div className="flex items-start bg-blue-50 rounded-lg px-4 py-2">
                    <MdPsychology className="text-blue-600 text-xl mt-1 mr-2" />
                    <span className="text-gray-800">How the agent reasons</span>
                  </div>
                  <div className="flex items-start bg-green-50 rounded-lg px-4 py-2">
                    <MdSearch className="text-green-600 text-xl mt-1 mr-2" />
                    <span className="text-gray-800">How it shows sources</span>
                  </div>
                  <div className="flex items-start bg-yellow-50 rounded-lg px-4 py-2">
                    <MdOutlineDoneAll className="text-yellow-600 text-xl mt-1 mr-2" />
                    <span className="text-gray-800">How analysts stay in control</span>
                  </div>
                  <div className="flex items-start bg-purple-50 rounded-lg px-4 py-2">
                    <MdShuffle className="text-purple-600 text-xl mt-1 mr-2" />
                    <span className="text-gray-800">How workflows adapt as deals evolve</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-gray-800 text-base">
                <span className="font-semibold">This is the foundation the rest of the design work was built on.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The UX Problem */}
      <section className="py-20 px-4 md:px-0 border-b border-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">02 — The UX Problem</h2>
          <div className="bg-white rounded-xl shadow p-8 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0 w-56 rounded-xl flex items-center justify-center mb-6 md:mb-0 overflow-hidden">
              <img
                src="/images/ip/BadAI-IP.png"
                alt="Analyst rejecting AI answers Illustration"
                className="w-full h-full object-cover"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="flex-1">
              <p className="text-xl font-semibold text-gray-900 mb-4">
                PE analysts don’t want “AI answers.” They need:
              </p>
              <ul className="space-y-2">
                <li>
                  <span className="font-medium text-blue-800">•</span>
                  <span className="ml-2 text-gray-800 font-medium">Clear reasoning</span>
                </li>
                <li>
                  <span className="font-medium text-blue-800">•</span>
                  <span className="ml-2 text-gray-800 font-medium">Transparent sources</span>
                </li>
                <li>
                  <span className="font-medium text-blue-800">•</span>
                  <span className="ml-2 text-gray-800 font-medium">Full editability</span>
                </li>
                <li>
                  <span className="font-medium text-blue-800">•</span>
                  <span className="ml-2 text-gray-800 font-medium">Control over the narrative</span>
                </li>
                <li>
                  <span className="font-medium text-blue-800">•</span>
                  <span className="ml-2 text-gray-800 font-medium">Repeatability and traceability</span>
                </li>
              </ul>
              <div className="p-4 bg-blue-50 border-l-4 border-blue-400 rounded mt-6">
                <span className="font-semibold text-blue-800">The real challenge:</span>
                <span className="text-gray-800 ml-2">
                  The hardest part wasn’t UI — it was structuring complex workflows for high-judgment decisions where AI must explain itself.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-20 px-4 md:px-0 border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            04 — Approach
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Step 1 */}
            <div className="flex flex-col items-center bg-white rounded-2xl shadow p-10">
              <div className="relative w-full flex flex-col items-center">
                <div className="w-full max-w-2xl h-72 bg-gray-300 rounded-2xl flex items-center justify-center mb-0 overflow-hidden">
                  <img
                    src="/images/ip/Step1-IP.png"
                    alt="Agentic AI Approach Visual"
                    className="w-full h-full object-cover"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div
                  className="absolute left-1/2"
                  style={{
                    top: "100%",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <div className="w-20 h-20 bg-blue-100 border-2 border-blue-200 rounded-full flex items-center justify-center shadow-md">
                    <span className="text-3xl font-bold text-blue-800" style={{ textShadow: "0 1px 2px #fff8" }}>1</span>
                  </div>
                </div>
              </div>
              <div className="mt-16 flex flex-col items-center">
                <span className="font-bold text-gray-900 mb-2 text-center text-xl">
                  Understanding workflows
                </span>
                <span className="text-base text-gray-600 text-center">
                  Founder discussions → sample IC memos → typical investment workflows → markup patterns. <br /> (And shadowing countless client calls.)
                </span>
              </div>
            </div>
            {/* Step 2 */}
            <div className="flex flex-col items-center bg-white rounded-2xl shadow p-10">
              <div className="relative w-full flex flex-col items-center">
                <div className="w-full max-w-2xl h-72 bg-gray-300 rounded-2xl flex items-center justify-center mb-0 overflow-hidden">
                  <img
                    src="/images/ip/Step2-IP.png"
                    alt="Agentic AI Approach Visual"
                    className="w-full h-full object-cover"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div
                  className="absolute left-1/2"
                  style={{
                    top: "100%",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <div className="w-20 h-20 bg-green-100 border-2 border-green-200 rounded-full flex items-center justify-center shadow-md">
                    <span className="text-3xl font-bold text-green-800" style={{ textShadow: "0 1px 2px #fff8" }}>2</span>
                  </div>
                </div>
              </div>
              <div className="mt-16 flex flex-col items-center">
                <span className="font-bold text-gray-900 mb-2 text-center text-xl">
                  Turning vague ideas into structured flows
                </span>
                <span className="text-base text-gray-600 text-center">
                  Every feature was mapped into clear steps, logic, and system behavior (before any UI) – bringing clarity from daily AI tools into high-stakes private-markets workflows. 
                </span>
              </div>
            </div>
            {/* Step 3 */}
            <div className="flex flex-col items-center bg-white rounded-2xl shadow p-10">
              <div className="relative w-full flex flex-col items-center">
                <div className="w-full max-w-2xl h-72 bg-gray-300 rounded-2xl flex items-center justify-center mb-0 overflow-hidden">
                  <img
                    src="/images/ip/Step3-IP.png"
                    alt="Agentic AI Approach Visual"
                    className="w-full h-full object-cover"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div
                  className="absolute left-1/2"
                  style={{
                    top: "100%",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <div className="w-20 h-20 bg-yellow-100 border-2 border-yellow-200 rounded-full flex items-center justify-center shadow-md">
                    <span className="text-3xl font-bold text-yellow-700" style={{ textShadow: "0 1px 2px #fff8" }}>3</span>
                  </div>
                </div>
              </div>
              <div className="mt-16 flex flex-col items-center">
                <span className="font-bold text-gray-900 mb-2 text-center text-xl">
                  Designing interaction patterns for dense information
                </span>
                <span className="text-base text-gray-600 text-center">
                  Inline controls, collapsible sections, regeneration loops, transparency cues.
                </span>
              </div>
            </div>
            {/* Step 4 */}
            <div className="flex flex-col items-center bg-white rounded-2xl shadow p-10">
              <div className="relative w-full flex flex-col items-center">
                <div className="w-full max-w-2xl h-72 bg-gray-300 rounded-2xl flex items-center justify-center mb-0 overflow-hidden">
                  <img
                    src="/images/ip/Step4-IP.png"
                    alt="Agentic AI Approach Visual"
                    className="w-full h-full object-cover"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div
                  className="absolute left-1/2"
                  style={{
                    top: "100%",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <div className="w-20 h-20 bg-purple-100 border-2 border-purple-200 rounded-full flex items-center justify-center shadow-md">
                    <span className="text-3xl font-bold text-purple-800" style={{ textShadow: "0 1px 2px #fff8" }}>4</span>
                  </div>
                </div>
              </div>
              <div className="mt-16 flex flex-col items-center">
                <span className="font-bold text-gray-900 mb-2 text-center text-xl">
                  High-fidelity prototypes to test logic
                </span>
                <span className="text-base text-gray-600 text-center">
                  Visualizing complex flows helped refine reasoning, catch missing states, and align expectations.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Contributions */}
      <section className="py-20 px-4 md:px-0 border-b border-gray-200 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            05 — Key Contributions
          </h2>
          <div className="grid grid-rows-1 md:rows-cols-3 gap-8 mb-8">
            {/* IC Memo & Preview Notes */}
            <div className="bg-white rounded-xl shadow p-6 flex flex-col gap-2">
              <div className="flex items-center gap-2 mb-2">
                <MdEditNote className="text-3xl text-blue-800" />
                <span className="font-bold text-blue-800 text-xl md:text-2xl">IC Memo & Preview Notes</span>
              </div>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold w-max mb-2">
                Shipped
              </span>
              <p className="text-gray-700 text-base mb-2 font-semibold">
                Designing a memo-experience analysts can trust.
              </p>
              <div className="text-gray-600 text-sm mb-2">
                <span className="font-semibold">Why this mattered: </span>
                IC memos are central to early deal conviction. Analysts need control, traceability, and the ability to iterate.
              </div>
              <ContributionSlideshow
                slides={[
                  {
                    image: icMemo1,
                    caption: "Inline references for source transparency",
                  },
                  {
                    image: icMemo2,
                    caption: "Add/remove/customize memo sections",
                  },
                  {
                    image: icMemo3,
                    caption: "Regenerate specific sections (not whole memos)",
                  },
                  {
                    image: icMemo4,
                    caption: "Update source files → reflect changes in memo",
                  },
                  {
                    image: icMemo5,
                    caption: "'Central vs feeder questions' to match real reasoning patterns",
                  },
                ]}
                interval={3500}
              />
            </div>
            {/* Chat-first Deal Advisor */}
            <div className="bg-white rounded-xl shadow p-6 flex flex-col gap-2">
              <div className="flex items-center gap-2 mb-2">
                <MdChat className="text-2xl text-green-800" />
                <span className="font-bold text-green-800 text-xl md:text-2xl">Chat-first Deal Advisor</span>
              </div>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold w-max mb-2">
                In development
              </span>
              <p className="text-gray-700 text-base mb-2 font-semibold">
                Redesigning a feature-heavy dashboard into a conversational workflow.
              </p>
              <div className="text-gray-600 text-sm mb-2">
                <span className="italic">
                  “Everyone’s chatting. Can we make Deal Advisor chat too?”
                </span>
              </div>
              <div className="text-gray-600 text-sm mb-2">
                <span className="font-semibold">Challenge: </span>
                how to support rich capabilities inside a chat environment without turning everything into long, unreadable messages.
              </div>
              <ContributionSlideshow
                slides={[
                  {
                    image: chatDeal1,
                    caption: "Structured cards instead of long messages",
                  },
                  {
                    image: chatDeal2,
                    caption: "Collapsible sections for readability",
                  },
                  {
                    image: chatDeal3,
                    caption: "Inline edit / regenerate / expand controls",
                  },
                  {
                    image: chatDeal4,
                    caption: "System actions separated from natural language",
                  },
                  {
                    image: chatDeal5,
                    caption: "Multi-user conversation handling & clear refinement loops",
                  },
                ]}
                interval={3500}
              />
            </div>
            {/* Management Meeting Prep Agent */}
            <div className="bg-white rounded-xl shadow p-6 flex flex-col gap-2">
              <div className="flex items-center gap-2 mb-2">
                <MdMeetingRoom className="text-3xl text-purple-800" />
                <span className="font-bold text-purple-800 text-xl md:text-2xl">Management Meeting Prep Agent</span>
              </div>
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-semibold w-max mb-2">
                Exploratory — parked
              </span>
              <p className="text-gray-700 text-base mb-2 font-semibold">
                Helping analysts prepare for, participate in, and synthesize management meetings.
              </p>
              <ContributionSlideshow
                slides={[
                  {
                    image: meetingPrep1,
                    caption: "Pre-meeting briefs",
                  },
                  {
                    image: meetingPrep2,
                    caption: "Note-taking tied to transcripts",
                  },
                  {
                    image: meetingPrep3,
                    caption: "Highlighting risks, insights, and follow-ups",
                  },
                  {
                    image: meetingPrep4,
                    caption: "Auto-generated summaries and action items",
                  },
                  // {
                  //   image: meetingPrep5,
                  //   caption: "Meeting-focused dashboard",
                  // },
                ]}
                interval={3500}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-20 px-4 md:px-0 border-b border-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">06 — Outcomes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
              <MdCheckCircle className="text-3xl text-green-600 mb-2" />
              <span className="font-semibold text-green-800 mb-1 text-center">
                Clearer, more transparent AI outputs
              </span>
              <span className="text-gray-700 text-sm text-center mt-1">
                Analysts could see sources, reasoning steps, and sections clearly — reducing uncertainty and increasing trust in AI-generated content.
              </span>
            </div>
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
              <MdRocketLaunch className="text-3xl text-yellow-600 mb-2" />
              <span className="font-semibold text-yellow-800 mb-1 text-center">
                Faster analyst workflows
              </span>
              <span className="text-gray-700 text-sm text-center mt-1">
                Key tasks like reviewing notes, regenerating sections, and iterating on memos became quicker through structured controls and predictable interactions.
              </span>
            </div>
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
              <MdPsychology className="text-3xl text-blue-600 mb-2" />
              <span className="font-semibold text-blue-800 mb-1 text-center">
                Stronger reasoning patterns for deal-work
              </span>
              <span className="text-gray-700 text-sm text-center mt-1">
                The system now guides analysts through more coherent, step-by-step analysis, mirroring how real investment decisions are formed.
              </span>
            </div>
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
              <MdTimeline className="text-3xl text-purple-600 mb-2" />
              <span className="font-semibold text-purple-800 mb-1 text-center">
                Foundation for scalable agentic UX
              </span>
              <span className="text-gray-700 text-sm text-center mt-1">
                The interaction patterns created here now serve as reusable building blocks for future agents, ensuring consistency as the platform expands.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Summary */}
      <section className="py-20 pb-8 px-4 md:px-0">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">07 — Closing Summary</h2>
          <p className="text-lg text-gray-800 mb-4">
            Private markets are complex, and so was the AI. My job was to turn that complexity into clarity.</p>
            <p className="text-lg text-gray-800 mb-4">By defining flows, constraints, and interaction rules, I shaped how the AI presented its reasoning, refined its outputs, and collaborated with analysts — making a high-judgment domain feel simple, transparent, and trust-worthy.
          </p>
          <Button as={Link} to="/" className="mt-10">
            ← Back to Home
          </Button>
        </div>
      </section>

    {/* Footer */}
      <footer className="w-full py-8 text-center text-gray-400 text-sm font-medium mt-[-1rem]">
        Last updated in November, 2025.
      </footer>
    </div>
  );
}