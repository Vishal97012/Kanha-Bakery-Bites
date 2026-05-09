import { useParams, Link } from "wouter";
import { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingBag, MessageCircle, ChevronLeft, Star, Check, Calendar } from "lucide-react";
import { getProductBySlug, getRelatedProducts, WA_URL } from "@/lib/products";
import { useCart } from "@/lib/cart";
import ProductCard from "@/components/ProductCard";

const BADGE_COLORS: Record<string, string> = {
  "Best Seller": "bg-primary/10 text-primary",
  Trending: "bg-accent/15 text-amber-700",
  Premium: "bg-amber-100 text-amber-800",
  Customizable: "bg-violet-100 text-violet-800",
  "Same Day Delivery": "bg-emerald-100 text-emerald-800",
  "Combo Offer": "bg-orange-100 text-orange-800",
  "Best Value": "bg-amber-100 text-amber-800",
};

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const product = getProductBySlug(slug ?? "");
  const { addToCart } = useCart();

  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [message, setMessage] = useState("");
  const [deliveryDate, setDeliveryDate] = useState("");
  const [addedToCart, setAddedToCart] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center px-4">
        <div>
          <p className="text-5xl mb-4">🎁</p>
          <h2 className="font-serif text-2xl text-foreground mb-2">Gift not found</h2>
          <p className="text-muted-foreground mb-6">This gift may no longer be available.</p>
          <Link href="/products">
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-xl text-sm font-medium">
              Browse All Gifts
            </button>
          </Link>
        </div>
      </div>
    );
  }

  const related = getRelatedProducts(product);

  const handleAddToCart = () => {
    addToCart({ slug: product.slug, name: product.name, price: product.price, qty: 1, image: product.icon });
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const buildWaMsg = () => {
    let msg = `Hi, I want to order a gift.\nProduct: ${product.name}\nPrice: ₹${product.price}`;
    if (message) msg += `\nMessage on card: ${message}`;
    if (deliveryDate) msg += `\nDelivery Date: ${deliveryDate}`;
    if (photoFile) msg += `\nPhoto: I will send the photo separately.`;
    return msg;
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-4 pt-6 pb-2">
        <Link href="/products">
          <span className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
            <ChevronLeft size={14} /> All Gifts
          </span>
        </Link>
      </div>

      {/* Main content */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Image / hero */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55 }}
          >
            <div className="relative rounded-3xl overflow-hidden aspect-square shadow-2xl bg-secondary">
              <img
                src={product.photo}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <span className={`inline-block text-xs font-bold px-3 py-1.5 rounded-full shadow-lg ${BADGE_COLORS[product.badge] ?? "bg-primary/10 text-primary"}`}>
                  {product.badge}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="space-y-6"
          >
            <div>
              <div className="flex items-center gap-2 mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
                ))}
                <span className="text-xs text-muted-foreground ml-1">Trusted by hundreds of customers</span>
              </div>
              <h1 className="font-serif text-3xl text-foreground leading-snug mb-3">{product.name}</h1>
              <p className="text-3xl font-bold text-accent mb-4">₹{product.price.toLocaleString()}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">{product.desc}</p>
            </div>

            {/* Highlights */}
            <div className="bg-secondary/50 rounded-2xl p-4 space-y-2">
              {[
                "100% Fresh & Handmade",
                "Premium packaging included",
                "Free delivery above ₹499",
                "Same day delivery available",
              ].map((h) => (
                <div key={h} className="flex items-center gap-2 text-sm text-foreground/80">
                  <Check size={14} className="text-emerald-600 flex-shrink-0" />
                  {h}
                </div>
              ))}
            </div>

            {/* Customization */}
            <div className="space-y-4">
              <h3 className="font-serif font-semibold text-foreground text-lg">Personalise Your Gift</h3>

              {/* Photo upload (for photo bouquets) */}
              {product.category === "photo-bouquet" && (
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Upload Your Photo</label>
                  <input
                    data-testid="input-photo-upload"
                    type="file"
                    accept="image/*"
                    onChange={(e) => setPhotoFile(e.target.files?.[0] ?? null)}
                    className="w-full text-sm text-muted-foreground file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-secondary file:text-foreground file:font-medium file:cursor-pointer hover:file:bg-primary/10"
                  />
                  {photoFile && (
                    <p className="text-xs text-emerald-600 mt-1 flex items-center gap-1">
                      <Check size={12} /> {photoFile.name} selected
                    </p>
                  )}
                </div>
              )}

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Message on Card (optional)</label>
                <textarea
                  data-testid="input-card-message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write a personal message..."
                  rows={3}
                  className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground resize-none focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </div>

              {/* Delivery date */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  <Calendar size={14} className="inline mr-1" />
                  Preferred Delivery Date
                </label>
                <input
                  data-testid="input-delivery-date"
                  type="date"
                  value={deliveryDate}
                  min={today}
                  onChange={(e) => setDeliveryDate(e.target.value)}
                  className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                data-testid="button-add-to-cart"
                onClick={handleAddToCart}
                className={`flex-1 flex items-center justify-center gap-2 py-4 rounded-2xl font-semibold text-sm transition-all ${
                  addedToCart
                    ? "bg-emerald-600 text-white"
                    : "bg-secondary text-primary hover:bg-primary hover:text-primary-foreground"
                }`}
              >
                {addedToCart ? <Check size={18} /> : <ShoppingBag size={18} />}
                {addedToCart ? "Added to Cart!" : "Add to Cart"}
              </button>
              <a
                href={`${WA_URL}?text=${encodeURIComponent(buildWaMsg())}`}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="button-order-whatsapp"
                className="flex-1 flex items-center justify-center gap-2 py-4 rounded-2xl bg-[#25D366] text-white font-semibold text-sm hover:bg-[#20bc5a] transition-colors shadow-lg"
              >
                <MessageCircle size={18} />
                Order on WhatsApp
              </a>
            </div>
          </motion.div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <section className="mt-20">
            <h2 className="font-serif text-2xl text-foreground mb-6">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {related.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
