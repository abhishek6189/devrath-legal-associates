import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    text: "Working with this advocate was an absolute pleasure. They are not only incredibly knowledgeable, but also genuinely caring about their clients' well-being. Their compassionate approach combined with outstanding advocacy skills created a strong case on my behalf.",
    name: "Vaja Samir",
    role: "Business Owner",
  },
  {
    text: "Highly recommend Devrath Law Associates! They provided excellent legal representation and their expertise & dedication led to a successful outcome for my case. I am truly grateful for their professionalism and support throughout the process.",
    name: "Yogi Patel",
    role: "Entrepreneur",
  },
  {
    text: "I couldn't be more grateful for the outstanding legal assistance I received. Facing a daunting legal situation, I turned to them for help, and they exceeded all expectations. Their expertise, professionalism, and dedication were evident from our first consultation.",
    name: "Rakesh Mehta",
    role: "Corporate Executive",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const next = () => setCurrent((p) => (p + 1) % testimonials.length);
  const prev = () => setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-20 bg-secondary">
      <div className="container max-w-3xl text-center">
        <span className="section-subtitle">Testimonials</span>
        <h2 className="section-title gold-underline gold-underline-center mt-3 mx-auto inline-block mb-12">
          Words From Clients
        </h2>

        <div className="relative">
          <Quote className="mx-auto mb-6 text-accent/30" size={48} />
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              <p className="text-lg text-foreground leading-relaxed mb-8 italic">
                "{testimonials[current].text}"
              </p>
              <p className="font-heading font-bold text-foreground">{testimonials[current].name}</p>
              <p className="text-sm text-muted-foreground">{testimonials[current].role}</p>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-3 mt-8">
            <button onClick={prev} className="w-10 h-10 border border-border flex items-center justify-center hover:bg-accent hover:border-accent hover:text-accent-foreground transition-colors" aria-label="Previous testimonial">
              <ChevronLeft size={18} />
            </button>
            <button onClick={next} className="w-10 h-10 border border-border flex items-center justify-center hover:bg-accent hover:border-accent hover:text-accent-foreground transition-colors" aria-label="Next testimonial">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
