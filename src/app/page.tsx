"use client"

import { HeroSection } from '@/components/modern/hero-section'
import { FeaturesSection } from '@/components/modern/features-section'
import { SmoothScroll } from '@/components/smooth-scroll'

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <div className="relative">
        <HeroSection />
        <FeaturesSection />
      </div>
    </>
  )
}