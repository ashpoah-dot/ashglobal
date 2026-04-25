"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Calendar, Music, Building, Heart, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function FundraiserSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=1920&q=80)`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/70" />

      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white mb-6">
              <Music className="w-4 h-4" />
              <span className="text-sm font-medium">Upcoming Event</span>
            </div>

            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Album Launch <span className="text-gradient-gold">Fundraiser</span>
            </h2>

            <p className="text-white/80 text-lg mb-8">
              Join us for a special evening of music, community, and purpose. All proceeds 
              will go towards building our vocational training center - a facility that will 
              transform hundreds of lives for generations to come.
            </p>

            {/* Event Details */}
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                  <Calendar className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">3rd May</div>
                  <div className="text-white/60">2026</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                  <Building className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <div className="text-lg font-bold text-white">Training Center</div>
                  <div className="text-white/60">Building Fund</div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link href="/donate">
                <Button
                  size="lg"
                  className="bg-gradient-gold text-primary-foreground hover:opacity-90 rounded-full px-8"
                >
                  <Heart className="w-4 h-4 mr-2" />
                  Sponsor Now
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 rounded-full px-8"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-80 h-80 mx-auto">
              {/* Animated Rings */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-pulse" />
              <div className="absolute inset-4 rounded-full border-2 border-primary/20 animate-pulse" style={{ animationDelay: "0.5s" }} />
              <div className="absolute inset-8 rounded-full border-2 border-primary/10 animate-pulse" style={{ animationDelay: "1s" }} />

              {/* Center Content */}
              <div className="absolute inset-12 rounded-full bg-gradient-gold flex flex-col items-center justify-center text-center">
                <Music className="w-12 h-12 text-primary-foreground mb-2" />
                <div className="font-serif text-3xl font-bold text-primary-foreground">3rd</div>
                <div className="text-primary-foreground/80">May 2026</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
