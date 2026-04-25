"use client"

import { motion } from "framer-motion"
import { Briefcase } from "lucide-react"

export function ServicesHero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1920&q=80)`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/70" />

      <div className="container mx-auto px-4 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white mb-6">
            <Briefcase className="w-4 h-4" />
            <span className="text-sm font-medium">Our Services</span>
          </div>

          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Comprehensive Solutions for <span className="text-gradient-gold">Community Growth</span>
          </h1>
          <p className="text-xl text-white/80 leading-relaxed">
            From beauty services to construction, fashion, and business solutions - we offer 
            diverse services designed to meet community needs and create opportunities.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
