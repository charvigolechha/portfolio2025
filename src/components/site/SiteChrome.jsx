import React from "react";
import { Link, useLocation } from "react-router-dom";

/*
  The site's shared look: colours and fonts, the header, and the footer.
  Used on every page (home and case studies), so they always match.

  1. Styles: colour tokens and font classes
  2. SiteHeader: "ivvi", Work / About / Contact, Resume
  3. SiteFooter
*/

// ─── 1. Styles ───────────────────────────────────────────────────────────────
// .v2 is the home page itself (it paints the creme background).
// .site-chrome only carries the colours, so the header and footer can use them
// on any page without changing that page's background.
const SITE_CSS = `
@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@500;700&display=swap');
.v2, .site-chrome {
  --paper: #FBF7F1;
  --card: #FFFDF9;
  --ink: #2A2420;
  --muted: #6A6058;
  --rule: #E6DCCF;
  --accent: #C0582E;   /* terracotta, a painter's colour */
  --blue: #3B5BA9;     /* the ink blue of the hand-drawn girl */
}
.v2 { background: var(--paper); color: var(--ink); }
.site-chrome { color: var(--ink); }
.v2-serif { font-family: 'Fraunces', Georgia, serif; font-optical-sizing: auto; }
.v2-mono  { font-family: 'JetBrains Mono', ui-monospace, Menlo, monospace; }
.v2-hand  { font-family: 'Caveat', 'Comic Sans MS', cursive; }
html:has(.v2) { scroll-behavior: smooth; }
@media (prefers-reduced-motion: reduce) { html:has(.v2) { scroll-behavior: auto; } }
`;

export function SiteStyles() {
  return <style>{SITE_CSS}</style>;
}

export const FOCUS = "rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1C1A17]";
export const EMAIL = "golechhacharvi@gmail.com";
export const RESUME = "/CharviGolechha_Resume.pdf";

const SECTIONS = [["Work", "work"], ["About", "about"], ["Contact", "contact"]];

// On the home page, scroll straight to the section. On other pages, go home
// with the section in the URL (e.g. /#work); App's scroll manager takes it from there.
function useGoToSection() {
  const { pathname } = useLocation();
  return (e, id) => {
    if (pathname !== "/") return; // let the link navigate home
    e.preventDefault();
    if (id === "top") window.scrollTo({ top: 0 });
    else document.getElementById(id)?.scrollIntoView();
    // keep the address bar in step (e.g. /#work), without triggering a page change
    window.history.replaceState(window.history.state, "", id === "top" ? "/" : `/#${id}`);
  };
}

// ─── 2. Header ───────────────────────────────────────────────────────────────
export function SiteHeader() {
  const [open, setOpen] = React.useState(false);
  const goTo = useGoToSection();
  const { pathname } = useLocation();

  React.useEffect(() => setOpen(false), [pathname]); // close the phone menu after navigating
  React.useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="site-chrome fixed top-0 inset-x-0 z-50 bg-[var(--paper)]/90 backdrop-blur">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* "ivvi" is the user's mark: char(iv) + vi. Screen readers hear the full name. */}
        <Link to="/" onClick={(e) => goTo(e, "top")} aria-label="Charvi Golechha, home" title="Charvi Golechha"
          className={`v2-serif text-xl font-medium tracking-tight ${FOCUS}`}>ivvi</Link>
        <nav aria-label="Main" className="hidden sm:flex items-center gap-7 text-sm font-semibold">
          {SECTIONS.map(([label, id]) => (
            <Link key={id} to={`/#${id}`} onClick={(e) => goTo(e, id)} className={`hover:text-[var(--accent)] ${FOCUS}`}>{label}</Link>
          ))}
          <a href={RESUME} target="_blank" rel="noopener noreferrer" className={`hover:text-[var(--accent)] ${FOCUS}`}>Resume ↗</a>
        </nav>
        <button type="button" className={`sm:hidden min-h-[44px] px-3 text-sm font-semibold ${FOCUS}`}
          aria-expanded={open} aria-controls="site-menu" onClick={() => setOpen((o) => !o)}>
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open && (
        <nav id="site-menu" aria-label="Main" className="sm:hidden border-t border-[var(--rule)] px-4 py-2 bg-[var(--paper)]">
          {SECTIONS.map(([label, id]) => (
            <Link key={id} to={`/#${id}`} onClick={(e) => { goTo(e, id); setOpen(false); }}
              className={`block py-3 text-base font-semibold border-b border-[var(--rule)] ${FOCUS}`}>{label}</Link>
          ))}
          <a href={RESUME} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}
            className={`block py-3 text-base font-semibold ${FOCUS}`}>Resume ↗</a>
        </nav>
      )}
    </header>
  );
}

// ─── 3. Footer ───────────────────────────────────────────────────────────────
// showSocial: the home page already lists LinkedIn and Behance in its contact section.
// bordered: a thin line on top, to separate it from case study pages.
export function SiteFooter({ showSocial = true, bordered = true }) {
  const link = `underline underline-offset-2 decoration-[var(--rule)] hover:decoration-[var(--accent)] ${FOCUS}`;
  return (
    <footer className={`site-chrome px-5 sm:px-8 py-8 ${bordered ? "border-t border-[var(--rule)]" : ""}`}>
      <div className="max-w-5xl mx-auto flex flex-wrap justify-between gap-3 text-xs text-[var(--muted)]">
        <span>© {new Date().getFullYear()} Charvi Golechha · drawn, designed and coded by me</span>
        <span className="flex flex-wrap gap-x-5 gap-y-2">
          {showSocial && (
            <>
              <a href="https://www.linkedin.com/in/charvigolechha/" target="_blank" rel="noopener noreferrer" className={link}>LinkedIn ↗</a>
              <a href="https://behance.net/charvigolechha" target="_blank" rel="noopener noreferrer" className={link}>Behance ↗</a>
            </>
          )}
          <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className={link}>back to top ↑</button>
        </span>
      </div>
    </footer>
  );
}
