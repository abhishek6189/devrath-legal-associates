import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import aboutImage from "@/assets/about-image.jpg";

const AboutPreview = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-subtitle">About Devrath Law Associates</span>
            <h2 className="section-title gold-underline mt-3 mb-8">
              A Passion For Justice. The Experience To Win.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We specialize in various fields of law including criminal defense litigation, civil litigation, land disputes, service matters, labor law related litigation, matrimonial disputes, revenue litigation, company and corporate disputes, arbitration, and many more.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our highly trained professionals work ethically with a result-oriented approach, ensuring the best possible outcomes for our clients across Gujarat.
            </p>
            <Link
              to="/about"
              className="inline-block bg-primary text-primary-foreground px-8 py-3.5 font-semibold text-sm uppercase tracking-wider hover:bg-navy-light transition-colors"
            >
              Learn More About Us
            </Link>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <img src={aboutImage} alt="Our team of legal professionals" className="w-full h-[400px] object-cover" />
            {/* Decorative accent */}
            <div className="absolute -bottom-4 -left-4 w-full h-full border-2 border-accent -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
