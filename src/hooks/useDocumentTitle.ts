import { useEffect } from "react";

const BASE_TITLE = "Selekos-Gouskou & Co Law Offices";

/**
 * Sets document.title on mount and restores the base title on unmount.
 */
const useDocumentTitle = (title?: string) => {
  useEffect(() => {
    const prev = document.title;
    document.title = title ? `${title} | ${BASE_TITLE}` : BASE_TITLE;
    return () => {
      document.title = prev;
    };
  }, [title]);
};

export default useDocumentTitle;
