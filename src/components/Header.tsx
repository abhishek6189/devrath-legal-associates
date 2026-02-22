import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Practice Areas", path: "/services" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location]);

  return (
    <>
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground text-sm hidden md:block">
        <div className="container flex items-center justify-between py-2">
          <div className="flex items-center gap-6">
             <a href="tel:+919586869627" className="flex items-center gap-1.5 hover:text-accent transition-colors">
              <Phone size={14} /> +91 95868 69627
            </a>
            <a href="mailto:prakashmakwana@yahoo.com" className="flex items-center gap-1.5 hover:text-accent transition-colors">
              <Mail size={14} /> prakashmakwana@yahoo.com
            </a>
            <span className="flex items-center gap-1.5">
              <MapPin size={14} /> Mon – Fri 09:00 AM – 7:00 PM
            </span>
          </div>
          <Link
            to="/contact"
            className="bg-accent text-accent-foreground px-5 py-1.5 text-xs font-semibold uppercase tracking-wider hover:bg-gold-dark transition-colors"
          >
            Get a Consultation
          </Link>
        </div>
      </div>

      {/* Main nav */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-card shadow-lg" : "bg-card/95 backdrop-blur-sm"
        }`}
      >
        <div className="container flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary flex items-center justify-center text-primary-foreground font-heading font-bold text-lg">
              DL
            </div>
            <div className="leading-tight">
              <span className="font-heading font-bold text-foreground text-lg block">DEVRATH LAW ASSOCIATES</span>
              <span className="text-xs text-muted-foreground tracking-widest uppercase">Advocates & Legal Consultants</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-semibold uppercase tracking-wider transition-colors hover:text-accent ${
                  location.pathname === link.path ? "text-accent" : "text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-foreground p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden bg-card border-t border-border overflow-hidden"
            >
              <div className="container py-4 flex flex-col gap-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`text-sm font-semibold uppercase tracking-wider py-2 transition-colors hover:text-accent ${
                      location.pathname === link.path ? "text-accent" : "text-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  to="/contact"
                  className="bg-accent text-accent-foreground px-5 py-2.5 text-sm font-semibold uppercase tracking-wider text-center mt-2"
                >
                  Get a Consultation
                </Link>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;
