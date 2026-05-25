'use client'

import { Heart, Handshake, Users, Shield } from 'lucide-react'

export function WelfareSupportSection() {
  const programs = [
    { icon: Heart, title: 'Health Support', desc: 'Medical assistance and wellness programs' },
    { icon: Handshake, title: 'Social Support', desc: 'Community care and mutual support' },
    { icon: Users, title: 'Family Care', desc: 'Support for members and families' },
    { icon: Shield, title: 'Protection', desc: 'Legal and security assistance' },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-primary mb-4 text-center">Welfare Support Programs</h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg text-center mb-16">
          Holistic support systems designed for member wellbeing
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((prog, i) => (
            <div key={i} className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-lg border border-green-200 hover:shadow-lg transition-all hover:scale-105">
              <prog.icon className="w-12 h-12 text-secondary mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">{prog.title}</h3>
              <p className="text-gray-600">{prog.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
