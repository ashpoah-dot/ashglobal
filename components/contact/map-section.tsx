"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { MapPin, Navigation } from "lucide-react"
import { Button } from "@/components/ui/button"

export function MapSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Find Us
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Visit our office in Murang&apos;a County, Kenya
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative rounded-2xl overflow-hidden border border-border"
        >
          {/* Map Embed */}
          <div className="relative h-[400px] lg:h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63800.19523423791!2d37.1029!3d-0.7167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18287c1c7c7c7c7c%3A0x7c7c7c7c7c7c7c7c!2sMurang&#39;a%2C%20Kenya!5e0!3m2!1sen!2ske!4v1620000000000!5m2!1sen!2ske"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="ASH Global Initiatives Location"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>

          {/* Overlay Card */}
          <div className="absolute bottom-6 left-6 right-6 md:right-auto md:max-w-sm bg-card/95 backdrop-blur-sm border border-border rounded-xl p-6 shadow-xl">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">ASH Global Initiatives</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Paneilla Apartment, Murang&apos;a County, Kenya
                </p>
                <a
                  href="https://www.google.com/maps/search/Murang'a+County+Kenya"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="sm" className="rounded-full">
                    <Navigation className="w-4 h-4 mr-2" />
                    Get Directions
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
