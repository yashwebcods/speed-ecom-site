"use client"

import { useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Rocket } from "lucide-react"

export function CTA() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })
  const bgScale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1])
  const bgOpacity = useTransform(scrollYProgress, [0, 0.3], [0.5, 1])

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden bg-primary" ref={sectionRef}>
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl"
        />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,transparent_49%,rgba(255,255,255,0.05)_50%,transparent_51%,transparent_100%)] bg-[size:80px_80px]" />

      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          style={{ scale: bgScale, opacity: bgOpacity }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 text-white mb-6"
          >
            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <Rocket className="w-8 h-8" />
            </motion.div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl sm:text-4xl lg:text-6xl font-bold font-display text-white mb-6 text-balance"
          >
            Struggling With Online Business Losses?{" "}
            <span className="text-accent">Let Us Fix It!</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-lg lg:text-xl text-white/80 mb-10 max-w-2xl mx-auto text-pretty"
          >
            We help e-commerce sellers solve cash flow, shipment, return, and settlement
            issues across platforms like Meesho, Amazon, Flipkart, and more.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                size="lg"
                className="bg-white text-primary hover:bg-white/90 rounded-full px-8 group"
              >
                <Link href="https://forms.gle/XHrALZDXNSWV5eyt9" target="_blank">
                  Book Free Demo
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white/30 text-primary hover:bg-white/10 rounded-full px-8"
              >
                <Link href="#contact">Contact Us</Link>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
