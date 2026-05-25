import { ItProgramsHero } from '@/components/it-programs/it-hero'
import { DigitalLiteracySection } from '@/components/it-programs/digital-literacy'
import { WebDevelopmentSection } from '@/components/it-programs/web-development'
import { GraphicDesignSection } from '@/components/it-programs/graphic-design'
import { ComputerPackagesSection } from '@/components/it-programs/computer-packages'
import { CodingBootcampSection } from '@/components/it-programs/coding-bootcamp'
import { FreelancingSection } from '@/components/it-programs/freelancing'
import { ImpactStatsSection } from '@/components/it-programs/impact-stats'
import { ItProgramsCta } from '@/components/it-programs/it-cta'

export default function ItProgramsPage() {
  return (
    <div className="min-h-screen">
      <div className="pt-20" />
      <ItProgramsHero />
      <DigitalLiteracySection />
      <WebDevelopmentSection />
      <GraphicDesignSection />
      <ComputerPackagesSection />
      <CodingBootcampSection />
      <FreelancingSection />
      <ImpactStatsSection />
      <ItProgramsCta />
    </div>
  )
}
