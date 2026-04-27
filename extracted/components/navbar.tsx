"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X, Phone } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
]

export function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a1628]/95 backdrop-blur-md border-b border-[#1e3a68]">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Dharam Realty Solutions"
              width={175}
              height={70}
              className="h-[70px] w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-[#d4a853]",
                  pathname === link.href
                    ? "text-[#d4a853]"
                    : "text-white/80"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+919632991278"
              className="flex items-center gap-2 text-sm text-white/80 hover:text-[#d4a853] transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>+91 96329 91278</span>
            </a>
            <a
              href="https://wa.me/919632991278"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#d4a853] hover:bg-[#e5be6a] text-[#0a1628] px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors"
            >
              WhatsApp Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-[#1e3a68]">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-base font-medium transition-colors py-2",
                    pathname === link.href
                      ? "text-[#d4a853]"
                      : "text-white/80 hover:text-[#d4a853]"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-3 pt-4 border-t border-[#1e3a68]">
                <a
                  href="tel:+919632991278"
                  className="flex items-center gap-2 text-white/80 hover:text-[#d4a853] transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>+91 96329 91278</span>
                </a>
                <a
                  href="https://wa.me/919632991278"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#d4a853] hover:bg-[#e5be6a] text-[#0a1628] px-5 py-3 rounded-lg text-sm font-semibold transition-colors text-center"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
