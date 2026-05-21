"use client"

import { useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight } from "lucide-react"

// Marketplace details for the orbital animation
const marketplaces = [
  {
    name: "Amazon",
    logo: "/amazon.png",
    angle: -90, // 12 o'clock
    glowColor: "rgba(255, 153, 0, 0.3)",
    borderColor: "border-[#FF9900]/30",
    delay: 0.1,
  },
  {
    name: "Flipkart",
    logo: "/flipkart.jpg",
    angle: -18, 
    glowColor: "rgba(40, 116, 240, 0.3)",
    borderColor: "border-[#2874F0]/30",
    delay: 0.3,
  },
  {
    name: "Meesho",
    logo: "/meesho.jpg",
    angle: 54, 
    glowColor: "rgba(173, 26, 128, 0.3)",
    borderColor: "border-[#AD1A80]/30",
    delay: 0.5,
  },
  {
    name: "Myntra",
    logo: "/myntra.png",
    angle: 126, 
    glowColor: "rgba(241, 85, 108, 0.3)",
    borderColor: "border-[#F1556C]/30",
    delay: 0.7,
  },
  {
    name: "Snapdeal",
    logo: "/Snapdeal.png",
    angle: 198, 
    glowColor: "rgba(228, 0, 70, 0.3)",
    borderColor: "border-[#E40046]/30",
    delay: 0.9,
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
      className="py-16 lg:py-28 relative overflow-hidden bg-primary text-primary-foreground"
      ref={sectionRef}
    >
      {/* Background decorative glowing layers */}
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

            {/* Left Column: Interactive Orbital Marketplaces Visual */}
            <div className="lg:col-span-5 flex items-center justify-center order-2 lg:order-1">
              {/* Using aspect-square and flex-shrink-0 to maintain 1:1 perfect circle structure */}
              <div className="relative w-full max-w-[260px] sm:max-w-[340px] md:max-w-[400px] lg:max-w-[440px] aspect-square flex items-center justify-center flex-shrink-0 mx-auto">

                {/* Orbit Concentric dashed rings */}
                <svg className="absolute inset-0 w-full h-full text-white/20 z-0" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.35" strokeDasharray="2 3" />
                  <circle cx="50" cy="50" r="28" fill="none" stroke="currentColor" strokeWidth="0.2" strokeDasharray="1 2" className="opacity-50" />
                </svg>

                {/* Inner Pulsing glows for center element */}
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

                {/* Center Circle: Speed E-Com Logo */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative z-10 w-24 h-24 sm:w-32 sm:h-32 lg:w-36 lg:h-36 bg-white rounded-full shadow-2xl border border-slate-100 flex items-center justify-center p-3 sm:p-4"
                >
                  <div className="w-full h-full relative flex items-center justify-center">
                    <img
                      src="/logo_dark.png"
                      alt="Speed E-Com Logo"
                      className="w-full h-full object-contain filter drop-shadow-[0_1px_3px_rgba(0,0,0,0.08)]"
                    />
                  </div>
                </motion.div>

                {/* Marketplace Badges orbiting/positioned on the dashed line */}
                {marketplaces.map((item, index) => {
                  // Trigonometry to place them precisely on the circle perimeter of radius 40%
                  const angleRad = (item.angle * Math.PI) / 180
                  const x = Math.cos(angleRad) * 40
                  const y = Math.sin(angleRad) * 40

                  return (
                    /* Outer wrapper holds absolute positioning and translate(-50%, -50%). 
                       This keeps the badge's center mathematically locked onto the circle path. 
                       Decouples the alignment calculations from Framer Motion transforms. */
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
                        {/* Floating Motion inside the perfectly centered wrapper */}
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
                          whileHover={{
                            scale: 1.15,
                            boxShadow: `0 0 25px ${item.glowColor}`,
                          }}
                          className={`w-12 h-12 sm:w-16 sm:h-16 lg:w-[72px] lg:h-[72px] bg-white rounded-full shadow-lg border ${item.borderColor} flex items-center justify-center p-2 sm:p-3 lg:p-4 cursor-pointer transition-shadow duration-300`}
                          style={{
                            boxShadow: `0 4px 14px -3px ${item.glowColor}, 0 0 4px ${item.glowColor}`,
                          }}
                        >
                          <img
                            src={item.logo}
                            alt={item.name}
                            className="w-full h-full object-contain mix-blend-multiply rounded-full"
                          />
                        </motion.div>
                      </motion.div>
                    </div>
                  )
                })}

              </div>
            </div>

            {/* Right Column: Persuasive Copwriting Content */}
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
                <span className="text-[#facc15] block sm:inline-block drop-shadow-[0_2px_10px_rgba(250,204,21,0.25)]">
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
                issues across marketplaces like Meesho, Amazon, Flipkart, Myntra, Snapdeal, and more.
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
                  <Button
                    asChild
                    size="lg"
                    className="bg-[#facc15] text-[#0b2545] hover:bg-[#f6d738] rounded-full px-8 shadow-lg shadow-[#facc15]/20 group h-12 w-full sm:min-w-[180px] text-xs sm:text-sm font-bold transition-all duration-300"
                  >
                    <Link href="https://forms.gle/XHrALZDXNSWV5eyt9" target="_blank" className="flex items-center justify-center">
                      Book Free Demo
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="w-full sm:w-auto">
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="bg-white/10 border-white/30 text-white hover:bg-white/20 hover:border-white/50 rounded-full px-8 h-12 w-full sm:min-w-[180px] backdrop-blur-sm text-xs sm:text-sm font-semibold transition-all duration-300"
                  >
                    <Link href="tel:+919913315809" className="flex items-center justify-center">
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
