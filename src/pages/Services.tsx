import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import CTABanner from "@/components/CTABanner";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Scale, Users, Home, Briefcase, Shield, Gavel, FileText, Building, BadgeCheck, BookOpen, ArrowRight } from "lucide-react";

const services = [
  { icon: Gavel, title: "Criminal Law", desc: "Expert criminal defense strategies tailored to your case. We defend your rights with determination and skill, ensuring the best possible outcome in court." },
  { icon: Users, title: "Family Law", desc: "Compassionate and expert family law services including divorce, child custody, maintenance, and domestic disputes with personalized solutions." },
  { icon: Scale, title: "Divorce Law", desc: "Navigate divorce proceedings with confidence. Our experienced team provides compassionate support and strategic solutions tailored to your needs." },
  { icon: Home, title: "Property Law", desc: "Secure your property transactions with confidence. From acquisitions to disputes, trust our expertise for seamless legal solutions." },
  { icon: Shield, title: "Intellectual Property", desc: "Safeguard your intellectual property with tailored strategies. We protect your innovations, trademarks, copyrights, and patents." },
  { icon: Briefcase, title: "Labour Law", desc: "Ensure fair treatment in the workplace with expert guidance and representation for all employment-related legal matters." },
  { icon: FileText, title: "Civil Litigation", desc: "Navigate civil disputes effectively with our experienced litigation team offering strategic solutions for a range of legal conflicts." },
  { icon: Building, title: "Corporate Law", desc: "Elevate your corporate legal strategy. Comprehensive counsel for businesses, from compliance to mergers and acquisitions." },
  { icon: BadgeCheck, title: "Cheque Bounce Cases", desc: "Expert handling of cheque bounce cases under the Negotiable Instruments Act with strategic litigation approach." },
  { icon: BookOpen, title: "POCSO Matters", desc: "Sensitive and expert legal support for POCSO matters. Protecting the rights and safety of children in delicate cases." },
];

const Services = () => {
  return (
    <Layout>
      <PageBanner title="Practice Areas" breadcrumb="Practice Areas" />

      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <span className="section-subtitle">Our Expertise</span>
            <h2 className="section-title gold-underline gold-underline-center mt-3 mx-auto inline-block mb-6">
              Comprehensive Legal Services
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We offer a wide range of legal services across multiple practice areas, ensuring our clients receive expert representation and counsel.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group flex gap-6 p-8 bg-card border border-border hover:border-accent transition-all duration-300"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <service.icon className="text-accent shrink-0 mt-1" size={44} strokeWidth={1.5} />
                <div>
                  <h3 className="font-heading font-bold text-xl mb-3 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">{service.desc}</p>
                  <Link to="/contact" className="inline-flex items-center gap-2 text-accent font-semibold text-sm uppercase tracking-wider hover:gap-3 transition-all">
                    Get Consultation <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </Layout>
  );
};

export default Services;
