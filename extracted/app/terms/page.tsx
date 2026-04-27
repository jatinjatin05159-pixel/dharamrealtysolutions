import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#0a1628]">
      <Navbar />
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-white font-serif mb-4">
              Terms and Conditions
            </h1>
            <p className="text-[#c9a84c] mb-12">Effective Date: 1st May 2026</p>

            <div className="space-y-10 text-gray-300 leading-relaxed">

              <div>
                <h2 className="text-xl font-bold text-white mb-3">1. Acceptance of Terms</h2>
                <p>By accessing or using the Dharam Realty Solution website, you confirm that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree, please refrain from using this website. By using this site, you also confirm that you are at least 18 years of age.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-white mb-3">2. Nature of Information</h2>
                <p>All content on this website — including property descriptions, service details, and other information — is provided for general informational purposes only. It does not constitute legal, financial, or professional advice of any kind.</p>
                <p className="mt-3">Property details, availability, and pricing are subject to change without notice. Visitors are advised to independently verify all information and consult appropriate professionals before making any property related decisions. Dharam Realty Solution shall not be held liable for any decisions made based solely on information presented on this website.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-white mb-3">3. Our Role as Consultants</h2>
                <p>Dharam Realty Solution operates as a real estate consultancy. We facilitate connections between buyers, sellers, and property owners. We are not a party to any final transaction and are not responsible for outcomes arising from agreements made between clients and property owners.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-white mb-3">4. Website Availability</h2>
                <p>We aim to keep this website accessible at all times, but we do not guarantee uninterrupted availability. We reserve the right to suspend or restrict access for maintenance or security purposes without prior notice.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-white mb-3">5. Intellectual Property</h2>
                <p>All content on this website, including text, images, logo, and design, is the property of Dharam Realty Solution and is protected under applicable Indian intellectual property laws. You may not reproduce, distribute, or use any content without our prior written consent.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-white mb-3">6. Limitation of Liability</h2>
                <p>To the fullest extent permitted by law, Dharam Realty Solution shall not be liable for any direct, indirect, or consequential loss arising from your use of this website or reliance on its content. Use of this website is entirely at your own risk.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-white mb-3">7. Third Party Links</h2>
                <p>This website may contain links to external sites for reference. We do not endorse or take responsibility for the content or practices of any third party websites.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-white mb-3">8. Amendments</h2>
                <p>We reserve the right to update these Terms at any time. Continued use of the website after changes are posted constitutes your acceptance of the revised Terms.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-white mb-3">9. Governing Law</h2>
                <p>These Terms are governed by the laws of India. Any disputes arising from use of this website shall be subject to the exclusive jurisdiction of the courts in Bangalore, Karnataka.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-white mb-3">10. Contact</h2>
                <p>For any questions regarding these Terms, please contact us through the Contact page on this website.</p>
              </div>

            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
