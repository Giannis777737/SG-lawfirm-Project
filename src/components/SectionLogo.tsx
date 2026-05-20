import sectionLogo from "@/assets/section-logo.png";
import logoFull from "@/assets/logo-full.png";

interface SectionLogoProps {
  /** The section name shown next to the logo, e.g. "About Us". */
  title: string;
  className?: string;
}

/**
 * Full-width navy bar with the geometric figure flush-left (full height), the
 * section title beside it, and the firm logo centered.
 */
const SectionLogo = ({ title, className = "" }: SectionLogoProps) => {
  return (
    <div className={`relative w-full bg-navy text-white mb-12 h-20 md:h-24 ${className}`}>
      <div className="flex items-stretch h-full">
        <img
          src={sectionLogo}
          alt=""
          aria-hidden="true"
          className="h-full w-auto select-none pointer-events-none block object-cover relative z-10"
          loading="lazy"
          decoding="async"
        />
        <span className="font-heading text-2xl md:text-3xl self-center pl-4 leading-none relative z-10">
          {title}
        </span>
      </div>
      <img
        src={logoFull}
        alt="Selekos Gouskou & Co Law Offices"
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[4.5rem] md:h-[5.5rem] w-auto brightness-0 invert pointer-events-none select-none z-0"
        loading="lazy"
        decoding="async"
      />
    </div>
  );
};

export default SectionLogo;
