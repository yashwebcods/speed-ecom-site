"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollProgress } from "@/components/scroll-progress"
import { ScrollToTop } from "@/components/scroll-to-top"
import { motion } from "framer-motion"
import {
  Shield,
  Lock,
  Eye,
  UserCheck,
  Server,
  FileLock,
  Database,
  Mail,
  Phone,
  Globe,
  ChevronRight,
  Info,
} from "lucide-react"

const sections = [
  {
    number: "01",
    icon: Eye,
    title: "Information We Collect",
    content: (
      <div className="space-y-4">
        <p className="text-slate-600 text-sm leading-relaxed">
          We collect information to provide better services to our clients. This includes:
        </p>
        <ul className="space-y-2">
          {[
            "Personal identification information (Name, email address, phone number, etc.)",
            "Business data (Marketplace credentials, sales reports, SKU details)",
            "Payment information for service billing",
            "Communication records between you and Speed Ecom Solution",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2 text-slate-600 text-sm">
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
    icon: Server,
    title: "How We Use Your Data",
    content: (
      <div className="space-y-4">
        <p className="text-slate-600 text-sm leading-relaxed">
          Your data is used strictly for the following purposes:
        </p>
        <ul className="space-y-2">
          {[
            "To perform SKU-wise reconciliation and financial analysis",
            "To identify settlement mismatches and shipping discrepancies",
            "To provide business growth consultation and insights",
            "To process payments and maintain your service subscription",
            "To communicate updates, reports, and service-related information",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2 text-slate-600 text-sm">
              <ChevronRight className="w-4 h-4 text-primary mt-0.5 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    number: "03",
    icon: Lock,
    title: "Data Security",
    content: (
      <div className="space-y-4">
        <p className="text-slate-600 text-sm leading-relaxed">
          We take data security very seriously. We implement enterprise-grade security measures:
        </p>
        <div className="bg-primary/5 border border-primary/10 rounded-xl p-4">
          <ul className="space-y-3">
            {[
              "Encrypted storage for all sensitive client data",
              "Restricted access to client credentials on a need-to-know basis",
              "Regular security audits of our internal systems",
              "Strict confidentiality agreements with all team members",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-slate-600 text-sm font-medium">
                <Shield className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    ),
  },
  {
    number: "04",
    icon: FileLock,
    title: "Data Sharing & Disclosure",
    content: (
      <div className="space-y-4">
        <p className="text-slate-600 text-sm leading-relaxed">
          We do not sell, trade, or rent your business data to third parties. We may disclose your information only when:
        </p>
        <ul className="space-y-2">
          {[
            "Required by law or to comply with legal processes",
            "To protect the rights, property, or safety of Speed Ecom Solution",
            "With your explicit consent for specific integrations",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2 text-slate-600 text-sm">
              <ChevronRight className="w-4 h-4 text-primary mt-0.5 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    number: "05",
    icon: Database,
    title: "Data Retention",
    content: (
      <p className="text-slate-600 text-sm leading-relaxed">
        We retain your data for as long as your account is active or as needed to provide you services. 
        Upon termination of service, we will securely archive or delete your data according to our 
        standard data lifecycle policy, unless required otherwise by law.
      </p>
    ),
  },
  {
    number: "06",
    icon: UserCheck,
    title: "Your Rights",
    content: (
      <div className="space-y-4">
        <p className="text-slate-600 text-sm leading-relaxed">
          You have the right to:
        </p>
        <ul className="space-y-2">
          {[
            "Access the personal and business information we hold about you",
            "Request correction of any inaccurate data",
            "Request deletion of your data (subject to service requirements)",
            "Withdraw consent for data processing at any time",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2 text-slate-600 text-sm">
              <ChevronRight className="w-4 h-4 text-primary mt-0.5 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    ),
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main className="w-full overflow-x-clip bg-white">
        {/* Hero Section */}
        <section className="relative bg-slate-900 pt-36 pb-20 lg:pt-44 lg:pb-28 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-accent rounded-full blur-3xl" />
          </div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30" />
          
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-4xl"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/80 text-xs font-bold uppercase tracking-widest mb-6">
                <Lock className="w-3.5 h-3.5" />
                Security
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display text-white mb-6 leading-tight">
                Privacy Policy
              </h1>
              <p className="text-white/70 text-lg lg:text-xl leading-relaxed">
                Your trust is our most valuable asset. At Speed Ecom Solution, we are committed to 
                protecting your privacy and ensuring that your business data remains confidential 
                and secure at all times.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-12"
              >
                {sections.map((section) => (
                  <motion.div
                    key={section.number}
                    variants={itemVariants}
                    className="relative"
                  >
                    <div className="flex items-start gap-5 mb-6">
                      <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center shrink-0">
                        <section.icon className="w-5 h-5 text-slate-900" />
                      </div>
                      <div>
                        <h2 className="text-xl lg:text-2xl font-bold font-display text-slate-900 leading-tight">
                          {section.title}
                        </h2>
                        <div className="h-1 w-12 bg-primary/20 mt-2 rounded-full" />
                      </div>
                    </div>
                    <div className="lg:pl-15">
                      {section.content}
                    </div>
                  </motion.div>
                ))}

                {/* Refund Policy Link */}
                <motion.div
                  variants={itemVariants}
                  className="bg-slate-50 border border-slate-200 rounded-3xl p-8 lg:p-10 flex items-center gap-6"
                >
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center shrink-0">
                    <Info className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">Looking for Refund Policy?</h3>
                    <p className="text-slate-500 text-sm mb-3">Our cancellation and refund terms are detailed on a separate page.</p>
                    <a href="/refund-policy" className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:underline">
                      View Refund & Cancellation Policy
                      <ChevronRight className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>

                {/* Contact Footer */}
                <motion.div
                  variants={itemVariants}
                  className="bg-slate-900 rounded-3xl p-8 lg:p-12 text-white"
                >
                  <div className="grid lg:grid-cols-2 gap-10">
                    <div>
                      <h3 className="text-2xl font-bold font-display mb-4">Privacy Concerns?</h3>
                      <p className="text-white/60 text-sm mb-6 leading-relaxed">
                        If you have any questions about this Privacy Policy or how we handle your data, 
                        please contact our Data Protection team.
                      </p>
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <Mail className="w-5 h-5 text-accent" />
                          <span className="text-sm">speedecomsolution@gmail.com</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Phone className="w-5 h-5 text-accent" />
                          <span className="text-sm">+91 99133 15809</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Globe className="w-5 h-5 text-accent" />
                          <span className="text-sm">www.speedecomsolution.com</span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col justify-center">
                      <h4 className="font-bold mb-2">Policy Updates</h4>
                      <p className="text-white/50 text-xs leading-relaxed">
                        We may update this Privacy Policy from time to time to reflect changes in our 
                        practices or for legal reasons. We encourage you to review this page periodically.
                      </p>
                      <p className="text-white/30 text-[10px] mt-4 uppercase tracking-widest font-bold">
                        Last Updated: May 2025
                      </p>
                    </div>
                  </div>
                </motion.div>

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
