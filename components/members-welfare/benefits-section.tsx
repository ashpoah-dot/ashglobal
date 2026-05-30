'use client'

export function BenefitsSection() {
  const benefits = [
    { title: 'Health Insurance', description: 'Comprehensive medical coverage' },
    { title: 'Education Support', description: 'Scholarships and training programs' },
    { title: 'Business Support', description: 'Startup funding and mentorship' },
    { title: 'Social Events', description: 'Community building activities' },
    { title: 'Networking', description: 'Connect with professionals' },
    { title: 'Priority Services', description: 'Fast-track support access' },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-primary mb-4 text-center">Exclusive Member Benefits</h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg text-center mb-16">
          Premium advantages and privileges for our valued members
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, i) => (
            <div key={i} className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg border-2 border-blue-100 hover:border-primary hover:shadow-lg transition-all">
              <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold mb-3">✓</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
