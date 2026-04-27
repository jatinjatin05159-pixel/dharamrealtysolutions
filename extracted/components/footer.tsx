import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#0f2140] border-t border-[#1e3a68]">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="Dharam Realty Solutions"
                width={150}
                height={60}
                className="h-[60px] w-auto object-contain"
              />
            </Link>
            <p className="text-white/70 text-sm leading-relaxed">
              With over 11 years of experience, we deliver honest and transparent real estate guidance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/services", label: "Our Services" },
                { href: "/testimonials", label: "Testimonials" },
                { href: "/contact", label: "Contact Us" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-[#d4a853] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Our Services</h3>
            <ul className="space-y-3">
              {[
                "Property Buying",
                "Property Selling",
                "Rental Services",
                "Land Acquisition",
                "Joint Ventures",
              ].map((service) => (
                <li key={service}>
                  <span className="text-white/70 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#d4a853] flex-shrink-0 mt-0.5" />
                <span className="text-white/70 text-sm">
                  Bangalore, Karnataka
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#d4a853] flex-shrink-0" />
                <a href="tel:+919632991278" className="text-white/70 hover:text-[#d4a853] transition-colors text-sm">
                  +91 96329 91278
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#d4a853] flex-shrink-0" />
                <a href="mailto:dharamrealtysolutions@gmail.com" className="text-white/70 hover:text-[#d4a853] transition-colors text-sm">
                  dharamrealtysolutions@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#d4a853] flex-shrink-0" />
                <span className="text-white/70 text-sm">
                  Mon - Sat: 9:00 AM - 7:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#1e3a68]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm">
              © {new Date().getFullYear()} Dharam Realty Solution. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="text-white/50 hover:text-[#d4a853] transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-white/50 hover:text-[#d4a853] transition-colors text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
