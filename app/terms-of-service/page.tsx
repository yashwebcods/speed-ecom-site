"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollProgress } from "@/components/scroll-progress"
import { ScrollToTop } from "@/components/scroll-to-top"
import { motion } from "framer-motion"
import Link from "next/link"
import {
  Shield,
  FileText,
  Users,
  CreditCard,
  Lock,
  AlertTriangle,
  Scale,
  RotateCcw,
  RefreshCw,
  Phone,
  Mail,
  Globe,
  ChevronRight,
} from "lucide-react"

const sections = [
  {
    number: "01",
    icon: FileText,
    title: "Scope of Service",
    content: (
      <div className="space-y-4">
        <p className="text-slate-600 leading-relaxed">
          Speed Ecom Solution provides data analysis, SKU-wise reconciliation, settlement checking,
          profit-loss reporting, and consultancy services for e-commerce sellers on platforms like
          Amazon, Flipkart, Meesho, Shopify, etc.
        </p>
        <p className="font-semibold text-slate-800">Our service includes:</p>
        <ul className="space-y-2">
          {[
            "SKU-wise profitability & reconciliation reports",
            "Settlement mismatch identification",
            "Weight, commission, and shipping discrepancy checks",
            "Return & penalty monitoring",
            "Pricing, discount & business strategy insights",
            "Business growth consultation",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2 text-slate-600">
              <ChevronRight className="w-4 h-4 text-primary mt-0.5 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    number: "02",
    icon: Shield,
    title: "Nature of Reports",
    content: (
      <ul className="space-y-3">
        {[
          "All reports delivered are based on the data provided by the client or downloaded from marketplaces using client credentials.",
          "We do not modify or manipulate platform data.",
          "Reports are strictly for business understanding and do not guarantee any specific financial outcomes.",
          "Final decision-making lies solely with the seller.",
        ].map((item) => (
          <li key={item} className="flex items-start gap-2 text-slate-600">
            <ChevronRight className="w-4 h-4 text-primary mt-0.5 shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    ),
  },
  {
    number: "03",
    icon: Users,
    title: "Client Responsibilities",
    content: (
      <div className="space-y-4">
        <p className="text-slate-600">The client agrees to:</p>
        <ul className="space-y-2">
          {[
            "Provide accurate login credentials, data access, or required documents.",
            "Ensure timely communication for report preparation.",
            "Maintain confidentiality of shared reports and insights.",
            "Not misuse or resell our analysis without written permission.",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2 text-slate-600">
              <ChevronRight className="w-4 h-4 text-primary mt-0.5 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <p className="text-slate-600 bg-primary/5 border border-primary/20 rounded-xl p-4 text-sm">
          ⚠️ If the client delays in providing data, reports will also be delayed.
        </p>
      </div>
    ),
  },
  {
    number: "04",
    icon: CreditCard,
    title: "Payment Terms",
    content: (
      <ul className="space-y-3">
        {[
          "All payments are prepaid unless agreed otherwise.",
          "Services are subscription or fixed-period based.",
          "If the payment is not made on time, services may be paused.",
        ].map((item) => (
          <li key={item} className="flex items-start gap-2 text-slate-600">
            <ChevronRight className="w-4 h-4 text-primary mt-0.5 shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    ),
  },
  {
    number: "05",
    icon: Lock,
    title: "Confidentiality",
    content: (
      <ul className="space-y-3">
        {[
          "We maintain strict confidentiality of client data.",
          "We do not share, sell, or disclose your business data to any third party unless legally required.",
        ].map((item) => (
          <li key={item} className="flex items-start gap-2 text-slate-600">
            <ChevronRight className="w-4 h-4 text-primary mt-0.5 shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    ),
  },
  {
    number: "06",
    icon: AlertTriangle,
    title: "Fair Usage",
    content: (
      <div className="space-y-3">
        <p className="text-slate-600">Client agrees not to:</p>
        <ul className="space-y-2">
          {[
            "Copy our report formats, tools, templates, or software.",
            "Share our proprietary business methods or analysis structure publicly.",
            "Use automated bots to access our systems (if any).",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2 text-slate-600">
              <ChevronRight className="w-4 h-4 text-primary mt-0.5 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    number: "07",
    icon: AlertTriangle,
    title: "Disclaimer",
    content: (
      <div className="space-y-4">
        <p className="text-slate-600">Speed Ecom Solution is not responsible for:</p>
        <ul className="space-y-2">
          {[
            "Marketplace policy changes",
            "Platform-side delays or errors",
            "Seller-side operational mistakes",
            "Changes in commission or settlement structures",
            "Losses due to business decisions taken solely by the client",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2 text-slate-600">
              <ChevronRight className="w-4 h-4 text-primary mt-0.5 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <p className="text-slate-600 bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm">
          📋 Our reports are for awareness and clarity, not for financial guarantees.
        </p>
      </div>
    ),
  },
  {
    number: "08",
    icon: Scale,
    title: "Limitation of Liability",
    content: (
      <p className="text-slate-600 leading-relaxed">
        Our total liability is limited to the amount paid for the ongoing subscription or service period.
      </p>
    ),
  },
  {
    number: "09",
    icon: RotateCcw,
    title: "Cancellation & Refund",
    content: (
      <p className="text-slate-600 leading-relaxed">
        All cancellation and refund details are explained in the{" "}
        <Link href="/refund-policy" className="text-primary font-semibold hover:underline">
          Refund &amp; Cancellation Policy
        </Link>{" "}
        page.
      </p>
    ),
  },
  {
    number: "10",
    icon: RefreshCw,
    title: "Changes to Terms",
    content: (
      <ul className="space-y-3">
        {[
          "We may update these Terms at any time.",
          "Continued usage of our service means acceptance of updated Terms.",
        ].map((item) => (
          <li key={item} className="flex items-start gap-2 text-slate-600">
            <ChevronRight className="w-4 h-4 text-primary mt-0.5 shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    ),
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as any } },
}

export default function TermsOfServicePage() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main className="w-full overflow-x-clip bg-white">

        {/* Hero Banner */}
        <section className="relative bg-primary pt-36 pb-20 lg:pt-44 lg:pb-28 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-accent rounded-full blur-3xl" />
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,transparent_49%,rgba(255,255,255,0.03)_50%,transparent_51%)] bg-[size:60px_60px]" />

          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-3xl"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/80 text-xs font-bold uppercase tracking-widest mb-6">
                <Shield className="w-3.5 h-3.5" />
                Legal
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display text-white mb-4 leading-tight">
                Terms of Service
              </h1>
              <p className="text-white/70 text-lg max-w-xl leading-relaxed">
                Please read these terms carefully before using our services. By using Speed Ecom Solution, you agree to these terms.
              </p>
              <p className="text-white/50 text-sm mt-6">
                Last updated: May 2025 &nbsp;•&nbsp; Effective immediately
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">

              {/* Table of Contents */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-slate-50 border border-slate-200 rounded-2xl p-6 lg:p-8 mb-16"
              >
                <h2 className="font-bold text-slate-900 text-lg mb-4 font-display">Table of Contents</h2>
                <div className="grid sm:grid-cols-2 gap-2">
                  {sections.map((section) => (
                    <a
                      key={section.number}
                      href={`#section-${section.number}`}
                      className="flex items-center gap-2 text-sm text-slate-600 hover:text-primary transition-colors py-1 group"
                    >
                      <span className="text-xs font-bold text-primary/50 group-hover:text-primary transition-colors w-6">{section.number}</span>
                      {section.title}
                    </a>
                  ))}
                </div>
              </motion.div>

              {/* Sections */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-10"
              >
                {sections.map((section) => (
                  <motion.div
                    key={section.number}
                    id={`section-${section.number}`}
                    variants={itemVariants}
                    className="group relative bg-white border border-slate-200 rounded-2xl p-6 lg:p-8 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
                  >
                    {/* Number badge */}
                    <div className="absolute -top-3.5 left-6">
                      <span className="inline-flex items-center px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full">
                        {section.number}
                      </span>
                    </div>

                    <div className="flex items-start gap-4 mb-5 mt-2">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <section.icon className="w-5 h-5 text-primary" />
                      </div>
                      <h2 className="text-xl lg:text-2xl font-bold font-display text-slate-900 leading-tight pt-1">
                        {section.title}
                      </h2>
                    </div>
                    <div className="pl-14">
                      {section.content}
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Contact Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mt-12 bg-primary rounded-2xl p-8 lg:p-10"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <span className="inline-flex items-center px-3 py-1 bg-white/10 text-white text-xs font-bold rounded-full mb-2">11</span>
                    <h2 className="text-xl lg:text-2xl font-bold font-display text-white leading-tight">
                      Contact Information
                    </h2>
                    <p className="text-white/70 text-sm mt-1">
                      For queries regarding these Terms, please reach out to us:
                    </p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-3 gap-4 pl-14">
                  {[
                    { icon: Mail, label: "Email", value: "speedecomsolution@gmail.com", href: "mailto:speedecomsolution@gmail.com" },
                    { icon: Phone, label: "Phone", value: "+91 99133 15809", href: "tel:+919913315809" },
                    { icon: Globe, label: "Website", value: "speedecomsolution.com", href: "https://speedecomsolution.com" },
                  ].map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="flex items-start gap-3 bg-white/10 hover:bg-white/20 transition-colors rounded-xl p-4 group"
                    >
                      <item.icon className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                      <div>
                        <p className="text-white/50 text-[10px] font-bold uppercase tracking-widest mb-0.5">{item.label}</p>
                        <p className="text-white text-sm font-medium group-hover:text-accent transition-colors break-all">{item.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </motion.div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}
