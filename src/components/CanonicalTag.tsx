import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SITE_URL = "https://www.selekos-gouskou.gr";

const CanonicalTag = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const url = `${SITE_URL}${pathname === "/" ? "" : pathname}`;
    let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (link) {
      link.href = url;
    } else {
      link = document.createElement("link");
      link.rel = "canonical";
      link.href = url;
      document.head.appendChild(link);
    }
  }, [pathname]);

  return null;
};

export default CanonicalTag;
