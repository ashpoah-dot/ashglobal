import { MembersWelfareHero } from '@/components/members-welfare/welfare-hero'
import { WelfareSupportSection } from '@/components/members-welfare/welfare-support'
import { EmergencySupportSection } from '@/components/members-welfare/emergency-support'
import { SavingsSection } from '@/components/members-welfare/savings-section'
import { MentorshipSection } from '@/components/members-welfare/mentorship-section'
import { BenefitsSection } from '@/components/members-welfare/benefits-section'
import { WelfareCta } from '@/components/members-welfare/welfare-cta'

export default function MembersWelfarePage() {
  return (
    <div className="min-h-screen">
      <div className="pt-20" />
      <MembersWelfareHero />
      <WelfareSupportSection />
      <EmergencySupportSection />
      <SavingsSection />
      <MentorshipSection />
      <BenefitsSection />
      <WelfareCta />
    </div>
  )
}
