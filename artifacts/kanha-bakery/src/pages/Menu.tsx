import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { addToCart, WHATSAPP_NUMBER } from "@/lib/cart";

import cakeChocolateTruffle from "@assets/IMG-20260326-WA0090_1775751113041.jpg";
import cakeBlackForest from "@assets/IMG-20260326-WA0078_1775751112788.jpg";
import cakeButterscotch from "@assets/IMG-20260401-WA0006_1775751112757.jpg";
import cakeRedVelvet from "@assets/IMG-20260326-WA0086_1775751113012.jpg";
import cakePineapple from "@assets/IMG-20260401-WA0005_1775751112723.jpg";
import cakeStrawberry from "@assets/IMG-20260326-WA0077(1)_1775751112809.jpg";
import cakeBlueberry from "@assets/IMG-20260326-WA0085_1775751112935.jpg";
import cakeVanilla from "@assets/IMG-20260326-WA0087_1775751112958.jpg";
import cakeOreo from "@assets/IMG-20260326-WA0081_1775751112893.jpg";
import cakeKitKat from "@assets/IMG-20260331-WA0001_1775751113122.jpg";
import cakeMango from "@assets/IMG-20260326-WA0079(1)_1775751112826.jpg";
import cakeCoffee from "@assets/IMG-20260326-WA0080(1)_1775751112856.jpg";
import cakeCaramel from "@assets/IMG-20260326-WA0080_1775751112873.jpg";
import cakeRose from "@assets/IMG-20260326-WA0083(1)_1775751112914.jpg";
import cakeWhiteForest from "@assets/IMG-20260326-WA0088(1)_1775751112981.jpg";
import cakePrincess from "@assets/IMG-20260331-WA0000_1775751113066.jpg";
import cakeMickey from "@assets/IMG-20260331-WA0003_1775751113096.jpg";
import cakePinkLove from "@assets/IMG-20260406-WA0146(1)_1775753795687.jpg";
import cakeBlueBirthday from "@assets/IMG-20260409-WA0108_1775753795837.jpg";
import cakeCoupleHug from "@assets/IMG-20260409-WA0109_1775753795810.jpg";
import cakeCoupleRound from "@assets/IMG-20260409-WA0110_1775753795743.jpg";
import cakeILoveYou from "@assets/IMG-20260409-WA0111_1775753795716.jpg";
import cakeHeartBirthday from "@assets/IMG-20260409-WA0112_1775753795766.jpg";
import cakeWifeBirthday from "@assets/IMG-20260409-WA0113_1775753795785.jpg";

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  mrp: number;
  image: string;
  badge?: string;
  sub: string;
}

type SubKey = "all" | "classic" | "fruit" | "love" | "birthday" | "kids";

interface SubCategory {
  key: SubKey;
  label: string;
  emoji: string;
}

const CAKE_SUBS: SubCategory[] = [
  { key: "all", label: "All", emoji: "🎂" },
  { key: "classic", label: "Classic", emoji: "🍫" },
  { key: "fruit", label: "Fruit", emoji: "🍓" },
  { key: "love", label: "Love", emoji: "❤️" },
  { key: "birthday", label: "Birthday", emoji: "🎉" },
  { key: "kids", label: "Kids", emoji: "🧒" },
];

const CAKES: MenuItem[] = [
  // ── CLASSIC ──────────────────────────────────────────────────────────────
  { id: "c01", name: "Chocolate Truffle Cake", description: "Rich dark chocolate with silky ganache", price: 399, mrp: 499, image: cakeChocolateTruffle, badge: "Best Seller", sub: "classic" },
  { id: "c02", name: "Black Forest Cake", description: "Chocolate sponge, cherries & whipped cream", price: 519, mrp: 650, image: cakeBlackForest, badge: "Popular", sub: "classic" },
  { id: "c03", name: "Butterscotch Cake", description: "Caramel cream with crunchy toffee bits", price: 579, mrp: 720, image: cakeButterscotch, sub: "classic" },
  { id: "c04", name: "Red Velvet Cake", description: "Velvety sponge with cream cheese frosting", price: 679, mrp: 850, image: cakeRedVelvet, badge: "New", sub: "classic" },
  { id: "c05", name: "Vanilla Cream Cake", description: "Soft vanilla sponge with light whipped cream", price: 439, mrp: 550, image: cakeVanilla, sub: "classic" },
  { id: "c06", name: "Oreo Cookie Cake", description: "Choco sponge with Oreo & cream frosting", price: 399, mrp: 499, image: cakeOreo, badge: "Trending", sub: "classic" },
  { id: "c07", name: "KitKat Chocolate Cake", description: "Chocolate cake wrapped in crispy KitKat", price: 679, mrp: 850, image: cakeKitKat, sub: "classic" },
  { id: "c08", name: "Mango Delight Cake", description: "Fresh mango sponge with mango cream", price: 599, mrp: 750, image: cakeMango, sub: "classic" },
  { id: "c09", name: "Coffee Mocha Cake", description: "Rich coffee cake with espresso buttercream", price: 599, mrp: 750, image: cakeCoffee, sub: "classic" },
  { id: "c10", name: "Caramel Drip Cake", description: "Smooth caramel cake with golden drip", price: 639, mrp: 800, image: cakeCaramel, sub: "classic" },
  { id: "c11", name: "Rose Cream Cake", description: "Elegant rose-flavored cake with floral decor", price: 719, mrp: 900, image: cakeRose, sub: "classic" },
  { id: "c12", name: "White Forest Cake", description: "White choco sponge with vanilla cream & cherry", price: 639, mrp: 800, image: cakeWhiteForest, sub: "classic" },

  // ── FRUIT ────────────────────────────────────────────────────────────────
  { id: "f01", name: "Pineapple Fresh Cake", description: "Fresh pineapple cake with tropical cream", price: 1199, mrp: 1500, image: cakePineapple, sub: "fruit" },
  { id: "f02", name: "Strawberry Fresh Cake", description: "Strawberry cream with fresh fruit layers", price: 799, mrp: 1000, image: cakeStrawberry, sub: "fruit" },
  { id: "f03", name: "Blueberry Cream Cake", description: "Blueberry cake with fresh berry topping", price: 799, mrp: 1000, image: cakeBlueberry, sub: "fruit" },

  // ── LOVE & ANNIVERSARY ───────────────────────────────────────────────────
  { id: "l01", name: "Pink Love Drip Cake", description: "Romantic pink drip with love topper", price: 959, mrp: 1200, image: cakePinkLove, badge: "Trending", sub: "love" },
  { id: "l02", name: "Heart Shape Cake", description: "Heart-shaped cake — perfect for your love", price: 1199, mrp: 1500, image: cakeHeartBirthday, sub: "love" },
  { id: "l03", name: "Couple Theme Round Cake", description: "Cute couple cartoon theme round cake", price: 959, mrp: 1200, image: cakeCoupleRound, sub: "love" },
  { id: "l04", name: "I Love You Cake", description: "'I Love You' couple cake with heart decor", price: 799, mrp: 1000, image: cakeILoveYou, sub: "love" },
  { id: "l05", name: "Couple Hug Cake", description: "Adorable couple hugging theme with hearts", price: 959, mrp: 1200, image: cakeCoupleHug, sub: "love" },
  { id: "l06", name: "Wife Special Cake", description: "Surprise birthday cake for your wife", price: 1199, mrp: 1500, image: cakeWifeBirthday, badge: "Special", sub: "love" },

  // ── BIRTHDAY ─────────────────────────────────────────────────────────────
  { id: "b01", name: "Blue Floral Birthday Cake", description: "Blue floral Happy Birthday cake with topper", price: 1199, mrp: 1500, image: cakeBlueBirthday, badge: "New", sub: "birthday" },
  { id: "b02", name: "Princess Theme Cake", description: "Royal princess tiara cake for little queens", price: 959, mrp: 1200, image: cakePrincess, sub: "birthday" },

  // ── KIDS ─────────────────────────────────────────────────────────────────
  { id: "k01", name: "Mickey Mouse Cake", description: "Fun Mickey Mouse cartoon cake for kids", price: 959, mrp: 1200, image: cakeMickey, sub: "kids" },
];

const PIZZA_ITEMS = [
  { id: "p1", name: "Veg Pizza", description: "Cheese loaded veggie pizza with fresh toppings", price: 149, imageUrl: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop" },
  { id: "p2", name: "Cheese Pizza", description: "Extra cheese pizza with mozzarella overload", price: 169, imageUrl: "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=400&h=300&fit=crop" },
  { id: "p3", name: "Paneer Pizza", description: "Paneer tikka topping pizza with spicy sauce", price: 199, imageUrl: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop" },
  { id: "p4", name: "Corn Pizza", description: "Sweet corn pizza with creamy white sauce", price: 159, imageUrl: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=400&h=300&fit=crop" },
];

function CakeCard({ item }: { item: MenuItem }) {
  const [added, setAdded] = useState(false);
  const discount = Math.round(((item.mrp - item.price) / item.mrp) * 100);

  const handleOrderNow = () => {
    const msg = `Hello Kanha Home Bakery! I want to order:\n\n*${item.name}*\nPrice: ₹${item.price} / 1kg (MRP ₹${item.mrp})\n\nPlease confirm availability. Thank you!`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  const handleAdd = () => {
    addToCart({ name: item.name, price: item.price, weight: "1kg", quantity: 1, imageEmoji: "🎂" });
    window.dispatchEvent(new Event("cart-updated"));
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden cake-card">
      <div className="relative h-52 overflow-hidden bg-pink-50">
        <img
          src={item.image}
          alt={`${item.name} - Kanha Home Bakery Arrah Bihar`}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        {item.badge && (
          <div className="absolute top-2 left-2">
            <span className="bg-amber-400 text-amber-900 text-[10px] font-bold px-2 py-1 rounded-full shadow">
              ⭐ {item.badge}
            </span>
          </div>
        )}
        {discount > 0 && (
          <div className="absolute top-2 right-2">
            <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-full shadow">
              {discount}% OFF
            </span>
          </div>
        )}
        <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-sm rounded-md px-2 py-0.5">
          <span className="text-white text-[10px] font-semibold">1 Kg</span>
        </div>
      </div>
      <div className="p-3.5">
        <h3 className="font-bold text-sm text-foreground leading-snug">{item.name}</h3>
        <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{item.description}</p>
        <div className="flex items-baseline gap-2 mt-2">
          <span className="text-primary font-bold text-lg leading-none">₹{item.price}</span>
          <span className="text-xs text-muted-foreground line-through">₹{item.mrp}</span>
          <span className="text-[10px] font-semibold text-green-600">Save ₹{item.mrp - item.price}</span>
        </div>
        <div className="flex gap-2 mt-3">
          <button onClick={handleAdd}
            className={`flex-1 py-2.5 rounded-xl text-xs font-bold border-2 flex items-center justify-center gap-1 transition-all ${added ? "border-green-500 bg-green-50 text-green-600" : "border-primary text-primary"}`}>
            <ShoppingCart size={13} />
            {added ? "Added!" : "Add"}
          </button>
          <button onClick={handleOrderNow}
            className="flex-1 py-2.5 rounded-xl text-xs font-bold bg-[#25D366] text-white flex items-center justify-center gap-1">
            <span>💬</span> Order Now
          </button>
        </div>
      </div>
    </div>
  );
}

function PizzaCard({ item }: { item: typeof PIZZA_ITEMS[0] }) {
  const [added, setAdded] = useState(false);

  const handleOrderNow = () => {
    const msg = `Hello Kanha Home Bakery! I want to order:\n\n*${item.name}*\nPrice: ₹${item.price}\n\nPlease confirm. Thank you!`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  const handleAdd = () => {
    addToCart({ name: item.name, price: item.price, weight: "1 piece", quantity: 1, imageEmoji: "🍕" });
    window.dispatchEvent(new Event("cart-updated"));
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden cake-card">
      <div className="relative h-48 overflow-hidden bg-orange-50">
        <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute bottom-2 right-2 bg-white/90 backdrop-blur-sm rounded-xl px-3 py-1 shadow">
          <span className="text-primary font-bold">₹{item.price}</span>
        </div>
      </div>
      <div className="p-3.5">
        <h3 className="font-bold text-sm text-foreground">{item.name}</h3>
        <p className="text-xs text-muted-foreground mt-1 mb-3 line-clamp-2">{item.description}</p>
        <div className="flex gap-2">
          <button onClick={handleAdd}
            className={`flex-1 py-2.5 rounded-xl text-xs font-bold border-2 flex items-center justify-center gap-1 transition-all ${added ? "border-green-500 bg-green-50 text-green-600" : "border-primary text-primary"}`}>
            <ShoppingCart size={13} />
            {added ? "Added!" : "Add"}
          </button>
          <button onClick={handleOrderNow}
            className="flex-1 py-2.5 rounded-xl text-xs font-bold bg-[#25D366] text-white flex items-center justify-center gap-1">
            <span>💬</span> Order Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Menu() {
  const [mainTab, setMainTab] = useState<"cakes" | "pizza">("cakes");
  const [subTab, setSubTab] = useState<SubKey>("all");

  const visibleCakes = subTab === "all" ? CAKES : CAKES.filter((c) => c.sub === subTab);

  return (
    <div className="max-w-lg mx-auto pb-8">
      {/* Header */}
      <div className="px-4 pt-6 pb-4">
        <h1 className="text-2xl font-bold text-foreground">Our Menu</h1>
        <p className="text-muted-foreground text-sm mt-1">Fresh & delicious — made with love</p>
      </div>

      {/* Main category tabs */}
      <div className="flex gap-2 px-4 mb-4">
        {[
          { key: "cakes", label: "Cakes", emoji: "🎂" },
          { key: "pizza", label: "Pizza", emoji: "🍕" },
        ].map((cat) => (
          <button key={cat.key}
            onClick={() => setMainTab(cat.key as "cakes" | "pizza")}
            className={`flex items-center gap-1.5 px-5 py-2.5 rounded-2xl text-sm font-bold border-2 transition-all ${mainTab === cat.key ? "border-primary bg-primary text-white shadow-md" : "border-border text-muted-foreground bg-white"}`}>
            <span>{cat.emoji}</span> {cat.label}
          </button>
        ))}
      </div>

      {mainTab === "cakes" && (
        <>
          {/* Subcategory pills */}
          <div className="flex gap-2 px-4 mb-4 overflow-x-auto pb-1" style={{ scrollbarWidth: "none" }}>
            {CAKE_SUBS.map((s) => (
              <button key={s.key}
                onClick={() => setSubTab(s.key)}
                className={`flex-shrink-0 flex items-center gap-1 px-3.5 py-2 rounded-xl text-xs font-bold border-2 transition-all ${subTab === s.key ? "border-primary bg-primary/10 text-primary" : "border-border text-muted-foreground bg-white"}`}>
                {s.emoji} {s.label}
                {s.key !== "all" && (
                  <span className="ml-0.5 text-[10px] opacity-70">
                    ({CAKES.filter((c) => c.sub === s.key).length})
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Section heading */}
          <div className="mx-4 mb-4 rounded-2xl bg-gradient-to-r from-pink-100 to-rose-50 px-4 py-3 flex items-center gap-3">
            <span className="text-3xl">🎂</span>
            <div>
              <div className="font-bold text-foreground text-base">
                {CAKE_SUBS.find((s) => s.key === subTab)?.label === "All" ? "All Cakes" : `${CAKE_SUBS.find((s) => s.key === subTab)?.label} Cakes`}
              </div>
              <div className="text-muted-foreground text-xs">{visibleCakes.length} items available</div>
            </div>
          </div>

          <div className="px-4 flex flex-col gap-4">
            {visibleCakes.map((item) => (
              <CakeCard key={item.id} item={item} />
            ))}
          </div>
        </>
      )}

      {mainTab === "pizza" && (
        <div className="px-4">
          <div className="mb-4 rounded-2xl bg-gradient-to-r from-orange-100 to-amber-50 px-4 py-3 flex items-center gap-3">
            <span className="text-3xl">🍕</span>
            <div>
              <div className="font-bold text-foreground text-base">Pizza</div>
              <div className="text-muted-foreground text-xs">{PIZZA_ITEMS.length} items available</div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            {PIZZA_ITEMS.map((item) => <PizzaCard key={item.id} item={item} />)}
          </div>
        </div>
      )}

      {/* WhatsApp CTA */}
      <div className="px-4 mt-6">
        <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello Kanha Home Bakery! I'd like to place an order.")}`}
          target="_blank" rel="noopener noreferrer">
          <div className="bg-[#25D366] text-white rounded-2xl p-4 text-center shadow-md active:scale-95 transition-transform">
            <div className="font-bold text-base">💬 Custom Order?</div>
            <div className="text-sm opacity-90 mt-0.5">Chat with us on WhatsApp — we're happy to help!</div>
          </div>
        </a>
      </div>
    </div>
  );
}
