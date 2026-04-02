import { useState, useRef, useEffect } from "react";
import AnimatedSection, { AnimatedItem } from "@/components/AnimatedSection";
import { useCookieConsent } from "@/hooks/useCookieConsent";

const ContactSection = () => {
  const [mapLoaded, setMapLoaded] = useState(false);
  const mapRef = useRef<HTMLDivElement>(null);
  const { consent } = useCookieConsent();

  const mapsAllowed = consent === "accepted";

  useEffect(() => {
    if (!mapsAllowed || !mapRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMapLoaded(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    observer.observe(mapRef.current);
    return () => observer.disconnect();
  }, [mapsAllowed]);

  return (
    <section id="contact" className="editorial-section" aria-labelledby="contact-heading">
      <div className="editorial-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <AnimatedSection className="flex flex-col gap-8">
            <AnimatedItem>
              <p className="editorial-label" aria-hidden="true">find us</p>
            </AnimatedItem>

            <AnimatedItem>
              <h2 id="contact-heading" className="editorial-heading-sm">
                Our Office
              </h2>
            </AnimatedItem>

            <AnimatedItem>
              <address className="not-italic flex flex-col gap-2">
                <p className="font-body text-base text-muted-foreground">Skoufa 5-7</p>
                <p className="font-body text-base text-muted-foreground">Athens, 10673</p>
                <p className="font-body text-base text-muted-foreground">Attica, Greece</p>
              </address>
            </AnimatedItem>

            <AnimatedItem>
              <div className="flex flex-col gap-3 pt-2">
                <a
                  href="tel:+302107256523"
                  className="font-body text-base text-foreground hover:text-muted-foreground transition-colors duration-300"
                  aria-label="Call our office at +30 210 72 56 523"
                >
                  +30 210 72 56 523
                </a>
                <a
                  href="mailto:info@selekos-gouskou.gr"
                  className="font-body text-base text-foreground hover:text-muted-foreground transition-colors duration-300"
                >
                  info@selekos-gouskou.gr
                </a>
              </div>
            </AnimatedItem>
          </AnimatedSection>

          <AnimatedSection>
            <AnimatedItem>
              <div ref={mapRef} className="w-full h-[400px] lg:h-[500px] bg-muted">
                {mapsAllowed && mapLoaded ? (
                  <iframe
                    title="Selekos Gouskou & Co Law Offices location on Google Maps"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3145.2!2d23.7358!3d37.9795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1bd3ce79b1a0d%3A0x2c9e5e0f1a3b5c7d!2sSkoufa%205%2C%20Athina%20106%2073%2C%20Greece!5e0!3m2!1sen!2sgr!4v1700000000000"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="grayscale"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center gap-4 p-8 text-center">
                    <p className="font-body text-sm text-muted-foreground">
                      The embedded map is provided by Google and uses cookies.
                    </p>
                    <p className="font-body text-sm text-muted-foreground">
                      {consent === "rejected"
                        ? "You have declined cookies. To view the map, please update your cookie preferences."
                        : "Please accept cookies to load the interactive map."}
                    </p>
                    <a
                      href="https://www.google.com/maps/place/Skoufa+5,+Athina+106+73,+Greece"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body text-sm text-foreground underline"
                    >
                      Open in Google Maps →
                    </a>
                  </div>
                )}
              </div>
            </AnimatedItem>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
