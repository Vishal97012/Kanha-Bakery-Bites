import { Link } from "wouter";
import { motion } from "framer-motion";
import { ShoppingBag, Truck, Clock, Shield, Star, Gift, ChevronRight } from "lucide-react";
import { PRODUCTS, WA_URL, type Category } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

const CATEGORIES = [
  { key: "chocolate-bouquet" as Category, label: "Chocolate Bouquets", icon: "🍫", desc: "Handcrafted chocolate arrangements" },
  { key: "photo-bouquet" as Category, label: "Photo Bouquets", icon: "📸", desc: "Memories wrapped in roses" },
  { key: "hamper" as Category, label: "Premium Hampers", icon: "🎁", desc: "Curated luxury gift boxes" },
  { key: "couple" as Category, label: "Couple Gifts", icon: "💝", desc: "Celebrate love together" },
];

const REVIEWS = [
  { name: "Priya Sharma", rating: 5, text: "The chocolate bouquet was absolutely stunning. My husband loved it! Will definitely order again.", location: "Arrah" },
  { name: "Rahul Verma", rating: 5, text: "Same day delivery and the packaging was premium. Gifted the hamper to my mother and she was so happy!", location: "Patna" },
  { name: "Anjali Singh", rating: 5, text: "Ordered a photo bouquet for our anniversary — it was perfect. The quality was far better than I expected.", location: "Ara" },
];

const COMBOS = PRODUCTS.filter((p) => p.category === "combo");
const TRENDING = PRODUCTS.filter((p) => ["Best Seller", "Trending", "Premium"].includes(p.badge)).slice(0, 6);

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.55, ease: "easeOut" } }),
};

const stagger = {
  visible: { transition: { staggerChildren: 0.09 } },
};

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-rose-950 via-rose-900 to-amber-900">
        {/* Decorative blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-rose-800/30 blur-3xl" />
          <div className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full bg-amber-800/30 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-white/3 blur-3xl" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto py-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-white/80 text-xs font-medium mb-8 tracking-wider uppercase"
          >
            <Gift size={12} className="text-amber-300" />
            Handcrafted With Love · Arrah, Bihar
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="font-serif text-5xl md:text-7xl text-white leading-tight mb-6"
          >
            Make Every{" "}
            <span className="text-amber-300 italic">Moment</span>{" "}
            Special
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-white/70 text-lg md:text-xl leading-relaxed mb-10 max-w-xl mx-auto"
          >
            Luxury chocolate bouquets, personalised photo gifts, and premium hampers — delivered with care to your door.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/products">
              <button
                data-testid="button-hero-shop"
                className="px-8 py-4 bg-white text-rose-900 font-semibold rounded-2xl hover:bg-amber-50 transition-colors shadow-2xl text-sm flex items-center gap-2"
              >
                <ShoppingBag size={16} />
                Shop All Gifts
              </button>
            </Link>
            <a
              href={`${WA_URL}?text=${encodeURIComponent("Hi! I want to order a gift from Kanha Gifts.")}`}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="button-hero-whatsapp"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-2xl hover:bg-white/20 transition-colors text-sm flex items-center gap-2"
            >
              <span className="w-4 h-4 inline-block">
                <svg viewBox="0 0 24 24" fill="currentColor" className="text-emerald-400"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </span>
              Order on WhatsApp
            </a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/40 text-xs">
          <span className="tracking-widest uppercase text-[10px]">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent" />
        </div>
      </section>

      {/* ── Trust Badges ── */}
      <section className="bg-primary text-primary-foreground py-5">
        <div className="max-w-6xl mx-auto px-4 flex flex-wrap justify-center gap-x-8 gap-y-3">
          {[
            { icon: <Truck size={16} />, text: "Free Delivery above ₹499" },
            { icon: <Clock size={16} />, text: "Same Day Delivery" },
            { icon: <Shield size={16} />, text: "100% Fresh Guarantee" },
            { icon: <Gift size={16} />, text: "Pure Handmade" },
          ].map((b) => (
            <div key={b.text} className="flex items-center gap-2 text-sm text-primary-foreground/90 font-medium">
              <span className="text-amber-300">{b.icon}</span>
              {b.text}
            </div>
          ))}
        </div>
      </section>

      {/* ── Categories ── */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="text-center mb-12"
        >
          <motion.p variants={fadeUp} className="text-accent font-medium text-sm tracking-widest uppercase mb-3">Our Collections</motion.p>
          <motion.h2 variants={fadeUp} className="font-serif text-4xl text-foreground mb-4">What Would You Like to Gift?</motion.h2>
          <motion.p variants={fadeUp} className="text-muted-foreground max-w-lg mx-auto">
            From indulgent chocolate bouquets to bespoke photo gifts — find something perfect for everyone you love.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {CATEGORIES.map((cat) => (
            <motion.div key={cat.key} variants={fadeUp}>
              <Link href={`/products?category=${cat.key}`}>
                <div
                  data-testid={`card-category-${cat.key}`}
                  className="group bg-card border border-card-border rounded-2xl p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                >
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{cat.icon}</div>
                  <h3 className="font-serif font-semibold text-foreground text-sm mb-1">{cat.label}</h3>
                  <p className="text-muted-foreground text-xs">{cat.desc}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── Trending Gifts ── */}
      <section className="py-16 px-4 bg-secondary/40">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="flex items-end justify-between mb-10"
          >
            <div>
              <motion.p variants={fadeUp} className="text-accent font-medium text-sm tracking-widest uppercase mb-2">Handpicked For You</motion.p>
              <motion.h2 variants={fadeUp} className="font-serif text-4xl text-foreground">Trending Gifts</motion.h2>
            </div>
            <motion.div variants={fadeUp}>
              <Link href="/products">
                <span className="flex items-center gap-1 text-sm text-primary font-medium hover:gap-2 transition-all cursor-pointer">
                  View All <ChevronRight size={16} />
                </span>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="grid grid-cols-2 md:grid-cols-3 gap-5"
          >
            {TRENDING.map((product) => (
              <motion.div key={product.slug} variants={fadeUp}>
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Combo Offers ── */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="text-center mb-12"
        >
          <motion.p variants={fadeUp} className="text-accent font-medium text-sm tracking-widest uppercase mb-3">Bundle & Save</motion.p>
          <motion.h2 variants={fadeUp} className="font-serif text-4xl text-foreground mb-4">Combo Offers</motion.h2>
          <motion.p variants={fadeUp} className="text-muted-foreground max-w-lg mx-auto">
            Pair a cake with a hamper or bouquet — the perfect bundle for grand celebrations.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {COMBOS.map((product) => (
            <motion.div key={product.slug} variants={fadeUp}>
              <Link href={`/product/${product.slug}`}>
                <div
                  data-testid={`card-combo-${product.slug}`}
                  className="group bg-card border border-card-border rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex"
                >
                  <div className={`w-28 flex-shrink-0 bg-gradient-to-br ${product.gradient} flex items-center justify-center text-4xl`}>
                    {product.icon}
                  </div>
                  <div className="p-5 flex-1">
                    <span className="text-[10px] font-bold bg-amber-100 text-amber-800 rounded-full px-2.5 py-0.5">{product.badge}</span>
                    <h3 className="font-serif font-semibold text-foreground mt-2 mb-1 text-base">{product.name}</h3>
                    <p className="text-muted-foreground text-xs line-clamp-2 mb-3">{product.desc}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-accent font-bold text-lg">₹{product.price.toLocaleString()}</span>
                      <span className="text-xs text-primary font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                        Order Now <ChevronRight size={14} />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── Reviews ── */}
      <section className="py-20 px-4 bg-gradient-to-br from-rose-950 to-amber-950 text-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="text-center mb-12"
          >
            <motion.p variants={fadeUp} className="text-amber-300 font-medium text-sm tracking-widest uppercase mb-3">Happy Customers</motion.p>
            <motion.h2 variants={fadeUp} className="font-serif text-4xl text-white mb-4">What People Are Saying</motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {REVIEWS.map((review, i) => (
              <motion.div key={i} variants={fadeUp}>
                <div
                  data-testid={`card-review-${i}`}
                  className="bg-white/8 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
                >
                  <div className="flex mb-3">
                    {Array.from({ length: review.rating }).map((_, j) => (
                      <Star key={j} size={14} className="text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-white/80 text-sm leading-relaxed italic mb-5">"{review.text}"</p>
                  <div>
                    <div className="font-semibold text-white text-sm">{review.name}</div>
                    <div className="text-white/50 text-xs">{review.location}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Custom Gift CTA ── */}
      <section className="py-20 px-4 max-w-5xl mx-auto text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
        >
          <motion.p variants={fadeUp} className="text-accent font-medium text-sm tracking-widest uppercase mb-3">Something Unique?</motion.p>
          <motion.h2 variants={fadeUp} className="font-serif text-4xl text-foreground mb-4">Build Your Custom Gift</motion.h2>
          <motion.p variants={fadeUp} className="text-muted-foreground max-w-lg mx-auto mb-8">
            Have something special in mind? Tell us your vision and we'll craft a one-of-a-kind gift that no one else can offer.
          </motion.p>
          <motion.div variants={fadeUp}>
            <Link href="/custom-gift">
              <button
                data-testid="button-cta-custom-gift"
                className="px-10 py-4 bg-primary text-primary-foreground font-semibold rounded-2xl hover:bg-primary/90 transition-colors shadow-lg text-sm"
              >
                Create a Custom Gift
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
