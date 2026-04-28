"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
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
  AlertCircle
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const PaymentReconciliation = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const scale = useTransform(scrollYProgress, [0, 0.2], [0.95, 1])
  const opacity = useTransform(scrollYProgress, [0, 0.15], [0, 1])

  const coreFeatures = [
    {
      title: "Marketplace Integration",
      description: "Connect all your stores from Amazon, Flipkart, Myntra, Meesho, and Ajio in one place.",
      icon: <Layers className="w-6 h-6 text-blue-500" />,
      color: "bg-blue-500/10",
    },
    {
      title: "SKU-wise Profit & Loss",
      description: "Detailed reports: Sales vs Settlement, Commission breakdown, and Profit per SKU.",
      icon: <BarChart3 className="w-6 h-6 text-indigo-500" />,
      color: "bg-indigo-500/10",
    },
    {
      title: "Hidden Charges Detection",
      description: "Identify extra commissions, logistics adjustments, penalties, and returns costs.",
      icon: <Search className="w-6 h-6 text-amber-500" />,
      color: "bg-amber-500/10",
    },
    {
      title: "Advertisement Analysis",
      description: "Track ad spend, ROI analysis, and profitable product ads platform-wise.",
      icon: <TrendingUp className="w-6 h-6 text-emerald-500" />,
      color: "bg-emerald-500/10",
    },
    {
      title: "Profitability Insights",
      description: "Instantly know which products are making profit or loss and where to optimize.",
      icon: <Wallet className="w-6 h-6 text-rose-500" />,
      color: "bg-rose-500/10",
    },
    {
      title: "Personal AI Assistant",
      description: "Your built-in expert analyzes data, highlights problems, and suggests profit increases.",
      icon: <Bot className="w-6 h-6 text-violet-500" />,
      color: "bg-violet-500/10",
    },
  ]

  const steps = [
    { title: "Connect", desc: "Connect your marketplace accounts", icon: <Layers className="w-5 h-5" /> },
    { title: "Fetch", desc: "System fetches all order & payment data", icon: <Zap className="w-5 h-5" /> },
    { title: "Process", desc: "AI processes and matches transactions", icon: <Bot className="w-5 h-5" /> },
    { title: "Reports", desc: "Dashboard shows SKU-wise reports", icon: <FileSearch className="w-5 h-5" /> },
    { title: "Insights", desc: "Get insights on profit, ads & charges", icon: <TrendingUp className="w-5 h-5" /> },
  ]

  return (
    <section ref={containerRef} className="relative py-24 bg-background overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(var(--primary-rgb),0.03)_0%,transparent_70%)]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          style={{ scale, opacity }}
          className="max-w-7xl mx-auto"
        >
          {/* Hero Section of Reconciliation */}
          <div className="text-center mb-20">
            
            
            <h2 className="text-4xl md:text-6xl font-bold font-display mb-6 tracking-tight">
              AI-Powered Payment Reconciliation <br />
              <span className="text-primary">for E-commerce Sellers</span>
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
              Track, analyze, and optimize your business across Amazon, Flipkart, Myntra, Meesho, and Ajio — all in one powerful dashboard.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
              {[
                { text: "Complete SKU-wise Reports", icon: <FileSearch className="w-5 h-5" /> },
                { text: "Detect Hidden Charges", icon: <Search className="w-5 h-5" /> },
                { text: "Instant Profitability Insights", icon: <TrendingUp className="w-5 h-5" /> },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-card border border-border/50 rounded-2xl shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                    {item.icon}
                  </div>
                  <span className="font-semibold text-foreground">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* About Section */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/5 rounded-[2.5rem] -z-10 blur-2xl" />
              <div className="bg-card border border-border p-8 md:p-12 rounded-[2rem] shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-10">
                  <Bot className="w-32 h-32" />
                </div>
                <h3 className="text-3xl font-bold mb-6">About the Software</h3>
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                  Our advanced Payment Reconciliation Software is designed specifically for e-commerce sellers who operate on multiple marketplaces.
                </p>
                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                  It automatically fetches your order, payment, and settlement data, and converts it into clear, accurate, and actionable reports.
                </p>
                <div className="p-6 bg-accent/10 rounded-2xl border border-accent/20">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent flex items-center justify-center text-accent-foreground">
                      <Bot className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-accent-foreground text-lg mb-1">Personal AI Assistant</h4>
                      <p className="text-accent-foreground/80">With our built-in Personal AI Assistant, you don’t just see data — you understand it.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <h3 className="text-3xl font-bold">Why Choose Us</h3>
              <div className="grid gap-4">
                {[
                  "All marketplaces in one dashboard",
                  "Deep SKU-level analysis",
                  "AI-powered smart insights",
                  "Easy to use, no technical knowledge needed",
                  "Accurate & reliable reports"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 bg-secondary/30 rounded-2xl border border-white/50">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="font-medium text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Core Features Grid */}
          <div className="mb-32">
            <div className="text-center mb-16">
              <h3 className="text-3xl md:text-5xl font-bold mb-4">Core Features</h3>
              <p className="text-muted-foreground text-lg">Everything you need to master your e-commerce finances</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreFeatures.map((feature, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5 }}
                  className="p-8 bg-card border border-border rounded-3xl shadow-lg hover:shadow-xl transition-all group"
                >
                  <div className={`w-14 h-14 ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    {feature.icon}
                  </div>
                  <h4 className="text-xl font-bold mb-4">{feature.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* How It Works */}
          <div className="mb-32 bg-primary/5 rounded-[3rem] p-12 md:p-20">
            <div className="text-center mb-16">
              <h3 className="text-3xl md:text-5xl font-bold mb-4">How It Works</h3>
              <p className="text-muted-foreground text-lg">A simple 5-step process to financial clarity</p>
            </div>
            <div className="relative">
              <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-primary/20 -translate-y-1/2" />
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
                {steps.map((step, i) => (
                  <div key={i} className="relative z-10 flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl mb-6 shadow-lg shadow-primary/30 ring-8 ring-background">
                      {i + 1}
                    </div>
                    <div className="bg-card p-6 rounded-2xl border border-border shadow-sm w-full">
                      <div className="flex justify-center mb-4 text-primary">
                        {step.icon}
                      </div>
                      <h5 className="font-bold mb-2">{step.title}</h5>
                      <p className="text-sm text-muted-foreground">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-primary text-primary-foreground rounded-[3rem] p-12 md:p-24 relative overflow-hidden shadow-2xl shadow-primary/30">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1)_0%,transparent_50%)]" />
            <div className="relative z-10">
              <h3 className="text-3xl md:text-5xl font-bold mb-6">Stop guessing your profits. <br />Start knowing them.</h3>
              <div className="flex flex-col items-center gap-4 mb-12">
                {[
                  "Track every rupee",
                  "Analyze every SKU",
                  "Grow your business with AI"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                    <span className="text-lg font-medium opacity-90">{item}</span>
                  </div>
                ))}
              </div>
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-12 h-16 text-xl font-bold shadow-xl">
                Get Started Now
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
