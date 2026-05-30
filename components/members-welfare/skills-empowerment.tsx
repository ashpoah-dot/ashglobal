import { Zap, Users, Briefcase, Rocket, Brain, Heart, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const empowermentPrograms = [
  {
    icon: Brain,
    title: 'Skills Development',
    description: 'Continuous learning programs in digital skills, business management, and professional growth.',
    action: 'Learn More',
  },
  {
    icon: Briefcase,
    title: 'Career Guidance',
    description: 'Personalized career counseling and job placement support to help you find meaningful employment.',
    action: 'Explore',
  },
  {
    icon: Rocket,
    title: 'Entrepreneurship',
    description: 'Business startup support, mentorship, and resources to launch your own venture.',
    action: 'Start',
  },
  {
    icon: Users,
    title: 'Networking',
    description: 'Connect with professionals, peers, and mentors to expand opportunities and collaboration.',
    action: 'Connect',
  },
  {
    icon: Heart,
    title: 'Social Impact',
    description: 'Participate in community projects and initiatives creating sustainable social change.',
    action: 'Participate',
  },
  {
    icon: Zap,
    title: 'Innovation Labs',
    description: 'Hands-on innovation and project-based learning tackling real-world challenges.',
    action: 'Join',
  },
]

export function SkillsAndEmpowermentSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Pathways to Growth & Transformation
          </h2>
          <p className="text-lg text-muted-foreground">
            We provide comprehensive support across multiple dimensions to ensure sustainable empowerment and life improvement.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {empowermentPrograms.map((program, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 rounded-xl border border-border dark:border-slate-700 p-8 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-primary to-blue-600 dark:from-blue-500 dark:to-blue-700 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <program.icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-xl font-bold text-foreground mb-3">
                {program.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {program.description}
              </p>
              
              <Link href="#" className="inline-flex items-center gap-2 text-primary dark:text-blue-400 font-semibold group-hover:gap-3 transition-all">
                {program.action} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>

        {/* Impact Stats */}
        <div className="grid md:grid-cols-4 gap-6 mt-16">
          {[
            { stat: '5000+', label: 'Lives Impacted' },
            { stat: '200+', label: 'Mentors Active' },
            { stat: '85%', label: 'Placement Rate' },
            { stat: '₦2.5B+', label: 'Income Generated' },
          ].map((item, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary dark:text-blue-400 mb-2">
                {item.stat}
              </div>
              <div className="text-muted-foreground font-medium">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
