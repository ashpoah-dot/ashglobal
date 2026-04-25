"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Heart, Users, Lightbulb, Shield, Sprout, HandHeart } from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "Compassion",
    description: "We serve with genuine care and empathy for every individual we encounter.",
  },
  {
    icon: Users,
    title: "Community",
    description: "We believe in the power of collective action and mutual support.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We embrace creative solutions to address community challenges.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "We operate with transparency, honesty, and accountability.",
  },
  {
    icon: Sprout,
    title: "Growth",
    description: "We are committed to continuous improvement and sustainable development.",
  },
  {
    icon: HandHeart,
    title: "Empowerment",
    description: "We equip individuals with skills and confidence to shape their own futures.",
  },
]

export function ValuesSection() {
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
            Our Core Values
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The principles that guide everything we do
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="group h-full bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 text-center">
                <div className="w-16 h-16 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-gradient-gold group-hover:text-primary-foreground transition-all">
                  <value.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground" />
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
