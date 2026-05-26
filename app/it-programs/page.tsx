import { ItProgramsHero } from '@/components/it-programs/it-hero-enhanced'
import { ComprehensiveItProgramsSection } from '@/components/it-programs/comprehensive-programs'
import { ImpactStatsSection } from '@/components/it-programs/impact-stats'
import { ItProgramsCta } from '@/components/it-programs/it-cta'

export default function ItProgramsPage() {
  return (
    <div className="min-h-screen">
      <div className="pt-20" />
      <ItProgramsHero />
      <ComprehensiveItProgramsSection />
      <ImpactStatsSection />
      <ItProgramsCta />
    </div>
  )
}
