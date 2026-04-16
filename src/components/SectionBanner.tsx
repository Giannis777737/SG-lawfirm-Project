import firmLogo from "@/assets/firm-logo.png";

interface SectionBannerProps {
  title: string;
}

const SectionBanner = ({ title }: SectionBannerProps) => {
  return (
    <div className="w-full bg-[hsl(210,90%,55%)] flex items-center px-6 sm:px-10 md:px-16 py-6 sm:py-8 mb-12 sm:mb-16">
      <img
        src={firmLogo}
        alt=""
        aria-hidden="true"
        className="h-14 sm:h-18 md:h-20 w-auto brightness-0 invert opacity-40 mr-6 sm:mr-8"
      />
      <h2 className="font-heading text-xl sm:text-2xl md:text-3xl text-white tracking-wide">
        {title}
      </h2>
    </div>
  );
};

export default SectionBanner;
