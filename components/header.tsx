"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, User } from "lucide-react"
import { Button } from "@/components/ui/button"
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
      className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm"
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* Row 1: Logo (Left) + Desktop Navigation (Center) + Mobile Menu Button (Right) */}
        <div className="flex items-center justify-between lg:justify-between py-3 lg:py-4">
          {/* Logo - Left side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative w-32 h-8 lg:w-40 lg:h-10 flex items-center">
                <img src="/navbar.png" alt="Logo" className="w-full h-full object-contain" />
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation Menu - Centered in the available space */}
          <nav className="hidden lg:flex items-center justify-center gap-8 absolute left-1/2 transform -translate-x-1/2">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
              >
                <Link
                  href={link.href}
                  className={`text-[1.05rem] font-medium transition-colors relative group ${pathname === link.href
                      ? "text-primary"
                      : "text-gray-800 hover:text-gray-900"
                    }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all ${pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                  />
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="lg:hidden p-2 text-gray-800"
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

        {/* Row 2: Both Buttons - Centered */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center justify-center gap-4 pb-4 lg:pb-2"
        >
          <Button
            asChild
            className="rounded-full px-6 h-10 text-sm font-medium shadow-lg shadow-primary/20 bg-primary text-white hover:bg-primary/90"
          >
            <Link href="https://forms.gle/XHrALZDXNSWV5eyt9" target="_blank">
              Book Free Demo
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="rounded-full px-6 h-10 text-sm font-medium border-primary/50 text-primary hover:bg-primary hover:text-white transition-all group"
          >
            <Link href="/login" className="flex items-center justify-center gap-2">
              <User className="w-4 h-4 text-primary group-hover:text-white" />
              Seller Login
            </Link>
          </Button>

        </motion.div>

        {/* Mobile Navigation Menu (expands below) */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden overflow-hidden"
            >
              <nav className="flex flex-col items-center gap-5 py-6 border-t border-gray-200 mt-2">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                  >
                    <Link
                      href={link.href}
                      className={`text-xl font-medium transition-colors ${pathname === link.href
                          ? "text-primary font-semibold"
                          : "text-gray-800 hover:text-gray-900"
                        }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}