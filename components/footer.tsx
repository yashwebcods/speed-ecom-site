"use client"

import Link from "next/link"
import Image from "next/image"
import { motion, Variants } from "framer-motion"
import { TrendingUp } from "lucide-react"

const quickLinks = [
  { href: "#services", label: "Services" },
  { href: "#why-us", label: "Why Us" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
]

const platforms = ["Meesho", "Flipkart", "Amazon", "Myntra", "JioMart", "GlowRoad"]

const columnVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as any,
    },
  }),
}

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16 lg:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
          {/* Brand */}
          <motion.div
            custom={0}
            variants={columnVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="col-span-2 lg:col-span-1"
          >
            <Link href="/" className="inline-flex items-center gap-2 mb-5">
              <div className="relative w-10 h-10">
                <Image
                  src="/logo_dark.png"
                  alt="Speed E-Com Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="text-sm text-primary-foreground/70 mb-5 leading-relaxed">
              Your trusted partner for e-commerce financial management. We help online sellers
              maximize profits and eliminate hidden losses.
            </p>
            <p className="text-sm font-medium text-accent">
              બિઝનેસ તમારો, હિસાબ અમારો
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            custom={1}
            variants={columnVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <h4 className="font-semibold font-display mb-5 text-primary-foreground">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.08 }}
                >
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-accent hover:translate-x-1 transition-all inline-block"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Platforms */}
          <motion.div
            custom={2}
            variants={columnVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <h4 className="font-semibold font-display mb-5 text-primary-foreground">Supported Platforms</h4>
            <ul className="space-y-3">
              {platforms.map((platform, index) => (
                <motion.li
                  key={platform}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.08 }}
                >
                  <span className="text-sm text-primary-foreground/70">{platform}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            custom={3}
            variants={columnVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <h4 className="font-semibold font-display mb-5 text-primary-foreground">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+919913315809"
                  className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  +91 99133 15809
                </a>
              </li>
              <li>
                <a
                  href="mailto:speedecomsolution@gmail.com"
                  className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  speedecomsolution@gmail.com
                </a>
              </li>
              <li className="text-sm text-primary-foreground/70">
                508, KBC-1, Kiran Chowk,
                <br />
                Surat – 395010
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="pt-8 border-t border-primary-foreground/10"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/50">
              © {new Date().getFullYear()} Speed E-Com Solution. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="text-sm text-primary-foreground/50 hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-primary-foreground/50 hover:text-accent transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
