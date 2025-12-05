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
      date: "September 2025",
      initials: "AK",
      content:
        "Qusai is a talented and flexible software intern who had a big influence on the team this summer. Qusai showed a great command of both frontend and backend development during his tenure with us. His contributions were always excellent and well-considered. Qusai is a committed team player and quick learner who will surely be an asset to any business. Always curious about learning new technology and solutions related to AI.",
    },
    {
      name: "Alpesh Chandora",
      role: "Associate Project Manager",
      title: "Published Author | Crafting Stories",
      relationship: "Direct Manager",
      date: "August 2025",
      initials: "AC",
      content:
        "I worked with Qusai during his internship on a Client Project. He showed strong logical thinking, quick learning ability, adaptability, and solid technical skills. His contribution to the project was impactful, and I believe he will do well in any role he takes on.",
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
      className="relative bg-white py-24 md:py-32 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Quote marks - top right */}
        <span className="absolute top-16 right-8 sm:right-16 text-black/[0.02] text-[10rem] sm:text-[14rem] lg:text-[18rem] font-serif select-none leading-none">
          "
        </span>
        
        {/* Async keyword - bottom left */}
        <span className="absolute bottom-20 left-8 sm:left-12 text-black/[0.02] text-[4rem] sm:text-[6rem] lg:text-[8rem] font-mono select-none">
          {"async"}
        </span>

        {/* Stars pattern */}
        <div className="hidden lg:flex absolute top-1/3 left-16 flex-col gap-6 opacity-[0.03]">
          <span className="text-3xl">★</span>
          <span className="text-2xl ml-4">★</span>
          <span className="text-xl">★</span>
        </div>

        {/* Subtle line */}
        <div className="hidden md:block absolute bottom-1/4 right-20 w-20 h-px bg-black/[0.03]"></div>
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
              Kind
              <br />
              Words
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
              Recommendations from colleagues and mentors I've had the pleasure
              of working with during my journey.
            </p>
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
              className="group relative bg-gray-50 rounded-3xl p-8 md:p-10 hover:shadow-2xl transition-all duration-500 hover:bg-white"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 md:top-8 md:right-8">
                <svg
                  className="w-10 h-10 md:w-12 md:h-12 text-orange-200 group-hover:text-orange-300 transition-colors duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Content */}
              <p className="space-grotesk text-base md:text-lg text-black/70 leading-relaxed pr-12">
                "{testimonial.content}"
              </p>

              {/* Author Info */}
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-black/10">
                <div className="flex items-center gap-4">
                  {/* Avatar */}
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.initials}
                  </div>
                  <div>
                    <h4 className="bai-jamjuree text-lg md:text-xl font-bold text-black">
                      {testimonial.name}
                    </h4>
                    <p className="space-grotesk text-sm text-black/50">
                      {testimonial.role}
                    </p>
                    <p className="space-grotesk text-xs text-black/40">
                      {testimonial.title}
                    </p>
                  </div>
                </div>

                {/* Relationship & Date */}
                <div className="flex flex-col items-end gap-1">
                  <span className="font-mono text-xs px-3 py-1.5 bg-orange-100 text-orange-600 rounded-full font-medium">
                    {testimonial.relationship}
                  </span>
                  <span className="font-mono text-xs text-black/40">
                    {testimonial.date}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonial