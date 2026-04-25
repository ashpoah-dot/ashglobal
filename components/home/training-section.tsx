"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { GraduationCap, Clock, DollarSign, Award, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const features = [
  {
    icon: DollarSign,
    title: "70% Subsidized",
    description: "Affordable training with substantial subsidy support",
  },
  {
    icon: Clock,
    title: "Flexible Schedule",
    description: "Ksh. 2000 registration + Ksh. 200 daily training",
  },
  {
    icon: Award,
    title: "Certification",
    description: "Recognized certificates upon completion",
  },
  {
    icon: GraduationCap,
    title: "Expert Trainers",
    description: "Learn from industry professionals",
  },
]

export function TrainingSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <div
                className="h-[500px] bg-cover bg-center"
                style={{
                  backgroundImage: `url(https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80)`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

              {/* Overlay Content */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="glass rounded-xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-gold flex items-center justify-center">
                      <GraduationCap className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-serif text-xl font-bold text-white">Cosmetology Course</h4>
                      <p className="text-white/70">Now Enrolling!</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold text-white">Ksh. 2,000</div>
                      <div className="text-sm text-white/70">Registration Fee</div>
                    </div>
                    <Link href="/training">
                      <Button className="bg-white text-black hover:bg-white/90 rounded-full">
                        Enroll Now
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-2xl -z-10" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/5 rounded-2xl -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <GraduationCap className="w-4 h-4" />
              <span className="text-sm font-medium">Vocational Training</span>
            </div>

            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Transform Your Future with <span className="text-gradient-gold">Professional Skills</span>
            </h2>

            <p className="text-muted-foreground text-lg mb-8">
              Join our comprehensive vocational training programs designed to equip you with 
              marketable skills for sustainable employment and entrepreneurship. Our cosmetology 
              course is launching with an incredible 70% subsidy!
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Link href="/training">
                <Button size="lg" className="bg-gradient-gold text-primary-foreground hover:opacity-90 rounded-full px-8">
                  Apply Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/training#courses">
                <Button size="lg" variant="outline" className="rounded-full px-8">
                  View All Courses
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
