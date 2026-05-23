"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion, Variants } from "framer-motion"
import { ArrowRight, Play, Star, CheckCircle2, TrendingUp, BarChart3, Sparkles, Eye } from "lucide-react"
import { AnimeText } from "@/components/anime-text"
import { HeroChatScene } from "@/components/hero-chat-scene"
import { TrustedBy } from "@/components/TrustedBy"
import { useState, useEffect } from "react"

const heroStats = [
  { value: "3,500+", label: "Trusted Sellers" },
  { value: "40+", label: "Team Members" },
  { value: "99.9%", label: "Audit Accuracy" },
  { value: "₹1 Cr+", label: "Monthly Audits" },
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
  const [isDesktop, setIsDesktop] = useState(true)

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024)
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-20 pb-0 lg:pt-0 lg:pb-0 overflow-hidden bg-gradient-to-br from-[#0a1f3d] via-[#0f2d4f] to-[#051c34]">
      {/* Premium Dark Navy Gradient Background */}
      <div className="absolute inset-0 -z-20">
        {/* Base dark blue gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1f3d] via-[#0f2d4f] to-[#051c34]" />

        {/* Soft purple/blue overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b2a] via-transparent to-transparent opacity-50" />

        {/* Top right cyan/blue glow */}
        <motion.div
          animate={{ rotate: [0, 360], scale: [1, 1.1, 1] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute -top-32 -right-32 w-[900px] h-[900px] bg-gradient-to-br from-[#00D9FF]/15 via-[#0091D5]/10 to-transparent rounded-full blur-3xl"
        />

        {/* Left cyan glow */}
        <motion.div
          animate={{ rotate: [360, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute -top-20 -left-32 w-[700px] h-[700px] bg-gradient-to-r from-[#0091D5]/12 via-[#00D9FF]/8 to-transparent rounded-full blur-3xl"
        />

        {/* Center accent glow */}
        <motion.div
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/3 w-[600px] h-[600px] bg-gradient-to-br from-[#00D9FF]/8 via-transparent to-transparent rounded-full blur-3xl"
        />

        {/* Bottom dark gradient overlays */}
        <div className="absolute bottom-0 left-0 right-0 h-80 bg-gradient-to-t from-[#0a2f5f]/40 via-[#0d1f3f]/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-[#001a3f]/30 via-transparent to-transparent" />

        {/* Enhanced floating particles with cyan glow */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -40, 0],
              x: [0, Math.sin(i) * 40, 0],
              opacity: [0, 0.5, 0],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 10 + i * 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1.2,
            }}
            className="absolute w-1.5 h-1.5 bg-gradient-to-r from-[#00D9FF] via-[#0091D5] to-[#00D9FF] rounded-full blur-sm shadow-lg shadow-cyan-500/50"
            style={{
              top: `${15 + i * 12}%`,
              left: `${5 + i * 12}%`,
            }}
          />
        ))}

        {/* Refined grid texture for dark theme */}
        <div className="absolute inset-0 opacity-[0.05]" style={{
          backgroundImage: `linear-gradient(0deg, transparent 24%, rgba(0, 217, 255, 0.05) 25%, rgba(0, 217, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(0, 217, 255, 0.05) 75%, rgba(0, 217, 255, 0.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(0, 217, 255, 0.05) 25%, rgba(0, 217, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(0, 217, 255, 0.05) 75%, rgba(0, 217, 255, 0.05) 76%, transparent 77%, transparent)`,
          backgroundSize: "60px 60px",
        }} />

        {/* Radial glow from right with cyan */}
        <div className="absolute -right-64 top-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-20 pointer-events-none blur-3xl" style={{
          background: 'radial-gradient(circle, rgba(0, 217, 255, 0.15) 0%, transparent 70%)'
        }} />
      </div>

      {/* ── Animated Wave Band ── directly in section, z-index 1 so it renders above background ── */}
      <style>{`
        @keyframes waveScroll1 { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes waveScroll2 { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
        .wave-track-1 { animation: waveScroll1 12s linear infinite; }
        .wave-track-2 { animation: waveScroll2 16s linear infinite; }
      `}</style>

      {/* Wave 1 – bright cyan, tallest */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '200px', zIndex: 1, overflow: 'hidden', pointerEvents: 'none' }}>
        <div className="wave-track-1" style={{ display: 'flex', width: '200%', height: '100%' }}>
          {[0, 1].map(i => (
            <svg key={i} viewBox="0 0 1440 200" preserveAspectRatio="none" style={{ width: '50%', height: '100%', flexShrink: 0 }}>
              <defs>
                <linearGradient id={`wg1_${i}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#00D9FF" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="#0091D5" stopOpacity="0.1" />
                </linearGradient>
              </defs>
              <path d="M0,70 C240,140 480,0 720,70 C960,140 1200,0 1440,70 L1440,200 L0,200 Z" fill={`url(#wg1_${i})`} />
            </svg>
          ))}
        </div>
      </div>

      {/* Wave 2 – blue, shorter, opposite direction */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '140px', zIndex: 2, overflow: 'hidden', pointerEvents: 'none' }}>
        <div className="wave-track-2" style={{ display: 'flex', width: '200%', height: '100%' }}>
          {[0, 1].map(i => (
            <svg key={i} viewBox="0 0 1440 140" preserveAspectRatio="none" style={{ width: '50%', height: '100%', flexShrink: 0 }}>
              <defs>
                <linearGradient id={`wg2_${i}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#0091D5" stopOpacity="0.55" />
                  <stop offset="100%" stopColor="#003a6f" stopOpacity="0.15" />
                </linearGradient>
              </defs>
              <path d="M0,50 C360,110 720,0 1080,55 C1260,80 1350,25 1440,50 L1440,140 L0,140 Z" fill={`url(#wg2_${i})`} />
            </svg>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 flex-1 flex items-center justify-center relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">
          {/* LEFT SIDE - Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left w-full min-w-0"
          >
            <motion.p
              variants={itemVariants}
              className="text-sm font-medium text-[var(--color-cta-primary)] tracking-[0.04em] mb-4"
            >
              Bijnes tamaro, hisab amaro
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="text-[40px] sm:text-5xl lg:text-[48px] font-bold leading-[1.15] mb-6 tracking-tight text-white"
            >
              Know Where Your E-Commerce Money Goes.
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-[15px] sm:text-base text-white/80 max-w-lg mx-auto lg:mx-0 mb-8 leading-[1.7]"
            >
              Eliminate revenue leakage from hidden marketplace fees. Get precise financial auditing
              and scale your business across Meesho, Flipkart, and Amazon — with Speedi AI.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <Button asChild variant="cta" size="lg" className="group">
                <Link href="https://forms.gle/XHrALZDXNSWV5eyt9" target="_blank">
                  Book Free Demo
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="cta-secondary" size="lg">
                <Play className="mr-2 w-4 h-4 fill-current" />
                Watch Demo
              </Button>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-white/10"
            >
             
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE - Premium Analytics Dashboard with Floating Elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 2.5, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex relative w-full h-full min-h-[600px] items-center justify-center"
          >
            {/* Floating Top Left Card - Accuracy */}
            <motion.div
              animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-16 left-0 bg-white/60 backdrop-blur-2xl rounded-2xl shadow-xl shadow-blue-500/25 p-5 w-48 border border-white/70 hover:shadow-2xl hover:shadow-blue-500/30 transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#10B981] to-[#059669] flex items-center justify-center text-white shadow-lg">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xl font-bold text-[#0F172A]">99.9%</p>
                  <p className="text-xs text-[#64748B] font-medium">Audit Accuracy</p>
                </div>
              </div>
              <div className="mt-4 h-8 bg-gradient-to-r from-[#10B981]/15 to-[#059669]/10 rounded-lg flex items-end justify-between px-2 py-1 gap-1">
                {[40, 60, 45, 80, 65, 90, 75].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-gradient-to-t from-[#10B981] to-[#6EE7B7] rounded-sm shadow-sm"
                    style={{ height: `${h}%`, opacity: 0.9 }}
                  />
                ))}
              </div>
            </motion.div>

            {/* Floating Top Right Card - Monthly Audits */}
            <motion.div
              animate={{ y: [0, -20, 0], x: [0, -10, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
              className="absolute top-32 right-0 bg-white/60 backdrop-blur-2xl rounded-2xl shadow-xl shadow-purple-500/25 p-5 w-48 border border-white/70 hover:shadow-2xl hover:shadow-purple-500/30 transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1E3A8A] to-[#3B82F6] flex items-center justify-center text-white shadow-lg">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xl font-bold text-[#0F172A]">₹1 Cr+</p>
                  <p className="text-xs text-[#64748B] font-medium">Monthly Audits</p>
                </div>
              </div>
            </motion.div>

            {/* Floating Right Card - Revenue */}
            <motion.div
              animate={{ y: [0, -12, 0], x: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
              className="absolute right-8 bottom-32 bg-white/60 backdrop-blur-2xl rounded-2xl shadow-xl shadow-cyan-500/25 p-5 w-48 border border-white/70 hover:shadow-2xl hover:shadow-cyan-500/30 transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#06B6D4] to-[#0891B2] flex items-center justify-center text-white shadow-lg">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xl font-bold text-[#0F172A]">20-30%</p>
                  <p className="text-xs text-[#64748B] font-medium">Growth</p>
                </div>
              </div>
            </motion.div>

            {/* Floating Bottom Left Card - AI Detection */}
            <motion.div
              animate={{ y: [0, -18, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
              className="absolute bottom-24 left-8 bg-white/60 backdrop-blur-2xl rounded-2xl shadow-xl shadow-blue-500/25 p-5 w-52 border border-white/70 hover:shadow-2xl hover:shadow-blue-500/30 transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#F59E0B] to-[#D97706] flex items-center justify-center text-white shadow-lg">
                  <Sparkles className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold text-[#F59E0B]">AI-Powered</span>
              </div>
              <p className="text-sm font-bold text-[#0F172A]">Discrepancy Detection</p>
              <p className="text-xs text-[#64748B] mt-1 font-medium">Real-time analysis</p>
            </motion.div>

            {/* Main Premium Dashboard Card */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
              className="relative z-10 bg-white/70 backdrop-blur-3xl rounded-3xl shadow-2xl shadow-blue-500/30 border border-white/80 p-8 w-full max-w-md hover:shadow-2xl hover:shadow-blue-500/40 transition-all"
            >
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/30">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#1D4ED8] to-[#7C3AED] flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    📊
                  </div>
                  <div>
                    <p className="font-bold text-[#0F172A] text-sm">Dashboard Overview</p>
                    <p className="text-xs text-[#64748B]">This Month</p>
                  </div>
                </div>
                <div className="w-2 h-2 rounded-full bg-[#10B981]" />
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="rounded-xl p-3 border border-[#D1FAE5] bg-[#D1FAE5] shadow-sm">
                  <p className="text-xs text-[#065F46] font-bold mb-1 uppercase">Recovered</p>
                  <p className="text-lg font-bold text-[#10B981]">₹18.7L</p>
                  <p className="text-xs text-[#10B981] mt-1 font-semibold">+12.8%</p>
                </div>
                <div className="bg-gradient-to-br from-[#7C3AED]/10 to-[#C084FC]/5 rounded-xl p-3 border border-white/40 shadow-sm">
                  <p className="text-xs text-[#64748B] font-bold mb-1 uppercase">Orders</p>
                  <p className="text-lg font-bold text-[#7C3AED]">12.4K</p>
                  <p className="text-xs text-[#10B981] mt-1 font-semibold">+8.1%</p>
                </div>
                <div className="rounded-xl p-3 border border-[#FEE2E2] bg-[#FEE2E2] shadow-sm">
                  <p className="text-xs text-[#EF4444] font-bold mb-1 uppercase">Issues</p>
                  <p className="text-lg font-bold text-[#EF4444]">25.2K</p>
                  <p className="text-xs text-[#EF4444] mt-1 font-semibold">-4.5%</p>
                </div>
              </div>

              {/* Marketplaces */}
              <div className="bg-gradient-to-br from-white/40 to-white/20 rounded-xl p-4 border border-white/40 shadow-sm">
                <p className="text-xs font-bold text-[#64748B] mb-3 uppercase tracking-wide">Top Marketplaces</p>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs group">
                    <span className="text-[#0F172A] font-bold">Amazon</span>
                    <span className="text-[#10B981] font-bold">₹9.2L</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#0F172A] font-bold">Flipkart</span>
                    <span className="text-[#10B981] font-bold">₹5.2L</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#0F172A] font-bold">Meesho</span>
                    <span className="text-[#10B981] font-bold">₹3.2L</span>
                  </div>
                </div>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  )
}