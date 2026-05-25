'use client'

import { AlertCircle, Zap, PhoneCall, Info } from 'lucide-react'

export function EmergencySupportSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-red-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-primary mb-4 text-center">Emergency Support Services</h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg text-center mb-16">
          24/7 support for urgent member needs and critical situations
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg border-l-4 border-red-500 shadow-lg">
            <AlertCircle className="w-10 h-10 text-red-500 mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Crisis Assistance</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Financial emergency support</li>
              <li>• Medical crisis assistance</li>
              <li>• Family emergency aid</li>
              <li>• Quick response team</li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-lg border-l-4 border-amber-500 shadow-lg">
            <PhoneCall className="w-10 h-10 text-amber-500 mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">24/7 Support Line</h3>
            <p className="text-gray-600 mb-4">Call us anytime for urgent matters</p>
            <div className="text-2xl font-bold text-primary">+254 700 000 000</div>
            <p className="text-sm text-gray-600 mt-2">Available round the clock</p>
          </div>
        </div>
      </div>
    </section>
  )
}
