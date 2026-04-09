import { useState } from "react";
import { Star, ShoppingCart } from "lucide-react";
import { CAKES, type Cake } from "@/lib/data";
import { addToCart, WHATSAPP_NUMBER, generateWhatsAppMessage, getCart } from "@/lib/cart";

const WEIGHTS: Array<"500g" | "1kg" | "2kg"> = ["500g", "1kg", "2kg"];

function CakeCard({ cake }: { cake: Cake }) {
  const [selectedWeight, setSelectedWeight] = useState<"500g" | "1kg" | "2kg">("1kg");
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart({
      name: cake.name,
      price: cake.prices[selectedWeight],
      weight: selectedWeight,
      quantity: 1,
      imageEmoji: cake.emoji,
    });
    window.dispatchEvent(new Event("cart-updated"));
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const handleOrderNow = () => {
    const cart = [
      {
        id: "temp",
        name: cake.name,
        price: cake.prices[selectedWeight],
        weight: selectedWeight,
        quantity: 1,
        imageEmoji: cake.emoji,
      },
    ];
    const msg = generateWhatsAppMessage(cart);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
  };

  return (
    <div className="cake-card bg-white rounded-2xl border border-border shadow-sm overflow-hidden">
      {/* Cake image area */}
      <div className="relative h-36 bg-gradient-to-br from-pink-100 to-amber-50 flex items-center justify-center text-7xl">
        {cake.emoji}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {cake.isBestSeller && (
            <span className="bg-amber-400 text-amber-900 text-[10px] font-bold px-2 py-0.5 rounded-full shadow">
              ⭐ Best Seller
            </span>
          )}
          {cake.isNew && (
            <span className="bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow">
              New
            </span>
          )}
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between mb-1">
          <h3 className="font-bold text-base text-foreground">{cake.name}</h3>
          <div className="flex items-center gap-0.5 ml-2 flex-shrink-0">
            <Star size={13} className="fill-amber-400 text-amber-400" />
            <span className="text-xs font-semibold text-foreground">{cake.rating}</span>
            <span className="text-xs text-muted-foreground">({cake.reviews})</span>
          </div>
        </div>
        <p className="text-xs text-muted-foreground mb-3 line-clamp-2">{cake.description}</p>

        {/* Weight selector */}
        <div className="flex gap-2 mb-3">
          {WEIGHTS.map((w) => (
            <button
              key={w}
              onClick={() => setSelectedWeight(w)}
              className={`flex-1 py-1.5 rounded-xl text-xs font-bold border-2 transition-colors ${
                selectedWeight === w
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border text-muted-foreground hover:border-primary/40"
              }`}
            >
              {w}
            </button>
          ))}
        </div>

        {/* Price */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-primary font-bold text-xl">₹{cake.prices[selectedWeight]}</span>
          <span className="text-xs text-muted-foreground">for {selectedWeight}</span>
        </div>

        {/* Buttons */}
        <div className="flex gap-2">
          <button
            onClick={handleAddToCart}
            className={`flex-1 py-2.5 rounded-xl text-sm font-bold border-2 flex items-center justify-center gap-1.5 transition-all ${
              added
                ? "border-green-500 bg-green-50 text-green-600"
                : "border-primary text-primary hover:bg-primary/5"
            }`}
          >
            <ShoppingCart size={15} />
            {added ? "Added!" : "Add to Cart"}
          </button>
          <button
            onClick={handleOrderNow}
            className="flex-1 py-2.5 rounded-xl text-sm font-bold bg-[#25D366] text-white flex items-center justify-center gap-1.5"
          >
            <span className="text-base">💬</span> Order Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Menu() {
  const [category, setCategory] = useState<string>("all");

  const categories = [
    { key: "all", label: "All" },
    { key: "classic", label: "Classic" },
    { key: "fruit", label: "Fruit" },
    { key: "special", label: "Special" },
  ];

  const filtered =
    category === "all" ? CAKES : CAKES.filter((c) => c.category === category);

  return (
    <div className="max-w-lg mx-auto px-4 pb-8">
      <div className="pt-6 pb-4">
        <h1 className="text-2xl font-bold text-foreground">Our Menu</h1>
        <p className="text-muted-foreground text-sm mt-1">Freshly baked every day</p>
      </div>

      {/* Category filter */}
      <div className="flex gap-2 mb-5 overflow-x-auto pb-1 scrollbar-hide">
        {categories.map((c) => (
          <button
            key={c.key}
            onClick={() => setCategory(c.key)}
            className={`flex-shrink-0 px-4 py-2 rounded-xl text-sm font-bold border-2 transition-colors ${
              category === c.key
                ? "border-primary bg-primary text-white"
                : "border-border text-muted-foreground bg-white"
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* Cake grid */}
      <div className="flex flex-col gap-4">
        {filtered.map((cake) => (
          <CakeCard key={cake.id} cake={cake} />
        ))}
      </div>

      {/* WhatsApp CTA */}
      <div className="mt-6">
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello! I'd like to place a custom order.")}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="bg-[#25D366] text-white rounded-2xl p-4 text-center shadow-md">
            <div className="font-bold">Can't find what you want?</div>
            <div className="text-sm opacity-90 mt-0.5">Chat with us on WhatsApp for custom orders</div>
          </div>
        </a>
      </div>
    </div>
  );
}
