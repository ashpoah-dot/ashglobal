"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Scissors, Ruler, HardHat, Leaf, Monitor, Clock, Users, Award } from "lucide-react"
import { Button } from "@/components/ui/button"

const courses = [
  {
    icon: Scissors,
    title: "Cosmetology",
    description: "Complete beauty training including hair styling, nail care, makeup, skincare, and spa services.",
    duration: "3-6 months",
    spots: "Now Enrolling",
    featured: true,
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80",
  },
  {
    icon: Ruler,
    title: "Tailoring & Fashion",
    description: "Learn garment construction, pattern making, alterations, and fashion design fundamentals.",
    duration: "4 months",
    spots: "Limited Spots",
    featured: false,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  },
  {
    icon: HardHat,
    title: "Construction Skills",
    description: "Practical training in masonry, plumbing, electrical work, and construction management.",
    duration: "6 months",
    spots: "Coming Soon",
    featured: false,
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
  },
  {
    icon: Leaf,
    title: "Agribusiness",
    description: "Modern farming techniques, livestock management, and agricultural business skills.",
    duration: "3 months",
    spots: "Coming Soon",
    featured: false,
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&q=80",
  },
  {
    icon: Monitor,
    title: "ICT & Digital Skills",
    description: "Computer literacy, digital marketing, social media management, and basic programming.",
    duration: "2 months",
    spots: "Coming Soon",
    featured: false,
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
  },
]

export function CoursesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} id="courses" className="py-20 lg:py-32 bg-background scroll-mt-24">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Training Programs
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Practical, skills-based training designed to prepare you for employment and entrepreneurship
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={course.featured ? "md:col-span-2 lg:col-span-1" : ""}
            >
              <div className={`group h-full bg-card border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 ${
                course.featured ? "border-primary" : "border-border hover:border-primary/50"
              }`}>
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${course.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                  
                  {/* Badge */}
                  {course.featured && (
                    <div className="absolute top-4 right-4 bg-gradient-gold text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </div>
                  )}
                  
                  {/* Icon */}
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-gold flex items-center justify-center">
                      <course.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                    {course.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {course.description}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center gap-4 mb-4 text-sm">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className={`flex items-center gap-1 ${
                      course.spots === "Now Enrolling" ? "text-green-500" : 
                      course.spots === "Limited Spots" ? "text-primary" : "text-muted-foreground"
                    }`}>
                      <Users className="w-4 h-4" />
                      <span>{course.spots}</span>
                    </div>
                  </div>

                  <a href="#enroll">
                    <Button 
                      className={`w-full rounded-full ${
                        course.featured 
                          ? "bg-gradient-gold text-primary-foreground hover:opacity-90" 
                          : ""
                      }`}
                      variant={course.featured ? "default" : "outline"}
                    >
                      {course.spots === "Coming Soon" ? "Join Waitlist" : "Apply Now"}
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
