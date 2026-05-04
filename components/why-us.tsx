"use client"

import { useRef } from "react"
import { motion, Variants } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Users,
  Headphones,
  BarChart2,
  ArrowRight,
} from "lucide-react"

const reasons = [
  {
    icon: Users,
    title: "Dedicated Relationship Manager",
    description:
      "Your personal point of contact who understands your brand, resolves queries, and ensures seamless coordination.",
  },
  {
    icon: Headphones,
    title: "E-commerce Business Expert",
    description:
      "An expert who manages all your platform accounts and optimizes performance across every marketplace.",
  },
  {
    icon: BarChart2,
    title: "Monthly Financial Analysis",
    description:
      "Get regular reports that clearly show your profit, loss, ad spend, and overall business performance.",
  },
]

const reasonCardVariants: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as any,
    },
  }),
}

export function WhyUs() {
  const sectionRef = useRef<HTMLElement>(null)

  return (
    <section id="why-us" className="py-12 lg:py-32 relative overflow-hidden" ref={sectionRef}>
      {/* Background */}
      <div className="absolute inset-0 -z-10">
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
            <h2 className="text-2xl lg:text-5xl font-bold font-display mb-4 text-balance">
              More Than a Service —{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">A Success Partner!</span>
            </h2>
            <p className="text-sm lg:text-lg text-muted-foreground mb-6 text-pretty">
              With a mission to help online sellers maximize profits and scale smartly,
              Speed Ecom Solution brings together strategy, technology, and support under one roof.
            </p>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button asChild size="lg" className="rounded-full group h-10 lg:h-11 w-fit sm:w-auto px-6">
                <Link href="https://forms.gle/XHrALZDXNSWV5eyt9" target="_blank">
                  Get Started Today
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          <div className="relative">
            {/* Mobile: Unique Journey Style (Line removed for cleaner mobile look) */}
            <div className="lg:hidden relative space-y-8">
              {reasons.map((reason, index) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.1 }}
                  className="relative flex gap-5 pl-2"
                >
                  <div className="relative z-10 shrink-0">
                    <div className="w-14 h-14 rounded-2xl bg-card border border-primary/20 shadow-lg shadow-primary/5 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                      <reason.icon className="w-7 h-7" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-primary-foreground text-[10px] font-bold flex items-center justify-center border-2 border-background">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-1 pt-1">
                    <h4 className="font-bold text-foreground text-lg mb-1 leading-tight">{reason.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Desktop: Clean Original List */}
            <div className="hidden lg:flex flex-col gap-6">
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
      </div>
    </section>
  )
}