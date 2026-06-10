import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import useDocumentTitle from "@/hooks/useDocumentTitle";
import MetaTags from "@/components/MetaTags";
import { Link } from "react-router-dom";

const ContactPage = () => {
  useDocumentTitle("Contact");
  return (
    <div className="min-h-screen bg-background">
      <MetaTags
        title="Contact | Selekos-Gouskou & Co"
        description="Get in touch with Selekos-Gouskou & Co in Athens, Greece."
      />
      <Navbar />
      <main className="pt-28 sm:pt-32 md:pt-36">
        <div className="editorial-container pt-4">
          <Link to="/" className="editorial-link">
            <span>←</span> Back to Homepage
          </Link>
        </div>
        <ContactSection />
        <div className="editorial-container pb-20">
          <Link to="/" className="editorial-link">
            <span>←</span> Back to home page
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
