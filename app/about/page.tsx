import { Metadata } from "next"
import { AboutHero } from "@/components/about/about-hero"
import { StorySection } from "@/components/about/story-section"
import { TimelineSection } from "@/components/about/timeline-section"
import { TeamSection } from "@/components/about/team-section"
import { ValuesSection } from "@/components/about/values-section"

export const metadata: Metadata = {
  title: "About Us | ASH Global Initiatives",
  description: "Learn about ASH Global Initiatives - our story, mission, and the team dedicated to building stronger people everywhere since 2018.",
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <StorySection />
      <TimelineSection />
      <TeamSection />
      <ValuesSection />
    </>
  )
}
