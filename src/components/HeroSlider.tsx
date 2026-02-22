import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const slides = [
  {
    image: hero1,
    subtitle: "Devrath Law Associates",
    title: "Trustworthy Counsel\n& Expertise",
    description: "With years of experience and a client-centered approach, we ensure top-tier legal representation and support for all your legal needs.",
  },
  {
    image: hero2,
    subtitle: "Criminal Defense",
    title: "Championing Justice\nWith Our Experts",
    description: "We offer unparalleled legal defense. Trust our expertise to protect your rights and ensure a fair trial.",
  },
  {
    image: hero3,
    subtitle: "Family & Civil Law",
    title: "Skilled Lawyers for\na Smooth Resolution",
    description: "Our skilled lawyers ensure smooth transitions during challenging times. Trust us for expert guidance and compassionate support.",
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((p) => (p + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((p) => (p - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative h-[70vh] md:h-[85vh] overflow-hidden">
      {/* Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[current].image})` }}
          />
          <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 container h-full flex items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl"
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-[0.25em] mb-4 block">
              {slides[current].subtitle}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground leading-tight mb-6 whitespace-pre-line">
              {slides[current].title}
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl mb-8 max-w-lg leading-relaxed">
              {slides[current].description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/about"
                className="bg-accent text-accent-foreground px-8 py-3.5 font-semibold text-sm uppercase tracking-wider hover:bg-gold-dark transition-colors"
              >
                Read More
              </Link>
              <Link
                to="/contact"
                className="border-2 border-primary-foreground/30 text-primary-foreground px-8 py-3.5 font-semibold text-sm uppercase tracking-wider hover:border-accent hover:text-accent transition-colors"
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation arrows */}
      <div className="absolute bottom-8 right-8 z-10 flex gap-2">
        <button onClick={prev} className="w-12 h-12 border border-primary-foreground/30 flex items-center justify-center text-primary-foreground hover:bg-accent hover:border-accent hover:text-accent-foreground transition-colors" aria-label="Previous slide">
          <ChevronLeft size={20} />
        </button>
        <button onClick={next} className="w-12 h-12 border border-primary-foreground/30 flex items-center justify-center text-primary-foreground hover:bg-accent hover:border-accent hover:text-accent-foreground transition-colors" aria-label="Next slide">
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1 transition-all duration-500 ${i === current ? "w-10 bg-accent" : "w-5 bg-primary-foreground/30"}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
