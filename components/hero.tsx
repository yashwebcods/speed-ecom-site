"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion, Variants } from "framer-motion"
import { ArrowRight, Play, Star, CheckCircle2 } from "lucide-react"
import { AnimeText } from "@/components/anime-text"
import { HeroThreeScene } from "@/components/hero-three-scene"

const stats = [
  { value: "40+", label: "Team Members" },
  { value: "2000+", label: "Client Reviews" },
  { value: "3500+", label: "Trusted Clients" },
]

const features = [
  "Real-time profit tracking",
  "Wrong commission detection",
  "Platform-specific expertise",
]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 2.5,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as any },
  },
}

const floatingVariants: Variants = {
  animate: {
    y: [-8, 8, -8],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-8 sm:pt-28 sm:pb-10 lg:pt-0 lg:pb-0 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 py-8 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left w-full min-w-0"
          >
            {/* Mobile Only: Trusted badge */}
            <div className="lg:hidden mb-4">
              <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 rounded-full border border-accent/20">
                <Star className="w-3 h-3 text-accent fill-accent" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-accent-foreground">Trusted by 700+ Sellers</span>
              </motion.div>
            </div>

            {/* Desktop Only Badge (Hidden on mobile as we replaced it above) */}
            <motion.div variants={itemVariants} className="hidden lg:inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <div className="flex -space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-accent fill-accent" />
                ))}
              </div>
              <span className="text-sm font-medium text-foreground">
                4.8 — Trusted by 100+ Online Businesses
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1 variants={itemVariants} className="text-2xl sm:text-4xl lg:text-6xl font-bold font-display leading-[1.1] mb-4 flex flex-wrap justify-center lg:justify-start gap-x-2">
              <span className="text-slate-900 dark:text-white">Know Where Your</span>
              <span className="text-primary">E-Commerce</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">Money Goes</span>
              <span className="text-accent">.</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-sm sm:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-6 text-pretty">
              Stop losing profits to hidden fees. Get expert financial analysis and grow your
              business on Meesho, Flipkart, and Amazon with absolute confidence.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-row gap-3 justify-center lg:justify-start mb-10 lg:mb-8">
              <Button asChild size="lg" className="rounded-full px-4 sm:px-8 group h-12 lg:h-12 flex-1 sm:flex-none shadow-xl shadow-primary/20 text-xs sm:text-sm">
                <Link href="https://forms.gle/XHrALZDXNSWV5eyt9" target="_blank">
                  Free Demo
                  <ArrowRight className="ml-1 sm:ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="rounded-full px-4 sm:px-8 h-12 lg:h-12 flex-1 sm:flex-none bg-white/50 backdrop-blur-sm text-xs sm:text-sm">
                <Play className="mr-1 sm:mr-2 w-3 h-3 sm:w-4 sm:h-4" />
                Watch Demo
              </Button>
            </motion.div>

            {/* Platform Strip - Improved for Mobile */}
            <motion.div variants={itemVariants} className="pt-6 border-t border-border/50 lg:border-none">
              <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-4 lg:hidden">Supported Platforms</p>
              <div className="flex flex-row justify-between lg:justify-start gap-2 sm:gap-6 items-center overflow-x-auto hide-scrollbar">
                <div className="bg-white rounded-lg p-1 shadow-sm border border-border/50 flex items-center justify-center h-8 w-14 sm:h-12 sm:w-28 transition-transform hover:scale-105 shrink-0">
                  <img src="/meesho.jpg" alt="Meesho" className="max-h-full max-w-full object-contain mix-blend-multiply" />
                </div>
                <div className="bg-white rounded-lg p-1 shadow-sm border border-border/50 flex items-center justify-center h-8 w-14 sm:h-12 sm:w-28 transition-transform hover:scale-105 shrink-0">
                  <img src="/flipkart.jpg" alt="Flipkart" className="max-h-full max-w-full object-contain mix-blend-multiply" />
                </div>
                <div className="bg-white rounded-lg p-1 shadow-sm border border-border/50 flex items-center justify-center h-8 w-14 sm:h-12 sm:w-28 transition-transform hover:scale-105 shrink-0">
                  <img src="/amazon.png" alt="Amazon" className="max-h-full max-w-full object-contain mix-blend-multiply" />
                </div>
                <div className="bg-white rounded-lg p-1 shadow-sm border border-border/50 flex items-center justify-center h-8 w-14 sm:h-12 sm:w-28 transition-transform hover:scale-105 shrink-0">
                  <img src="/myntra.png" alt="Myntra" className="max-h-full max-w-full object-contain mix-blend-multiply" />
                </div>
                <div className="bg-white rounded-lg p-1 shadow-sm border border-border/50 flex items-center justify-center h-8 w-14 sm:h-12 sm:w-28 transition-transform hover:scale-105 shrink-0">
                  <img src="/jioMart.jpg" alt="JioMart" className="max-h-full max-w-full object-contain mix-blend-multiply" />
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content – 3D Orbital Scene (visible on all screens) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 2.7, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex relative w-full h-full min-h-[520px] items-center justify-center"
          >
            <HeroThreeScene />
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -z-10 -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-3xl blur-2xl" />
        <div className="absolute -z-10 -top-6 -right-6 w-24 h-24 bg-accent/20 rounded-3xl blur-2xl" />
      </div>
    </section>
  )
}
