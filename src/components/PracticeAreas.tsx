import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Scale, Users, Home, Briefcase, Shield, Gavel, FileText, Building } from "lucide-react";

const areas = [
  { icon: Gavel, title: "Criminal Law", desc: "Expert criminal defense strategies tailored to your case for a strong legal defense." },
  { icon: Users, title: "Family Law", desc: "Resolve family disputes with compassion and expertise. From divorce to child custody." },
  { icon: Scale, title: "Divorce Law", desc: "Navigate divorce proceedings with confidence. Compassionate support & strategic solutions." },
  { icon: Home, title: "Property Law", desc: "Secure your property transactions with confidence. From acquisitions to disputes." },
  { icon: Shield, title: "Intellectual Property", desc: "Safeguard your intellectual property with tailored strategies to protect your innovations." },
  { icon: Briefcase, title: "Labour Law", desc: "Ensure fair treatment in the workplace with expert guidance for employment matters." },
  { icon: FileText, title: "Civil Litigation", desc: "Navigate civil disputes effectively with strategic solutions for legal conflicts." },
  { icon: Building, title: "Corporate Law", desc: "Comprehensive counsel for businesses, from regulatory compliance to transactions." },
];

const PracticeAreas = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container">
        <div className="text-center mb-14">
          <span className="section-subtitle">What We Are Expert At</span>
          <h2 className="section-title gold-underline gold-underline-center mt-3 mx-auto inline-block">
            Legal Practice Areas
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {areas.map((area, i) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <Link
                to="/services"
                className="group block bg-card p-8 text-center hover:bg-primary transition-all duration-300 h-full"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <area.icon className="mx-auto mb-5 text-accent group-hover:text-accent" size={40} strokeWidth={1.5} />
                <h3 className="font-heading font-bold text-lg mb-3 text-foreground group-hover:text-primary-foreground transition-colors">
                  {area.title}
                </h3>
                <p className="text-sm text-muted-foreground group-hover:text-primary-foreground/70 transition-colors leading-relaxed">
                  {area.desc}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;
