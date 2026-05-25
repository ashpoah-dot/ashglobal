'use client'

export function ItProgramsHero() {
  return (
    <section className="relative min-h-[500px] flex items-center justify-center bg-gradient-to-r from-primary to-blue-700 text-white pt-20">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-pattern" />
      </div>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          IT Programs & Digital Empowerment
        </h1>
        <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Equipping youth with in-demand technology skills for the digital economy
        </p>
        <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all hover:scale-105">
          Enroll Now
        </button>
      </div>
    </section>
  )
}
