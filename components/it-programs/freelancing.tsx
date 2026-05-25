'use client'

import { Globe, TrendingUp, Users, Award } from 'lucide-react'

export function FreelancingSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-green-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-primary mb-4 text-center">Freelancing & Online Work Mastery</h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg text-center mb-16">
          Learn to build a successful freelance career and earn globally
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg border-l-4 border-primary hover:shadow-lg transition-all">
            <Globe className="w-8 h-8 text-primary mb-3" />
            <h3 className="font-bold text-gray-900 mb-2">Global Platforms</h3>
            <p className="text-sm text-gray-600">Upwork, Fiverr, Freelancer mastery</p>
          </div>
          <div className="bg-white p-6 rounded-lg border-l-4 border-secondary hover:shadow-lg transition-all">
            <TrendingUp className="w-8 h-8 text-secondary mb-3" />
            <h3 className="font-bold text-gray-900 mb-2">Business Building</h3>
            <p className="text-sm text-gray-600">Portfolio and client management</p>
          </div>
          <div className="bg-white p-6 rounded-lg border-l-4 border-amber-500 hover:shadow-lg transition-all">
            <Users className="w-8 h-8 text-amber-500 mb-3" />
            <h3 className="font-bold text-gray-900 mb-2">Networking</h3>
            <p className="text-sm text-gray-600">Build professional relationships</p>
          </div>
          <div className="bg-white p-6 rounded-lg border-l-4 border-green-500 hover:shadow-lg transition-all">
            <Award className="w-8 h-8 text-green-500 mb-3" />
            <h3 className="font-bold text-gray-900 mb-2">Success Stories</h3>
            <p className="text-sm text-gray-600">Learn from top performers</p>
          </div>
        </div>
      </div>
    </section>
  )
}
