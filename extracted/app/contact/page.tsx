"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("https://formspree.io/f/xkokljoy", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", phone: "", email: "", message: "" });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-[#0a1628]">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white font-serif mb-6">
              Contact <span className="text-[#c9a84c]">Us</span>
            </h1>
            <p className="text-xl text-gray-300">
              Get in touch with us for any property enquiries
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-[#0d1f3c] rounded-xl p-6 flex items-start gap-4">
                <Phone className="h-6 w-6 text-[#c9a84c] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-white font-bold mb-1">Phone</h3>
                  <p className="text-gray-300">+91 96329 91278</p>
                </div>
              </div>
              <div className="bg-[#0d1f3c] rounded-xl p-6 flex items-start gap-4">
                <MessageCircle className="h-6 w-6 text-[#c9a84c] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-white font-bold mb-1">WhatsApp</h3>
                  <a
                    href="https://wa.me/919632991278"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#c9a84c] hover:underline"
                  >
                    Chat with us on WhatsApp
                  </a>
                </div>
              </div>
              <div className="bg-[#0d1f3c] rounded-xl p-6 flex items-start gap-4">
                <Mail className="h-6 w-6 text-[#c9a84c] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-white font-bold mb-1">Email</h3>
                  <p className="text-gray-300">info@dharamrealtysolutions.com</p>
                </div>
              </div>
              <div className="bg-[#0d1f3c] rounded-xl p-6 flex items-start gap-4">
                <MapPin className="h-6 w-6 text-[#c9a84c] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-white font-bold mb-1">Location</h3>
                  <p className="text-gray-300">Bangalore, Karnataka, India</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-[#0d1f3c] rounded-xl p-8">
              <h2 className="text-2xl font-bold text-white font-serif mb-6">
                Send Us a Message
              </h2>

              {submitted ? (
                <div className="text-center py-12">
                  <div className="text-[#c9a84c] text-5xl mb-4">✓</div>
                  <h3 className="text-white text-xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-gray-300">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="w-full px-4 py-3 rounded-xl bg-[#0a1628] border border-[#1e3a68] text-white placeholder:text-white/40 focus:outline-none focus:border-[#c9a84c]"
                    />
                  </div>
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your Phone Number"
                      className="w-full px-4 py-3 rounded-xl bg-[#0a1628] border border-[#1e3a68] text-white placeholder:text-white/40 focus:outline-none focus:border-[#c9a84c]"
                    />
                  </div>
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      className="w-full px-4 py-3 rounded-xl bg-[#0a1628] border border-[#1e3a68] text-white placeholder:text-white/40 focus:outline-none focus:border-[#c9a84c]"
                    />
                  </div>
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your property requirements..."
                      className="w-full px-4 py-3 rounded-xl bg-[#0a1628] border border-[#1e3a68] text-white placeholder:text-white/40 focus:outline-none focus:border-[#c9a84c] resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#c9a84c] text-[#0a1628] font-bold py-3 rounded-xl hover:bg-[#b8973b] transition-colors disabled:opacity-50"
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
