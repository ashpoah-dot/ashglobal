'use client'

import { Paintbrush, Image, Video, Layers } from 'lucide-react'

export function GraphicDesignSection() {
  const courses = [
    { icon: Paintbrush, title: 'Adobe Suite Mastery', desc: 'Photoshop, Illustrator, InDesign' },
    { icon: Image, title: 'Brand Design', desc: 'Logo and visual identity' },
    { icon: Video, title: 'Video Editing', desc: 'Professional video production' },
    { icon: Layers, title: 'UI/UX Design', desc: 'Digital interface design' },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-primary mb-4 text-center">Graphic Design & Creative Programs</h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg text-center mb-16">
          Develop creative skills in modern design tools and techniques
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, i) => (
            <div key={i} className="bg-white border-2 border-green-100 rounded-lg p-6 hover:shadow-lg transition-all hover:border-green-300">
              <course.icon className="w-10 h-10 text-secondary mb-3" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">{course.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{course.desc}</p>
              <button className="text-secondary font-semibold hover:text-green-700">Learn More →</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
