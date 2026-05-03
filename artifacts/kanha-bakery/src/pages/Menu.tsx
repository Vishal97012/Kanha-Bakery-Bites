import { useState } from "react";
import { Link } from "wouter";
import { ShoppingCart, ChevronRight, MapPin, BadgeCheck, ShieldCheck, Truck, Clock } from "lucide-react";
import { addToCart, WHATSAPP_NUMBER } from "@/lib/cart";
import { ALL_PRODUCTS, type Category } from "@/lib/products";

import cakeILoveYou from "@assets/IMG-20260409-WA0111_1775753795716.jpg";
import cakeBlueBirthday from "@assets/IMG-20260409-WA0108_1775753795837.jpg";
import cakeMango from "@assets/IMG-20260326-WA0079(1)_1775751112826.jpg";
import motherCake1 from "@assets/FB_IMG_1777552283789_1777802679122.jpg";

interface SubCategory {
  key: Category;
  label: string;
  img: string;
  waMsg: string;
}

const CATEGORIES: SubCategory[] = [
  { key: "mothers-day", label: "Mother's Day", img: motherCake1, waMsg: "Hi, I want to order a Mother's Day Special Cake for my Mom 💐🎂" },
  { key: "anniversary", label: "Anniversary", img: cakeILoveYou, waMsg: "Hi, I want to order an Anniversary Cake ❤️🎂" },
  { key: "birthday", label: "Birthday", img: cakeBlueBirthday, waMsg: "Hi, I want to order a Birthday Cake 🎉🎂" },
  { key: "mango", label: "Mango Cakes", img: cakeMango, waMsg: "Hi, I want to order a Mango Cake 🥭🎂" },
];

const TRUST_BADGES = [
  { Icon: BadgeCheck, title: "100% Smile Guaranteed", desc: "Unique Products – On time Delivery" },
  { Icon: ShieldCheck, title: "Safe & Secure Payments", desc: "UPI, Cash on Delivery & Cards" },
  { Icon: Truck, title: "Fresh Daily Cakes", desc: "Assured Quality, Homemade Taste" },
  { Icon: Clock, title: "Timely Delivery", desc: "60–90 min slots in Arrah" },
];

const SECTION_TITLES: Record<Category | "all", string> = {
  all: "Our Signature Cakes",
  "mothers-day": "Mother's Day Special Cakes 💐",
  anniversary: "Anniversary & Love Cakes ❤️",
  birthday: "Birthday Cakes 🎉",
  mango: "Mango & Fruit Cakes 🥭",
};

function CakeCard({ item }: { item: (typeof ALL_PRODUCTS)[number] }) {
  const [added, setAdded] = useState(false);
  const mrp = Math.round(item.min / 0.9);

  const handleOrderNow = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const msg = `Hi, I want to order *${item.name}* 🎂\n\n${item.desc}\n\nPlease share weight options & availability.`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart({ name: item.name, price: item.min, weight: "1kg", quantity: 1, imageEmoji: "🎂" });
    window.dispatchEvent(new Event("cart-updated"));
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <Link href={`/cake/${item.slug}`}>
      <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-[#e8dccc] active:scale-[0.98] transition-transform cursor-pointer">
        <div className="relative aspect-square overflow-hidden bg-[#fdf8f3]">
          <img
            src={item.image}
            alt={`${item.name} – Kanha Home Bakery Arrah Bihar`}
            loading="lazy"
            className="w-full h-full object-cover"
          />
          {item.badge && (
            <div className="absolute top-2 left-2">
              <span className="bg-[#5a2e1f] text-white text-[9px] font-bold px-2 py-0.5 rounded-full shadow">
                {item.badge}
              </span>
            </div>
          )}
          <div className="absolute bottom-2 right-2 bg-white/95 text-[#5a2e1f] text-[10px] font-bold px-2 py-1 rounded-full shadow">
            10% OFF
          </div>
          <div className="absolute bottom-2 left-2 bg-black/55 text-white text-[9px] font-semibold px-1.5 py-0.5 rounded-full">
            1 Kg
          </div>
        </div>
        <div className="p-3 text-center">
          <div className="font-semibold text-[13px] text-[#5a2e1f] leading-snug min-h-[34px] flex items-center justify-center">
            {item.name}
          </div>
          <div className="flex items-baseline justify-center gap-2 mt-1.5">
            <span className="text-[#b8893a] font-bold text-sm">₹{item.min.toLocaleString()}</span>
            <span className="text-[11px] text-[#bbb] line-through">₹{mrp.toLocaleString()}</span>
          </div>
          <div className="flex gap-2 mt-3">
            <button
              onClick={handleAdd}
              className={`flex-1 py-2 rounded-lg text-[11px] font-bold border-2 flex items-center justify-center gap-1 transition-all ${
                added
                  ? "border-green-500 bg-green-50 text-green-600"
                  : "border-[#5a2e1f] text-[#5a2e1f]"
              }`}
            >
              <ShoppingCart size={11} />
              {added ? "Added!" : "Add"}
            </button>
            <button
              onClick={handleOrderNow}
              className="flex-1 py-2 rounded-lg text-[11px] font-bold bg-[#25D366] text-white flex items-center justify-center gap-1"
            >
              💬 Order
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}

const wa = (msg: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

const DEFAULT_ORDER_MSG = "Hi, I want to order a cake 🎂";

export default function Menu() {
  const [subTab, setSubTab] = useState<Category>("all");
  const visibleCakes = subTab === "all" ? ALL_PRODUCTS : ALL_PRODUCTS.filter((c) => c.category === subTab);
  const activeCat = CATEGORIES.find((c) => c.key === subTab);

  return (
    <div className="max-w-lg mx-auto pb-24 relative bg-[#fdf8f3]">
      <div className="bg-[#fbf8eb] text-[#6d6a3a] px-4 py-4 border-b border-[#efe7c8]">
        <div className="flex items-center gap-3 text-[15px] font-semibold">
          <MapPin size={22} className="flex-shrink-0" />
          <span>Arrah, Bihar — Doorstep Delivery</span>
          <ChevronRight size={22} className="ml-auto flex-shrink-0" />
        </div>
      </div>

      <div className="bg-[#5a2e1f] text-white px-4 py-5 rounded-b-[28px] shadow-md mx-4 mt-4">
        <div className="flex items-center justify-between gap-4">
          <div>
            <div className="text-[26px] font-extrabold leading-none">Our Menu</div>
            <div className="text-[15px] mt-1.5 opacity-90">Premium cakes, fresh daily, direct to your door</div>
          </div>
          <div className="text-[52px] leading-none select-none">🎂</div>
        </div>
      </div>

      <div className="mt-8 px-4">
        <div className="flex gap-4 overflow-x-auto pb-2" style={{ scrollbarWidth: "none" }}>
          {CATEGORIES.map((c) => (
            <button key={c.key} onClick={() => setSubTab((prev) => (prev === c.key ? "all" : c.key))} className="flex-shrink-0 w-[100px] text-center focus:outline-none">
              <div className={`w-[100px] h-[100px] rounded-[24px] overflow-hidden shadow-sm transition-all duration-200 ${subTab === c.key ? "ring-4 ring-[#5a2e1f] scale-105" : "ring-2 ring-[#e8dccc]"}`}>
                <img src={c.img} alt={c.label} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className={`text-[13px] font-semibold mt-2 leading-tight ${subTab === c.key ? "text-[#5a2e1f]" : "text-[#333]"}`}>{c.label}</div>
            </button>
          ))}
        </div>
      </div>

      <div className="pt-8 pb-4 px-4 text-center">
        <h2 className="text-xl font-extrabold text-[#5a2e1f] tracking-tight">{SECTION_TITLES[subTab]}</h2>
        <div className="w-12 h-0.5 bg-[#b8893a] mx-auto mt-2" />
      </div>

      <div className="px-4 grid grid-cols-2 gap-4">
        {visibleCakes.map((item) => <CakeCard key={item.slug} item={item} />)}
      </div>

      <div className="mt-8 px-4 space-y-3">
        {TRUST_BADGES.map((b) => (
          <div key={b.title} className="bg-[#f5ece0] rounded-md py-6 px-4 text-center">
            <b.Icon size={44} className="mx-auto text-[#5a2e1f]" strokeWidth={1.3} />
            <div className="font-extrabold text-base text-[#5a2e1f] mt-3">{b.title}</div>
            <div className="text-xs text-[#5a2e1f]/70 mt-1.5">{b.desc}</div>
          </div>
        ))}
      </div>

      <div className="text-center mt-6 px-4 flex gap-3 justify-center">
        {subTab !== "all" && <button onClick={() => setSubTab("all")} className="border-2 border-[#5a2e1f] text-[#5a2e1f] px-6 py-3 rounded-md font-bold text-sm active:scale-95 transition-transform">Show All</button>}
        <Link href="/"><button className="bg-[#5a2e1f] text-white px-8 py-3 rounded-md font-bold text-sm shadow-md tracking-wide active:scale-95 transition-transform">BACK HOME</button></Link>
      </div>

      <div className="mt-10 mx-4 text-center">
        <h2 className="text-sm font-bold text-[#5a2e1f]">Best Cake Shop in Arrah, Bihar</h2>
        <p className="text-[11px] text-[#5a2e1f]/70 leading-relaxed mt-2">
          Kanha Home Bakery — Arrah ki sabse trusted homemade cake shop. Birthday, anniversary,
          wedding, Mother's Day & custom design cakes — fresh, pure veg, doorstep delivery.
        </p>
        <p className="text-[11px] text-[#5a2e1f]/60 mt-2">
          📍 Police Line, M.P. Bagh, Arrah, Bihar – 802301 · 📞 +91 70502 56262
        </p>
      </div>

      <a
        href={activeCat ? wa(activeCat.waMsg) : wa(DEFAULT_ORDER_MSG)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white shadow-2xl flex items-center justify-center text-2xl active:scale-95 transition-transform hover:scale-105"
        style={{ boxShadow: "0 8px 24px rgba(37, 211, 102, 0.5)" }}
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
        <span className="relative">💬</span>
      </a>
    </div>
  );
}
