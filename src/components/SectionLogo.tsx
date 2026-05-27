import logoFull from "@/assets/logo-full.png";

interface SectionLogoProps {
  /** The section name shown next to the logo, e.g. "About Us". */
  title: string;
  className?: string;
  /**
   * Visual variant:
   * - "navy" (default): full-width navy banner with white symbol and title.
   * - "elegant": minimal ivory bar with navy symbol, navy title and a gold hairline rule. Suited for premium editorial sections.
   */
  variant?: "navy" | "elegant";
}

const SectionLogo = ({ title, className = "", variant = "navy" }: SectionLogoProps) => {
  if (variant === "elegant") {
    return (
      <div className={`relative w-full mb-12 ${className}`}>
        <div className="editorial-container">
          <div className="flex items-center gap-5 py-8 md:py-10 border-b border-gold/40">
            <div className="relative overflow-hidden pointer-events-none h-14 w-12 md:h-16 md:w-14 shrink-0">
              <img
                src={logoFull}
                alt=""
                aria-hidden="true"
                className="w-full select-none block"
                style={{
                  transform: "scale(4.0)",
                  transformOrigin: "top center",
                  filter:
                    "brightness(0) saturate(100%) invert(13%) sepia(28%) saturate(1800%) hue-rotate(185deg) brightness(95%) contrast(95%)",
                }}
              />
            </div>
            <span className="font-heading text-xs md:text-sm uppercase tracking-[0.35em] text-navy/80">
              {title}
            </span>
            <span className="ml-auto hidden md:block h-px w-24 bg-gold/50" aria-hidden="true" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative w-full bg-navy text-white mb-12 h-20 md:h-24 overflow-hidden ${className}`}>
      <div className="flex items-center h-full">
        <div className="relative overflow-hidden pointer-events-none h-20 w-16 md:h-24 md:w-20 shrink-0">
          <img
            src={logoFull}
            alt=""
            aria-hidden="true"
            className="w-full brightness-0 invert select-none block"
            style={{ transform: "scale(4.0)", transformOrigin: "top center" }}
          />
        </div>
        <span className="font-heading text-2xl md:text-3xl self-center pl-4 leading-none relative z-10">
          {title}
        </span>
      </div>
    </div>
  );
};

export default SectionLogo;
