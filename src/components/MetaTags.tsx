import { useEffect } from "react";

interface MetaTagsProps {
  /** Page-specific meta description (max ~160 chars). */
  description?: string;
  /** Open Graph type, defaults to "website". Use "article" for news. */
  ogType?: "website" | "article";
  /** Optional title used for og:title / twitter:title. Falls back to document.title. */
  title?: string;
}

/**
 * Sets/updates per-page meta description and Open Graph / Twitter tags.
 * Restores previous values on unmount so other pages keep their own metadata.
 */
const MetaTags = ({ description, ogType = "website", title }: MetaTagsProps) => {
  useEffect(() => {
    const setMeta = (
      selector: string,
      attr: "name" | "property",
      attrValue: string,
      content: string,
    ): { el: HTMLMetaElement; prev: string | null; created: boolean } => {
      let el = document.head.querySelector<HTMLMetaElement>(selector);
      let created = false;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, attrValue);
        document.head.appendChild(el);
        created = true;
      }
      const prev = el.getAttribute("content");
      el.setAttribute("content", content);
      return { el, prev, created };
    };

    const restorers: Array<() => void> = [];
    const effectiveTitle = title ?? document.title;

    if (description) {
      const desc = setMeta('meta[name="description"]', "name", "description", description);
      restorers.push(() => {
        if (desc.created) desc.el.remove();
        else if (desc.prev !== null) desc.el.setAttribute("content", desc.prev);
      });

      const ogDesc = setMeta(
        'meta[property="og:description"]',
        "property",
        "og:description",
        description,
      );
      restorers.push(() => {
        if (ogDesc.created) ogDesc.el.remove();
        else if (ogDesc.prev !== null) ogDesc.el.setAttribute("content", ogDesc.prev);
      });

      const twDesc = setMeta(
        'meta[name="twitter:description"]',
        "name",
        "twitter:description",
        description,
      );
      restorers.push(() => {
        if (twDesc.created) twDesc.el.remove();
        else if (twDesc.prev !== null) twDesc.el.setAttribute("content", twDesc.prev);
      });
    }

    if (effectiveTitle) {
      const ogTitle = setMeta(
        'meta[property="og:title"]',
        "property",
        "og:title",
        effectiveTitle,
      );
      restorers.push(() => {
        if (ogTitle.created) ogTitle.el.remove();
        else if (ogTitle.prev !== null) ogTitle.el.setAttribute("content", ogTitle.prev);
      });

      const twTitle = setMeta(
        'meta[name="twitter:title"]',
        "name",
        "twitter:title",
        effectiveTitle,
      );
      restorers.push(() => {
        if (twTitle.created) twTitle.el.remove();
        else if (twTitle.prev !== null) twTitle.el.setAttribute("content", twTitle.prev);
      });
    }

    const ogTypeMeta = setMeta('meta[property="og:type"]', "property", "og:type", ogType);
    restorers.push(() => {
      if (ogTypeMeta.created) ogTypeMeta.el.remove();
      else if (ogTypeMeta.prev !== null) ogTypeMeta.el.setAttribute("content", ogTypeMeta.prev);
    });

    return () => {
      restorers.forEach((fn) => fn());
    };
  }, [description, ogType, title]);

  return null;
};

export default MetaTags;
