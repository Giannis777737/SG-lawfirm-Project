import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import LogoSymbol from "@/components/LogoSymbol";

const navLinks = [
  { label: "about us", href: "/#about-us" },
  { label: "our expertise", href: "/#areas-of-expertise" },
  { label: "our people", href: "/our-people" },
  { label: "news & publications", href: "/#news" },
  { label: "contact", href: "/#contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const isHashLink = (href: string) => href.includes("#");

  const renderLink = (link: { label: string; href: string }, onClick?: () => void) => {
    if (isHashLink(link.href)) {
      return (
        <Link
          key={link.href}
          to={link.href}
          className="font-body text-sm font-semibold text-gold-muted hover:text-gold transition-colors duration-300 tracking-wide uppercase relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1.5px] after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
          onClick={onClick}
        >
          {link.label}
        </Link>
      );
    }
    return (
      <Link
        key={link.href}
        to={link.href}
        className="font-body text-sm font-semibold text-gold-muted hover:text-gold transition-colors duration-300 tracking-wide uppercase relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1.5px] after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
        onClick={onClick}
      >
        {link.label}
      </Link>
    );
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black text-white" role="banner">
      {/* Mobile: centered logo block */}
      <div className="md:hidden flex flex-col items-center py-6 px-4">
        <Link
          to="/"
          className="flex flex-col items-center gap-3"
          aria-label="Selekos Gouskou & Co Law Offices — Home"
        >
          <LogoSymbol className="w-10 h-14 text-white" />
          <div className="text-center">
            <p className="text-sm tracking-[0.25em] font-semibold text-white" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              SELEKOS_GOUSKOU & CO
            </p>
            <p className="text-[10px] tracking-[0.35em] text-white/80 mt-0.5" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              LAW OFFICES
            </p>
          </div>
        </Link>
        <button
          className="mt-4 text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
        >
          {mobileOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>
      </div>

      {/* Desktop: horizontal layout */}
      <div className="hidden md:flex editorial-container items-center justify-between py-6 lg:py-8">
        <Link
          to="/"
          className="flex items-center gap-4 flex-shrink-0"
          aria-label="Selekos Gouskou & Co Law Offices — Home"
        >
          <LogoSymbol className="w-8 h-10 text-white" />
          <div>
            <p className="text-sm tracking-[0.2em] font-semibold text-white" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              SELEKOS_GOUSKOU & CO
            </p>
            <p className="text-[9px] tracking-[0.3em] text-white/80" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              LAW OFFICES
            </p>
          </div>
        </Link>

        <nav className="flex items-center gap-10" aria-label="Main navigation">
          {navLinks.map((link) => renderLink(link))}
        </nav>
      </div>

      {mobileOpen && (
        <>
          <div
            className="fixed inset-0 bg-foreground/60 z-40 md:hidden"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />
          <nav
            id="mobile-nav"
            className="md:hidden border-t border-white/10 bg-black relative z-50"
            aria-label="Mobile navigation"
          >
            <div className="editorial-container py-8 flex flex-col gap-6">
              {navLinks.map((link) => renderLink(link, () => setMobileOpen(false)))}
            </div>
          </nav>
        </>
      )}

      <div className="border-b border-white/10" aria-hidden="true" />
    </header>
  );
};

export default Navbar;
