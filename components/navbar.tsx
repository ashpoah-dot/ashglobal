"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { 
    href: "/services", 
    label: "Services",
    children: [
      { href: "/services#beauty", label: "Beauty & Cosmetology" },
      { href: "/services#builders", label: "ASH Builders" },
      { href: "/services#outfitters", label: "Outfitters" },
      { href: "/services#agency", label: "Agency Services" },
    ]
  },
  { href: "/it-programs", label: "IT Programs" },
  { href: "/members-welfare", label: "Members Welfare" },
  { href: "/training", label: "Training" },
  { href: "/resources", label: "Resources" },
  { href: "/media", label: "Media" },
  { href: "/contact", label: "Contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-lg border-b border-gray-200 shadow-lg"
          : "bg-white/80 backdrop-blur-md"
      )}
    >
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Image
              src="/logo.svg"
              alt="ASH Global Initiatives"
              width={50}
              height={50}
              className="w-12 h-12"
              priority
            />
            <div className="hidden sm:block">
              <div className="text-sm font-bold text-primary">ASH GLOBAL</div>
              <div className="text-xs text-secondary font-semibold">INITIATIVES</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-1",
                    pathname === link.href
                      ? "text-primary bg-blue-50"
                      : "text-gray-700 hover:text-primary hover:bg-blue-50"
                  )}
                >
                  {link.label}
                  {link.children && <ChevronDown className="w-4 h-4" />}
                </Link>
                
                {/* Dropdown */}
                {link.children && (
                  <AnimatePresence>
                    {activeDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden"
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-3 text-sm text-gray-700 hover:text-primary hover:bg-blue-50 transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Link href="/donate" className="hidden sm:block">
              <Button className="bg-gradient-to-r from-primary to-secondary text-white hover:shadow-lg transition-all rounded-lg px-6 font-semibold">
                Donate
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-gray-700"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 space-y-2 border-t border-gray-200">
                {navLinks.map((link) => (
                  <div key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "block px-4 py-3 rounded-lg text-base font-medium transition-colors",
                        pathname === link.href
                          ? "text-primary bg-blue-50"
                          : "text-gray-700 hover:text-primary hover:bg-blue-50"
                      )}
                    >
                      {link.label}
                    </Link>
                    {link.children && (
                      <div className="pl-4 space-y-1 mt-1">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setIsOpen(false)}
                            className="block px-4 py-2 text-sm text-gray-600 hover:text-primary transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <Link
                  href="/donate"
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3"
                >
                  <Button className="w-full bg-gradient-to-r from-primary to-secondary text-white hover:shadow-lg rounded-lg font-semibold">
                    Donate Now
                  </Button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
