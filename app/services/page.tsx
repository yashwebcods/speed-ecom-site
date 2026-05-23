"use client"

import { Header } from "@/components/header"
import { ServicesDetailed } from "@/components/services-detailed"
import { Footer } from "@/components/footer"
import { ScrollProgress } from "@/components/scroll-progress"
import { ScrollToTop } from "@/components/scroll-to-top"
import { motion } from "framer-motion"

export default function ServicesPage() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main className="w-full overflow-x-clip pt-28 lg:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <ServicesDetailed />
        </motion.div>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}
