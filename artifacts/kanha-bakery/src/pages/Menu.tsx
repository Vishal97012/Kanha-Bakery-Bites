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
  image: string | null;
  imageUrl?: string;
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
  { id: "c01", name: "Chocolate Truffle Cake", description: "Rich dark chocolate layers with silky truffle ganache", price: 499, image: cakeChocolateTruffle, badge: "Best Seller", sub: "classic" },
  { id: "c02", name: "Black Forest Cake", description: "Chocolate cherry cake with whipped cream layers", price: 650, image: cakeBlackForest, badge: "Popular", sub: "classic" },
  { id: "c03", name: "Butterscotch Cake", description: "Caramel butterscotch cream with crunchy toffee bits", price: 720, image: cakeButterscotch, sub: "classic" },
  { id: "c04", name: "Red Velvet Cake", description: "Soft velvety red sponge with cream cheese frosting", price: 850, image: cakeRedVelvet, badge: "New", sub: "classic" },
  { id: "c05", name: "Vanilla Cream Cake", description: "Classic soft vanilla sponge with light whipped cream", price: 550, image: cakeVanilla, sub: "classic" },
  { id: "c06", name: "Oreo Cake", description: "Oreo chocolate cake with cookies and cream frosting", price: 499, image: cakeOreo, badge: "Trending", sub: "classic" },
  { id: "c07", name: "KitKat Cake", description: "Chocolate KitKat cake with crispy wafer layers", price: 850, image: cakeKitKat, sub: "classic" },
  { id: "c08", name: "Mango Delight Cake", description: "Fresh mango sponge with mango cream topping", price: 750, image: cakeMango, sub: "classic" },
  { id: "c09", name: "Coffee Mocha Cake", description: "Rich coffee mocha cake with espresso buttercream", price: 750, image: cakeCoffee, sub: "classic" },
  { id: "c10", name: "Caramel Drip Cake", description: "Smooth caramel cake with golden drip finish", price: 800, image: cakeCaramel, sub: "classic" },
  { id: "c11", name: "Rose Cake", description: "Elegant rose-flavored cake with floral decoration", price: 900, image: cakeRose, sub: "classic" },
  { id: "c12", name: "White Forest Cake", description: "White chocolate sponge with vanilla cream and cherry", price: 800, image: cakeWhiteForest, sub: "classic" },
  { id: "c13", name: "Choco Lava Cake", description: "Warm chocolate cake with gooey molten center", price: 599, imageUrl: "https://images.unsplash.com/photo-1602351447937-745cb720612f?w=400&h=400&fit=crop", image: null, sub: "classic" },
  { id: "c14", name: "Tiramisu Cake", description: "Italian tiramisu with espresso-soaked sponge layers", price: 950, imageUrl: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=400&fit=crop", image: null, sub: "classic" },

  // ── FRUIT ────────────────────────────────────────────────────────────────
  { id: "f01", name: "Pineapple Cake", description: "Fresh pineapple cake with tropical fruit cream", price: 1500, image: cakePineapple, sub: "fruit" },
  { id: "f02", name: "Strawberry Cake", description: "Strawberry cream cake with fresh fruit layers", price: 1000, image: cakeStrawberry, sub: "fruit" },
  { id: "f03", name: "Blueberry Cake", description: "Blueberry cake with berry cream topping", price: 1000, image: cakeBlueberry, sub: "fruit" },
  { id: "f04", name: "Mango Tango Cake", description: "Tropical mango layers with fresh mango pulp", price: 900, imageUrl: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=400&h=400&fit=crop", image: null, sub: "fruit" },
  { id: "f05", name: "Mixed Fruit Cake", description: "Loaded with seasonal fresh fruits on whipped cream", price: 850, imageUrl: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400&h=400&fit=crop", image: null, sub: "fruit" },
  { id: "f06", name: "Lemon Zest Cake", description: "Tangy lemon cake with zesty lemon buttercream", price: 700, imageUrl: "https://images.unsplash.com/photo-1535141192574-5d4897c12636?w=400&h=400&fit=crop", image: null, sub: "fruit" },
  { id: "f07", name: "Orange Cream Cake", description: "Citrusy orange sponge with orange cream frosting", price: 750, imageUrl: "https://images.unsplash.com/photo-1568051243858-533a607809a5?w=400&h=400&fit=crop", image: null, sub: "fruit" },
  { id: "f08", name: "Kiwi Delight Cake", description: "Light kiwi cake with fresh kiwi slices on top", price: 850, imageUrl: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=400&h=400&fit=crop", image: null, sub: "fruit" },

  // ── LOVE & ANNIVERSARY ───────────────────────────────────────────────────
  { id: "l01", name: "Pink Love Drip Cake", description: "Romantic pink drip cake with love topper & sprinkles", price: 1200, image: cakePinkLove, badge: "Trending", sub: "love" },
  { id: "l02", name: "Heart Shape Cake", description: "Heart-shaped birthday cake — perfect for your love", price: 1500, image: cakeHeartBirthday, sub: "love" },
  { id: "l03", name: "Couple Theme Round Cake", description: "Beautiful couple cartoon theme round cake", price: 1200, image: cakeCoupleRound, sub: "love" },
  { id: "l04", name: "I Love You Cake", description: "Cute 'I Love You' couple cake with heart decor", price: 1000, image: cakeILoveYou, sub: "love" },
  { id: "l05", name: "Couple Hug Cake", description: "Adorable couple hugging theme cake with hearts", price: 1200, image: cakeCoupleHug, sub: "love" },
  { id: "l06", name: "Wife Special Cake", description: "Surprise birthday cake for the best wife ever", price: 1500, image: cakeWifeBirthday, badge: "Special", sub: "love" },
  { id: "l07", name: "Anniversary Rose Cake", description: "Elegant multi-layer rose decorated anniversary cake", price: 1200, imageUrl: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=400&fit=crop", image: null, sub: "love" },
  { id: "l08", name: "Valentine Heart Cake", description: "Deep red heart cake with romantic chocolate decor", price: 1100, imageUrl: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=400&fit=crop", image: null, sub: "love" },

  // ── BIRTHDAY ─────────────────────────────────────────────────────────────
  { id: "b01", name: "Blue Birthday Cake", description: "Stunning blue floral Happy Birthday cake with topper", price: 1500, image: cakeBlueBirthday, badge: "New", sub: "birthday" },
  { id: "b02", name: "Princess Theme Cake", description: "Royal princess tiara cake for little queens", price: 1200, image: cakePrincess, sub: "birthday" },
  { id: "b03", name: "Rainbow Layer Cake", description: "Colorful rainbow layers — a magical birthday treat", price: 1200, imageUrl: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=400&h=400&fit=crop", image: null, sub: "birthday" },
  { id: "b04", name: "Number Birthday Cake", description: "Custom number cake for milestone birthdays", price: 1000, imageUrl: "https://images.unsplash.com/photo-1562777717-dc6984f65a63?w=400&h=400&fit=crop", image: null, sub: "birthday" },
  { id: "b05", name: "Floral Birthday Cake", description: "Beautifully decorated cake with edible flowers", price: 1100, imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop", image: null, sub: "birthday" },
  { id: "b06", name: "Pinata Smash Cake", description: "Surprise-filled pinata cake — smash it for candy!", price: 1500, imageUrl: "https://images.unsplash.com/photo-1559622214-f8a9850965bb?w=400&h=400&fit=crop", image: null, sub: "birthday" },
  { id: "b07", name: "Mirror Glaze Cake", description: "Shiny galaxy mirror glaze for the wow factor", price: 1800, imageUrl: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=400&h=400&fit=crop", image: null, sub: "birthday" },
  { id: "b08", name: "Ombre Birthday Cake", description: "Gradient ombre frosting — from light to deep color", price: 1200, imageUrl: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=400&fit=crop", image: null, sub: "birthday" },
  { id: "b09", name: "Chocolate Box Cake", description: "Chocolate cake topped with premium chocolate boxes", price: 1500, imageUrl: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=400&h=400&fit=crop", image: null, sub: "birthday" },
  { id: "b10", name: "Golden Glitter Cake", description: "Glamorous gold-painted birthday cake with sparkle", price: 1600, imageUrl: "https://images.unsplash.com/photo-1546427660-eb346c344ba5?w=400&h=400&fit=crop", image: null, sub: "birthday" },

  // ── KIDS ─────────────────────────────────────────────────────────────────
  { id: "k01", name: "Mickey Mouse Cake", description: "Fun Mickey Mouse cartoon theme cake for kids", price: 1200, image: cakeMickey, sub: "kids" },
  { id: "k02", name: "Unicorn Cake", description: "Magical unicorn cake with rainbow mane & horn", price: 1500, imageUrl: "https://images.unsplash.com/photo-1558636508-e0969431e349?w=400&h=400&fit=crop", image: null, sub: "kids" },
  { id: "k03", name: "Barbie Doll Cake", description: "Beautiful Barbie doll cake in a princess gown", price: 1500, imageUrl: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=400&fit=crop", image: null, sub: "kids" },
  { id: "k04", name: "Superhero Cake", description: "Your favorite superhero themed fondant cake", price: 1400, imageUrl: "https://images.unsplash.com/photo-1550617931-e17a7b70dce2?w=400&h=400&fit=crop", image: null, sub: "kids" },
  { id: "k05", name: "Dinosaur Cake", description: "Roarsome dinosaur jungle theme cake for kids", price: 1300, imageUrl: "https://images.unsplash.com/photo-1562777717-dc6984f65a63?w=400&h=400&fit=crop", image: null, sub: "kids" },
  { id: "k06", name: "Ice Cream Cake", description: "Chilled ice cream cake with scoops on top", price: 900, imageUrl: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=400&fit=crop", image: null, sub: "kids" },
  { id: "k07", name: "Alphabet Cake", description: "Custom alphabet/letter shaped fondant cake", price: 1000, imageUrl: "https://images.unsplash.com/photo-1598214886806-c95b7e8a90a1?w=400&h=400&fit=crop", image: null, sub: "kids" },
  { id: "k08", name: "Cartoon Theme Cake", description: "Any cartoon character fondant theme cake", price: 1200, imageUrl: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=400&fit=crop", image: null, sub: "kids" },
];

const PIZZA_ITEMS = [
  { id: "p1", name: "Veg Pizza", description: "Cheese loaded veggie pizza with fresh toppings", price: 149, imageUrl: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop" },
  { id: "p2", name: "Cheese Pizza", description: "Extra cheese pizza with mozzarella overload", price: 169, imageUrl: "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=400&h=300&fit=crop" },
  { id: "p3", name: "Paneer Pizza", description: "Paneer tikka topping pizza with spicy sauce", price: 199, imageUrl: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop" },
  { id: "p4", name: "Corn Pizza", description: "Sweet corn pizza with creamy white sauce", price: 159, imageUrl: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=400&h=300&fit=crop" },
];

function CakeCard({ item }: { item: MenuItem }) {
  const [added, setAdded] = useState(false);
  const imgSrc = item.image ?? item.imageUrl ?? "";

  const handleOrderNow = () => {
    const msg = `Hello Kanha Home Bakery! I want to order:\n\n*${item.name}*\nPrice: ₹${item.price} / 1kg\n\nPlease confirm availability. Thank you!`;
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
      <div className="relative h-48 overflow-hidden bg-pink-50">
        <img src={imgSrc} alt={item.name} className="w-full h-full object-cover" loading="lazy"
          onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
        {item.badge && (
          <div className="absolute top-2 left-2">
            <span className="bg-amber-400 text-amber-900 text-[10px] font-bold px-2 py-1 rounded-full shadow">⭐ {item.badge}</span>
          </div>
        )}
        <div className="absolute bottom-2 right-2 bg-white/90 backdrop-blur-sm rounded-xl px-3 py-1 shadow">
          <span className="text-primary font-bold">₹{item.price}</span>
        </div>
      </div>
      <div className="p-3.5">
        <h3 className="font-bold text-sm text-foreground leading-snug">{item.name}</h3>
        <span className="text-[10px] text-muted-foreground bg-pink-50 px-2 py-0.5 rounded-full inline-block mt-1">1kg</span>
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
