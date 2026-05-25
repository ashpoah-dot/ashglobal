'use client'

import { BarChart3, Database, Settings, Lock } from 'lucide-react'

export function ComputerPackagesSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-primary mb-4 text-center">Computer Packages & Software</h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg text-center mb-16">
          Master essential software tools used in modern workplaces
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-all">
            <BarChart3 className="w-10 h-10 text-primary mb-3" />
            <h3 className="font-bold text-lg mb-2">Microsoft Office</h3>
            <p className="text-gray-600 text-sm">Word, Excel, PowerPoint mastery</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-all">
            <Database className="w-10 h-10 text-secondary mb-3" />
            <h3 className="font-bold text-lg mb-2">Database Management</h3>
            <p className="text-gray-600 text-sm">SQL and data organization</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-all">
            <Settings className="w-10 h-10 text-amber-500 mb-3" />
            <h3 className="font-bold text-lg mb-2">System Administration</h3>
            <p className="text-gray-600 text-sm">Windows and network basics</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-all">
            <Lock className="w-10 h-10 text-red-500 mb-3" />
            <h3 className="font-bold text-lg mb-2">Cybersecurity Basics</h3>
            <p className="text-gray-600 text-sm">Online safety and protection</p>
          </div>
        </div>
      </div>
    </section>
  )
}
