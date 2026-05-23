"use client"

import { useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight } from "lucide-react"

const marketplaces = [
  {
    name: "Amazon",
    logo: "/amazon.png",
    angle: -90,
    glowColor: "rgba(255, 153, 0, 0.3)",
    borderColor: "#FF9900",
    delay: 0.1,
    blend: false,
    textOnly: false,
  },
  {
    name: "Flipkart",
    logo: "/flipkart.jpg",
    angle: -30,
    glowColor: "rgba(40, 116, 240, 0.3)",
    borderColor: "#2874F0",
    delay: 0.2,
    blend: true,
    textOnly: false,
  },
  {
    name: "Meesho",
    logo: "/meesho.jpg",
    angle: 30,
    glowColor: "rgba(173, 26, 128, 0.3)",
    borderColor: "#AD1A80",
    delay: 0.3,
    blend: true,
    textOnly: false,
  },
  {
    name: "Myntra",
    logo: "/myntra.png",
    angle: 90,
    glowColor: "rgba(241, 85, 108, 0.3)",
    borderColor: "#F1556C",
    delay: 0.4,
    blend: true,
    textOnly: false,
  },
  {
    name: "GlowRoad",
    logo: "",
    angle: 150,
    glowColor: "rgba(255, 107, 0, 0.3)",
    borderColor: "#FF6B00",
    delay: 0.5,
    blend: false,
    textOnly: true,
  },
  {
    name: "JioMart",
    logo: "/jioMart.jpg",
    angle: 210,
    glowColor: "rgba(0, 120, 212, 0.3)",
    borderColor: "#0078D4",
    delay: 0.6,
    blend: true,
    textOnly: false,
  },
]

export function CTA() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })
  const bgScale = useTransform(scrollYProgress, [0, 0.5], [0.97, 1])
  const bgOpacity = useTransform(scrollYProgress, [0, 0.3], [0.8, 1])

  return (
    <section
      className="section-spacing relative overflow-hidden bg-[var(--color-brand-deep-blue)] text-white"
      ref={sectionRef}
    >
      <div className="absolute inset-0 opacity-40">
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/6 left-1/6 w-[400px] h-[400px] bg-sky-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/6 right-1/6 w-[350px] h-[350px] bg-indigo-500/20 rounded-full blur-3xl"
        />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          style={{ scale: bgScale, opacity: bgOpacity }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left Column: Orbital Visual */}
            <div className="lg:col-span-5 flex items-center justify-center order-2 lg:order-1">
              <div className="relative w-full max-w-[260px] sm:max-w-[340px] md:max-w-[400px] lg:max-w-[440px] aspect-square flex items-center justify-center flex-shrink-0 mx-auto">

                <svg className="absolute inset-0 w-full h-full text-white/20 z-0" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.35" strokeDasharray="2 3" />
                  <circle cx="50" cy="50" r="28" fill="none" stroke="currentColor" strokeWidth="0.2" strokeDasharray="1 2" className="opacity-50" />
                </svg>

                <motion.div
                  animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.15, 0.4] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute w-[120px] h-[120px] sm:w-[160px] sm:h-[160px] lg:w-[200px] lg:h-[200px] bg-blue-400/20 rounded-full blur-xl z-0"
                />
                <motion.div
                  animate={{ scale: [1, 1.35, 1], opacity: [0.25, 0.05, 0.25] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute w-[160px] h-[160px] sm:w-[220px] sm:h-[220px] lg:w-[280px] lg:h-[280px] bg-indigo-500/10 rounded-full blur-2xl z-0"
                />

                {/* Center Logo */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative z-10 w-24 h-24 sm:w-32 sm:h-32 lg:w-36 lg:h-36 bg-white rounded-full shadow-2xl border border-slate-100 flex items-center justify-center p-3 sm:p-4"
                >
                  <img
                    src="/logo_dark.png"
                    alt="Speed E-Com Logo"
                    className="w-full h-full object-contain"
                  />
                </motion.div>

                {/* Marketplace Badges */}
                {marketplaces.map((item, index) => {
                  const angleRad = (item.angle * Math.PI) / 180
                  const x = Math.cos(angleRad) * 40
                  const y = Math.sin(angleRad) * 40

                  return (
                    <div
                      key={item.name}
                      style={{
                        left: `calc(50% + ${x}%)`,
                        top: `calc(50% + ${y}%)`,
                        transform: "translate(-50%, -50%)",
                      }}
                      className="absolute z-20"
                    >
                      <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: item.delay }}
                      >
                        <motion.div
                          animate={{
                            y: [0, -5, 0, 5, 0],
                            x: [0, 3, 0, -3, 0],
                          }}
                          transition={{
                            duration: 4.5 + (index % 3) * 0.8,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: index * 0.2,
                          }}
                          whileHover={{ scale: 1.15 }}
                          className="w-12 h-12 sm:w-16 sm:h-16 lg:w-[72px] lg:h-[72px] bg-white rounded-full shadow-lg flex items-center justify-center cursor-pointer overflow-hidden"
                          style={{
                            border: `2px solid ${item.borderColor}`,
                            boxShadow: `0 4px 14px -3px ${item.glowColor}, 0 0 8px ${item.glowColor}`,
                            padding: "6px",
                          }}
                        >
                          {item.textOnly ? (
                            <span className="text-[9px] sm:text-[10px] font-bold text-slate-700 text-center leading-tight px-1">
                              {item.name}
                            </span>
                          ) : (
                            <img
                              src={item.logo}
                              alt={item.name}
                              className="w-full h-full object-contain rounded-full"
                              style={{
                                mixBlendMode: item.blend ? "multiply" : "normal",
                              }}
                            />
                          )}
                        </motion.div>
                      </motion.div>
                    </div>
                  )
                })}

              </div>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-7 text-left order-1 lg:order-2 flex flex-col items-start justify-center">

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/20 rounded-full mb-6 backdrop-blur-sm"
              >
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-white/95">
                  Platform Auditing & Growth
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-2xl sm:text-4xl lg:text-5xl font-bold font-display text-white mb-6 leading-tight"
              >
                Struggling With Online Business Losses?{" "}
                <span className="text-[var(--color-cta-primary)] block sm:inline-block">
                  Let Us Fix It!
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="text-sm sm:text-base lg:text-lg text-white/90 mb-8 leading-relaxed max-w-xl"
              >
                We help e-commerce sellers identify revenue leaks, wrong commission fees, shipping overcharges, and settlement
                issues across marketplaces like Meesho, Amazon, Flipkart, Myntra, GlowRoad, and JioMart.
                Get professional auditing to recover your lost money today!
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
              >
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="w-full sm:w-auto">
                  <Button asChild variant="cta" size="lg" className="group w-full sm:min-w-[180px]">
                    <Link href="https://forms.gle/XHrALZDXNSWV5eyt9" target="_blank" className="flex items-center justify-center">
                      Book Free Demo
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="w-full sm:w-auto">
                  <Button
                    asChild
                    variant="cta-secondary"
                    size="lg"
                    className="border-white/30 text-white hover:bg-white/10 hover:text-white w-full sm:min-w-[180px]"
                  >
                    <Link href="/contact" className="flex items-center justify-center">
                      Contact Us
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>

            </div>

          </div>
        </motion.div>
      </div>
    </section>
  )
}