"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Handshake } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const partners = [
  { name: "Partner 1", logo: "P1" },
  { name: "Partner 2", logo: "P2" },
  { name: "Partner 3", logo: "P3" },
  { name: "Partner 4", logo: "P4" },
  { name: "Partner 5", logo: "P5" },
  { name: "Partner 6", logo: "P6" },
]

export function PartnersSection() {
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
            <Handshake className="w-4 h-4" />
            <span className="text-sm font-medium">Our Partners</span>
          </div>

          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Building Together
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We believe meaningful impact can only be achieved through strong partnerships. 
            Join hands with us in transforming communities.
          </p>
        </motion.div>

        {/* Partner Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              className="group"
            >
              <div className="h-24 bg-card border border-border rounded-xl flex items-center justify-center hover:border-primary/50 hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                  <span className="font-serif text-xl font-bold text-muted-foreground group-hover:text-primary transition-colors">
                    {partner.logo}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <Link href="/contact">
            <Button size="lg" className="bg-gradient-gold text-primary-foreground hover:opacity-90 rounded-full px-8">
              Become a Partner
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
