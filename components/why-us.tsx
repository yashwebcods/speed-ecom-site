"use client"

import { useRef, useState } from "react"
import { motion, Variants, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Users,
  Headphones,
  BarChart2,
  ArrowRight,
  Shield,
  Target,
  LineChart,
  Sparkles,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

const reasons = [
  {
    icon: Users,
    title: "Dedicated Relationship Manager",
    description:
      "Your personal growth strategist who deeply understands your brand, streamlines communications, and ensures your goals are met with dedicated support.",
  },
  {
    icon: Headphones,
    title: "E-commerce Business Expert",
    description:
      "Professional account management by industry veterans who optimize your listings, marketing, and operations across all major marketplaces.",
  },
  {
    icon: BarChart2,
    title: "Monthly Financial Analysis",
    description:
      "Gain absolute clarity with comprehensive monthly audits covering profit margins, ad efficiency, and precise business health metrics.",
  },
]

const advantages = [
  {
    icon: Sparkles,
    title: "Smart & Strategic Insights",
    description: "Stay ahead with data-backed pricing models, deep competitor benchmarking, and predictive sales forecasting.",
  },
  {
    icon: Target,
    title: "Platform-Specific Expertise",
    description: "Native optimization for Meesho, Flipkart, Amazon, and Myntra—leveraging platform-specific algorithms to win.",
  },
  {
    icon: Shield,
    title: "Transparent Financial Tracking",
    description: "Eliminate revenue leakage with automated settlement audits, commission dispute management, and hidden fee detection.",
  },
  {
    icon: LineChart,
    title: "Proven Profit Techniques",
    description: "Scale faster with high-conversion weekend strategies, ROI-focused discount models, and automated return claim tracking.",
  },
]

const reasonCardVariants: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as any,
    },
  }),
}

export function WhyUs() {
  const sectionRef = useRef<HTMLElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section id="why-us" className="py-16 lg:py-32 relative" ref={sectionRef}>
      {/* Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        {/* Main Reasons */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20 lg:mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as any }}
            className="z-20"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4"
            >
              Why Choose Us
            </motion.span>
            <h2 className="text-2xl min-[400px]:text-3xl lg:text-5xl font-bold font-display mb-4 sm:text-balance leading-tight lg:leading-[1.2] max-w-[calc(100vw-2rem)] sm:max-w-none">
              More Than a Service —{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">A Success Partner!</span>
            </h2>
            <p className="text-base lg:text-lg text-muted-foreground mb-8 sm:text-pretty max-w-xl">
              With a mission to help online sellers maximize profits and scale smartly,
              Speed Ecom Solution brings together strategy, technology, and support under one roof.
            </p>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button asChild size="lg" className="rounded-full group h-12 w-fit px-8 text-base">
                <Link href="https://forms.gle/XHrALZDXNSWV5eyt9" target="_blank">
                  Get Started Today
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          <div className="relative mt-8 lg:mt-0">
            {/* Mobile: Interactive Carousel with Framer Motion */}
            <div className="md:hidden relative px-4">
              <div className="overflow-hidden py-4 -mx-4 px-4">
                <motion.div
                  drag="x"
                  dragConstraints={{ right: 0, left: -((reasons.length - 1) * 300) }}
                  onDragEnd={(_, info) => {
                    if (info.offset.x < -50 && activeIndex < reasons.length - 1) {
                      setActiveIndex(activeIndex + 1)
                    } else if (info.offset.x > 50 && activeIndex > 0) {
                      setActiveIndex(activeIndex - 1)
                    }
                  }}
                  animate={{ x: -(activeIndex * 300) }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="flex gap-5 cursor-grab active:cursor-grabbing"
                >
                  {reasons.map((reason, index) => (
                    <motion.div
                      key={reason.title}
                      className="w-[300px] shrink-0"
                    >
                      <div className={`h-full p-6 rounded-3xl border border-primary/10 transition-all duration-500 ${activeIndex === index ? 'scale-100 opacity-100' : 'scale-90 opacity-40'}`}>
                        <div className="relative mb-6">
                          <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary relative z-10">
                            <reason.icon className="w-7 h-7" />
                          </div>
                          <div className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-primary text-primary-foreground text-[10px] font-bold flex items-center justify-center border-2 border-background">
                            {index + 1}
                          </div>
                          <div className="absolute top-0 right-0 text-5xl font-bold text-primary/5 select-none leading-none">
                            0{index + 1}
                          </div>
                        </div>

                        <h4 className="font-bold text-foreground text-lg mb-3 leading-tight">
                          {reason.title}
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                          {reason.description}
                        </p>

                        <div className="mt-auto flex items-center gap-2 text-primary font-bold text-sm">
                          <span>Learn more</span>
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Pagination Dots */}
              <div className="flex justify-center gap-2 mt-8">
                {reasons.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${activeIndex === i ? 'w-8 bg-primary' : 'w-2 bg-primary/20'}`}
                  />
                ))}
              </div>
            </div>

            {/* Desktop: Clean Original List */}
            <div className="hidden md:flex flex-col gap-6">
              {reasons.map((reason, index) => (
                <motion.div
                  key={reason.title}
                  custom={index}
                  variants={reasonCardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  whileHover={{ x: 8, transition: { duration: 0.2 } }}
                  className="flex gap-4 p-6 bg-card rounded-2xl border border-border hover:border-primary/20 hover:shadow-lg transition-all cursor-default"
                >
                  <div className="shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                      <reason.icon className="w-6 h-6" />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold text-primary">0{index + 1}</span>
                      <h4 className="font-bold text-foreground text-lg">{reason.title}</h4>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{reason.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Advantages Grid */}
        <div className="mt-20 lg:mt-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as any }}
            className="text-center mb-16"
          >
            <h3 className="text-2xl lg:text-4xl font-bold font-display mb-4">
              Advantages of <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">Choosing Us</span>
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto text-base lg:text-lg">
              Helping online sellers maximize profit, minimize losses, and grow strategically
              on platforms like Meesho, Flipkart, and Amazon.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {advantages.map((advantage, index) => (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] as any }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group text-center p-6 lg:p-10 bg-card rounded-[2rem] border border-border hover:border-primary/20 hover:shadow-2xl transition-all transform-gpu will-change-transform"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="inline-flex items-center justify-center w-12 lg:w-16 h-12 lg:h-16 rounded-2xl bg-primary/10 text-primary mb-4 lg:mb-6"
                >
                  <advantage.icon className="w-6 lg:w-8 h-6 lg:h-8" />
                </motion.div>
                <h4 className="font-bold font-display text-foreground mb-2 group-hover:text-primary transition-colors text-sm sm:text-lg lg:text-xl">
                  {advantage.title}
                </h4>
                <p className="text-xs sm:text-sm lg:text-base text-muted-foreground leading-relaxed">{advantage.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}