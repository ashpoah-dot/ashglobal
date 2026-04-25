import { Metadata } from "next"
import { ContactHero } from "@/components/contact/contact-hero"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactInfo } from "@/components/contact/contact-info"
import { MapSection } from "@/components/contact/map-section"

export const metadata: Metadata = {
  title: "Contact Us | ASH Global Initiatives",
  description: "Get in touch with ASH Global Initiatives. Visit us in Murang'a County, Kenya or reach out via phone, email, or social media.",
}

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactForm />
      <ContactInfo />
      <MapSection />
    </>
  )
}
