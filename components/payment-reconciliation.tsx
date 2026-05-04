"use client"

import { useRef, useState, useCallback, useEffect } from "react"
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion"
import {
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  BarChart3,
  Wallet,
  Search,
  TrendingUp,
  Bot,
  Layers,
  FileSearch,
  Globe,
  Package,
  LineChart,
  PieChart,
  Sparkles,
  ArrowUpRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

// Core Features Data - defined outside components so both can access
const coreFeatures = [
  
  {
    title: "SKU-wise Profit & Loss",
    description: "Get granular insights into profitability at the SKU level with comprehensive financial reporting.",
    icon: <BarChart3 className="w-6 h-6 text-indigo-500" />,
    color: "bg-indigo-500/10",
    image: "/img-2.webp"
  },
  {
    title: "Smart Charges Verification",
    description: "Automatically detect hidden charges, unexpected deductions, and marketplace discrepancies.",
    icon: <Search className="w-6 h-6 text-amber-500" />,
    color: "bg-amber-500/10",
    image: "/img-3.webp"
  },
  {
    title: "Advertisement Analysis",
    description: "Track ad spend, ROI analysis, and profitable product ads platform-wise.",
    icon: <TrendingUp className="w-6 h-6 text-emerald-500" />,
    color: "bg-emerald-500/10",
    image: "/img-4.webp"
  },
  {
    title: "Unified Analytics Hub",
    description: "Centralized analytics and operations hub to monitor performance and drive business growth.",
    icon: <Bot className="w-6 h-6 text-violet-500" />,
    color: "bg-violet-500/10",
    image: "/img-7.webp"
  },
]

// Sticky Capabilities Component with Left Nav, Center Image, Right Content
const StickyCapabilitiesFeatures = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const totalFeatures = coreFeatures.length

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const index = Math.min(
      totalFeatures - 1,
      Math.max(0, Math.floor(latest * totalFeatures))
    )
    if (index !== activeIndex) {
      setActiveIndex(index)
    }
  })

  const handleItemClick = (index: number) => {
    if (!containerRef.current) return
    const containerTop = containerRef.current.offsetTop
    const containerHeight = containerRef.current.offsetHeight
    const windowHeight = window.innerHeight

    const scrollableDistance = containerHeight - windowHeight
    const targetScroll = containerTop + (index / totalFeatures) * scrollableDistance

    window.scrollTo({
      top: targetScroll,
      behavior: "smooth"
    })
  }

  return (
    <div ref={containerRef} style={{ height: `${totalFeatures * 80}vh` }} className="relative w-full">
      <section className="sticky top-20 h-[500px] lg:h-[500px] w-full flex items-center overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:grid lg:grid-cols-12 gap-6 lg:gap-12 items-center h-full">

            {/* Feature Navigation List */}
            <div className="hidden lg:block lg:col-span-3 relative h-[400px] overflow-hidden -ml-4 lg:-ml-8">
              <motion.div
                animate={{ y: -(activeIndex * 80) + 160 }}
                transition={{ type: "spring", stiffness: 200, damping: 30 }}
                className="absolute inset-y-0 left-0 flex flex-col space-y-4"
              >
                {coreFeatures.map((feature, i) => {
                  const isActive = activeIndex === i

                  return (
                    <motion.div
                      key={i}
                      initial={false}
                      animate={{
                        opacity: isActive ? 1 : 0.4,
                        scale: isActive ? 1 : 0.9,
                      }}
                      transition={{ duration: 0.5 }}
                      className={`flex items-center gap-3 p-2 rounded-xl cursor-pointer transition-all duration-500 w-full ${isActive
                        ? "z-10"
                        : "hover:bg-muted/5"
                        }`}
                      onClick={() => handleItemClick(i)}
                    >
                      <div className={`flex-shrink-0 w-16 h-16 flex items-center justify-center transition-all duration-500 z-20 ${isActive ? "scale-110" : "scale-90 grayscale opacity-40"
                        }`}>
                        <img
                          src={feature.image}
                          alt={feature.title}
                          className="w-12 h-12 object-contain"
                        />
                      </div>
                      <div className={`font-bold transition-all duration-500 leading-tight ${isActive ? "text-slate-900 dark:text-white text-xl" : "text-muted-foreground/40 text-base"
                        }`}>
                        {feature.title}
                      </div>
                    </motion.div>
                  )
                })}
              </motion.div>

              {/* Gradient Overlays for smooth hide effect */}
              <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-background to-transparent pointer-events-none z-10" />
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent pointer-events-none z-10" />
            </div>

            {/* Combined Image and Content */}
            <div className="w-full lg:col-span-9 relative h-[400px] lg:h-[400px] flex items-center">
              {coreFeatures.map((feature, i) => {
                const isSmallImage = feature.image === "/img--1.webp" || feature.image === "/img-4.webp" || feature.image === "/img-6.png" || feature.image === "/img-3.webp";
                const isAdImage = feature.image === "/img-4.webp";
                
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9, x: 30 }}
                    animate={{
                      opacity: activeIndex === i ? 1 : 0,
                      scale: activeIndex === i ? 1 : 0.9,
                      x: activeIndex === i ? 0 : 30,
                      pointerEvents: activeIndex === i ? "auto" : "none",
                    }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0 flex flex-col lg:grid lg:grid-cols-[1.4fr_1.6fr] gap-0 lg:gap-16 items-center justify-center"
                  >
                    {/* Big Image */}
                    <div className="relative aspect-square flex items-center justify-center overflow-visible h-[220px] lg:h-auto mx-auto lg:mx-0 mb-0">
                      <div className={`absolute -inset-10 lg:-inset-20 ${feature.color} blur-[60px] lg:blur-[100px] opacity-30 rounded-full`} />
                      <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className={`relative z-10 w-full flex items-center justify-center ${isAdImage ? 'scale-75 lg:scale-[0.85]' : (isSmallImage ? 'scale-90 lg:scale-[1.1]' : 'scale-100 lg:scale-125')}`}
                      >
                        <img
                          src={feature.image}
                          alt={feature.title}
                          className="max-w-[220px] md:max-w-md lg:max-w-full max-h-full object-contain drop-shadow-2xl mx-auto"
                        />
                      </motion.div>
                    </div>

                    {/* Text Content */}
                    <div className="flex flex-col justify-center space-y-2 lg:space-y-6 text-center lg:text-left -mt-2">
                      <h3 className="text-xl sm:text-4xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1] dark:text-white">
                        {feature.title}
                      </h3>
                      <p className="text-[13px] sm:text-lg lg:text-2xl text-muted-foreground leading-relaxed px-4 lg:px-0">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Mobile Navigation Dots */}
            <div className="flex lg:hidden gap-2 -mt-4 justify-center relative z-20">
              {coreFeatures.map((_, i) => (
                <button
                  key={i}
                  onClick={() => handleItemClick(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${activeIndex === i ? "bg-primary w-6" : "bg-primary/20"}`}
                />
              ))}
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export const PaymentReconciliation = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const scale = useTransform(scrollYProgress, [0, 0.2], [0.95, 1])
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 1])

  const steps = [
    { title: "Connect", desc: "Connect your marketplace accounts", icon: <Layers className="w-5 h-5" /> },
    { title: "Fetch", desc: "System fetches all order & payment data", icon: <Zap className="w-5 h-5" /> },
    { title: "Process", desc: "AI processes and matches transactions", icon: <Bot className="w-5 h-5" /> },
    { title: "Reports", desc: "Dashboard shows SKU-wise reports", icon: <FileSearch className="w-5 h-5" /> },
    { title: "Insights", desc: "Get insights on profit, ads & charges", icon: <TrendingUp className="w-5 h-5" /> },
  ]

  return (
    <section ref={containerRef} className="relative bg-background overflow-clip">
      {/* Background patterns */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(circle_at_center,rgba(var(--primary-rgb),0.08)_0%,transparent_70%)] opacity-50" />
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-indigo-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          style={{ opacity }}
          className="max-w-7xl mx-auto"
        >
          {/* Hero Section of Reconciliation */}
          <div className="text-left lg:text-center mb-12 sm:mb-16 mt-8 sm:mt-12 relative">
            <div className="inline-flex items-center gap-2 mb-4 sm:mb-6 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-violet-500/10 to-indigo-500/10 border border-violet-500/20 text-violet-700 dark:text-violet-300 text-[10px] sm:text-sm font-bold uppercase tracking-wider shadow-sm">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-violet-500" />
              <span>Real-Time SKU Intelligence with AI</span>
            </div>

            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-bold font-display mb-4 sm:mb-6 md:mb-8 tracking-tight leading-[1.15] md:leading-[1.1] px-2 sm:px-0">
              <span className="text-slate-900 dark:text-white">Track every </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">order</span>
              <span className="text-slate-900 dark:text-white">, every </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">SKU</span>
              <br className="hidden md:block" />
              <span className="text-slate-900 dark:text-white"> and every </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">rupee</span>
              <span className="text-slate-900 dark:text-white"> in real-time</span>
            </h2>

            <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto mb-6 sm:mb-8 md:mb-12 leading-relaxed font-medium px-4 sm:px-6 lg:px-0">
              Powered by our advanced Speedy AI engine. Get instant clarity on your marketplace performance across Amazon, Flipkart, Myntra, and more.
            </p>

            <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-start lg:justify-center gap-2 sm:gap-4 md:gap-6 lg:gap-8 mb-12 sm:mb-16 px-0 sm:px-4">
              {[
                { label: "Live SKU-wise tracking", icon: <BarChart3 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, color: "from-blue-500/10 to-cyan-500/10 border-blue-500/30 text-blue-700 dark:text-blue-300" },
                { label: "Real-time updates", icon: <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, color: "from-amber-500/10 to-orange-500/10 border-amber-500/30 text-amber-700 dark:text-amber-300" },
                { label: "Interactive dashboards", icon: <Layers className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, color: "from-emerald-500/10 to-teal-500/10 border-emerald-500/30 text-emerald-700 dark:text-emerald-300" },
                { label: "AI instant analysis", icon: <Bot className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, color: "from-violet-500/10 to-purple-500/10 border-violet-500/30 text-violet-700 dark:text-violet-300" },
              ].map((point, i) => (
                <div key={i} className={`flex items-center justify-start sm:justify-center gap-1.5 sm:gap-2 px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r ${point.color} border text-[10px] sm:text-xs md:text-sm font-bold shadow-sm whitespace-nowrap`}>
                  {point.icon}
                  <span className="truncate">{point.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Speedy AI Section (Main Selling Point) - CTA Styled Background */}
          <section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-[#051937] py-20 sm:py-28 lg:py-36 overflow-hidden mb-16 sm:mb-20 lg:mb-32">
            {/* CTA Style Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {/* Vertical Grid Lines like in the reference image */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px)] bg-[size:8%_100%] opacity-40" />
              
              {/* Glowing gradients */}
              <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-violet-600/20 blur-[120px] rounded-full -translate-y-1/2" />
              <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-indigo-600/15 blur-[120px] rounded-full translate-y-1/2" />
            </div>

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
              <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24 items-center">
                <div className="space-y-8 sm:space-y-10 order-2 lg:order-1">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-sm">
                    <Sparkles className="w-4 h-4 text-violet-400" /> Speedy AI Engine
                  </div>
                  
                  <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-white">
                    Meet Your Personal <br />
                    <span className="text-[#facc15]">AI Analyst</span>
                  </h3>

                  <div className="space-y-6 text-lg sm:text-xl text-slate-300 leading-relaxed max-w-xl">
                    <p>
                      Our Speedy AI works in real-time with your live marketplace data to give you instant insights. It automatically analyzes your orders, SKUs, payments, and charges — and converts them into easy-to-understand reports, tables, and charts.
                    </p>
                    
                    
                  </div>
                </div>

                <div className="relative order-1 lg:order-2 w-full max-w-[500px] mx-auto lg:ml-auto lg:mr-0">
                  <div className="relative group">
                    {/* Outer Glow */}
                    <div className="absolute -inset-2 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-[2rem] blur-lg opacity-20 group-hover:opacity-30 transition duration-1000" />
                    
                    <Card className="relative p-5 sm:p-7 bg-white border border-slate-200 shadow-[0_15px_40px_rgba(0,0,0,0.15)] overflow-hidden rounded-[2.5rem]">
                      <div className="absolute top-0 right-0 w-48 h-48 bg-violet-500/5 blur-[80px] -mr-24 -mt-24 rounded-full" />
                      <div className="absolute bottom-0 left-0 w-40 h-40 bg-indigo-500/5 blur-[60px] -ml-20 -mb-20 rounded-full" />
                      
                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-6 sm:mb-8">
                          <div className="flex items-center gap-4">
                            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-700 flex items-center justify-center shadow-md shadow-violet-200 ring-2 ring-violet-50">
                              <Bot className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <p className="text-slate-900 font-bold text-base sm:text-lg tracking-tight">Speedy AI Analyst</p>
                              <p className="text-slate-500 text-[10px] sm:text-xs font-medium flex items-center gap-1.5 mt-0.5">
                                <span className="relative flex h-2 w-2">
                                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                </span>
                                Live processing...
                              </p>
                            </div>
                          </div>
                          <Badge className="bg-emerald-50 text-emerald-600 border-emerald-100 px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full">Active</Badge>
                        </div>

                        <div className="space-y-6">
                          <div className="p-5 rounded-[1.5rem] bg-slate-50 border border-slate-100 shadow-sm relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-1 h-full bg-violet-500" />
                            <p className="text-slate-700 text-sm mb-4 font-semibold leading-relaxed italic">"Analyze today's SKU performance"</p>
                            <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                              <motion.div 
                                className="h-full bg-gradient-to-r from-violet-500 via-indigo-500 to-violet-500"
                                initial={{ width: "0%" }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                              />
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-3 sm:gap-4">
                            <div className="p-4 sm:p-5 rounded-[1.5rem] bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 border-b-2 border-b-blue-500/20">
                              <p className="text-slate-500 text-[9px] sm:text-[10px] mb-2 font-bold uppercase tracking-widest">Total Sales</p>
                              <p className="text-xl sm:text-2xl font-black text-slate-900 tracking-tighter">₹4,28,450</p>
                              <div className="inline-flex items-center gap-1 mt-3 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-600 font-bold text-[10px]">
                                <ArrowUpRight className="w-3 h-3" /> +12.5%
                              </div>
                            </div>
                            <div className="p-4 sm:p-5 rounded-[1.5rem] bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 border-b-2 border-b-indigo-500/20">
                              <p className="text-slate-500 text-[9px] sm:text-[10px] mb-2 font-bold uppercase tracking-widest">Net Profit</p>
                              <p className="text-xl sm:text-2xl font-black text-slate-900 tracking-tighter">₹85,200</p>
                              <div className="inline-flex items-center gap-1 mt-3 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-600 font-bold text-[10px]">
                                <ArrowUpRight className="w-3 h-3" /> +8.2%
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Real-Time Dashboard Section */}
          <div className="mb-16 sm:mb-20 lg:mb-32">
            <div className="relative rounded-[2.5rem] lg:rounded-[4rem] p-6 sm:p-12 lg:p-20 overflow-hidden ">
              {/* Background Glows */}
              <div className="absolute top-0 left-0 w-[500px] h-[500px]  -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-500/5 dark:bg-indigo-600/10 blur-[120px] rounded-full translate-x-1/2 translate-y-1/2" />
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]" />

              <div className="relative z-10">
                <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 mb-12 sm:mb-16">
                  <div className="lg:col-span-7 max-w-2xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-600 dark:text-violet-300 text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-4">
                      <div className="flex h-2 w-2 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
                      </div>
                      Live Data Processing
                    </div>
                    <h3 className="text-3xl sm:text-5xl lg:text-7xl font-bold text-slate-900 dark:text-white tracking-tight leading-[1.1]">
                      Live Dashboard with <br />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-600 dark:from-violet-400 dark:via-indigo-400 dark:to-cyan-400">SKU-Level Insights</span>
                    </h3>
                    <p className="text-sm sm:text-lg text-slate-600 dark:text-slate-400 mt-6 leading-relaxed">
                      All data is updated in real-time directly from marketplaces like Amazon, Flipkart, Myntra, Meesho, and Ajio.
                    </p>
                  </div>
                  
                  <div className="lg:col-span-5 grid grid-cols-2 gap-2 sm:gap-3">
                    {[
                      { title: "SKU-wise tables", desc: "Granular data", icon: <Layers className="w-4 h-4" />, color: "bg-blue-500/10 text-blue-600 border-blue-200" },
                      { title: "Visual charts", desc: "Understand trends", icon: <BarChart3 className="w-4 h-4" />, color: "bg-violet-500/10 text-violet-600 border-violet-200" },
                      { title: "Profit & loss", desc: "Monitor line", icon: <TrendingUp className="w-4 h-4" />, color: "bg-emerald-500/10 text-emerald-600 border-emerald-200" },
                      { title: "Error detection", desc: "Find early", icon: <Search className="w-4 h-4" />, color: "bg-amber-500/10 text-amber-600 border-amber-200" },
                    ].map((item, i) => (
                      <motion.div 
                        key={i}
                        whileHover={{ y: -5 }}
                        className="flex flex-col gap-2 p-3 sm:p-4 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-sm hover:shadow-md transition-all w-full h-[110px]"
                      >
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center border ${item.color} shrink-0`}>
                          {item.icon}
                        </div>
                        <div className="overflow-hidden">
                          <h5 className="text-slate-900 dark:text-white font-bold text-xs sm:text-sm truncate">{item.title}</h5>
                          <p className="text-slate-500 text-[10px] sm:text-xs leading-tight truncate">{item.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                

                <div className="grid lg:grid-cols-1 gap-8 items-start">
                  <div className="w-full">
                    <Card className="relative p-6 sm:p-8 border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900/50 backdrop-blur-xl rounded-[2rem] overflow-hidden group shadow-xl">
                      <div className="absolute top-0 right-0 w-64 h-64 bg-violet-500/5 dark:bg-violet-600/10 blur-[80px] -mr-32 -mt-32 rounded-full" />
                      
                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-8">
                          <div>
                            <h4 className="font-bold text-xl text-slate-900 dark:text-white">Top Performing SKUs</h4>
                            <div className="flex items-center gap-2 mt-1">
                              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider">Live Metrics</p>
                            </div>
                          </div>
                          <Button variant="outline" size="sm" className="bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-white/10 rounded-xl h-9">
                            View All <ArrowUpRight className="ml-2 w-4 h-4" />
                          </Button>
                        </div>

                        <div className="overflow-x-auto pb-4 custom-scrollbar">
                          <Table className="min-w-[500px]">
                            <TableHeader>
                              <TableRow className="border-slate-100 dark:border-white/10 hover:bg-transparent">
                                <TableHead className="text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider text-[10px]">SKU Identifier</TableHead>
                                <TableHead className="text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider text-[10px]">Revenue</TableHead>
                                <TableHead className="text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider text-[10px]">Expense</TableHead>
                                <TableHead className="text-right text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider text-[10px]">Net P/L</TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              {[
                                { sku: "SP-WIRELESS-EARBUDS", sales: "₹45,000", charges: "₹12,400", profit: "+₹8,500", color: "text-emerald-600 dark:text-emerald-400", bg: "bg-emerald-50 dark:bg-emerald-400/10" },
                                { sku: "SP-SMART-WATCH-01", sales: "₹82,500", charges: "₹24,150", profit: "+₹15,200", color: "text-emerald-600 dark:text-emerald-400", bg: "bg-emerald-50 dark:bg-emerald-400/10" },
                                { sku: "SP-PHONE-CASE-GLS", sales: "₹12,200", charges: "₹4,800", profit: "-₹1,200", color: "text-rose-600 dark:text-rose-400", bg: "bg-rose-50 dark:bg-rose-400/10" },
                                { sku: "SP-FAST-CHARGER-20W", sales: "₹28,400", charges: "₹8,200", profit: "+₹4,100", color: "text-emerald-600 dark:text-emerald-400", bg: "bg-emerald-50 dark:bg-emerald-400/10" },
                              ].map((row, i) => (
                                <TableRow key={i} className="border-slate-50 dark:border-white/5 hover:bg-slate-50/50 dark:hover:bg-white/[0.02] transition-colors">
                                  <TableCell className="font-bold text-slate-900 dark:text-white py-4">{row.sku}</TableCell>
                                  <TableCell className="text-slate-600 dark:text-slate-300 font-medium">{row.sales}</TableCell>
                                  <TableCell className="text-slate-600 dark:text-slate-300 font-medium">{row.charges}</TableCell>
                                  <TableCell className="text-right">
                                    <span className={`px-3 py-1 rounded-full text-xs font-black ${row.color} ${row.bg}`}>
                                      {row.profit}
                                    </span>
                                  </TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </div>

                        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                          <div className="p-6 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10">
                            <div className="flex items-center justify-between mb-6">
                              <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">7-Day Sales Trend</p>
                              <p className="text-sm font-bold text-emerald-600 dark:text-emerald-400">+24.5%</p>
                            </div>
                            <div className="flex items-end gap-2 h-24">
                              {[40, 70, 45, 90, 65, 80, 55].map((h, i) => (
                                <motion.div 
                                  key={i} 
                                  initial={{ height: 0 }}
                                  animate={{ height: `${h}%` }}
                                  transition={{ duration: 1, delay: i * 0.1 }}
                                  className="flex-1 bg-gradient-to-t from-violet-600/50 to-violet-500 rounded-t-md hover:from-violet-600 hover:to-violet-400 transition-all cursor-pointer relative group/bar"
                                >
                                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white px-2 py-1 rounded text-[10px] font-bold opacity-0 group-hover/bar:opacity-100 transition-opacity">
                                    ₹{h}k
                                  </div>
                                </motion.div>
                              ))}
                            </div>
                          </div>

                          <div className="p-6 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center gap-6">
                            <div className="relative w-24 h-24 shrink-0">
                              <svg className="w-full h-full -rotate-90" viewBox="0 0 32 32">
                                <circle cx="16" cy="16" r="14" fill="transparent" stroke="rgba(0,0,0,0.05)" className="dark:stroke-white/5" strokeWidth="4" />
                                <circle cx="16" cy="16" r="14" fill="transparent" stroke="#8b5cf6" strokeWidth="4" strokeDasharray="65 100" strokeDashoffset="0" strokeLinecap="round" />
                                <circle cx="16" cy="16" r="14" fill="transparent" stroke="#10b981" strokeWidth="4" strokeDasharray="20 100" strokeDashoffset="-65" strokeLinecap="round" />
                              </svg>
                              <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <p className="text-slate-900 dark:text-white font-black text-xs leading-none">85%</p>
                                <p className="text-[8px] text-slate-500 dark:text-slate-400 font-bold mt-1 uppercase">ROI</p>
                              </div>
                            </div>
                            <div>
                              <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-3">Profitability Index</p>
                              <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                  <div className="w-2 h-2 rounded-full bg-violet-500" />
                                  <p className="text-xs text-slate-900 dark:text-white font-medium">Marketplace: 65%</p>
                                </div>
                                <div className="flex items-center gap-2">
                                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
                                  <p className="text-xs text-slate-900 dark:text-white font-medium">Net Profit: 20%</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* AI Insights Section (VERY IMPORTANT) */}
          <section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-[#051937] py-16 sm:py-20 lg:py-24 overflow-hidden mb-16 lg:mb-32">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute inset-0 opacity-30" style={{
                backgroundImage:
                  "linear-gradient(to right, #ffffff10 1px, transparent 1px), linear-gradient(to bottom, #ffffff10 1px, transparent 1px)",
                backgroundSize: "72px 72px",
              }} />
              <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-violet-600/20 blur-[120px] rounded-full -translate-y-1/2" />
              <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-indigo-600/15 blur-[120px] rounded-full translate-y-1/2" />
            </div>

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
              <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
               <div className="order-2 lg:order-1">
                 <div className="grid grid-cols-2 lg:grid-cols-2 gap-3 lg:gap-4">
                    {[
                      { title: "Identify loss-making SKUs", icon: <Package className="text-red-500" /> },
                      { title: "Detect hidden charges", icon: <ShieldCheck className="text-emerald-500" /> },
                      { title: "Analyze ad performance", icon: <TrendingUp className="text-indigo-500" /> },
                      { title: "Suggest profit growth", icon: <Sparkles className="text-amber-500" /> },
                    ].map((item, i) => (
                      <Card key={i} className="p-4 lg:p-6 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-violet-500/30 transition-all group">
                        <div className="mb-2 lg:mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
                        <h5 className="font-bold text-xs sm:text-sm lg:text-base leading-tight text-white">{item.title}</h5>
                      </Card>
                    ))}
                 </div>
               </div>
               <div className="space-y-4 lg:space-y-6 order-1 lg:order-2">
                 <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-sm">
                   💡 Intelligent Growth
                 </div>
                 <h3 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-white">
                   Smart Insights That <br />
                   <span className="text-[#facc15]">Grow Your Profit</span>
                 </h3>
                 <p className="text-sm sm:text-base lg:text-xl text-slate-300 leading-relaxed">
                   Our AI doesn't just show data — it tells you what to do next. It's like having a financial expert working 24/7 for your business.
                 </p>
                 <div className="pt-2 lg:pt-4">
                    <p className="text-lg sm:text-xl lg:text-2xl font-display font-bold italic text-white">
                      "From Raw Data to Clear Profit Insights."
                    </p>
                 </div>
               </div>
                </div>
              </div>
            </div>
          </section>

          {/* Innovative Features Section - Restored */}
          <div className="mt-16 md:mt-24 mb-12">
            <div className="text-center mb-0 md:mb-4">
              <h3 className="text-2xl sm:text-4xl lg:text-7xl font-bold font-display mb-4 tracking-tight">
                Innovative <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">Features</span>
              </h3>
              <p className="text-sm sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
                Smart tools tailored to enhance the success of sellers, D2C brands, and retailers.
              </p>
            </div>
            <StickyCapabilitiesFeatures />
          </div>

      

        </motion.div>
      </div>
    </section>
  )
}
