"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const milestones = [
  {
    year: "2018",
    title: "Foundation",
    description: "ASH Global Initiatives was founded with a vision to empower communities through skill development.",
  },
  {
    year: "2019",
    title: "Beauty Parlor Launch",
    description: "Opened ASH Beauty Parlor, our first service department offering professional beauty services.",
  },
  {
    year: "2020",
    title: "Training Programs",
    description: "Launched vocational training programs despite pandemic challenges, reaching 100+ students.",
  },
  {
    year: "2021",
    title: "Expansion",
    description: "Introduced ASH Builders and Outfitters departments, diversifying our service offerings.",
  },
  {
    year: "2022",
    title: "Agency Services",
    description: "Added ASH Agency for property management and marketing, serving local businesses.",
  },
  {
    year: "2023",
    title: "Media & Podcasts",
    description: "Launched online marketing and podcast initiatives to extend our reach digitally.",
  },
  {
    year: "2024",
    title: "Growing Impact",
    description: "Reached 500+ individuals through various programs and services across Murang'a County.",
  },
  {
    year: "2026",
    title: "Training Center",
    description: "Fundraising for a dedicated vocational training center to serve even more community members.",
  },
]

export function TimelineSection() {
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
            Our Journey
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From humble beginnings to impacting hundreds of lives
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 hidden lg:block" />

          <div className="space-y-8 lg:space-y-0">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative lg:flex lg:items-center ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className={`lg:w-1/2 ${index % 2 === 0 ? "lg:pr-12 lg:text-right" : "lg:pl-12"}`}>
                  <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
                    <div className="font-serif text-2xl font-bold text-primary mb-2">
                      {milestone.year}
                    </div>
                    <h3 className="font-semibold text-foreground text-lg mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {milestone.description}
                    </p>
                  </div>
                </div>

                {/* Center Dot */}
                <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-primary border-4 border-background" />

                {/* Empty space for opposite side */}
                <div className="hidden lg:block lg:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
