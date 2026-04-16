interface SectionBannerProps {
  title: string;
}

const SectionBanner = ({ title }: SectionBannerProps) => {
  return (
    <div className="w-full bg-navy-light relative overflow-hidden mb-12 md:mb-16">
      <div className="flex items-center min-h-[100px] md:min-h-[120px]">
        {/* Geometric hourglass/double-arc motif as white SVG overlay */}
        <div className="relative w-[80px] md:w-[120px] h-[100px] md:h-[120px] flex-shrink-0">
          <svg
            viewBox="0 0 120 120"
            className="absolute inset-0 w-full h-full"
            aria-hidden="true"
          >
            {/* Left inward arc */}
            <path
              d="M 0,0 L 0,120 Q 60,90 60,60 Q 60,30 0,0 Z"
              fill="white"
            />
            {/* Right inward arc */}
            <path
              d="M 120,0 L 120,120 Q 60,90 60,60 Q 60,30 120,0 Z"
              fill="white"
            />
          </svg>
        </div>

        {/* Section title */}
        <span className="font-body text-xl md:text-2xl lg:text-3xl text-white tracking-wide font-light pl-4 md:pl-8">
          {title}
        </span>
      </div>
    </div>
  );
};

export default SectionBanner;
