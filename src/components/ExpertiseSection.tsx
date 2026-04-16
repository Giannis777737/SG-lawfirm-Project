import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Scale } from "lucide-react";
import { practiceAreas } from "@/data/practiceAreas";
import AnimatedSection, { AnimatedItem } from "@/components/AnimatedSection";

const ExpertiseSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="areas-of-expertise" className="editorial-section bg-foreground" aria-labelledby="expertise-heading">
      <div className="editorial-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left column - heading */}
          <AnimatedSection className="flex flex-col gap-8 lg:sticky lg:top-40 lg:self-start">
            <AnimatedItem>
              <p className="editorial-label text-gold font-semibold" aria-hidden="true">Areas of Expertise</p>
            </AnimatedItem>

            <AnimatedItem>
              <h2 id="expertise-heading" className="editorial-heading-sm text-white">
                Specialized legal counsel across key practice areas
              </h2>
            </AnimatedItem>

            <AnimatedItem>
              <p className="editorial-body text-white/80">
                Our lawyers are leading experts in Greek commercial law, recognised for their
                expertise in delivering innovative customised solutions to complex legal matters.
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
                        className="border-b border-white/10 py-5 first:border-t group flex items-center justify-between gap-4"
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                      >
                        <div className="flex items-center gap-4">
                          <Scale
                            size={14}
                            className="text-gold/50 shrink-0 group-hover:text-gold transition-colors duration-300"
                            aria-hidden="true"
                          />
                          <span className="font-body text-base md:text-lg text-white/90 group-hover:text-gold transition-colors duration-300">
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
