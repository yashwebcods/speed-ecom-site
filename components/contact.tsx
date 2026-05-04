"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react"

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 99133 15809",
    href: "tel:+919913315809",
  },
  {
    icon: Mail,
    label: "Email",
    value: "speedecomsolution@gmail.com",
    href: "mailto:speedecomsolution@gmail.com",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "508, KBC-1 (Karunesh Business Center), Opposite Abhishek Arcade, Kiran Chowk, Surat – 395010",
    href: "https://maps.google.com/?q=Kiran+Chowk+Surat",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Mon - Sat: 10:00 AM - 7:00 PM",
    href: null,
  },
]

const contactCardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: 0.2 + i * 0.1,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as any,
    },
  }),
}

export function Contact() {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-slate-50/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-10">
              <div className="max-w-2xl">
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-violet-600 text-xs font-bold uppercase tracking-[0.2em] mb-4 block"
                >
                  Contact Us
                </motion.span>
                <h2 className="text-3xl lg:text-5xl font-bold font-display text-slate-900 mb-6 leading-tight">
                  Get in Touch with <span className="text-violet-600">Speed E-Com</span>
                </h2>
                <p className="text-slate-600 text-base lg:text-lg leading-relaxed">
                  Have questions about your online business? Our experts are here to help you solve cash flow, settlement disputes, and platform growth challenges.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-5 p-5 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all h-full"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-violet-50 text-violet-600 flex items-center justify-center shrink-0 group-hover:bg-violet-600 group-hover:text-white transition-colors mt-0.5">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">{item.label}</p>
                      {item.href ? (
                        <a 
                          href={item.href} 
                          className="text-sm lg:text-base font-bold text-slate-900 hover:text-violet-600 transition-colors block leading-relaxed break-words"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm lg:text-base font-bold text-slate-900 leading-relaxed break-words">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Content - Compact CTA */}
            <div className="lg:col-span-5 h-full">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-[#022c43] rounded-[3rem] p-10 lg:p-14 text-white relative overflow-hidden shadow-2xl h-full flex flex-col justify-center"
              >
                <div className="relative z-10 space-y-8">
                  <h3 className="text-3xl lg:text-4xl font-bold leading-tight">
                    Ready to grow your business?
                  </h3>
                  <p className="text-white/70 text-base lg:text-lg leading-relaxed">
                    Book a free demo today and discover how our automated solutions can maximize your marketplace profits.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-5 pt-4">
                    <Button
                      asChild
                      size="lg"
                      className="bg-white text-[#022c43] hover:bg-slate-100 rounded-full px-10 h-14 font-bold transition-transform hover:scale-105 active:scale-95 text-base"
                    >
                      <Link href="https://forms.gle/XHrALZDXNSWV5eyt9" target="_blank">
                        Book Demo
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="border-white/20 text-white bg-white/5 hover:bg-white/10 rounded-full px-10 h-14 font-bold backdrop-blur-sm transition-transform hover:scale-105 active:scale-95 text-base"
                    >
                      <Link href="tel:+919913315809">Call Now</Link>
                    </Button>
                  </div>
                </div>

                {/* Subtle Decorative Circle */}
                <div className="absolute -top-24 -right-24 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
                <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-violet-500/10 rounded-full blur-2xl" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
