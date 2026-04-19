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
    <div className={`mb-12 ${className}`}>
      <div className="inline-flex items-stretch bg-navy text-white rounded-r-[3rem] overflow-hidden pr-10 md:pr-16 shadow-sm">
        <img
          src={sectionLogo}
          alt=""
          aria-hidden="true"
          className="h-20 md:h-24 w-auto select-none pointer-events-none block"
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
