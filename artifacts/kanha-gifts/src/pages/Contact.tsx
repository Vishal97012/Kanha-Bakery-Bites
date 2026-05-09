import { motion } from "framer-motion";
import { MapPin, Phone, Clock, MessageCircle, Instagram, Truck, Star } from "lucide-react";
import { WA_URL, WA_NUMBER } from "@/lib/products";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" } }),
};

const stagger = { visible: { transition: { staggerChildren: 0.09 } } };

const HOURS = [
  { day: "Monday – Friday", time: "9:00 AM – 9:00 PM" },
  { day: "Saturday", time: "8:00 AM – 10:00 PM" },
  { day: "Sunday", time: "9:00 AM – 8:00 PM" },
];

const DELIVERY_AREAS = [
  "Arrah City", "Koilwar", "Sandesh", "Jagdishpur", "Piro",
  "Bihiya", "Shahpur", "Sahar", "Tarari", "Garhani",
];

export default function Contact() {
  const waMsg = "Hi, I want to know more about your gifts.";

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-rose-950 via-rose-900 to-amber-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-xs font-medium tracking-widest uppercase mb-6"
          >
            <MessageCircle size={12} className="text-amber-300" />
            We're here to help
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl mb-4"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/70 text-lg max-w-xl mx-auto"
          >
            Questions about your order? Want to plan a custom gift? We're just a WhatsApp message away.
          </motion.p>
        </div>
      </section>

      {/* Cards */}
      <section className="py-16 px-4 max-w-5xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="grid md:grid-cols-2 gap-6 mb-12"
        >
          {/* WhatsApp */}
          <motion.div variants={fadeUp} className="bg-card border border-card-border rounded-3xl p-8 shadow-sm hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 rounded-2xl bg-[#25D366]/10 flex items-center justify-center mb-5">
              <MessageCircle size={28} className="text-[#25D366]" />
            </div>
            <h2 className="font-serif text-2xl text-foreground mb-2">WhatsApp Order</h2>
            <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
              The fastest way to order or get help. Message us anytime and we'll respond within minutes.
            </p>
            <a
              href={`${WA_URL}?text=${encodeURIComponent(waMsg)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-[#25D366] text-white px-6 py-3 rounded-xl font-semibold text-sm shadow-md hover:bg-[#1fb055] transition-colors"
            >
              <MessageCircle size={18} />
              Message on WhatsApp
            </a>
            <p className="text-muted-foreground text-xs mt-4">+91 {WA_NUMBER.slice(2, 7)} {WA_NUMBER.slice(7)}</p>
          </motion.div>

          {/* Location */}
          <motion.div variants={fadeUp} className="bg-card border border-card-border rounded-3xl p-8 shadow-sm hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
              <MapPin size={28} className="text-primary" />
            </div>
            <h2 className="font-serif text-2xl text-foreground mb-2">Our Location</h2>
            <p className="text-muted-foreground text-sm mb-1 leading-relaxed">Police Line, M.P. Bagh</p>
            <p className="text-muted-foreground text-sm mb-5 leading-relaxed">Arrah, Bihar — 802301</p>
            <a
              href="https://maps.google.com/?q=Police+Line+MP+Bagh+Arrah+Bihar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary/10 text-primary font-medium text-sm hover:bg-primary/20 transition-colors"
            >
              <MapPin size={16} />
              Open in Maps
            </a>
          </motion.div>

          {/* Hours */}
          <motion.div variants={fadeUp} className="bg-card border border-card-border rounded-3xl p-8 shadow-sm hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 rounded-2xl bg-amber-100 flex items-center justify-center mb-5">
              <Clock size={28} className="text-amber-700" />
            </div>
            <h2 className="font-serif text-2xl text-foreground mb-5">Working Hours</h2>
            <div className="space-y-3">
              {HOURS.map((h) => (
                <div key={h.day} className="flex justify-between items-center text-sm border-b border-border/50 pb-2 last:border-0">
                  <span className="text-foreground font-medium">{h.day}</span>
                  <span className="text-accent font-semibold">{h.time}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Delivery */}
          <motion.div variants={fadeUp} className="bg-card border border-card-border rounded-3xl p-8 shadow-sm hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center mb-5">
              <Truck size={28} className="text-emerald-700" />
            </div>
            <h2 className="font-serif text-2xl text-foreground mb-2">Delivery Areas</h2>
            <p className="text-muted-foreground text-xs mb-4">Free delivery above ₹499 · Same day in Arrah city</p>
            <div className="flex flex-wrap gap-2">
              {DELIVERY_AREAS.map((area) => (
                <span key={area} className="px-3 py-1 bg-secondary rounded-full text-xs font-medium text-foreground/80">
                  {area}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Social & Reviews */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="text-center"
        >
          <motion.div variants={fadeUp} className="bg-gradient-to-br from-rose-50 to-amber-50 border border-card-border rounded-3xl p-10 shadow-sm">
            <Star className="mx-auto text-amber-400 fill-amber-400 mb-3" size={32} />
            <h2 className="font-serif text-2xl text-foreground mb-2">Follow Us on Instagram</h2>
            <p className="text-muted-foreground text-sm mb-5 max-w-md mx-auto">
              See our latest creations, behind-the-scenes, and happy customers on Instagram.
            </p>
            <a
              href="https://www.instagram.com/kanhahomebakery"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-gradient-to-r from-rose-600 to-amber-500 text-white font-semibold text-sm shadow-md hover:opacity-90 transition-opacity"
            >
              <Instagram size={18} />
              @kanhahomebakery
            </a>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
