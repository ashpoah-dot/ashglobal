'use client'

import Link from 'next/link'

export function WelfareCta() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-blue-600 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Become Part of Our Caring Community</h2>
        <p className="text-xl mb-8 text-blue-100">
          Access comprehensive welfare support, build lasting connections, and grow together with us
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all hover:scale-105">
            Become a Member
          </button>
          <Link href="/contact">
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all">
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
