"use client"

import { useCallback, useEffect, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const slides = [
  {
    id: 1,
    title: "Empowering Communities Through Technology & Innovation",
    subtitle: "Equipping African Youth and Communities with Skills for the Future",
    cta: { label: "Explore Programs", href: "/it-programs" },
    secondaryCta: { label: "Learn More", href: "/about" },
    image: "/hero-ai-african-tech.jpg",
  },
  {
    id: 2,
    title: "AI & Digital Transformation for All",
    subtitle: "Master artificial intelligence, web development, and digital innovation",
    cta: { label: "Start Learning", href: "/it-programs" },
    secondaryCta: { label: "View Curriculum", href: "/it-programs#programs" },
    image: "/hero-digital-skills.jpg",
  },
  {
    id: 3,
    title: "African Youth Leading Innovation",
    subtitle: "Turn your ideas into reality through entrepreneurship and technology",
    cta: { label: "Join Our Program", href: "/training" },
    secondaryCta: { label: "Support Our Mission", href: "/donate" },
    image: "/hero-youth-innovation.jpg",
  },
  {
    id: 4,
    title: "Community Empowerment Through Mentorship",
    subtitle: "Professional guidance, skills development, and sustainable opportunities",
    cta: { label: "Get Mentored", href: "/members-welfare" },
    secondaryCta: { label: "Learn About Us", href: "/about" },
    image: "/hero-community-empowerment.jpg",
  },
  {
    id: 5,
    title: "From Skills to Success",
    subtitle: "Building stronger communities, one trained professional at a time",
    cta: { label: "Discover Impact", href: "/about" },
    secondaryCta: { label: "Join Us", href: "/contact" },
    image: "/hero-impact.jpg",
  },
]

export function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 6000, stopOnInteraction: false }),
  ])
  const [selectedIndex, setSelectedIndex] = useState(0)

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])
  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap())
    emblaApi.on("select", onSelect)
    return () => {
      emblaApi.off("select", onSelect)
    }
  }, [emblaApi])

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div ref={emblaRef} className="h-full">
        <div className="flex h-full">
          {slides.map((slide, index) => (
            <div key={slide.id} className="flex-[0_0_100%] min-w-0 relative h-full">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="relative h-full flex items-center">
                <div className="container mx-auto px-4 lg:px-8">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: selectedIndex === index ? 1 : 0, y: selectedIndex === index ? 0 : 30 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-3xl"
                  >
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: selectedIndex === index ? 80 : 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="h-1 bg-gradient-gold mb-6"
                    />
                    <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight text-balance">
                      {slide.title}
                    </h1>
                    <p className="text-lg md:text-xl text-white/80 mb-8 max-w-xl">
                      {slide.subtitle}
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <Link href={slide.cta.href}>
                        <Button
                          size="lg"
                          className="bg-gradient-gold text-primary-foreground hover:opacity-90 rounded-full px-8 text-base"
                        >
                          {slide.cta.label}
                        </Button>
                      </Link>
                      <Link href={slide.secondaryCta.href}>
                        <Button
                          size="lg"
                          variant="outline"
                          className="border-white/30 text-white hover:bg-white/10 rounded-full px-8 text-base"
                        >
                          {slide.secondaryCta.label}
                        </Button>
                      </Link>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={scrollPrev}
        className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              selectedIndex === index
                ? "w-8 bg-gradient-gold"
                : "w-2 bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
