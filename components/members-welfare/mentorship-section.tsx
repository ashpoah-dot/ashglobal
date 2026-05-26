'use client'

import { Lightbulb, BookOpen, Target, Award } from 'lucide-react'

export function MentorshipSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-green-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-primary mb-4 text-center">Youth Mentorship & Growth</h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg text-center mb-16">
          Personalized guidance to unlock potential and achieve aspirations
        </p>
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <Lightbulb className="w-12 h-12 text-primary mx-auto mb-3" />
              <h3 className="font-bold text-lg mb-2">Career Guidance</h3>
              <p className="text-gray-600 text-sm">Navigate your professional journey</p>
            </div>
            <div className="text-center">
              <BookOpen className="w-12 h-12 text-secondary mx-auto mb-3" />
              <h3 className="font-bold text-lg mb-2">Skill Development</h3>
              <p className="text-gray-600 text-sm">Build in-demand competencies</p>
            </div>
            <div className="text-center">
              <Target className="w-12 h-12 text-amber-500 mx-auto mb-3" />
              <h3 className="font-bold text-lg mb-2">Goal Setting</h3>
              <p className="text-gray-600 text-sm">Plan and achieve ambitions</p>
            </div>
            <div className="text-center">
              <Award className="w-12 h-12 text-primary mx-auto mb-3" />
              <h3 className="font-bold text-lg mb-2">Recognition</h3>
              <p className="text-gray-600 text-sm">Celebrate achievements</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
