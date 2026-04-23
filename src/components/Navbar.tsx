import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logoFull from "@/assets/logo-full.png";
import geoFigure from "@/assets/sg-geometric.png";

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
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy text-gold-light" role="banner">
      {/* Geometric figure flush to the top-left corner, full header height */}
      <img
        src={geoFigure}
        alt=""
        aria-hidden="true"
        className="absolute left-0 top-0 bottom-0 h-full w-auto select-none pointer-events-none object-fill block z-10"
      />

      {/* Centered logo + hamburger below (all viewports) */}
      <div className="flex flex-col items-center py-4 md:py-6 relative z-20">
        <Link
          to="/"
          aria-label="Selekos Gouskou & Co Law Offices — Home"
        >
          <img src={logoFull} alt="Selekos Gouskou & Co Law Offices" className="h-14 md:h-16 w-auto brightness-0 invert" />
        </Link>
        <button
          className="mt-3 text-gold-light"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
        >
          {mobileOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>
      </div>

      {mobileOpen && (
        <>
          <div
            className="fixed inset-0 bg-foreground/60 z-40"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />
          <nav
            id="mobile-nav"
            className="border-t border-navy-light bg-navy relative z-50"
            aria-label="Main navigation"
          >
            <div className="editorial-container py-8 flex flex-col gap-6 items-center">
              {navLinks.map((link) => renderLink(link, () => setMobileOpen(false)))}
            </div>
          </nav>
        </>
      )}

      <div className="border-b border-navy-light" aria-hidden="true" />
    </header>
  );
};

export default Navbar;
