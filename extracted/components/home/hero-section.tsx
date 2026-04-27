import { Phone, MessageCircle } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[#0a1628]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f2140] via-[#0a1628] to-[#162d54] opacity-80" />
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
        {/* Decorative Elements */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#d4a853]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#d4a853]/3 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white font-serif leading-tight mb-6 text-balance">
            Finding the Right Property in{" "}
            <span className="text-[#d4a853]">Bangalore</span>{" "}
            Starts Here
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed text-pretty">
            Whether you&apos;re buying, selling, or renting — we bring expertise, transparency, 
            and personalized service to every real estate journey.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="tel:+919632991278"
              className="group flex items-center gap-3 bg-[#d4a853] hover:bg-[#e5be6a] text-[#0a1628] px-8 py-4 rounded-xl text-base font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#d4a853]/20 w-full sm:w-auto justify-center"
            >
              <Phone className="w-5 h-5 transition-transform group-hover:scale-110" />
              Call Now
            </a>
            <a
              href="https://wa.me/919632991278"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 bg-transparent border-2 border-[#d4a853] text-[#d4a853] hover:bg-[#d4a853] hover:text-[#0a1628] px-8 py-4 rounded-xl text-base font-semibold transition-all duration-300 w-full sm:w-auto justify-center"
            >
              <MessageCircle className="w-5 h-5 transition-transform group-hover:scale-110" />
              WhatsApp Us
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto">
            {[
              { title: "11+ Years", subtitle: "Experience" },
              { title: "All of", subtitle: "Bangalore" },
              { title: "Residential &", subtitle: "Commercial" },
              { title: "Honest &", subtitle: "Transparent" },
            ].map((stat, index) => (
              <div 
                key={index} 
                className="text-center p-4 rounded-xl bg-[#0f2140]/50 border border-[#1e3a68]/50"
              >
                <div className="text-xl md:text-2xl font-bold text-[#d4a853] font-serif mb-1">
                  {stat.title}
                </div>
                <div className="text-sm text-white/60">{stat.subtitle}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a1628] to-transparent" />
    </section>
  )
}
