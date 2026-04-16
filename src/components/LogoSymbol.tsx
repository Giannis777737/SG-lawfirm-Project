const LogoSymbol = ({ className = "w-12 h-16" }: { className?: string }) => (
  <svg
    viewBox="0 0 60 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    {/* Left arc - top half */}
    <path
      d="M8 4 C8 4, 8 38, 30 40"
      stroke="currentColor"
      strokeWidth="5"
      fill="none"
      strokeLinecap="round"
    />
    {/* Left arc - bottom half */}
    <path
      d="M30 40 C8 42, 8 76, 8 76"
      stroke="currentColor"
      strokeWidth="5"
      fill="none"
      strokeLinecap="round"
    />
    {/* Right arc - top half */}
    <path
      d="M52 4 C52 4, 52 38, 30 40"
      stroke="currentColor"
      strokeWidth="5"
      fill="none"
      strokeLinecap="round"
    />
    {/* Right arc - bottom half */}
    <path
      d="M30 40 C52 42, 52 76, 52 76"
      stroke="currentColor"
      strokeWidth="5"
      fill="none"
      strokeLinecap="round"
    />
    {/* Top serifs */}
    <line x1="2" y1="4" x2="18" y2="4" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    <line x1="42" y1="4" x2="58" y2="4" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    {/* Bottom serifs */}
    <line x1="2" y1="76" x2="18" y2="76" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    <line x1="42" y1="76" x2="58" y2="76" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
  </svg>
);

export default LogoSymbol;
