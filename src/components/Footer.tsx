import { Link } from "react-router-dom";
import { useCookieConsent } from "@/hooks/useCookieConsent";

const Footer = () => {
  const { resetConsent } = useCookieConsent();

  return (
    <footer className="bg-navy py-16" role="contentinfo">
      <div className="editorial-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-heading text-2xl font-semibold text-gold mb-4">
              Selekos Gouskou
            </h3>
            <address className="font-body text-sm font-medium text-gold-muted leading-relaxed not-italic">
              Selekos-Gouskou &amp; Co Law Offices
              <br />
              Skoufa 5-7, Athens, 10673
              <br />
              Attica, Greece
            </address>
            <p className="font-body text-sm font-medium text-gold-muted mt-3">
              <a href="mailto:info@selekos-gouskou.gr" className="hover:text-gold transition-colors duration-300">
                info@selekos-gouskou.gr
              </a>
            </p>
          </div>

          <div>
            <h4 className="font-body text-xs font-semibold uppercase tracking-widest text-gold-muted mb-4">
              Navigation
            </h4>
            <nav aria-label="Footer navigation">
              <ul className="flex flex-col gap-3" role="list">
                <li>
                  <a href="/#about-us" className="font-body text-sm font-medium text-gold-muted hover:text-gold transition-colors duration-300">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/#areas-of-expertise" className="font-body text-sm font-medium text-gold-muted hover:text-gold transition-colors duration-300">
                    Our Expertise
                  </a>
                </li>
                <li>
                  <Link to="/our-people" className="font-body text-sm font-medium text-gold-muted hover:text-gold transition-colors duration-300">
                    Our People
                  </Link>
                </li>
                <li>
                  <a href="/#news" className="font-body text-sm font-medium text-gold-muted hover:text-gold transition-colors duration-300">
                    News &amp; Publications
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div>
            <h4 className="font-body text-xs font-semibold uppercase tracking-widest text-gold-muted mb-4">
              Legal
            </h4>
            <nav aria-label="Legal pages">
              <ul className="flex flex-col gap-3" role="list">
                <li>
                  <Link to="/privacy-policy" className="font-body text-sm font-medium text-gold-muted hover:text-gold transition-colors duration-300">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/cookie-policy" className="font-body text-sm font-medium text-gold-muted hover:text-gold transition-colors duration-300">
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <button
                    onClick={resetConsent}
                    className="font-body text-sm font-medium text-gold-muted hover:text-gold transition-colors duration-300 text-left"
                  >
                    Manage Cookies
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="border-t border-navy-light mt-16 pt-8">
          <p className="font-body text-xs font-medium text-gold-muted">
            © {new Date().getFullYear()} Selekos-Gouskou &amp; Co Law Offices. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
