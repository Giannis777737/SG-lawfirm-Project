import sectionLogo from "@/assets/section-logo.png";

interface SectionLogoProps {
  /** The section title shown next to the logo, e.g. "About Us". */
  title: string;
  className?: string;
}

/**
 * Blue banner with the cropped logo mark on the left and the section title
 * on the right — matches the original site styling.
 */
const SectionLogo = ({ title, className = "" }: SectionLogoProps) => {
  return (
    <div
      className={`inline-flex items-stretch bg-navy text-white rounded-r-full overflow-hidden mb-8 shadow-sm ${className}`}
    >
      <img
        src={sectionLogo}
        alt=""
        aria-hidden="true"
        className="h-12 md:h-14 w-auto select-none pointer-events-none brightness-0 invert"
        loading="lazy"
        decoding="async"
      />
      <span className="font-heading text-xl md:text-2xl pr-8 pl-3 self-center leading-none">
        {title}
      </span>
    </div>
  );
};

export default SectionLogo;
