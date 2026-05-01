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


const services = [
  {
    icon: BarChart3,
    title: "Advertising & ROI Understanding",
    description:
      "Maximize return on every ad spend with strategic plans, ROI tracking, and continuous optimization for measurable results.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: TrendingUp,
    title: "Sales-Wise Participant Analysis",
    description:
      "Understand sales trends through detailed analysis. Identify top SKUs, marketplaces, or campaigns and replicate success.",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: CalendarDays,
    title: "Discount & Festival Strategy",
    description:
      "Boost seasonal revenue with expert discount structuring, festival sales planning, and smart promotional timing.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Package,
    title: "Shipping & Weight Reports",
    description:
      "Eliminate unnecessary costs by identifying shipping weight mismatches and charges for full transparency.",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: AlertCircle,
    title: "Wrong Commission Detection",
    description:
      "We audit platform statements to detect wrong commission charges or settlement issues ensuring accurate payouts.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: DollarSign,
    title: "Pricing Strategy & Profit Analysis",
    description:
      "Stay competitive while protecting margins with dynamic pricing and SKU-wise profit tracking.",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: Warehouse,
    title: "Warehouse & Settlement Reports",
    description:
      "Gain clarity into warehouse operations with structured FBA/FBF analysis revealing inefficiencies and profit leaks.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Lightbulb,
    title: "Business Growth Insights",
    description:
      "From sales forecasts to competitor benchmarking, we deliver actionable insights for consistent growth.",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: Zap,
    title: "Weekend Sales Optimization",
    description:
      "Capitalize on high-traffic days with tailored weekend strategies that drive purchases and improve your bottom line.",
    color: "bg-primary/10 text-primary",
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

function MobileServiceCard({ service, index, scrollYProgress }: {
  service: typeof services[0],
  index: number,
  scrollYProgress: any
}) {
  // Focus point calculation: each card is centered at a specific progress
  const focusPoint = (index * 86 - 3) / 700;

  // Calculate how far the current scroll is from this card's focus point
  const distance = useTransform(scrollYProgress, (val: number) => Math.abs(val - focusPoint));

  // Map distance to scale and opacity
  const scale = useTransform(distance, [0, 0.15], [1.05, 0.9]);
  const opacity = useTransform(distance, [0, 0.2], [1, 0.6]);

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
    <motion.div
      style={{ scale, opacity }}
      className="w-[82vw] flex-shrink-0"
    >
      <div className={`h-[250px] rounded-2xl p-5 ${bgClass} shadow-xl border border-border/10 flex flex-col relative overflow-hidden`}>
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
        <div className="absolute -bottom-4 -right-4 opacity-10 group-hover:opacity-20 transition-opacity">
          <service.icon className="w-24 h-24" />
        </div>

      </div>
    </motion.div>
  );
}

export function Services() {
  const sectionRef = useRef<HTMLElement>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: scrollContainerRef,
    offset: ["start start", "end end"],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])

  // Transform scroll progress to x translation
  // We start moving after 10% of the section is scrolled and finish at 90%
  // This helps ensure the "lock" is solid.
  const xTransform = useTransform(scrollYProgress, [0, 1], ["0vw", "-698vw"])

  return (
    <section id="services" className="bg-card relative" ref={sectionRef}>
      {/* Parallax background decoration */}
      <motion.div
        style={{ y: backgroundY }}
        className="hidden sm:block absolute -top-20 -right-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none"
      />

      {/* 
        This is the container for the sticky section.
        We make it very tall so the user has to scroll a lot, 
        driving the horizontal animation.
      */}
      <div ref={scrollContainerRef} className="h-[500vh] sm:h-auto sm:py-12 lg:py-32 relative">
        <div className="hidden sm:block container mx-auto px-4 lg:px-8 pt-20 sm:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as any }}
            className="text-center max-w-3xl mx-auto mb-16 sm:mb-16 w-full min-w-0"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4"
            >
              Premium Services
            </motion.span>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold font-display mb-4 text-balance">
              Smart E-Commerce Support for {" "}
              <span className="text-primary">Sharp Sellers</span>
            </h2>
            <p className="text-sm sm:text-lg text-muted-foreground text-pretty mb-8 sm:mb-0">
              Choose only what grows your business. Our comprehensive suite of services
              is designed to maximize your profits and minimize losses.
            </p>
          </motion.div>

          {/* Desktop Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((service) => (
              <motion.div key={service.title} variants={itemVariants}>
                <Card className="group h-full hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 border-border hover:border-primary/20 hover:-translate-y-1">
                  <CardContent className="p-6 lg:p-8 flex flex-col h-full">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                      className={`w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}
                    >
                      <service.icon className="w-7 h-7" />
                    </motion.div>

                    <h3 className="text-lg font-semibold font-display mb-3 text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mobile Scroll-Linked Horizontal Carousel */}
        <div className="sm:hidden h-[100dvh] sticky top-0 flex flex-col items-start justify-center overflow-hidden z-10">
          {/* Section Header (re-rendered inside sticky container for mobile only) */}
          <div className="w-full text-center px-4 mb-10">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-3">
              Premium Services
            </span>
            <h2 className="text-xl font-bold font-display text-balance leading-tight">
              Smart E-Commerce Support for <span className="text-primary">Sharp Sellers</span>
            </h2>
          </div>

          <motion.div
            className="flex gap-4 px-6"
            style={{ x: xTransform, width: "max-content" }}
          >
            {services.map((service, index) => (
              <MobileServiceCard
                key={service.title}
                service={service}
                index={index}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
