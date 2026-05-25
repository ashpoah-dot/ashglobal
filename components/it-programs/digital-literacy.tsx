'use client'

import { Smartphone, Wifi, Code, Users } from 'lucide-react'

export function DigitalLiteracySection() {
  const features = [
    { icon: Smartphone, title: 'Mobile Computing', description: 'Learn to use modern devices effectively' },
    { icon: Wifi, title: 'Internet Basics', description: 'Navigate online safely and productively' },
    { icon: Code, title: 'Computer Skills', description: 'Master essential computer applications' },
    { icon: Users, title: 'Digital Citizenship', description: 'Understand online etiquette and safety' },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Digital Literacy Training</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Foundation skills for anyone wanting to thrive in the digital age
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <div key={i} className="bg-gradient-to-br from-blue-50 to-green-50 p-6 rounded-lg border border-blue-100 hover:shadow-lg transition-all hover:scale-105">
              <feature.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
