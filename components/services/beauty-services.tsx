"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Scissors, Sparkles, Heart, Palette, Hand, Crown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const services = [
  {
    icon: Hand,
    title: "Nail Care & Art",
    description: "Professional manicures, pedicures, and artistic nail designs",
    price: "From Ksh. 500",
  },
  {
    icon: Scissors,
    title: "Hair Styling",
    description: "Cuts, coloring, treatments, braiding, and styling",
    price: "From Ksh. 800",
  },
  {
    icon: Sparkles,
    title: "Facial & Skincare",
    description: "Deep cleansing, rejuvenation, and skin treatments",
    price: "From Ksh. 1,000",
  },
  {
    icon: Heart,
    title: "Massage Therapy",
    description: "Relaxing full body and targeted massage services",
    price: "From Ksh. 1,500",
  },
  {
    icon: Palette,
    title: "Makeup Services",
    description: "Professional makeup for events, weddings, and photoshoots",
    price: "From Ksh. 2,000",
  },
  {
    icon: Crown,
    title: "Bridal Packages",
    description: "Complete bridal preparation including hair, makeup, and nails",
    price: "From Ksh. 8,000",
  },
]

export function BeautyServices() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} id="beauty" className="py-20 lg:py-32 bg-background scroll-mt-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <Scissors className="w-4 h-4" />
              <span className="text-sm font-medium">Beauty & Cosmetology</span>
            </div>

            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              ASH Beauty Parlor
            </h2>

            <p className="text-muted-foreground text-lg mb-6">
              Experience premium beauty services in a welcoming environment. Our skilled 
              professionals deliver exceptional results using quality products and modern techniques.
            </p>

            {/* Discount Badge */}
            <div className="inline-block mb-8">
              <div className="bg-gradient-gold text-primary-foreground px-6 py-3 rounded-xl font-bold text-lg shadow-lg">
                20% OFF All Services This Month!
              </div>
            </div>

            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden">
              <div
                className="h-80 bg-cover bg-center"
                style={{
                  backgroundImage: `url(https://i.pinimg.com/736x/fe/32/98/fe32986c4f18f967d25af694d11e0bca.jpg)`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="grid gap-4">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                >
                  <div className="flex items-start gap-4 p-4 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="font-semibold text-foreground">{service.title}</h3>
                        <span className="text-primary font-medium text-sm whitespace-nowrap">
                          {service.price}
                        </span>
                      </div>
                      <p className="text-muted-foreground text-sm mt-1">{service.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 flex gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-gold text-primary-foreground hover:opacity-90 rounded-full px-8">
                  Book Appointment
                </Button>
              </Link>
              <Link href="/training">
                <Button size="lg" variant="outline" className="rounded-full px-8">
                  Learn These Skills
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
