import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Testimonial = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const descRef = useRef<HTMLParagraphElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  const testimonials = [
    {
      name: "Akshay Kothari",
      role: "Founding Team Member @Offee",
      title: "Development Head | Product Engineer",
      relationship: "Mentor",
      initials: "AK",
      content:
        "Qusai is a talented and flexible software intern who had a big influence on the team this summer. Qusai showed a great command of both frontend and backend development during his tenure with us. His contributions were always excellent and well-considered. Qusai is a committed team player and quick learner who will surely be an asset to any business. Always curious about learning new technology and solutions related to AI.",
      highlights: ["Full Stack", "Quick Learner", "Team Player"],
    },
    {
      name: "Alpesh Chandora",
      role: "Associate Project Manager",
      title: "Published Author | Crafting Stories",
      relationship: "Manager",
      initials: "AC",
      content:
        "I worked with Qusai during his internship on a Client Project. He showed strong logical thinking, quick learning ability, adaptability, and solid technical skills. His contribution to the project was impactful, and I believe he will do well in any role he takes on.",
      highlights: ["Logical Thinking", "Adaptable", "Impactful"],
    },
  ]

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
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="relative bg-gradient-to-b from-white to-gray-50 py-24 md:py-32 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <span className="absolute top-16 right-8 sm:right-16 text-black/[0.02] text-[10rem] sm:text-[14rem] lg:text-[18rem] font-serif select-none leading-none">
          "
        </span>

        <span className="absolute bottom-20 left-8 sm:left-12 text-black/[0.02] text-[4rem] sm:text-[6rem] lg:text-[8rem] font-mono select-none">
          {"await"}
        </span>

        {/* Subtle pattern */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `radial-gradient(circle, #000 1px, transparent 1px)`,
            backgroundSize: '30px 30px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Header Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-16 md:mb-20">
          {/* Title - Left */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-px bg-orange-500"></div>
              <span className="text-orange-500 font-mono text-sm uppercase tracking-wider">
                Testimonials
              </span>
            </div>
            <h2
              ref={titleRef}
              className="bai-jamjuree text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tight"
            >
              Kind
              <br />
              Words
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
              Recommendations from colleagues and mentors I've had the privilege
              of working with during my professional journey.
            </p>
            <a
              href="https://linkedin.com/in/qusaisakerwala"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 text-sm font-mono text-black/40 hover:text-orange-500 transition-colors duration-300 group"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              View on LinkedIn
              <svg
                className="w-3 h-3 group-hover:translate-x-0.5 transition-transform"
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

        {/* Testimonials Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl p-8 md:p-10 shadow-sm hover:shadow-2xl hover:shadow-orange-500/5 transition-all duration-500 border border-black/5 hover:border-orange-100"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 md:top-8 md:right-8">
                <svg
                  className="w-10 h-10 md:w-12 md:h-12 text-orange-100 group-hover:text-orange-200 transition-colors duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Highlights */}
              <div className="flex flex-wrap gap-2 mb-6">
                {testimonial.highlights.map((highlight, i) => (
                  <span
                    key={i}
                    className="font-mono text-xs px-2.5 py-1 bg-orange-50 text-orange-500 rounded-full"
                  >
                    {highlight}
                  </span>
                ))}
              </div>

              {/* Content */}
              <p className="space-grotesk text-base md:text-lg text-black/70 leading-relaxed pr-8">
                "{testimonial.content}"
              </p>

              {/* Author Info */}
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-black/5">
                <div className="flex items-center gap-4">
                  {/* Avatar */}
                  <div className="relative">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-orange-500/20">
                      {testimonial.initials}
                    </div>
                    {/* Online indicator */}
                    <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                  </div>
                  <div>
                    <h4 className="bai-jamjuree text-lg md:text-xl font-bold text-black">
                      {testimonial.name}
                    </h4>
                    <p className="space-grotesk text-sm text-black/50">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                {/* Relationship Badge */}
                <div className="flex flex-col items-end gap-2">
                  <span className="font-mono text-xs px-3 py-1.5 bg-black text-white rounded-full font-medium">
                    {testimonial.relationship}
                  </span>
                </div>
              </div>

              {/* Hover accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-b-3xl scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="space-grotesk text-black/40 mb-4">
            Want to work together?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white rounded-full font-medium space-grotesk hover:bg-orange-500 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/20"
          >
            Let's Connect
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
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Testimonial