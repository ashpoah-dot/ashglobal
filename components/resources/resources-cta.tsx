"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Radio, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ResourcesCta() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative bg-card border border-border rounded-3xl p-8 md:p-12 lg:p-16 overflow-hidden"
        >
          {/* Decorative */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />

          <div className="relative grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
                <Radio className="w-4 h-4" />
                <span className="text-sm font-medium">Podcasts & Talk Shows</span>
              </div>

              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                Listen to Our Podcasts
              </h2>

              <p className="text-muted-foreground text-lg mb-8">
                Join our engaging discussions on community development, youth empowerment, 
                mental health, and success stories from our programs. New episodes every week!
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/media">
                  <Button size="lg" className="bg-gradient-gold text-primary-foreground hover:opacity-90 rounded-full px-8">
                    Listen Now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="rounded-full px-8">
                    Be a Guest Speaker
                  </Button>
                </Link>
              </div>
            </div>

            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden">
              <div
                className="h-80 bg-cover bg-center"
                style={{
                  backgroundImage: `url(https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&q=80)`,
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
