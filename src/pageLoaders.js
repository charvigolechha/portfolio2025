// Case study pages are loaded on demand: each becomes its own small file that the
// browser only downloads when someone opens that page. The home page stays light.
export const pageLoaders = {
  "puzzle-progression":        () => import("./pages/ProjectPage"),
  "agentic-ai-private-equity": () => import("./pages/AgenticAIProjectPage"),
  "ezam":                      () => import("./pages/EzamCaseStudy"),
  "picmerge":                  () => import("./pages/PicMergeCaseStudy"),
};

// Start downloading a case study's code early (e.g. when its card is hovered),
// so it usually opens instantly. Calling import() twice is safe: the browser reuses it.
export const prefetchPage = (slug) => (pageLoaders[slug] ?? pageLoaders["puzzle-progression"])();
