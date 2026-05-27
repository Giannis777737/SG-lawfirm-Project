import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import useDocumentTitle from "@/hooks/useDocumentTitle";
import MetaTags from "@/components/MetaTags";

const PrivacyPolicyPage = () => {
  useDocumentTitle("Privacy Policy");
  return (
    <div className="min-h-screen bg-background">
      <MetaTags
        title="Privacy Policy | Selekos-Gouskou & Co Law Offices"
        description="Privacy Policy of Selekos-Gouskou & Co Law Offices: how we collect, use, and safeguard your personal data in compliance with the GDPR."
      />
      <Navbar />
      <main className="pt-28 sm:pt-36 md:pt-48">
        <section className="editorial-section">
          <div className="editorial-container">
            <p className="editorial-label">Legal</p>
            <h1 className="editorial-heading mb-12">Privacy Policy</h1>

            <div className="max-w-3xl flex flex-col gap-8">
              <p className="font-body text-base text-muted-foreground">
                Selekos-Gouskou & Co Law Offices (“we”, “our”, “us”) is committed to protecting your personal data and respecting your privacy.
              </p>

              <p className="font-body text-base text-muted-foreground">
                This Privacy Policy explains how we collect, use, store, and safeguard your information when you interact with our website and when we provide our legal services.
              </p>

              <p className="font-body text-base text-muted-foreground">
                We comply with the General Data Protection Regulation (EU) 2016/679 (“GDPR”), Greek Law 4624/2019, and the professional obligations set by the Hellenic Bar Association.
              </p>

              <div>
                <h2 className="font-heading text-2xl text-foreground mb-4">1. Data Controller</h2>
                <p className="editorial-body">Selekos-Gouskou &amp; Co Law Offices</p>
                <p className="editorial-body">Skoufa 5-7, Athens, 10673, Attica</p>
                <p className="editorial-body">Tel: +30 210 72 56 523</p>
                <p className="editorial-body">
                  Email:{" "}
                  <a href="mailto:info@selekos-gouskou.gr" className="text-foreground underline">
                    info@selekos-gouskou.gr
                  </a>
                </p>
                <p className="editorial-body mt-2">
                  If you have any questions about this Privacy Policy or our data protection practices, please contact us at the above details.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-2xl text-foreground mb-4">2. Personal Data We Collect</h2>
                <p className="editorial-body">
                  You are not required to provide us with your personal data to access any area of our website.
                </p>
                <ul className="list-disc list-inside flex flex-col gap-2 ml-4 mt-3">
                  <li className="font-body text-base text-muted-foreground">
                    In the course of providing legal services, or when you contact us for legal advice, apply for employment, or request information about our website, we may collect and process personal data from you, including the following: Name, address, telephone number, and email address.
                  </li>
                  <li className="font-body text-base text-muted-foreground">
                    Information you provide when contacting us via forms, email, phone, or in person.
                  </li>
                  <li className="font-body text-base text-muted-foreground">
                    Documents and details relating to your legal matter.
                  </li>
                  <li className="font-body text-base text-muted-foreground">
                    Billing and payment details.
                  </li>
                  <li className="font-body text-base text-muted-foreground">
                    Any other information relating to you.
                  </li>
                </ul>
                <p className="editorial-body mt-3">
                  Technical information collected automatically, such as IP address, browser type, operating system, device information, website usage data through cookies (please see our Cookies Policy).
                </p>
                <p className="editorial-body mt-3">
                  Sensitive personal data (such as health data, criminal records, or other categories defined under Art. 9 GDPR) when necessary for legal claims, compliance with legal obligations, or in connection with the legal services we provide.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-2xl text-foreground mb-4">3. Purposes and Legal Basis for Processing</h2>
                <p className="editorial-body">We process your personal data for the following purposes:</p>
                <ul className="list-disc list-inside flex flex-col gap-2 ml-4 mt-3">
                  <li className="font-body text-base text-muted-foreground">
                    Provision of legal services (Art. 6(1)(b) GDPR – performance of a contract).
                  </li>
                  <li className="font-body text-base text-muted-foreground">
                    Compliance with legal and regulatory obligations, including anti-money laundering, accounting, and court requirements (Art. 6(1)(c) GDPR).
                  </li>
                  <li className="font-body text-base text-muted-foreground">
                    Communication and case management during the course of representation.
                  </li>
                  <li className="font-body text-base text-muted-foreground">
                    Website security and analytics (Art. 6(1)(f) GDPR – legitimate interests).
                  </li>
                  <li className="font-body text-base text-muted-foreground">
                    Marketing communications (only with your explicit consent – Art. 6(1)(a) GDPR).
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="font-heading text-2xl text-foreground mb-4">4. Data Retention</h2>
                <p className="editorial-body">
                  We keep personal data only for as long as necessary for the purposes for which it was collected:
                </p>
                <ul className="list-disc list-inside flex flex-col gap-2 ml-4 mt-3">
                  <li className="font-body text-base text-muted-foreground">
                    Legal case files: retained as required by Greek law and Bar Association regulations (usually 5–10 years).
                  </li>
                  <li className="font-body text-base text-muted-foreground">
                    Website contact form submissions: up to 12 months if no contractual relationship is formed.
                  </li>
                  <li className="font-body text-base text-muted-foreground">
                    Data subject to statutory retention obligations: as long as required by applicable legislation.
                  </li>
                </ul>
                <p className="editorial-body mt-3">
                  After expiry of these periods, data is securely deleted or anonymized.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-2xl text-foreground mb-4">5. Data Sharing and Transfers</h2>
                <p className="editorial-body">
                  We will not disclose your personal data outside Selekos-Gouskou & Co Law Offices, except in the following cases:
                </p>
                <ul className="list-disc list-inside flex flex-col gap-2 ml-4 mt-3">
                  <li className="font-body text-base text-muted-foreground">
                    Courts, authorities, or opposing parties, when necessary for legal representation or when required by law.
                  </li>
                  <li className="font-body text-base text-muted-foreground">
                    Third-party service providers (e.g. accountants, IT support, hosting providers, email services, secure storage providers) who support us in delivering our services and are bound by confidentiality and data protection agreements.
                  </li>
                  <li className="font-body text-base text-muted-foreground">
                    Regulatory bodies, when required by law.
                  </li>
                </ul>
                <p className="editorial-body mt-3">
                  We explicitly declare that no personal data is sold or rented.
                </p>
                <p className="editorial-body mt-3">
                  Moreover, no personal data is transferred outside the European Economic Area unless adequate safeguards are in place (e.g., Standard Contractual Clauses).
                </p>
              </div>

              <div>
                <h2 className="font-heading text-2xl text-foreground mb-4">6. Data Security</h2>
                <p className="editorial-body">
                  We implement appropriate technical and organizational measures to protect personal data from unauthorized access, alteration, disclosure, or destruction, including:
                </p>
                <ul className="list-disc list-inside flex flex-col gap-2 ml-4 mt-3">
                  <li className="font-body text-base text-muted-foreground">Encrypted communications where possible.</li>
                  <li className="font-body text-base text-muted-foreground">Restricted access on a need-to-know basis.</li>
                  <li className="font-body text-base text-muted-foreground">Secure storage systems and backups.</li>
                </ul>
              </div>

              <div>
                <h2 className="font-heading text-2xl text-foreground mb-4">7. Your Rights</h2>
                <p className="editorial-body">You have the following rights under the GDPR:</p>
                <ul className="list-disc list-inside flex flex-col gap-2 ml-4 mt-3">
                  <li className="font-body text-base text-muted-foreground">
                    Access – request a copy of your personal data.
                  </li>
                  <li className="font-body text-base text-muted-foreground">
                    Rectification – request correction of inaccurate or incomplete data.
                  </li>
                  <li className="font-body text-base text-muted-foreground">
                    Erasure – request deletion of your data, subject to legal retention obligations.
                  </li>
                  <li className="font-body text-base text-muted-foreground">
                    Restriction – request limitation of processing in certain circumstances.
                  </li>
                  <li className="font-body text-base text-muted-foreground">
                    Portability – request your data in a structured, commonly used and machine-readable format, and have it transmitted to another organization.
                  </li>
                  <li className="font-body text-base text-muted-foreground">
                    Objection – object to processing based on legitimate interests.
                  </li>
                  <li className="font-body text-base text-muted-foreground">
                    Withdraw consent – where processing is based on your consent.
                  </li>
                </ul>
                <p className="editorial-body mt-4">
                  To exercise your rights, please contact us at{" "}
                  <a href="mailto:info@selekos-gouskou.gr" className="text-foreground underline">
                    info@selekos-gouskou.gr
                  </a>
                  .
                </p>
                <p className="editorial-body mt-3">
                  If you consider that Selekos-Gouskou & Co Law Offices violates the applicable data protection laws when processing your personal data, you also have the right to lodge a complaint with the Hellenic Data Protection Authority (
                  <a
                    href="https://www.dpa.gr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground underline"
                  >
                    www.dpa.gr
                  </a>
                  ).
                </p>
              </div>

              <div>
                <h2 className="font-heading text-2xl text-foreground mb-4">8. Cookies</h2>
                <p className="editorial-body">
                  Our website uses cookies to ensure proper functionality and improve user experience.
                </p>
                <p className="editorial-body mt-3">
                  For more information, please see our Cookies Policy.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-2xl text-foreground mb-4">9. Changes to this Policy</h2>
                <p className="editorial-body">
                  We may update this Privacy Policy from time to time.
                </p>
                <p className="editorial-body mt-3">
                  Changes will be posted on this page with a revised “Last updated” date.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-2xl text-foreground mb-4">10. Contact</h2>
                <p className="editorial-body">
                  For any questions or requests regarding this Privacy Policy, please contact:
                </p>
                <p className="editorial-body mt-3">Selekos-Gouskou & Co Law Offices</p>
                <p className="editorial-body">Skoufa 5-7, Athens, 10673, Attica</p>
                <p className="editorial-body">
                  Email:{" "}
                  <a href="mailto:info@selekos-gouskou.gr" className="text-foreground underline">
                    info@selekos-gouskou.gr
                  </a>
                </p>
                <p className="editorial-body">Tel: +30 210 72 56 523</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;
