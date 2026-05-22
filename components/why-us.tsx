"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
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
    angle: -90,
    accentColor: "#facc15",
    glowColor: "rgba(250,204,21,0.25)",
    badgeBg: "bg-yellow-400/15",
    badgeText: "text-yellow-300",
    delay: 0.1,
  },
  {
    icon: Headphones,
    title: "E-commerce Business Expert",
    description:
      "Professional account management by industry veterans who optimize your listings, marketing, and operations across all major marketplaces.",
    angle: 30,
    accentColor: "#60a5fa",
    glowColor: "rgba(96,165,250,0.25)",
    badgeBg: "bg-blue-400/15",
    badgeText: "text-blue-300",
    delay: 0.3,
  },
  {
    icon: BarChart2,
    title: "Monthly Financial Analysis",
    description:
      "Gain absolute clarity with comprehensive monthly audits covering profit margins, ad efficiency, and precise business health metrics.",
    angle: 150,
    accentColor: "#34d399",
    glowColor: "rgba(52,211,153,0.25)",
    badgeBg: "bg-emerald-400/15",
    badgeText: "text-emerald-300",
    delay: 0.5,
  },
]

export function WhyUs() {
  const sectionRef = useRef<HTMLElement>(null)

  return (
    <section
      id="why-us"
      className="py-8 lg:py-16 relative overflow-hidden bg-gradient-to-br from-[#051524] via-[#0B2545] to-[#134074]"
      ref={sectionRef}
    >
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-30 -z-10 overflow-hidden">
        <motion.div
          animate={{ x: [0, -35, 0], y: [0, 45, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-1/4 w-[380px] h-[380px] bg-blue-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, 45, 0], y: [0, -35, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] bg-indigo-500/20 rounded-full blur-3xl"
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-2xl min-[400px]:text-3xl lg:text-5xl font-bold font-display mb-4 text-white leading-tight"
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
            className="text-base lg:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed"
          >
            With a mission to help online sellers maximize profits and scale smartly,
            Speed Ecom Solution brings together strategy, technology, and support under one roof.
          </motion.p>
        </div>

        {/* Main Content with Left Cards + Center Circle + Right Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* LEFT COLUMN - Cards */}
          <div className="lg:col-span-4 space-y-6">
            {reasons.slice(0, 2).map((item, idx) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: item.delay }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="relative group cursor-pointer"
                >
                  <div
                    className="relative p-5 rounded-2xl backdrop-blur-sm overflow-hidden transition-all duration-300"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: `1px solid ${item.accentColor}30`,
                    }}
                  >
                    <div
                      className="absolute top-0 left-0 w-1 h-full transition-all duration-300 group-hover:w-1.5"
                      style={{ background: item.accentColor }}
                    />
                    
                    <div className="flex items-start gap-4">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: `${item.accentColor}20` }}
                      >
                        <Icon className="w-5 h-5" style={{ color: item.accentColor }} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-white text-base mb-1">{item.title}</h4>
                        <p className="text-xs text-white/70 leading-relaxed line-clamp-3">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* CENTER COLUMN - Orbital Circle */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] aspect-square flex items-center justify-center mx-auto">
              
              {/* Orbital rings */}
              <svg className="absolute inset-0 w-full h-full text-white/15 z-0" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="42" fill="none" stroke="currentColor" strokeWidth="0.35" strokeDasharray="2 3" />
                <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.2" strokeDasharray="1 2" className="opacity-40" />
                <circle cx="50" cy="50" r="18" fill="none" stroke="currentColor" strokeWidth="0.15" className="opacity-20" />
              </svg>

              {/* Pulsing background glow */}
              <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.1, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute w-[140px] h-[140px] bg-blue-400/20 rounded-full blur-xl z-0"
              />

              {/* Center Logo */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative z-10 w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 bg-white rounded-full shadow-2xl border border-slate-100 flex items-center justify-center p-3"
              >
                <img
                  src="/logo_dark.png"
                  alt="Speed E-Com Logo"
                  className="w-full h-full object-contain"
                />
              </motion.div>

              {/* Orbiting Elements */}
              {reasons.map((item, index) => {
                const angleRad = (item.angle * Math.PI) / 180
                const x = Math.cos(angleRad) * 42
                const y = Math.sin(angleRad) * 42
                const Icon = item.icon

                return (
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
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: item.delay }}
                      animate={{
                        y: [0, -5, 0],
                      }}
                      
                      className="relative cursor-pointer group"
                    >
                      <div
                        className="flex items-center justify-center rounded-full transition-all duration-300"
                        style={{
                          width: "clamp(44px, 8vw, 64px)",
                          height: "clamp(44px, 8vw, 64px)",
                          background: "rgba(255,255,255,0.95)",
                          border: `2px solid ${item.accentColor}`,
                          boxShadow: `0 0 20px ${item.glowColor}`,
                        }}
                      >
                        <Icon
                          style={{ width: "clamp(18px, 3.5vw, 24px)", height: "clamp(18px, 3.5vw, 24px)" }}
                          className="text-[#0b2545]"
                          strokeWidth={2}
                        />
                        
                        {/* Number badge */}
                        <div
                          className="absolute -top-2 -right-2 text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center shadow-md"
                          style={{
                            background: item.accentColor,
                            color: "#0b2545",
                          }}
                        >
                          {index + 1}
                        </div>
                      </div>
                      
                      {/* Tooltip on hover */}
                      <div className="absolute left-1/2 -translate-x-1/2 -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                        <div className="text-xs font-medium text-white bg-black/80 backdrop-blur-sm px-2 py-1 rounded-md">
                          {item.title.split(" ").slice(0, 2).join(" ")}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* RIGHT COLUMN - Cards */}
          <div className="lg:col-span-4 space-y-6">
            {reasons.slice(2).map((item, idx) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: item.delay }}
                  whileHover={{ scale: 1.02, x: -5 }}
                  className="relative group cursor-pointer"
                >
                  <div
                    className="relative p-5 rounded-2xl backdrop-blur-sm overflow-hidden transition-all duration-300"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: `1px solid ${item.accentColor}30`,
                    }}
                  >
                    <div
                      className="absolute top-0 right-0 w-1 h-full transition-all duration-300 group-hover:w-1.5"
                      style={{ background: item.accentColor }}
                    />
                    
                    <div className="flex items-start gap-4">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: `${item.accentColor}20` }}
                      >
                        <Icon className="w-5 h-5" style={{ color: item.accentColor }} />
                      </div>
                      <div className="flex-1 text-right">
                        <h4 className="font-bold text-white text-base mb-1">{item.title}</h4>
                        <p className="text-xs text-white/70 leading-relaxed line-clamp-3">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
            {/* Empty div for spacing if needed */}
            <div className="h-16 lg:h-0"></div>
          </div>
        </div>

     
      </div>
    </section>
  )
}