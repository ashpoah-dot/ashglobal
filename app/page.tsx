import { HeroCarousel } from "@/components/home/hero-carousel"
import { IntroSection } from "@/components/home/intro-section"
import { MissionSection } from "@/components/home/mission-section"
import { ProgramsSection } from "@/components/home/programs-section"
import { BeautySection } from "@/components/home/beauty-section"
import { TrainingSection } from "@/components/home/training-section"
import { FundraiserSection } from "@/components/home/fundraiser-section"
import { PartnersSection } from "@/components/home/partners-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { ContactCtaSection } from "@/components/home/contact-cta-section"

export default function HomePage() {
  return (
    <>
      <HeroCarousel />
      <IntroSection />
      <MissionSection />
      <ProgramsSection />
      <BeautySection />
      <TrainingSection />
      <FundraiserSection />
      <TestimonialsSection />
      <PartnersSection />
      <ContactCtaSection />
    </>
  )
}
