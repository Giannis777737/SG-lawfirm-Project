import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";

// Lazy load below-fold sections
const AboutSection = lazy(() => import("@/components/AboutSection"));
const PhilosophySection = lazy(() => import("@/components/PhilosophySection"));
const ExpertiseSection = lazy(() => import("@/components/ExpertiseSection"));
const StrategicProjectsSection = lazy(() => import("@/components/StrategicProjectsSection"));
const PeopleSection = lazy(() => import("@/components/PeopleSection"));
const NewsSection = lazy(() => import("@/components/NewsSection"));
const ContactSection = lazy(() => import("@/components/ContactSection"));
const Footer = lazy(() => import("@/components/Footer"));

const SectionFallback = () => <div className="min-h-[200px]" />;

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content" role="main">
        <HeroSection />
        <Suspense fallback={<SectionFallback />}>
          <AboutSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <PhilosophySection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <ExpertiseSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <PeopleSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <NewsSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <ContactSection />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
