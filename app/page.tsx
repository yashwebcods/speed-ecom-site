"use client"

import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { WhyUs } from "@/components/why-us"
import { Advantages } from "@/components/advantages"
import { CTA } from "@/components/cta"
import { Testimonials } from "@/components/testimonials"
import { Footer } from "@/components/footer"
import { LoadingScreen } from "@/components/loading-screen"
import { ScrollProgress } from "@/components/scroll-progress"
import { ScrollToTop } from "@/components/scroll-to-top"
import { Services } from "@/components/services"
import { TrustedBy } from "@/components/TrustedBy"
import { StatsStrip } from "@/components/Statsstrip"
import { AskAI } from "@/components/Ask"
import { WhatYouCanDecide } from "@/components/WhatYouCanDecide"
import { ComparisonSection } from "@/components/Comparison"

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <ScrollProgress />
      <Header />
      <main className="w-full overflow-x-clip">
        <Hero />
        <StatsStrip />
        <TrustedBy />
         <CTA />
        <WhatYouCanDecide/>
        
        <AskAI/>
        <Services />
        <WhyUs />
        <Advantages />
       
        <ComparisonSection/>
        <Testimonials />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}
