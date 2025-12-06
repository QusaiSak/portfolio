import { useEffect, useRef, useState } from "react";
import heroImage from "/hero.png";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const helloRef = useRef<HTMLHeadingElement>(null);
  const thereRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const leftTextRef = useRef<HTMLDivElement>(null);
  const typeRef = useRef<HTMLSpanElement>(null);
  const cursorRef = useRef<HTMLSpanElement>(null);
  const socialsRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);

  const roles = ["WEB DEVELOPER", "CREATIVE CODER", "PROBLEM SOLVER"];

  const socials = [
    {
      name: "GitHub",
      url: "https://github.com/QusaiSak",
      icon: (
        <svg
          className="w-4 h-4 md:w-5 md:h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/qusaisakerwala",
      icon: (
        <svg
          className="w-4 h-4 md:w-5 md:h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com/u/QusaiCodes/",
      icon: (
        <svg
          className="w-4 h-4 md:w-5 md:h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
        </svg>
      ),
    },
    {
      name: "CodeChef",
      url: "https://www.codechef.com/users/qusai_codes",
      icon: (
        <div className="w-4 h-4 md:w-5 md:h-5 justify-center items-center flex text-xs md:text-sm font-bold">
          CC
        </div>
      ),
    },
    {
      name: "Email",
      url: "mailto:qusaisakerwala@gmail.com",
      icon: (
        <svg
          className="w-4 h-4 md:w-5 md:h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
  ];

  const copyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText("qusaisakerwala@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      gsap.set([helloRef.current, thereRef.current], { opacity: 0, y: -100 });
      gsap.set(imageRef.current, { opacity: 0, scale: 0.8 });
      gsap.set(leftTextRef.current, { opacity: 0, x: -200 });
      gsap.set(typeRef.current, { text: "" });
      gsap.set(socialsRef.current, { opacity: 0, x: -30 });
      gsap.set(badgeRef.current, { opacity: 0, y: 20 });

      gsap.to(cursorRef.current, {
        opacity: 0,
        duration: 0.5,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
      });

      tl.to(helloRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
      })
        .to(
          thereRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 1,
          },
          "-=0.7"
        )
        .to(
          imageRef.current,
          {
            opacity: 1,
            scale: 1,
            duration: 1.2,
          },
          "-=0.5"
        )
        .to(
          leftTextRef.current,
          {
            opacity: 1,
            x: 0,
            duration: 1,
          },
          "-=0.8"
        )
        .to(
          socialsRef.current,
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
          },
          "-=0.6"
        )
        .to(
          badgeRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
          },
          "-=0.4"
        );

      const typewriterTimeline = gsap.timeline({ repeat: -1, delay: 2 });

      roles.forEach((role) => {
        typewriterTimeline
          .to(typeRef.current, {
            text: { value: role, delimiter: "" },
            duration: role.length * 0.08,
            ease: "none",
          })
          .to({}, { duration: 2 })
          .to(typeRef.current, {
            text: { value: "", delimiter: "" },
            duration: role.length * 0.05,
            ease: "none",
          })
          .to({}, { duration: 0.3 });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div
        ref={containerRef}
        className="relative w-screen min-h-screen overflow-hidden flex items-center justify-center bg-gradient-to-b from-amber-100 via-orange-300 to-orange-400"
      >
        {/* Subtle dev-related abstract elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Code bracket - top left */}
          <span className="absolute top-24 left-8 sm:left-16 text-black/[0.03] text-[6rem] sm:text-[10rem] lg:text-[14rem] font-mono select-none">
            {"<"}
          </span>

          {/* Closing bracket - top right */}
          <span className="absolute top-24 right-8 sm:right-16 text-black/[0.03] text-[6rem] sm:text-[10rem] lg:text-[14rem] font-mono select-none">
            {"/>"}
          </span>

          {/* Semicolon - bottom right corner */}
          <span className="absolute bottom-32 right-12 sm:right-24 text-black/[0.04] text-[4rem] sm:text-[6rem] font-mono select-none">
            {";"}
          </span>

          {/* Curly braces - subtle accent */}
          <span className="hidden lg:block absolute top-1/2 right-32 text-black/[0.02] text-[8rem] font-mono select-none">
            {"{ }"}
          </span>

          {/* Subtle dots grid - decorative */}
          <div className="hidden md:grid absolute top-1/3 right-1/4 grid-cols-3 gap-4 opacity-[0.04]">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-black"></div>
            ))}
          </div>

          {/* Single subtle lines */}
          <div className="hidden lg:block absolute bottom-1/4 left-16 w-24 h-px bg-black/[0.06]"></div>
          <div className="hidden lg:block absolute top-1/3 right-20 w-16 h-px bg-black/[0.06]"></div>

          {/* Gradient orbs for depth */}
          <div className="absolute top-20 right-1/4 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-amber-400/10 rounded-full blur-3xl"></div>
        </div>

        {/* Socials - Left side vertical */}
        <div
          ref={socialsRef}
          className="hidden sm:flex absolute left-3 md:left-6 lg:left-10 top-1/2 -translate-y-1/2 z-20 flex-col items-center gap-2 md:gap-3"
        >
          <div className="w-px h-8 md:h-12 bg-black/20"></div>
          <span className="font-mono text-[10px] text-black/40 uppercase tracking-wider -rotate-90 mb-4">
            Connect
          </span>
          {socials.map((social, index) => (
            <div key={index} className="relative group">
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm text-black/70 hover:bg-black hover:text-white transition-all duration-300 hover:scale-110 border border-black/5"
                aria-label={social.name}
              >
                {social.icon}
              </a>
              {/* Tooltip for all socials on desktop */}
              <div className="hidden lg:block absolute left-14 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0 -translate-x-2 z-50 pointer-events-none">
                <div className="bg-black text-white px-3 py-1.5 rounded-lg shadow-lg whitespace-nowrap">
                  <span className="text-xs font-mono">{social.name}</span>
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 w-2 h-2 bg-black rotate-45"></div>
                </div>
              </div>
              {/* Email special tooltip */}
              {social.name === "Email" && (
                <div className="hidden lg:block absolute left-14 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0 -translate-x-2 z-50 pointer-events-auto">
                  <div className="bg-black text-white px-4 py-2.5 rounded-xl shadow-xl flex items-center gap-3">
                    <span className="text-sm font-mono whitespace-nowrap">
                      qusaisakerwala@gmail.com
                    </span>
                    <button
                      onClick={copyEmail}
                      className="p-1.5 hover:bg-white/20 rounded-lg transition-colors duration-200"
                      aria-label="Copy email"
                    >
                      {copied ? (
                        <svg
                          className="w-4 h-4 text-green-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      ) : (
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
                            d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                          />
                        </svg>
                      )}
                    </button>
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 w-2 h-2 bg-black rotate-45"></div>
                  </div>
                </div>
              )}
            </div>
          ))}
          <div className="w-px h-8 md:h-12 bg-black/20"></div>
        </div>

        {/* Mobile Socials - Bottom horizontal */}
        <div className="sm:hidden absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-black/5">
          {socials.slice(0, 4).map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-black/5 text-black/70 hover:bg-black hover:text-white transition-all duration-300"
              aria-label={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Hello, there text */}
        <div className="absolute top-[12%] sm:top-[10%] z-10 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-32 md:gap-52 lg:gap-80 mt-16 sm:mt-20 px-4">
          <h1
            ref={helloRef}
            className="text-[2.5rem] sm:text-[4rem] md:text-[6rem] lg:text-[8rem] xl:text-[10rem] playwrite-no font-semibold leading-none"
          >
            Hello,
          </h1>

          <h1
            ref={thereRef}
            className="text-[2.5rem] sm:text-[4rem] md:text-[6rem] lg:text-[8rem] xl:text-[10rem] playwrite-no font-semibold leading-none"
          >
            there
          </h1>
        </div>

        {/* Center Image */}
        <div className="w-full h-full flex items-center justify-center absolute inset-0 z-5">
          <div ref={imageRef} className="relative z-10 sm:ml-16">
            <img src={heroImage} alt="Portrait" className="mt-32" />
          </div>

          {/* Full width bottom fade overlay */}
          <div className="absolute bottom-0 left-0 right-0 w-full h-1/3 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none z-[15]"></div>

          {/* Typewriter Role Text - bottom left */}
          <div
            ref={leftTextRef}
            className="absolute bottom-16 sm:bottom-12 left-4 sm:left-10 space-grotesk z-20 max-w-[calc(100%-2rem)] sm:max-w-none"
          >
            {/* Label */}
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-px bg-black/30"></div>
              <span className="font-mono text-xs text-black/50 uppercase tracking-wider">
                Full Stack Developer
              </span>
            </div>

            {/* Name */}
            <div className="mb-1 sm:mb-2">
              <span className="space-grotesk text-base sm:text-xl md:text-2xl lg:text-3xl text-black/80 font-medium tracking-wide">
                Qusai Sakerwala
              </span>
            </div>

            {/* Typewriter */}
            <h1 className="font-extrabold uppercase bai-jamjuree leading-[0.85] tracking-tight">
              <span
                ref={typeRef}
                className="text-[1.75rem] sm:text-[2.5rem] md:text-[4rem] lg:text-[5.5rem] xl:text-[7rem] text-black"
              ></span>
              <span
                ref={cursorRef}
                className="text-[1.75rem] sm:text-[2.5rem] md:text-[4rem] lg:text-[5.5rem] xl:text-[7rem] text-orange-500"
              >
                |
              </span>
            </h1>
          </div>

          {/* Available Badge - bottom right */}
          <div
            ref={badgeRef}
            className="hidden md:flex absolute bottom-12 right-10 lg:right-16 z-20 flex-col items-end gap-4"
          >
            {/* Availability Badge */}
            <div className="flex items-center gap-2.5 px-4 py-2.5 bg-white/80 backdrop-blur-sm rounded-full border border-black/5 shadow-lg">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              <span className="space-grotesk text-sm text-black/70 font-medium">
                Available for work
              </span>
            </div>

            {/* Scroll indicator */}
            <div className="flex flex-col items-center gap-2 text-black/40">
              <span className="font-mono text-[10px] uppercase tracking-widest">
                Scroll
              </span>
              <svg
                className="w-4 h-4 animate-bounce"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;