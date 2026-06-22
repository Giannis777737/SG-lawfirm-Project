import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logoFull from "@/assets/logo-full.png";

const navLinks = [
  { label: "about us", href: "/about" },
  { label: "our expertise", href: "/expertise" },
  { label: "our people", href: "/our-people" },
  { label: "news & insights", href: "/news" },
  { label: "contact", href: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const logoImg = (
    <img
      src={logoFull}
      alt="Selekos-Gouskou & Co Law Offices"
      className="h-[5.25rem] md:h-[6.25rem] w-auto brightness-0 invert block"
    />
  );


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
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy text-gold-light h-28 md:h-32" role="banner">
      {/* Geometric symbol on the left, cropped from the full logo */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 overflow-hidden pointer-events-none z-10 h-20 w-16 md:h-24 md:w-20">
        <img
          src={logoFull}
          alt=""
          aria-hidden="true"
          className="w-full brightness-0 invert select-none block"
          style={{ transform: "scale(4.0)", transformOrigin: "top center" }}
        />
      </div>

      {/* Centered logo + hamburger (all viewports) */}
      <div className="flex flex-col items-center justify-center h-full relative z-20">
        {isHome ? (
          <img
            src={logoFull}
            alt="Selekos-Gouskou & Co Law Offices"
            className="h-[5.25rem] md:h-[6.25rem] w-auto brightness-0 invert"
          />
        ) : (
          <Link to="/" aria-label="Selekos-Gouskou & Co — Home">
            <img
              src={logoFull}
              alt="Selekos-Gouskou & Co Law Offices"
              className="h-[5.25rem] md:h-[6.25rem] w-auto brightness-0 invert"
            />
          </Link>
        )}
        <button
          className="mt-0.5 text-gold-light"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
        >
          {mobileOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
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
            className="absolute left-0 right-0 top-full border-t border-navy-light bg-navy z-50"
            aria-label="Main navigation"
          >
            <div className="editorial-container py-8 flex flex-col gap-6 items-center">
              {navLinks.map((link) => renderLink(link, () => setMobileOpen(false)))}
            </div>
          </nav>
        </>
      )}
    </header>
  );
};

export default Navbar;
