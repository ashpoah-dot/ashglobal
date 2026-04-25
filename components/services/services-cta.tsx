"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Phone, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ServicesCta() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative bg-gradient-to-br from-primary/20 via-primary/10 to-transparent border border-primary/20 rounded-3xl p-8 md:p-12 lg:p-16 text-center overflow-hidden"
        >
          {/* Decorative */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 rounded-full blur-2xl" />

          <div className="relative">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Ready to Get Started?
            </h2>

            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
              Contact us today to discuss your needs. Whether it&apos;s beauty services, 
              construction projects, fashion, or business solutions - we&apos;re here to help.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:+254700000000">
                <Button size="lg" className="bg-gradient-gold text-primary-foreground hover:opacity-90 rounded-full px-8">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Us Now
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
        </motion.div>
      </div>
    </section>
  )
}
