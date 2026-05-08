"use client"
import { motion, useScroll, useTransform, Variants } from "framer-motion"
import { useRef } from "react"
import {
  BarChart3,
  TrendingUp,
  CalendarDays,
  Package,
  AlertCircle,
  DollarSign,
  Warehouse,
  Lightbulb,
  Zap,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { ThreeDCardIcon } from "./three-d-icon"


const services = [
  {
    icon: BarChart3,
    title: "Advertising & ROI Understanding",
    description:
      "Maximize return on every ad spend with strategic plans, ROI tracking, and continuous optimization for measurable results.",
    color: "bg-blue-500/10 text-blue-500",
    size: "large"
  },
  {
    icon: TrendingUp,
    title: "Sales Analysis",
    description:
      "Understand sales trends through detailed analysis. Identify top SKUs, marketplaces, and replicate success.",
    color: "bg-emerald-500/10 text-emerald-500",
    size: "small"
  },
  {
    icon: CalendarDays,
    title: "Festival Strategy",
    description:
      "Boost seasonal revenue with expert discount structuring and smart promotional timing.",
    color: "bg-orange-500/10 text-orange-500",
    size: "small"
  },
  {
    icon: Package,
    title: "Shipping & Weight Reports",
    description:
      "Eliminate unnecessary costs by identifying shipping weight mismatches and charges for full transparency.",
    color: "bg-purple-500/10 text-purple-500",
    size: "medium"
  },
  {
    icon: AlertCircle,
    title: "Wrong Commission Detection",
    description:
      "We audit platform statements to detect wrong commission charges or settlement issues ensuring accurate payouts.",
    color: "bg-rose-500/10 text-rose-500",
    size: "medium"
  },
  {
    icon: DollarSign,
    title: "Profit Analysis",
    description:
      "Stay competitive while protecting margins with dynamic pricing and SKU-wise profit tracking.",
    color: "bg-cyan-500/10 text-cyan-500",
    size: "small"
  },
  {
    icon: Warehouse,
    title: "Warehouse & Settlements",
    description:
      "Gain clarity into warehouse operations with structured FBA/FBF analysis revealing inefficiencies.",
    color: "bg-amber-500/10 text-amber-500",
    size: "large"
  },
  {
    icon: Lightbulb,
    title: "Growth Insights",
    description:
      "From sales forecasts to competitor benchmarking, we deliver actionable insights for growth.",
    color: "bg-indigo-500/10 text-indigo-500",
    size: "small"
  },
  {
    icon: Zap,
    title: "Weekend Optimization",
    description:
      "Capitalize on high-traffic days with tailored weekend strategies that drive purchases.",
    color: "bg-yellow-500/10 text-yellow-500",
    size: "small"
  },
]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as any },
  },
}

function MobileServiceCard({ service, index }: {
  service: typeof services[0],
  index: number,
}) {
  let bgClass = "bg-card";
  let titleClass = "text-foreground group-hover:text-primary";
  let descClass = "text-muted-foreground";

  if (index % 3 === 1) {
    bgClass = "bg-primary";
    titleClass = "text-white";
    descClass = "text-white/80";
  } else if (index % 3 === 2) {
    bgClass = "bg-foreground";
    titleClass = "text-background";
    descClass = "text-background/70";
  }

  return (
    <div className="w-full">
      <div className={`rounded-2xl p-6 ${bgClass} shadow-xl border border-border/10 flex flex-col relative overflow-hidden`}>
        <div className="mb-4">
          <span className="inline-flex px-3 py-1 bg-white/10 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider rounded border border-white/10">
            0{index + 1}
          </span>
        </div>
        <div className="flex-1 z-10 relative">
          <h3 className={`text-lg font-bold font-display mb-2 leading-tight ${titleClass}`}>
            {service.title}
          </h3>
          <p className={`text-[11px] leading-relaxed ${descClass}`}>
            {service.description}
          </p>
        </div>
        <div className="absolute -bottom-8 -right-8 pointer-events-none">
          <motion.div
            initial={{ scale: 0.2, opacity: 0, rotate: 15 }}
            whileInView={{ scale: 1, opacity: 0.15, rotate: 12 }}
            viewport={{ once: false }}
            transition={{ 
              duration: 1.2, 
              ease: [0.16, 1, 0.3, 1]
            }}
          >
            <ThreeDCardIcon title={service.title} color={service.color} />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export function Services() {
  const sectionRef = useRef<HTMLElement>(null)

  return (
    <section id="services" className="bg-background relative py-4 overflow-hidden" ref={sectionRef}>
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] animate-pulse delay-700" />
      </div>

      <div className="relative">
        <div className="w-full flex flex-col items-center justify-center z-10 pt-4 pb-4">
          
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full text-center px-4 mb-4 sm:mb-6 max-w-3xl mx-auto relative shrink-0"
          >
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-xs sm:text-sm font-semibold rounded-full mb-3">
              Premium Services
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold font-display text-foreground text-balance leading-tight mb-4">
              Smart E-Commerce Support for <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">Sharp Sellers</span>
            </h2>
            <p className="hidden sm:block text-sm sm:text-lg text-muted-foreground text-pretty">
              Choose only what grows your business. Our comprehensive suite of services
              is designed to maximize your profits and minimize losses.
            </p>
          </motion.div>

          {/* Desktop Bento Grid Design */}
          <div className="hidden md:flex w-full max-w-[1600px] mx-auto lg:px-12 flex-1 items-center pb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
              {services.map((service, idx) => {
                return (
                  <motion.div
                    key={service.title}
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={idx}
                    className="group relative overflow-hidden rounded-2xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 flex flex-col min-h-[320px]"
                  >
                    {/* Hover Background Effect */}
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 ${service.color}`} />
                    
                    <div className="relative p-6 lg:p-8 h-full flex flex-col justify-between z-10">
                      <div>
                        <div className={`w-12 h-12 rounded-2xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                          <service.icon className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl lg:text-2xl font-bold font-display mb-3 group-hover:text-primary transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground text-sm lg:text-base leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                          {service.description}
                        </p>
                      </div>
                      
                      <div className="mt-4 flex items-center justify-between opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                        <span className="text-xs font-bold uppercase tracking-widest text-primary">Learn More</span>
                        <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                          <Zap className="w-4 h-4 fill-current" />
                        </div>
                      </div>
                    </div>

                    {/* Decorative Element */}
                    <div className="absolute -bottom-8 -right-8 overflow-hidden pointer-events-none">
                      <motion.div
                        initial={{ scale: 0.2, opacity: 0, rotate: 15 }}
                        whileInView={{ scale: 1, opacity: 0.15, rotate: 12 }}
                        viewport={{ once: false, margin: "-100px" }}
                        transition={{ 
                          duration: 1.5, 
                          ease: [0.16, 1, 0.3, 1], // Custom cubic-bezier for a "growing" feel
                          delay: idx * 0.05 
                        }}
                      >
                        <service.icon className="w-48 h-48" />
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Mobile Grid Design */}
          <div className="block md:hidden w-full px-6 mt-8">
            <div className="grid grid-cols-1 gap-6">
              {services.map((service, index) => (
                <MobileServiceCard
                  key={service.title}
                  service={service as any}
                  index={index}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
