import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import useDocumentTitle from "@/hooks/useDocumentTitle";

const CookiePolicyPage = () => {
  useDocumentTitle("Cookie Policy");
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-28 sm:pt-36 md:pt-48">
        <section className="editorial-section">
          <div className="editorial-container">
            <p className="editorial-label">Legal</p>
            <h1 className="editorial-heading mb-12">Cookie Policy</h1>

            <div className="max-w-3xl flex flex-col gap-8">
              <p className="font-body text-xs text-muted-foreground">
                Last updated: March 12, 2026
              </p>

              <div>
                <h2 className="font-heading text-2xl text-foreground mb-4">
                  1. What Are Cookies
                </h2>
                <p className="editorial-body">
                  Cookies are small text files stored on your device when you
                  visit a website. They help the website remember your
                  preferences and understand how you interact with it. This
                  Cookie Policy explains how Selekos Gouskou & Co Law Offices
                  uses cookies in compliance with the GDPR (EU) 2016/679, the
                  ePrivacy Directive 2002/58/EC, and Greek Law 4624/2019.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-2xl text-foreground mb-4">
                  2. Types of Cookies We Use
                </h2>
                <h3 className="font-heading text-xl text-foreground mb-2">
                  2.1 Strictly Necessary Cookies
                </h3>
                <p className="editorial-body mb-4">
                  These cookies are essential for the website to function
                  properly. They enable basic features such as page navigation
                  and access to secure areas. These cookies do not require
                  consent under the GDPR.
                </p>
                <h3 className="font-heading text-xl text-foreground mb-2">
                  2.2 Analytics Cookies
                </h3>
                <p className="editorial-body mb-4">
                  These cookies help us understand how visitors interact with our
                  website by collecting anonymous usage data. They are only
                  placed with your explicit consent.
                </p>
                <h3 className="font-heading text-xl text-foreground mb-2">
                  2.3 Functional Cookies
                </h3>
                <p className="editorial-body">
                  These cookies remember your preferences (such as language or
                  region) to provide a more personalised experience. They require
                  your consent before being placed.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-2xl text-foreground mb-4">
                  3. Cookie Consent
                </h2>
                <p className="editorial-body">
                  In accordance with the GDPR and the ePrivacy Directive, we
                  request your consent before placing any non-essential cookies.
                  You can manage your preferences at any time through our cookie
                  consent banner or by adjusting your browser settings. Consent
                  is freely given, specific, informed, and unambiguous, in line
                  with Article 7 of the GDPR. You may withdraw your consent at
                  any time without affecting the lawfulness of processing based
                  on consent before its withdrawal.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-2xl text-foreground mb-4">
                  4. Cookies We Use
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full font-body text-sm text-muted-foreground border border-border">
                    <thead>
                      <tr className="border-b border-border bg-muted/30">
                        <th className="text-left px-4 py-3 text-foreground font-semibold">Name</th>
                        <th className="text-left px-4 py-3 text-foreground font-semibold">Type</th>
                        <th className="text-left px-4 py-3 text-foreground font-semibold">Purpose</th>
                        <th className="text-left px-4 py-3 text-foreground font-semibold">Duration</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border">
                        <td className="px-4 py-3"><code className="text-xs">cookie-consent</code></td>
                        <td className="px-4 py-3">Strictly Necessary</td>
                        <td className="px-4 py-3">Stores your cookie consent preference (accepted/rejected)</td>
                        <td className="px-4 py-3">Persistent (until cleared)</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="px-4 py-3"><code className="text-xs">sb-*</code></td>
                        <td className="px-4 py-3">Strictly Necessary</td>
                        <td className="px-4 py-3">Session management for website functionality</td>
                        <td className="px-4 py-3">Session</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="px-4 py-3"><code className="text-xs">NID, CONSENT</code></td>
                        <td className="px-4 py-3">Third-party (Google Maps)</td>
                        <td className="px-4 py-3">Set by Google when the embedded map is loaded (only with your consent)</td>
                        <td className="px-4 py-3">6–12 months</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h2 className="font-heading text-2xl text-foreground mb-4">
                  5. Managing Cookies
                </h2>
                <p className="editorial-body mb-4">
                  You can control and delete cookies through your browser
                  settings. Please note that disabling certain cookies may affect
                  the functionality of this website.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-2xl text-foreground mb-4">
                  6. Third-Party Cookies
                </h2>
                <p className="editorial-body">
                  Some cookies may be placed by third-party services we use
                  (e.g., analytics providers, embedded maps). These third parties
                  have their own privacy and cookie policies. We ensure that any
                  third-party processing is covered by appropriate Data
                  Processing Agreements as required by Article 28 of the GDPR.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-2xl text-foreground mb-4">
                  6. Data Retention
                </h2>
                <p className="editorial-body">
                  Cookie data is retained only for the duration necessary to
                  fulfill its purpose. Session cookies are deleted when you close
                  your browser. Persistent cookies have varying expiration dates,
                  typically no longer than 12 months, after which they are
                  automatically deleted.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-2xl text-foreground mb-4">
                  7. Your Rights
                </h2>
                <p className="editorial-body">
                  Under the GDPR, you have the right to access, rectify, erase,
                  or restrict the processing of your personal data collected
                  through cookies. For full details, please refer to our{" "}
                  <Link
                    to="/privacy-policy"
                    className="text-foreground underline"
                  >
                    Privacy Policy
                  </Link>
                  .
                </p>
              </div>

              <div>
                <h2 className="font-heading text-2xl text-foreground mb-4">
                  8. Changes to This Policy
                </h2>
                <p className="editorial-body">
                  We may update this Cookie Policy from time to time. Any changes
                  will be posted on this page with a revised date. We recommend
                  reviewing this policy periodically.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-2xl text-foreground mb-4">
                  9. Contact
                </h2>
                <p className="editorial-body">
                  For questions about our use of cookies, contact us at{" "}
                  <a
                    href="mailto:info@selekos-gouskou.gr"
                    className="text-foreground underline"
                  >
                    info@selekos-gouskou.gr
                  </a>
                  .
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

export default CookiePolicyPage;
