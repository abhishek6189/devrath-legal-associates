import { Link } from "react-router-dom";
import { Phone } from "lucide-react";

const CTABanner = () => {
  return (
    <section className="bg-accent py-10">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="text-accent-foreground/70 text-sm uppercase tracking-wider mb-1">
            Are you looking for the best lawyer to help?
          </p>
          <h3 className="font-heading font-bold text-2xl text-accent-foreground">
            Let us help you! Call Now
          </h3>
        </div>
        <a
          href="tel:+919586869627"
          className="flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 font-semibold text-lg hover:bg-navy-dark transition-colors"
        >
          <Phone size={20} />
          +91 95868 69627
        </a>
      </div>
    </section>
  );
};

export default CTABanner;
