import React, { Suspense, lazy, useEffect } from "react";
import { Routes, Route, Link, useParams, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/react";
import { pageLoaders } from "./pageLoaders";
import HomeV2 from "./pages/HomeV2";
import { SiteStyles, SiteHeader, SiteFooter } from "./components/site/SiteChrome";
// The previous home page (v1) is kept, unused, in ./legacy/HomeV1.jsx

// Case study pages are loaded on demand (see pageLoaders.js).
const ProjectPage          = lazy(pageLoaders["puzzle-progression"]);
const AgenticAIProjectPage = lazy(pageLoaders["agentic-ai-private-equity"]);
const EzamCaseStudy        = lazy(pageLoaders["ezam"]);
const PicMergeCaseStudy    = lazy(pageLoaders["picmerge"]);

function ProjectRouteHandler() {
  const { slug } = useParams();

  if (slug === "agentic-ai-private-equity") {
    return <AgenticAIProjectPage />;
  }
  if (slug === "ezam") {
    return <EzamCaseStudy />;
  }
  if (slug === "picmerge") {
    return <PicMergeCaseStudy />;
  }
  // Default: puzzle project
  return <ProjectPage />;
}

/* Scroll on navigation: to a section if the URL has one (e.g. /#work), else to the top */
function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    // "instant": arriving on a page should jump straight into place, even where
    // the page itself uses smooth scrolling for in-page links.
    if (!hash) {
      window.scrollTo({ top: 0, behavior: "instant" });
      return;
    }
    // The section may not exist yet (the page is still loading), so try for up to a second.
    let tries = 0;
    let timer;
    const go = () => {
      const el = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (el) el.scrollIntoView({ behavior: "instant" });
      else if (tries++ < 20) timer = setTimeout(go, 50);
    };
    go();
    return () => clearTimeout(timer);
  }, [pathname, hash]);
  return null;
}

/* Routes */
export default function App() {
  return (
    <div className="relative">
      <SiteStyles />
      <Toaster position="top-center" />
      <ScrollManager />
      <SiteHeader />

      <Routes>
        <Route path="/" element={<><HomeV2 /><SiteFooter showSocial={false} bordered={false} /></>} />
        <Route
          path="/projects/:slug"
          element={
            // While a case study's code downloads, show an empty full-height space
            // (footer included inside, so it doesn't flash at the top of the page).
            <Suspense fallback={<div className="min-h-screen" aria-busy="true" />}>
              <ProjectRouteHandler />
              <SiteFooter />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <>
              <div className="max-w-4xl mx-auto pt-32 pb-20 px-4">
                <h2 className="text-2xl font-bold mb-4">Page not found</h2>
                <p>
                  <Link to="/" className="text-blue-600 underline">
                    Return home
                  </Link>
                </p>
              </div>
              <SiteFooter />
            </>
          }
        />
      </Routes>
      <Analytics />
    </div>
  );
}
