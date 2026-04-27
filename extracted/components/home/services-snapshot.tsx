import { Hop as Home, Building2, Key, TrendingUp, Shield, Users } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Home,
    title: "Property Buying",
    description: "Find your dream home with our expert guidance. We help you navigate the buying process seamlessly.",
  },
  {
    icon: Building2,
    title: "Property Selling",
    description: "Get the best value for your property. Our market expertise ensures quick and profitable sales.",
  },
  {
    icon: Key,
    title: "Rental Services",
    description: "Quality tenants, fair prices. We manage rental properties with complete transparency.",
  },
  {
    icon: TrendingUp,
    title: "Investment Advisory",
    description: "Make smart real estate investments. Our insights help you grow your property portfolio.",
  },
  {
    icon: Shield,
    title: "Land Acquisition",
    description: "Securing land for development with complete legal diligence.",
  },
  {
    icon: Users,
    title: "Joint Ventures",
    description: "Facilitating partnership-based development for landowners and developers.",
  },
]

export function ServicesSnapshot() {
  return (
    <section className="py-20 md:py-28 bg-[#0a1628]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#d4a853] text-sm font-semibold tracking-widest uppercase mb-4 block">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-serif mb-6 text-balance">
            Comprehensive Real Estate Solutions
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            From finding your first home to managing your property portfolio, 
            we offer end-to-end real estate services tailored to your needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-gradient-to-br from-[#0f2140] to-[#162d54]/50 border border-[#1e3a68] hover:border-[#d4a853]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#d4a853]/5"
            >
              <div className="w-14 h-14 bg-[#d4a853]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#d4a853]/20 transition-colors">
                <service.icon className="w-7 h-7 text-[#d4a853]" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 font-serif">
                {service.title}
              </h3>
              <p className="text-white/60 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-[#d4a853] hover:text-[#e5be6a] font-semibold transition-colors"
          >
            View All Services
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
