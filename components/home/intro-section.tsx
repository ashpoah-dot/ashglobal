"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Sparkles } from "lucide-react"

export function IntroSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Welcome to ASH Global Initiatives</span>
          </div>

          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight text-balance">
            Empowering Communities, <span className="text-gradient-gold">Transforming Lives</span>
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
            ASH Global Initiatives is a dynamic, community support-based organization dedicated to 
            empowering individuals and transforming livelihoods through skill development, vocational 
            training, youth empowerment, business mentorship, and sustainable social impact programs.
          </p>

          <div className="flex items-center justify-center gap-8 pt-8 border-t border-border">
            <div className="text-center">
              <div className="font-serif text-3xl md:text-4xl font-bold text-primary">2018</div>
              <div className="text-sm text-muted-foreground">Founded</div>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-center">
              <div className="font-serif text-3xl md:text-4xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Lives Impacted</div>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-center">
              <div className="font-serif text-3xl md:text-4xl font-bold text-primary">5+</div>
              <div className="text-sm text-muted-foreground">Programs</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
