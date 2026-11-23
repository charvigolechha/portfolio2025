import React from "react";
import { Link } from "react-router-dom";
import HeroAnimation from "../components/HeroAnimation";
import { FOCUS, EMAIL, RESUME } from "../components/site/SiteChrome";
import { prefetchPage } from "../pageLoaders";

/*
  Home page (version 2, live since Nov 2026). Version 1 is kept in src/legacy/HomeV1.jsx.
  The header, footer, colours and fonts are shared with every page: see
  src/components/site/SiteChrome.jsx.

  1. Data: edit text here
  2. Pieces: project rows, copy-email button
  3. The page
*/

// ─── 1. Data ─────────────────────────────────────────────────────────────────
const PROJECTS = [
  {
    slug: "picmerge",
    domain: "Mobile game",
    name: "PicMerge",
    title: "Retention without pressure: designing a puzzle game for relaxed players",
    org: "PlaySimple Games",
    logo: "/images/psg/Icon-PSG.png",
    when: "2025–26",
    role: "Sole UX researcher + designer · research to live ops",
    line: "A new image puzzle game, from first research to 27 shipped features.",
    proof: "Day-1 retention 19% → 33%",
    tags: ["Games", "Research", "A/B testing"],
    image: "/images/picmerge/Hero-Picmerge.png",
    featured: true,
  },
  {
    slug: "agentic-ai-private-equity",
    domain: "B2B · AI tool",
    name: "Deal Advisor Agent",
    title: "Making AI work for private equity analysts",
    org: "Infinite Possibilities",
    logo: "/images/ip/Icon-IP.png",
    when: "2025",
    role: "UX designer", // confirm
    line: "Reporting, chat and meeting-prep for an AI deal-advisor agent, from an ambiguous vision to workflows analysts trust.",
    proof: null,
    tags: ["B2B", "AI", "Workflows"],
    image: "/images/ip/Hero-IP.png",
    imagePos: "85% center",
  },
  {
    slug: "puzzle-progression",
    domain: "Mobile game",
    name: "Progression study",
    imagePos: "80% center",
    title: "Driving player progression in casual puzzle games",
    org: "PlaySimple Games",
    logo: "/images/psg/Icon-PSG.png",
    when: "2025",
    role: "UX researcher + designer", // confirm
    line: "A data-informed look at how players move from newbie to pro, and what keeps them climbing.",
    proof: null,
    tags: ["Games", "Data", "Progression"],
    image: "/images/psg/Hero-PSG.png",
  },
  {
    slug: "ezam",
    domain: "Physical game · competition project",
    name: "Ezam",
    title: "Competitive play beyond visual dependence",
    org: "Titan's Design Impact Movement",
    logo: "/images/ezam/Icon-Ezam.png",
    when: "2024",
    role: "Designer, team project", // confirm
    line: "A tactile board game that visually impaired and sighted players can play on equal terms.",
    proof: "Winner, Titan's Design Impact Movement",
    tags: ["Inclusive design", "Physical", "Service design"],
    image: "/images/ezam/Hero-Ezam.png",
  },
];

const EXPERIENCE = [
  { when: "2025–now", what: "UX Researcher + Designer", where: "PlaySimple Games" },
  { when: "May–Sep 2025", what: "UX Designer", where: "Infinite Possibilities" },
  { when: "2025", what: "Paper on inclusive game design", where: "ServDes 2025" },
];

const LIFE = [
  { src: "/images/life2.jpg", caption: "Sharing my work on inclusive game design at ServDes 2025.", alt: "Charvi presenting her inclusive game design paper at ServDes 2025" },
  { src: "/images/life1.jpg", caption: "Figma was closed for this one." },
  { src: "/images/life3.jpg", caption: "Powered by adrenaline and bad jokes." },
];

// ─── 2. Pieces ───────────────────────────────────────────────────────────────

// Things I've learned, each tied to the project that taught it. "How I think", with receipts.

// A hand-drawn underline, slightly wobbly on purpose.
function Squiggle({ color = "var(--accent)" }) {
  return (
    <svg viewBox="0 0 200 12" preserveAspectRatio="none" aria-hidden="true" className="absolute left-0 -bottom-2 w-full h-3">
      <path d="M2 8 C 30 3, 55 11, 85 6 S 140 2, 170 7 S 195 9, 198 5" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

// A project as a quiet row: words first, a small picture beside it.
function ProjectRow({ p, index }) {
  return (
    <li className="border-t border-[var(--rule)]">
      <Link to={`/projects/${p.slug}`} onMouseEnter={() => prefetchPage(p.slug)} onFocus={() => prefetchPage(p.slug)} onTouchStart={() => prefetchPage(p.slug)} aria-label={`${p.name ? p.name + ": " : ""}${p.title}, case study`}
        className={`group grid md:grid-cols-[3rem_1fr_16rem] lg:grid-cols-[3rem_1fr_22rem] gap-x-8 gap-y-4 py-8 md:py-10 items-start ${FOCUS}`}>
        <span className="v2-hand text-2xl text-[var(--muted)] leading-none pt-1" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
        <div>
          <p className="text-sm text-[var(--muted)]">{p.name ? `${p.name} · ` : ""}{p.org} · {p.when}{p.domain ? ` · ${p.domain}` : ""}</p>
          <h3 className="v2-serif text-2xl md:text-[1.9rem] leading-snug font-normal mt-2 group-hover:text-[var(--accent)] transition-colors">{p.title}</h3>
          {p.proof && <p className="v2-hand text-2xl text-[var(--accent)] mt-3 leading-none">{p.proof}</p>}
          <p className="mt-4 text-sm"><span className="text-[var(--muted)]">{p.role}</span> <span className="ml-2 font-semibold group-hover:underline underline-offset-4">read the story →</span></p>
        </div>
        <div className="overflow-hidden rounded-md aspect-video bg-[#F1EAE0] md:mt-1">
          <img src={p.image} alt="" style={{ objectPosition: p.imagePos || "center" }} loading={index === 0 ? "eager" : "lazy"}
            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
        </div>
      </Link>
    </li>
  );
}

function CopyEmail() {
  const [copied, setCopied] = React.useState(false);
  return (
    <button
      type="button"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(EMAIL);
          setCopied(true);
          setTimeout(() => setCopied(false), 1800);
        } catch {
          window.prompt("Copy my email:", EMAIL); // fallback when the clipboard isn't available
        }
      }}
      className={`text-sm font-semibold underline underline-offset-4 decoration-[var(--rule)] hover:decoration-[var(--accent)] ${FOCUS}`}
    >
      {copied ? "copied ✓" : "copy email"}
    </button>
  );
}

// Only show the animated illustration to people who haven't asked for reduced motion.
function useShowArt() {
  const query = "(prefers-reduced-motion: no-preference)";
  const [show, setShow] = React.useState(() => typeof window !== "undefined" && window.matchMedia(query).matches);
  React.useEffect(() => {
    const mq = window.matchMedia(query);
    const onChange = () => setShow(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return show;
}

// ─── 3. The page ─────────────────────────────────────────────────────────────

export default function HomeV2() {
  const showArt = useShowArt();
  return (
    <div id="top" className="v2 min-h-screen">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] focus:bg-[var(--paper)] focus:px-3 focus:py-2 focus:rounded-sm">Skip to content</a>

      <main id="main" className="px-5 sm:px-8">
        {/* Hero: calm and short. The girl at her desk, a name, one line. */}
        <section className="max-w-3xl mx-auto pt-32 md:pt-40 pb-20 md:pb-28">
          {showArt && (
            <div className="w-40 sm:w-48 mb-10 -ml-2" style={{ mixBlendMode: "multiply" }} aria-hidden="true">
              {/* multiply: the drawing's white fills take on the creme page colour,
                  while the layers still cover each other normally inside */}
              <HeroAnimation />
            </div>
          )}
          <h1 className="v2-serif text-[clamp(2.2rem,5vw,3.6rem)] leading-[1.1] font-normal tracking-tight">Charvi Golechha</h1>
          <p className="mt-4 text-lg md:text-xl text-[var(--muted)]">
            UX researcher and designer, currently making games at PlaySimple.
          </p>
          <p className="mt-10 text-sm">
            <a href="#work" className={`font-semibold underline underline-offset-4 decoration-[var(--accent)] decoration-2 ${FOCUS}`}>see the work</a>
            <span className="mx-3 text-[var(--rule)]" aria-hidden="true">/</span>
            <a href={RESUME} target="_blank" rel="noopener noreferrer" className={`font-semibold underline underline-offset-4 decoration-[var(--rule)] hover:decoration-[var(--accent)] ${FOCUS}`}>resume ↗</a>
            <span className="mx-3 text-[var(--rule)]" aria-hidden="true">/</span>
            <a href="#contact" className={`font-semibold underline underline-offset-4 decoration-[var(--rule)] hover:decoration-[var(--accent)] ${FOCUS}`}>contact</a>
          </p>
        </section>

        {/* Work */}
        <section id="work" aria-labelledby="work-title" className="max-w-5xl mx-auto pb-16 md:pb-24 scroll-mt-24">
          <h2 id="work-title" className="v2-hand text-3xl text-[var(--blue)] mb-2">the work</h2>
          <ol className="border-b border-[var(--rule)]">
            {PROJECTS.map((p, i) => <ProjectRow key={p.slug} p={p} index={i} />)}
          </ol>
        </section>

        {/* About */}
        <section id="about" aria-labelledby="about-title" className="max-w-5xl mx-auto pb-16 md:pb-24 scroll-mt-24">
          <div className="grid md:grid-cols-[1fr_1fr] gap-10 md:gap-14 items-start">
            <figure>
              <img src={LIFE[0].src} alt={LIFE[0].alt} className="w-full aspect-[4/3] object-cover rounded-md" loading="lazy" />
              <figcaption className="v2-hand text-xl text-[var(--muted)] mt-2 -rotate-1">{LIFE[0].caption.toLowerCase()}</figcaption>
            </figure>
            <div>
              <h2 id="about-title" className="v2-hand text-3xl text-[var(--blue)] mb-4">a bit more about me</h2>
              <p className="text-lg leading-relaxed">
                I'm happiest in the part of a project where nobody knows the answer yet: why players enjoy a game but don't come back,
                why analysts don't trust an AI agent, how a board game works without sight. I research first, prototype at the fidelity the
                question needs, and stay for the numbers after launch.
              </p>
              <p className="mt-4 text-[var(--muted)] leading-relaxed">
                Off-screen it's tennis, painting, and whatever hobby I'm obsessed with this month. Once, a terracotta air cooler.
              </p>
              <ul className="mt-6 space-y-1.5 text-sm">
                {EXPERIENCE.map((e) => (
                  <li key={e.what + e.where}><span className="text-[var(--muted)] inline-block w-28">{e.when}</span>{e.what}, {e.where}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" aria-labelledby="contact-title" className="max-w-3xl mx-auto pb-24 md:pb-32 scroll-mt-24">
          <h2 id="contact-title" className="v2-hand text-3xl text-[var(--blue)]">say hello</h2>
          <p className="v2-serif text-[clamp(1.7rem,3.6vw,2.6rem)] leading-snug mt-2">
            Hiring, or curious about a project? <a href={`mailto:${EMAIL}`} className={`relative inline-block ${FOCUS}`}>Write to me<Squiggle /></a>.
          </p>
          <p className="mt-3 text-[var(--muted)]">Worst case, I send moodboards.</p>
          <p className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm">
            <span className="font-semibold">{EMAIL}</span>
            <CopyEmail />
            <a href="https://www.linkedin.com/in/charvigolechha/" target="_blank" rel="noopener noreferrer" className={`underline underline-offset-4 decoration-[var(--rule)] hover:decoration-[var(--accent)] ${FOCUS}`}>LinkedIn ↗</a>
            <a href="https://behance.net/charvigolechha" target="_blank" rel="noopener noreferrer" className={`underline underline-offset-4 decoration-[var(--rule)] hover:decoration-[var(--accent)] ${FOCUS}`}>Behance ↗</a>
          </p>
        </section>
      </main>

    </div>
  );
}
