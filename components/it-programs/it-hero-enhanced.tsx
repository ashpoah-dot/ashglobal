import { Brain, Code, Palette, Zap, Smartphone, TrendingUp, Users, Lightbulb } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function ItProgramsHero() {
  return (
    <section className="relative min-h-[600px] bg-gradient-to-br from-primary via-blue-700 to-primary dark:from-blue-600 dark:via-blue-800 dark:to-blue-700 overflow-hidden pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
        <div className="absolute top-40 right-20 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-2000" />
      </div>

      <div className="relative container mx-auto px-4 lg:px-8 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <span className="text-white/90 font-semibold text-sm">🚀 AI & Technology Empowerment</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight text-balance">
            Transform Your Future With Tech Skills
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto">
            Master artificial intelligence, digital innovation, and future-ready skills designed for African youth and communities
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-16">
            <Link href="/contact">
              <Button className="bg-white text-primary hover:bg-gray-100 rounded-full px-8 py-6 text-base font-semibold shadow-lg">
                Enroll Now
              </Button>
            </Link>
            <Link href="#programs">
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 rounded-full px-8 py-6 text-base font-semibold">
                View All Programs
              </Button>
            </Link>
          </div>

          {/* Featured stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {[
              { icon: Code, label: '14+ Programs', value: 'AI to E-commerce' },
              { icon: Users, label: '2000+ Graduates', value: 'Employed & Thriving' },
              { icon: TrendingUp, label: '95% Success', value: 'Career Placement' },
              { icon: Lightbulb, label: 'Innovation-Led', value: 'Curriculum' },
            ].map((stat, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 text-white/90">
                <stat.icon className="w-8 h-8 mb-2 text-accent mx-auto" />
                <div className="font-bold text-sm">{stat.label}</div>
                <div className="text-xs text-white/60">{stat.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
