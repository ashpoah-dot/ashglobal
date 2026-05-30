import { Heart, Users, Lightbulb, TrendingUp, Shield, Handshake, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const supportAreas = [
  {
    icon: Heart,
    title: 'Emergency Support',
    description: 'Immediate assistance during critical situations. Our 24/7 support line provides emergency guidance and resources when members need help most.',
  },
  {
    icon: Lightbulb,
    title: 'Skills Empowerment',
    description: 'Access to training programs that develop practical skills for career growth, entrepreneurship, and sustainable income generation.',
  },
  {
    icon: Users,
    title: 'Community Outreach',
    description: 'Organized community initiatives, social support groups, and collaborative programs that strengthen our collective impact.',
  },
  {
    icon: Handshake,
    title: 'Mentorship & Guidance',
    description: 'Connect with experienced professionals who provide personalized mentoring, career advice, and life coaching support.',
  },
  {
    icon: TrendingUp,
    title: 'Career Growth Programs',
    description: 'Structured pathways for professional development, job placement support, and entrepreneurship opportunities.',
  },
  {
    icon: Shield,
    title: 'Counseling Services',
    description: 'Professional counseling and psychological support to help members navigate personal, emotional, and professional challenges.',
  },
]

export function WelfareSupportSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-emerald-50/30 dark:to-slate-900/20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-secondary/10 dark:bg-emerald-900/30 rounded-full">
            <span className="text-secondary dark:text-emerald-300 font-semibold text-sm">Supporting Our Community</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Comprehensive Member Support & Empowerment
          </h2>
          <p className="text-lg text-muted-foreground">
            ASH Global Initiatives is committed to supporting individuals and communities through practical empowerment, mentorship, and sustainable opportunities—not financial services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {supportAreas.map((area, index) => (
            <div
              key={index}
              className="relative group bg-white dark:bg-slate-800 rounded-xl border border-border dark:border-slate-700 p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Accent top border */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary to-emerald-600 rounded-t-xl" />

              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-emerald-600 dark:from-emerald-500 dark:to-emerald-700 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <area.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3">
                {area.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-16 bg-gradient-to-r from-secondary to-emerald-600 dark:from-emerald-500 dark:to-emerald-700 rounded-2xl p-12 text-center text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Empower Your Journey
          </h3>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Join our community of supported, mentored, and empowered individuals building sustainable futures together.
          </p>
          <Link href="/contact">
            <Button className="bg-white text-secondary hover:bg-gray-100 rounded-full px-8 py-6 text-base font-semibold">
              Join Our Community
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
