import React from "react";
import { Link } from "react-router-dom";
import { motion, MotionConfig } from "framer-motion";
import { MergeBoard, MechanicPlayground } from "../components/picmerge/Mechanics";
import projects from "../data/projects";

/*
  PicMerge case study, "field notebook" version.
  Story source: docs/picmerge/case-study-story.md

  How this file is organised:
  1. Page styles (colours + fonts, scoped to this page only)
  2. Small building blocks: Chapter, Row (text + margin note), Figure, Deeper, Media …
  3. Data: every number, label and list lives here. Edit content here, not in the JSX.
  4. Interactive pieces: the merge puzzle, chapter navigation, charts
  5. Chapters 1–8
  6. The page, which stacks everything in order

  Placeholders: a <Media> with no `src` shows a dashed box describing what goes there.
  Put the file in public/images/picmerge/ and pass its path as `src`.
*/

// ─── 1. Page styles ──────────────────────────────────────────────────────────
// CSS variables keep the palette in one place. `.pm` wraps the whole page,
// so none of this leaks into the rest of the site.
const PAGE_CSS = `
.pm {
  --paper: #F5F0E8;
  --card: #FFFDF9;
  --ink: #1E1A15;
  --muted: #6B6358;
  --rule: #D9D0C2;
  --accent: #E8854A;
  --accent-ink: #9A4718;
  --accent-soft: #F8E2D2;
  --loss: #B23A2E;
  --loss-soft: #F6DCD8;
  background: var(--paper);
  color: var(--ink);
}
.pm-serif { font-family: 'Fraunces', Georgia, serif; font-optical-sizing: auto; }
.pm-mono  { font-family: 'JetBrains Mono', ui-monospace, Menlo, monospace; }
.pm details > summary { list-style: none; cursor: pointer; }
.pm details > summary::-webkit-details-marker { display: none; }
.pm details[open] .pm-chevron { transform: rotate(180deg); }
@media print { .pm [style*="transform"] { transform: none !important; } }
`;

const ACCENT = "#E8854A";
const PHONE = "aspect-[9/19.5]"; // one ratio for every phone screenshot
const LOSS = "#B23A2E";

// ─── 2. Building blocks ──────────────────────────────────────────────────────

function Reveal({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      className={className}
      initial={{ y: 14 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}

// One chapter of the story: date, title, and the question I was asking at the time.
function Chapter({ chapter, children }) {
  const { id, n, title, dates, phase, question } = chapter;
  const index = CHAPTERS.findIndex((c) => c.id === id);
  const next = CHAPTERS[index + 1];
  return (
    <section id={id} data-chapter={id} className="scroll-mt-32 py-14 md:py-20 border-t border-[var(--rule)] first:border-t-0">
      <Reveal>
        <p className="pm-mono text-xs tracking-wide text-[var(--muted)] mb-4">
          <span className="text-[var(--accent-ink)] font-bold">CHAPTER {n}</span>
          <span className="mx-2">·</span>{phase}
          <span className="mx-2">·</span>{dates}
        </p>
        <h2 id={`${id}-title`} tabIndex={-1} className="pm-serif text-[2rem] leading-[1.1] md:text-[2.75rem] font-medium tracking-tight max-w-3xl focus:outline-none">
          {title}
        </h2>
        {question && (
          <p className="pm-serif italic text-lg md:text-xl text-[var(--muted)] mt-4 max-w-2xl">
            The question I was asking: “{question}”
          </p>
        )}
      </Reveal>
      <div className="mt-10 md:mt-12 space-y-10">{children}</div>

      {/* the way out, at the end of the last chapter: straight on to the next case study */}
      {!next && (
        <div className="mt-14 space-y-6">
          <NextCaseStudy />
          <div className="pt-4 border-t border-dashed border-[var(--rule)] pm-mono text-sm flex flex-wrap gap-x-6 gap-y-2">
            <a href="#pm-top" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }} className={`underline underline-offset-4 ${FOCUS}`}>↑ back to the top</a>
            <a href="mailto:golechhacharvi@gmail.com" className={`font-bold text-[var(--accent-ink)] underline underline-offset-4 ${FOCUS}`}>want the full story? write to me →</a>
          </div>
        </div>
      )}
    </section>
  );
}

// Card for the case study after this one in the projects list (wraps to the first).
function NextCaseStudy() {
  const here = projects.findIndex((p) => p.slug === "picmerge");
  const nextProject = projects[(here + 1) % projects.length];
  if (!nextProject || nextProject.slug === "picmerge") return null;
  return (
    <Link
      to={`/projects/${nextProject.slug}`}
      className={`group grid md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] overflow-hidden rounded-md border border-[var(--rule)] bg-[var(--card)] hover:border-[var(--accent)] transition-colors ${FOCUS}`}
    >
      <div className="aspect-video self-center overflow-hidden bg-[#EFE8DC]">
        <img src={nextProject.heroImage} alt="" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" draggable={false} />
      </div>
      <div className="flex flex-col p-6 md:p-8">
        <p className="pm-mono text-xs font-bold tracking-wide text-[var(--accent-ink)]">NEXT CASE STUDY</p>
        <p className="pm-serif text-2xl md:text-[1.9rem] leading-[1.15] font-medium mt-3">{nextProject.title}</p>
        <p className="pm-mono text-xs text-[var(--muted)] mt-3 flex items-center gap-2">
          {nextProject.companyLogo && <img src={nextProject.companyLogo} alt="" className="w-5 h-5 rounded" />}
          {nextProject.company} · {nextProject.year}
        </p>
        <span className="mt-auto pt-6 pm-mono text-sm font-bold underline underline-offset-4 group-hover:text-[var(--accent-ink)]">
          Keep reading <span className="inline-block transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
        </span>
      </div>
    </Link>
  );
}

// Shared keyboard focus style for links and buttons on this page.
const FOCUS = "rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E1A15]";

function Row({ children, note }) {
  return (
    <div className="grid xl:grid-cols-[minmax(0,1fr)_13rem] gap-x-10 gap-y-4 items-start">
      <div className="min-w-0">{children}</div>
      {note && <MarginNote>{note}</MarginNote>}
    </div>
  );
}

function MarginNote({ children }) {
  return (
    <Reveal className="xl:pt-1">
      <aside className="relative max-w-xl xl:max-w-none rotate-[-1deg] bg-[#FFF1B8] text-[#3D3420] text-sm leading-relaxed px-4 pt-5 pb-4 shadow-[0_6px_14px_-6px_rgba(60,45,10,0.35)]">
        {/* a strip of tape holding the note on */}
        <span aria-hidden="true" className="absolute -top-2 left-1/2 -translate-x-1/2 w-14 h-4 bg-white/60 rotate-[2deg] border border-white/80" />
        <span className="sr-only">Note: </span>
        {children}
      </aside>
    </Reveal>
  );
}

function P({ children, className = "" }) {
  return <p className={`text-[1.05rem] md:text-lg leading-relaxed max-w-2xl ${className}`}>{children}</p>;
}

// Small mono label above a block, e.g. "WHAT I DID".
function Label({ children }) {
  return <p className="pm-mono text-[0.75rem] font-bold tracking-wider text-[var(--muted)] mb-3">{children}</p>;
}

// A numbered figure with a caption, like in a report.
function Figure({ n, caption, children, className = "" }) {
  return (
    <Reveal className={className}>
      <figure>
        {children}
        <figcaption className="text-sm text-[var(--muted)] mt-4 leading-relaxed w-full md:w-3/4 mx-auto text-center text-pretty">
          <span className="pm-mono text-xs font-bold text-[var(--ink)] mr-2">Fig. {n}</span>{caption}
        </figcaption>
      </figure>
    </Reveal>
  );
}

// Image, or a labelled placeholder when there's no file yet.
function Media({ src, label, aspect = "aspect-video", fit = "cover", className = "" }) {
  const [failed, setFailed] = React.useState(false);
  if (!src || failed) {
    return (
      <div className={`w-full ${aspect} rounded-md border border-dashed border-[#B9AE9C] bg-[#EFE8DC] flex items-center justify-center p-4 ${className}`}>
        <span className="pm-mono text-[0.75rem] leading-snug text-[var(--muted)] text-center">[ placeholder ]<br />{label}</span>
      </div>
    );
  }
  const fitClass = `w-full h-full block ${fit === "contain" ? "object-contain" : "object-cover"}`;
  // .mp4 / .webm play like a GIF (silent, looping) but keep full colour.
  const isVideo = /\.(mp4|webm)$/i.test(src);
  // Readers who ask their device for less motion get a paused video with controls.
  const reduceMotion = typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
  return (
    <div className={`w-full ${aspect} rounded-md overflow-hidden border border-[var(--rule)] bg-[var(--card)] ${className}`}>
      {isVideo ? (
        <video
          src={src}
          aria-label={label}
          onError={() => setFailed(true)}
          className={fitClass}
          autoPlay={!reduceMotion}
          controls={reduceMotion}
          muted
          loop
          playsInline
          preload="metadata"
        />
      ) : (
        <img
          src={src}
          alt={label}
          onError={() => setFailed(true)}
          className={fitClass}
          draggable={false}
        />
      )}
    </div>
  );
}

// Collapsible "go deeper" drawer for readers who want the full working.
function Deeper({ title, children }) {
  return (
    <Reveal>
      <details className="rounded-md border border-[var(--rule)] bg-[var(--card)]">
        <summary className={`flex items-center justify-between gap-4 px-5 py-4 ${FOCUS}`}>
          <span className="pm-mono text-sm font-bold">Go deeper: {title}</span>
          <svg className="pm-chevron w-5 h-5 shrink-0 transition-transform" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M5 8l5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </summary>
        <div className="px-5 pb-6 pt-2 space-y-6">{children}</div>
      </details>
    </Reveal>
  );
}

function DataTable({ head, rows, highlightCol }) {
  return (
    <div className="overflow-x-auto -mx-1 px-1">
      <table className="w-full min-w-[36rem] text-sm border-collapse">
        <thead>
          <tr className="pm-mono text-[0.75rem] tracking-wide text-[var(--muted)]">
            {head.map((h, i) => (
              <th key={i} className={`text-left font-bold py-2 pr-4 border-b border-[var(--ink)] ${i === highlightCol ? "text-[var(--accent-ink)]" : ""}`}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, ri) => (
            <tr key={ri}>
              {r.map((cell, ci) => (
                <td key={ci} className={`py-2 pr-4 border-b border-[var(--rule)] align-top ${ci === 0 ? "font-semibold" : ""} ${ci === highlightCol ? "bg-[var(--accent-soft)]/60" : ""}`}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ─── 3. Data ─────────────────────────────────────────────────────────────────

const CHAPTERS = [
  { id: "brief", n: "01", short: "The brief", phase: "Brief", dates: "Dec 2025", startMonth: 0, months: 1,
    title: "PlaySimple's Jigsaw made money. It just wasn't growing like the newer games",
    fact: "$15k a day, but growth had stalled" },
  { id: "research", n: "02", short: "Research", phase: "Research", dates: "Dec 2025 – Jan 2026", startMonth: 0, months: 2,
    title: "In Jigsaw, you work for two minutes before your first win, and the win leads nowhere",
    fact: "2:15 to a first win, and each puzzle led nowhere",
    question: "What do fast-growing puzzle games do that image completion doesn't?" },
  { id: "principles", n: "03", short: "Principles", phase: "Framing", dates: "Jan 2026", startMonth: 1, months: 1,
    title: "Players wanted goals. Just not pressure",
    fact: "3 principles for goals without pressure" },
  { id: "mechanic", n: "04", short: "The mechanic", phase: "Concept + testing", dates: "Jan – Feb 2026", startMonth: 1, months: 2,
    title: "Our mechanic ranked near the bottom on paper, and first as a prototype",
    fact: "Merge: #4 on paper, #1 as a prototype",
    question: "How do you make an image puzzle shorter without making it trivial?" },
  { id: "progression", n: "05", short: "Progression", phase: "Concept", dates: "Feb 2026", startMonth: 2, months: 1,
    title: "I combined the two best progression systems, because each covered the other's weak spot",
    fact: "Decks + collections",
    question: "What makes the next puzzle worth playing?" },
  { id: "launch", n: "06", short: "Launch", phase: "Launch", dates: "Mar 2026", startMonth: 3, months: 1,
    title: "Players loved the puzzles but most didn't come back the next day",
    fact: "19% came back the next day" },
  { id: "liveops", n: "07", short: "Live ops", phase: "Live ops", dates: "Mar – Nov 2026", startMonth: 3, months: 9,
    title: "Eight months of experiments to give players a reason to come back",
    fact: "27 features shipped · Day-1 up to 33%",
    subs: [
      { id: "note-log", short: "The log" },
      { id: "note-a", short: "A · The streak" },
      { id: "note-b", short: "B · The home screen" },
      { id: "note-c", short: "C · Challenge, calmly" },
    ],
    question: "What would make a relaxed player come back tomorrow?" },
  { id: "outcome", n: "08", short: "Outcome", phase: "Decision", dates: "Nov 2026", startMonth: 11, months: 1,
    title: "Day-1 cleared the bar. Day-7 and profit didn't",
    fact: "1 of 3 bars met · not scaled" },
];

const MONTHS = ["Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov"];

const PROJECT_FACTS = [
  ["Role", "UX Designer"],
  ["Team", "14 · product, game design, art, engineering, data"],
  ["I owned", "Research, core mechanic, progression, and the design of every post-launch feature"],
  ["Didn't own", "Difficulty tuning, content design, game art"],
  ["Timeline", "Dec 2025 – Nov 2026 · 8 months live"],
];

// The five games I benchmarked. Order matters: it matches the table columns below.
const GAMES = ["Jigsaw", "Cryptogram", "Tile Match", "Candy Crush", "Travel Town"];

const FIRST_COMPLETION = [
  { game: "Jigsaw", seconds: 135, label: "2:15", ours: true },
  { game: "Cryptogram", seconds: 24, label: "0:24" },
  { game: "Tile Match", seconds: 12, label: "0:12" },
  { game: "Candy Crush", seconds: 32, label: "0:32" },
  { game: "Travel Town", seconds: 255, label: "4:15" },
];

const CORE_LOOPS = [
  { game: "Jigsaw", loop: ["Start", "Choose image", "Choose grid size", "Play", "Complete", "Reward"], goal: "Build your image library (you decide)" },
  { game: "Cryptogram", loop: ["Start", "Play", "Complete", "Reward"], goal: "Complete levels" },
  { game: "Tile Match", loop: ["Start", "Play", "Complete"], goal: "Complete journeys" },
  { game: "Candy Crush", loop: ["Start", "Pick boosters", "Play", "Complete"], goal: "Complete levels" },
  { game: "Travel Town", loop: ["Start", "Play", "Complete", "Upgrade space"], goal: "Build your town" },
];

const RAW_METRICS = [
  ["Avg. session time", "23 min", "20 min", "10 min", "17 min", "13 min"],
  ["Time to first interaction", "30 s", "9 s", "12 s", "7 s", "10 s"],
  ["Time to first completion", "2:15", "0:24", "0:12", "0:32", "4:15"],
  ["Avg. objective duration", "4 min", "1:34", "1:37", "0:56", "13 min"],
  ["Completions per 15 min", "3", "7", "10", "8", "4"],
  ["Rewards in 15 min", "3", "10", "2", "0", "12"],
  ["Progress feedback in 15 min", "0", "5", "10", "constant", "0"],
  ["Decisions before playing", "4", "0", "0", "0", "1"],
];

const STRUCTURE = [
  ["Who sets the goal", "Player", "System", "System", "Hybrid", "System"],
  ["Content order", "Self-selected", "Sequential", "Sequential", "Sequential", "Sequential"],
  ["Objective continuity", "Independent", "Sequential", "Sequential", "Sequential", "Persistent"],
  ["Failure mechanic", "None", "3 lives", "Rack fills up", "Out of moves", "Out of energy"],
];

// Player interviews: 4 players, 2 from each game.
const VERBATIMS = [
  {
    group: "Tile Match players",
    quotes: [
      "If I'm like three levels away from the gift, I'll keep playing.",
      "I like daily puzzles because the time limits are fun to beat.",
      "I saw an ad of Tiletopia and it looked more interesting than the others.",
    ],
  },
  {
    group: "Jigsaw players",
    quotes: [
      "Some days I'll spend half an hour on it, some days I just open it and look for a nice garden.",
      "I tried the candy game earlier & it was always asking me to do something. I just wanted to play.",
      "I like the dog ones. We used to have a golden retriever.",
    ],
  },
];
const PLAYERS_RESPOND_TO = [
  "Visible progress toward a reward",
  "Content that feels interesting or personally relevant",
  "Short-term challenges and completion goals",
  "The freedom to play without task pressure",
];

const COMPETITORS = [
  { name: "Oakever's Solipics", src: "/images/picmerge/oakever-solipics.png", points: ["A jigsaw with the piece outlines removed", "Added level progression"] },
  { name: "Guru's JigSort", src: "/images/picmerge/guru-jigsort.png", points: ["Pieces made a regular shape", "Half of the image already fixed in place"] },
];

const PRINCIPLES = [
  { n: "1", title: "Win fast, and often.", line: "Short puzzles, and no choices before the first one.", seeIn: "mechanic", seeLabel: "Ch. 04, the mechanic" },
  { n: "2", title: "Every puzzle leads somewhere.", line: "Progress is always visible and adds up to something.", seeIn: "progression", seeLabel: "Ch. 05, progression" },
  { n: "3", title: "Challenge without pressure.", line: "No clocks, no nagging, no losses you can't recover from.", seeIn: "liveops", seeLabel: "Ch. 07, where it was tested hardest" },
];


const PROGRESSION_OPTIONS = [
  { name: "Linear levels", src: "/images/picmerge/progression-linear.png", scores: [5, 3, 5, 3], picked: true },
  { name: "Collection", src: "/images/picmerge/progression-collection.png", scores: [3, 4, 4, 5], picked: true },
  { name: "World map", src: "/images/picmerge/progression-world-map.png", scores: [3, 3, 4, 4] },
  { name: "Skill rank", src: "/images/picmerge/progression-skill-rank.png", scores: [3, 2, 3, 3] },
  { name: "Hub expansion", src: "/images/picmerge/progression-hub.png", scores: [3, 3, 1, 3] },
];
const PROGRESSION_CRITERIA = ["Clear goals", "Momentum", "Scalability", "Content fit"];

// `at` = seconds into flow-progression.mp4 where each step starts.
const PROGRESSION_FLOW = [
  { at: 0, caption: "Game loads" },
  { at: 1.8, caption: "First onboarding puzzle", note: "Straight into play. No choices before the first puzzle (principle 1)." },
  { at: 14.2, caption: "Lands on the deck", note: "25 face-down cards: the short-term goal. Every finished puzzle flips one, and progress is always visible (principle 2)." },
  { at: 17.6, caption: "24 puzzles later", note: "One card left. The levels in between are skipped in this video." },
  { at: 19.85, caption: "Deck complete", note: "The last card flips and the 25 cards reveal a bigger picture." },
  { at: 23.9, caption: "A new deck begins", note: "Fresh face-down cards deal in, so there's always a next goal." },
  { at: 28.3, caption: "Collection unlocked", note: "The finished picture is kept in Collections: the long-term goal." },
];

const PUZZLE_FLOW = [
  { at: 0, caption: "Cards shuffled", note: "The photo is cut into cards and shuffled face-down." },
  { at: 0.4, caption: "Cards revealed", note: "Cards turn over. Some neighbours already sit together." },
  { at: 2.4, caption: "First merges", note: "Swap two cards. Right neighbours snap into a group that moves as one." },
  { at: 9.6, caption: "Puzzle complete", note: "One group left: the picture is whole." },
  { at: 11.4, caption: "Reward", note: "Coins, then straight on to the next puzzle." },
];

// Drafted definitions: check they match how you scored images.
const CONTENT_PARAMETERS = [
  ["Composition", "How the scene is arranged. A clear focal point and structure give players somewhere to start."],
  ["Detail density", "How much fine detail there is. More detail means more clues for placing a card."],
  ["Noise", "Busy textures and repeating patterns, like sky or grass, that make cards look alike."],
  ["Contrast", "How distinct the colours and light are between areas of the image."],
  ["Narrative", "Whether the image tells a story, which helps players guess what goes where."],
  ["Object density", "How many distinct objects there are. Object-rich scenes give stronger anchors."],
];

const LAUNCH_REPORT = [
  ["Session length", "26 min", "good"],
  ["Puzzles per session", "11.4", "good"],
  ["Daily active users", "1,287", ""],
  ["Revenue per day", "$1.67K", ""],
  ["Day-1 retention (came back the next day)", "19%  (bar: 30%+)", "bad"],
];

// Day-1 retention, Sep 22 – Nov 12, 2026.
// Checked against the exported dashboard numbers.
// Each point is [days after Sep 22, Day-1 %].
const D1_SERIES = [
  [0, 22.8], [2, 21.7], [4, 21.7], [6, 20.9], [8, 21.0], [10, 20.6], [12, 20.4],
  [15, 20.0], [16, 21.2], [18, 21.8], [20, 22.1], [22, 22.4], [24, 22.1], [26, 21.9],
  [28, 22.6], [29, 23.3], [30, 22.9], [32, 24.2], [33, 24.2], [34, 26.0], [35, 26.0],
  [36, 26.4], [37, 27.9], [38, 28.6], [39, 28.5], [40, 29.4], [41, 29.7], [42, 30.4],
  [43, 31.0], [44, 31.2], [46, 33.8], [47, 32.9], [48, 32.8], [49, 33.0], [50, 32.9], [51, 33.0],
];
const D1_MARKERS = [
  { day: 22, label: "Home Screen Redesign", short: "Home" },
  { day: 36, label: "Move Limit", short: "Moves" },
  { day: 43, label: "Clue Cards", short: "Clues" },
];

// The experiment log. Months come from the release calendar.
// `pts` = Day-1 install retention uplift vs. control, in percentage points.
// Everything I designed after launch, grouped by what it was for.
// `pts` = Day-1 install retention uplift vs. control, in percentage points.
// `status` replaces a number when there's no Day-1 read to show.
const FEATURE_THEMES = [
  {
    theme: "Daily habit and goals",
    items: [
      { when: "Jun", name: "Daily Quests", why: "A daily reason to open the game, built only from things you already do in a puzzle", pts: 1.3 },
      { when: "Aug", name: "Daily Victory Streak", why: "Our Day-7 lever: clear one puzzle every day", pts: -0.6 },
      { when: "Aug", name: "3-day leaderboards", why: "Competition you can miss a day of", pts: 1.15 },
      { when: "Sep", name: "Personalised Daily Quests", why: "Quests paced to how each player plays", pts: 1.6 },
      { when: "Sep", name: "Notification slots", why: "Reach players at the right time of day" },
      { when: "Sep–Oct", name: "Streak restore", why: "One missed day shouldn't wipe a streak", pts: 0.7 },
      { when: "Oct", name: "Streak reward tuning", why: "Make each streak day worth coming back for" },
      { when: "Oct", name: "Puzzle Master", why: "A daily challenge that scales with how you play" },
      { when: "Nov", name: "Mosaic Daily Puzzle", why: "The Daily Puzzle as four smaller quadrants, after very low engagement" },
    ],
  },
  {
    theme: "Help inside the puzzle",
    items: [
      { when: "Apr", name: "Hints", why: "A way out when you're stuck" },
      { when: "Jul", name: "Watch-to-earn on the game screen", why: "Get a hint without leaving the puzzle you're stuck on", pts: 1.35 },
      { when: "Aug", name: "In-game encouragement", why: "Small wins in the middle of long puzzles", pts: 1.5 },
      { when: "Aug", name: "Hint preview", why: "Show what a hint does before you spend it" },
      { when: "Sep", name: "Power-up nudges", why: "Point stuck players to help they already have", pts: 1.0 },
      { when: "Sep", name: "Hint and out-of-coins pop-ups", why: "Clearer choices at the moment you run out" },
    ],
  },
  {
    theme: "Challenge without pressure",
    items: [
      { when: "Aug", name: "Card flip", why: "A little mystery inside the puzzle, from level 2", pts: 1.8 },
      { when: "Oct", name: "Moves counter", why: "Groundwork for the move limit" },
      { when: "Oct", name: "Personalised difficulty", why: "Content tuned from your first puzzles (with game design)" },
      { when: "Oct", name: "Move limit", why: "Difficulty for veterans, with no clock", status: "live · result due Dec" },
      { when: "Nov", name: "Clue cards", why: "Deduction instead of speed", status: "in A/B test · due Dec" },
    ],
  },
  {
    theme: "Navigation and flow",
    items: [
      { when: "Jun", name: "Outro changes", why: "Fewer steps from one finished puzzle to the next" },
      { when: "Jun", name: "Exit pop-up", why: "A last reason to stay before leaving" },
      { when: "Aug", name: "Collections content loop", why: "Collections keep going after you finish them" },
      { when: "Aug–Oct", name: "Home-screen redesign", why: "Room to surface features, easier to get around (A/B from Aug, everyone from Oct)", pts: 2.5, label: "+2–3", star: true },
    ],
  },
  {
    theme: "Economy",
    items: [
      { when: "Aug", name: "In-app store", why: "Coins and no-ads packs" },
      { when: "Oct", name: "Watch-to-earn on the outro", why: "Bonus coins for a short ad after a puzzle" },
    ],
  },
  {
    theme: "Content, with game design",
    items: [
      { when: "Jun–Jul", name: "Early-level tuning", why: "Easier first levels, and configs for days 2–7 and day 15+" },
    ],
  },
];

const HOME_CHANGES = [
  { what: "Shrank the deck into a framed board", why: "freed up the screen without losing the 25-card goal" },
  { what: "Gave features a home around it", why: "daily challenge, rewards, streak and leaderboard became one tap away" },
  { what: "One clear next step", why: "the button names the next level, and white space leads the eye from the deck to it" },
  { what: "A more polished look, with art", why: "so the game felt worth the time before the first tap" },
];

// "The usual way" in fast-growing games vs. what I designed instead.
const CALM_CHOICES = [
  { usual: "A timer", ours: "A move limit with no clock, very lenient for casual players and tighter for veterans", why: "Veterans were clearing late puzzles far faster than intended. A timer would have punished everyone else too." },
  { usual: "One-day leaderboards", ours: "3-day events with a 24-hour break, and targets set from your own recent play that rise only gradually", why: "Missing a day shouldn't cost you the event." },
  { usual: "A checklist of chores", ours: "Daily Quests built only from the core loop, then paced to each player", why: "From my research into daily goals in Candy Crush, Royal Match and Wordscapes: never create tasks outside the core loop. +1.3, then +1.6." },
  { usual: "Hidden information as a trick", ours: "Card flip: face-down cards that flip and snap on their own when their neighbour lands", why: "The brief: “curious and rewarded,” never “punished.” +1.8." },
];

const MOVE_LIMIT_GUARDRAILS = [
  "No ticking clock, ever. You can think as long as you like.",
  "Limits are very lenient for less engaged players; the squeeze lands on veterans.",
  "Running out isn't the end of the puzzle: extra moves or a retry cost coins or a short ad.",
  "Shipped to everyone only after internal playtests showed puzzles felt more engaging.",
];

const BARS = [
  { name: "Day-1 retention", need: "above 30%", got: "33%", met: true },
  { name: "Day-7 ÷ Day-1", sub: "of players back the next day, how many were still playing a week later", need: "40–50%", got: "32–37%", met: false },
  { name: "Profitability (revenue ÷ ad spend)", need: "0.8", got: "0.5", met: false },
];

// Drafted from what happened. Edit these so they sound like you.
const LESSONS = [
  { title: "Test whether Day-1 carries Day-7, at launch.", body: "We assumed bringing players back tomorrow would bring them back next week. Day-7 stayed at about a third of Day-1 the whole time, and our week-long levers (the streak, leaderboards, notification changes, easier content for days 2–7) didn't move it enough. I'd check that link in the first month and give the week its own bets from the start." },
  { title: "Make the case for how the game feels, not only for numbers.", body: "Product can't estimate what white space does to click-through, so the home-screen redesign had no expected outcome and was deprioritised twice. It then beat every gameplay feature we shipped. Next time I'd pitch changes like this on first impressions, perceived quality and room to grow, and use this redesign as the example." },
  { title: "Score a system on adaptability, not just content.", body: "I rated decks on clear goals and how well they fit image content. I never asked where the next feature would sit. Within months the home screen had no room, and fixing it was our biggest single win." },
  { title: "Relaxed players will take harder puzzles. They won't take loss.", body: "Card flip made puzzles harder with nothing to lose, and lifted Day-1. The streak's reset took something away for missing a day, and cut it; the restore helped. I'd now ship any way to lose with a way back built in, as the move limit does." },
];


// ─── 4. Interactive pieces ───────────────────────────────────────────────────

// A tiny playable version of the merge mechanic for the hero.
// Tap two cards to swap them. A card in its right place locks, and
// neighbouring locked cards merge into one piece (their gaps disappear).
const PUZZLE_IMAGE = "/images/picmerge/puzzle-beach-shack.png"; // a finished level from the game

function useActiveChapter() {
  const [active, setActive] = React.useState(CHAPTERS[0].id);
  const [activeSub, setActiveSub] = React.useState(null);
  const [inStory, setInStory] = React.useState(false);

  React.useEffect(() => {
    // The active item is the last one whose top has scrolled above 40% of the screen.
    const lastAbove = (ids) => {
      const line = window.innerHeight * 0.4;
      let found = null;
      ids.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < line) found = id;
      });
      return found;
    };
    const chapterIds = CHAPTERS.map((c) => c.id);
    const subIds = CHAPTERS.flatMap((c) => (c.subs || []).map((s) => s.id));
    const story = document.getElementById("pm-story");

    const onScroll = () => {
      setActive(lastAbove(chapterIds) || chapterIds[0]);
      setActiveSub(lastAbove(subIds));
      // Show the chapter nav only while the reader is inside the chapters.
      if (story) {
        const box = story.getBoundingClientRect();
        setInStory(box.top < 140 && box.bottom > 240);
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); };
  }, []);

  return { active, activeSub, inStory };
}

// Scroll to a chapter (or sub-section), update the URL, and move keyboard focus there.
function jumpTo(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
  window.history.pushState(null, "", `#${id}`);
  const heading = document.getElementById(`${id}-title`);
  if (heading) setTimeout(() => heading.focus({ preventScroll: true }), 500);
}


// Desktop: a fixed list of chapters on the left. Phones/tablets: a bar under the site nav.
function ChapterNav() {
  const { active, activeSub, inStory } = useActiveChapter();
  const [open, setOpen] = React.useState(false);
  const index = CHAPTERS.findIndex((c) => c.id === active);
  const current = CHAPTERS[index] || CHAPTERS[0];

  // Phone menu: close on Escape or when the reader scrolls.
  React.useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    const onScroll = () => setOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("scroll", onScroll, { passive: true, once: true });
    return () => { window.removeEventListener("keydown", onKey); window.removeEventListener("scroll", onScroll); };
  }, [open]);

  const link = (id, onClick) => ({
    href: `#${id}`,
    onClick: (e) => { e.preventDefault(); onClick?.(); jumpTo(id); },
  });

  return (
    <>
      {/* Desktop rail (wide screens only, so the text column stays roomy) */}
      <nav
        aria-label="Chapters"
        className={`hidden xl:block fixed top-28 z-30 w-48 transition-opacity duration-300 ${inStory ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        style={{ left: "max(1.5rem, calc((100vw - 76rem) / 2 + 1.5rem))" }}
      >
        <p className="pm-mono text-[0.75rem] font-bold tracking-wider text-[var(--muted)] mb-4">PICMERGE · CHAPTERS</p>
        <ol className="relative border-l border-[var(--rule)]">
          {CHAPTERS.map((c, i) => {
            const isActive = c.id === active;
            const done = i < index;
            return (
              <li key={c.id} className="relative">
                <span
                  className="absolute -left-[5px] top-[0.55rem] w-[9px] h-[9px] rounded-full border-2 transition-colors"
                  style={{ borderColor: isActive || done ? ACCENT : "#C9BFAE", background: isActive ? ACCENT : "var(--paper)" }}
                />
                <a {...link(c.id)} aria-current={isActive ? "location" : undefined} className={`text-left pl-5 py-1.5 block w-full group ${FOCUS}`}>
                  <span className={`pm-mono text-[0.75rem] block ${isActive ? "text-[var(--accent-ink)]" : "text-[var(--muted)]"}`}>{c.n} · {c.dates}</span>
                  <span className={`text-sm leading-tight block ${isActive ? "font-bold text-[var(--ink)]" : "text-[var(--muted)] group-hover:text-[var(--ink)]"}`}>{c.short}</span>
                </a>
                {isActive && c.subs && (
                  <ol className="pl-8 pb-1">
                    {c.subs.map((s) => (
                      <li key={s.id}>
                        <a {...link(s.id)} aria-current={activeSub === s.id ? "location" : undefined}
                          className={`block py-0.5 text-[0.8rem] ${activeSub === s.id ? "text-[var(--accent-ink)] font-semibold" : "text-[var(--muted)] hover:text-[var(--ink)]"} ${FOCUS}`}>
                          {s.short}
                        </a>
                      </li>
                    ))}
                  </ol>
                )}
              </li>
            );
          })}
        </ol>
      </nav>

      {/* Phone + tablet bar */}
      <div className={`xl:hidden fixed top-16 left-0 right-0 z-40 transition-transform duration-300 ${inStory ? "translate-y-0" : "-translate-y-[150%]"}`}>
        <div className="bg-[var(--paper)]/95 backdrop-blur border-b border-[var(--rule)]">
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className={`w-full px-4 sm:px-6 min-h-[44px] flex items-center justify-between gap-3 ${FOCUS}`}
            aria-expanded={open}
            aria-controls="pm-chapter-menu"
          >
            <span className="pm-mono text-xs truncate">
              <span className="text-[var(--accent-ink)] font-bold">{current.n}/08</span>
              <span className="mx-2 text-[var(--muted)]">·</span>
              <span className="font-bold">{current.short}</span>
              <span className="hidden sm:inline"><span className="mx-2 text-[var(--muted)]">·</span><span className="text-[var(--muted)]">{current.dates}</span></span>
            </span>
            <span className="pm-mono text-xs text-[var(--muted)] shrink-0 flex items-center gap-1">
              chapters <span className={`inline-block transition-transform ${open ? "rotate-180" : ""}`} aria-hidden="true">▾</span>
            </span>
          </button>
          <div className="h-[2px] bg-[var(--rule)]">
            <div className="h-full transition-all duration-300" style={{ width: `${((index + 1) / CHAPTERS.length) * 100}%`, background: ACCENT }} />
          </div>
          {open && (
            <ol id="pm-chapter-menu" className="px-2 sm:px-4 py-2 max-h-[60vh] overflow-y-auto">
              {CHAPTERS.map((c) => (
                <li key={c.id}>
                  <a {...link(c.id, () => setOpen(false))} aria-current={c.id === active ? "location" : undefined}
                    className={`w-full text-left px-2 min-h-[44px] flex gap-3 items-center rounded-sm ${c.id === active ? "bg-[var(--accent-soft)]" : ""} ${FOCUS}`}>
                    <span className="pm-mono text-xs text-[var(--accent-ink)] w-6">{c.n}</span>
                    <span className={`text-sm ${c.id === active ? "font-bold" : ""}`}>{c.short}</span>
                    <span className="pm-mono text-[0.75rem] text-[var(--muted)] ml-auto text-right">{c.fact}</span>
                  </a>
                </li>
              ))}
            </ol>
          )}
        </div>
      </div>
    </>
  );
}

function StoryMap() {
  return (
    <>
    {/* Phones: a stacked list, with a thin bar showing where each chapter sits in the year */}
    <ol className="md:hidden border-t border-[var(--ink)]">
      {CHAPTERS.map((c) => (
        <li key={c.id} className="border-b border-[var(--rule)]">
          <a href={`#${c.id}`} onClick={(e) => { e.preventDefault(); jumpTo(c.id); }} className={`block py-3 ${FOCUS}`}>
            <span className="flex items-baseline gap-2">
              <span className="pm-mono text-xs font-bold text-[var(--accent-ink)]">{c.n}</span>
              <span className="font-semibold">{c.short}</span>
              <span className="pm-mono text-[0.75rem] text-[var(--muted)] ml-auto">{c.dates}</span>
            </span>
            <span className="block text-sm text-[var(--muted)] mt-0.5 pl-7">{c.fact}</span>
            <span className="grid grid-cols-12 mt-2 ml-7 h-1 bg-[var(--rule)]/60 rounded-full overflow-hidden">
              <span className="bg-[var(--accent)] rounded-full" style={{ gridColumn: `${c.startMonth + 1} / span ${c.months}` }} />
            </span>
          </a>
        </li>
      ))}
    </ol>
    <div className="hidden md:block overflow-x-auto">
      <div className="min-w-[42rem]">
        <div className="grid grid-cols-12 border-b border-[var(--ink)] pb-2">
          {MONTHS.map((m, i) => (
            <span key={m} className="pm-mono text-[0.75rem] text-[var(--muted)]">
              {m}{i === 0 ? " ’25" : i === 1 ? " ’26" : ""}
            </span>
          ))}
        </div>
        <ol className="mt-3 space-y-1">
          {CHAPTERS.map((c) => {
            const end = c.startMonth + c.months; // first free column after the bar
            const inside = c.months >= 4; // long bars carry their own label
            const labelAfter = !inside && end < 12;
            const label = (
              <>
                <span className="pm-mono text-[0.75rem] font-bold text-[var(--accent-ink)] mr-1.5">{c.n}</span>
                <span className="font-semibold group-hover:underline underline-offset-2">{c.short}</span>
                <span className="text-[var(--muted)] ml-2">{c.fact}</span>
              </>
            );
            return (
              <li key={c.id}>
                <a href={`#${c.id}`} onClick={(e) => { e.preventDefault(); jumpTo(c.id); }} className={`group grid grid-cols-12 w-full items-center text-left py-0.5 ${FOCUS}`}>
                  <span
                    className={`h-6 rounded-sm transition-colors bg-[#E9C3A6] group-hover:bg-[var(--accent)] ${inside ? "flex items-center px-2 text-xs whitespace-nowrap overflow-hidden" : ""}`}
                    style={{ gridColumn: `${c.startMonth + 1} / span ${c.months}`, gridRow: 1 }}
                  >
                    {inside && label}
                  </span>
                  {!inside && (
                    <span
                      className={`text-xs whitespace-nowrap px-2 ${labelAfter ? "" : "text-right"}`}
                      style={{ gridColumn: labelAfter ? `${end + 1} / -1` : `1 / ${c.startMonth + 1}`, gridRow: 1 }}
                    >
                      {label}
                    </span>
                  )}
                </a>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
    </>
  );
}

function RetentionChart({ compact = false }) {
  const W = compact ? 340 : 680, H = compact ? 240 : 280;
  const padL = 34, padR = 14, padT = 26, padB = 28;
  const maxDay = 51, minY = 18, maxY = 36;
  const x = (d) => padL + (d / maxDay) * (W - padL - padR);
  const y = (v) => padT + (1 - (v - minY) / (maxY - minY)) * (H - padT - padB);
  const line = D1_SERIES.map(([d, v], i) => `${i ? "L" : "M"}${x(d)},${y(v)}`).join(" ");
  const area = `${line} L${x(maxDay)},${y(minY)} L${x(0)},${y(minY)} Z`;
  const axis = compact ? [[0, "Sep 22"], [30, "Oct 22"]] : [[0, "Sep 22"], [15, "Oct 7"], [30, "Oct 22"], [46, "Nov 7"]];

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto pm-mono" role="img" aria-label="Day-1 retention rose from 20% on Oct 7 to about 33% in November">
      {[20, 25, 30, 35].map((v) => (
        <g key={v}>
          <line x1={padL} x2={W - padR} y1={y(v)} y2={y(v)} stroke="#E3DACB" />
          <text x={padL - 6} y={y(v) + 4} fontSize="10" textAnchor="end" fill="#6B6358">{v}%</text>
        </g>
      ))}
      <line x1={padL} x2={W - padR} y1={y(30)} y2={y(30)} stroke="#1E1A15" strokeDasharray="3 4" />
      <text x={padL + 6} y={y(30) - 6} fontSize="10" fontWeight="700" fill="#1E1A15">the 30% bar</text>
      {D1_MARKERS.map((m) => (
        <g key={m.label}>
          <line x1={x(m.day)} x2={x(m.day)} y1={padT - 6} y2={H - padB} stroke={ACCENT} strokeOpacity="0.45" strokeDasharray="2 3" />
          <text x={x(m.day)} y={padT - 11} fontSize="10" fontWeight="700" textAnchor="middle" fill="#9A4718">{compact ? m.short : m.label}</text>
        </g>
      ))}
      <path d={area} fill={ACCENT} fillOpacity="0.1" />
      <path d={line} fill="none" stroke="#C4652A" strokeWidth="2.5" strokeLinejoin="round" />
      <circle cx={x(15)} cy={y(20)} r="4.5" fill="#F5F0E8" stroke={ACCENT} strokeWidth="2.5" />
      <text x={x(15)} y={y(20) + 18} fontSize="12" fontWeight="700" textAnchor="middle" fill="#1E1A15">20%</text>
      <circle cx={x(51)} cy={y(33)} r="4.5" fill={ACCENT} />
      <text x={x(51) - 6} y={y(33) + 20} fontSize="12" fontWeight="700" textAnchor="end" fill="#1E1A15">33%</text>
      {axis.map(([d, l]) => (
        <text key={l} x={x(d)} y={H - 8} fontSize="10" textAnchor="middle" fill="#6B6358">{l}</text>
      ))}
    </svg>
  );
}

// Slope chart: every mechanic's rank on paper vs. as a digital prototype.
// Rows are positions in each column (tied mechanics share a rank label).
const RANKS = [
  { name: "Piece Merging", paper: { row: 5, rank: "#4" }, digital: { row: 1, rank: "#1" }, tone: "pick" },
  { name: "Conventional Jigsaw", paper: { row: 1, rank: "#1" }, digital: { row: 4, rank: "#4" }, tone: "strong" },
  { name: "Prefixed Pieces", paper: { row: 2, rank: "#2–3" }, digital: { row: 3, rank: "#3" } },
  { name: "Jigsaw Without Edges", paper: { row: 3, rank: "#2–3" }, digital: { row: 5, rank: "#5" } },
  { name: "Sliding Puzzle", paper: { row: 4, rank: "#4" }, digital: { row: 2, rank: "#2" } },
];
const RANK_TONE = {
  pick: { line: ACCENT, width: 4, text: "#9A4718", weight: 700 },
  strong: { line: "#6B6358", width: 2.5, text: "#1E1A15", weight: 700 },
  quiet: { line: "#CFC5B5", width: 1.75, text: "#6B6358", weight: 400 },
};

function RankFlip() {
  const y = (row) => 74 + (row - 1) * 42;
  const L = 270, R = 470; // dot columns
  // Draw quiet lines first so the highlighted ones sit on top.
  const ordered = ["quiet", "strong", "pick"].flatMap((tone) => RANKS.filter((m) => (m.tone || "quiet") === tone));
  return (
    <>
      <svg viewBox="0 0 740 268" className="hidden sm:block w-full h-auto pm-mono" role="img"
        aria-label="Ranks on paper versus digital prototypes. Piece Merging went from joint fourth to first; Conventional Jigsaw from first to fourth; Prefixed Pieces went from joint second to third; Jigsaw Without Edges fell from joint second to fifth; Sliding Puzzle rose from joint fourth to second.">
        <text x={L} y="18" fontSize="13" fontWeight="700" textAnchor="middle" fill="#1E1A15">On paper</text>
        <text x={L} y="36" fontSize="11" textAnchor="middle" fill="#6B6358">10 players</text>
        <text x={R} y="18" fontSize="13" fontWeight="700" textAnchor="middle" fill="#1E1A15">Digital prototype</text>
        <text x={R} y="36" fontSize="11" textAnchor="middle" fill="#6B6358">20 players</text>
        {ordered.map((m) => {
          const t = RANK_TONE[m.tone || "quiet"];
          const y1 = y(m.paper.row), y2 = y(m.digital.row);
          return (
            <g key={m.name}>
              <line x1={L} y1={y1} x2={R} y2={y2} stroke={t.line} strokeWidth={t.width} strokeLinecap="round" />
              <circle cx={L} cy={y1} r="5" fill={t.line} />
              <circle cx={R} cy={y2} r="5" fill={t.line} />
              <text x={L - 16} y={y1 + 4} fontSize="11" textAnchor="end" fill="#6B6358">{m.paper.rank}</text>
              <text x={L - 62} y={y1 + 4} fontSize="13" textAnchor="end" fill={t.text} fontWeight={t.weight}>{m.name}</text>
              <text x={R + 16} y={y2 + 4} fontSize="11" fill="#6B6358">{m.digital.rank}</text>
              <text x={R + 62} y={y2 + 4} fontSize="13" fill={t.text} fontWeight={t.weight}>{m.name}</text>
            </g>
          );
        })}
      </svg>

      {/* Phones: the same data as a list. */}
      <ul className="sm:hidden divide-y divide-[var(--rule)] pm-mono text-sm">
        {RANKS.map((m) => {
          const t = RANK_TONE[m.tone || "quiet"];
          return (
            <li key={m.name} className="flex items-baseline justify-between gap-3 py-2.5">
              <span style={{ color: t.text, fontWeight: t.weight }}>{m.name}</span>
              <span className="whitespace-nowrap text-[var(--muted)] text-xs">
                paper {m.paper.rank} → <b style={{ color: m.tone === "pick" ? t.text : "inherit" }}>digital {m.digital.rank}</b>
              </span>
            </li>
          );
        })}
      </ul>
    </>
  );
}

// Time-to-first-completion bars for the five games.
function FirstCompletionBars() {
  const max = Math.max(...FIRST_COMPLETION.map((g) => g.seconds));
  return (
    <div className="space-y-2.5">
      {FIRST_COMPLETION.map((g) => (
        <div key={g.game} className="grid grid-cols-[6.5rem_1fr] sm:grid-cols-[8rem_1fr] items-center gap-3">
          <span className={`text-sm ${g.ours ? "font-bold" : ""}`}>{g.game}</span>
          <div className="flex items-center gap-2 min-w-0">
            <motion.div
              className="h-5 rounded-sm shrink-0"
              style={{ background: g.ours ? ACCENT : "#C9BFAE" }}
              initial={{ width: 0 }}
              whileInView={{ width: `${(g.seconds / max) * 72}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
            <span className="pm-mono text-xs font-bold whitespace-nowrap">{g.label}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

function Dots({ score, on }) {
  return (
    <span className="inline-flex gap-[3px]" aria-label={`${score} of 5`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <span key={n} className="w-2 h-2 rounded-full" style={{ background: n <= score ? (on ? ACCENT : "#6B6358") : "#E3DACB" }} />
      ))}
    </span>
  );
}

// ─── 5. Chapters ─────────────────────────────────────────────────────────────

function Hero() {
  return (
    <header className="px-4 sm:px-6 pt-28 md:pt-32 pb-12">
      <div className="max-w-[76rem] mx-auto">
        <p className="pm-mono text-xs tracking-wide text-[var(--muted)] mb-8 flex flex-wrap gap-x-3 gap-y-1 items-center">
          <img src="/images/psg/Icon-PSG.png" alt="" className="w-5 h-5 rounded-full" />
          <span className="font-bold text-[var(--ink)]">PlaySimple Games</span>
          <span>·</span><span>Case study</span><span>·</span><span>Dec 2025 – Nov 2026</span>
        </p>

        <div className="grid lg:grid-cols-[1.15fr_1fr] gap-10 lg:gap-16 items-start">
          <div>
            <h1 className="pm-serif text-[clamp(2.5rem,5vw,4.4rem)] leading-[1.05] font-medium tracking-tight">
              Retention without pressure: designing a puzzle game for relaxed players
            </h1>
            <p className="mt-6 text-lg md:text-xl leading-relaxed max-w-xl text-[var(--muted)]">
              A new image puzzle game, from conception to eight months of live experimentation.
            </p>
            <p className="mt-6 max-w-xl text-[1.05rem] leading-relaxed">
              Day-1 retention <strong>19% → 33%</strong>. Week-long retention and profit fell short, and the game didn't scale.
            </p>

            <dl className="mt-8 grid sm:grid-cols-2 gap-x-8 border-t border-[var(--ink)] max-w-xl">
              {PROJECT_FACTS.map(([k, v]) => (
                <div key={k} className="py-2.5 border-b border-[var(--rule)]">
                  <dt className="pm-mono text-[0.75rem] font-bold tracking-wide text-[var(--muted)]">{k.toUpperCase()}</dt>
                  <dd className="text-sm mt-0.5">{v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="rounded-md bg-[var(--card)] border border-[var(--rule)] p-3 sm:p-4 lg:mt-2">
            <MergeBoard image={PUZZLE_IMAGE} rows={3} cols={3} label="A small playable merge puzzle" />
          </div>
        </div>

        {/* The whole project on one line */}
        <div className="mt-12">
          <Label>THE PROJECT AT A GLANCE · PICK A CHAPTER TO JUMP TO IT</Label>
          <StoryMap />
        </div>
      </div>
    </header>
  );
}

function ChBrief() {
  return (
    <Chapter chapter={CHAPTERS[0]}>
      <Row note="Why not just redesign Jigsaw? We tried: a progression system, fewer choices before play, pushing players straight into a puzzle. None of it worked for Jigsaw's relaxed audience, and the game was profitable as it was. Growth had to come from a new game.">
        <P>
          Jigsaw Puzzle Explorer earned about <strong>$15k a day</strong> from more than <strong>7 million installs</strong>.
          But newer puzzle games, including PlaySimple's own, were growing faster, and new image-completion games had started to appear.
          The brief was a new image-completion game that could scale like them.
        </P>
      </Row>
      <Figure n="1.1" caption="PlaySimple's puzzle games side by side. Jigsaw was the only one with shrinking daily players.">
        <BenchmarkTable />
      </Figure>
      <div className="grid md:grid-cols-2 gap-6 items-start">
        <Figure n="1.2" caption="Puzzle market trends from the research phase.">
          <Media src="/images/picmerge/market-trends-chart.png" label="Market trends chart" aspect="aspect-[2579/1709]" fit="contain" />
        </Figure>
        <Figure n="1.3" caption="Jigsaw games by installs, H2 2025. Bubble size is total installs; PlaySimple's Jigsaw is in yellow.">
          <Media src="/images/picmerge/product-growth-chart.png" label="Jigsaw market bubble chart" aspect="aspect-[2580/1727]" fit="contain" />
        </Figure>
      </div>
      <Deeper title="who we were designing for">
        <div className="grid md:grid-cols-[1fr_1fr] gap-6 items-start">
          <Media src="/images/picmerge/target-audience.png" label="Target audience board" aspect="aspect-square" fit="contain" />
          <ul className="space-y-2 text-sm">
            {["Adults 25+, mostly 30–60", "Mobile-first", "Short leisure sessions through the day", "Want relaxation with light thinking", "Like clear progression and achievable goals", "US, UK, Canada, Australia"].map((t) => (
              <li key={t} className="flex gap-2"><span className="text-[var(--accent-ink)]" aria-hidden="true">·</span>{t}</li>
            ))}
          </ul>
        </div>
      </Deeper>
    </Chapter>
  );
}

// PlaySimple's puzzle games at the start of the project.
const BENCHMARK = [
  ["Cryptogram", "Word", "1 yr 9 m", "$5.3K", "+657%", "25,000", "+400%", "Hyper growth"],
  ["3 Tile Match", "Tile Match", "3 yr 4 m", "$52.1K", "+353%", "406,000", "+306%", "Scaling"],
  ["Word Roll", "Word", "5 yr 7 m", "$41K", "+356%", "85,000", "+227%", "Scaling"],
  ["Crossword Go", "Crossword", "1 yr 2 m", "$151.9K", "+28%", "393,000", "+48%", "Mature"],
  ["Jigsaw", "Jigsaw", "4 yr 2 m", "$14.3K", "+16%", "144,000", "−4%", "Mature"],
];

function BenchmarkTable() {
  const stage = { "Hyper growth": "bg-[#CDEBE3] text-[#1F5C4E]", Scaling: "bg-[#FCE3C4] text-[#7A4A12]", Mature: "bg-[#E6E1D8] text-[#4A443B]" };
  return (
    <div className="overflow-x-auto border-t border-[var(--ink)]">
      <table className="w-full min-w-[44rem] text-sm">
        <thead>
          <tr className="pm-mono text-[0.75rem] text-[var(--muted)] text-left">
            {["Game", "Genre", "Age", "Daily revenue", "Revenue YoY", "Daily players", "Players YoY", "Stage"].map((h) => (
              <th key={h} className="font-bold py-2 pr-4 border-b border-[var(--rule)]">{h.toUpperCase()}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {BENCHMARK.map((r) => {
            const ours = r[0] === "Jigsaw";
            return (
              <tr key={r[0]} className={ours ? "bg-[var(--accent-soft)]/60" : ""}>
                {r.map((cell, i) => (
                  <td key={i} className={`py-2.5 pr-4 border-b border-[var(--rule)] ${i === 0 ? "font-semibold" : ""} ${ours && i === 6 ? "text-[var(--loss)] font-bold" : ""}`}>
                    {i === 7 ? <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${stage[cell]}`}>{cell}</span> : cell}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

function ChResearch() {
  return (
    <Chapter chapter={CHAPTERS[1]}>
      <Row note="Same window for every game: the first 15 minutes. Long enough to see the first goals, rewards and events each game puts in front of you.">
        <Label>WHAT I DID</Label>
        <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2 max-w-2xl">
          {["Played the first 15 minutes of 5 puzzle games", "Mapped each game's core loop", "Interviewed 2 Tile Match and 2 Jigsaw players", "Tore down 2 image-puzzle competitors"].map((t) => (
            <li key={t} className="flex gap-2 text-[1.05rem]"><span className="pm-mono text-[var(--accent-ink)]">→</span>{t}</li>
          ))}
        </ul>
      </Row>

      <Figure n="2.1" caption="Time to the first completed puzzle, in the first 15 minutes of play. Jigsaw is ours.">
        <div className="border-t border-[var(--ink)] pt-5">
          <FirstCompletionBars />
        </div>
      </Figure>

      <Row note="Travel Town is a different genre: a merge-to-build game where you grow a world (not the same thing as our merge mechanic). World-building isn't something an image puzzle can do. What it shares with the other games is continuity, and image completion can have that.">
        <P>
          Speed was part of it. Jigsaw asks for <strong>4 decisions</strong> before you play and makes you wait over two minutes for a win.
          But the bigger difference was structure. In every other game, the game sets your next goal and each completion feeds the next one.
          In Jigsaw, you set your own goal, and each puzzle stands alone.
        </P>
      </Row>

      <Figure n="2.2" caption="Who sets the goal, and whether one goal leads to the next. Jigsaw is the only game where both are left to the player.">
        <GoalMatrix />
      </Figure>

      <Figure n="2.3" caption="Core loops on the left, the long-term goal each loop feeds on the right. Jigsaw has the most steps before you play, and the only goal you have to set yourself.">
        <div className="rounded-md bg-[var(--card)] border border-[var(--rule)] divide-y divide-[var(--rule)]">
          {CORE_LOOPS.map((g) => (
            <div key={g.game} className="p-4 grid md:grid-cols-[7rem_1fr_13rem] gap-3 md:gap-5 items-center">
              <span className={`text-sm ${g.game === "Jigsaw" ? "font-bold" : "font-semibold"}`}>{g.game}</span>
              {/* the core loop: one session */}
              <div className="flex flex-wrap items-center gap-1.5">
                {g.loop.map((step, i) => (
                  <React.Fragment key={step}>
                    {i > 0 && <span className="text-[var(--muted)] text-xs" aria-hidden="true">→</span>}
                    <span className={`pm-mono text-[0.75rem] px-2 py-1 rounded-sm border ${g.game === "Jigsaw" && step.startsWith("Choose") ? "border-[var(--accent)] bg-[var(--accent-soft)]" : "border-[var(--rule)]"}`}>{step}</span>
                  </React.Fragment>
                ))}
              </div>
              {/* the long-term goal: what every loop feeds */}
              <div className={`rounded-md px-3 py-2 md:border-l-2 ${g.game === "Jigsaw" ? "bg-[var(--loss-soft)] md:border-[var(--loss)]" : "bg-[var(--paper)] md:border-[var(--ink)]"}`}>
                <p className="pm-mono text-[0.75rem] text-[var(--muted)]">↻ long-term goal</p>
                <p className="pm-serif italic">{g.goal}</p>
              </div>
            </div>
          ))}
        </div>
      </Figure>

      <Deeper title="the full session breakdown (8 metrics × 5 games) and competitor teardowns">
        <DataTable head={["", ...GAMES]} rows={RAW_METRICS} highlightCol={1} />
        <DataTable head={["Structure", ...GAMES]} rows={STRUCTURE} highlightCol={1} />
        <p className="text-sm max-w-2xl">New image-completion games were already adding progression and taking friction out of the traditional jigsaw.</p>
        <div className="grid sm:grid-cols-2 gap-6">
          {COMPETITORS.map((c, i) => (
            <Figure key={c.name} n={`2.${4 + i}`} caption={`Competitor teardown: ${c.name}.`}>
              <Media src={c.src} label={`${c.name} teardown`} aspect="aspect-[4/3]" fit="contain" />
              <ul className="mt-3 space-y-1 text-sm">
                {c.points.map((pt) => <li key={pt} className="flex gap-2"><span className="text-[var(--accent-ink)]" aria-hidden="true">·</span>{pt}</li>)}
              </ul>
            </Figure>
          ))}
        </div>
      </Deeper>
    </Chapter>
  );
}

// Two structural questions, five games. Jigsaw is the odd one out on both.
function GoalMatrix() {
  const rows = [
    { q: "Who sets the next goal?", values: ["You", "The game", "The game", "The game", "Both"] },
    { q: "Does one goal lead to the next?", values: ["No", "Yes", "Yes", "Yes", "Yes"] },
  ];
  return (
    <div className="rounded-md bg-[var(--card)] border border-[var(--rule)] overflow-x-auto">
      <table className="w-full min-w-[34rem] text-sm">
        <thead>
          <tr className="pm-mono text-[0.75rem] text-[var(--muted)] border-b border-[var(--ink)]">
            <th className="text-left font-bold p-3" />
            {GAMES.map((g) => <th key={g} className={`text-left font-bold p-3 ${g === "Jigsaw" ? "text-[var(--accent-ink)]" : ""}`}>{g.toUpperCase()}</th>)}
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.q} className="border-b border-[var(--rule)] last:border-0">
              <td className="p-3 font-semibold">{r.q}</td>
              {r.values.map((v, i) => (
                <td key={i} className={`p-3 ${i === 0 ? "bg-[var(--accent-soft)] font-bold text-[var(--accent-ink)]" : ""}`}>{v}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Interview screenshot, shown whole at its own proportions (1518×900).
function InterviewPhoto({ src, label }) {
  return <Media src={src} label={label} aspect="aspect-[1518/900]" fit="contain" className="mb-5" />;
}

function ChPrinciples() {
  return (
    <Chapter chapter={CHAPTERS[2]}>
      <div className="grid md:grid-cols-2 gap-6">
        <Reveal>
          <InterviewPhoto src="/images/picmerge/interview-tilematch-01.png" label="Tile Match player in a remote interview (face blurred)" />
          <blockquote className="border-t-2 border-[var(--ink)] pt-5">
            <p className="pm-serif text-2xl md:text-[1.7rem] leading-snug">“If I'm like three levels away from the gift, I'll keep playing.”</p>
            <footer className="pm-mono text-xs text-[var(--muted)] mt-4">TILE MATCH PLAYER</footer>
          </blockquote>
        </Reveal>
        <Reveal delay={0.08}>
          <InterviewPhoto src="/images/picmerge/interview-jigsaw-02.png" label="Jigsaw player in a remote interview (face blurred)" />
          <blockquote className="border-t-2 border-[var(--ink)] pt-5">
            <p className="pm-serif text-2xl md:text-[1.7rem] leading-snug">“I tried the candy game earlier & it was always asking me to do something. I just wanted to play.”</p>
            <footer className="pm-mono text-xs text-[var(--muted)] mt-4">JIGSAW PLAYER</footer>
          </blockquote>
        </Reveal>
      </div>

      <Deeper title="everything players told me (4 interviews)">
        <div className="grid md:grid-cols-2 gap-8">
          {VERBATIMS.map((g) => (
            <div key={g.group}>
              <Label>{g.group.toUpperCase()}</Label>
              <ul className="space-y-3">
                {g.quotes.map((q) => (
                  <li key={q} className="pm-serif text-lg leading-snug border-l-2 border-[var(--rule)] pl-3">“{q}”</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div>
          <Label>WHAT PLAYERS RESPONDED TO</Label>
          <ul className="grid sm:grid-cols-2 gap-2 text-sm">
            {PLAYERS_RESPOND_TO.map((t) => <li key={t} className="flex gap-2"><span className="text-[var(--accent-ink)]" aria-hidden="true">·</span>{t}</li>)}
          </ul>
        </div>
      </Deeper>

      <Row note="Everything after this chapter is an attempt to satisfy both of these players at once.">
        <P>
          Progression clearly worked. But copying fast-growing games wholesale would drive away the image-puzzle players we already knew.
          So I wrote down three principles and held every later decision against them.
        </P>
      </Row>

      <Reveal>
        <p className="pm-serif italic text-xl mb-4">The three principles</p>
        <ol className="grid md:grid-cols-3 gap-4">
          {PRINCIPLES.map((p) => (
            <li key={p.n} className="flex flex-col rounded-md bg-[var(--ink)] text-[var(--paper)] p-6">
              <span className="pm-mono text-sm font-bold text-[var(--accent)]">{p.n.padStart(2, "0")}</span>
              <p className="pm-serif text-3xl md:text-[2.1rem] font-medium mt-3 leading-[1.1]">{p.title}</p>
              <p className="mt-2 text-[#D8CFC2] text-sm leading-relaxed">{p.line}</p>
              <a href={`#${p.seeIn}`} onClick={(e) => { e.preventDefault(); jumpTo(p.seeIn); }}
                className={`mt-auto pt-5 pm-mono text-xs text-[var(--accent)] underline underline-offset-2 ${FOCUS}`}>
                see it in {p.seeLabel} ↓
              </a>
            </li>
          ))}
        </ol>
      </Reveal>
    </Chapter>
  );
}

function ChMechanic() {
  return (
    <Chapter chapter={CHAPTERS[3]}>
      <Row note="Every mechanic below is playable. The six coloured pieces stand in for a photo, just like the paper tests did.">
        <P>
          Principle 1 needed shorter puzzles, with more moments of completion. Cutting a jigsaw into fewer pieces just makes it easier.
          So I looked for a different way to complete an image, one that's quick to finish but still satisfying to solve.
        </P>
      </Row>

      <Figure n="4.1" caption="The five ways of completing an image I explored, with their ranks on paper and as digital prototypes. Each one is playable.">
        <MechanicPlayground />
      </Figure>

      <Reveal>
        <div className="rounded-md border-2 border-[var(--accent)] bg-[var(--card)] p-5 md:p-6 grid md:grid-cols-[11rem_1fr] gap-4 items-center">
          <p className="pm-serif text-2xl font-medium leading-tight">How merge works</p>
          <p className="text-[1.05rem] leading-relaxed">
            The photo is cut into cards and shuffled. You swap any two cards. When a card lands next to its true neighbour, they snap
            into a group that moves as one. Keep going until one group is left: the whole picture.
          </p>
        </div>
      </Reveal>

      {/* The two test rounds, side by side, with the realisation between them */}
      <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-6 items-stretch">
        <Reveal className="h-full">
          <div className="h-full rounded-md border border-[var(--rule)] bg-[var(--card)] p-5 md:p-6 flex flex-col gap-4">
            <p className="pm-serif text-4xl font-medium leading-none">Round 1</p>
            <p className="pm-mono text-xs text-[var(--muted)]">PHYSICAL · 10 PLAYERS</p>
            <p>Same image, same piece count, every mechanic. I timed each one and noted what people skipped and what they got absorbed in.</p>
            <p className="font-semibold">Conventional Jigsaw won, probably because it was familiar. Piece Merging tied for second-last with Sliding Puzzle.</p>
            <Figure n="4.2" caption="Paper test session." className="mt-auto">
              <Media src="/images/picmerge/paper-test.png" label="Photo: paper test, players with printed cards" aspect="aspect-[4/3]" />
            </Figure>
          </div>
        </Reveal>
        <div className="flex lg:flex-col items-center justify-center lg:w-44">
          <MarginNote>The paper version of merge was cards on a table. Nothing snapped, nothing moved together, so players judged the idea of merge without ever feeling it.</MarginNote>
        </div>
        <Reveal className="h-full">
          <div className="h-full rounded-md border-2 border-[var(--accent)] bg-[var(--card)] p-5 md:p-6 flex flex-col gap-4">
            <p className="pm-serif text-4xl font-medium leading-none text-[var(--accent-ink)]">Round 2</p>
            <p className="pm-mono text-xs text-[var(--muted)]">DIGITAL PROTOTYPES · 20 PLAYERS</p>
            <p>I built a digital prototype of all five and ran the test again. Every mechanic got the same upgrade, so Conventional Jigsaw benefited too.</p>
            <p className="font-semibold">Piece Merging came first. Conventional Jigsaw dropped to second-last, and Jigsaw Without Edges came last.</p>
            <Figure n="4.3" caption="Digital prototype tests." className="mt-auto">
              <Media src="/images/picmerge/merge-prototype.png" label="Screen: merge prototype" aspect="aspect-[4/3]" />
            </Figure>
          </div>
        </Reveal>
      </div>

      <Figure n="4.4" caption="How every mechanic ranked on paper and as a digital prototype. Piece Merging rose from joint last to first; Conventional Jigsaw fell from first to fourth.">
        <div className="border-t border-[var(--ink)] pt-5 max-w-3xl mx-auto"><RankFlip /></div>
      </Figure>

      <Figure n="4.5" caption="Merge as it shipped: one puzzle, start to finish.">
        <FlowWithGif steps={PUZZLE_FLOW} gifSrc="/images/picmerge/flow-puzzle.mp4" gif="Video: one puzzle, from shuffle to reward" />
      </Figure>
    </Chapter>
  );
}

// The flow as a video with its steps beside it. While the video plays, the step on
// screen lights up; clicking a step jumps the video there. Steps need an `at` time
// (seconds into the video) for this; without one they're a plain list.
function FlowWithGif({ steps, gif, gifSrc, aspect = "aspect-[576/1110]" }) {
  const videoRef = React.useRef(null);
  const [active, setActive] = React.useState(0);
  const [missing, setMissing] = React.useState(false);
  const retried = React.useRef(false);
  const synced = /\.(mp4|webm)$/i.test(gifSrc || "") && steps.every((s) => typeof s.at === "number") && !missing;

  // A load can fail once for a passing reason (e.g. the file was being replaced).
  // Try again before falling back to the placeholder.
  const handleError = () => {
    const v = videoRef.current;
    if (!retried.current && v) {
      retried.current = true;
      setTimeout(() => v.load(), 600);
      return;
    }
    setMissing(true);
  };
  const reduceMotion = typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

  // Check the video's time every frame while it plays, so short steps don't get skipped.
  React.useEffect(() => {
    const v = videoRef.current;
    if (!synced || !v) return;
    let frame;
    const tick = () => {
      let i = 0;
      steps.forEach((s, n) => { if (v.currentTime >= s.at) i = n; });
      setActive(i);
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [synced, steps]);

  const jumpTo = (i) => {
    const v = videoRef.current;
    if (!v) return;
    v.currentTime = steps[i].at;
    v.play?.();
    setActive(i);
  };

  return (
    <div className="grid md:grid-cols-[15rem_minmax(0,25rem)] gap-8 md:gap-14 items-center justify-center">
      <div className="w-full max-w-[13rem] md:max-w-none mx-auto">
        {synced ? (
          <div className={`w-full ${aspect} rounded-[1.25rem] overflow-hidden border-[5px] border-[var(--ink)] bg-[var(--ink)] shadow-[0_12px_30px_-12px_rgba(30,26,21,0.45)]`}>
            <video
              ref={videoRef}
              src={gifSrc}
              aria-label={gif}
              onError={handleError}
              className="w-full h-full block object-contain"
              autoPlay={!reduceMotion}
              controls={reduceMotion}
              muted
              loop
              playsInline
              preload="metadata"
            />
          </div>
        ) : (
          <Media src={missing ? null : gifSrc} label={gif} aspect={aspect} fit="contain" />
        )}
      </div>

      <ol className="relative">
        {steps.map((s, i) => {
          const on = synced && i === active;
          const done = synced && i < active;
          const dot = (
            <span
              aria-hidden="true"
              className={`mt-1 w-5 h-5 rounded-full border-2 border-[var(--accent)] transition-colors duration-200 ${on || done ? "bg-[var(--accent)]" : "bg-[var(--paper)]"} ${on ? "ring-4 ring-[var(--accent-soft)]" : ""}`}
            />
          );
          const text = (
            <span className="block">
              <span className="block pm-mono text-xs text-[var(--accent-ink)] font-bold">{String(i + 1).padStart(2, "0")}</span>
              <span className={`block font-semibold transition-colors duration-200 ${synced && !on ? "text-[var(--muted)]" : "text-[var(--ink)]"}`}>{s.caption}</span>
              {s.note && <span className="block text-sm text-[var(--muted)] mt-0.5">{s.note}</span>}
            </span>
          );
          return (
            <li key={s.caption} className="relative pb-5 last:pb-0">
              {i < steps.length - 1 && (
                <span aria-hidden="true" className={`absolute left-[0.6rem] top-7 bottom-1 w-px transition-colors duration-200 ${done ? "bg-[var(--accent)]" : "bg-[var(--rule)]"}`} />
              )}
              {synced ? (
                <button
                  type="button"
                  onClick={() => jumpTo(i)}
                  aria-current={on ? "step" : undefined}
                  className={`grid grid-cols-[2rem_1fr] gap-4 w-full text-left rounded-md ${FOCUS}`}
                >
                  {dot}
                  {text}
                </button>
              ) : (
                <div className="grid grid-cols-[2rem_1fr] gap-4">
                  {dot}
                  {text}
                </div>
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
}

function ChProgression() {
  return (
    <Chapter chapter={CHAPTERS[4]}>
      <Row>
        <P>Short puzzles need a reason to exist (principle 2). I sketched five progression systems and rated each 1–5 on what short puzzles needed.</P>
      </Row>

      <Figure n="5.1" caption="Five progression systems. The two I combined are highlighted. Scroll sideways to see all five on smaller screens.">
        <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0 pb-2 snap-x snap-mandatory">
          <ol className="grid grid-flow-col auto-cols-[13rem] xl:grid-flow-row xl:grid-cols-5 xl:auto-cols-auto gap-3">
            {PROGRESSION_OPTIONS.map((o) => (
              <li key={o.name} className={`snap-start rounded-md p-3 ${o.picked ? "bg-[var(--accent-soft)] ring-1 ring-[var(--accent)]" : "bg-[var(--card)] border border-[var(--rule)]"}`}>
                <Media src={o.src} label={o.name} aspect="aspect-[765/1416]" fit="contain" className="border-0 bg-transparent" />
                <p className={`mt-3 ${o.picked ? "font-bold" : "font-semibold"}`}>{o.name}</p>
                <dl className="mt-2 space-y-1">
                  {PROGRESSION_CRITERIA.map((c, i) => (
                    <div key={c} className="flex items-center justify-between gap-2">
                      <dt className="pm-mono text-[0.75rem] text-[var(--muted)]">{c}</dt>
                      <dd><Dots score={o.scores[i]} on={o.picked} /></dd>
                    </div>
                  ))}
                </dl>
              </li>
            ))}
          </ol>
        </div>
      </Figure>

      <Row note="Linear levels and collection tied. Picking one meant giving up either clear goals or the fit with image content, so I didn't pick.">
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="border-t-2 border-[var(--accent)] pt-4">
            <Label>SHORT-TERM GOAL · FROM LINEAR LEVELS</Label>
            <p className="pm-serif text-2xl font-medium">Decks</p>
            <p className="mt-1">25 face-down cards on the home screen. Each finished puzzle flips one, and together they reveal a bigger picture.</p>
          </div>
          <div className="border-t-2 border-[var(--accent)] pt-4">
            <Label>LONG-TERM GOAL · FROM COLLECTION</Label>
            <p className="pm-serif text-2xl font-medium">Collections</p>
            <p className="mt-1">A finished deck becomes a collection piece, and a new deck begins.</p>
          </div>
        </div>
      </Row>

      <Figure n="5.2" caption="Progression as shipped, for a player starting at level 1: onboarding, the first deck, and the first collection.">
        <FlowWithGif steps={PROGRESSION_FLOW} gifSrc="/images/picmerge/flow-progression.mp4" gif="Video: progression from level 1 to the first collection" aspect="aspect-[576/1220]" />
      </Figure>
    </Chapter>
  );
}

// Step-through viewer for a screen flow: a list of steps beside one large screen.
// On phones the list is replaced by previous / next buttons.
function ChLaunch() {
  return (
    <Chapter chapter={CHAPTERS[5]}>

      <Row note="Decks kept people in a session. They just weren't a strong enough reason to come back the next day. That gap shaped the next eight months.">
        <Label>LAUNCH REPORT · APRIL 2026</Label>
        <dl className="border-t border-[var(--ink)] max-w-xl">
          {LAUNCH_REPORT.map(([k, v, tone]) => (
            <div key={k} className={`flex justify-between gap-4 py-3 border-b border-[var(--rule)] ${tone === "bad" ? "bg-[var(--loss-soft)] -mx-3 px-3" : ""}`}>
              <dt className="text-sm">{k}</dt>
              <dd className={`pm-mono text-sm font-bold ${tone === "bad" ? "text-[var(--loss)]" : ""}`}>{v}</dd>
            </div>
          ))}
        </dl>
      </Row>

      <Row>
        <P>
          Short puzzles worked, and people played for a long time. But fewer than one in five came back the next day.
          Day-1 then hovered between 20% and 25% for months. In August the studio set a deadline: decide by November whether PicMerge continues.
        </P>
      </Row>

      <Deeper title="difficulty, designed with game design">
        <p className="text-sm max-w-2xl">Game design owned difficulty tuning. I worked with them on how a puzzle gets harder without feeling unfair: grid size and image composition together, rising in gentle S-curves, with a new mechanic introduced when the curve plateaus.</p>
        <div className="grid sm:grid-cols-2 gap-4">
          <Figure n="6.1" caption="The difficulty curve across levels.">
            <Media src="/images/picmerge/difficulty-curve.png" label="Difficulty curve" aspect="aspect-[4/3]" fit="contain" />
          </Figure>
          <Figure n="6.2" caption="Content parameters: what makes an image easy or hard to complete.">
            <Media src="/images/picmerge/parameter-matrix.png" label="Parameter matrix" aspect="aspect-[4/3]" fit="contain" />
          </Figure>
        </div>
        <div className="rounded-md border border-[var(--rule)] p-4 sm:p-5 grid sm:grid-cols-[auto_1fr] gap-4 items-center">
          <p className="pm-mono text-xl sm:text-2xl font-bold whitespace-nowrap">PD = √(GD × CD)</p>
          <p className="text-sm text-[var(--muted)]">
            Puzzle difficulty combines grid difficulty (how many cards) and content difficulty (how hard the image is to read).
            Neither one alone predicted how hard a puzzle felt.
          </p>
        </div>
        <div>
          <Label>CONTENT PARAMETERS: WHAT MAKES AN IMAGE EASY OR HARD</Label>
          <p className="text-sm max-w-2xl mb-3">
            Two puzzles with the same number of cards can feel completely different. We scored every image on six parameters,
            and those scores set its content difficulty (CD) in the formula above.
          </p>
          <dl className="grid sm:grid-cols-2 gap-x-8 border-t border-[var(--rule)]">
            {CONTENT_PARAMETERS.map(([k, v]) => (
              <div key={k} className="py-2.5 border-b border-[var(--rule)]">
                <dt className="font-semibold text-sm">{k}</dt>
                <dd className="text-sm text-[var(--muted)]">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
        <ul className="space-y-1.5 text-sm">
          {["Object-rich scenes give players stronger anchors.", "Symmetrical images are easier, but less interesting.", "Difficulty is multi-dimensional, not just piece count."].map((t) => (
            <li key={t} className="flex gap-2"><span className="text-[var(--accent-ink)]" aria-hidden="true">·</span>{t}</li>
          ))}
        </ul>
      </Deeper>
    </Chapter>
  );
}

function ChLiveOps() {
  return (
    <Chapter chapter={CHAPTERS[6]}>
      <Reveal>
        <div className="rounded-md border border-dashed border-[#B9AE9C] bg-[#EFE8DC] p-5">
          <Label>WHERE I STARTED AFTER LAUNCH</Label>
          <p className="pm-mono text-xs text-[var(--muted)]">[ placeholder: 2–3 lines ] What evidence showed why players didn't come back the next day, and which bets did you make first, and why?</p>
        </div>
      </Reveal>

      <Row note="Every feature went out as its own A/B test against a control, separated from the other experiments. Our install volumes were low, so the overall Day-1 number was noisy from day to day.">
        <Figure n="7.1" caption="Day-1 retention over the last eight weeks. Marked: key experiments from mid-October.">
          <div className="border-t border-[var(--ink)] pt-4">
            <div className="hidden sm:block"><RetentionChart /></div>
            <div className="sm:hidden"><RetentionChart compact /></div>
          </div>
        </Figure>
      </Row>


      <div id="note-log" className="scroll-mt-32" />
      <Figure n="7.2" caption="Everything I designed after launch, grouped by what it was for. Numbers are Day-1 install retention vs. control, in percentage points.">
        <ExperimentLog />
      </Figure>

      <Reveal>
        <p className="pm-serif text-2xl md:text-3xl font-medium max-w-3xl">Three experiments, in detail:</p>
      </Reveal>

      <CaseNote id="note-a" letter="A" title="The streak: a trade-off I chose, and lost">
        <Row note="I knew a reset bent principle 3. I took the trade anyway, because we needed something for Day-7, and streaks are a proven habit lever in casual games.">
          <P>
            We needed a lever for Day-7, so I designed a Daily Victory Streak: clear one puzzle a day to build it, miss a day and it resets.
            It lost us <strong className="text-[var(--loss)]">0.6 points</strong> of Day-1. The second version added a streak restore, so one missed
            day wasn't fatal, and won it back <strong className="text-[var(--accent-ink)]">(+0.7)</strong>. Daily Quests, which ask nothing new of you
            and never take anything away, did better than both.
          </P>
        </Row>
        <Figure n="7.3" caption="Left: the first streak, where missing a day reset it to zero. Right: the second version, which offered a restore so one missed day wasn't fatal.">
          <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
            <Media src="/images/picmerge/streak-v1.png" label="Screen: streak v1, the reset" aspect={PHONE} />
            <Media src="/images/picmerge/streak-v2-restore.png" label="Screen: streak v2, the restore offer" aspect={PHONE} />
          </div>
        </Figure>
      </CaseNote>

      <CaseNote id="note-b" letter="B" title="The home screen: deprioritised twice, then our biggest win">
        <Row note="Under five days to build, and still pushed back twice, because nobody could put an expected number on it.">
          <P>
            As features piled up, the 25-card deck I'd built upon in chapter 5 filled the whole screen. Every new feature needed a place,
            and I couldn't surface them without making it harder to get around. Product's view was that the home screen doesn't change gameplay,
            so we couldn't attach an expected outcome to it. I kept making the case, and in October it went to everyone.
          </P>
        </Row>
        <PushbackTimeline />
        <Figure n="7.4" caption="Left: the launch home screen, where the deck is the whole screen. Right: the redesign, with the deck framed and features around it.">
          <Media src="/images/picmerge/home-before-after.webp" label="Home screen before and after" aspect="aspect-[1917/2000]" fit="contain" className="border-0 bg-transparent max-w-xl mx-auto" />
        </Figure>
        <div className="grid md:grid-cols-[1fr_16rem] gap-8 items-start">
          <div>
            <Label>WHAT CHANGED, AND WHY</Label>
            <ol className="border-t border-[var(--ink)]">
              {HOME_CHANGES.map((c, i) => (
                <li key={c.what} className="grid grid-cols-[2rem_1fr] gap-3 py-3 border-b border-[var(--rule)]">
                  <span className="pm-mono text-sm text-[var(--accent-ink)] font-bold">{i + 1}</span>
                  <p><strong>{c.what}.</strong> <span className="text-[var(--muted)]">{c.why.charAt(0).toUpperCase() + c.why.slice(1)}.</span></p>
                </li>
              ))}
            </ol>
          </div>
          <div className="rounded-md bg-[var(--accent-soft)] p-5">
            <p className="pm-serif italic text-lg text-[var(--accent-ink)]">The result</p>
            <p className="pm-serif text-4xl font-medium">+2–3 pts</p>
            <p className="text-sm mt-1">Day-1 retention, the most of any single feature.</p>
            <p className="text-sm mt-3">Level-start button click-through went up too. <span className="pm-mono text-xs text-[var(--muted)]">[add: +X% relative or +X pts]</span></p>
          </div>
        </div>
      </CaseNote>

      <CaseNote id="note-c" letter="C" title="Challenge without pressure: the choices behind it">
        <Row note="From my competitor research: the calm games show you a score, but never use it to block you.">
          <P>
            Fast-growing puzzle games keep players engaged with pressure: timers, lives, streaks, daily chores. Our players had told us they
            didn't want that. So wherever we added a goal or a challenge, I looked for a version that didn't punish a missed day or a slow solve.
          </P>
        </Row>
        <Reveal>
          <div className="rounded-md bg-[var(--card)] border border-[var(--rule)] overflow-hidden">
            <div className="hidden md:grid grid-cols-[11rem_1fr_1fr] gap-6 px-5 py-2 border-b border-[var(--ink)] pm-mono text-[0.75rem] font-bold tracking-wide text-[var(--muted)]">
              <span>THE USUAL WAY</span><span>WHAT I DESIGNED INSTEAD</span><span>WHY</span>
            </div>
            <ol>
              {CALM_CHOICES.map((c) => (
                <li key={c.usual} className="grid md:grid-cols-[11rem_1fr_1fr] gap-x-6 gap-y-1 px-5 py-4 border-b border-[var(--rule)] last:border-0">
                  <p className="pm-mono text-xs text-[var(--muted)] line-through decoration-[var(--loss)] md:pt-0.5">{c.usual}</p>
                  <p className="font-semibold">{c.ours}</p>
                  <p className="text-sm text-[var(--muted)]">{c.why}</p>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto w-full">
          <Figure n="7.5" caption="Card flip: the auto-snap.">
            <Media src="/images/picmerge/card-flip.png" label="Screen: card flip" aspect={PHONE} />
          </Figure>
          <Figure n="7.6" caption="Clue cards: deduction, not speed.">
            <Media src="/images/picmerge/clue-card.png" label="Screen: clue card" aspect={PHONE} />
          </Figure>
          <Figure n="7.7" caption="Move limit: the counter, no clock.">
            <Media src="/images/picmerge/move-limit.png" label="Screen: move counter" aspect={PHONE} />
          </Figure>
          <Figure n="7.8" caption="3-day leaderboard with a personal target.">
            <Media src="/images/picmerge/leaderboard.png" label="Screen: leaderboard" aspect={PHONE} />
          </Figure>
        </div>
        <div className="rounded-md border border-[var(--rule)] bg-[var(--card)] p-5">
          <Label>WHERE I BENT PRINCIPLE 3: THE MOVE LIMIT'S GUARDRAILS</Label>
          <ul className="space-y-2">
            {MOVE_LIMIT_GUARDRAILS.map((g) => (
              <li key={g} className="flex gap-3 text-sm"><span className="pm-mono text-[var(--accent-ink)]">✓</span>{g}</li>
            ))}
          </ul>
          <p className="pm-mono text-xs text-[var(--muted)] mt-4">Move-limit and clue-card results were still coming in when the decision was made.</p>
        </div>
      </CaseNote>
    </Chapter>
  );
}

function CaseNote({ id, letter, title, children }) {
  return (
    <div id={id} className="scroll-mt-32 space-y-6 pt-10 mt-6 border-t border-dashed border-[var(--rule)]">
      <Reveal>
        <p className="pm-mono text-xs text-[var(--accent-ink)] font-bold mb-2">EXPERIMENT NOTE {letter}</p>
        <h3 className="pm-serif text-2xl md:text-[2rem] leading-tight font-medium max-w-3xl">{title}</h3>
      </Reveal>
      {children}
    </div>
  );
}

function ExperimentLog() {
  const [onlyResults, setOnlyResults] = React.useState(true);
  const all = FEATURE_THEMES.flatMap((t) => t.items);
  const withResults = all.filter((e) => typeof e.pts === "number").sort((a, b) => b.pts - a.pts);

  return (
    <div className="rounded-md bg-[var(--card)] border border-[var(--rule)]">
      {/* toggle */}
      <div className="flex flex-wrap items-center gap-2 px-4 py-3 border-b border-[var(--ink)]">
        {[
          [true, `Day-1 results (${withResults.length})`],
          [false, `Everything (${all.length})`],
        ].map(([value, text]) => (
          <button
            key={text}
            type="button"
            onClick={() => setOnlyResults(value)}
            aria-pressed={onlyResults === value}
            className={`pm-mono text-xs px-3 py-1.5 rounded-sm border ${onlyResults === value ? "bg-[var(--ink)] text-[var(--paper)] border-[var(--ink)]" : "border-[var(--rule)] hover:border-[var(--ink)]"}`}
          >
            {text}
          </button>
        ))}
        <span className="pm-mono text-[0.75rem] text-[var(--muted)] ml-auto">n/a means no Day-1 read to show</span>
      </div>

      {onlyResults ? (
        <ol>{withResults.map((e) => <LogRow key={e.name} e={e} />)}</ol>
      ) : (
        FEATURE_THEMES.map((t) => (
          <div key={t.theme}>
            <p className="pm-mono text-[0.75rem] font-bold tracking-wider text-[var(--accent-ink)] px-4 pt-4 pb-1">{t.theme.toUpperCase()}</p>
            <ol>{t.items.map((e) => <LogRow key={e.name} e={e} />)}</ol>
          </div>
        ))
      )}
    </div>
  );
}

function LogRow({ e }) {
  const max = 3;
  const has = typeof e.pts === "number";
  const loss = has && e.pts < 0;
  return (
    <li className={`grid grid-cols-[3.5rem_1fr] md:grid-cols-[4.5rem_1fr_12rem] gap-x-4 gap-y-1.5 px-4 py-2.5 border-b border-[var(--rule)] last:border-0 ${e.star ? "bg-[var(--accent-soft)]/50" : ""}`}>
      <span className="pm-mono text-xs text-[var(--muted)] pt-0.5">{e.when}</span>
      <div>
        <p className="font-semibold text-sm">{e.name}{e.star && <span className="pm-mono text-[0.75rem] text-[var(--accent-ink)] ml-2">biggest single win</span>}</p>
        <p className="text-sm text-[var(--muted)]">{e.why}</p>
      </div>
      <div className="col-start-2 md:col-start-3 self-center">
        {has ? (
          <div className="grid grid-cols-[1fr_4fr] items-center">
            <div className="flex justify-end">
              {loss && <motion.div className="h-3 rounded-l-sm" style={{ background: LOSS }} initial={{ width: 0 }} whileInView={{ width: "100%" }} viewport={{ once: true }} transition={{ duration: 0.7 }} />}
            </div>
            <div className="flex items-center gap-2 border-l border-[var(--ink)] min-w-0">
              {!loss && <motion.div className="h-3 rounded-r-sm shrink-0" style={{ background: ACCENT }} initial={{ width: 0 }} whileInView={{ width: `${(e.pts / max) * 70}%` }} viewport={{ once: true }} transition={{ duration: 0.7 }} />}
              <span className="pm-mono text-xs font-bold whitespace-nowrap" style={{ color: loss ? LOSS : "#1E1A15" }}>{e.label || (loss ? `−${Math.abs(e.pts)}` : `+${e.pts}`)}</span>
            </div>
          </div>
        ) : (
          <span className="pm-mono text-xs text-[var(--muted)]">{e.status || "n/a"}</span>
        )}
      </div>
    </li>
  );
}

function PushbackTimeline() {
  const steps = [
    { when: "", what: "Proposed", sub: "the deck blocks new features" },
    { when: "", what: "Deprioritised", sub: "“doesn't change gameplay”", loss: true },
    { when: "", what: "Deprioritised", sub: "“cannot justify time investment”", loss: true },
    { when: "Aug", what: "A/B test", sub: "under 5 days to build" },
    { when: "Oct", what: "+2–3 pts", sub: "rolled out to everyone", win: true },
  ];
  return (
    <Reveal>
      <ol className="grid grid-cols-1 sm:grid-cols-5 border-t border-[var(--ink)]">
        {steps.map((s, i) => (
          <li key={i} className="py-3 sm:pr-3 border-b sm:border-b-0 sm:border-r last:border-0 border-[var(--rule)] sm:pl-3 first:sm:pl-0">
            <p className="pm-mono text-[0.75rem] text-[var(--muted)] h-4">{s.when}</p>
            <p className={`font-bold ${s.loss ? "text-[var(--loss)] line-through decoration-1" : s.win ? "text-[var(--accent-ink)]" : ""}`}>{s.what}</p>
            <p className="text-sm text-[var(--muted)]">{s.sub}</p>
          </li>
        ))}
      </ol>
    </Reveal>
  );
}

function ChOutcome() {
  return (
    <Chapter chapter={CHAPTERS[7]}>
      <Row note="Profitability depends on how long players stay and what they spend while they're here. With most gone within a week, revenue couldn't catch up with what it cost to bring them in.">
        <Label>THE THREE BARS A NEW PLAYSIMPLE GAME HAS TO CLEAR</Label>
        <div className="border-t border-[var(--ink)]">
          {BARS.map((b) => (
            <div key={b.name} className="grid grid-cols-[1fr_auto] sm:grid-cols-[1fr_8rem_8rem_3rem] gap-x-4 gap-y-1 py-4 border-b border-[var(--rule)] items-baseline">
              <span className="font-semibold">{b.name}{b.sub && <span className="block text-xs font-normal text-[var(--muted)]">{b.sub}</span>}</span>
              <span className="pm-mono text-xs text-[var(--muted)] sm:order-none order-3 col-span-2 sm:col-span-1">needed {b.need}</span>
              <span className={`pm-serif text-3xl font-medium sm:text-right ${b.met ? "" : "text-[var(--loss)]"}`}>{b.got}</span>
              <span className={`pm-mono text-xs font-bold sm:text-right col-span-2 sm:col-span-1 ${b.met ? "text-[var(--accent-ink)]" : "text-[var(--loss)]"}`}>{b.met ? "MET" : "MISSED"}</span>
            </div>
          ))}
        </div>
      </Row>

      <Row>
        <P>
          No single change fixed retention. Each number in the log was measured in its own A/B test, separated from the other experiments.
          Most added a point or two. Together they took Day-1 from around 20%, where it had hovered from launch until October, to 33%.
          But only about a third of those players were still playing a week later.
          The studio decided PicMerge wouldn't scale and moved the team to a new game.
        </P>
      </Row>

      <div>
        <Reveal><p className="pm-serif text-2xl md:text-3xl font-medium mb-6">What I'd do differently</p></Reveal>
        <ol className="border-t border-[var(--ink)]">
          {LESSONS.map((l, i) => (
            <Reveal key={l.title}>
              <li className="grid grid-cols-[2.5rem_1fr] md:grid-cols-[3.5rem_1fr] gap-4 py-5 border-b border-[var(--rule)]">
                <span className="pm-serif text-2xl text-[var(--accent-ink)]">{i + 1}</span>
                <div>
                  <p className="pm-serif text-xl md:text-2xl font-medium">{l.title}</p>
                  <p className="mt-2 max-w-2xl text-[var(--muted)] leading-relaxed">{l.body}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>

      <Reveal>
        <div className="rounded-md bg-[var(--card)] border border-[var(--rule)] p-5 md:p-6">
          <p className="pm-serif italic text-xl mb-2">Thank you</p>
          <p className="text-sm max-w-2xl">
            PicMerge was built by a team of 14. Game design built the difficulty model and tuned every curve. Art made the game feel like a game.
            Product helped me figure out where things were going wrong. Engineering and QA built and tested more than 25 releases in eight months.
          </p>
        </div>
      </Reveal>
    </Chapter>
  );
}

// ─── 6. The page ─────────────────────────────────────────────────────────────

export default function PicMergeCaseStudy() {
  return (
    <MotionConfig reducedMotion="user">
    <main id="pm-top" className="pm min-h-screen">
      <style>{PAGE_CSS}</style>
      <Hero />
      <ChapterNav />
      <div id="pm-story" className="px-4 sm:px-6">
        <div className="max-w-[76rem] mx-auto xl:pl-60">
          <ChBrief />
          <ChResearch />
          <ChPrinciples />
          <ChMechanic />
          <ChProgression />
          <ChLaunch />
          <ChLiveOps />
          <ChOutcome />
        </div>
      </div>
      <div className="pb-16" />
    </main>
    </MotionConfig>
  );
}
