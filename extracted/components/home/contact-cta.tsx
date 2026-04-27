import { Phone, MessageCircle } from "lucide-react"
import Link from "next/link"

export function ContactCTA() {
  return (
    <section className="py-20 md:py-28 bg-[#0a1628]">
      <div className="container mx-auto px-4">
        <div className="relative rounded-3xl bg-gradient-to-br from-[#0f2140] via-[#162d54] to-[#0f2140] border border-[#1e3a68] overflow-hidden">
          {/* Background Decoration */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[#d4a853]/5 blur-3xl rounded-full transform translate-x-1/2" />
          
          <div className="relative z-10 p-8 md:p-12 lg:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div>
                <span className="text-[#d4a853] text-sm font-semibold tracking-widest uppercase mb-4 block">
                  Get In Touch
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-serif mb-6 text-balance">
                  Ready to Find Your Dream Property?
                </h2>
                <p className="text-white/70 text-lg mb-8 leading-relaxed">
                  Whether you&apos;re looking to buy, sell, or rent, our team of experts 
                  is here to guide you every step of the way. Get in touch today 
                  for a free consultation.
                </p>

                {/* Contact Info */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-[#d4a853]/10 rounded-xl flex items-center justify-center">
                    <Phone className="w-5 h-5 text-[#d4a853]" />
                  </div>
                  <div>
                    <div className="text-white/50 text-sm">Call Us</div>
                    <a href="tel:+919632991278" className="text-white font-semibold hover:text-[#d4a853] transition-colors">
                      +91 96329 91278
                    </a>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="tel:+919632991278"
                    className="flex items-center justify-center gap-3 bg-[#d4a853] hover:bg-[#e5be6a] text-[#0a1628] px-8 py-4 rounded-xl text-base font-semibold transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    Call Now
                  </a>
                  <a
                    href="https://wa.me/919632991278"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 bg-green-600 hover:bg-green-500 text-white px-8 py-4 rounded-xl text-base font-semibold transition-colors"
                  >
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp Us
                  </a>
                </div>
              </div>

              {/* Contact Form Preview */}
              <div className="bg-[#0a1628]/80 backdrop-blur rounded-2xl p-8 border border-[#1e3a68]">
                <h3 className="text-xl font-semibold text-white mb-6 font-serif">
                  Send Us a Message
                </h3>
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 rounded-xl bg-[#162d54] border border-[#1e3a68] text-white placeholder:text-white/40 focus:outline-none focus:border-[#d4a853] transition-colors"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full px-4 py-3 rounded-xl bg-[#162d54] border border-[#1e3a68] text-white placeholder:text-white/40 focus:outline-none focus:border-[#d4a853] transition-colors"
                    />
                  </div>
                  <div>
                    <select className="w-full px-4 py-3 rounded-xl bg-[#162d54] border border-[#1e3a68] text-white/40 focus:outline-none focus:border-[#d4a853] transition-colors">
                      <option value="">I&apos;m interested in...</option>
                      <option value="buying">Buying Property</option>
                      <option value="selling">Selling Property</option>
                      <option value="renting">Renting Property</option>
                      <option value="other">Other Inquiry</option>
                    </select>
                  </div>
                  <div>
                    <textarea
                      placeholder="Your Message"
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl bg-[#162d54] border border-[#1e3a68] text-white placeholder:text-white/40 focus:outline-none focus:border-[#d4a853] transition-colors resize-none"
                    />
                  </div>
                  <Link
                    href="/contact"
                    className="w-full block text-center bg-[#d4a853] hover:bg-[#e5be6a] text-[#0a1628] px-6 py-4 rounded-xl font-semibold transition-colors"
                  >
                    Send Message
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
