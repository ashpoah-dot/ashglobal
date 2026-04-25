"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Play, Video } from "lucide-react"

const videos = [
  {
    title: "ASH Global Initiatives - Our Story",
    views: "2.5K views",
    image: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=600&q=80",
    featured: true,
  },
  {
    title: "Beauty Training Program Highlights",
    views: "1.8K views",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&q=80",
    featured: false,
  },
  {
    title: "Youth Empowerment Event 2025",
    views: "1.2K views",
    image: "https://images.unsplash.com/photo-1529390079861-591f57168e73?w=400&q=80",
    featured: false,
  },
  {
    title: "Graduate Success Story: Grace",
    views: "980 views",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&q=80",
    featured: false,
  },
]

export function VideoSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <Video className="w-4 h-4" />
            <span className="text-sm font-medium">Videos</span>
          </div>

          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Watch & Learn
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our video content featuring program highlights, success stories, and community events
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Featured Video */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:row-span-2"
          >
            <div className="group h-full relative rounded-2xl overflow-hidden cursor-pointer">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(${videos[0].image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center text-primary-foreground group-hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 ml-1" />
                </div>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="text-primary text-sm font-medium mb-2">Featured</div>
                <h3 className="font-serif text-2xl font-bold text-white mb-2">
                  {videos[0].title}
                </h3>
                <div className="text-white/70 text-sm">{videos[0].views}</div>
              </div>
            </div>
          </motion.div>

          {/* Other Videos */}
          {videos.slice(1).map((video, index) => (
            <motion.div
              key={video.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            >
              <div className="group relative h-48 rounded-2xl overflow-hidden cursor-pointer">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url(${video.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center text-primary-foreground group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 ml-0.5" />
                  </div>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="font-semibold text-white mb-1">{video.title}</h3>
                  <div className="text-white/70 text-sm">{video.views}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
