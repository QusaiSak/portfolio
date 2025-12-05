"use client";
import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import credence from "/project/credence.png";
import devarc from "/project/devarc.png";
import webextract from "/project/webextract.png";

gsap.registerPlugin(ScrollTrigger);

// Featured Projects (Top 3)
const featuredProjects = [
  {
    title: "Credence",
    description:
      "AI fact checker on WhatsApp that instantly verifies claims by searching trusted sources and learning from past checks, making accurate information accessible. Features WhatsApp helpline, Developer API, Web-based fact checker, and Chrome extension.",
    tech: [
      "React",
      "TypeScript",
      "FastAPI",
      "LangChain",
      "Groq",
      "Upstash Vector",
    ],
    github: "https://github.com/QusaiSak/MainMumbaiHacks",
    image: credence,
  },
  {
    title: "DevArc",
    description:
      "AI-powered code analysis and documentation tool that helps developers understand, document, and maintain codebases. Automatically generates comprehensive documentation, provides architectural insights, and visualizes data flows with interactive Mermaid.js diagrams.",
    tech: ["React", "TypeScript", "PostgreSQL", "Drizzle ORM", "OpenRouter API"],
    github: "https://github.com/QusaiSak/DevArc",
    image: devarc,
  },
  {
    title: "WebExtract",
    description:
      "Web scraping and workflow automation platform with a visual drag-and-drop builder. Create automation workflows to extract data from websites, process with AI, generate documents, and perform fact-checking with SERP queries and live log streaming.",
    tech: [
      "Next.js",
      "React Flow",
      "Prisma",
      "Puppeteer",
      "Clerk",
      "OpenRouter API",
    ],
    github: "https://github.com/QusaiSak/WebExtract",
    live: "#",
    image: webextract,
  },
];

// Other Notable Projects
const otherProjects = [
  {
    title: "Vision Capital",
    description:
      "A financial dashboard for tracking investments, providing real-time data visualization and analytics.",
    tech: ["React", "TailwindCSS", "NodeJs", "MongoDB"],
    github: "https://github.com/QusaiSak/VisionCapital",
  },
  {
    title: "Iotian",
    description:
      "An ecommerce website focused on selling tech devices, integrating animation for a better UX.",
    tech: ["React", "TailwindCSS"],
    github: "https://github.com/Karannisar/ioreact",
  },
  {
    title: "HostIT",
    description:
      "HostIT is a modern, user-friendly platform that simplifies application deployment through GitHub integration, offering features like one-click deployments, real-time monitoring, and AI-powered assistance.",
    tech: ["React", "TailwindCSS" , "Clerk" , "OpenRouter API"],
    github: "https://github.com/QusaiSak/Hostit",
  },
];

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const otherProjectsRef = useRef<HTMLDivElement>(null);
  const [showAllProjects, setShowAllProjects] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      const cards = cardsRef.current?.children;
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 100 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.3,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 75%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      gsap.fromTo(
        otherProjectsRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: otherProjectsRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const displayedProjects = showAllProjects
    ? otherProjects
    : otherProjects.slice(0, 3);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative bg-white overflow-hidden py-24 md:py-32"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft gradient blobs */}
        <div className="absolute top-40 right-20 w-96 h-96 bg-orange-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-72 h-72 bg-amber-100/30 rounded-full blur-3xl"></div>
        
        {/* Code tags - top right */}
        <span className="absolute top-16 right-8 sm:right-16 text-black/[0.02] text-[6rem] sm:text-[10rem] lg:text-[14rem] font-mono select-none">
          {"</>"}
        </span>

        {/* Return keyword - bottom left */}
        <span className="absolute bottom-32 left-8 sm:left-12 text-black/[0.02] text-[4rem] sm:text-[6rem] lg:text-[8rem] font-mono select-none">
          {"return"}
        </span>

        {/* Subtle dots */}
        <div className="hidden lg:grid absolute top-1/4 left-20 grid-cols-2 gap-3 opacity-[0.03]">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-black"></div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        {/* Header */}
        <div
          ref={headerRef}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16 md:mb-24"
        >
          <div>
            <p className="font-mono text-sm text-orange-500 uppercase tracking-widest mb-4">
              {"// featured work"}
            </p>
            <h2 className="bai-jamjuree text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tight text-black">
              Projects
              <span className="text-orange-500">.</span>
            </h2>
            <div className="w-24 h-1.5 bg-orange-500 mt-6"></div>
          </div>
          <a
            href="https://github.com/QusaiSak"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 space-grotesk text-base uppercase tracking-wide text-black/60 hover:text-orange-500 transition-colors duration-300 group"
          >
            View All on GitHub
            <svg
              className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>

        {/* Featured Projects */}
        <div ref={cardsRef} className="space-y-20 md:space-y-32">
          {featuredProjects.map((project, index) => (
            <div
              key={project.title}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-10 lg:gap-16 items-center`}
            >
              {/* Project Image */}
              <div className="w-full lg:w-[55%] group">
                <div className="relative overflow-hidden rounded-2xl bg-gray-50 p-4 md:p-6 transition-all duration-500 group-hover:bg-gray-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto object-contain rounded-xl shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  {/* Hover overlay with links */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex items-end justify-center pb-8">
                    <div className="flex gap-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-lg hover:scale-110"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      </a>
                      {project.live && project.live !== "#" && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white hover:bg-orange-600 transition-all duration-300 shadow-lg hover:scale-110"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="w-full lg:w-[45%]">
                {/* Project number */}
                <span className="font-mono text-lg text-orange-500 font-semibold">
                  0{index + 1}
                </span>

                {/* Title */}
                <h3 className="bai-jamjuree text-4xl md:text-5xl lg:text-6xl font-bold text-black uppercase tracking-tight mt-2">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="space-grotesk text-base md:text-lg text-black/60 leading-relaxed mt-6">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mt-8">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="font-mono text-sm px-3 py-1.5 bg-gray-100 border border-gray-200 rounded-lg text-black/70"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 mt-8">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 space-grotesk text-sm uppercase tracking-wide text-black hover:text-orange-500 transition-colors duration-300"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    View Code
                  </a>
                  {project.live && project.live !== "#" && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 space-grotesk text-sm uppercase tracking-wide text-orange-500 hover:text-orange-600 transition-colors duration-300"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects Section */}
        <div ref={otherProjectsRef} className="mt-32 md:mt-40">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <p className="font-mono text-sm text-orange-500 uppercase tracking-widest mb-4">
              {"// more work"}
            </p>
            <h3 className="bai-jamjuree text-3xl md:text-5xl font-bold uppercase tracking-tight">
              Other Projects
            </h3>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {displayedProjects.map((project, index) => (
              <a
                key={index}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 md:p-8 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-all duration-300 hover:shadow-xl cursor-pointer"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-300">
                    <svg
                      className="w-6 h-6 text-orange-500 group-hover:text-white transition-colors duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                      />
                    </svg>
                  </div>
                  <svg
                    className="w-5 h-5 text-black/30 group-hover:text-orange-500 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 17L17 7M17 7H7M17 7V17"
                    />
                  </svg>
                </div>

                {/* Title */}
                <h4 className="bai-jamjuree text-xl md:text-2xl font-bold text-black uppercase tracking-tight group-hover:text-orange-500 transition-colors duration-300">
                  {project.title}
                </h4>

                {/* Description */}
                <p className="space-grotesk text-sm text-black/60 leading-relaxed mt-3 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="font-mono text-xs text-black/50"
                    >
                      {tech}
                      {techIndex < project.tech.length - 1 && (
                        <span className="ml-2">•</span>
                      )}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>

          {/* Show More Button */}
          {otherProjects.length > 3 && (
            <div className="flex justify-center mt-12">
              <button
                onClick={() => setShowAllProjects(!showAllProjects)}
                className="space-grotesk text-sm uppercase tracking-wide px-8 py-4 border-2 border-black text-black rounded-full hover:bg-black hover:text-white transition-all duration-300"
              >
                {showAllProjects ? "Show Less" : "Show More Projects"}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;