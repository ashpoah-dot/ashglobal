"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Mic, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const guests = [
  {
    name: "Dr. Sarah Kimani",
    role: "Mental Health Advocate",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80",
  },
  {
    name: "James Mwangi",
    role: "Entrepreneur",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
  },
  {
    name: "Faith Wanjiku",
    role: "Youth Leader",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&q=80",
  },
  {
    name: "Peter Ochieng",
    role: "Skills Trainer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
  },
]

export function GuestSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <Mic className="w-4 h-4" />
              <span className="text-sm font-medium">Guest Speakers</span>
            </div>

            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              Featured Guests & Speakers
            </h2>

            <p className="text-muted-foreground text-lg mb-8">
              We regularly feature inspiring guests including entrepreneurs, community leaders, 
              mental health advocates, and experts in various fields. Interested in being a guest?
            </p>

            <Link href="/contact">
              <Button size="lg" className="bg-gradient-gold text-primary-foreground hover:opacity-90 rounded-full px-8">
                Apply to be a Guest
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </motion.div>

          {/* Guest Grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="grid grid-cols-2 gap-4">
              {guests.map((guest, index) => (
                <motion.div
                  key={guest.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="bg-card border border-border rounded-2xl p-4 text-center hover:border-primary/50 transition-colors"
                >
                  <div
                    className="w-20 h-20 mx-auto rounded-full bg-cover bg-center mb-4 border-2 border-primary"
                    style={{ backgroundImage: `url(${guest.image})` }}
                  />
                  <h4 className="font-semibold text-foreground">{guest.name}</h4>
                  <p className="text-sm text-muted-foreground">{guest.role}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
