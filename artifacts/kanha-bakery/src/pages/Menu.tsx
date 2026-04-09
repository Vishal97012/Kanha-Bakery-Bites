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

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  isImageUrl?: boolean;
  badge?: string;
  weight?: string;
}

interface Category {
  key: string;
  label: string;
  emoji: string;
  color: string;
  items: MenuItem[];
}

const CATEGORIES: Category[] = [
  {
    key: "cakes",
    label: "Cakes",
    emoji: "🎂",
    color: "from-pink-100 to-rose-50",
    items: [
      { id: "c1", name: "Chocolate Truffle Cake", description: "Rich dark chocolate cake with silky truffle ganache", price: 499, image: cakeChocolateTruffle, badge: "Best Seller", weight: "1kg" },
      { id: "c2", name: "Black Forest Cake", description: "Classic chocolate cherry cake with whipped cream", price: 650, image: cakeBlackForest, badge: "Popular", weight: "1kg" },
      { id: "c3", name: "Butterscotch Cake", description: "Crunchy butterscotch cake with caramel cream", price: 720, image: cakeButterscotch, weight: "1kg" },
      { id: "c4", name: "Red Velvet Cake", description: "Soft velvety cake with creamy cheese frosting", price: 850, image: cakeRedVelvet, badge: "New", weight: "1kg" },
      { id: "c5", name: "Pineapple Cake", description: "Fresh pineapple cake with tropical fruit cream", price: 1500, image: cakePineapple, weight: "1kg" },
      { id: "c6", name: "Strawberry Cake", description: "Strawberry cream cake with fresh fruit layers", price: 1000, image: cakeStrawberry, weight: "1kg" },
      { id: "c7", name: "Blueberry Cake", description: "Blueberry flavored cake with berry cream topping", price: 1000, image: cakeBlueberry, weight: "1kg" },
      { id: "c8", name: "Vanilla Cake", description: "Classic soft vanilla sponge with light whipped cream", price: 550, image: cakeVanilla, weight: "1kg" },
      { id: "c9", name: "Oreo Cake", description: "Oreo chocolate cake with cookies and cream frosting", price: 499, image: cakeOreo, badge: "Trending", weight: "1kg" },
      { id: "c10", name: "KitKat Cake", description: "Chocolate KitKat cake with crispy wafer layers", price: 850, image: cakeKitKat, weight: "1kg" },
    ],
  },
  {
    key: "pizza",
    label: "Pizza",
    emoji: "🍕",
    color: "from-orange-100 to-amber-50",
    items: [
      { id: "p1", name: "Veg Pizza", description: "Cheese loaded veggie pizza with fresh toppings", price: 149, image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop", isImageUrl: true },
      { id: "p2", name: "Cheese Pizza", description: "Extra cheese pizza with mozzarella overload", price: 169, image: "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=400&h=300&fit=crop", isImageUrl: true },
      { id: "p3", name: "Paneer Pizza", description: "Paneer tikka topping pizza with spicy sauce", price: 199, image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop", isImageUrl: true },
      { id: "p4", name: "Corn Pizza", description: "Sweet corn pizza with creamy white sauce", price: 159, image: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=400&h=300&fit=crop", isImageUrl: true },
    ],
  },
];

function MenuItemCard({ item, categoryKey }: { item: MenuItem; categoryKey: string }) {
  const [added, setAdded] = useState(false);

  const handleOrderNow = () => {
    const msg = `Hello Kanha Home Bakery! I want to order:\n\n*${item.name}*\nPrice: ₹${item.price}${item.weight ? `\nWeight: ${item.weight}` : ""}\n\nPlease confirm my order. Thank you!`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  const handleAddToCart = () => {
    if (categoryKey === "cakes") {
      addToCart({
        name: item.name,
        price: item.price,
        weight: item.weight || "1kg",
        quantity: 1,
        imageEmoji: "🎂",
      });
    } else {
      addToCart({
        name: item.name,
        price: item.price,
        weight: "1 piece",
        quantity: 1,
        imageEmoji: categoryKey === "pizza" ? "🍕" : "🍽️",
      });
    }
    window.dispatchEvent(new Event("cart-updated"));
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden cake-card">
      <div className="relative h-48 overflow-hidden bg-gray-100">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
          loading="lazy"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
        {item.badge && (
          <div className="absolute top-2 left-2">
            <span className="bg-amber-400 text-amber-900 text-[10px] font-bold px-2 py-1 rounded-full shadow">
              ⭐ {item.badge}
            </span>
          </div>
        )}
        <div className="absolute bottom-2 right-2 bg-white/90 backdrop-blur-sm rounded-xl px-3 py-1 shadow">
          <span className="text-primary font-bold text-base">₹{item.price}</span>
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-bold text-base text-foreground">{item.name}</h3>
        {item.weight && (
          <span className="text-xs text-muted-foreground bg-pink-50 px-2 py-0.5 rounded-full inline-block mt-1">
            {item.weight}
          </span>
        )}
        <p className="text-xs text-muted-foreground mt-1 mb-3 line-clamp-2">{item.description}</p>

        <div className="flex gap-2">
          <button
            onClick={handleAddToCart}
            className={`flex-1 py-2.5 rounded-xl text-sm font-bold border-2 flex items-center justify-center gap-1.5 transition-all ${
              added
                ? "border-green-500 bg-green-50 text-green-600"
                : "border-primary text-primary"
            }`}
          >
            <ShoppingCart size={14} />
            {added ? "Added!" : "Add"}
          </button>
          <button
            onClick={handleOrderNow}
            className="flex-1 py-2.5 rounded-xl text-sm font-bold bg-[#25D366] text-white flex items-center justify-center gap-1.5"
          >
            <span>💬</span> Order Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("cakes");

  const current = CATEGORIES.find((c) => c.key === activeCategory)!;

  return (
    <div className="max-w-lg mx-auto pb-8">
      <div className="px-4 pt-6 pb-4">
        <h1 className="text-2xl font-bold text-foreground">Our Menu</h1>
        <p className="text-muted-foreground text-sm mt-1">Fresh & delicious — made with love</p>
      </div>

      <div className="flex gap-2 px-4 mb-5 overflow-x-auto pb-1" style={{ scrollbarWidth: "none" }}>
        {CATEGORIES.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setActiveCategory(cat.key)}
            className={`flex-shrink-0 flex items-center gap-1.5 px-4 py-2.5 rounded-2xl text-sm font-bold border-2 transition-all ${
              activeCategory === cat.key
                ? "border-primary bg-primary text-white shadow-md"
                : "border-border text-muted-foreground bg-white"
            }`}
          >
            <span>{cat.emoji}</span>
            {cat.label}
          </button>
        ))}
      </div>

      <div className="px-4">
        <div className={`rounded-2xl bg-gradient-to-r ${current.color} px-4 py-3 mb-4 flex items-center gap-3`}>
          <span className="text-3xl">{current.emoji}</span>
          <div>
            <div className="font-bold text-foreground text-lg">{current.label}</div>
            <div className="text-muted-foreground text-xs">{current.items.length} items available</div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {current.items.map((item) => (
            <MenuItemCard key={item.id} item={item} categoryKey={current.key} />
          ))}
        </div>
      </div>

      <div className="px-4 mt-6">
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello Kanha Home Bakery! I'd like to place an order. Can you help me?")}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="bg-[#25D366] text-white rounded-2xl p-4 text-center shadow-md">
            <div className="font-bold text-base">Have a custom order?</div>
            <div className="text-sm opacity-90 mt-0.5">Chat with us on WhatsApp — we're happy to help!</div>
          </div>
        </a>
      </div>
    </div>
  );
}
