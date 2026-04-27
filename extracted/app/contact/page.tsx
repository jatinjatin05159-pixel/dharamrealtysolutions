"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react"
import { useState } from "react"

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+91 96329 91278"],
    link: "tel:+919632991278",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["dharamrealtysolutions@gmail.com"],
    link: "mailto:dharamrealtysolutions@gmail.com",
  },
  {
    icon: MapPin,
    title: "Location",
    details: ["Bangalore, Karnataka"],
    link: null,
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Monday - Saturday", "9:00 AM - 7:00 PM"],
    link: null,
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
    alert("Thank you for your message! We will get back to you soon.")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <main className="min-h-screen bg-[#0a1628]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-[#d4a853] text-sm font-semibold tracking-widest uppercase mb-4 block">
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-serif mb-6 text-balance">
              Get In Touch With Us
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
              Have questions about buying, selling, or renting property in Bangalore? 
              Our team is here to help you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-gradient-to-b from-[#0f2140] to-[#0a1628]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-[#0a1628] border border-[#1e3a68] text-center"
              >
                <div className="w-14 h-14 bg-[#d4a853]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-7 h-7 text-[#d4a853]" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, detailIndex) => (
                    info.link ? (
                      <a
                        key={detailIndex}
                        href={info.link}
                        className="block text-white/70 hover:text-[#d4a853] transition-colors text-sm"
                      >
                        {detail}
                      </a>
                    ) : (
                      <p key={detailIndex} className="text-white/70 text-sm">
                        {detail}
                      </p>
                    )
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 md:py-28 bg-[#0a1628]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Form */}
            <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-[#0f2140] to-[#162d54]/50 border border-[#1e3a68]">
              <h2 className="text-2xl md:text-3xl font-bold text-white font-serif mb-2">
                Send Us a Message
              </h2>
              <p className="text-white/60 mb-8">
                Fill out the form below and we&apos;ll get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-white text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="w-full px-4 py-3 rounded-xl bg-[#0a1628] border border-[#1e3a68] text-white placeholder:text-white/40 focus:outline-none focus:border-[#d4a853] transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-white text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#0a1628] border border-[#1e3a68] text-white placeholder:text-white/40 focus:outline-none focus:border-[#d4a853] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-white text-sm font-medium mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl bg-[#0a1628] border border-[#1e3a68] text-white placeholder:text-white/40 focus:outline-none focus:border-[#d4a853] transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="interest" className="block text-white text-sm font-medium mb-2">
                      I&apos;m Interested In *
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      required
                      value={formData.interest}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-[#0a1628] border border-[#1e3a68] text-white focus:outline-none focus:border-[#d4a853] transition-colors"
                    >
                      <option value="" className="text-white/40">Select an option</option>
                      <option value="buying">Buying Property</option>
                      <option value="selling">Selling Property</option>
                      <option value="renting">Renting Property</option>
                      <option value="investment">Investment Advisory</option>
                      <option value="management">Property Management</option>
                      <option value="other">Other Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-white text-sm font-medium mb-2">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your requirements..."
                    className="w-full px-4 py-3 rounded-xl bg-[#0a1628] border border-[#1e3a68] text-white placeholder:text-white/40 focus:outline-none focus:border-[#d4a853] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 bg-[#d4a853] hover:bg-[#e5be6a] text-[#0a1628] px-8 py-4 rounded-xl text-base font-semibold transition-colors"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Quick Contact */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white font-serif mb-2">
                  Prefer Quick Contact?
                </h2>
                <p className="text-white/60">
                  Reach out to us directly via phone or WhatsApp for immediate assistance.
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href="tel:+919632991278"
                  className="flex items-center gap-4 p-6 rounded-2xl bg-gradient-to-br from-[#0f2140] to-[#162d54]/50 border border-[#1e3a68] hover:border-[#d4a853]/50 transition-colors group"
                >
                  <div className="w-14 h-14 bg-[#d4a853]/10 rounded-xl flex items-center justify-center group-hover:bg-[#d4a853]/20 transition-colors">
                    <Phone className="w-7 h-7 text-[#d4a853]" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-lg">Call Us Now</div>
                    <div className="text-white/60">+91 96329 91278</div>
                  </div>
                </a>

                <a
                  href="https://wa.me/919632991278"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-6 rounded-2xl bg-gradient-to-br from-green-900/30 to-green-800/20 border border-green-700/30 hover:border-green-500/50 transition-colors group"
                >
                  <div className="w-14 h-14 bg-green-500/10 rounded-xl flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                    <MessageCircle className="w-7 h-7 text-green-500" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-lg">WhatsApp Us</div>
                    <div className="text-white/60">Chat instantly with our team</div>
                  </div>
                </a>

                <a
                  href="mailto:dharamrealtysolutions@gmail.com"
                  className="flex items-center gap-4 p-6 rounded-2xl bg-gradient-to-br from-[#0f2140] to-[#162d54]/50 border border-[#1e3a68] hover:border-[#d4a853]/50 transition-colors group"
                >
                  <div className="w-14 h-14 bg-[#d4a853]/10 rounded-xl flex items-center justify-center group-hover:bg-[#d4a853]/20 transition-colors">
                    <Mail className="w-7 h-7 text-[#d4a853]" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-lg">Email Us</div>
                    <div className="text-white/60">dharamrealtysolutions@gmail.com</div>
                  </div>
                </a>
              </div>

              {/* Location Info */}
              <div className="rounded-2xl bg-gradient-to-br from-[#0f2140] to-[#162d54]/50 border border-[#1e3a68] p-6">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-6 h-6 text-[#d4a853]" />
                  <h3 className="text-lg font-semibold text-white">Our Location</h3>
                </div>
                <div className="rounded-xl bg-[#0a1628] border border-[#1e3a68] flex items-center justify-center p-8">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-[#d4a853]/30 mx-auto mb-3" />
                    <p className="text-white/60 text-sm">
                      Bangalore, Karnataka
                    </p>
                    <p className="text-white/40 text-xs mt-2">
                      Serving all areas across Bangalore
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
