"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Users, Lightbulb, Target, Trophy } from "lucide-react"

const programs = [
  {
    icon: Lightbulb,
    title: "Mentorship Program",
    description: "Pairing young people with experienced mentors for guidance, support, and career advice.",
    stat: "100+",
    statLabel: "Mentees",
  },
  {
    icon: Target,
    title: "Leadership Training",
    description: "Building leadership skills through workshops, community projects, and hands-on experience.",
    stat: "50+",
    statLabel: "Leaders",
  },
  {
    icon: Trophy,
    title: "Skills Competitions",
    description: "Regular competitions and showcases where youth can demonstrate and refine their skills.",
    stat: "10+",
    statLabel: "Events/Year",
  },
  {
    icon: Users,
    title: "Community Service",
    description: "Engaging youth in meaningful community service projects that build character and impact.",
    stat: "20+",
    statLabel: "Projects",
  },
]

export function YouthEngagementSection() {
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <Users className="w-4 h-4" />
            <span className="text-sm font-medium">Youth Programs</span>
          </div>

          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Youth Engagement
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            Empowering the next generation through mentorship, leadership development, 
            and meaningful community engagement.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="h-full bg-card border border-border rounded-2xl p-6 text-center hover:border-primary/50 transition-all duration-300 hover:shadow-xl">
                <div className="w-14 h-14 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <program.icon className="w-7 h-7 text-primary" />
                </div>

                <h3 className="font-serif text-lg font-bold text-foreground mb-2">
                  {program.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-4">
                  {program.description}
                </p>

                <div className="pt-4 border-t border-border">
                  <div className="font-serif text-2xl font-bold text-primary">{program.stat}</div>
                  <div className="text-sm text-muted-foreground">{program.statLabel}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
