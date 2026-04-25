"use client"

import { motion } from "framer-motion"

export function AboutHero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=1920&q=80)`,
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
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 bg-gradient-gold mb-6"
          />
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            About <span className="text-gradient-gold">ASH Global</span> Initiatives
          </h1>
          <p className="text-xl text-white/80 leading-relaxed">
            Since 2018, we&apos;ve been dedicated to building stronger people everywhere through 
            skill development, vocational training, and community empowerment in Murang&apos;a County, Kenya.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
