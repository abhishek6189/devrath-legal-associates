import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main footer */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-accent flex items-center justify-center text-accent-foreground font-heading font-bold text-lg">
                DL
              </div>
              <span className="font-heading font-bold text-lg">DEVRATH LAW ASSOCIATES</span>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-5">
              A leading law firm providing comprehensive legal services with a commitment to justice, integrity, and client satisfaction.
            </p>
            <div className="flex gap-3">
              {[Facebook, Linkedin, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 border border-primary-foreground/20 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-accent-foreground transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-5">Quick Links</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              {[
                { label: "Home", path: "/" },
                { label: "About Us", path: "/about" },
                { label: "Practice Areas", path: "/services" },
                { label: "Contact Us", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="hover:text-accent transition-colors">
                    → {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-5">Practice Areas</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              {["Criminal Law", "Family Law", "Corporate Law", "Property Law", "Civil Litigation", "Labour Law"].map((area) => (
                <li key={area}>
                  <Link to="/services" className="hover:text-accent transition-colors">
                    → {area}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-5">Contact Info</h4>
            <ul className="space-y-4 text-sm text-primary-foreground/70">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-accent shrink-0 mt-0.5" />
                <span> Vadodara, Gujarat 3930001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-accent shrink-0" />
                <a href="tel:+919586869627" className="hover:text-accent transition-colors">+91 95868 69627</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-accent shrink-0" />
                <a href="tel:+919586869672" className="hover:text-accent transition-colors">+91 95868 69672</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-accent shrink-0" />
                <a href="mailto:prakashmakwana@yahoo.com" className="hover:text-accent transition-colors">prakashmakwana@yahoo.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-primary-foreground/50">
          <p>© {new Date().getFullYear()} Devrath Law Associates. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
