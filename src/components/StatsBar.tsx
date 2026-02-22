import { motion } from "framer-motion";

const stats = [
  { value: "500+", label: "Successful Cases" },
  { value: "800+", label: "Cases Closed" },
  { value: "300+", label: "Trusted Clients" },
  { value: "10+", label: "Expert Lawyers" },
];

const StatsBar = () => {
  return (
    <section className="bg-primary py-16">
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="text-center"
            >
              <span className="text-4xl md:text-5xl font-heading font-bold text-accent block mb-2">
                {stat.value}
              </span>
              <span className="text-primary-foreground/70 text-sm uppercase tracking-wider">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
