"use client"

import { useRef, useState, useCallback, useEffect } from "react"
import { motion, useScroll, useTransform, useMotionValueEvent, Variants } from "framer-motion"
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

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const fadeUpItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as any },
  },
}


// Core Features Data - defined outside components so both can access
const coreFeatures = [

  {
    title: "Return Reconciliation",
    description: "Ensure every returned unit is accounted for. We reconcile your returns against settlements to recover lost revenue from missing or damaged items.",
    icon: <Package className="w-6 h-6 text-indigo-500" />,
    color: "bg-indigo-500/10",
    image: "/img-6.png"
  },
  {
    title: "Return Claim Tracking",
    description: "Automate your claim lifecycle. From filing to settlement, we track every claim to ensure you receive full compensation for marketplace errors.",
    icon: <CheckCircle2 className="w-6 h-6 text-emerald-500" />,
    color: "bg-emerald-500/10",
    image: "/img-2.webp"
  },
  {
    title: "High Shipping Charges",
    description: "Identify and eliminate excessive logistics costs. We audit weight discrepancies and carrier overcharges to protect your profit margins.",
    icon: <TrendingUp className="w-6 h-6 text-amber-500" />,
    color: "bg-amber-500/10",
    image: "/img-4.webp"
  },
  {
    title: "Hidden Charges",
    description: "Expose invisible marketplace fees. Our AI audits commission errors, storage costs, and unexpected deductions that eat into your bottom line.",
    icon: <Search className="w-6 h-6 text-violet-500" />,
    color: "bg-violet-500/10",
    image: "/img-3.webp"
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
      <section className="sticky top-20 w-full flex flex-col justify-center overflow-hidden min-h-[650px]">
        {/* Sticky Heading */}
        <div className="text-center mb-8 lg:mb-12 shrink-0">
          <h3 className="text-2xl sm:text-4xl lg:text-6xl font-bold font-display mb-3 tracking-tight">
            Innovative <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">Features</span>
          </h3>
          <p className="text-sm sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Smart tools tailored to enhance the success of sellers, D2C brands, and retailers.
          </p>
        </div>

        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:grid lg:grid-cols-12 gap-6 lg:gap-12 items-center">

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
                    className="absolute inset-0 flex flex-col lg:grid lg:grid-cols-[1.4fr_1.6fr] gap-0 lg:gap-16 items-center justify-center transform-gpu will-change-transform"
                  >
                    {/* Big Image */}
                    <div className="relative aspect-square flex items-center justify-center overflow-visible h-[220px] lg:h-auto mx-auto lg:mx-0 mb-0">
                      <div className={`absolute -inset-10 lg:-inset-20 ${feature.color} blur-[60px] lg:blur-[100px] opacity-30 rounded-full`} />
                      <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className={`relative z-10 w-full flex items-center justify-center transform-gpu ${isAdImage ? 'scale-75 lg:scale-[0.85]' : (isSmallImage ? 'scale-90 lg:scale-[1.1]' : 'scale-100 lg:scale-125')}`}
                      >
                        <img
                          src={feature.image}
                          alt={feature.title}
                          className="max-w-[220px] md:max-w-md lg:max-w-full max-h-full object-contain drop-shadow-2xl mx-auto will-change-transform"
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

  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 1])

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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-left lg:text-center mb-12 sm:mb-16 mt-8 sm:mt-12 relative"
          >
            <div className="inline-flex items-center gap-2 mb-4 sm:mb-6 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-violet-500/10 to-indigo-500/10 border border-violet-500/20 text-violet-700 dark:text-violet-300 text-[10px] sm:text-sm font-bold uppercase tracking-wider shadow-sm">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-violet-500" />
              <span>Real-Time SKU Intelligence with AI</span>
            </div>

            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-bold font-display mb-4 sm:mb-6 md:mb-8 track xing-tight leading-[1.15] md:leading-[1.1] px-2 sm:px-0">
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

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 sm:flex sm:flex-wrap justify-start lg:justify-center gap-2 sm:gap-4 md:gap-6 lg:gap-8 mb-12 sm:mb-16 px-0 sm:px-4"
            >
              {[
                { label: "Live SKU-wise tracking", icon: <BarChart3 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, color: "from-blue-500/10 to-cyan-500/10 border-blue-500/30 text-blue-700 dark:text-blue-300" },
                { label: "Real-time updates", icon: <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, color: "from-amber-500/10 to-orange-500/10 border-amber-500/30 text-amber-700 dark:text-amber-300" },
                { label: "Interactive dashboards", icon: <Layers className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, color: "from-emerald-500/10 to-teal-500/10 border-emerald-500/30 text-emerald-700 dark:text-emerald-300" },
                { label: "AI instant analysis", icon: <Bot className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, color: "from-violet-500/10 to-purple-500/10 border-violet-500/30 text-violet-700 dark:text-violet-300" },
              ].map((point, i) => (
                <motion.div
                  key={i}
                  variants={fadeUpItem}
                  className={`flex items-center justify-start sm:justify-center gap-1.5 sm:gap-2 px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r ${point.color} border text-[10px] sm:text-xs md:text-sm font-bold shadow-sm whitespace-nowrap`}
                >
                  {point.icon}
                  <span className="truncate">{point.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Speedy AI Section (Main Selling Point) - Full Width */}
      <div className="relative mb-16 sm:mb-20 lg:mb-32 overflow-hidden bg-primary">
        {/* Background decorative elements matching CTA */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <motion.div
            animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl"
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,transparent_49%,rgba(255,255,255,0.05)_50%,transparent_51%,transparent_100%)] bg-[size:80px_80px] pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-10 lg:gap-16 p-8 lg:p-16 max-w-7xl mx-auto px-4 lg:px-8">
          {/* Left Side: Heading and Text */}
          <div className="lg:w-[60%] text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-xs sm:text-sm font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-[#FACC15]" /> Speedy AI Engine
            </div>
            <h3 className="text-4xl lg:text-6xl font-bold font-display leading-[1.1] text-white">
              Meet Your Personal <br className="hidden lg:block" />
              <span className="text-[#FACC15]">AI Analyst</span>
            </h3>
            <div className="space-y-4 text-base lg:text-lg text-white/90 leading-relaxed max-w-xl">
              <p>Our Speedy AI works in real-time with your live marketplace data to give you instant insights.</p>
              <p>It automatically analyzes your orders, SKUs, payments, and charges — and converts them into reports, tables, and charts.</p>
              <ul className="space-y-3 pt-2">
                {["No manual Excel work", "No confusion", "Just clear business insights"].map((text, i) => (
                  <li key={i} className="flex items-center gap-3 text-white font-bold">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Side: AI Analyst Card (Compact Size) */}
          <div className="lg:w-[40%] w-full">
            <Card className="p-5 sm:p-8 bg-white border-white shadow-2xl rounded-[2rem] relative overflow-hidden">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-indigo-100">
                    <Bot className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="text-slate-900 font-bold text-base leading-tight">Speedy AI Analyst</p>
                    <div className="flex items-center gap-1.5 mt-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <p className="text-slate-400 text-[10px] font-medium">Live processing...</p>
                    </div>
                  </div>
                </div>
                <Badge className="bg-emerald-50 text-emerald-600 border-emerald-100 text-[9px] font-bold px-2 py-0.5 uppercase tracking-wider">Active</Badge>
              </div>

              <div className="space-y-5">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <p className="text-slate-500 text-xs italic mb-3 font-medium">"Analyze today's SKU performance"</p>
                  <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-primary"
                      initial={{ width: "0%" }}
                      animate={{ width: "40%" }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <p className="text-slate-400 text-[10px] font-bold uppercase tracking-wider mb-1.5">Total Sales</p>
                    <p className="text-xl font-black text-slate-900">₹4,28,450</p>
                    <span className="text-emerald-500 text-[10px] flex items-center gap-1 mt-1 font-bold">
                      <ArrowUpRight className="w-3 h-3" /> +12.5%
                    </span>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <p className="text-slate-400 text-[10px] font-bold uppercase tracking-wider mb-1.5">Net Profit</p>
                    <p className="text-xl font-black text-slate-900">₹85,200</p>
                    <span className="text-emerald-500 text-[10px] flex items-center gap-1 mt-1 font-bold">
                      <ArrowUpRight className="w-3 h-3" /> +8.2%
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            {/* Real-Time Dashboard Section */}
            <div className="mb-16 sm:mb-20 lg:mb-32">
              <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 max-w-7xl mx-auto px-4 lg:px-0">
                {/* Left Side: Heading */}
                <div className="lg:w-[60%] text-left">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-50 text-violet-600 border border-violet-100 text-xs font-bold uppercase tracking-wider mb-6">
                    <div className="w-2 h-2 rounded-full bg-violet-500 animate-pulse" /> Live Data Processing
                  </div>
                  <h3 className="text-4xl lg:text-7xl font-bold mb-6 font-display leading-[1.1]">
                    <span className="text-slate-900 dark:text-white">Live Dashboard with </span>
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">SKU-Level Insights</span>
                  </h3>
                  <p className="text-base lg:text-xl text-slate-600 dark:text-slate-300 max-w-2xl font-medium leading-relaxed">
                    All data is updated in real-time directly from marketplaces like Amazon, Flipkart, Myntra, Meesho, and Snapdeal.
                  </p>
                </div>

                {/* Right Side: 2x2 Grid (Compact Cards) */}
                <div className="lg:w-[40%] grid grid-cols-2 gap-4 lg:gap-6">
                  {[
                    { title: "SKU-wise tables", desc: "Granular data", icon: <Layers className="w-5 h-5" />, color: "bg-blue-50 text-blue-600" },
                    { title: "Visual charts", desc: "Understand trends", icon: <BarChart3 className="w-5 h-5" />, color: "bg-violet-50 text-violet-600" },
                    { title: "Hidden Charges", desc: "Monitor deductions", icon: <TrendingUp className="w-5 h-5" />, color: "bg-emerald-50 text-emerald-600" },
                    { title: "Return Tracking", desc: "Monitor claims", icon: <Search className="w-5 h-5" />, color: "bg-amber-50 text-amber-600" },
                  ].map((item, i) => (
                    <Card key={i} className="p-6 hover:shadow-xl transition-all border-slate-100 bg-white shadow-sm rounded-3xl flex flex-col items-start gap-3">
                      <div className={`flex w-12 h-12 rounded-2xl ${item.color} items-center justify-center flex-shrink-0`}>
                        {item.icon}
                      </div>
                      <div className="text-left">
                        <h5 className="font-bold text-sm lg:text-base text-slate-900 mb-1">
                          {item.title}
                        </h5>
                        <p className="text-xs text-slate-500 font-medium leading-tight">
                          {item.desc}
                        </p>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Data Table Section */}
              <div className="mt-16 w-full max-w-7xl mx-auto px-4 sm:px-0">
                <Card className="p-6 sm:p-10 border-slate-100 shadow-2xl bg-white relative rounded-[2.5rem] overflow-hidden">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-10 gap-4">
                    <div>
                      <h4 className="font-bold text-2xl text-slate-900">Top Performing SKUs</h4>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Live Metrics</p>
                      </div>
                    </div>
                    <Button variant="outline" className="rounded-full px-6 font-bold text-xs uppercase tracking-widest hover:bg-slate-50 group">
                      View All <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>

                  <div className="overflow-x-auto pb-2 relative z-10">
                    <Table className="min-w-[450px]">
                      <TableHeader>
                        <TableRow className="border-slate-200 dark:border-slate-700">
                          <TableHead className="text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300">SKU Name</TableHead>
                          <TableHead className="text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300">Sales</TableHead>
                          <TableHead className="text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300">Charges</TableHead>
                          <TableHead className="text-right text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300">Profit</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {[
                          { sku: "SP-WIRELESS-EARBUDS", sales: "₹45,000", charges: "₹12,400", profit: "+₹8,500", color: "text-emerald-600" },
                          { sku: "SP-SMART-WATCH-01", sales: "₹82,500", charges: "₹24,150", profit: "+₹15,200", color: "text-emerald-600" },
                          { sku: "SP-PHONE-CASE-GLS", sales: "₹12,200", charges: "₹4,800", profit: "-₹1,200", color: "text-red-600" },
                          { sku: "SP-FAST-CHARGER-20W", sales: "₹28,400", charges: "₹8,200", profit: "+₹4,100", color: "text-emerald-600" },
                        ].map((row, i) => (
                          <TableRow key={i} className="border-slate-100 dark:border-slate-800">
                            <TableCell className="font-semibold text-xs sm:text-sm text-slate-900 dark:text-slate-200">{row.sku}</TableCell>
                            <TableCell className="text-xs sm:text-sm text-slate-700 dark:text-slate-400 font-medium">{row.sales}</TableCell>
                            <TableCell className="text-xs sm:text-sm text-slate-700 dark:text-slate-400 font-medium">{row.charges}</TableCell>
                            <TableCell className={`text-right font-bold text-xs sm:text-sm ${row.color}`}>{row.profit}</TableCell>
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
                </Card>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* AI Insights Section (VERY IMPORTANT) - Full Width */}
      <div className="relative mb-16 sm:mb-20 lg:mb-32 overflow-hidden bg-primary">
        {/* Background decorative elements matching CTA */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <motion.div
            animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl"
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,transparent_49%,rgba(255,255,255,0.05)_50%,transparent_51%,transparent_100%)] bg-[size:80px_80px] pointer-events-none" />

        <div className="relative z-10 grid lg:grid-cols-2 gap-8 lg:gap-20 items-center p-8 lg:p-16 max-w-7xl mx-auto px-4 lg:px-8">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 lg:grid-cols-2 gap-3 lg:gap-4">
              {[
                { title: "Identify loss-making SKUs", icon: <Package className="text-red-500" /> },
                { title: "Return Claim Tracking", icon: <Package className="text-emerald-500" /> },
                { title: "Detect hidden charges", icon: <ShieldCheck className="text-emerald-500" /> },
                { title: "High shipping charges", icon: <TrendingUp className="text-indigo-500" /> },
                { title: "Return reconciliation", icon: <Sparkles className="text-amber-500" /> },
                { title: "Analyze ad performance", icon: <TrendingUp className="text-indigo-500" /> },
                { title: "Suggest profit growth", icon: <Sparkles className="text-amber-500" /> },
              ].map((item, i) => (
                <Card key={i} className="p-4 lg:p-6 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-violet-500/30 transition-all group shadow-none">
                  <div className="mb-2 lg:mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
                  <h5 className="font-bold text-xs sm:text-sm lg:text-base leading-tight text-white">{item.title}</h5>
                </Card>
              ))}
            </div>
          </div>
          <div className="space-y-4 lg:space-y-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-xs sm:text-sm font-bold uppercase tracking-wider shadow-sm">
              💡 Intelligent Growth
            </div>
            <h3 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-white">
              Smart Insights That <br />
              <span className="text-[#facc15]">Grow Your Profit</span>
            </h3>
            <p className="text-sm sm:text-base lg:text-xl text-white/90 leading-relaxed">
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

      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            {/* Innovative Features Section - Restored */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mt-16 md:mt-24 mb-12"
            >
              <StickyCapabilitiesFeatures />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
