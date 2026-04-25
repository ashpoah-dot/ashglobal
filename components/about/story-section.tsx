"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Quote } from "lucide-react"

export function StorySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} id="story" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <div
                className="h-[500px] bg-cover bg-center"
                style={{
                  backgroundImage: `url(https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=800&q=80)`,
                }}
              />
            </div>
            {/* Decorative */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 border-4 border-primary rounded-2xl -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Story
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                ASH Global Initiatives was born from a deep conviction that every individual, 
                regardless of their background, has the potential to rise and shine. Founded in 2018 
                in Murang&apos;a County, Kenya, our organization emerged from a community need for 
                accessible skill development and youth empowerment programs.
              </p>
              <p>
                What started as a small initiative to train young people in cosmetology has grown 
                into a comprehensive community support organization with multiple departments serving 
                diverse needs - from beauty services to construction, fashion, and business mentorship.
              </p>
              <p>
                Our name, ASH (Arise & Shine), is inspired by Isaiah 60:1: &quot;Arise and shine, for your 
                light has come.&quot; This biblical foundation drives our belief that transformation is 
                possible for everyone willing to take the first step.
              </p>
            </div>

            {/* Quote */}
            <div className="mt-8 p-6 bg-secondary/50 rounded-xl border-l-4 border-primary">
              <Quote className="w-8 h-8 text-primary mb-4" />
              <p className="text-foreground italic text-lg">
                &quot;Building stronger people everywhere - that&apos;s not just our tagline, it&apos;s our life mission.&quot;
              </p>
              <div className="mt-4">
                <div className="font-semibold text-foreground">David Maina</div>
                <div className="text-sm text-muted-foreground">Founder & CEO</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
