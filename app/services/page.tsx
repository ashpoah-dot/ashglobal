import { Metadata } from "next"
import { ServicesHero } from "@/components/services/services-hero"
import { BeautyServices } from "@/components/services/beauty-services"
import { BuildersServices } from "@/components/services/builders-services"
import { OutfittersServices } from "@/components/services/outfitters-services"
import { AgencyServices } from "@/components/services/agency-services"
import { ServicesCta } from "@/components/services/services-cta"

export const metadata: Metadata = {
  title: "Our Services | ASH Global Initiatives",
  description: "Explore our comprehensive services including beauty & cosmetology, construction, fashion, and business agency services.",
}

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <BeautyServices />
      <BuildersServices />
      <OutfittersServices />
      <AgencyServices />
      <ServicesCta />
    </>
  )
}
