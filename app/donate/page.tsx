import { Metadata } from "next"
import { DonateHero } from "@/components/donate/donate-hero"
import { DonationOptions } from "@/components/donate/donation-options"
import { PaymentMethods } from "@/components/donate/payment-methods"
import { ImpactSection } from "@/components/donate/impact-section"

export const metadata: Metadata = {
  title: "Donate | ASH Global Initiatives",
  description: "Support our mission to empower communities. Sponsor a student, support our training center, or make a general donation.",
}

export default function DonatePage() {
  return (
    <>
      <DonateHero />
      <DonationOptions />
      <PaymentMethods />
      <ImpactSection />
    </>
  )
}
