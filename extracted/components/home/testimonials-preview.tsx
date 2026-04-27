import { Star, Quote } from "lucide-react"
import Link from "next/link"

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

export function TestimonialsPreview() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-[#0f2140] to-[#0a1628]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#d4a853] text-sm font-semibold tracking-widest uppercase mb-4 block">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-serif mb-6 text-balance">
            What Our Clients Say
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Don&apos;t just take our word for it. Here&apos;s what our satisfied clients 
            have to say about their experience with Dharam Realty Solution.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-[#0a1628] border border-[#1e3a68] relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6">
                <Quote className="w-10 h-10 text-[#d4a853]/20" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#d4a853] text-[#d4a853]" />
                ))}
              </div>

              {/* Content */}
              <p className="text-white/80 leading-relaxed mb-6">
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

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/testimonials"
            className="inline-flex items-center gap-2 text-[#d4a853] hover:text-[#e5be6a] font-semibold transition-colors"
          >
            Read More Reviews
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
