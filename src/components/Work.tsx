import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const highlightsRef = useRef<HTMLDivElement>(null);

  const experience = {
    role: "Full Stack Developer Intern",
    company: "Offee (Orage Digital)",
    location: "Mumbai, India",
    duration: "May 2025 – July 2025",
    type: "Internship",
    description:
      "Worked on production-grade web applications, building end-to-end features from frontend interfaces to backend APIs and database architecture.",
    highlights: [
      {
        title: "Web Applications",
        description:
          "Built production-ready applications using Angular, React, and Node.js for real users",
        icon: (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        ),
      },
      {
        title: "Analytics Dashboards",
        description:
          "Created real-time data visualization dashboards improving staff decision-making efficiency",
        icon: (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            />
          </svg>
        ),
      },
      {
        title: "RESTful APIs",
        description:
          "Engineered secure APIs with authentication, logging, and error handling for SQL/NoSQL databases",
        icon: (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        ),
      },
      {
        title: "AI Document Processing",
        description:
          "Developed AI-based system for automated document processing and data extraction",
        icon: (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
            />
          </svg>
        ),
      },
    ],
    technologies: [
      "React",
      "Angular",
      "Node.js",
      "Express",
      "PostgreSQL",
      "MongoDB",
      "DigitalOcean",
    ],
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, x: -100 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        descRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: descRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );

      const highlights = highlightsRef.current?.children;
      if (highlights) {
        gsap.fromTo(
          highlights,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: highlightsRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="work"
      className="relative bg-white py-24 md:py-32 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <span className="absolute top-16 right-8 sm:right-16 text-black/[0.02] text-[6rem] sm:text-[10rem] lg:text-[14rem] font-mono select-none">
          {"{ }"}
        </span>

        <span className="absolute bottom-20 left-8 sm:left-12 text-black/[0.02] text-[3rem] sm:text-[5rem] lg:text-[7rem] font-mono select-none">
          {"async"}
        </span>

        {/* Timeline line decoration */}
        <div className="hidden lg:block absolute top-1/4 left-1/3 w-px h-32 bg-gradient-to-b from-transparent via-black/5 to-transparent"></div>

        {/* Dots pattern */}
        <div className="hidden md:grid absolute top-32 right-24 grid-cols-3 gap-3 opacity-[0.03]">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-black"></div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Header Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-16 md:mb-24">
          {/* Title - Left */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-px bg-orange-500"></div>
              <span className="text-orange-500 font-mono text-sm uppercase tracking-wider">
                Experience
              </span>
            </div>
            <h2
              ref={titleRef}
              className="bai-jamjuree text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tight"
            >
              Work
              <span className="text-orange-500">.</span>
            </h2>
          </div>

          <div className="hidden lg:block"></div>

          {/* Description - Right */}
          <div className="lg:col-span-1 flex flex-col justify-end">
            <p
              ref={descRef}
              className="space-grotesk text-lg md:text-xl text-black/60 leading-relaxed"
            >
              Hands-on experience building production applications with modern
              technologies and best practices.
            </p>
          </div>
        </div>

        {/* Experience Card */}
        <div
          ref={cardRef}
          className="relative bg-gradient-to-br from-gray-50 to-white rounded-3xl border border-black/5 overflow-hidden hover:shadow-2xl hover:shadow-orange-500/5 transition-all duration-500"
        >
          {/* Card Header */}
          <div className="p-8 md:p-12 pb-0">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 pb-8 border-b border-black/5">
              <div>
                {/* Badges */}
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="inline-flex items-center gap-1.5 font-mono text-xs px-3 py-1.5 bg-orange-100 text-orange-600 rounded-full font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                    {experience.type}
                  </span>
                  <span className="font-mono text-xs text-black/40 px-3 py-1.5 bg-gray-100 rounded-full">
                    {experience.duration}
                  </span>
                </div>

                {/* Role */}
                <h3 className="bai-jamjuree text-3xl md:text-4xl lg:text-5xl font-bold text-black uppercase tracking-tight">
                  {experience.role}
                </h3>

                {/* Company */}
                <div className="flex items-center gap-3 mt-3">
                  <span className="space-grotesk text-xl md:text-2xl text-orange-500 font-semibold">
                    {experience.company}
                  </span>
                  <span className="text-black/20">•</span>
                  <span className="space-grotesk text-base text-black/50 flex items-center gap-1.5">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    {experience.location}
                  </span>
                </div>

                {/* Description */}
                <p className="space-grotesk text-base md:text-lg text-black/60 mt-4 max-w-2xl leading-relaxed">
                  {experience.description}
                </p>
              </div>

             
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="p-8 md:p-12 pt-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-xs text-black/40 uppercase tracking-wider">
                Key Contributions
              </span>
              <div className="flex-1 h-px bg-black/5"></div>
            </div>

            <div
              ref={highlightsRef}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
            >
              {experience.highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="group p-6 bg-white rounded-2xl border border-black/5 hover:border-orange-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-orange-50 group-hover:bg-orange-500 rounded-xl flex items-center justify-center text-orange-500 group-hover:text-white transition-all duration-300 flex-shrink-0">
                      {highlight.icon}
                    </div>
                    <div>
                      <h4 className="bai-jamjuree font-bold text-lg text-black group-hover:text-orange-500 transition-colors duration-300">
                        {highlight.title}
                      </h4>
                      <p className="space-grotesk text-sm text-black/60 mt-1 leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Footer */}
          <div className="px-8 md:px-12 pb-8 md:pb-12">
            <div className="pt-6 border-t border-black/5">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <span className="font-mono text-xs text-black/40 uppercase tracking-wider whitespace-nowrap">
                  Tech Stack
                </span>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="font-mono text-sm px-3 py-1.5 bg-black text-white rounded-lg hover:bg-orange-500 transition-colors duration-300 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Hover accent */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-amber-500"></div>
        </div>

        {/* Looking for more experiences note */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gray-50 border border-black/5 rounded-full">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="space-grotesk text-sm text-black/60">
              Open to new opportunities and collaborations
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;