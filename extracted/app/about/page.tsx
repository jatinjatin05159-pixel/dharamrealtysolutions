import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Award, Target, Heart, CheckCircle } from "lucide-react";

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
    description: "With 11+ years of founder experience, we bring unmatched expertise to every transaction.",
  },
];

const stats = [
  { label: "Years of Founder Experience", value: "11+" },
  { label: "Areas Covered in Bangalore", value: "All" },
  { label: "Founded", value: "2026" },
  { label: "Guidance Style", value: "Honest & Transparent" },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0a1628]">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white font-serif mb-6">
              About <span className="text-[#c9a84c]">Dharam Realty Solution</span>
            </h1>
            <p className="text-xl text-gray-300">
              New Company, Proven Experience
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white font-serif mb-6">
              Our Story
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Dharam Realty Solution was founded in 2026. While the company is new, our founder brings over 11 years of personal experience in Bangalore's real estate market — having worked across residential, commercial, and land transactions across the city.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              We are committed to providing honest, transparent, and personalized real estate guidance to every client — whether you are buying, selling, or investing in property across Bangalore.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#0d1f3c]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#c9a84c] mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white font-serif mb-12 text-center">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((value) => (
              <div key={value.title} className="bg-[#0d1f3c] rounded-xl p-8 text-center">
                <div className="flex justify-center mb-4">
                  <value.icon className="h-10 w-10 text-[#c9a84c]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 bg-[#0d1f3c]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white font-serif mb-8 text-center">
              What We Offer
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                "11+ years of founder experience",
                "Honest and transparent guidance",
                "Covering all of Bangalore",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 bg-[#0a1628] rounded-lg p-4">
                  <CheckCircle className="h-6 w-6 text-[#c9a84c] flex-shrink-0" />
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
