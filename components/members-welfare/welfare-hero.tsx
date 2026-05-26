'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function MembersWelfareHero() {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center bg-gradient-to-br from-secondary via-emerald-600 to-secondary dark:from-emerald-600 dark:via-emerald-700 dark:to-emerald-800 text-white pt-20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 right-20 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-2000" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24">
        <div className="inline-block mb-6 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
          <span className="text-white/90 font-semibold text-sm">🤝 Community Empowerment & Support</span>
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-balance">
          Empowering Communities, Supporting Lives
        </h1>
        
        <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
          ASH Global Initiatives is a support-driven nonprofit NGO committed to uplifting individuals and communities through mentorship, skills development, and sustainable opportunities—not financial services.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/contact">
            <Button className="bg-white text-secondary hover:bg-gray-100 rounded-full px-8 py-6 text-base font-semibold shadow-lg">
              Join Our Community
            </Button>
          </Link>
          <Link href="#support">
            <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 rounded-full px-8 py-6 text-base font-semibold">
              Explore Support Programs
            </Button>
          </Link>
        </div>

        {/* Feature highlights */}
        <div className="grid grid-cols-3 md:grid-cols-3 gap-6 mt-16">
          {[
            { label: 'Emergency Support', icon: '🚨' },
            { label: 'Mentorship Programs', icon: '👥' },
            { label: 'Skills Training', icon: '📚' },
          ].map((feature, i) => (
            <div key={i} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 text-white/90">
              <div className="text-3xl mb-2">{feature.icon}</div>
              <div className="font-semibold text-sm">{feature.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
