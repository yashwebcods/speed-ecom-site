"use client"

import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { WhyUs } from "@/components/why-us"
import { CTA } from "@/components/cta"
import { Testimonials } from "@/components/testimonials"
import { Footer } from "@/components/footer"
import { LoadingScreen } from "@/components/loading-screen"
import { ScrollProgress } from "@/components/scroll-progress"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <ScrollProgress />
      <Header />
      <main className="w-full overflow-x-clip">
        <Hero />
        <WhyUs />
        <CTA />
        <Testimonials />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}
