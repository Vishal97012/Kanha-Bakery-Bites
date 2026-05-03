import { useMemo, useState } from "react";
import { Link } from "wouter";
import { ShieldCheck, Clock, BadgeCheck, Truck, ChevronRight, MapPin } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/cart";

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
import cakeWife from "@assets/IMG-20260409-WA0113_1775753795785.jpg";
import motherCake1 from "@assets/FB_IMG_1777552283789_1777802679122.jpg";
import motherCake2 from "@assets/FB_IMG_1777552258854_1777802679157.jpg";
import motherCake3 from "@assets/FB_IMG_1777552244916_1777802679192.jpg";
import motherCake4 from "@assets/FB_IMG_1777552216065_1777802679229.jpg";
import motherCake5 from "@assets/FB_IMG_1777552207999_1777802679268.jpg";
import motherCake6 from "@assets/FB_IMG_1777552194438_1777802679299.jpg";
import motherCake7 from "@assets/FB_IMG_1777552153215_1777802679331.jpg";
import motherCake8 from "@assets/FB_IMG_1777552133594_1777802679366.jpg";
import motherCake9 from "@assets/FB_IMG_1777552121924_1777802679399.jpg";
import locationStrip from "@assets/IMG_20260503_121418_1777790767862.jpg";

const wa = (msg: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

const DEFAULT_ORDER_MSG = "Hi, I want to order a cake 🎂";
const DEFAULT_CAKE_DESC = "Fresh, soft aur premium homemade cake. WhatsApp pe order karo aur details lo.";

type Category = "all" | "mothers-day" | "anniversary" | "birthday" | "mango";

const CATEGORIES: { key: Category; label: string; img: string; waMsg: string }[] = [
  {
    key: "mothers-day",
    label: "Mother's Day",
    img: motherCake1,
    waMsg: "Hi, I want to order a Mother's Day Special Cake for my Mom 💐🎂",
  },
  {
    key: "anniversary",
    label: "Anniversary",
    img: cakeILoveYou,
    waMsg: "Hi, I want to order an Anniversary Cake ❤️🎂",
  },
  {
    key: "birthday",
    label: "Birthday",
    img: cakeBlueBirthday,
    waMsg: "Hi, I want to order a Birthday Cake 🎉🎂",
  },
  {
    key: "mango",
    label: "Mango Cakes",
    img: cakeMango,
    waMsg: "Hi, I want to order a Mango Cake 🥭🎂",
  },
];

const ALL_PRODUCTS: {
  name: string;
  min: number;
  max: number;
  image: string;
  category: Category;
  badge?: string;
  desc: string;
}[] = [
  { name: "Mother Special Rose Drip Cake", min: 2200, max: 2200, image: motherCake1, category: "mothers-day", badge: "💐 Mom Special", desc: "Rose drip design ke saath premium Mother’s Day cake. Soft sponge aur beautiful floral finish." },
  { name: "Mother Special Flower Square Cake", min: 2299, max: 2299, image: motherCake2, category: "mothers-day", desc: "Square floral cake jo Mom ke special day ko elegant bana de. Fresh cream finish." },
  { name: "Heart Shape Mom Cake", min: 2500, max: 2500, image: motherCake3, category: "mothers-day", desc: "Heart-shaped romantic cake for Mom. Perfect gifting choice with premium look." },
  { name: "Red Velvet Mom Special", min: 1600, max: 1600, image: motherCake4, category: "mothers-day", desc: "Classic red velvet cake with rich cream layers and smooth homemade taste." },
  { name: "Doll Cake Strawberry", min: 2000, max: 2000, image: motherCake5, category: "mothers-day", desc: "Strawberry doll cake with attractive look, ideal for a sweet celebration." },
  { name: "Vanilla Floral Cake", min: 1500, max: 1500, image: motherCake6, category: "mothers-day", desc: "Light vanilla floral cake with soft taste and pretty decorative finish." },
  { name: "Vanilla Mom Special Cake", min: 1200, max: 1200, image: motherCake7, category: "mothers-day", desc: "Simple, fresh aur soft vanilla cake for Mom’s loving celebration." },
  { name: "Vanilla Floral Rosette Cake", min: 1600, max: 1600, image: motherCake8, category: "mothers-day", desc: "Rosette flower decoration ke saath cream-filled vanilla special cake." },
  { name: "Chocolate Drip Mom Cake", min: 2200, max: 2200, image: motherCake9, category: "mothers-day", desc: "Chocolate drip cake with rich taste and premium Mother’s Day presentation." },

  { name: "Heart Shape Cake", min: 1199, max: 2499, image: cakeHeartBirthday, category: "anniversary", desc: "Romantic heart cake for anniversaries and love celebrations." },
  { name: "I Love You Cake", min: 799, max: 1799, image: cakeILoveYou, category: "anniversary", desc: "Cute love message cake for couples and special moments." },
  { name: "Couple Theme Round Cake", min: 959, max: 2199, image: cakeCoupleRound, category: "anniversary", desc: "Elegant couple-themed round cake with lovely celebration style." },
  { name: "Couple Hug Cake", min: 959, max: 2199, image: cakeCoupleHug, category: "anniversary", desc: "Warm couple hug cake for anniversary and romantic gifting." },

  { name: "Blue Floral Birthday Cake", min: 1199, max: 2499, image: cakeBlueBirthday, category: "birthday", badge: "🎉 Popular", desc: "Bright birthday cake with floral design and premium cream finish." },
  { name: "Mickey Mouse Cake", min: 959, max: 2199, image: cakeMickey, category: "birthday", desc: "Fun kids cake with Mickey theme for joyful birthday parties." },
  { name: "Princess Theme Cake", min: 959, max: 2199, image: cakePrincess, category: "birthday", desc: "Pretty princess theme cake for little girls’ birthday celebration." },

  { name: "Mango Delight Cake", min: 599, max: 1399, image: cakeMango, category: "mango", badge: "🥭 Seasonal", desc: "Fresh mango flavor cake with fruity taste and seasonal vibes." },
  { name: "Butterscotch Crunch", min: 579, max: 1399, image: cakeButterscotch, category: "mango", desc: "Crunchy butterscotch cake with rich caramel-like homemade taste." },
  { name: "Pineapple Fresh Cake", min: 1199, max: 2499, image: cakePineapple, category: "mango", desc: "Soft pineapple cake with light cream and fresh fruity flavor." },

  { name: "Chocolate Truffle Cake", min: 399, max: 1199, image: cakeChocolateTruffle, category: "all", badge: "⭐ Best Seller", desc: "Rich chocolate truffle cake with soft layers and premium taste." },
  { name: "Black Forest Cake", min: 519, max: 1499, image: cakeBlackForest, category: "all", desc: "Classic black forest cake with fresh cream and chocolate shavings." },
  { name: "Red Velvet Cake", min: 679, max: 1599, image: cakeRedVelvet, category: "all", desc: "Smooth red velvet cake with creamy layers and elegant finish." },
  { name: "Oreo Cookie Cake", min: 399, max: 1199, image: cakeOreo, category: "all", desc: "Oreo lovers’ cake with cookie crunch and creamy filling." },
  { name: "KitKat Chocolate Cake", min: 679, max: 1599, image: cakeKitKat, category: "all", desc: "Chocolate cake with KitKat decoration for a fun premium look." },
  { name: "Coffee Mocha Cake", min: 599, max: 1399, image: cakeCoffee, category: "all", desc: "Coffee mocha cake with balanced flavor for adult celebrations." },
  { name: "Caramel Drip Cake", min: 639, max: 1499, image: cakeCaramel, category: "all", desc: "Sweet caramel drip cake with glossy premium decoration." },
  { name: "White Forest Cake", min: 639, max: 1499, image: cakeWhiteForest, category: "all", desc: "Soft white forest cake with cream and cherry-style presentation." },
  { name: "Vanilla Cream Cake", min: 439, max: 999, image: cakeVanilla, category: "all", desc: "Simple vanilla cream cake for everyday celebrations." },
  { name: "Strawberry Fresh Cake", min: 799, max: 1799, image: cakeStrawberry, category: "all", desc: "Fresh strawberry cake with fruity taste and soft texture." },
  { name: "Blueberry Cream Cake", min: 799, max: 1799, image: cakeBlueberry, category: "all", desc: "Blueberry cream cake with vibrant look and light sweetness." },
  { name: "Pink Love Drip Cake", min: 959, max: 2199, image: cakePinkLove, category: "all", desc: "Pink drip cake made for romantic and cute special occasions." },
  { name: "Rose Cream Cake", min: 719, max: 1799, image: cakeRose, category: "all", desc: "Rose cream cake with floral decoration and soft homemade taste." },
  { name: "Wife Special Cake", min: 1199, max: 2499, image: cakeWife, category: "all", desc: "Special surprise cake for wife with pretty and loving presentation." },
];

const TRUST_BADGES = [
  { Icon: BadgeCheck, title: "100% Smile Guaranteed", desc: "Unique Products – On time Delivery" },
  { Icon: ShieldCheck, title: "Safe & Secure Payments", desc: "UPI, Cash on Delivery & Cards" },
  { Icon: Truck, title: "100% Purchase Protection", desc: "Assured Quality, Fresh Daily" },
  { Icon: Clock, title: "Timely Delivery", desc: "60–90 min slots in Arrah" },
];

const SECTION_TITLES: Record<Category, string> = {
  all: "Our Signature Cakes",
  "mothers-day": "Mother's Day Special Cakes 💐",
  anniversary: "Anniversary & Love Cakes ❤️",
  birthday: "Birthday Cakes 🎉",
  mango: "Mango & Fruit Cakes 🥭",
};

export default function Home() {
  const [active, setActive] = useState<Category>("all");
  const [selectedCake, setSelectedCake] = useState<(typeof ALL_PRODUCTS)[number] | null>(null);
  const shown = active === "all" ? ALL_PRODUCTS : ALL_PRODUCTS.filter((p) => p.category === active);
  const activeCat = CATEGORIES.find((c) => c.key === active);
  const selectedCakeOrderMsg = useMemo(() => (selectedCake ? `Hi, I want to order *${selectedCake.name}* 🎂\n\n${selectedCake.desc}\n\nPlease share weight options & availability.` : DEFAULT_ORDER_MSG), [selectedCake]);

  return (
    <div className="max-w-lg mx-auto pb-24 relative bg-[#fdf8f3]">
      <div className="bg-[#fbf8eb] text-[#6d6a3a] px-4 py-4 border-b border-[#efe7c8]">
        <div className="flex items-center gap-3 text-[15px] font-semibold">
          <MapPin size={22} className="flex-shrink-0" />
          <span>Arrah, Bihar — Doorstep Delivery</span>
          <ChevronRight size={22} className="ml-auto flex-shrink-0" />
        </div>
      </div>

      <div className="bg-[#7a7f2a] text-white px-4 py-5 rounded-b-[28px] shadow-md mx-4 mt-4">
        <div className="flex items-center justify-between gap-4">
          <div>
            <div className="text-[26px] font-extrabold leading-none">FREE DELIVERY!!!</div>
            <div className="text-[15px] mt-1.5 opacity-90">On orders above ₹499 in Arrah.</div>
          </div>
          <div className="text-[52px] leading-none select-none">🚚</div>
        </div>
      </div>

      <div className="mt-8 px-4">
        <div className="flex gap-4 overflow-x-auto pb-2" style={{ scrollbarWidth: "none" }}>
          {CATEGORIES.map((c) => (
            <button
              key={c.key}
              onClick={() => setActive((prev) => (prev === c.key ? "all" : c.key))}
              className="flex-shrink-0 w-[100px] text-center focus:outline-none"
            >
              <div className={`w-[100px] h-[100px] rounded-[24px] overflow-hidden shadow-sm transition-all duration-200 ${active === c.key ? "ring-4 ring-[#5a2e1f] scale-105" : "ring-2 ring-[#e8dccc]"}`}>
                <img src={c.img} alt={c.label} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className={`text-[13px] font-semibold mt-2 leading-tight ${active === c.key ? "text-[#5a2e1f]" : "text-[#333]"}`}>
                {c.label}
              </div>
            </button>
          ))}
        </div>
      </div>

      {active === "mothers-day" && (
        <div className="mx-4 mt-5 bg-gradient-to-r from-pink-100 to-rose-100 border border-pink-200 rounded-2xl p-4 flex items-center gap-3">
          <div className="text-3xl">💐</div>
          <div className="flex-1 min-w-0">
            <div className="font-bold text-sm text-[#5a2e1f]">Make Mom's Day Special!</div>
            <div className="text-xs text-[#5a2e1f]/70 mt-0.5">Order a beautiful cake for her today</div>
          </div>
          <a href={wa("Hi, I want to order a Mother's Day Special Cake for my Mom 💐🎂")} target="_blank" rel="noopener noreferrer">
            <button className="bg-[#25D366] text-white text-[11px] font-bold px-3 py-2.5 rounded-xl shadow active:scale-95 whitespace-nowrap">💬 Order Now</button>
          </a>
        </div>
      )}

      <div className="pt-8 pb-4 px-4 text-center">
        <h2 className="text-xl font-extrabold text-[#5a2e1f] tracking-tight">{SECTION_TITLES[active]}</h2>
        <div className="w-12 h-0.5 bg-[#b8893a] mx-auto mt-2" />
      </div>

      <div className="px-4 grid grid-cols-2 gap-4">
        {shown.map((p) => (
          <button
            key={p.name}
            onClick={() => setSelectedCake(p)}
            className="bg-white rounded-xl overflow-hidden shadow-sm border border-[#e8dccc] active:scale-[0.98] transition-transform text-left"
          >
            <div className="relative aspect-square overflow-hidden bg-[#fdf8f3]">
              <img src={p.image} alt={`${p.name} – Kanha Home Bakery Arrah Bihar`} loading="lazy" className="w-full h-full object-cover" />
              {p.badge && <div className="absolute top-2 left-2"><span className="bg-[#5a2e1f] text-white text-[9px] font-bold px-2 py-0.5 rounded-full shadow">{p.badge}</span></div>}
              <div className="absolute bottom-2 right-2 bg-white/95 text-[#5a2e1f] text-[10px] font-bold px-2 py-1 rounded-full shadow">10% OFF</div>
            </div>
            <div className="p-3 text-center">
              <div className="font-semibold text-[13px] text-[#5a2e1f] leading-snug min-h-[34px] flex items-center justify-center">{p.name}</div>
              <div className="text-[#b8893a] font-bold text-sm mt-1.5">₹{p.min.toLocaleString()}</div>
            </div>
          </button>
        ))}
      </div>

      {selectedCake && (
        <div className="mx-4 mt-6 bg-white rounded-2xl border border-[#e8dccc] shadow-sm p-4">
          <div className="flex gap-3">
            <img src={selectedCake.image} alt={selectedCake.name} className="w-20 h-20 rounded-xl object-cover flex-shrink-0" />
            <div className="min-w-0 flex-1">
              <div className="text-sm font-extrabold text-[#5a2e1f]">{selectedCake.name}</div>
              <div className="text-[11px] text-[#6a5a4d] mt-1 leading-relaxed">{selectedCake.desc}</div>
              <div className="mt-2 flex items-center gap-2">
                <div className="text-[#b8893a] font-extrabold">₹{selectedCake.min.toLocaleString()}</div>
                <div className="text-[10px] font-bold text-[#5a2e1f] bg-[#f5ece0] px-2 py-1 rounded-full">10% OFF</div>
              </div>
            </div>
          </div>
          <a href={wa(selectedCakeOrderMsg)} target="_blank" rel="noopener noreferrer" className="mt-4 block">
            <button className="w-full bg-[#25D366] text-white font-bold py-3 rounded-xl shadow active:scale-95 transition-transform">Order on WhatsApp</button>
          </a>
        </div>
      )}

      <div className="text-center mt-6 px-4 flex gap-3 justify-center">
        {active !== "all" && <button onClick={() => setActive("all")} className="border-2 border-[#5a2e1f] text-[#5a2e1f] px-6 py-3 rounded-md font-bold text-sm active:scale-95 transition-transform">Show All</button>}
        <Link href="/menu"><button className="bg-[#5a2e1f] text-white px-8 py-3 rounded-md font-bold text-sm shadow-md tracking-wide active:scale-95 transition-transform">VIEW FULL MENU</button></Link>
      </div>

      <div className="mt-10 px-4 space-y-3">
        {TRUST_BADGES.map((b) => (
          <div key={b.title} className="bg-[#f5ece0] rounded-md py-6 px-4 text-center">
            <b.Icon size={44} className="mx-auto text-[#5a2e1f]" strokeWidth={1.3} />
            <div className="font-extrabold text-base text-[#5a2e1f] mt-3">{b.title}</div>
            <div className="text-xs text-[#5a2e1f]/70 mt-1.5">{b.desc}</div>
          </div>
        ))}
      </div>

      <div className="mt-10 mx-4 bg-white rounded-2xl overflow-hidden shadow-sm border border-[#e8dccc]">
        <img src={locationStrip} alt="Cake delivery in Arrah Bihar" className="w-full h-auto block" />
      </div>

      <div className="mt-10 mx-4 text-center">
        <h2 className="text-sm font-bold text-[#5a2e1f]">Best Cake Shop in Arrah, Bihar</h2>
        <p className="text-[11px] text-[#5a2e1f]/70 leading-relaxed mt-2">Kanha Home Bakery — Arrah ki sabse trusted homemade cake shop. Birthday, anniversary, wedding, Mother's Day & custom design cakes — fresh, pure veg, doorstep delivery.</p>
        <p className="text-[11px] text-[#5a2e1f]/60 mt-2">📍 Police Line, M.P. Bagh, Arrah, Bihar – 802301 · 📞 +91 70502 56262</p>
      </div>

      <a href={selectedCake ? wa(selectedCakeOrderMsg) : activeCat ? wa(activeCat.waMsg) : wa(DEFAULT_ORDER_MSG)} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" className="fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white shadow-2xl flex items-center justify-center text-2xl active:scale-95 transition-transform hover:scale-105" style={{ boxShadow: "0 8px 24px rgba(37, 211, 102, 0.5)" }}>
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
        <span className="relative">💬</span>
      </a>
    </div>
  );
}
