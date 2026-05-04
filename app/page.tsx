"use client"

import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { TrustedBy } from "@/components/trusted-by"
import { PaymentReconciliation } from "@/components/payment-reconciliation"
import { Services } from "@/components/services"
import { WhyUs } from "@/components/why-us"
import { CTA } from "@/components/cta"
import { Testimonials } from "@/components/testimonials"
import { FAQ } from "@/components/faq"
import { Contact } from "@/components/contact"
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
        <TrustedBy />
        <PaymentReconciliation />
        <Services />
        <WhyUs />
        <CTA />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}
