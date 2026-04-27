import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Star, Quote, Phone, MessageCircle } from "lucide-react"

const testimonials = [
  {
    name: "Bangalore Resident",
    content: "I've worked with a few realtors before, but this was honestly the first time I felt like someone genuinely cared about what I wanted — not just closing a deal. They were patient, never rushed me, and even pointed out things I might've missed.",
    rating: 5,
  },
  {
    name: "First-Time Home Buyer",
    content: "As a first-time buyer, I had no idea what I was doing. I asked a million questions but they never made me feel that way. They explained everything clearly and made the whole experience way less stressful than I expected.",
    rating: 5,
  },
  {
    name: "Property Investor",
    content: "What stood out to me was the honesty. There were a couple of properties I liked, but they actually advised me against them because of long-term issues. That level of transparency is rare.",
    rating: 5,
  },
]

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-[#0a1628]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-[#d4a853] text-sm font-semibold tracking-widest uppercase mb-4 block">
              Testimonials
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-serif mb-6 text-balance">
              What Our Clients Say
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
              Don&apos;t just take our word for it. Here&apos;s what our satisfied clients 
              have to say about their experience with Dharam Realty Solution.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 md:py-28 bg-[#0a1628]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-gradient-to-br from-[#0f2140] to-[#162d54]/50 border border-[#1e3a68] relative"
              >
                {/* Quote Icon */}
                <div className="absolute top-6 right-6">
                  <Quote className="w-10 h-10 text-[#d4a853]/20" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#d4a853] text-[#d4a853]" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-white/80 leading-relaxed mb-6 text-sm">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#d4a853] to-[#e5be6a] rounded-full flex items-center justify-center">
                    <span className="text-[#0a1628] font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">{testimonial.name}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-[#0f2140] to-[#0a1628]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white font-serif mb-6">
              Ready to Start Your Real Estate Journey?
            </h2>
            <p className="text-white/70 text-lg mb-8">
              Experience honest and transparent real estate guidance. 
              Contact us today for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+919632991278"
                className="flex items-center gap-3 bg-[#d4a853] hover:bg-[#e5be6a] text-[#0a1628] px-8 py-4 rounded-xl text-base font-semibold transition-colors w-full sm:w-auto justify-center"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
              <a
                href="https://wa.me/919632991278"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-green-600 hover:bg-green-500 text-white px-8 py-4 rounded-xl text-base font-semibold transition-colors w-full sm:w-auto justify-center"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
