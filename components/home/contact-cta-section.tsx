"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { MapPin, Phone, MessageCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ContactCtaSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-gradient-to-br from-card via-card to-secondary/50">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative bg-card border border-border rounded-3xl p-8 md:p-12 lg:p-16 overflow-hidden"
        >
          {/* Decorative */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 rounded-full blur-2xl" />

          <div className="relative grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                Ready to Start Your <span className="text-gradient-gold">Transformation?</span>
              </h2>

              <p className="text-muted-foreground text-lg mb-8">
                Visit us at our location in Murang&apos;a County, Kenya. Our team is ready to help you 
                take the first step towards a brighter future.
              </p>

              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Visit Us</div>
                  <div className="text-muted-foreground">Paneilla Apartment, Murang&apos;a County, Kenya</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <a href="tel:+254700000000">
                  <Button size="lg" className="bg-gradient-gold text-primary-foreground hover:opacity-90 rounded-full px-8">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Us
                  </Button>
                </a>
                <a href="https://wa.me/254700000000" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="rounded-full px-8">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp
                  </Button>
                </a>
              </div>
            </div>

            {/* Map Placeholder / Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden border border-border">
                <div
                  className="h-80 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80)`,
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />

                {/* Overlay Card */}
                <div className="absolute bottom-4 left-4 right-4 bg-card/90 backdrop-blur-sm border border-border rounded-xl p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-foreground">ASH Global HQ</div>
                      <div className="text-sm text-muted-foreground">Open Mon-Sat, 8AM - 6PM</div>
                    </div>
                    <Link href="/contact">
                      <Button size="sm" className="rounded-full">
                        Get Directions
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
