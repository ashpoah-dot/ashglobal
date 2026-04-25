"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Play, Clock, Calendar, Headphones } from "lucide-react"
import { Button } from "@/components/ui/button"

const episodes = [
  {
    title: "From Learning to Earning: Success Stories",
    description: "Hear from graduates who transformed their lives through vocational training and now run successful businesses.",
    duration: "45 min",
    date: "Apr 20, 2026",
    image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=400&q=80",
  },
  {
    title: "Mental Health in Our Communities",
    description: "A candid conversation about mental health challenges and available support resources.",
    duration: "38 min",
    date: "Apr 13, 2026",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80",
  },
  {
    title: "Youth Entrepreneurship in Kenya",
    description: "Young entrepreneurs share their journeys, challenges, and advice for aspiring business owners.",
    duration: "52 min",
    date: "Apr 6, 2026",
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=400&q=80",
  },
  {
    title: "Building Skills for the Future",
    description: "Industry experts discuss the most valuable skills for employment and entrepreneurship.",
    duration: "42 min",
    date: "Mar 30, 2026",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&q=80",
  },
]

export function PodcastSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <Headphones className="w-4 h-4" />
            <span className="text-sm font-medium">Latest Episodes</span>
          </div>

          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            ASH Global Podcast
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            Weekly discussions on community development, success stories, and expert insights
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {episodes.map((episode, index) => (
            <motion.div
              key={episode.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="group flex flex-col sm:flex-row gap-4 bg-card border border-border rounded-2xl p-4 hover:border-primary/50 transition-all duration-300 hover:shadow-xl">
                {/* Image */}
                <div className="relative w-full sm:w-32 h-32 rounded-xl overflow-hidden flex-shrink-0">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${episode.image})` }}
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <button className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground hover:scale-110 transition-transform">
                      <Play className="w-5 h-5 ml-1" />
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {episode.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                    {episode.description}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {episode.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {episode.date}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Button size="lg" variant="outline" className="rounded-full px-8">
            View All Episodes
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
