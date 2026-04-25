"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Award, Users, Briefcase, DollarSign, Clock, Heart } from "lucide-react"

const benefits = [
  {
    icon: DollarSign,
    title: "Affordable",
    description: "70% subsidized training with flexible payment options. Education shouldn't be a financial burden.",
  },
  {
    icon: Award,
    title: "Certified",
    description: "Receive recognized certificates upon completion, enhancing your employment prospects.",
  },
  {
    icon: Users,
    title: "Expert Trainers",
    description: "Learn from experienced professionals with real-world industry experience.",
  },
  {
    icon: Briefcase,
    title: "Job Placement",
    description: "We connect graduates with employment opportunities and support entrepreneurship.",
  },
  {
    icon: Clock,
    title: "Flexible Schedule",
    description: "Training programs designed to accommodate your existing commitments.",
  },
  {
    icon: Heart,
    title: "Mentorship",
    description: "Ongoing support and guidance even after completing your training program.",
  },
]

export function WhyTrainSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              Why Train With Us?
            </h2>

            <p className="text-muted-foreground text-lg mb-8">
              At ASH Global Initiatives, we don&apos;t just teach skills - we transform lives. 
              Our holistic approach combines practical training with mentorship, business 
              skills, and ongoing support.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{benefit.title}</h4>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <div
                className="h-[500px] bg-cover bg-center"
                style={{
                  backgroundImage: `url(https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=800&q=80)`,
                }}
              />
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-2xl p-6 shadow-xl">
              <div className="text-center">
                <div className="font-serif text-4xl font-bold text-primary">95%</div>
                <div className="text-sm text-muted-foreground">Graduate Employment</div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 bg-card border border-border rounded-2xl p-6 shadow-xl">
              <div className="text-center">
                <div className="font-serif text-4xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Trained Students</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
