"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Eye, Target, Heart } from "lucide-react"

const cards = [
  {
    icon: Eye,
    title: "Vision",
    description: "A self-reliant community advancing sustainable development through empowered individuals and collective growth.",
    gradient: "from-amber-500/20 to-orange-500/20",
  },
  {
    icon: Target,
    title: "Mission",
    description: "To empower communities through skills acquisition, resource mobilization, and creating opportunities for economic independence.",
    gradient: "from-amber-500/20 to-yellow-500/20",
  },
  {
    icon: Heart,
    title: "Motivation",
    description: "Inspired by Isaiah 60:1 - \"Arise and Shine, for your light has come.\" We believe in the potential of every individual to rise and shine.",
    gradient: "from-orange-500/20 to-red-500/20",
  },
]

export function MissionSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Guiding Principles
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The foundation of everything we do at ASH Global Initiatives
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="group h-full bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${card.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <card.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                  {card.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
