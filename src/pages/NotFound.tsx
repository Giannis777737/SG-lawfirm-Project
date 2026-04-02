import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-40 md:pt-48">
        <section className="editorial-section">
          <div className="editorial-container text-center flex flex-col items-center gap-8">
            <p className="editorial-label" aria-hidden="true">page not found</p>
            <h1 className="editorial-heading">404</h1>
            <p className="editorial-body mx-auto text-center">
              The page you are looking for does not exist or has been moved.
            </p>
            <div className="pt-4">
              <Link
                to="/"
                className="editorial-btn bg-navy text-gold font-bold hover:bg-navy-light"
              >
                return home
                <span aria-hidden="true" className="text-lg">→</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
