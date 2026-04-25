import { Metadata } from "next"
import { TrainingHero } from "@/components/training/training-hero"
import { CoursesSection } from "@/components/training/courses-section"
import { WhyTrainSection } from "@/components/training/why-train-section"
import { EnrollmentSection } from "@/components/training/enrollment-section"

export const metadata: Metadata = {
  title: "Vocational Training | ASH Global Initiatives",
  description: "Transform your future with our affordable vocational training programs. Cosmetology, tailoring, construction, agribusiness, and ICT courses available.",
}

export default function TrainingPage() {
  return (
    <>
      <TrainingHero />
      <CoursesSection />
      <WhyTrainSection />
      <EnrollmentSection />
    </>
  )
}
