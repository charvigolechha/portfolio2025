import React from "react";
import { Routes, Route, Link, useParams } from "react-router-dom";
import ProjectPage from "./pages/ProjectPage";
import AgenticAIProjectPage from "./pages/AgenticAIProjectPage";
import projects from "./data/projects";
import Button from "./components/Button"; // adjust path if needed
import { HiOutlineDocumentArrowDown } from "react-icons/hi2"; // Add this import
import TypewriterTitles from "./components/TypewriterTitles";
import HorizontalCarousel from "./components/HorizontalCarousel";

/* Project Card */
function ProjectCard({ title, company, year, image, slug }) {
  return (
    <Link to={`/projects/${slug}`} className="block">
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
                <div className="w-full aspect-[16/9] rounded-md overflow-hidden">
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover block"
                    draggable="false"
                  />
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
      {/* Floating resume button */}
      <Button
        href="/Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        download
        className="fixed top-8 right-8 flex items-center gap-2"
      >
        <HiOutlineDocumentArrowDown className="text-xl" />
        Resume
      </Button>

      {/* Hero */}
      <section className="home flex flex-col justify-center min-h-screen max-w-6xl px-4 mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-left">Charvi Golechha</h1>
        <p className="text-lg md:text-xl text-gray-800 text-left">
          <TypewriterTitles />
        </p>
      </section>

      {/* My Work */}
      <section className="my-work py-20 max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-1 text-left">My Work</h2>
        <p className="italic text-gray-500 mb-8 text-left">(what you’re probably here for)</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Puzzle project card */}
          {projects[0] && (
            <ProjectCard
              key={projects[0].slug}
              title={projects[0].title}
              company={projects[0].company}
              year={projects[0].year}
              image={projects[0].image}
              slug={projects[0].slug}
            />
          )}
          {/* New Infinite Possibilities project card */}
          <ProjectCard
            title="Agentic AI Workflows for Private Equity Teams"
            company="Infinite Possibilities"
            year="2025"
            image={null}
            slug="agentic-ai-private-equity"
          />
        </div>
      </section>

      {/* About Section */}
      <section className="about py-20 max-w-4xl mx-auto px-6 text-center mb-0">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 tracking-tight">Hello!</h2>
        <div className="flex flex-col items-center gap-8">
          <div>
            <p className="text-l md:text-4xl font-bold text-gray-900 leading-tight mb-6">
              I’m Charvi — a designer obsessed with{" "}
              <span className="text-blue-700">bringing clarity</span> to complex systems.
            </p>
          </div>
          <div>
            <p className="uppercase text-s font-bold text-gray-400 tracking-widest mb-2">What I Do</p>
            <p className="text-lg md:text-xl text-gray-700 font-medium max-w-4xl mx-auto mb-4">
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
              <p className="uppercase text-s font-bold text-gray-400 tracking-widest mb-2">Beyond Work</p>
              <p className="text-lg md:text-xl text-gray-700 font-medium max-w-4xl mx-auto">
                Off-screen, I switch between{" "}
                <span className="font-semibold text-blue-700">tennis</span>,{" "}
                <span className="font-semibold text-blue-700">painting</span>, and whatever{" "}
                <span className="font-semibold text-blue-700">new hobby</span> I decide to obsess over that month.{" "}
              </p>
            </div>
          </div>
      </section>

      {/* My Life */}
      <section className="my-life py-0 md:py-0 relative mt--80">
        <div className="max-w-5xl mx-auto mb-8">
          <HorizontalCarousel
            items={[
              { src: "/images/life1.jpg", caption: "Presenting my research on equitable game design at ServDes 2025." },
              { src: "/images/life2.jpg", caption: "Game research talk — ServDes conference snapshot." },
              { src: "/images/life3.jpg", caption: "Fieldwork & playtesting sessions with real players." },
              { src: "/images/life4.jpg", caption: "Skating in the city after a long day." },
              { src: "/images/life5.jpg", caption: "My sketchbook and coffee ritual." },
              { src: "/images/life6.jpg", caption: "Late-night Figma explorations." },
              { src: "/images/life7.jpg", caption: "Tennis with friends." },
              { src: "/images/life8.jpg", caption: "Travel snapshots from 2025." },
            ]}
            interval={5000}
          />
        </div>
      </section>

      {/* Get In Touch */}
      <footer className="text-center py-12 border-t border-gray-300">
        <p className="mb-2">golechhacharvi@gmail.com</p>
        <p className="mb-2">© 2025 Charvi Golechha • Designed & coded with care.</p>
        <p className="flex justify-center gap-4 flex-wrap">
          <a href="https://linkedin.com/in/charvigolechha" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-600">LinkedIn</a>•
          <a href="https://behance.net/charvigolechha" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-600">Behance</a>
        </p>
      </footer>
    </div>
  );
}

function ProjectRouteHandler() {
  const { slug } = useParams();

  if (slug === "agentic-ai-private-equity") {
    return <AgenticAIProjectPage />;
  }
  // Default: puzzle project
  return <ProjectPage />;
}

/* Routes */
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects/:slug" element={<ProjectRouteHandler />} />
      <Route
        path="*"
        element={
          <div className="max-w-4xl mx-auto py-20 px-4">
            <h2 className="text-2xl font-bold mb-4">Page not found</h2>
            <p>
              <Link to="/" className="text-blue-600 underline">
                Return home
              </Link>
            </p>
          </div>
        }
      />
    </Routes>
  );
}
