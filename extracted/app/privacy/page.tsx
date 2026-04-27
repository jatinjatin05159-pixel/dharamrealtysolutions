import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#0a1628]">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white font-serif mb-4">
              Privacy Policy
            </h1>
            <p className="text-white/60">Effective Date: 1st May 2026</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8 text-white/80 leading-relaxed">

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white font-serif">1. Our Commitment to Privacy</h2>
              <p>
                At Dharam Realty Solution, we value the trust you place in us when you share your personal information. Whether you are exploring our services, submitting an enquiry, or simply browsing our website, we are committed to handling your information responsibly and in accordance with applicable Indian privacy laws, including the Digital Personal Data Protection Act, 2023.
              </p>
              <p>
                By using this website, you agree to the terms outlined in this Privacy Policy. We reserve the right to update this policy periodically, and we encourage you to review it from time to time.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white font-serif">2. Information We Collect</h2>
              <p>
                We collect personal information only when necessary to respond to your enquiries or provide our services. This may include:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>Your name, phone number, and email address submitted through our contact form</li>
                <li>Details about the type of property you are looking for</li>
                <li>Technical data such as your IP address, browser type, and pages visited, collected automatically to improve website performance</li>
              </ul>
              <p>
                We do not collect sensitive financial information through this website.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white font-serif">3. How We Use Your Information</h2>
              <p>
                The information you provide is used solely to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>Respond to your property enquiries personally</li>
                <li>Understand your requirements and connect you with suitable options</li>
                <li>Improve our website and services</li>
                <li>Send relevant updates, only if you have consented</li>
              </ul>
              <p>
                We do not sell, rent, or share your personal information with third parties for marketing purposes.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white font-serif">4. Data Security and Retention</h2>
              <p>
                We take reasonable steps to protect your information from unauthorised access or misuse. Your data is retained only for as long as necessary to fulfil the purpose for which it was collected, after which it is securely deleted.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white font-serif">5. Your Rights</h2>
              <p>
                You have the right to request access to the information we hold about you, or to request corrections if it is inaccurate. To exercise these rights, please contact us directly using the details on our Contact page.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white font-serif">6. Third Party Links</h2>
              <p>
                Our website may contain links to external websites. We are not responsible for the privacy practices of those sites and recommend reviewing their policies before sharing any information.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white font-serif">7. Children's Privacy</h2>
              <p>
                Our services are intended for individuals aged 18 and above. We do not knowingly collect information from minors.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white font-serif">8. Governing Law</h2>
              <p>
                This Privacy Policy is governed by the laws of India. Any disputes shall be subject to the jurisdiction of the courts in Bangalore, Karnataka.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white font-serif">9. Contact</h2>
              <p>
                For any privacy related questions, please reach out to us through the Contact page on this website.
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
