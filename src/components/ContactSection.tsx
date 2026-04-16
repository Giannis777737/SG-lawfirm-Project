import { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import AnimatedSection, { AnimatedItem } from "@/components/AnimatedSection";
import SectionBanner from "@/components/SectionBanner";
import officePhoto from "@/assets/office2.webp";
import { useCookieConsent } from "@/hooks/useCookieConsent";
import { Link } from "react-router-dom";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name.").max(100, "Name must be under 100 characters."),
  email: z.string().trim().email("Please enter a valid email address.").max(255, "Email must be under 255 characters."),
  phone: z.string().trim().max(30, "Phone number is too long.").optional().or(z.literal("")),
  message: z.string().trim().min(1, "Please enter your message.").max(2000, "Message must be under 2000 characters."),
  gdprConsent: z.literal(true, {
    errorMap: () => ({ message: "You must consent to the processing of your data." }),
  }),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactSection = () => {
  const [mapLoaded, setMapLoaded] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const mapRef = useRef<HTMLDivElement>(null);
  const { consent } = useCookieConsent();

  const mapsAllowed = consent === "accepted";

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", phone: "", message: "", gdprConsent: undefined as unknown as true },
  });

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

  const onSubmit = async (data: ContactFormData) => {
    setSubmitting(true);
    try {
      // Save to database
      const { error } = await supabase.from("contact_submissions").insert({
        name: data.name,
        email: data.email,
        phone: data.phone || null,
        message: data.message,
      });

      if (error) throw error;

      // Send email notification via EmailJS
      await emailjs.send(
        "service_1tuzskp",
        "template_21ckded",
        {
          name: data.name,
          email: data.email,
          title: data.message,
          phone: data.phone || "N/A",
          message: data.message,
        },
        "k2S_zC0UVY_kntXZb"
      );

      toast({
        title: "Message sent",
        description: "Thank you for reaching out. We will get back to you shortly.",
      });
      reset();
    } catch {
      toast({
        title: "Something went wrong",
        description: "Please try again or contact us directly by email.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="editorial-section" aria-labelledby="contact-heading">
      <SectionBanner title="Contact" />
      <div className="editorial-container">
        {/* Contact form + office info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: Office details */}
          <AnimatedSection className="flex flex-col gap-8">

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

            <AnimatedItem className="mt-4">
              <img
                src={officePhoto}
                alt="Interior of Selekos Gouskou law office"
                className="w-full h-[250px] sm:h-[300px] object-cover"
                width={600}
                height={300}
                loading="lazy"
                decoding="async"
              />
            </AnimatedItem>
          </AnimatedSection>

          {/* Right: Contact form */}
          <AnimatedSection className="flex flex-col gap-8">

            <AnimatedItem>
              <h3 className="editorial-heading-sm">Send Us a Message</h3>
            </AnimatedItem>

            <AnimatedItem>
              <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-5">
                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-name" className="font-body text-sm text-muted-foreground">
                    Full Name <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    autoComplete="name"
                    className="w-full border border-border bg-background px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-1 focus:ring-foreground/30 transition-colors"
                    placeholder="Your full name"
                    {...register("name")}
                  />
                  {errors.name && <p className="font-body text-xs text-destructive">{errors.name.message}</p>}
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-email" className="font-body text-sm text-muted-foreground">
                    Email Address <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    autoComplete="email"
                    className="w-full border border-border bg-background px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-1 focus:ring-foreground/30 transition-colors"
                    placeholder="your@email.com"
                    {...register("email")}
                  />
                  {errors.email && <p className="font-body text-xs text-destructive">{errors.email.message}</p>}
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-phone" className="font-body text-sm text-muted-foreground">
                    Phone <span className="text-muted-foreground/50">(optional)</span>
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    autoComplete="tel"
                    className="w-full border border-border bg-background px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-1 focus:ring-foreground/30 transition-colors"
                    placeholder="+30 210 000 0000"
                    {...register("phone")}
                  />
                  {errors.phone && <p className="font-body text-xs text-destructive">{errors.phone.message}</p>}
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-message" className="font-body text-sm text-muted-foreground">
                    Message <span aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    className="w-full border border-border bg-background px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-1 focus:ring-foreground/30 transition-colors resize-y"
                    placeholder="How can we help you?"
                    {...register("message")}
                  />
                  {errors.message && <p className="font-body text-xs text-destructive">{errors.message.message}</p>}
                </div>

                {/* GDPR Consent */}
                <div className="flex items-start gap-3">
                  <input
                    id="contact-gdpr"
                    type="checkbox"
                    className="mt-1 h-4 w-4 shrink-0 border border-border accent-foreground"
                    {...register("gdprConsent")}
                  />
                  <label htmlFor="contact-gdpr" className="font-body text-xs text-muted-foreground leading-relaxed">
                    I consent to the processing of my personal data in accordance with the{" "}
                    <Link to="/privacy-policy" className="text-foreground underline">
                      Privacy Policy
                    </Link>
                    . My data will be used solely to respond to my inquiry and will not be shared with third parties.{" "}
                    <span aria-hidden="true">*</span>
                  </label>
                </div>
                {errors.gdprConsent && (
                  <p className="font-body text-xs text-destructive -mt-3">{errors.gdprConsent.message}</p>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="editorial-btn self-start disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitting ? "Sending…" : "Send Message"}
                </button>
              </form>
            </AnimatedItem>
          </AnimatedSection>
        </div>

        {/* Map */}
        <div className="mt-16 lg:mt-24">
          <AnimatedSection>
            <AnimatedItem>
              <div ref={mapRef} className="w-full h-[300px] sm:h-[400px] lg:h-[500px] bg-muted">
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
