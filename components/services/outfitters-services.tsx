"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Shirt, ShoppingBag, Users, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const categories = [
  {
    title: "Men's Fashion",
    image: "https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?w=400&q=80",
  },
  {
    title: "Women's Collection",
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&q=80",
  },
  {
    title: "Traditional Wear",
    image: "https://images.unsplash.com/photo-1590735213920-68192a487bc2?w=400&q=80",
  },
  {
    title: "Accessories",
    image: "https://images.unsplash.com/photo-1523779105320-d1cd346ff52b?w=400&q=80",
  },
]

const features = [
  { icon: ShoppingBag, text: "Retail & Wholesale" },
  { icon: Sparkles, text: "Quality Products" },
  { icon: Users, text: "For All Ages" },
  { icon: Shirt, text: "Latest Trends" },
]

export function OutfittersServices() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} id="outfitters" className="py-20 lg:py-32 bg-background scroll-mt-24">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <Shirt className="w-4 h-4" />
            <span className="text-sm font-medium">Fashion</span>
          </div>

          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Arise & Shine Outfitters
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Quality fashion for the modern African. We blend tradition with contemporary 
            trends to bring you stylish, affordable clothing.
          </p>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            {features.map((feature) => (
              <div key={feature.text} className="flex items-center gap-2 text-foreground">
                <feature.icon className="w-5 h-5 text-primary" />
                <span>{feature.text}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative h-80 rounded-2xl overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${category.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-serif text-xl font-bold text-white">{category.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <Link href="/contact">
            <Button size="lg" className="bg-gradient-gold text-primary-foreground hover:opacity-90 rounded-full px-8">
              Visit Our Store
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
