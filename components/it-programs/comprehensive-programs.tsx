import { Brain, Code, Palette, Smartphone, TrendingUp, Zap, Users, Lightbulb, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const programs = [
  {
    icon: Brain,
    title: 'Artificial Intelligence Skills Training',
    description: 'Master machine learning, neural networks, and AI fundamentals for the future of technology',
    duration: '12 weeks',
    level: 'Intermediate'
  },
  {
    icon: Zap,
    title: 'Prompt Engineering',
    description: 'Learn to effectively communicate with AI models and unlock powerful automation capabilities',
    duration: '6 weeks',
    level: 'Beginner'
  },
  {
    icon: Lightbulb,
    title: 'AI Tools for Productivity',
    description: 'Discover and master cutting-edge AI tools that boost efficiency and creativity in your work',
    duration: '8 weeks',
    level: 'Beginner'
  },
  {
    icon: Code,
    title: 'Web Development Bootcamp',
    description: 'Build modern, responsive websites using HTML, CSS, JavaScript, React, and backend technologies',
    duration: '16 weeks',
    level: 'Beginner'
  },
  {
    icon: Palette,
    title: 'Graphic Design Mastery',
    description: 'Create stunning visuals using industry-standard tools like Figma, Adobe Creative Suite, and more',
    duration: '10 weeks',
    level: 'Beginner'
  },
  {
    icon: TrendingUp,
    title: 'Digital Marketing & Social Media',
    description: 'Master SEO, content marketing, social media strategies, and digital advertising campaigns',
    duration: '10 weeks',
    level: 'Beginner'
  },
  {
    icon: Smartphone,
    title: 'Computer Packages & Office Software',
    description: 'Become proficient in Word, Excel, PowerPoint, Google Workspace, and enterprise tools',
    duration: '6 weeks',
    level: 'Beginner'
  },
  {
    icon: Code,
    title: 'Intensive Coding Bootcamp',
    description: 'Advanced programming in Python, JavaScript, and professional development practices',
    duration: '14 weeks',
    level: 'Advanced'
  },
  {
    icon: Users,
    title: 'Freelancing & Remote Work Training',
    description: 'Build your freelance career, manage projects, and earn globally from anywhere',
    duration: '8 weeks',
    level: 'Beginner'
  },
  {
    icon: Palette,
    title: 'Content Creation & Media Skills',
    description: 'Video production, photography, podcasting, and multimedia storytelling for digital platforms',
    duration: '10 weeks',
    level: 'Beginner'
  },
  {
    icon: Zap,
    title: 'Cyber Safety & Digital Literacy',
    description: 'Protect yourself and others online. Learn cybersecurity basics and digital citizenship',
    duration: '6 weeks',
    level: 'Beginner'
  },
  {
    icon: TrendingUp,
    title: 'Entrepreneurship Through Technology',
    description: 'Launch your tech startup with business fundamentals, funding, and innovation strategies',
    duration: '12 weeks',
    level: 'Intermediate'
  },
  {
    icon: Lightbulb,
    title: 'Youth Innovation Labs',
    description: 'Hands-on project-based learning where you solve real-world problems with tech solutions',
    duration: 'Ongoing',
    level: 'All Levels'
  },
  {
    icon: TrendingUp,
    title: 'Online Business & E-commerce Skills',
    description: 'Launch your online store, manage inventory, payments, and scale your digital business',
    duration: '10 weeks',
    level: 'Beginner'
  },
]

export function ComprehensiveItProgramsSection() {
  return (
    <section id="programs" className="py-20 bg-gradient-to-b from-background via-background to-blue-50/30 dark:to-slate-900/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            14+ Transformative Programs
          </h2>
          <p className="text-lg text-muted-foreground">
            From AI fundamentals to entrepreneurship, we offer comprehensive training in cutting-edge digital skills designed for modern careers and innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {programs.map((program, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-slate-800 rounded-xl border border-border dark:border-slate-700 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary rounded-t-xl" />

              {/* Icon */}
              <div className="w-14 h-14 bg-gradient-to-br from-primary to-blue-600 dark:from-blue-500 dark:to-blue-700 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <program.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-2">
                {program.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {program.description}
              </p>

              {/* Meta info */}
              <div className="flex items-center justify-between text-xs font-semibold mb-4">
                <span className="text-primary dark:text-blue-400">{program.duration}</span>
                <span className="px-3 py-1 rounded-full bg-secondary/10 dark:bg-emerald-900/30 text-secondary dark:text-emerald-300">
                  {program.level}
                </span>
              </div>

              {/* CTA */}
              <Link href="/contact" className="inline-flex items-center gap-2 text-primary dark:text-blue-400 font-semibold hover:gap-3 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary to-blue-700 dark:from-blue-600 dark:to-blue-800 rounded-2xl p-12 text-center text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Career?
          </h3>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Join thousands of African youth and professionals who have already changed their lives through our technology and innovation programs.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-white text-primary hover:bg-gray-100 rounded-full px-8 py-6 text-base font-semibold">
                Enroll Today
              </Button>
            </Link>
            <Link href="/donate">
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 rounded-full px-8 py-6 text-base">
                Support Our Mission
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
