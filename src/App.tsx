import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import CookieConsent from "@/components/CookieConsent";
import ScrollToTop from "@/components/ScrollToTop";
import CanonicalTag from "@/components/CanonicalTag";
import PageTransition from "@/components/PageTransition";
import Index from "./pages/Index.tsx";

// Lazy load non-critical routes
const PracticeAreaPage = lazy(() => import("./pages/PracticeAreaPage.tsx"));
const OurPeoplePage = lazy(() => import("./pages/OurPeoplePage.tsx"));
const NewsArticlePage = lazy(() => import("./pages/NewsArticlePage.tsx"));
const CookiePolicyPage = lazy(() => import("./pages/CookiePolicyPage.tsx"));
const PrivacyPolicyPage = lazy(() => import("./pages/PrivacyPolicyPage.tsx"));
const AboutPage = lazy(() => import("./pages/AboutPage.tsx"));
const ExpertisePage = lazy(() => import("./pages/ExpertisePage.tsx"));
const NewsPage = lazy(() => import("./pages/NewsPage.tsx"));
const ContactPage = lazy(() => import("./pages/ContactPage.tsx"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
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
              <Route path="/our-people/:id" element={<PersonPage />} />
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
