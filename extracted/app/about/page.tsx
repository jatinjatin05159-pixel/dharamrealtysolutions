import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Award, Users, Target, Heart, CheckCircle } from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "Client First",
    description: "Your satisfaction is our top priority. We go above and beyond to ensure your real estate journey is seamless.",
  },
  {
    icon: Target,
    title: "Integrity",
    description: "We believe in transparent dealings and honest advice. What we promise, we deliver.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "With 11+ years of experience, we bring unmatched expertise to every transaction.",
  },
  {
    icon: Users,
    title: "Relationships",
    description: "We build lasting relationships with our clients, not just transactions.",
  },
]

const highlights = [
  "11+ years of founder experience",
  "Honest and transparent guidance",
  "Covering all of Bangalore",
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0a1628]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-[#d4a853] text-sm font-semibold tracking-widest uppercase mb-4 block">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-serif mb-6 text-balance">
              Your Trusted Partner in Bangalore Real Estate
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
              A new company backed by over 11 years of founder experience in Bangalore's real estate market.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-[#0f2140] to-[#0a1628]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="text-[#d4a853] text-sm font-semibold tracking-widest uppercase mb-4 block">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white font-serif mb-6">
                New Company, Proven Experience
              </h2>
              <div className="space-y-4 text-white/70 leading-relaxed">
                <p>
                  Dharam Realty Solution was founded in 2026. While the company is new, our founder
                  brings over 11 years of personal experience in Bangalore&apos;s real estate market —
                  having worked across residential, commercial, and land transactions across the city.
                </p>
                <p>
                  Our founder, with deep roots in Bangalore and extensive knowledge of the local
                  market, envisioned a real estate company that would prioritize client relationships
                  over quick profits. This vision continues to guide everything we do today.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-[#162d54] to-[#0f2140] border border-[#1e3a68] p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-7xl md:text-8xl font-bold text-[#d4a853] font-serif mb-4">11+</div>
                  <div className="text-2xl text-white font-semibold mb-2">Years of Excellence</div>
                  <div className="text-white/60">Founded in 2026</div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#d4a853]/10 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 md:py-28 bg-[#0a1628]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-[#d4a853] text-sm font-semibold tracking-widest uppercase mb-4 block">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-serif mb-6">
              What Drives Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-gradient-to-br from-[#0f2140] to-[#162d54]/50 border border-[#1e3a68] text-center"
              >
                <div className="w-16 h-16 bg-[#d4a853]/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-[#d4a853]" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 font-serif">
                  {value.title}
                </h3>
                <p className="text-white/60 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-[#0f2140] to-[#0a1628]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="text-[#d4a853] text-sm font-semibold tracking-widest uppercase mb-4 block">
                Why Choose Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white font-serif mb-8">
                The Dharam Realty Difference
              </h2>
              <div className="space-y-4">
                {[
                  "Deep local knowledge of Bangalore's neighborhoods",
                  "Transparent pricing with no hidden charges",
                  "11+ years of founder experience",
                  "End-to-end support from search to registration",
                  "Honest and transparent guidance",
                  "Covering all of Bangalore",
                ].map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#d4a853] flex-shrink-0 mt-0.5" />
                    <span className="text-white/80">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-xl bg-[#0a1628]/50 border border-[#1e3a68]/50"
                >
                  <CheckCircle className="w-6 h-6 text-[#d4a853] flex-shrink-0" />
                  <div className="text-white/80">{highlight}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
