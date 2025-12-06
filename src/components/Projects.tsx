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
    subtitle: "AI Fact-Checking Platform",
    description:
      "AI fact checker on WhatsApp that instantly verifies claims by searching trusted sources and learning from past checks. Features WhatsApp helpline, Developer API, Web-based fact checker, and Chrome extension.",
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
    highlights: ["WhatsApp Integration", "Chrome Extension", "Developer API"],
  },
  {
    title: "DevArc",
    subtitle: "Code Documentation Tool",
    description:
      "AI-powered code analysis and documentation tool that helps developers understand, document, and maintain codebases. Automatically generates comprehensive documentation and visualizes data flows with interactive Mermaid.js diagrams.",
    tech: ["React", "TypeScript", "PostgreSQL", "Drizzle ORM", "OpenRouter API"],
    github: "https://github.com/QusaiSak/DevArc",
    image: devarc,
    highlights: ["Auto Documentation", "Architecture Insights", "Flow Diagrams"],
  },
  {
    title: "WebExtract",
    subtitle: "Workflow Automation Platform",
    description:
      "Web scraping and workflow automation platform with a visual drag-and-drop builder. Create automation workflows to extract data, process with AI, generate documents, and perform fact-checking with live log streaming.",
    tech: [
      "Next.js",
      "React Flow",
      "Prisma",
      "Puppeteer",
      "Clerk",
      "OpenRouter API",
    ],
    github: "https://github.com/QusaiSak/WebExtract",
    image: webextract,
    highlights: ["Visual Builder", "AI Processing", "Live Streaming"],
  },
];

// Other Notable Projects
const otherProjects = [
  {
    title: "Vision Capital",
    description:
      "A financial dashboard for tracking investments, providing real-time data visualization and analytics.",
    tech: ["React", "TailwindCSS", "Node.js", "MongoDB"],
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
      "A modern platform that simplifies application deployment through GitHub integration with one-click deployments and AI-powered assistance.",
    tech: ["React", "TailwindCSS", "Clerk", "OpenRouter API"],
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
        <div className="absolute top-40 right-20 w-96 h-96 bg-orange-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-72 h-72 bg-amber-100/30 rounded-full blur-3xl"></div>

        <span className="absolute top-16 right-8 sm:right-16 text-black/[0.02] text-[6rem] sm:text-[10rem] lg:text-[14rem] font-mono select-none">
          {"</>"}
        </span>

        <span className="absolute bottom-32 left-8 sm:left-12 text-black/[0.02] text-[4rem] sm:text-[6rem] lg:text-[8rem] font-mono select-none">
          {"return"}
        </span>

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
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-px bg-orange-500"></div>
              <span className="text-orange-500 font-mono text-sm uppercase tracking-wider">
                Featured Work
              </span>
            </div>
            <h2 className="bai-jamjuree text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tight text-black">
              Projects
              <span className="text-orange-500">.</span>
            </h2>
            <p className="space-grotesk text-black/50 mt-4 max-w-md">
              A selection of projects I've built — from AI platforms to automation tools.
            </p>
          </div>
          <a
            href="https://github.com/QusaiSak"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 space-grotesk text-base uppercase tracking-wide text-black/60 hover:text-orange-500 transition-colors duration-300 group"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            View All on GitHub
            <svg
              className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
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
        <div ref={cardsRef} className="space-y-24 md:space-y-32">
          {featuredProjects.map((project, index) => (
            <div
              key={project.title}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-10 lg:gap-16 items-center`}
            >
              {/* Project Image */}
              <div className="w-full lg:w-[55%] group">
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-6 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-orange-500/10">
                  {/* Project number watermark */}
                  <span className="absolute top-4 left-4 font-mono text-6xl md:text-8xl font-bold text-black/[0.03] select-none">
                    0{index + 1}
                  </span>
                  
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto object-contain rounded-xl shadow-2xl transition-transform duration-500 group-hover:scale-[1.02] relative z-10"
                  />
                  
                  {/* Hover overlay with links */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex items-end justify-center pb-8 z-20">
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
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="w-full lg:w-[45%]">
                {/* Project number & subtitle */}
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-mono text-sm text-orange-500 font-semibold">
                    0{index + 1}
                  </span>
                  <span className="text-black/30">—</span>
                  <span className="font-mono text-sm text-black/40 uppercase tracking-wider">
                    {project.subtitle}
                  </span>
                </div>

                {/* Title */}
                <h3 className="bai-jamjuree text-4xl md:text-5xl lg:text-6xl font-bold text-black uppercase tracking-tight">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="space-grotesk text-base md:text-lg text-black/60 leading-relaxed mt-6">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {project.highlights.map((highlight, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1.5 font-mono text-xs px-3 py-1.5 bg-orange-50 text-orange-600 rounded-full border border-orange-100"
                    >
                      <svg
                        className="w-3 h-3"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {highlight}
                    </span>
                  ))}
                </div>

                {/* Tech stack */}
                <div className="mt-6">
                  <span className="font-mono text-xs text-black/30 uppercase tracking-wider block mb-3">
                    Built with
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="font-mono text-sm px-3 py-1.5 bg-gray-100 border border-gray-200 rounded-lg text-black/70 hover:bg-black hover:text-white hover:border-black transition-all duration-200 cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-4 mt-8">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link inline-flex items-center gap-2 space-grotesk text-sm uppercase tracking-wide bg-black text-white px-5 py-2.5 rounded-full hover:bg-orange-500 transition-all duration-300"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    View Code
                    <svg
                      className="w-3 h-3 group-hover/link:translate-x-0.5 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects Section */}
        <div ref={otherProjectsRef} className="mt-32 md:mt-40">
          {/* Section Header */}
          <div className="flex items-center justify-between mb-12 md:mb-16">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-px bg-black/20"></div>
                <span className="font-mono text-sm text-black/40 uppercase tracking-wider">
                  More Work
                </span>
              </div>
              <h3 className="bai-jamjuree text-3xl md:text-5xl font-bold uppercase tracking-tight">
                Other Projects
              </h3>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {displayedProjects.map((project, index) => (
              <a
                key={index}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 md:p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-black/5 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-300 cursor-pointer"
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
                    className="w-5 h-5 text-black/20 group-hover:text-orange-500 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
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
                <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-black/5">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="font-mono text-xs text-black/50"
                    >
                      {tech}
                      {techIndex < project.tech.length - 1 && (
                        <span className="ml-2 text-black/20">•</span>
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
                className="group space-grotesk text-sm uppercase tracking-wide px-8 py-4 border-2 border-black text-black rounded-full hover:bg-black hover:text-white transition-all duration-300"
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