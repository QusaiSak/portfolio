import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  const skills = [
    { name: "JavaScript", category: "language" },
    { name: "TypeScript", category: "language" },
    { name: "Python", category: "language" },
    { name: "React", category: "frontend" },
    { name: "Next.js", category: "frontend" },
    { name: "Angular", category: "frontend" },
    { name: "Node.js", category: "backend" },
    { name: "Express", category: "backend" },
    { name: "PostgreSQL", category: "database" },
    { name: "MongoDB", category: "database" },
    { name: "Tailwind CSS", category: "frontend" },
    { name: "Docker", category: "devops" },
    { name: "Git", category: "devops" },
  ];

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
        contentRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      const skillTags = skillsRef.current?.children;
      if (skillTags) {
        gsap.fromTo(
          skillTags,
          { opacity: 0, y: 15 },
          {
            opacity: 1,
            y: 0,
            duration: 0.3,
            stagger: 0.04,
            ease: "power2.out",
            scrollTrigger: {
              trigger: skillsRef.current,
              start: "top 85%",
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
      id="about"
      className="relative min-h-screen bg-white py-24 md:py-32 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <span className="absolute top-16 right-8 sm:right-16 text-black/[0.02] text-[8rem] sm:text-[12rem] lg:text-[16rem] font-mono select-none">
          {"()"}
        </span>

        <span className="absolute bottom-20 left-8 sm:left-16 text-black/[0.02] text-[6rem] sm:text-[10rem] lg:text-[14rem] font-mono select-none">
          {"//"}
        </span>

        <div className="hidden md:grid absolute top-32 left-24 grid-cols-3 gap-3 opacity-[0.03]">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-black"></div>
          ))}
        </div>

        <div className="hidden lg:block absolute top-1/2 right-12 w-px h-32 bg-black/[0.04]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Section Title */}
        <div className="mb-16 md:mb-24">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-px bg-orange-500"></div>
            <span className="text-orange-500 font-mono text-sm uppercase tracking-wider">
              Get to know me
            </span>
          </div>
          <h2
            ref={titleRef}
            className="bai-jamjuree text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tight"
          >
            About
            <span className="text-orange-500">.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left - Content */}
          <div ref={contentRef} className="space-y-6 md:space-y-8">
            <p className="space-grotesk text-lg md:text-xl lg:text-2xl text-black/80 leading-relaxed">
              Hey! I'm{" "}
              <span className="font-bold text-black">Qusai Sakerwala</span>, a
              Full Stack Developer based in{" "}
              <span className="text-orange-500 font-semibold">
                Mumbai, India
              </span>
              . I build web applications that solve real problems and deliver
              actual value.
            </p>

            <p className="space-grotesk text-lg md:text-xl lg:text-2xl text-black/70 leading-relaxed">
              My toolkit includes{" "}
              <span className="font-semibold">React</span>,{" "}
              <span className="font-semibold">Next.js</span>,{" "}
              <span className="font-semibold">Node.js</span>, and{" "}
              <span className="font-semibold">TypeScript</span>. I work across
              the entire stack from crafting intuitive interfaces to designing
              scalable APIs and database architectures.
            </p>

            <p className="space-grotesk text-lg md:text-xl lg:text-2xl text-black/70 leading-relaxed">
              Recent work includes AI-powered fact-checking platforms, code
              documentation tools, and workflow automation systems. I enjoy
              turning complex problems into clean, maintainable solutions.
            </p>

            {/* Quick Info */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-gray-50 rounded-xl border border-black/5">
                <span className="font-mono text-xs text-black/40 uppercase tracking-wider">
                  Focus
                </span>
                <p className="space-grotesk font-semibold text-black mt-1">
                  Full Stack Development
                </p>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl border border-black/5">
                <span className="font-mono text-xs text-black/40 uppercase tracking-wider">
                  Status
                </span>
                <p className="space-grotesk font-semibold text-black mt-1 flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  Open to Work
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 space-grotesk text-base md:text-lg uppercase tracking-wide bg-black text-white px-8 py-4 rounded-full hover:bg-orange-500 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-orange-500/20"
              >
                Let's Connect
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
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
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 space-grotesk text-base md:text-lg uppercase tracking-wide border-2 border-black/10 text-black px-8 py-4 rounded-full hover:border-orange-500 hover:text-orange-500 transition-all duration-300"
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
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Resume
              </a>
            </div>
          </div>

          {/* Right - Code Block & Skills */}
          <div ref={imageRef} className="space-y-8">
            {/* Terminal/Code Block */}
            <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
              {/* Terminal Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-gray-800 border-b border-gray-700">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 transition-colors cursor-pointer"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 transition-colors cursor-pointer"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-400 transition-colors cursor-pointer"></div>
                </div>
                <span className="font-mono text-xs text-gray-400">
                  about.ts
                </span>
                <div className="w-16"></div>
              </div>

              {/* Code Content */}
              <div className="p-5 md:p-6 font-mono text-sm md:text-base overflow-x-auto">
                <pre className="text-white/90 leading-relaxed">
                  <code>
                    <span className="text-gray-500">{"// "}</span>
                    <span className="text-gray-500">developer profile</span>
                    {"\n\n"}
                    <span className="text-pink-400">interface</span>{" "}
                    <span className="text-yellow-200">Developer</span>{" "}
                    <span className="text-white">{"{"}</span>
                    {"\n"}
                    {"  "}
                    <span className="text-purple-300">name</span>
                    <span className="text-white">:</span>{" "}
                    <span className="text-blue-300">string</span>
                    <span className="text-white">;</span>
                    {"\n"}
                    {"  "}
                    <span className="text-purple-300">role</span>
                    <span className="text-white">:</span>{" "}
                    <span className="text-blue-300">string</span>
                    <span className="text-white">;</span>
                    {"\n"}
                    {"  "}
                    <span className="text-purple-300">location</span>
                    <span className="text-white">:</span>{" "}
                    <span className="text-blue-300">string</span>
                    <span className="text-white">;</span>
                    {"\n"}
                    {"  "}
                    <span className="text-purple-300">available</span>
                    <span className="text-white">:</span>{" "}
                    <span className="text-blue-300">boolean</span>
                    <span className="text-white">;</span>
                    {"\n"}
                    <span className="text-white">{"}"}</span>
                    {"\n\n"}
                    <span className="text-pink-400">const</span>{" "}
                    <span className="text-blue-300">qusai</span>
                    <span className="text-white">:</span>{" "}
                    <span className="text-yellow-200">Developer</span>{" "}
                    <span className="text-white">=</span>{" "}
                    <span className="text-white">{"{"}</span>
                    {"\n"}
                    {"  "}
                    <span className="text-purple-300">name</span>
                    <span className="text-white">:</span>{" "}
                    <span className="text-green-300">'Qusai Sakerwala'</span>
                    <span className="text-white">,</span>
                    {"\n"}
                    {"  "}
                    <span className="text-purple-300">role</span>
                    <span className="text-white">:</span>{" "}
                    <span className="text-green-300">'Full Stack Developer'</span>
                    <span className="text-white">,</span>
                    {"\n"}
                    {"  "}
                    <span className="text-purple-300">location</span>
                    <span className="text-white">:</span>{" "}
                    <span className="text-green-300">'Mumbai, IN'</span>
                    <span className="text-white">,</span>
                    {"\n"}
                    {"  "}
                    <span className="text-purple-300">available</span>
                    <span className="text-white">:</span>{" "}
                    <span className="text-orange-400">true</span>
                    {"\n"}
                    <span className="text-white">{"}"}</span>
                    <span className="text-white">;</span>
                  </code>
                </pre>
              </div>
            </div>

            {/* Skills */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <p className="font-mono text-sm text-black/40">
                  {"// tech_stack"}
                </p>
                <span className="font-mono text-xs text-black/30">
                  {skills.length} technologies
                </span>
              </div>
              <div ref={skillsRef} className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="group font-mono text-sm px-3 py-1.5 bg-gray-100 border border-gray-200 rounded-lg text-black/70 transition-all duration-200 hover:bg-black hover:text-white hover:border-black cursor-default"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;