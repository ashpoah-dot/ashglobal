"use client"

import { motion } from "framer-motion"
import { GraduationCap, BadgePercent } from "lucide-react"
import { Button } from "@/components/ui/button"

export function TrainingHero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&q=80)`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/70" />

      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white mb-6">
              <GraduationCap className="w-4 h-4" />
              <span className="text-sm font-medium">Vocational Training</span>
            </div>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              From Learning to <span className="text-gradient-gold">Earning</span>
            </h1>

            <p className="text-xl text-white/80 leading-relaxed mb-8">
              Transform your future with affordable, high-quality vocational training. 
              Gain practical skills, earn certifications, and open doors to employment 
              and entrepreneurship.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#courses">
                <Button
                  size="lg"
                  className="bg-gradient-gold text-primary-foreground hover:opacity-90 rounded-full px-8"
                >
                  View Courses
                </Button>
              </a>
              <a href="#enroll">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 rounded-full px-8"
                >
                  Apply Now
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Highlight Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-gold flex items-center justify-center">
                  <BadgePercent className="w-8 h-8 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-white">70% Subsidized</h3>
                  <p className="text-white/70">Training costs</p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between py-3 border-b border-white/10">
                  <span className="text-white/70">Registration Fee</span>
                  <span className="font-bold text-white">Ksh. 2,000</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-white/10">
                  <span className="text-white/70">Daily Training</span>
                  <span className="font-bold text-white">Ksh. 200</span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="text-white/70">Certificate</span>
                  <span className="font-bold text-primary">Included</span>
                </div>
              </div>

              <a href="#enroll">
                <Button className="w-full bg-white text-black hover:bg-white/90 rounded-full">
                  Enroll Today
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
