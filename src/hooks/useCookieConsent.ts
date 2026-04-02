import { useState, useEffect, useCallback } from "react";

type ConsentStatus = "accepted" | "rejected" | null;

/**
 * Shared hook for reading & updating cookie consent state.
 * Components can subscribe to changes via the custom event.
 */
export function useCookieConsent() {
  const [consent, setConsent] = useState<ConsentStatus>(() => {
    const stored = localStorage.getItem("cookie-consent");
    return stored as ConsentStatus;
  });

  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      setConsent(detail.consent);
    };
    window.addEventListener("cookie-consent-change", handler);
    return () => window.removeEventListener("cookie-consent-change", handler);
  }, []);

  const resetConsent = useCallback(() => {
    localStorage.removeItem("cookie-consent");
    setConsent(null);
    window.dispatchEvent(
      new CustomEvent("cookie-consent-change", { detail: { consent: null } })
    );
  }, []);

  return { consent, resetConsent };
}
