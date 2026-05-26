'use client'

import { Globe, Zap, Palette, Rocket } from 'lucide-react'

export function WebDevelopmentSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-green-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Web Development Bootcamp</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            12-week intensive program covering HTML, CSS, JavaScript, and modern frameworks
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-primary">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="flex items-center gap-3">
              <Globe className="w-8 h-8 text-primary flex-shrink-0" />
              <div>
                <h4 className="font-bold text-gray-900">Frontend & Backend</h4>
                <p className="text-sm text-gray-600">Full-stack development</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Zap className="w-8 h-8 text-secondary flex-shrink-0" />
              <div>
                <h4 className="font-bold text-gray-900">Interactive Projects</h4>
                <p className="text-sm text-gray-600">Real-world applications</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Palette className="w-8 h-8 text-amber-500 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-gray-900">UI/UX Design</h4>
                <p className="text-sm text-gray-600">User experience focus</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Rocket className="w-8 h-8 text-primary flex-shrink-0" />
              <div>
                <h4 className="font-bold text-gray-900">Job Placement</h4>
                <p className="text-sm text-gray-600">Career assistance</p>
              </div>
            </div>
          </div>
          <button className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Apply to Web Development Program
          </button>
        </div>
      </div>
    </section>
  )
}
