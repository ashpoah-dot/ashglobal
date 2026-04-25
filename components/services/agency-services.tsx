"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Briefcase, Home, Megaphone, TrendingUp, Users, FileText, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const services = [
  {
    icon: Home,
    title: "Property Management",
    description: "Complete property management solutions for landlords and property owners. We handle tenant relations, maintenance, and rent collection.",
  },
  {
    icon: Megaphone,
    title: "Marketing Services",
    description: "Strategic marketing solutions to help local businesses grow. From digital presence to traditional advertising.",
  },
  {
    icon: TrendingUp,
    title: "Business Consulting",
    description: "Expert guidance for startups and established businesses looking to expand and improve operations.",
  },
  {
    icon: Users,
    title: "Recruitment",
    description: "Connecting qualified candidates with employment opportunities in the region.",
  },
]

export function AgencyServices() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} id="agency" className="py-20 lg:py-32 bg-secondary/30 scroll-mt-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <Briefcase className="w-4 h-4" />
              <span className="text-sm font-medium">Professional Services</span>
            </div>

            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              ASH Agency
            </h2>

            <p className="text-muted-foreground text-lg mb-8">
              Professional business services designed to help individuals and organizations 
              achieve their goals. From property management to marketing, we provide 
              comprehensive solutions.
            </p>

            <div className="space-y-4 mb-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="flex items-start gap-4 p-4 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{service.title}</h3>
                    <p className="text-muted-foreground text-sm">{service.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Link href="/contact">
              <Button size="lg" className="bg-gradient-gold text-primary-foreground hover:opacity-90 rounded-full px-8">
                Get Started
                <ArrowRight className="w-4 h-4 ml-2" />
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
                className="h-[600px] bg-cover bg-center"
                style={{
                  backgroundImage: `url(https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80)`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
            </div>

            {/* Floating Cards */}
            <div className="absolute bottom-8 left-8 right-8 grid grid-cols-2 gap-4">
              <div className="bg-card/90 backdrop-blur-sm border border-border rounded-xl p-4">
                <FileText className="w-8 h-8 text-primary mb-2" />
                <div className="font-semibold text-foreground">100+</div>
                <div className="text-sm text-muted-foreground">Properties Managed</div>
              </div>
              <div className="bg-card/90 backdrop-blur-sm border border-border rounded-xl p-4">
                <Users className="w-8 h-8 text-primary mb-2" />
                <div className="font-semibold text-foreground">50+</div>
                <div className="text-sm text-muted-foreground">Businesses Served</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
