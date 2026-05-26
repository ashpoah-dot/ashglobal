'use client'

import Link from 'next/link'

export function ItProgramsCta() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Future?</h2>
        <p className="text-xl mb-8 text-green-100">
          Join thousands of youth who&apos;ve taken control of their careers through our IT programs
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all hover:scale-105">
            Enroll in a Program
          </button>
          <Link href="/contact">
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all">
              Contact Us for More Info
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
