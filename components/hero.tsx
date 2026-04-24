"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Play, Star, CheckCircle2 } from "lucide-react"

const stats = [
  { value: "40+", label: "Team Members" },
  { value: "700+", label: "Client Reviews" },
  { value: "3500+", label: "Trusted Clients" },
]

const features = [
  "Real-time profit tracking",
  "Wrong commission detection",
  "Platform-specific expertise",
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

const floatingVariants = {
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
    <section className="relative min-h-screen flex items-center pt-20 lg:pt-0 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.12, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,transparent_49%,rgba(0,0,0,0.02)_50%,transparent_51%,transparent_100%)] bg-[size:80px_80px]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            {/* Trust Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <div className="flex -space-x-1">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + i * 0.1, type: "spring", stiffness: 300 }}
                  >
                    <Star className="w-4 h-4 text-accent fill-accent" />
                  </motion.div>
                ))}
              </div>
              <span className="text-sm font-medium text-foreground">
                4.8 — Trusted by 100+ Online Businesses
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display leading-tight text-balance mb-6">
              Know Where Your{" "}
              <span className="text-primary">E-Commerce</span> Money Goes
              <span className="text-accent">.</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 text-pretty">
              Stop losing profits to hidden fees and wrong commissions. Get expert financial
              analysis and grow your Meesho, Flipkart, and Amazon business with confidence.
            </motion.p>

            {/* Feature List */}
            <motion.ul variants={itemVariants} className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-8">
              {features.map((feature, index) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2 + index * 0.15, duration: 0.4 }}
                  className="flex items-center gap-2 text-sm text-foreground"
                >
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  {feature}
                </motion.li>
              ))}
            </motion.ul>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="rounded-full px-8 group">
                <Link href="https://forms.gle/XHrALZDXNSWV5eyt9" target="_blank">
                  Book Free Demo
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="rounded-full px-8 group">
                <Play className="mr-2 w-4 h-4" />
                Watch How It Works
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content - Stats Card */}
          <motion.div
            initial={{ opacity: 0, x: 60, rotateY: 5 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <motion.div
              variants={floatingVariants}
              animate="animate"
              className="relative bg-card rounded-3xl p-8 lg:p-12 shadow-2xl shadow-primary/10 border border-border"
            >
              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0, rotate: -12 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
                className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
              >
                Starting ₹249/mo
              </motion.div>

              {/* Main Stats */}
              <div className="space-y-8">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">
                    Your Business, Our Expertise
                  </p>
                  <h2 className="text-2xl lg:text-3xl font-bold font-display text-foreground">
                    બિઝનેસ તમારો, હિસાબ અમારો
                  </h2>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-4">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1 + index * 0.15, type: "spring" }}
                      className="text-center p-4 bg-secondary/50 rounded-2xl"
                    >
                      <div className="text-2xl lg:text-3xl font-bold font-display text-primary">
                        {stat.value}
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>

                {/* Platform Logos */}
                <div className="pt-6 border-t border-border">
                  <p className="text-xs text-muted-foreground text-center mb-4">
                    Supporting all major platforms
                  </p>
                  <div className="flex justify-center gap-6 flex-wrap">
                    {["Meesho", "Flipkart", "Amazon", "Myntra", "JioMart"].map((platform, index) => (
                      <motion.span
                        key={platform}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.4 + index * 0.1 }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="px-3 py-1.5 bg-secondary rounded-lg text-xs font-medium text-muted-foreground cursor-default"
                      >
                        {platform}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Decorative Elements */}
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -z-10 -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-3xl blur-2xl"
            />
            <motion.div
              animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.25, 0.2] }}
              transition={{ duration: 6, repeat: Infinity, delay: 1 }}
              className="absolute -z-10 -top-6 -right-6 w-24 h-24 bg-accent/20 rounded-3xl blur-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
