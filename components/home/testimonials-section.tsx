"use client"

import { useCallback, useEffect, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Grace Wanjiku",
    role: "Beauty Training Graduate",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&q=80",
    quote: "ASH Global transformed my life. I came with nothing but a dream, and now I run my own successful beauty salon. The training was thorough, affordable, and the mentorship continues even after graduation.",
    rating: 5,
  },
  {
    id: 2,
    name: "Peter Kamau",
    role: "Construction Apprentice",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    quote: "The skills I learned through ASH Builders have opened doors I never thought possible. From material knowledge to project management, I am now equipped for a successful career in construction.",
    rating: 5,
  },
  {
    id: 3,
    name: "Mary Njeri",
    role: "Youth Mentorship Program",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    quote: "The mentorship program gave me direction when I needed it most. Today, I am not just employed - I am mentoring other young people in my community. The ripple effect is real.",
    rating: 5,
  },
  {
    id: 4,
    name: "John Mwangi",
    role: "Fashion Design Student",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
    quote: "Arise & Shine Outfitters taught me more than fashion - they taught me entrepreneurship. I now design and sell my own clothing line, supporting my entire family.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ])
  const [selectedIndex, setSelectedIndex] = useState(0)

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap())
    emblaApi.on("select", onSelect)
    return () => {
      emblaApi.off("select", onSelect)
    }
  }, [emblaApi])

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <Quote className="w-4 h-4" />
            <span className="text-sm font-medium">Impact Stories</span>
          </div>

          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Lives Transformed
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real stories from real people whose lives have been changed through our programs
          </p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex gap-6">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0"
                >
                  <div className="h-full bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300">
                    {/* Rating */}
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      &quot;{testimonial.quote}&quot;
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-4">
                      <div
                        className="w-14 h-14 rounded-full bg-cover bg-center border-2 border-primary"
                        style={{ backgroundImage: `url(${testimonial.image})` }}
                      />
                      <div>
                        <div className="font-semibold text-foreground">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={scrollPrev}
              className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    selectedIndex === index
                      ? "w-8 bg-primary"
                      : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={scrollNext}
              className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
