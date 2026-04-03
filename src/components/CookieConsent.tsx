import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

/**
 * Blocks or unblocks tracking scripts based on consent.
 * When analytics scripts are added later, they should be inserted
 * with `type="text/plain" data-cookie-consent="analytics"` so they
 * are only activated when consent is given.
 */
const manageTrackingScripts = (consent: "accepted" | "rejected") => {
  const scripts = document.querySelectorAll<HTMLScriptElement>(
    'script[data-cookie-consent="analytics"]'
  );

  scripts.forEach((script) => {
    if (consent === "accepted" && script.type === "text/plain") {
      const newScript = document.createElement("script");
      newScript.textContent = script.textContent;
      if (script.src) newScript.src = script.src;
      newScript.dataset.cookieConsent = "analytics";
      script.parentNode?.replaceChild(newScript, script);
    }
  });

  // Dispatch a custom event so other parts of the app can react
  window.dispatchEvent(
    new CustomEvent("cookie-consent-change", { detail: { consent } })
  );
};

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setVisible(true);
    } else {
      manageTrackingScripts(consent as "accepted" | "rejected");
    }
  }, []);

  // Listen for reset events (e.g. from "Manage Cookies" link)
  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      if (detail.consent === null) {
        setVisible(true);
      }
    };
    window.addEventListener("cookie-consent-change", handler);
    return () => window.removeEventListener("cookie-consent-change", handler);
  }, []);

  useEffect(() => {
    if (visible && bannerRef.current) {
      const firstButton = bannerRef.current.querySelector("button");
      firstButton?.focus();
    }
  }, [visible]);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    manageTrackingScripts("accepted");
    setVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookie-consent", "rejected");
    manageTrackingScripts("rejected");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      ref={bannerRef}
      className="fixed bottom-0 left-0 right-0 z-50 p-3 sm:p-4 md:p-8 pb-[calc(0.75rem+env(safe-area-inset-bottom))] sm:pb-[calc(1rem+env(safe-area-inset-bottom))] md:pb-[calc(2rem+env(safe-area-inset-bottom))]"
      role="dialog"
      aria-label="Cookie consent"
      aria-describedby="cookie-desc"
    >
      <div className="editorial-container">
        <div className="bg-card border border-border p-5 sm:p-8 md:p-10 max-w-2xl ml-auto shadow-lg">
          <h3 className="font-heading text-xl text-foreground mb-3">
            We respect your privacy
          </h3>
          <p id="cookie-desc" className="font-body text-sm text-muted-foreground leading-relaxed mb-6">
            We use cookies to ensure the proper functioning of our website and,
            with your consent, for analytics and enhanced features. For more
            information, see our{" "}
            <Link to="/cookie-policy" className="text-foreground underline">
              Cookie Policy
            </Link>{" "}
            and{" "}
            <Link to="/privacy-policy" className="text-foreground underline">
              Privacy Policy
            </Link>
            .
          </p>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={handleReject}
              className="font-body text-sm uppercase tracking-widest border border-border px-6 py-3 text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              Reject All
            </button>
            <button
              onClick={handleAccept}
              className="editorial-btn"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
