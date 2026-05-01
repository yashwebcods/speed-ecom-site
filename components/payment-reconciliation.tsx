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
} from "lucide-react"

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
  const opacity = useTransform(scrollYProgress, [0, 0.15], [0, 1])

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
          <div className="text-center mb-12 mt-10 relative">
           

            <h2 className="text-2xl sm:text-4xl lg:text-6xl font-bold font-display mb-6 md:mb-8 tracking-tight leading-[1.2] md:leading-[1.1]">
              Scale Your Profits with <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-indigo-500 to-blue-600 px-1">AI-Powered Precision</span>
            </h2>

            <p className="text-sm sm:text-lg lg:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 md:mb-12 leading-relaxed font-medium">
              The ultimate financial command center for Amazon, Flipkart, and beyond. Track every rupee, detect leaks, and maximize ROI.
            </p>




          </div>

          {/* About Section */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16 lg:mb-24">
            <div className="relative order-2 lg:order-1">
              <div className="absolute -inset-10 bg-gradient-to-tr from-primary/10 to-indigo-500/10 rounded-[3rem] -z-10 blur-3xl opacity-60" />
              <div className="bg-card/50 backdrop-blur-xl border border-border/80 p-6 md:p-12 rounded-[2rem] md:rounded-[2.5rem] shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 md:p-8">
                  <div className="flex -space-x-2 md:-space-x-3">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-background bg-muted flex items-center justify-center overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" />
                      </div>
                    ))}
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-background bg-primary flex items-center justify-center text-[8px] md:text-[10px] font-bold text-white">
                      +2k
                    </div>
                  </div>
                </div>

                <div className="mb-6 md:mb-8">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-500 mb-4 md:mb-6">
                    <BarChart3 className="w-6 h-6 md:w-7 md:h-7" />
                  </div>
                  <h3 className="text-xl sm:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 tracking-tight">Stop Financial Leakage</h3>
                  <p className="text-muted-foreground text-sm sm:text-base lg:text-lg mb-4 md:mb-6 leading-relaxed">
                    Most e-commerce sellers lose 2-5% of their revenue to unrecorded returns, incorrect commissions, and hidden penalties.
                  </p>
                  <p className="text-muted-foreground text-sm sm:text-base lg:text-lg mb-6 md:mb-8 leading-relaxed">
                    Our AI scans every transaction across <span className="text-foreground font-semibold">Amazon, Flipkart, and Myntra</span> to ensure you get every rupee you're owed.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-5 bg-emerald-500/5 rounded-2xl border border-emerald-500/10">
                    <div className="flex items-center gap-2 text-emerald-600 font-bold mb-1">
                      <TrendingUp className="w-4 h-4" />
                      +24% ROI
                    </div>
                    <p className="text-sm text-muted-foreground">Average increase in profit margins</p>
                  </div>
                  <div className="p-5 bg-blue-500/5 rounded-2xl border border-blue-500/10">
                    <div className="flex items-center gap-2 text-blue-600 font-bold mb-1">
                      <Zap className="w-4 h-4" />
                      10x Faster
                    </div>
                    <p className="text-sm text-muted-foreground">Automated reconciliation speed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-10 order-1 lg:order-2">
              <div>
                <h3 className="text-[10px] sm:text-sm font-bold text-primary uppercase tracking-[0.2em] mb-4">Why Speed E-com?</h3>
                <h4 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-8 leading-tight">Built for Scale, <br />Designed for Clarity.</h4>
              </div>

              <div className="space-y-6">
                {[
                  { title: "Universal Integration", desc: "One-click connection to all major marketplaces.", icon: <Globe className="w-5 h-5" /> },
                  { title: "Granular Analysis", desc: "Every SKU, every transaction, every penny accounted for.", icon: <Search className="w-5 h-5" /> },
                  { title: "AI-Powered Strategy", desc: "Predictive insights to optimize your ad spend and pricing.", icon: <Bot className="w-5 h-5" /> },
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-primary/5 border border-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <h5 className="text-xl font-bold mb-2">{item.title}</h5>
                      <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Powerful Capabilities Section - Sticky Scroll with Left Nav, Center Image, Right Content */}
          <div className="mt-16 md:mt-24 mb-12">
            <div className="text-center mb-0 md:mb-4">
              <h3 className="text-2xl sm:text-4xl lg:text-7xl font-bold font-display mb-4 tracking-tight">
                Innovative Features
              </h3>
              <p className="text-sm sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
                Smart tools tailored to enhance the success of sellers, D2C brands, and retailers.
              </p>
            </div>

            <StickyCapabilitiesFeatures />
          </div>

          {/* How It Works */}
          <div className="mb-12 lg:mb-16 relative">
            <div className="absolute inset-0 bg-primary/[0.03] rounded-[2rem] md:rounded-[4rem] -rotate-1" />
            <div className="relative p-8 md:p-24 overflow-hidden">
              <div className="text-center mb-12 md:mb-24">
                <h3 className="text-2xl sm:text-4xl lg:text-6xl font-bold mb-4 md:mb-6">How It Works</h3>
                <p className="text-muted-foreground text-sm sm:text-lg lg:text-xl">From connection to clarity in minutes</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8 relative">
                {steps.map((step, i) => (
                  <div key={i} className="relative group">
                    {i < steps.length - 1 && (
                      <div className="hidden lg:block absolute top-12 left-full w-full h-[2px] bg-gradient-to-r from-primary/30 to-transparent -translate-x-4 z-0" />
                    )}
                    <div className="relative z-10 flex flex-row lg:flex-col items-center gap-6 lg:gap-0">
                      <div className="w-16 h-16 md:w-24 md:h-24 flex-shrink-0 rounded-2xl md:rounded-3xl bg-background border-2 border-primary/20 flex items-center justify-center text-primary lg:mb-8 shadow-xl group-hover:scale-110 group-hover:border-primary transition-all duration-300">
                        <div className="absolute -top-2 -right-2 md:-top-3 md:-right-3 w-6 h-6 md:w-8 md:h-8 rounded-full bg-primary text-white text-xs md:text-sm font-bold flex items-center justify-center shadow-lg">
                          0{i + 1}
                        </div>
                        {step.icon}
                      </div>
                      <div className="flex flex-col lg:items-center">
                        <h5 className="text-lg md:text-xl font-bold mb-1 md:mb-3">{step.title}</h5>
                        <p className="text-sm text-muted-foreground lg:text-center font-medium leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  )
}
