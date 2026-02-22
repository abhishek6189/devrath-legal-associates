import { useState, FormEvent } from "react";
import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      await emailjs.send(
        "service_6sw8ppm",
        "template_dtl9bjj",
        {
          user_name: formData.name,
          user_email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        },
        "jL5tQ69s0nw29rFWQ"
      );

      toast({
        title: "Message Sent!",
        description:
          "Thank you for contacting us. We will get back to you soon.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast({
        title: "Error!",
        description: "Something went wrong. Please try again.",
      });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <Layout>
      <PageBanner title="Contact Us" breadcrumb="Contact" />

      {/* Upgraded Background */}
      <section className="py-24 bg-gradient-to-br from-[hsl(var(--cream))] via-white to-[hsl(var(--cream))] relative overflow-hidden">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-16">

            {/* CONTACT INFO */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <span className="section-subtitle">Get In Touch</span>

              <h2 className="section-title gold-underline mt-3 mb-10">
                Contact Information
              </h2>

              <div className="space-y-8 text-muted-foreground">
                <div className="flex gap-4 items-start">
                  <MapPin className="text-accent mt-1" />
                  <p>Vadodara, Gujarat</p>
                </div>

                <div className="flex gap-4 items-start">
                  <Phone className="text-accent mt-1" />
                  <p>+91 95868 69627</p>
                </div>

                <div className="flex gap-4 items-start">
                  <Mail className="text-accent mt-1" />
                  <p>prakashmakwana@yahoo.com</p>
                </div>

                <div className="flex gap-4 items-start">
                  <Clock className="text-accent mt-1" />
                  <p>Mon – Fri: 9 AM – 7 PM</p>
                </div>
              </div>
            </motion.div>

            {/* CONTACT FORM */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2"
            >
              <form
                onSubmit={handleSubmit}
                className="relative p-12 rounded-xl border border-white/30 bg-white/20 backdrop-blur-xl shadow-2xl overflow-hidden"
              >
                {/* Soft Gold Glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.15),transparent_50%)] pointer-events-none"></div>

                <h3 className="font-heading font-bold text-3xl text-primary mb-3 relative z-10">
                  Send Us a Message
                </h3>

                <div className="w-16 h-1 bg-accent mb-10 relative z-10"></div>

                <div className="grid md:grid-cols-2 gap-8 mb-8 relative z-10">

                  <input
                    name="name"
                    required
                    placeholder="Full Name *"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-5 py-3.5 bg-white/80 border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-300"
                  />

                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-5 py-3.5 bg-white/80 border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-300"
                  />

                  <input
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-5 py-3.5 bg-white/80 border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-300"
                  />

                  <select
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-5 py-3.5 bg-white/80 border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-300"
                  >
                    <option value="">Select Subject *</option>
                    <option value="Criminal Law">Criminal Law</option>
                    <option value="Family Law">Family Law</option>
                    <option value="Corporate Law">Corporate Law</option>
                  </select>
                </div>

                <textarea
                  name="message"
                  required
                  rows={6}
                  placeholder="Your Message *"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-5 py-3.5 bg-white/80 border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-300 resize-none mb-10 relative z-10"
                />

                <button
                  type="submit"
                  className="relative z-10 bg-gradient-to-r from-[hsl(var(--gold))] to-[hsl(var(--gold-dark))] text-white px-10 py-3.5 font-semibold tracking-wide rounded-md shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300 flex items-center gap-2"
                >
                  <Send size={16} />
                  Send Message
                </button>
              </form>
            </motion.div>

          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;