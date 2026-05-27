import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import useDocumentTitle from "@/hooks/useDocumentTitle";
import MetaTags from "@/components/MetaTags";

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
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
