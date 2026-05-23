"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/platform", label: "Platform" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const pathname = usePathname()
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0
    setIsScrolled(latest > 50)
    // Hide header when scrolling down past 150px, show when scrolling up
    if (latest > 150 && latest > previous) {
      setIsHidden(true)
    } else {
      setIsHidden(false)
    }
  })

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: isHidden ? -100 : 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[var(--color-navy-dark)] border-b border-white/[0.08] shadow-sm"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative w-40 h-10 lg:w-48 lg:h-12 flex items-center">
                <img src="/navbar.png" alt="Logo" className="w-full h-full object-contain" />
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
              >
                <Link
                  href={link.href}
                  className={`text-sm font-medium transition-colors relative group ${
                    pathname === link.href
                      ? "text-white"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {link.label}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-[var(--color-brand-blue)] transition-all ${
                    pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                  }`} />
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Desktop CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="hidden lg:flex items-center gap-4"
          >
            <Button asChild variant="outline" className="rounded-lg px-6 border-white/30 text-white bg-transparent hover:bg-white/10 hover:text-white transition-all duration-300 group">
              <Link href="/login" className="flex items-center gap-2">
                <User className="w-4 h-4" />
                Seller Login
              </Link>
            </Button>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild variant="cta" className="rounded-lg">
                <Link href="https://forms.gle/XHrALZDXNSWV5eyt9" target="_blank">
                  Book Free Demo
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="lg:hidden p-2 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Row 2: Mobile CTAs (Only visible on mobile) */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex lg:hidden items-center gap-2 pb-4 px-2"
        >
          <Button asChild variant="outline" className="flex-1 rounded-lg h-10 text-[10px] font-bold border-white/30 text-white hover:bg-white/10 px-2">
            <Link href="/login" className="flex items-center justify-center gap-2">
              <User className="w-3 h-3" />
              Seller Login
            </Link>
          </Button>
          <Button asChild variant="cta" className="flex-1 rounded-lg h-10 text-[10px] font-bold px-2">
            <Link href="https://forms.gle/XHrALZDXNSWV5eyt9" target="_blank">Book Free Demo</Link>
          </Button>
        </motion.div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden overflow-hidden"
            >
              <nav className="flex flex-col gap-4 py-6 border-t border-white/10">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                  >
                    <Link
                      href={link.href}
                      className={`text-base font-medium transition-colors ${
                        pathname === link.href
                          ? "text-white font-semibold"
                          : "text-white/80 hover:text-white"
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                {/* Mobile buttons moved to header bar */}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}
