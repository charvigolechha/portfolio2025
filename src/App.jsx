import React, { useEffect, useRef } from "react";
import { Routes, Route, Link, useParams, useLocation } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import ProjectPage from "./pages/ProjectPage";
import AgenticAIProjectPage from "./pages/AgenticAIProjectPage";
import EzamCaseStudy from "./pages/EzamCaseStudy";
import projects from "./data/projects";
import Button from "./components/Button";
import { HiOutlineDocumentArrowDown, HiOutlineArrowRightCircle } from "react-icons/hi2";
import TypewriterTitles from "./components/TypewriterTitles";
import HorizontalCarousel from "./components/HorizontalCarousel";

/* Project Card */
function ProjectCard({ title, company, year, image, slug }) {
  return (
    <Link to={`/projects/${slug}`}>
      <div className="project-card bg-white rounded-xl shadow-md mx-auto overflow-hidden w-full hover:shadow-lg transition">
        <div className="project-inner-padding">
          <div className="mb-3">
            <h3 className="text-xl sm:text-2xl font-bold text-black text-left leading-snug">
              {title}
            </h3>
            <hr className="hr-subtle my-3" />
          </div>

          <div className="flex justify-between text-sm text-gray-800 mb-3">
            <span>{company}</span>
            <span>{year}</span>
          </div>

          <div className="relative w-full rounded-lg overflow-hidden">
            <div className="w-full bg-gray-300 rounded-md flex items-center justify-center">
              {image ? (
                <div className="w-full aspect-[16/9] rounded-md overflow-hidden relative">
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover block"
                    draggable="false"
                  />
                  {/* Icon overlay */}
                  <span className="absolute bottom-3 right-3 z-10 flex items-center justify-center">
                    <HiOutlineArrowRightCircle className="text-4xl text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]" />
                  </span>
                </div>
              ) : (
                <div className="w-full aspect-[16/9] bg-gray-400 rounded-md" />
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

/* Home */
function Home() {
  return (
    <div className="relative">
      {/* Hero */}
      <section className="home flex flex-col justify-center min-h-screen max-w-6xl px-4 mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-left">Charvi Golechha</h1>
        <p className="text-lg md:text-xl text-gray-800 text-left">
          <TypewriterTitles />
        </p>
      </section>

      {/* My Work */}
      <section className="my-work py-20 max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-left">Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              title={project.title}
              company={project.company}
              year={project.year}
              image={project.heroImage}
              slug={project.slug}
            />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="about py-20 max-w-4xl mx-auto px-6 text-center mb-0">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-12 md:gap-20">
          {/* Left column: Hello + first line */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 tracking-tight text-center md:text-left">Hello!</h2>
            <p className="text-l md:text-4xl font-bold text-gray-900 leading-tight mb-6 text-center md:text-left">
              I’m Charvi — a designer obsessed with{" "}
              <span className="text-blue-700">bringing clarity</span> to complex systems.
            </p>
          </div>
          {/* Right column: What I Do & Beyond Work */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start gap-10">
            <div>
              <p className="uppercase text-s font-bold text-gray-400 tracking-widest mb-2 text-center md:text-left">What I Do</p>
              <p className="text-lg md:text-xl text-gray-900 font-medium max-w-4xl mx-auto mb-4 text-center md:text-left">
                So far, I've loved turning{" "}
                <span className="font-semibold text-blue-700">messy systems</span> and{" "}
                <span className="font-semibold text-blue-700">vague ideas</span> into experiences that make sense — across{" "}
                <span className="font-semibold text-blue-700">gaming</span>,{" "}
                <span className="font-semibold text-blue-700">private markets</span>,{" "}
                <span className="font-semibold text-blue-700">service platforms</span>, and even the occasional hardware experiment
                <span className="italic text-gray-700"> (yes, including a terracotta air cooler)</span>.
              </p>
            </div>
            <div>
              <p className="uppercase text-s font-bold text-gray-400 tracking-widest mb-2 text-center md:text-left">Beyond Work</p>
              <p className="text-lg md:text-xl text-gray-900 font-medium max-w-4xl mx-auto text-center md:text-left">
                Off-screen, I switch between{" "}
                <span className="font-semibold text-blue-700">tennis</span>,{" "}
                <span className="font-semibold text-blue-700">painting</span>, and whatever{" "}
                <span className="font-semibold text-blue-700">new hobby</span> I decide to obsess over that month.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* My Life */}
      <section className="my-life py-0 md:py-0 relative mt--80">
        <div className="max-w-5xl mx-auto mb-20">
          <HorizontalCarousel
            items={[
              { src: "/images/life1.jpg", caption: "Slow design is my love language." },
              { src: "/images/life2.jpg", caption: "Sharing my work on inclusive game design at ServDes 2025." },
              { src: "/images/life3.jpg", caption: "Powered by adrenaline and bad jokes." },
              { src: "/images/life4.jpg", caption: "Experiencing ProtoVillage with Titan" },
              { src: "/images/life5.jpg", caption: "Reset button, every time." },
            ]}
            interval={5000}
          />
        </div>
      </section>

      {/* Closing Section */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h3 className="text-2xl md:text-3xl font-bold mb-6">
          Write to me<span className="font-normal"> — worst case, I send moodboards.📩</span>
        </h3>
        <a
          href="mailto:golechhacharvi@gmail.com"
          className="inline-block mt-2 px-6 py-3 rounded-full bg-blue-700 text-white text-lg md:text-l font-semibold transition-all duration-300 ease-in-out hover:bg-black mb-8"
        >
          golechhacharvi@gmail.com
        </a>
      </section>
    </div>
  );
}

function ProjectRouteHandler() {
  const { slug } = useParams();

  if (slug === "agentic-ai-private-equity") {
    return <AgenticAIProjectPage />;
  }
  if (slug === "ezam") {
    return <EzamCaseStudy />;
  }
  // Default: puzzle project
  return <ProjectPage />;
}

/* ScrollToTop on route change */
function ScrollToTop() {
  const location = useLocation();
  useEffect(() => {
    // Only scroll to top on route change if not on home page
    if (location.pathname !== "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location.pathname]);
  return null;
}

/* Routes */
export default function App() {
  const location = useLocation();
  const isProjectPage = location.pathname.startsWith("/projects/");
  const resumeClickCount = useRef(0);

  const handleResumeClick = () => {
    resumeClickCount.current += 1;
    if (resumeClickCount.current === 2) {
      toast("Check your downloads!");
    }
  };

  return (
    <div className="relative">
      <Toaster position="top-center" />
      <ScrollToTop />
      {/* Floating resume button - always visible */}
      <Button
        href="/CharviGolechha_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        download
        className="fixed top-8 right-8 flex items-center gap-2 bg-blue-700 text-white hover:bg-blue-600 shadow-lg font-semibold px-6 py-3 rounded-full transition z-50"
        onClick={handleResumeClick}
      >
        <HiOutlineDocumentArrowDown className="text-xl text-white" />
        <span className="text-white font-semibold">Resume</span>
      </Button>

      {/* Back to Home button - only on project pages */}
      {isProjectPage && (
        <div className="fixed right-8 z-40" style={{ top: 88 }}>
          <Link
            to="/"
            className="flex items-center gap-2 bg-gray-100/70 text-gray-800 hover:bg-gray-200 shadow-md font-semibold px-6 py-3 rounded-full transition"
          >
            <span className="text-xl">&#8592;</span>
            Back to Home
          </Link>
        </div>
      )}

      <Routes>
        <Route path="/" element={<><Home /><SiteFooter /></>} />
        <Route path="/projects/:slug" element={<><ProjectRouteHandler /><SiteFooter /></>} />
        <Route
          path="*"
          element={
            <>
              <div className="max-w-4xl mx-auto py-20 px-4">
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
    </div>
  );
}

function SiteFooter() {
  return (
    <footer className="text-center py-12 border-t border-gray-300">
      <p className="mb-2">© 2025 Charvi Golechha • Designed & coded with care ♥︎</p>
      <p className="flex justify-center gap-4 flex-wrap">
        <a
          href="https://www.linkedin.com/in/charvigolechha/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 hover:text-gray-600"
        >
          LinkedIn
        </a>
        •
        <a
          href="https://behance.net/charvigolechha"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 hover:text-gray-600"
        >
          Behance
        </a>
      </p>
    </footer>
  );
}
