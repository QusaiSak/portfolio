import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Work = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const descRef = useRef<HTMLParagraphElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)

  const experience = {
    role: "Full Stack Developer Intern",
    company: "Offee (Orage Digital)",
    location: "Mumbai",
    duration: "May 2025 – July 2025",
    type: "Internship",
    highlights: [
      {
        metric: "5+",
        description: "Production-ready web applications built using Angular, React, and Node.js, serving 200+ active users",
      },
      {
        metric: "35%",
        description: "Improvement in staff decision-making speed through analytics dashboards with real-time data visualization",
      },
      {
        metric: "12+",
        description: "Secure RESTful APIs engineered with authentication, logging, and error handling for SQL/NoSQL databases",
      },
      {
        metric: "90%+",
        description: "Accuracy achieved in AI-based document processing system handling 100+ documents automatically",
      },
    ],
    technologies: ["React", "Angular", "Node.js", "SQL", "NoSQL", "DigitalOcean"],
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, x: -100 },
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

      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="work"
      className="relative bg-white py-24 md:py-32 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Git branch symbol */}
        <span className="absolute top-20 right-8 sm:right-16 text-black/[0.02] text-[6rem] sm:text-[10rem] lg:text-[14rem] font-mono select-none">
          {"git"}
        </span>
        
        {/* Console log */}
        <span className="absolute bottom-20 left-8 sm:left-12 text-black/[0.02] text-[3rem] sm:text-[5rem] lg:text-[7rem] font-mono select-none">
          {"log()"}
        </span>

        {/* Subtle vertical line */}
        <div className="hidden lg:block absolute top-32 left-1/4 w-px h-24 bg-black/[0.03]"></div>
        
        {/* Plus signs pattern */}
        <div className="hidden md:flex absolute bottom-1/3 right-24 flex-col gap-4 opacity-[0.03]">
          <span className="text-4xl font-mono">+</span>
          <span className="text-4xl font-mono">+</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Header Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-16 md:mb-24">
          {/* Title - Left */}
          <div className="lg:col-span-1">
            <h2
              ref={titleRef}
              className="bai-jamjuree text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tight"
            >
              Work
              <br />
              Experience
              <span className="text-orange-500">.</span>
            </h2>
            <div className="w-24 h-1.5 bg-orange-500 mt-4"></div>
          </div>

          {/* Empty middle for layout */}
          <div className="hidden lg:block"></div>

          {/* Description - Right */}
          <div className="lg:col-span-1">
            <p
              ref={descRef}
              className="space-grotesk text-lg md:text-xl text-black/60 leading-relaxed"
            >
              Building real-world applications and gaining hands-on experience
              with modern technologies in production environments.
            </p>
          </div>
        </div>

        {/* Experience Card */}
        <div
          ref={cardRef}
          className="relative bg-gray-50 rounded-3xl p-8 md:p-12 hover:shadow-2xl transition-all duration-500"
        >
          {/* Top Section - Role & Company */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-10 pb-8 border-b border-black/10">
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="font-mono text-xs px-3 py-1.5 bg-orange-100 text-orange-600 rounded-full font-medium">
                  {experience.type}
                </span>
                <span className="font-mono text-xs text-black/40">
                  {experience.duration}
                </span>
              </div>
              <h3 className="bai-jamjuree text-3xl md:text-4xl lg:text-5xl font-bold text-black uppercase tracking-tight">
                {experience.role}
              </h3>
              <p className="space-grotesk text-xl md:text-2xl text-orange-500 mt-2">
                {experience.company}
              </p>
              <p className="space-grotesk text-base text-black/50 mt-1">
                📍 {experience.location}
              </p>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-10">
            {experience.highlights.map((highlight, index) => (
              <div
                key={index}
                className="group p-6 bg-white rounded-2xl border border-black/5 hover:border-orange-200 hover:shadow-lg transition-all duration-300"
              >
                <span className="bai-jamjuree text-4xl md:text-5xl font-bold text-orange-500">
                  {highlight.metric}
                </span>
                <p className="space-grotesk text-base text-black/60 mt-3 leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>

          {/* Technologies */}
          <div>
            <p className="font-mono text-sm text-black/40 mb-4">
              {"// technologies_used"}
            </p>
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="font-mono text-sm px-4 py-2 bg-black text-white rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Work