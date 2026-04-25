import { Metadata } from "next"
import { MediaHero } from "@/components/media/media-hero"
import { PodcastSection } from "@/components/media/podcast-section"
import { VideoSection } from "@/components/media/video-section"
import { GuestSection } from "@/components/media/guest-section"

export const metadata: Metadata = {
  title: "Media & Podcasts | ASH Global Initiatives",
  description: "Watch our videos, listen to podcasts, and engage with content about community development, youth empowerment, and success stories.",
}

export default function MediaPage() {
  return (
    <>
      <MediaHero />
      <PodcastSection />
      <VideoSection />
      <GuestSection />
    </>
  )
}
