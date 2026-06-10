import { lazy, Suspense, useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import CookieConsent from "@/components/CookieConsent";
import ScrollToTop from "@/components/ScrollToTop";
import CanonicalTag from "@/components/CanonicalTag";
import PageTransition from "@/components/PageTransition";
import Index from "./pages/Index.tsx";

// Reload once on stale chunk errors after a redeploy
const lazyWithReload = <T,>(factory: () => Promise<{ default: React.ComponentType<T> }>) =>
  lazy(async () => {
    try {
      return await factory();
    } catch (err) {
      const key = "lovable:chunk-reloaded";
      if (!sessionStorage.getItem(key)) {
        sessionStorage.setItem(key, "1");
        window.location.reload();
      }
      throw err;
    }
  });

// Lazy load non-critical routes
const PracticeAreaPage = lazyWithReload(() => import("./pages/PracticeAreaPage.tsx"));
const OurPeoplePage = lazyWithReload(() => import("./pages/OurPeoplePage.tsx"));
const NewsArticlePage = lazyWithReload(() => import("./pages/NewsArticlePage.tsx"));
const CookiePolicyPage = lazyWithReload(() => import("./pages/CookiePolicyPage.tsx"));
const PrivacyPolicyPage = lazyWithReload(() => import("./pages/PrivacyPolicyPage.tsx"));
const AboutPage = lazyWithReload(() => import("./pages/AboutPage.tsx"));
const ExpertisePage = lazyWithReload(() => import("./pages/ExpertisePage.tsx"));
const NewsPage = lazyWithReload(() => import("./pages/NewsPage.tsx"));
const ContactPage = lazyWithReload(() => import("./pages/ContactPage.tsx"));
const NotFound = lazyWithReload(() => import("./pages/NotFound.tsx"));

const queryClient = new QueryClient();

const AnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    const gaId = import.meta.env.VITE_GA_MEASUREMENT_ID;
    if (gaId) {
      import("react-ga4").then((ReactGA) => {
        ReactGA.default.send({
          hitType: "pageview",
          page: location.pathname + location.search,
          title: document.title,
        });
      });
    }
  }, [location]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AnalyticsTracker />
        <ScrollToTop />
        <CanonicalTag />
        <PageTransition>
          <Suspense fallback={<div className="min-h-screen bg-background" />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/expertise" element={<ExpertisePage />} />
              <Route path="/news" element={<NewsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/our-people" element={<OurPeoplePage />} />
              <Route path="/our-people/:id" element={<OurPeoplePage />} />
              <Route path="/news/:slug" element={<NewsArticlePage />} />
              <Route path="/cookie-policy" element={<CookiePolicyPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="/:slug" element={<PracticeAreaPage />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </PageTransition>
        <CookieConsent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
