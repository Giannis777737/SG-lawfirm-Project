import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import SectionLogo from "@/components/SectionLogo";
import AnimatedSection, { AnimatedItem } from "@/components/AnimatedSection";
import useDocumentTitle from "@/hooks/useDocumentTitle";
import MetaTags from "@/components/MetaTags";
import { Link } from "react-router-dom";

const strategicCases = [
  "Rion-Antirion Bridge",
  "National Roads",
  "Astir Palace Vouliagmenis",
  "Strategic Investments",
];

const coreValues = [
  { title: "Excellence", description: "Delivering high-quality legal advice with precision and depth." },
  { title: "Integrity", description: "Acting with honesty, ethics, and responsibility." },
  { title: "Client Focus", description: "Providing bespoke services aligned with client objectives." },
  { title: "Innovation", description: "Adapting to evolving markets and modern business challenges." },
];

const AboutPage = () => {
  useDocumentTitle("About the Firm");
  return (
    <div className="min-h-screen bg-background">
      <MetaTags
        title="About the Firm | Selekos-Gouskou & Co"
        description="Founded in 1998, Selekos-Gouskou & Co Law Offices has established itself as a dynamic and specialized firm, providing high-quality legal services across a wide range of sectors. Combining deep academic knowledge with commercial awareness, the firm offers strategic legal solutions tailored to the needs of each client. Our team advises corporations, institutions, and private entities operating in both domestic and international markets. The firm's philosophy is based on professionalism, integrity, and continuous development. We focus on building long-term relationships with our clients, ensuring consistency, discretion, and efficiency in every case."
      />
      <Navbar />
      <main className="pt-28 sm:pt-32 md:pt-36">
        <AboutSection />

        <section className="editorial-section" aria-labelledby="philosophy-heading">
          <SectionLogo title="Philosophy & Core Values" />
          <div className="editorial-container">
            <AnimatedSection className="mb-12">
              <AnimatedItem>
                <h2 id="philosophy-heading" className="editorial-heading-sm">
                  Philosophy & Core Values
                </h2>
              </AnimatedItem>
            </AnimatedSection>
            <AnimatedSection>
              <AnimatedItem>
                <p className="editorial-body mb-10">
                  Our work is guided by four core principles:
                </p>
              </AnimatedItem>
              <ul className="flex flex-col" role="list">
                {coreValues.map((item) => (
                  <AnimatedItem key={item.title}>
                    <li className="border-b border-border py-5 first:border-t">
                      <div className="flex flex-col gap-1">
                        <span className="font-body text-base md:text-lg font-semibold text-foreground">
                          {item.title}
                        </span>
                        <span className="font-body text-base md:text-lg text-muted-foreground">
                          {item.description}
                        </span>
                      </div>
                    </li>
                  </AnimatedItem>
                ))}
              </ul>
            </AnimatedSection>
          </div>
        </section>

        <section className="editorial-section" aria-labelledby="strategic-heading">
          <SectionLogo title="Strategic Cases" />
          <div className="editorial-container">
            <AnimatedSection className="mb-12">
              <AnimatedItem>
                <h2 id="strategic-heading" className="editorial-heading-sm">
                  Strategic Cases
                </h2>
              </AnimatedItem>
            </AnimatedSection>
            <AnimatedSection>
              <ul className="flex flex-col" role="list">
                {strategicCases.map((item) => (
                  <AnimatedItem key={item}>
                    <li className="border-b border-border py-5 first:border-t font-body text-base md:text-lg text-foreground">
                      {item}
                    </li>
                  </AnimatedItem>
                ))}
              </ul>
            </AnimatedSection>
          </div>
        </section>

        <div className="editorial-container pb-20">
          <Link to="/" className="editorial-link">
            <span>←</span> Back to home page
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
