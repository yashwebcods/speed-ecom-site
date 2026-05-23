"use client"

import Link from "next/link"
import Image from "next/image"
import { motion, Variants } from "framer-motion"
import { Instagram, Facebook } from "lucide-react"

const quickLinks = [
  { href: "/services", label: "Services" },
  { href: "/platform", label: "Platform" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
]

const platforms = ["Meesho", "Flipkart", "Amazon", "Myntra", "GlowRoad", "JioMart"]

const columnVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
}

const CURRENT_YEAR = 2026

export function Footer() {
  return (
    <footer className="bg-[var(--color-navy-dark)] text-white py-16 lg:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
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
            <p className="text-sm text-white/70 mb-3 leading-relaxed">
              Your trusted partner for e-commerce financial management. We help online sellers
              maximize profits and eliminate hidden losses.
            </p>
            <p className="text-sm text-white/60 mb-5">
              Proudly based in Surat, Gujarat, India 🇮🇳
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/speedecomsolution"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-[var(--color-cta-primary)] transition-colors"
                aria-label="Instagram @speedecomsolution"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com/speedecomsolutions"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-[var(--color-cta-primary)] transition-colors"
                aria-label="Facebook /speedecomsolutions"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          <motion.div
            custom={1}
            variants={columnVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <h4 className="font-semibold mb-5 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-[var(--color-brand-blue)] transition-colors inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            custom={2}
            variants={columnVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <h4 className="font-semibold mb-5 text-white">Supported Platforms</h4>
            <ul className="space-y-3">
              {platforms.map((platform) => (
                <li key={platform}>
                  <span className="text-sm text-white/70">{platform}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            custom={3}
            variants={columnVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <h4 className="font-semibold mb-5 text-white">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+919913315809"
                  className="text-sm text-white/70 hover:text-[var(--color-brand-blue)] transition-colors"
                >
                  +91 99133 15809
                </a>
              </li>
              <li>
                <a
                  href="mailto:speedecomsolution@gmail.com"
                  className="text-sm text-white/70 hover:text-[var(--color-brand-blue)] transition-colors"
                >
                  speedecomsolution@gmail.com
                </a>
              </li>
              <li className="text-sm text-white/70">
                508, KBC-1, Kiran Chowk,
                <br />
                Surat – 395010
              </li>
              <li className="text-[13px] text-white/50 pt-2">
                @speedecomsolution · /speedecomsolutions
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="pt-8 border-t border-white/10"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-center sm:text-left">
              <p className="text-sm text-white/50">
                © {CURRENT_YEAR} Speed E-Com Solution. All rights reserved.
              </p>
              <p className="text-[13px] text-white/40 mt-2">
                Speed E-Com Solution is a brand of HM Square Solutions LLP
              </p>
            </div>
            <div className="flex gap-6">
              <Link
                href="/privacy-policy"
                className="text-sm text-white/50 hover:text-[var(--color-brand-blue)] transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="text-sm text-white/50 hover:text-[var(--color-brand-blue)] transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
