import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { ServicesSnapshot } from "@/components/home/services-snapshot"
import { TestimonialsPreview } from "@/components/home/testimonials-preview"
import { ContactCTA } from "@/components/home/contact-cta"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0a1628]">
      <Navbar />
      <HeroSection />
      <ServicesSnapshot />
      <TestimonialsPreview />
      <ContactCTA />
      <Footer />
    </main>
  )
}
