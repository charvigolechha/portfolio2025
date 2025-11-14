import React from "react";
import { Link } from "react-router-dom";

export default function AgenticAIProjectPage() {
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
              Agentic AI Workflows for Private Equity Teams
            </h1>
            <h2 className="text-xl md:text-2xl font-medium mb-6 text-center md:text-left">
              Designing usable agentic workflows for Private Equity & Venture Capital teams.
            </h2>
            <ul className="mb-6 text-base md:text-lg text-gray-700 space-y-1">
              <li>
                <span className="font-semibold">Role:</span> UX Designer
              </li>
              <li>
                <span className="font-semibold">Timeline:</span> May–Aug 2025
              </li>
              <li>
                <span className="font-semibold">Team:</span> Founder, Product, UX, Engineering
              </li>
            </ul>
            <div className="flex flex-wrap gap-4 mb-4">
              <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">Clear agentic workflows for deal analysis</span>
              <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">Chat-first interface</span>
              <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-semibold">Customizable IC memos</span>
              <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold">Meeting-prep foundations</span>
              <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-semibold">0→1 product direction</span>
            </div>
          </div>
          <div className="flex-1 flex justify-center items-center">
            {/* HERO VISUAL */}
            <div className="w-full max-w-md h-56 bg-gray-100 rounded-xl flex items-center justify-center border border-gray-300">
              {/* VISUAL HERE: A clean split-screen mock — left: chat-first agent; right: IC memo with inline refs. Subtle “agentic intelligence” glow. Minimal, premium aesthetic. */}
              <span className="text-gray-400 text-lg">[HERO VISUAL HERE]</span>
            </div>
          </div>
        </div>
        <p className="mt-10 max-w-3xl text-lg text-center text-gray-800">
          I designed the reporting, chat, and meeting-prep experiences for Deal Advisor Agent—turning undefined requirements into clear flows and interaction patterns that make complex PE decisions easier, faster, and more structured.
        </p>
      </section>

      {/* 01 — Context */}
      <section className="py-20 px-4 md:px-0 border-b border-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">01 — Context</h2>
          <div className="w-full h-32 bg-gray-100 rounded-lg flex items-center justify-center border border-gray-300 mb-6">
            {/* VISUAL HERE: clean 3-card strip showing: “Deal Advisor Agent,” “Chat Interface,” “IC Memo Preview. */}
            <span className="text-gray-400">[VISUAL HERE]</span>
          </div>
          <p className="mb-4">
            Agentic Private Markets builds AI agents for private equity & venture capital teams. These teams operate under:
          </p>
          <ul className="list-disc ml-6 text-gray-700 mb-4">
            <li>sparse early-stage information</li>
            <li>aggressive timelines</li>
            <li>high-stakes decisions</li>
            <li>strict expectations of traceability</li>
          </ul>
          <p className="mb-4">
            When I joined, the product was in an early 0→1 stage with:
          </p>
          <ul className="list-disc ml-6 text-gray-700 mb-4">
            <li>no comparable AI tools in the market</li>
            <li>no established UX patterns for agentic workflows</li>
            <li>complex analytical reasoning embedded in the tasks</li>
            <li>no direct access to users (PE professionals)</li>
          </ul>
          <p>
            My role was to help define the first usable workflows for analysts evaluating deals. The platform supports 10,000+ concurrent users, making clarity and workflow simplicity essential even in high-scale environments.
          </p>
        </div>
      </section>

      {/* 02 — My Role */}
      <section className="py-20 px-4 md:px-0 border-b border-gray-200 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">02 — My Role</h2>
          <p className="mb-4">
            As a UX Design Intern, I worked directly with the founder and product team to:
          </p>
          <ul className="list-disc ml-6 text-gray-700 mb-4">
            <li>understand private equity workflows (IC memos, deal reviews, meetings)</li>
            <li>translate ambiguous feature ideas into clear UX flows</li>
            <li>design high-fidelity screens and prototypes</li>
            <li>iterate frequently based on domain feedback</li>
          </ul>
        </div>
      </section>

      {/* 03 — Challenge */}
      <section className="py-20 px-4 md:px-0 border-b border-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">03 — Challenge</h2>
          <p className="mb-4">
            Designing for private markets came with constraints uncommon in typical AI UX:
          </p>
          <ul className="list-disc ml-6 text-gray-700 mb-4">
            <li>Analysts work with sparse and evolving information</li>
            <li>Workflows are non-linear and vary by fund</li>
            <li>Outputs must be editable, traceable, and defensible</li>
            <li>AI cannot hallucinate or obscure reasoning</li>
            <li>No pre-existing agentic workflows to reference</li>
          </ul>
          <div className="p-6 bg-red-50 border-l-4 border-red-400 rounded">
            <span className="font-semibold text-red-800">Core problem:</span>
            <span className="ml-2">
              How do you turn multi-step, high-judgment analytical work into a simple, trustworthy AI-assisted experience?
            </span>
          </div>
        </div>
      </section>

      {/* 04 — How I Approached the Problem? */}
      <section className="py-20 px-4 md:px-0 border-b border-gray-200 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">04 — How I Approached the Problem?</h2>
          <p className="mb-4">
            Without industry benchmarks, clarity became the foundation. My approach focused on four things:
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="font-semibold text-lg mb-2">1. Understanding workflows</h3>
              <p>
                Founder discussions → sample IC memos → typical investment workflows → markup patterns.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="font-semibold text-lg mb-2">2. Turning vague ideas into structured flows</h3>
              <p>
                Every feature was mapped into clear steps, logic, and system behavior (before any UI).
              </p>
            </div>
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="font-semibold text-lg mb-2">3. Designing interaction patterns for dense information</h3>
              <p>
                Inline controls, collapsible sections, regeneration loops, transparency cues.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="font-semibold text-lg mb-2">4. High-fidelity prototypes to test logic</h3>
              <p>
                Visualizing complex flows helped us refine reasoning, catch missing states, and align expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 05 — Key Contributions */}
      <section className="py-20 px-4 md:px-0 border-b border-gray-200">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">05 — Key Contributions</h2>
          <div className="grid md:grid-cols-1 gap-8">
            {/* A. IC Memo & Preview Notes */}
            <div className="bg-white rounded-xl shadow p-6 mb-8">
              <h3 className="font-semibold text-xl mb-2">A. IC Memo & Preview Notes</h3>
              <span className="italic text-gray-700">(Fully implemented & live)</span>
              <p className="mt-2 mb-2">
                Helping analysts generate, edit, and trust AI-assisted memos.
              </p>
              <p className="mb-2">
                <span className="font-semibold">Why this mattered:</span><br />
                IC memos are central to early deal conviction. Analysts need control, traceability, and the ability to iterate.
              </p>
              <div className="mb-2">
                <span className="font-semibold">Key functionalities:</span>
                <ul className="list-disc ml-6 text-gray-700">
                  <li>Inline references for source transparency</li>
                  <li>Add/remove/customize memo sections</li>
                  <li>Regenerate specific sections (not whole reports)</li>
                  <li>Update source files → reflect changes in memo</li>
                  <li>“Central vs feeder questions” to match real reasoning patterns</li>
                </ul>
              </div>
              <div className="w-full h-32 bg-gray-100 rounded-lg flex items-center justify-center border border-gray-300 mt-4">
                {/* VISUAL HERE: Memo editor with inline references + structured sections */}
                <span className="text-gray-400">[VISUAL HERE]</span>
              </div>
            </div>
            {/* B. Chat-first Deal Advisor */}
            <div className="bg-white rounded-xl shadow p-6 mb-8">
              <h3 className="font-semibold text-xl mb-2">B. Chat-first Deal Advisor</h3>
              <span className="italic text-gray-700">(Currently In development)</span>
              <p className="mt-2 mb-2">
                Transforming a feature-heavy dashboard into a conversational workflow.
              </p>
              <blockquote className="italic text-gray-600 border-l-4 border-blue-400 pl-4 mb-2">
                “Everyone’s chatting. Can we make Deal Advisor chat aswell?”
              </blockquote>
              <p className="mb-2">
                The challenge: how to support rich capabilities inside a chat environment without turning everything into long messages.
              </p>
              <div className="mb-2">
                <span className="font-semibold">Key functionalities:</span>
                <ul className="list-disc ml-6 text-gray-700">
                  <li>Structured cards instead of long messages</li>
                  <li>Collapsible sections for readability</li>
                  <li>Inline edit / regenerate / expand controls</li>
                  <li>System actions separated from natural language</li>
                  <li>Multi-user conversation handling</li>
                  <li>Clear refinement loops for long outputs</li>
                </ul>
              </div>
              <div className="w-full h-32 bg-gray-100 rounded-lg flex items-center justify-center border border-gray-300 mt-4">
                {/* VISUAL HERE: Chat interface with expandable outputs + action buttons */}
                <span className="text-gray-400">[VISUAL HERE]</span>
              </div>
            </div>
            {/* C. Management Meeting Prep Agent */}
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="font-semibold text-xl mb-2">B. Management Meeting Prep Agent</h3>
              <span className="italic text-gray-700">(Exploratory — parked)</span>
              <p className="mt-2 mb-2">
                Helping analysts prepare for, participate in, and summarize management meetings.
              </p>
              <p className="mb-2">
                Designed initial concepts for:
              </p>
              <ul className="list-disc ml-6 text-gray-700 mb-2">
                <li>Pre-meeting briefs</li>
                <li>Note-taking tied to transcripts</li>
                <li>Highlighting risks, insights, and follow-ups</li>
                <li>Auto-generated summaries and action items</li>
                <li>Meeting-focused dashboard</li>
              </ul>
              <div className="w-full h-32 bg-gray-100 rounded-lg flex items-center justify-center border border-gray-300 mt-4">
                {/* VISUAL HERE: Meeting notes workspace */}
                <span className="text-gray-400">[VISUAL HERE]</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 06 — Outcomes */}
      <section className="py-20 px-4 md:px-0 border-b border-gray-200 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">06 — Outcomes</h2>
          <div className="mb-4">
            <span className="font-semibold">Shipped:</span>
            <ul className="list-disc ml-6 text-gray-700">
              <li>IC memo experience</li>
              <li>Preview notes</li>
              <li>Customizable reporting controls</li>
            </ul>
          </div>
          <div className="mb-4">
            <span className="font-semibold">In Development:</span>
            <ul className="list-disc ml-6 text-gray-700">
              <li>Chat-first Deal Advisor (your primary area of contribution)</li>
            </ul>
          </div>
          <div className="mb-4">
            <span className="font-semibold">In Roadmap:</span>
            <ul className="list-disc ml-6 text-gray-700">
              <li>Meeting Prep Agent</li>
            </ul>
          </div>
          <div className="mb-4">
            <span className="font-semibold">Value Delivered</span>
            <ul className="list-disc ml-6 text-gray-700">
              <li>clearer, more transparent AI outputs</li>
              <li>faster analyst workflows</li>
              <li>improved reasoning structure for deal work</li>
              <li>foundation for scalable agentic patterns across the platform</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 07 — Closing Summary */}
      <section className="py-20 px-4 md:px-0">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">07 — Closing Summary</h2>
          <p className="text-lg text-gray-800">
            Designing for private markets forced me to turn ambiguity into structured reasoning.
            <br />
            This project strengthened my ability to design agentic workflows that feel simple, transparent, and trustworthy—even when the domain is complex.
          </p>
          <Link to="/" className="inline-block mt-10 px-6 py-3 bg-black text-white rounded-full font-semibold shadow hover:bg-gray-900 transition">
            ← Back to Home
          </Link>
        </div>
      </section>
    </div>
  );
}