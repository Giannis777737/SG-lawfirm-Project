import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Scale } from "lucide-react";
import { practiceAreas } from "@/data/practiceAreas";
import AnimatedSection, { AnimatedItem } from "@/components/AnimatedSection";

const ExpertiseSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="areas-of-expertise" className="bg-foreground" aria-labelledby="expertise-heading">
      {/* Blue banner with angular logo shape */}
      <div className="relative bg-primary overflow-hidden py-10 sm:py-14 md:py-16">
        <svg
          className="absolute left-0 top-0 h-full w-auto opacity-20"
          viewBox="0 0 120 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M0 0 L60 100 L0 200 L40 200 L100 100 L40 0 Z" fill="white" />
        </svg>
        <div className="editorial-container relative z-10">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl text-white">
            Areas of Expertise
          </h2>
        </div>
      </div>

      <div className="editorial-section">
        <div className="editorial-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left column - heading */}
            <AnimatedSection className="flex flex-col gap-8 lg:sticky lg:top-40 lg:self-start">

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
