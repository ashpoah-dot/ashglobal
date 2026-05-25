'use client'

export function MembersWelfareHero() {
  return (
    <section className="relative min-h-[500px] flex items-center justify-center bg-gradient-to-r from-secondary to-emerald-600 text-white pt-20">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-pattern" />
      </div>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Members Welfare & Support
        </h1>
        <p className="text-xl md:text-2xl text-green-100 mb-8 max-w-2xl mx-auto">
          Comprehensive support programs ensuring member wellbeing and community empowerment
        </p>
        <button className="bg-white text-secondary px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all hover:scale-105">
          Join Our Community
        </button>
      </div>
    </section>
  )
}
