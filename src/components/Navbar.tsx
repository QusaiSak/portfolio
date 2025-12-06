import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import resume from "/Qusai_Abeezer_Sakerwala_Resume.pdf";

function Navbar() {
  const navRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLAnchorElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLAnchorElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = ["About", "Services", "Projects", "Work", "Testimonials"];

  // Initial load animation
  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.3 });

    tl.fromTo(
      navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    )
      .fromTo(
        logoRef.current,
        { x: -20, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
        "-=0.3"
      )
      .fromTo(
        linksRef.current?.children || [],
        { y: -10, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, stagger: 0.1, ease: "power2.out" },
        "-=0.3"
      )
      .fromTo(
        contactRef.current,
        { x: 20, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
        "-=0.3"
      );
  }, []);

  // Scroll effect - add background on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      if (scrolled !== hasScrolled) {
        setHasScrolled(scrolled);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasScrolled]);

  // Animate navbar background on scroll
  useEffect(() => {
    if (!navRef.current) return;

    if (hasScrolled) {
      gsap.to(navRef.current, {
        backgroundColor: "rgba(255, 255, 255, 0.98)",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.08)",
        duration: 0.3,
        ease: "power2.out",
      });
    } else {
      gsap.to(navRef.current, {
        backgroundColor: "rgba(255, 255, 255, 0.85)",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.03)",
        duration: 0.3,
        ease: "power2.out",
      });
    }
  }, [hasScrolled]);

  // Mobile menu animation
  useEffect(() => {
    if (!mobileMenuRef.current) return;

    if (isMobileMenuOpen) {
      gsap.to(mobileMenuRef.current, {
        height: "auto",
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    } else {
      gsap.to(mobileMenuRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
      });
    }
  }, [isMobileMenuOpen]);

  // Close mobile menu on link click
  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[9999] flex justify-center p-2 sm:p-4">
        <div
          ref={navRef}
          className="flex flex-col w-full max-w-6xl mx-2 sm:mx-4 bg-white/85 backdrop-blur-xl rounded-2xl sm:rounded-full border border-black/[0.03] overflow-hidden shadow-lg shadow-black/[0.03]"
        >
          {/* Main navbar row */}
          <div className="flex items-center justify-between px-4 sm:px-6 md:px-10 py-3 md:py-4">
            {/* Left - Logo/Name */}
            <a
              ref={logoRef}
              href="#"
              className="group bai-jamjuree font-bold text-lg sm:text-xl md:text-2xl uppercase tracking-tight text-black hover:text-orange-500 transition-colors duration-300"
            >
              Qusai
              <span className="text-orange-500 group-hover:text-black transition-colors duration-300">
                .
              </span>
            </a>

            {/* Center - Nav Links (hidden on mobile) */}
            <div
              ref={linksRef}
              className="hidden lg:flex items-center gap-6 xl:gap-10"
            >
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="space-grotesk text-sm uppercase tracking-wider text-black/70 hover:text-orange-500 transition-colors duration-300 relative group py-1"
                >
                  {item}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-amber-500 group-hover:w-full transition-all duration-300 ease-out rounded-full"></span>
                </a>
              ))}
            </div>

            {/* Right side - Resume & Contact buttons + mobile menu toggle */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Resume Button - Opens in new tab */}
              <a
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-2 space-grotesk text-xs sm:text-sm uppercase tracking-wider border border-black/10 text-black/80 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full hover:bg-black hover:text-white hover:border-black transition-all duration-300 group"
              >
                Resume
                <svg
                  className="w-3.5 h-3.5 group-hover:translate-y-[-1px] transition-transform duration-300"
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

              {/* Contact Button */}
              <a
                ref={contactRef}
                href="#contact"
                className="space-grotesk text-xs sm:text-sm uppercase tracking-wider bg-black text-white px-4 py-2 sm:px-5 sm:py-2.5 rounded-full hover:bg-orange-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/20"
              >
                Contact
              </a>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full bg-black/5 hover:bg-orange-50 hover:text-orange-500 transition-all duration-300"
                aria-label="Toggle menu"
                aria-expanded={isMobileMenuOpen}
              >
                <div className="relative w-5 h-5">
                  <span
                    className={`absolute left-0 w-5 h-0.5 bg-current transition-all duration-300 ${
                      isMobileMenuOpen
                        ? "top-1/2 -translate-y-1/2 rotate-45"
                        : "top-1"
                    }`}
                  ></span>
                  <span
                    className={`absolute left-0 top-1/2 -translate-y-1/2 w-5 h-0.5 bg-current transition-all duration-300 ${
                      isMobileMenuOpen ? "opacity-0 scale-0" : "opacity-100"
                    }`}
                  ></span>
                  <span
                    className={`absolute left-0 w-5 h-0.5 bg-current transition-all duration-300 ${
                      isMobileMenuOpen
                        ? "top-1/2 -translate-y-1/2 -rotate-45"
                        : "bottom-1"
                    }`}
                  ></span>
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            ref={mobileMenuRef}
            className="lg:hidden overflow-hidden"
            style={{ height: 0, opacity: 0 }}
          >
            <div className="px-4 pb-5 pt-2 border-t border-black/5">
              <div className="flex flex-col gap-1">
                {navItems.map((item, index) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={handleNavClick}
                    className="group space-grotesk text-base py-3 px-4 uppercase tracking-wider text-black/70 hover:text-orange-500 hover:bg-orange-50/50 rounded-xl transition-all duration-300 flex items-center justify-between"
                  >
                    <span className="flex items-center gap-3">
                      <span className="font-mono text-xs text-black/30 group-hover:text-orange-400 transition-colors">
                        0{index + 1}
                      </span>
                      {item}
                    </span>
                    <svg
                      className="w-4 h-4 text-black/20 group-hover:text-orange-500 group-hover:translate-x-1 transition-all duration-300"
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
                ))}

                {/* Divider */}
                <div className="my-2 mx-4 h-px bg-black/5"></div>

                {/* Resume - Opens in new tab on mobile */}
                <a
                  href={resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleNavClick}
                  className="group flex items-center justify-between space-grotesk text-base py-3 px-4 uppercase tracking-wider text-black/70 hover:text-white bg-gradient-to-r from-orange-50 to-amber-50 hover:from-orange-500 hover:to-amber-500 rounded-xl transition-all duration-300"
                >
                  <span className="flex items-center gap-3">
                    <svg
                      className="w-5 h-5 text-orange-500 group-hover:text-white transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    View Resume
                  </span>
                  <svg
                    className="w-4 h-4 text-orange-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
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
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu backdrop */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[9998] lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
}

export default Navbar;