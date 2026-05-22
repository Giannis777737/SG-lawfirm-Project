import logoFull from "@/assets/logo-full.png";

interface SectionLogoProps {
  /** The section name shown next to the logo, e.g. "About Us". */
  title: string;
  className?: string;
}

/**
 * Full-width navy bar with the geometric figure flush-left
 * and the section title beside it. Uses the same cropping logic
 * as the Navbar to show only the geometric symbol portion of the full logo.
 */
const SectionLogo = ({ title, className = "" }: SectionLogoProps) => {
  return (
    <div className={`relative w-full bg-navy text-white mb-12 h-20 md:h-24 overflow-hidden ${className}`}>
      <div className="flex items-center h-full">
        {/* Geometric symbol cropped from the full logo — same logic as Navbar */}
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
