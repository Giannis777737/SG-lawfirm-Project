import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const HEADER_OFFSET = 112;
const MAX_SCROLL_ATTEMPTS = 30;
const SCROLL_RETRY_DELAY = 120;

const getScrollBehavior = (): ScrollBehavior =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";

const scrollToHashTarget = (hash: string) => {
  const targetId = decodeURIComponent(hash).replace(/^#/, "");
  const element = document.getElementById(targetId);

  if (!element) return false;

  const top = Math.max(element.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET, 0);
  window.scrollTo({ top, behavior: getScrollBehavior() });
  return true;
};

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    let timeoutId: number | undefined;

    if (!hash) {
      window.scrollTo({ top: 0, behavior: getScrollBehavior() });
      return;
    }

    let attempts = 0;

    const scrollWhenReady = () => {
      if (scrollToHashTarget(hash) || attempts >= MAX_SCROLL_ATTEMPTS) return;
      attempts += 1;
      timeoutId = window.setTimeout(scrollWhenReady, SCROLL_RETRY_DELAY);
    };

    scrollWhenReady();

    return () => {
      if (timeoutId) window.clearTimeout(timeoutId);
    };
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
