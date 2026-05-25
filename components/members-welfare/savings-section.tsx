'use client'

import { PiggyBank, TrendingUp, Users, Vault } from 'lucide-react'

export function SavingsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-primary mb-4 text-center">Community Savings & Empowerment</h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg text-center mb-16">
          Building financial resilience through collective saving and investment
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg hover:shadow-lg transition-all">
            <PiggyBank className="w-10 h-10 text-primary mb-3" />
            <h3 className="font-bold text-lg mb-2 text-gray-900">Group Savings</h3>
            <p className="text-sm text-gray-600">Collective savings schemes</p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg hover:shadow-lg transition-all">
            <TrendingUp className="w-10 h-10 text-secondary mb-3" />
            <h3 className="font-bold text-lg mb-2 text-gray-900">Investment Programs</h3>
            <p className="text-sm text-gray-600">Grow your wealth wisely</p>
          </div>
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-lg hover:shadow-lg transition-all">
            <Users className="w-10 h-10 text-amber-600 mb-3" />
            <h3 className="font-bold text-lg mb-2 text-gray-900">Micro-Finance</h3>
            <p className="text-sm text-gray-600">Access to small loans</p>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg hover:shadow-lg transition-all">
            <Vault className="w-10 h-10 text-purple-600 mb-3" />
            <h3 className="font-bold text-lg mb-2 text-gray-900">Financial Literacy</h3>
            <p className="text-sm text-gray-600">Money management training</p>
          </div>
        </div>
      </div>
    </section>
  )
}
