import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import StatsBar from "@/components/StatsBar";
import WhyChooseUs from "@/components/WhyChooseUs";
import { motion } from "framer-motion";
import aboutImage from "@/assets/about-image.jpg";

const About = () => {
  return (
    <Layout>
      <PageBanner title="About Us" breadcrumb="About Us" />

      {/* Main about section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="section-subtitle">Who We Are</span>
              <h2 className="section-title gold-underline mt-3 mb-8">
                Dedicated Legal Professionals Serving Justice
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Devrath Law Associates is a premier law firm situated in Ahmedabad, Gujarat. We specialize in various fields of law including criminal defense litigation, civil litigation, land disputes, service matters, labor law related litigation, matrimonial disputes of both civil and criminal nature, revenue litigation, company and corporate disputes, arbitration, litigation under the Negotiable Instruments Act, and many more fields.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our highly trained professionals work with a result-oriented approach, ensuring the best possible outcomes for our clients. We are committed to upholding the highest standards of legal practice while maintaining transparency and ethics in all our dealings.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With a deep understanding of the legal landscape and years of experience, we have built a reputation as one of the most trusted law firms in Gujarat. Our commitment to excellence and client satisfaction drives everything we do.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <img src={aboutImage} alt="Our professional team" className="w-full h-[450px] object-cover" />
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-accent -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card p-10 border border-border"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <h3 className="font-heading font-bold text-2xl text-foreground mb-4">Our Mission</h3>
              <div className="w-12 h-0.5 bg-accent mb-6" />
              <p className="text-muted-foreground leading-relaxed">
                To deliver exceptional legal services with unwavering commitment to justice, transparency, and client satisfaction. We strive to protect the rights of our clients through strategic legal solutions and compassionate counsel.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-card p-10 border border-border"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <h3 className="font-heading font-bold text-2xl text-foreground mb-4">Our Vision</h3>
              <div className="w-12 h-0.5 bg-accent mb-6" />
              <p className="text-muted-foreground leading-relaxed">
                To be the most trusted and respected law firm in Gujarat, known for our integrity, expertise, and the positive impact we make in our clients' lives and the community.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <StatsBar />
      <WhyChooseUs />
    </Layout>
  );
};

export default About;
