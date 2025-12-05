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
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Angular",
    "Node.js",
    "Express",
    "Python",
    "PostgreSQL",
    "MongoDB",
    "Tailwind CSS",
    "Docker",
    "Git",
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
        {/* Function syntax - top right */}
        <span className="absolute top-16 right-8 sm:right-16 text-black/[0.02] text-[8rem] sm:text-[12rem] lg:text-[16rem] font-mono select-none">
          {"()"}
        </span>
        
        {/* Comment slashes - bottom left */}
        <span className="absolute bottom-20 left-8 sm:left-16 text-black/[0.02] text-[6rem] sm:text-[10rem] lg:text-[14rem] font-mono select-none">
          {"//"}
        </span>

        {/* Subtle dots - top left */}
        <div className="hidden md:grid absolute top-32 left-24 grid-cols-3 gap-3 opacity-[0.03]">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-black"></div>
          ))}
        </div>

        {/* Subtle line - right side */}
        <div className="hidden lg:block absolute top-1/2 right-12 w-px h-32 bg-black/[0.04]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Section Title */}
        <div className="mb-16 md:mb-24">
          <h2
            ref={titleRef}
            className="bai-jamjuree text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tight"
          >
            About
            <span className="text-orange-500">.</span>
          </h2>
          <div className="w-24 h-1.5 bg-orange-400 mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left - Content */}
          <div ref={contentRef} className="space-y-6 md:space-y-8">
            <p className="space-grotesk text-lg md:text-xl lg:text-2xl text-black/80 leading-relaxed">
              Hey! I'm{" "}
              <span className="font-bold text-black">Qusai</span>, a
              Full Stack Developer from{" "}
              <span className="text-orange-500 font-semibold">
                Mumbai, India
              </span>
              . I build production-ready web applications that solve real
              problems and serve real users.
            </p>

            <p className="space-grotesk text-lg md:text-xl lg:text-2xl text-black/70 leading-relaxed">
              I specialize in modern web technologies like{" "}
              <span className="font-semibold">React</span>,{" "}
              <span className="font-semibold">Angular</span>,{" "}
              <span className="font-semibold">Next.js</span>,{" "}
              <span className="font-semibold">Node.js</span>, and{" "}
              <span className="font-semibold">TypeScript</span>. From building
              scalable APIs to crafting intuitive user interfaces I enjoy
              working across the entire stack.
            </p>

            <p className="space-grotesk text-lg md:text-xl lg:text-2xl text-black/70 leading-relaxed">
              I've built AI-powered platforms, workflow automation tools, and
              analytics dashboards. I love turning complex problems into clean,
              efficient solutions.
            </p>

            {/* CTA */}
            <div className="pt-4 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-3 space-grotesk text-lg md:text-xl uppercase tracking-wide bg-black text-white px-8 py-4 rounded-full hover:bg-orange-500 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Let's Connect
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
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Right - Code Block & Skills */}
          <div ref={imageRef} className="space-y-8">
            {/* Terminal/Code Block */}
            <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-gray-800 border-b border-gray-700">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-3 font-mono text-xs text-gray-400">
                  about.ts
                </span>
              </div>

              {/* Code Content */}
              <div className="p-5 md:p-6 font-mono text-sm md:text-base">
                <pre className="text-white/90 leading-loose">
                  <code>
                    <span className="text-gray-500">{"// "}</span>
                    <span className="text-gray-500">who am i</span>
                    {"\n\n"}
                    <span className="text-pink-400">const</span>{" "}
                    <span className="text-blue-300">qusai</span>{" "}
                    <span className="text-white">=</span>{" "}
                    <span className="text-yellow-200">{"{"}</span>
                    {"\n"}
                    {"  "}
                    <span className="text-purple-300">role</span>
                    <span className="text-white">:</span>{" "}
                    <span className="text-green-300">'Full Stack Dev'</span>
                    <span className="text-white">,</span>
                    {"\n"}
                    {"  "}
                    <span className="text-purple-300">location</span>
                    <span className="text-white">:</span>{" "}
                    <span className="text-green-300">'Mumbai, India'</span>
                    <span className="text-white">,</span>
                    {"\n"}
                    {"  "}
                    <span className="text-purple-300">focus</span>
                    <span className="text-white">:</span>{" "}
                    <span className="text-green-300">'Web Applications'</span>
                    <span className="text-white">,</span>
                    {"\n"}
                    {"  "}
                    <span className="text-purple-300">available</span>
                    <span className="text-white">:</span>{" "}
                    <span className="text-orange-400">true</span>
                    {"\n"}
                    <span className="text-yellow-200">{"}"}</span>
                    <span className="text-white">;</span>
                  </code>
                </pre>
              </div>
            </div>

            {/* Skills below the terminal */}
            <div className="mt-8">
              <p className="font-mono text-sm text-black/40 mb-4">
                {"// tech_stack"}
              </p>
              <div ref={skillsRef} className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="font-mono text-sm px-3 py-1.5 bg-gray-100 border border-gray-200 rounded-lg text-black/70 transition-all duration-200 hover:bg-black hover:text-white hover:border-black cursor-default"
                  >
                    {skill}
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