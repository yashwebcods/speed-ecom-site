"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollProgress } from "@/components/scroll-progress"
import { ScrollToTop } from "@/components/scroll-to-top"
import { motion } from "framer-motion"
import {
  Shield,
  RotateCcw,
  RefreshCw,
  Phone,
  Mail,
  Globe,
  ChevronRight,
  AlertCircle,
  HelpCircle,
  Clock,
  CreditCard,
  Ban,
  Send,
} from "lucide-react"

const sections = [
  {
    number: "01",
    icon: RotateCcw,
    title: "General Refund Policy",
    content: (
      <div className="space-y-4">
        <div className="bg-primary/5 border border-primary/20 rounded-xl p-4">
          <h4 className="font-bold text-primary mb-2 flex items-center gap-2">
            <Ban className="w-4 h-4" />
            1.1 No Refund After Recharge Payment
          </h4>
          <p className="text-slate-600 text-sm leading-relaxed">
            Once the seller has paid the recharge amount, no refund will be issued under normal circumstances. This is because analysis work, data preparation, resource allocation, and team assignment start immediately after recharge.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
            <Shield className="w-4 h-4 text-accent" />
            1.2 Exceptional Cases – Management Approval
          </h4>
          <p className="text-slate-600 text-sm leading-relaxed">
            Refunds may be considered only in rare and genuine situations, and only after a complete evaluation by the Speed Ecom Solution management team. A refund will be processed only if:
          </p>
          <ul className="mt-3 space-y-2">
            {[
              "The situation is found valid and justified",
              "Proper reasoning/evidence is provided",
              "Management provides written approval",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-slate-600 text-sm">
                <ChevronRight className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-3 text-xs font-bold text-slate-500 italic">Management decision will be final and binding.</p>
        </div>
      </div>
    ),
  },
  {
    number: "02",
    icon: AlertCircle,
    title: "Refund Not Applicable For",
    content: (
      <div className="space-y-4">
        <p className="text-slate-600 text-sm">Refunds will not be provided in the following cases:</p>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            "Change of mind after recharge",
            "Client delay in providing data/access",
            "Expectation mismatch after receiving reports",
            "Marketplace policy changes or platform-side issues",
            "Incomplete/incorrect data shared by the seller",
            "Unused service days within the subscription period",
            "Business operation mistakes made by the seller",
            "Report format not matching personal preferences",
            "Issues arising due to Amazon, Flipkart, Meesho, Shopify, or courier logistics",
          ].map((item) => (
            <div key={item} className="flex items-start gap-2 text-slate-600 text-xs bg-slate-50 p-2.5 rounded-lg border border-slate-100">
              <Ban className="w-3.5 h-3.5 text-red-400 mt-0.5 shrink-0" />
              {item}
            </div>
          ))}
        </div>
        <p className="text-sm font-semibold text-primary bg-primary/5 p-3 rounded-xl border border-primary/10">
          Since our reports involve manual hours and specialized analysis, refund is not possible once work has begun.
        </p>
      </div>
    ),
  },
  {
    number: "03",
    icon: RefreshCw,
    title: "Cancellation Policy",
    content: (
      <div className="space-y-4">
        <div className="flex items-start gap-3 bg-blue-50 border border-blue-100 p-4 rounded-xl">
          <Mail className="w-5 h-5 text-blue-500 mt-1" />
          <div>
            <h4 className="font-bold text-blue-900 mb-1">3.1 Subscription / Service Cancellation</h4>
            <p className="text-blue-800/70 text-sm">You may cancel your plan by sending an email to: <span className="font-bold">speedecomsolution@gmail.com</span></p>
          </div>
        </div>
        <ul className="space-y-2 pl-4">
          {[
            "Cancellation does not make you eligible for a refund.",
            "Services will continue until the end of the paid period.",
            "No charges will be taken for the next cycle if you request cancellation before renewal.",
          ].map((item) => (
            <li key={item} className="list-disc text-slate-600 text-sm leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
        <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl">
          <h4 className="font-bold text-amber-900 mb-1">3.2 Automatic Service Pause</h4>
          <p className="text-amber-800/70 text-sm leading-relaxed">
            If you fail to provide required data, access, or marketplace login credentials, the service may be paused, but refund will not be provided.
          </p>
        </div>
      </div>
    ),
  },
  {
    number: "04",
    icon: CreditCard,
    title: "Double or Wrong Payment",
    content: (
      <div className="space-y-4">
        <p className="text-slate-600 text-sm">Refund is applicable only in the following cases:</p>
        <ul className="space-y-2">
          {[
            "Accidental double payment",
            "Incorrect amount deducted due to technical error",
          ].map((item) => (
            <li key={item} className="flex items-center gap-2 text-slate-600 text-sm font-medium">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
              {item}
            </li>
          ))}
        </ul>
        <p className="text-xs text-slate-500 bg-slate-50 p-3 rounded-lg border border-slate-200">
          Refund will be initiated to the same payment method within <span className="font-bold text-slate-900">5–7 working days</span> after verification.
        </p>
      </div>
    ),
  },
  {
    number: "05",
    icon: Clock,
    title: "Report Delivery Delays",
    content: (
      <div className="space-y-4">
        <p className="text-slate-600 text-sm">Refund cannot be claimed for delays caused due to:</p>
        <div className="grid sm:grid-cols-2 gap-2">
          {[
            "Marketplace server issues",
            "Slow data download from seller accounts",
            "Incorrect or missing login credentials",
            "Seller not sharing required data",
            "Platform outages or system updates",
            "Excessive monthly orders requiring more time",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2 text-slate-600 text-xs">
              <ChevronRight className="w-4 h-4 text-primary mt-0.5 shrink-0" />
              {item}
            </li>
          ))}
        </div>
        <p className="text-sm font-bold text-slate-800 border-t border-slate-100 pt-4">
          We only start analysis after receiving proper access; delay from the client’s side will delay the report.
        </p>
      </div>
    ),
  },
  {
    number: "06",
    icon: Ban,
    title: "Termination by Company",
    content: (
      <div className="space-y-4">
        <p className="text-slate-600 text-sm">Speed Ecom Solution reserves the right to terminate services if:</p>
        <ul className="space-y-2">
          {[
            "Misuse of reports or intellectual property is found",
            "Fraudulent activity is suspected",
            "Abusive, disrespectful, or uncooperative behavior occurs",
            "Non-payment or repeated delays in payment happen",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2 text-slate-600 text-sm">
              <AlertCircle className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <p className="text-sm font-black text-red-600">In such cases, no refund will be provided.</p>
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

export default function RefundPolicyPage() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main className="w-full overflow-x-clip bg-white">
        {/* Hero Section */}
        <section className="relative bg-primary pt-36 pb-20 lg:pt-44 lg:pb-28 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-accent rounded-full blur-3xl" />
          </div>
          
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-4xl"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/80 text-xs font-bold uppercase tracking-widest mb-6">
                <RotateCcw className="w-3.5 h-3.5" />
                Policy
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display text-white mb-6 leading-tight">
                Refund & Cancellation Policy
              </h1>
              <p className="text-white/70 text-lg lg:text-xl leading-relaxed">
                At Speed Ecom Solution, we provide highly detailed, manual, and time-intensive data analysis 
                and reconciliation services. To maintain fairness and transparency, this policy outlines 
                how refunds and cancellations are handled.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 lg:py-24 bg-slate-50/50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-8"
              >
                {sections.map((section) => (
                  <motion.div
                    key={section.number}
                    variants={itemVariants}
                    className="bg-white border border-slate-200 rounded-2xl p-6 lg:p-10 shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                        <section.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-primary/50 uppercase tracking-widest mb-1 block">Section {section.number}</span>
                        <h2 className="text-xl lg:text-2xl font-bold font-display text-slate-900 leading-tight">
                          {section.title}
                        </h2>
                      </div>
                    </div>
                    <div className="lg:pl-16">
                      {section.content}
                    </div>
                  </motion.div>
                ))}

                {/* Refund Request Steps */}
                <motion.div
                  variants={itemVariants}
                  className="bg-primary rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32" />
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                        <HelpCircle className="w-6 h-6 text-accent" />
                      </div>
                      <h2 className="text-2xl lg:text-3xl font-bold font-display">How to Request a Refund</h2>
                    </div>
                    <p className="text-white/70 mb-8 max-w-2xl text-sm lg:text-base">
                      If you believe your case is exceptional and qualifies for management review, please follow these steps:
                    </p>
                    
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-8 h-8 rounded-full bg-accent/20 text-accent flex items-center justify-center font-bold text-xs">01</div>
                          <h4 className="font-bold">Email Us</h4>
                        </div>
                        <p className="text-white/60 text-sm">
                          Send an email to <span className="text-white font-medium">speedecomsolution@gmail.com</span>
                        </p>
                      </div>
                      <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-8 h-8 rounded-full bg-accent/20 text-accent flex items-center justify-center font-bold text-xs">02</div>
                          <h4 className="font-bold">Provide Details</h4>
                        </div>
                        <p className="text-white/60 text-sm">
                          Include Subject: <span className="text-white font-medium">Refund Request – [Your Firm Name]</span>. 
                          Attach Payment screenshot + Reason.
                        </p>
                      </div>
                    </div>
                    
                    <div className="mt-8 flex items-center gap-3 text-xs lg:text-sm text-accent font-bold">
                      <Clock className="w-4 h-4" />
                      <span>Response time: 5–7 working days</span>
                    </div>
                  </div>
                </motion.div>

                {/* Contact Footer */}
                <motion.div
                  variants={itemVariants}
                  className="bg-white border border-slate-200 rounded-3xl p-8 lg:p-10 flex flex-col lg:flex-row items-center justify-between gap-8"
                >
                  <div className="max-w-md text-center lg:text-left">
                    <h3 className="text-2xl font-bold font-display text-slate-900 mb-2">Contact Us</h3>
                    <p className="text-slate-500 text-sm">
                      For any questions or clarifications regarding this policy, feel free to reach out.
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap justify-center gap-4">
                    <a href="mailto:speedecomsolution@gmail.com" className="flex items-center gap-2 px-5 py-3 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl transition-all group">
                      <Mail className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                      <span className="text-sm font-semibold text-slate-700">Email Us</span>
                    </a>
                    <a href="tel:+919913315809" className="flex items-center gap-2 px-5 py-3 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl transition-all group">
                      <Phone className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                      <span className="text-sm font-semibold text-slate-700">Call Us</span>
                    </a>
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
