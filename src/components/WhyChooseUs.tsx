import { motion } from "framer-motion";
import { Award, Target, Users, Shield, Heart, MessageSquare } from "lucide-react";

const features = [
  { icon: Award, title: "Expertise", desc: "Extensive knowledge and experience in specialized areas of law." },
  { icon: Target, title: "Track Record", desc: "Proven history of winning cases and achieving favorable outcomes." },
  { icon: Users, title: "Personalized Service", desc: "Tailored legal strategies crafted for each client's unique needs." },
  { icon: Shield, title: "Integrity & Ethics", desc: "Highest standards of honesty, confidentiality, and professionalism." },
  { icon: Heart, title: "Client Satisfaction", desc: "Going above and beyond to exceed expectations every time." },
  { icon: MessageSquare, title: "Communication", desc: "Clear explanations and persuasive advocacy in every matter." },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-14">
          <span className="section-subtitle">Why We Stand Out</span>
          <h2 className="section-title gold-underline gold-underline-center mt-3 mx-auto inline-block">
            Why Clients Choose Us
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="flex gap-5 p-6 bg-card border border-border hover:border-accent transition-colors"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <feat.icon className="text-accent shrink-0 mt-1" size={32} strokeWidth={1.5} />
              <div>
                <h3 className="font-heading font-bold text-lg mb-2 text-foreground">{feat.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feat.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
