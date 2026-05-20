import sectionLogo from "@/assets/section-logo.png";

interface SectionLogoProps {
  /** The section name shown next to the logo, e.g. "About Us". */
  title: string;
  className?: string;
}

/**
 * Full-width navy bar with the geometric figure flush-left (full height)
 * and the section title beside it.
 */
const SectionLogo = ({ title, className = "" }: SectionLogoProps) => {
  return (
    <div className={`relative w-full bg-navy text-white mb-12 h-20 md:h-24 ${className}`}>
      <div className="flex items-stretch h-full overflow-hidden">
        <img
          src={sectionLogo}
          alt=""
          aria-hidden="true"
          className="absolute left-0 top-1/2 -translate-y-1/2 h-[calc(100%+14px)] w-auto select-none pointer-events-none block object-cover z-10"
          loading="lazy"
          decoding="async"
        />
        <span className="font-heading text-2xl md:text-3xl self-center leading-none relative z-10" style={{ paddingLeft: 'calc((100% + 14px) * 0 + 4.5rem)' }}>
          {title}
        </span>
      </div>
    </div>
  );
};

export default SectionLogo;
