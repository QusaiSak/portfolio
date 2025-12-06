import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import backend from "/backend.jpg"

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    title: "Frontend Development",
    description:
      "Crafting performant, accessible interfaces with modern frameworks. Focus on component architecture, smooth animations, and pixel-perfect responsive design.",
    image:
      "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    capabilities: [
      "Component-driven architecture",
      "Performance optimization",
      "Cross-browser compatibility",
    ],
  },
  {
    title: "Backend Development",
    description:
      "Building robust, scalable server architectures. RESTful APIs, database design, authentication systems, and secure data handling.",
    image: backend,
    tech: ["Node.js", "Express", "Python", "PostgreSQL", "MySQL", "MongoDB"],
    capabilities: [
      "API design & development",
      "Database modeling",
      "Authentication & authorization",
      "Server optimization",
    ],
  },
]

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const descRef = useRef<HTMLParagraphElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  const approachRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, x: -80 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      )

      gsap.fromTo(
        descRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: descRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      )

      const cards = cardsRef.current?.children
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      }

      if (approachRef.current) {
        const items = approachRef.current.children
        gsap.fromTo(
          items,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: approachRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative min-h-screen bg-white py-24 md:py-32 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <span className="absolute top-20 left-6 sm:left-12 text-black/[0.02] text-[3rem] sm:text-[5rem] lg:text-[7rem] font-mono select-none">
          {'const'}
        </span>

        <span className="absolute bottom-20 right-6 sm:right-16 text-black/[0.02] text-[6rem] sm:text-[10rem] lg:text-[14rem] font-mono select-none">
          {'{ }'}
        </span>

        <span className="hidden lg:block absolute top-1/3 right-24 text-black/[0.02] text-[4rem] font-mono select-none">
          {'=>'}
        </span>

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-16 md:mb-20">
          {/* Title - Left */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-px bg-orange-500"></div>
              <span className="text-orange-500 font-mono text-sm uppercase tracking-wider">
                Services
              </span>
            </div>
            <h2
              ref={titleRef}
              className="bai-jamjuree text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight leading-[0.95]"
            >
              What I<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
                Bring
              </span>{' '}
              to the Table
            </h2>
          </div>

          {/* Description - Right */}
          <div className="flex flex-col justify-end">
            <p
              ref={descRef}
              className="space-grotesk text-lg md:text-xl text-black/60 leading-relaxed"
            >
              I focus on writing{' '}
              <span className="text-black font-medium">clean, maintainable code</span>{' '}
              that scales. Every project gets the same attention to detail from{' '}
              <span className="text-black font-medium">architecture decisions</span> to{' '}
              <span className="text-black font-medium">user experience</span>.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-b from-gray-50/80 to-white rounded-2xl border border-black/5 overflow-hidden hover:border-orange-200 hover:shadow-2xl hover:shadow-orange-500/5 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-56 md:h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                {/* Title on image */}
                <div className="absolute bottom-4 left-5 right-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                    <span className="text-white/60 font-mono text-xs uppercase tracking-wider">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="bai-jamjuree text-2xl md:text-3xl font-bold text-white uppercase tracking-tight">
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                {/* Description */}
                <p className="space-grotesk text-base text-black/60 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-6">
                  <span className="text-xs font-mono text-black/40 uppercase tracking-wider mb-3 block">
                    Tech Stack
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {service.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 bg-black/[0.03] hover:bg-orange-500 hover:text-white rounded-lg text-sm font-mono text-black/70 transition-all duration-300 cursor-default border border-black/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Capabilities */}
                <div>
                  <span className="text-xs font-mono text-black/40 uppercase tracking-wider mb-3 block">
                    What I Deliver
                  </span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.capabilities.map((capability, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-sm text-black/60 space-grotesk"
                      >
                        <svg
                          className="w-4 h-4 text-orange-500 flex-shrink-0"
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
                        <span>{capability}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Hover accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-amber-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>
          ))}
        </div>

        {/* My Approach Section */}
        <div className="mt-20 md:mt-28">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-px bg-black/20"></div>
            <span className="text-black/40 font-mono text-sm uppercase tracking-wider">
              My Approach
            </span>
          </div>

          <div
            ref={approachRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                ),
                title: "Understand First",
                desc: "Deep dive into requirements before writing any code",
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                ),
                title: "Clean Code",
                desc: "Readable, documented, and maintainable from day one",
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                ),
                title: "Iterate & Improve",
                desc:
                  "Regular feedback loops and iterations to refine solutions",
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
                  </svg>
                ),
                title: "Deliver & Support",
                desc: "Robust deployment and ongoing maintenance",
              },
            ].map((approach, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 rounded-lg bg-white shadow-md transition-transform duration-300 hover:scale-105"
              >
                <div className="mb-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-orange-500 text-white text-xl">
                    {approach.icon}
                  </div>
                </div>
                <h4 className="bai-jamjuree text-xl font-semibold mb-2">
                  {approach.title}
                </h4>
                <p className="space-grotesk text-sm text-black/70">
                  {approach.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services