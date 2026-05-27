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

const AboutPage = () => {
  useDocumentTitle("About the Firm");
  return (
    <div className="min-h-screen bg-background">
      <MetaTags
        title="About the Firm | Demo Company"
        description="Founded in 1998, Demo Company is a dynamic and specialized firm providing high-quality legal services across a wide range of sectors."
      />
      <Navbar />
      <main className="pt-28 sm:pt-32 md:pt-36">
        <AboutSection />

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

export default AboutPage;
