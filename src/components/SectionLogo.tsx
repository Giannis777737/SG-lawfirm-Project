import sectionLogo from "@/assets/section-logo.png";

interface SectionLogoProps {
  /** The section name shown under the logo, e.g. "About Us". */
  title: string;
  className?: string;
}

/**
 * Full-width navy banner with the centered logo mark on top and the section
 * name underneath — matches the original site styling.
 */
const SectionLogo = ({ title, className = "" }: SectionLogoProps) => {
  return (
    <div
      className={`w-full bg-navy text-white flex flex-col items-center justify-center py-8 md:py-10 mb-12 ${className}`}
    >
      <img
        src={sectionLogo}
        alt=""
        aria-hidden="true"
        className="h-12 md:h-14 w-auto select-none pointer-events-none brightness-0 invert"
        loading="lazy"
        decoding="async"
      />
      <span className="font-body text-xs md:text-sm tracking-[0.25em] uppercase mt-3">
        {title}
      </span>
    </div>
  );
};

export default SectionLogo;
