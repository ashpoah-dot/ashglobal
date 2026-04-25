"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Brain, Heart, MessageCircle, Users, Phone, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const services = [
  {
    icon: MessageCircle,
    title: "Counseling Services",
    description: "One-on-one counseling sessions with trained professionals in a safe, confidential environment.",
  },
  {
    icon: Users,
    title: "Support Groups",
    description: "Peer support groups where community members can share experiences and support each other.",
  },
  {
    icon: Brain,
    title: "Mental Health Education",
    description: "Workshops and seminars on mental health awareness, stress management, and coping strategies.",
  },
  {
    icon: Phone,
    title: "Crisis Helpline",
    description: "24/7 support line for those in crisis or needing immediate mental health assistance.",
  },
]

export function MentalHealthSection() {
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
              <Heart className="w-4 h-4" />
              <span className="text-sm font-medium">Mental Health</span>
            </div>

            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              Mental Health & Wellbeing
            </h2>

            <p className="text-muted-foreground text-lg mb-8">
              We recognize that true empowerment includes mental and emotional wellbeing. 
              Our mental health programs provide accessible support for community members 
              facing various challenges.
            </p>

            <div className="space-y-4 mb-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{service.title}</h4>
                    <p className="text-muted-foreground text-sm">{service.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex items-center gap-4 p-4 bg-secondary rounded-xl mb-6">
              <Shield className="w-8 h-8 text-primary" />
              <div>
                <div className="font-semibold text-foreground">Confidential & Safe</div>
                <div className="text-sm text-muted-foreground">All services are provided in a confidential, judgment-free environment</div>
              </div>
            </div>

            <Link href="/contact">
              <Button size="lg" className="bg-gradient-gold text-primary-foreground hover:opacity-90 rounded-full px-8">
                Get Support
              </Button>
            </Link>
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
                  backgroundImage: `url(https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=800&q=80)`,
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
