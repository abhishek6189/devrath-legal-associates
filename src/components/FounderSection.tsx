import { motion } from "framer-motion";
import { Scale, Award, BookOpen, Phone } from "lucide-react";
import founderImage from "@/assets/PrakashMakwana.png";

const highlights = [
  { icon: Scale, label: "10+ Years of Legal Practice" },
  { icon: Award, label: "500+ Successful Cases" },
  { icon: BookOpen, label: "Expert in Multiple Legal Domains" },
];

const FounderSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              <img
                src={founderImage}
                alt="Prakash Makwana - Founder of Devrath Law Associates"
                className="
                  w-full
                  max-w-[480px]
                  rounded-xl
                  shadow-2xl
                  border
                  border-accent/20
                  object-contain
                "
              />

              {/* Elegant Accent Border */}
              <div className="
                absolute
                -bottom-5
                -right-5
                w-full
                h-full
                border-2
                border-accent
                rounded-xl
                -z-10
                hidden md:block
              " />
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="section-subtitle tracking-widest uppercase text-accent">
              Meet the Founder
            </span>

            <h2 className="section-title gold-underline mt-4 mb-4">
              Prakash Makwana
            </h2>

            <p className="text-accent font-semibold text-lg mb-6">
              Founder & Lead Advocate
            </p>

            <p className="text-muted-foreground leading-relaxed mb-4">
              With over a decade of dedicated legal practice, Prakash Makwana
              founded Devrath Law Associates with a vision to provide
              accessible, high-quality legal services. His deep expertise spans
              criminal law, civil litigation, family disputes, and corporate
              matters.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-8">
              Known for his meticulous preparation, persuasive advocacy, and
              unwavering commitment to clients, he has successfully handled
              hundreds of complex cases. His client-first approach and ethical
              practice have earned him a strong reputation in the legal
              community.
            </p>

            {/* Highlights */}
            <div className="space-y-5 mb-10">
              {highlights.map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-11 h-11 bg-accent/10 flex items-center justify-center rounded-md shrink-0">
                    <item.icon className="text-accent" size={20} />
                  </div>
                  <span className="font-semibold text-foreground">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <a
              href="tel:+919586869627"
              className="
                inline-flex
                items-center
                gap-2
                bg-accent
                text-accent-foreground
                px-8
                py-3.5
                font-semibold
                text-sm
                uppercase
                tracking-wider
                hover:bg-gold-dark
                transition-all
                duration-300
                rounded-md
                shadow-md
              "
            >
              <Phone size={16} /> Schedule a Consultation
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default FounderSection;