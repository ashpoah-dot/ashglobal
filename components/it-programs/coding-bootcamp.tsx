'use client'

export function CodingBootcampSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gradient-to-r from-primary to-secondary text-white rounded-lg p-12">
          <h2 className="text-4xl font-bold mb-6">Intensive Coding Bootcamp</h2>
          <p className="text-xl mb-8 text-blue-100">
            6-month accelerated program to become job-ready as a developer
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-10">
            <div>
              <div className="text-4xl font-bold mb-2">Python</div>
              <p>Backend development and automation</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">JavaScript</div>
              <p>Frontend and fullstack development</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">React</div>
              <p>Modern UI development</p>
            </div>
          </div>
          <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all">
            Start Your Coding Journey
          </button>
        </div>
      </div>
    </section>
  )
}
