import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Hop as Home, Building2, Key, TrendingUp, Shield, Users, FileText, Search, Handshake, Phone, MessageCircle } from "lucide-react"

const services = [
  {
    icon: Home,
    title: "Property Buying",
    description: "Find your dream home with our expert guidance. We help you navigate the buying process seamlessly from search to registration.",
    features: [
      "Personalized property search based on your requirements",
      "Verified listings with complete documentation",
      "Site visits and neighborhood insights",
      "Price negotiation support",
      "Legal verification and documentation assistance",
    ],
  },
  {
    icon: Building2,
    title: "Property Selling",
    description: "Get the best value for your property. Our market expertise ensures quick and profitable sales with maximum exposure.",
    features: [
      "Free property valuation and market analysis",
      "Professional photography and listings",
      "Wide marketing reach across platforms",
      "Qualified buyer screening",
      "Complete sale documentation support",
    ],
  },
  {
    icon: Key,
    title: "Rental Services",
    description: "Quality tenants, fair prices. We manage rental properties with complete transparency for both owners and tenants.",
    features: [
      "Tenant verification and background checks",
      "Rental agreement drafting",
      "Fair market rent assessment",
      "Periodic property inspections",
      "Rent collection assistance",
    ],
  },
  {
    icon: TrendingUp,
    title: "Investment Advisory",
    description: "Make smart real estate investments. Our insights help you grow your property portfolio with the right opportunities.",
    features: [
      "Market trend analysis and insights",
      "Investment property identification",
      "ROI projections and analysis",
      "Portfolio diversification guidance",
      "Exit strategy planning",
    ],
  },
  {
    icon: Shield,
    title: "Land Acquisition",
    description: "Securing land for development with complete legal diligence. We help you find and acquire the right land for your projects.",
    features: [
      "Land identification and sourcing",
      "Title verification and due diligence",
      "Legal documentation support",
      "Negotiation assistance",
      "Registration and transfer help",
    ],
  },
  {
    icon: Users,
    title: "Joint Ventures",
    description: "Facilitating partnership-based development for landowners and developers. We bring the right partners together for successful projects.",
    features: [
      "Partner identification and matchmaking",
      "Joint venture structuring",
      "Agreement drafting and negotiation",
      "Project coordination support",
      "Profit sharing arrangements",
    ],
  },
]

const process = [
  {
    icon: Search,
    step: "01",
    title: "Consultation",
    description: "We understand your requirements, budget, and preferences in detail.",
  },
  {
    icon: FileText,
    step: "02",
    title: "Property Search",
    description: "Our team curates the best properties matching your criteria.",
  },
  {
    icon: Home,
    step: "03",
    title: "Site Visits",
    description: "We arrange property visits and provide neighborhood insights.",
  },
  {
    icon: Handshake,
    step: "04",
    title: "Deal Closure",
    description: "We handle negotiations and documentation for smooth closure.",
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#0a1628]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-[#d4a853] text-sm font-semibold tracking-widest uppercase mb-4 block">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-serif mb-6 text-balance">
              Comprehensive Real Estate Solutions
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
              From finding your first home to managing your investment portfolio, 
              we offer end-to-end real estate services tailored to your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-[#0f2140] to-[#0a1628]">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 md:p-12 rounded-3xl bg-[#0a1628] border border-[#1e3a68]"
              >
                <div>
                  <div className="w-16 h-16 bg-[#d4a853]/10 rounded-2xl flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-[#d4a853]" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white font-serif mb-4">
                    {service.title}
                  </h2>
                  <p className="text-white/70 leading-relaxed text-lg">
                    {service.description}
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">What&apos;s Included:</h3>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <div className="w-5 h-5 bg-[#d4a853]/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-2 h-2 bg-[#d4a853] rounded-full" />
                        </div>
                        <span className="text-white/70">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-28 bg-[#0a1628]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-[#d4a853] text-sm font-semibold tracking-widest uppercase mb-4 block">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-serif mb-6">
              How We Work
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto text-lg">
              Our streamlined process ensures a smooth and hassle-free experience for all our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, index) => (
              <div
                key={index}
                className="relative p-8 rounded-2xl bg-gradient-to-br from-[#0f2140] to-[#162d54]/50 border border-[#1e3a68] text-center"
              >
                <div className="text-5xl font-bold text-[#d4a853]/20 absolute top-4 right-4 font-serif">
                  {step.step}
                </div>
                <div className="w-16 h-16 bg-[#d4a853]/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <step.icon className="w-8 h-8 text-[#d4a853]" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 font-serif">
                  {step.title}
                </h3>
                <p className="text-white/60 leading-relaxed">
                  {step.description}
                </p>
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
              Ready to Get Started?
            </h2>
            <p className="text-white/70 text-lg mb-8">
              Contact us today for a free consultation. Our experts are ready to help you 
              with all your real estate needs.
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
