"use client";
import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);

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

      gsap.fromTo(
        cardsRef.current?.children || [],
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText("qusaisakerwala@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const contactMethods = [
    {
      title: "Email",
      value: "qusaisakerwala@gmail.com",
      href: "mailto:qusaisakerwala@gmail.com",
      description: "Best way to reach me",
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
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      title: "LinkedIn",
      value: "qusaisakerwala",
      href: "https://linkedin.com/in/qusaisakerwala",
      description: "Let's connect professionally",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      title: "GitHub",
      value: "QusaiSak",
      href: "https://github.com/QusaiSak",
      description: "Check out my code",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
    {
      title: "Location",
      value: "Mumbai, India",
      href: null,
      description: "Open to remote work",
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
      ),
    },
  ];

  const socialLinks = [
    {
      name: "LeetCode",
      href: "https://leetcode.com/u/QusaiCodes/",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
        </svg>
      ),
    },
    {
      name: "CodeChef",
      href: "https://www.codechef.com/users/qusai_codes",
      icon: <span className="text-sm font-bold">CC</span>,
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative bg-gradient-to-b from-white to-gray-50 overflow-hidden py-24 md:py-32"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>

        <span className="absolute top-16 right-8 sm:right-16 text-black/[0.02] text-[6rem] sm:text-[10rem] lg:text-[14rem] font-mono select-none">
          {"@"}
        </span>
        <span className="absolute bottom-20 left-8 sm:left-12 text-black/[0.02] text-[4rem] sm:text-[6rem] lg:text-[8rem] font-mono select-none">
          {"send()"}
        </span>

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `radial-gradient(circle, #000 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        {/* Header */}
        <div ref={headerRef} className="mb-16 md:mb-20">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-px bg-orange-500"></div>
            <span className="text-orange-500 font-mono text-sm uppercase tracking-wider">
              Contact
            </span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            <h2 className="bai-jamjuree text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tight text-black">
              Let's
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
                Connect
              </span>
              <span className="text-orange-500">.</span>
            </h2>
            <div className="flex flex-col justify-end">
              <p className="space-grotesk text-lg md:text-xl text-black/60 leading-relaxed">
                Have a project in mind or want to collaborate? I'm always open
                to discussing new opportunities and interesting ideas.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Cards Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-16"
        >
          {contactMethods.map((method, index) => (
            <div
              key={method.title}
              className="group relative bg-white rounded-2xl border border-black/5 overflow-hidden hover:border-orange-200 hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-300"
            >
              {method.href ? (
                <a
                  href={method.href}
                  target={method.href.startsWith("mailto") ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  className="block p-6 md:p-8"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-orange-50 group-hover:bg-orange-500 rounded-xl flex items-center justify-center text-orange-500 group-hover:text-white transition-all duration-300 flex-shrink-0">
                      {method.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-mono text-xs text-orange-500">
                          0{index + 1}
                        </span>
                        <span className="text-black/20">—</span>
                        <h3 className="font-mono text-xs text-black/40 uppercase tracking-wider">
                          {method.title}
                        </h3>
                      </div>
                      <p className="space-grotesk text-lg md:text-xl font-semibold text-black group-hover:text-orange-500 transition-colors duration-300 truncate">
                        {method.value}
                      </p>
                      <p className="space-grotesk text-sm text-black/50 mt-1">
                        {method.description}
                      </p>
                    </div>
                    <svg
                      className="w-5 h-5 text-black/20 group-hover:text-orange-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 flex-shrink-0"
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
                </a>
              ) : (
                <div className="p-6 md:p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-orange-500 flex-shrink-0">
                      {method.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-mono text-xs text-orange-500">
                          0{index + 1}
                        </span>
                        <span className="text-black/20">—</span>
                        <h3 className="font-mono text-xs text-black/40 uppercase tracking-wider">
                          {method.title}
                        </h3>
                      </div>
                      <p className="space-grotesk text-lg md:text-xl font-semibold text-black">
                        {method.value}
                      </p>
                      <p className="space-grotesk text-sm text-black/50 mt-1">
                        {method.description}
                      </p>
                    </div>
                  </div>
                </div>
              )}
              {/* Hover accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-amber-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div ref={ctaRef}>
          {/* Main CTA Card */}
          <div className="relative bg-black rounded-3xl p-8 md:p-12 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl"></div>
              <span className="absolute bottom-4 right-8 text-white/[0.03] text-[6rem] font-mono select-none">
                {">>"}
              </span>
            </div>

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div>
                <span className="font-mono text-xs text-orange-400 uppercase tracking-wider">
                  Ready to start?
                </span>
                <h3 className="bai-jamjuree text-3xl md:text-4xl lg:text-5xl font-bold text-white uppercase tracking-tight mt-2">
                  Let's Build Something
                  <br />
                  <span className="text-orange-500">Together</span>
                </h3>
                <p className="space-grotesk text-white/60 mt-4 max-w-md">
                  Drop me an email and let's discuss your next project, idea, or
                  opportunity.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <a
                  href="mailto:qusaisakerwala@gmail.com"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-orange-500 hover:bg-orange-400 text-white rounded-full space-grotesk font-medium uppercase tracking-wide transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/30"
                >
                  Send Email
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
                <button
                  onClick={copyEmail}
                  className="group inline-flex items-center gap-2 px-6 py-4 bg-white/10 hover:bg-white/20 text-white rounded-full space-grotesk text-sm transition-all duration-300 border border-white/10"
                >
                  {copied ? (
                    <>
                      <svg
                        className="w-5 h-5 text-green-400"
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
                      Copied!
                    </>
                  ) : (
                    <>
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
                          d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                        />
                      </svg>
                      Copy Email
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Other platforms */}
            <div className="flex items-center gap-6">
              <p className="font-mono text-xs text-black/40 uppercase tracking-wider">
                Also on
              </p>
              <div className="flex items-center gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-100 hover:bg-orange-500 rounded-xl flex items-center justify-center text-black/50 hover:text-white transition-all duration-300"
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Badge */}
            <div className="inline-flex items-center gap-3 px-5 py-3 bg-green-50 border border-green-100 rounded-full">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              <span className="space-grotesk text-sm text-green-700 font-medium">
                Available for opportunities
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;