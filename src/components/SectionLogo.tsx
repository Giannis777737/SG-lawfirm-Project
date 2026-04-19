import sectionLogo from "@/assets/section-logo.png";

interface SectionLogoProps {
  /** The section name shown next to the logo, e.g. "About Us". */
  title: string;
  className?: string;
}

/**
 * Full-width navy bar with the logo flush-left (full height) and the section
 * title beside it. The bar extends edge-to-edge across the section.
 */
const SectionLogo = ({ title, className = "" }: SectionLogoProps) => {
  return (
    <div className={`w-full bg-navy text-white mb-12 h-20 md:h-24 ${className}`}>
      <div className="flex items-stretch h-full">
        <img
          src={sectionLogo}
          alt=""
          aria-hidden="true"
          className="h-full w-auto select-none pointer-events-none block object-cover"
          loading="lazy"
          decoding="async"
        />
        <span className="font-heading text-2xl md:text-3xl self-center pl-4 leading-none">
          {title}
        </span>
      </div>
    </div>
  );
};

export default SectionLogo;
