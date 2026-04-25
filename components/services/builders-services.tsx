"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { HardHat, Truck, Hammer, ClipboardCheck, Building2, Wrench } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const services = [
  {
    icon: Truck,
    title: "Materials Supply",
    description: "Quality construction materials at competitive prices with reliable delivery",
  },
  {
    icon: Hammer,
    title: "Renovation",
    description: "Complete home and commercial renovation services",
  },
  {
    icon: ClipboardCheck,
    title: "Project Management",
    description: "Professional oversight from planning to completion",
  },
  {
    icon: Building2,
    title: "New Construction",
    description: "Building homes and commercial properties to specification",
  },
  {
    icon: Wrench,
    title: "Repairs & Maintenance",
    description: "Reliable repairs and ongoing maintenance services",
  },
  {
    icon: HardHat,
    title: "Consultation",
    description: "Expert advice on construction projects and materials",
  },
]

export function BuildersServices() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} id="builders" className="py-20 lg:py-32 bg-secondary/30 scroll-mt-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image & Stats */}
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
                  backgroundImage: `url(https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80)`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>

            {/* Stats Card */}
            <div className="absolute -bottom-6 -right-6 bg-card border border-border rounded-2xl p-6 shadow-xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="font-serif text-3xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Projects</div>
                </div>
                <div className="text-center">
                  <div className="font-serif text-3xl font-bold text-primary">100%</div>
                  <div className="text-sm text-muted-foreground">Satisfaction</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <HardHat className="w-4 h-4" />
              <span className="text-sm font-medium">Construction</span>
            </div>

            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              ASH Builders
            </h2>

            <p className="text-muted-foreground text-lg mb-8">
              Your trusted partner for quality construction services. From material supply to 
              complete project management, we deliver excellence in every project.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{service.title}</h4>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Link href="/contact">
              <Button size="lg" className="bg-gradient-gold text-primary-foreground hover:opacity-90 rounded-full px-8">
                Get a Quote
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
