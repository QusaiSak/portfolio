import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import backend from "/backend.jpg"

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    title: "Frontend Development",
    description:
      "Building responsive, interactive UIs with React, Next.js, and Angular. Clean animations and seamless user experiences.",
    image:
      "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    title: "Backend Development",
    description:
      "Designing scalable APIs and server architectures with Node.js, Express, and databases like PostgreSQL and MongoDB.",
    image: backend,
  },
  
]

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const descRef = useRef<HTMLParagraphElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

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

      const cards = cardsRef.current?.children
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 80 },
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
        {/* Import statement - top left */}
        <span className="absolute top-20 left-8 sm:left-12 text-black/[0.02] text-[4rem] sm:text-[6rem] lg:text-[8rem] font-mono select-none">
          {'import'}
        </span>

        {/* Curly braces - bottom right */}
        <span className="absolute bottom-16 right-8 sm:right-16 text-black/[0.02] text-[8rem] sm:text-[12rem] lg:text-[16rem] font-mono select-none">
          {'{ }'}
        </span>

        {/* Arrow function - center right */}
        <span className="hidden lg:block absolute top-1/2 right-20 text-black/[0.02] text-[6rem] font-mono select-none">
          {'=>'}
        </span>

        {/* Subtle horizontal line */}
        <div className="hidden md:block absolute top-1/3 left-0 w-32 h-px bg-black/[0.03]"></div>

        {/* Small dots pattern */}
        <div className="hidden lg:grid absolute bottom-1/4 left-16 grid-cols-2 gap-2 opacity-[0.03]">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="w-1 h-1 rounded-full bg-black"></div>
          ))}
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
              My
              <br />
              Services
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
              Delivering end-to-end web development solutions, from crafting
              pixel-perfect interfaces to building robust backend systems.
            </p>
          </div>
        </div>

        {/* Services Grid - Bento Style */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative ${
                index === 1 ? 'md:row-span-2 lg:row-span-1' : ''
              }`}
            >
              {/* Image Container */}
              <div
                className={`w-full ${
                  index === 1 ? 'h-72 md:h-96 lg:h-80' : 'h-64 md:h-80'
                } rounded-2xl overflow-hidden relative`}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="mt-6">
                <h3 className="bai-jamjuree text-2xl md:text-3xl font-bold uppercase tracking-tight group-hover:text-orange-500 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="space-grotesk text-base md:text-lg text-black/60 mt-2 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services