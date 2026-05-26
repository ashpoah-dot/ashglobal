'use client'

export function ImpactStatsSection() {
  const stats = [
    { number: '2,500+', label: 'Students Trained' },
    { number: '85%', label: 'Job Placement Rate' },
    { number: '150+', label: 'Freelancers Active' },
    { number: '50+', label: 'Companies Partnered' },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center">Our IT Programs Impact</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-5xl font-bold mb-3 text-amber-300">{stat.number}</div>
              <p className="text-xl text-blue-100">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
