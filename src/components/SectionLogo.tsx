import sectionLogo from "@/assets/section-logo.png";

interface SectionLogoProps {
  className?: string;
}

/**
 * Decorative cropped logo mark shown above each section label,
 * matching the original site styling.
 */
const SectionLogo = ({ className = "" }: SectionLogoProps) => {
  return (
    <img
      src={sectionLogo}
      alt=""
      aria-hidden="true"
      className={`h-10 md:h-12 w-auto mb-4 select-none pointer-events-none ${className}`}
      loading="lazy"
      decoding="async"
    />
  );
};

export default SectionLogo;
