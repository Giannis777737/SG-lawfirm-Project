import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Scale } from "lucide-react";
import { practiceAreas } from "@/data/practiceAreas";
import AnimatedSection, { AnimatedItem } from "@/components/AnimatedSection";
import SectionLogo from "@/components/SectionLogo";

const ExpertiseSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="areas-of-expertise" className="editorial-section" aria-labelledby="expertise-heading">
      <SectionLogo title="Areas of Expertise" />
      <div className="editorial-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left column - heading */}
          <AnimatedSection className="flex flex-col gap-8 lg:sticky lg:top-40 lg:self-start">
            <AnimatedItem>
              <h2 id="expertise-heading" className="editorial-heading-sm">
                Fields of Practice
              </h2>
            </AnimatedItem>

            <AnimatedItem>
              <p className="editorial-body">
                We offer specialized legal counsel across a comprehensive range of practice
                areas, combining deep academic knowledge with commercial awareness to deliver
                strategic legal solutions tailored to the needs of each client.
              </p>
            </AnimatedItem>
          </AnimatedSection>

          {/* Right column - practice area links */}
          <AnimatedSection delay={0.2}>
            <nav aria-label="Practice areas">
              <ul className="flex flex-col" role="list">
                {practiceAreas.map((area, index) => (
                  <AnimatedItem key={area.slug}>
                    <li>
                      <Link
                        to={`/${area.slug}`}
                        className="border-b border-border py-5 first:border-t group flex items-center justify-between gap-4"
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                      >
                        <div className="flex items-center gap-4">
                          <Scale
                            size={14}
                            className="text-gold/60 shrink-0 group-hover:text-gold transition-colors duration-300"
                            aria-hidden="true"
                          />
                          <span className="font-body text-base md:text-lg text-foreground group-hover:text-gold transition-colors duration-300">
                            {area.title}
                          </span>
                        </div>
                        <ChevronRight
                          size={16}
                          className={`text-gold shrink-0 transition-all duration-300 ${
                            hoveredIndex === index
                              ? "opacity-100 translate-x-0"
                              : "opacity-0 -translate-x-2"
                          }`}
                          aria-hidden="true"
                        />
                      </Link>
                    </li>
                  </AnimatedItem>
                ))}
              </ul>
            </nav>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
