"use client"

import { useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
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
      "Your personal growth strategist who deeply understands your brand, streamlines communications, and ensures your goals are met with dedicated support.",
    angle: -90, // 12 o'clock
    color: "rgba(139, 92, 246, 0.3)",
    borderColor: "border-purple-500/30",
    delay: 0.1,
  },
  {
    icon: Headphones,
    title: "E-commerce Business Expert",
    description:
      "Professional account management by industry veterans who optimize your listings, marketing, and operations across all major marketplaces.",
    angle: 30, // 4 o'clock
    color: "rgba(59, 130, 246, 0.3)",
    borderColor: "border-blue-500/30",
    delay: 0.3,
  },
  {
    icon: BarChart2,
    title: "Monthly Financial Analysis",
    description:
      "Gain absolute clarity with comprehensive monthly audits covering profit margins, ad efficiency, and precise business health metrics.",
    angle: 150, // 8 o'clock
    color: "rgba(16, 185, 129, 0.3)",
    borderColor: "border-emerald-500/30",
    delay: 0.5,
  },
]

export function WhyUs() {
  const sectionRef = useRef<HTMLElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section
      id="why-us"
      className="py-8 lg:py-12 relative overflow-hidden bg-gradient-to-br from-[#051524] via-[#0B2545] to-[#134074]"
      ref={sectionRef}
    >
      {/* Background decorative glowing layers */}
      <div className="absolute inset-0 opacity-30 -z-10 overflow-hidden">
        <motion.div
          animate={{ x: [0, -35, 0], y: [0, 45, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-1/4 w-[380px] h-[380px] bg-blue-500/20 rounded-full blur-3xl animate-pulse"
        />
        <motion.div
          animate={{ x: [0, 45, 0], y: [0, -35, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] bg-indigo-500/20 rounded-full blur-3xl animate-pulse"
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        
        {/* Main Reasons grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-8 lg:mb-12">
          
          {/* Left Column: Copywriting & Interactive Active Card */}
          <div className="lg:col-span-7 text-left flex flex-col items-start justify-center">
            
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-block px-4 py-1.5 bg-white/10 text-white border border-white/20 backdrop-blur-sm text-sm font-semibold rounded-full mb-4"
            >
              Why Choose Us
            </motion.span>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-2xl min-[400px]:text-3xl lg:text-5xl font-bold font-display mb-6 text-white leading-tight lg:leading-[1.2]"
            >
              More Than a Service —{" "}
              <span className="text-[#facc15] block sm:inline-block drop-shadow-[0_2px_10px_rgba(250,204,21,0.25)]">
                A Success Partner!
              </span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-base lg:text-lg text-white/80 mb-8 max-w-xl leading-relaxed"
            >
              With a mission to help online sellers maximize profits and scale smartly,
              Speed Ecom Solution brings together strategy, technology, and support under one roof.
              Click any of the orbiting circles on the right to explore our core offerings!
            </motion.p>

            {/* Dynamic Interactive Card with smooth transitions */}
            <div className="w-full max-w-xl mb-4 min-h-[160px] hidden lg:block">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 text-7xl font-bold text-white/5 select-none leading-none pr-4 pt-2">
                    0{activeIndex + 1}
                  </div>
                  
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-bold text-[#facc15] tracking-widest uppercase bg-[#facc15]/10 px-2 py-0.5 rounded">
                      Feature 0{activeIndex + 1}
                    </span>
                  </div>

                  <h4 className="font-bold text-white text-xl mb-3 leading-tight">
                    {reasons[activeIndex].title}
                  </h4>
                  <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                    {reasons[activeIndex].description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button asChild size="lg" className="bg-[#facc15] text-[#0b2545] hover:bg-[#f6d738] rounded-full group h-12 w-fit px-8 text-sm font-bold shadow-lg shadow-[#facc15]/15">
                <Link href="https://forms.gle/XHrALZDXNSWV5eyt9" target="_blank">
                  Get Started Today
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* Right Column: Interactive Orbital 3-Circle Visual */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center mt-12 lg:mt-0 relative">
            {/* 1:1 Aspect ratio container to prevent stretch and maintain a perfect circle */}
            <div className="relative w-full max-w-[260px] sm:max-w-[340px] md:max-w-[400px] lg:max-w-[440px] aspect-square flex items-center justify-center flex-shrink-0 mx-auto">
              
              {/* Concentric dashed rings */}
              <svg className="absolute inset-0 w-full h-full text-white/15 z-0" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="38" fill="none" stroke="currentColor" strokeWidth="0.35" strokeDasharray="2 3" />
                <circle cx="50" cy="50" r="26" fill="none" stroke="currentColor" strokeWidth="0.2" strokeDasharray="1 2" className="opacity-40" />
              </svg>

              {/* Pulsing glow circles in background */}
              <motion.div
                animate={{ scale: [1, 1.25, 1], opacity: [0.35, 0.15, 0.35] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute w-[120px] h-[120px] sm:w-[160px] sm:h-[160px] lg:w-[200px] lg:h-[200px] bg-blue-400/20 rounded-full blur-xl z-0"
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

              {/* Spaced orbiting circles (3 features) */}
              {reasons.map((item, index) => {
                const angleRad = (item.angle * Math.PI) / 180
                const x = Math.cos(angleRad) * 38
                const y = Math.sin(angleRad) * 38
                const isActive = activeIndex === index

                return (
                  /* Decoupled absolute placement wrapper to avoid Framer Motion transform overrides */
                  <div
                    key={item.title}
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
                      {/* Floating Loop Motion */}
                      <motion.div
                        animate={{
                          y: [0, -4, 0, 4, 0],
                          x: [0, 3, 0, -3, 0],
                        }}
                        transition={{
                          duration: 4.8 + index * 0.7,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.35,
                        }}
                        whileHover={{ scale: 1.12 }}
                        onClick={() => setActiveIndex(index)}
                        className={`w-14 h-14 sm:w-18 sm:h-18 lg:w-20 lg:h-20 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 relative border ${
                          isActive
                            ? "bg-white border-[#facc15] border-2 shadow-[0_0_25px_rgba(250,204,21,0.4)] text-[#0B2545] scale-105"
                            : "bg-white border-white/20 text-[#0b2545]/70 hover:text-[#0b2545] shadow-lg hover:shadow-2xl"
                        }`}
                      >
                        <item.icon className="w-6 h-6 sm:w-8 sm:h-8" />
                        
                        {/* Custom Number badge on the circle */}
                        <div className={`absolute -top-1 -right-1 text-[9px] sm:text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-md transition-colors ${
                          isActive 
                            ? "bg-[#facc15] text-[#0b2545]"
                            : "bg-[#0b2545] text-white"
                        }`}>
                          0{index + 1}
                        </div>
                      </motion.div>
                    </motion.div>
                  </div>
                )
              })}

            </div>

            {/* Mobile-only feature box below the circle */}
            <div className="w-full max-w-xl mt-8 lg:hidden mx-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 text-7xl font-bold text-white/5 select-none leading-none pr-4 pt-2">
                    0{activeIndex + 1}
                  </div>
                  
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-bold text-[#facc15] tracking-widest uppercase bg-[#facc15]/10 px-2 py-0.5 rounded">
                      Feature 0{activeIndex + 1}
                    </span>
                  </div>

                  <h4 className="font-bold text-white text-xl mb-3 leading-tight">
                    {reasons[activeIndex].title}
                  </h4>
                  <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                    {reasons[activeIndex].description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}