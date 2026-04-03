import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import useDocumentTitle from "@/hooks/useDocumentTitle";

const PrivacyPolicyPage = () => {
  useDocumentTitle("Privacy Policy");
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-28 sm:pt-36 md:pt-48">
        <section className="editorial-section">
          <div className="editorial-container">
            <p className="editorial-label">Legal</p>
            <h1 className="editorial-heading mb-12">Privacy Policy</h1>

            <div className="max-w-3xl flex flex-col gap-8">
              <p className="font-body text-xs text-muted-foreground">
                Last updated: March 12, 2026
              </p>

              <div>
                <h2 className="font-heading text-2xl text-foreground mb-4">
                  1. Data Controller
                </h2>
                <p className="editorial-body">
                  Selekos Gouskou & Co Law Offices ("we", "us", "our"), located
                  at Skoufa 5-7, Athens, 10673, Attica, Greece, is the data
                  controller responsible for processing your personal data in
                  accordance with the General Data Protection Regulation (EU)
                  2016/679 ("GDPR") and Greek Law 4624/2019.
                </p>
                <p className="editorial-body mt-2">
                  Contact email:{" "}
                  <a
                    href="mailto:info@selekos-gouskou.gr"
                    className="text-foreground underline"
                  >
                    info@selekos-gouskou.gr
                  </a>
                </p>
              </div>

              <div>
                <h2 className="font-heading text-2xl text-foreground mb-4">
                  2. Personal Data We Collect
                </h2>
                <ul className="list-disc list-inside flex flex-col gap-2 ml-4">
                  <li className="font-body text-base text-muted-foreground">
                    Identity data: name, title, professional capacity
                  </li>
                  <li className="font-body text-base text-muted-foreground">
                    Contact data: email address, phone number, postal address
                  </li>
                  <li className="font-body text-base text-muted-foreground">
                    Technical data: IP address, browser type, device information,
                    cookies
                  </li>
                  <li className="font-body text-base text-muted-foreground">
                    Usage data: pages visited, time spent, navigation patterns
                  </li>
                  <li className="font-body text-base text-muted-foreground">
                    Communication data: any information you provide via contact
                    forms or email
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="font-heading text-2xl text-foreground mb-4">
                  3. Legal Basis for Processing
                </h2>
                <ul className="list-disc list-inside flex flex-col gap-2 ml-4">
                  <li className="font-body text-base text-muted-foreground">
                    <strong>Consent</strong> (Art. 6(1)(a)): For marketing
                    communications and non-essential cookies
                  </li>
                  <li className="font-body text-base text-muted-foreground">
                    <strong>Contractual necessity</strong> (Art. 6(1)(b)): To
                    provide legal services you have requested
                  </li>
                  <li className="font-body text-base text-muted-foreground">
                    <strong>Legal obligation</strong> (Art. 6(1)(c)): To comply
                    with applicable laws and regulations
                  </li>
                  <li className="font-body text-base text-muted-foreground">
                    <strong>Legitimate interest</strong> (Art. 6(1)(f)): For
                    website analytics and security, where balanced against your
                    rights
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="font-heading text-2xl text-foreground mb-4">
                  4. How We Use Your Data
                </h2>
                <ul className="list-disc list-inside flex flex-col gap-2 ml-4">
                  <li className="font-body text-base text-muted-foreground">
                    To respond to your inquiries and provide legal services
                  </li>
                  <li className="font-body text-base text-muted-foreground">
                    To operate, maintain, and improve our website
                  </li>
                  <li className="font-body text-base text-muted-foreground">
                    To send newsletters or updates (only with your explicit
                    consent)
                  </li>
                  <li className="font-body text-base text-muted-foreground">
                    To comply with legal and regulatory obligations
                  </li>
                  <li className="font-body text-base text-muted-foreground">
                    To protect our legitimate business interests
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="font-heading text-2xl text-foreground mb-4">
                  5. Data Sharing & Transfers
                </h2>
                <p className="editorial-body">
                  We do not sell your personal data. We may share data with
                  trusted third-party service providers who process data on our
                  behalf under Data Processing Agreements (DPAs) compliant with
                  Article 28 GDPR. These providers include:
                </p>
                <ul className="list-disc list-inside flex flex-col gap-2 ml-4 mt-3">
                  <li className="font-body text-base text-muted-foreground">
                    <strong>Email delivery services</strong> (e.g., EmailJS) — used solely to forward contact form submissions to our office
                  </li>
                  <li className="font-body text-base text-muted-foreground">
                    <strong>Hosting & database providers</strong> — used to securely store and serve website data
                  </li>
                  <li className="font-body text-base text-muted-foreground">
                    <strong>Embedded map services</strong> (Google Maps) — loaded only with your explicit consent
                  </li>
                </ul>
                <p className="editorial-body mt-3">
                  If data is transferred outside the EEA, we
                  ensure adequate safeguards are in place, such as Standard
                  Contractual Clauses (SCCs) approved by the European Commission.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-2xl text-foreground mb-4">
                  6. Data Retention
                </h2>
                <p className="editorial-body">
                  We retain personal data only for as long as necessary to
                  fulfill the purposes for which it was collected, or as required
                  by law. Client data related to legal matters is retained in
                  accordance with Greek Bar Association regulations and
                  applicable statutes of limitations.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-2xl text-foreground mb-4">
                  7. Your Rights Under GDPR
                </h2>
                <ul className="list-disc list-inside flex flex-col gap-2 ml-4">
                  <li className="font-body text-base text-muted-foreground">
                    <strong>Access</strong> your personal data (Art. 15)
                  </li>
                  <li className="font-body text-base text-muted-foreground">
                    <strong>Rectify</strong> inaccurate data (Art. 16)
                  </li>
                  <li className="font-body text-base text-muted-foreground">
                    <strong>Erase</strong> your data ("right to be forgotten")
                    (Art. 17)
                  </li>
                  <li className="font-body text-base text-muted-foreground">
                    <strong>Restrict</strong> processing (Art. 18)
                  </li>
                  <li className="font-body text-base text-muted-foreground">
                    <strong>Data portability</strong> (Art. 20)
                  </li>
                  <li className="font-body text-base text-muted-foreground">
                    <strong>Object</strong> to processing (Art. 21)
                  </li>
                  <li className="font-body text-base text-muted-foreground">
                    <strong>Withdraw consent</strong> at any time (Art. 7(3))
                  </li>
                </ul>
                <p className="editorial-body mt-4">
                  To exercise your rights, contact us at{" "}
                  <a
                    href="mailto:info@selekos-gouskou.gr"
                    className="text-foreground underline"
                  >
                    info@selekos-gouskou.gr
                  </a>
                  . We will respond within 30 days.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-2xl text-foreground mb-4">
                  8. Right to Lodge a Complaint
                </h2>
                <p className="editorial-body">
                  You have the right to lodge a complaint with the Hellenic Data
                  Protection Authority (HDPA):{" "}
                  <a
                    href="https://www.dpa.gr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground underline"
                  >
                    www.dpa.gr
                  </a>
                </p>
              </div>

              <div>
                <h2 className="font-heading text-2xl text-foreground mb-4">
                  9. Security Measures
                </h2>
                <p className="editorial-body">
                  We implement appropriate technical and organisational measures
                  to protect your personal data against unauthorised access,
                  alteration, disclosure, or destruction, in accordance with
                  Article 32 of the GDPR.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-2xl text-foreground mb-4">
                  10. Changes to This Policy
                </h2>
                <p className="editorial-body">
                  We may update this Privacy Policy periodically. Changes will be
                  posted on this page with an updated revision date. We encourage
                  you to review this policy regularly.
                </p>
              </div>
            </div>

            <div className="mt-16">
              <Link to="/" className="editorial-link">
                <span>←</span> Back to home page
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;
