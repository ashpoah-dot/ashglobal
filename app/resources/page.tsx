import { Metadata } from "next"
import { ResourcesHero } from "@/components/resources/resources-hero"
import { MentalHealthSection } from "@/components/resources/mental-health-section"
import { YouthEngagementSection } from "@/components/resources/youth-engagement-section"
import { ResourcesCta } from "@/components/resources/resources-cta"

export const metadata: Metadata = {
  title: "Resource & Support Center | ASH Global Initiatives",
  description: "Access mental health resources, counseling programs, youth engagement initiatives, and community support services.",
}

export default function ResourcesPage() {
  return (
    <>
      <ResourcesHero />
      <MentalHealthSection />
      <YouthEngagementSection />
      <ResourcesCta />
    </>
  )
}
