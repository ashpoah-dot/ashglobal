"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Heart, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const impacts = [
  { amount: "Ksh. 200", impact: "One day of training for a student" },
  { amount: "Ksh. 2,000", impact: "Registration for one new trainee" },
  { amount: "Ksh. 5,000", impact: "One month of training materials" },
  { amount: "Ksh. 15,000", impact: "Complete program sponsorship" },
  { amount: "Ksh. 50,000", impact: "Equipment for training room" },
  { amount: "Ksh. 100,000", impact: "Monthly operational costs" },
]

export function ImpactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <Heart className="w-4 h-4" />
              <span className="text-sm font-medium">Your Impact</span>
            </div>

            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              See What Your Donation Can Achieve
            </h2>

            <p className="text-muted-foreground text-lg mb-8">
              Every shilling counts. Here&apos;s how your contribution directly impacts 
              our programs and the lives of community members.
            </p>

            <div className="space-y-4 mb-8">
              {impacts.map((item, index) => (
                <motion.div
                  key={item.amount}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl"
                >
                  <div className="font-serif text-lg font-bold text-primary min-w-[120px]">
                    {item.amount}
                  </div>
                  <div className="w-px h-6 bg-border" />
                  <div className="text-foreground">{item.impact}</div>
                </motion.div>
              ))}
            </div>

            <Link href="/contact">
              <Button size="lg" className="bg-gradient-gold text-primary-foreground hover:opacity-90 rounded-full px-8">
                Contact Us to Donate
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <div
                className="h-[600px] bg-cover bg-center"
                style={{
                  backgroundImage: `url(https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800&q=80)`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
            </div>

            {/* Quote */}
            <div className="absolute bottom-8 left-8 right-8 bg-card/90 backdrop-blur-sm border border-border rounded-xl p-6">
              <p className="text-foreground italic mb-4">
                &quot;The training I received changed my life. Now I can support my family 
                and give back to my community.&quot;
              </p>
              <div className="text-sm text-muted-foreground">— Grace, Beauty Training Graduate</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
