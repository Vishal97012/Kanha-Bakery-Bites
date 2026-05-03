import { Link } from "wouter";
import { ShieldCheck, Clock, BadgeCheck, Truck, ChevronRight, MapPin } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/cart";

import cakeChocolateTruffle from "@assets/IMG-20260326-WA0090_1775751113041.jpg";
import cakeBlackForest from "@assets/IMG-20260326-WA0078_1775751112788.jpg";
import cakeOreo from "@assets/IMG-20260326-WA0081_1775751112893.jpg";
import cakeStrawberry from "@assets/IMG-20260326-WA0077(1)_1775751112809.jpg";
import cakePinkLove from "@assets/IMG-20260406-WA0146(1)_1775753795687.jpg";
import cakeLoveCouple from "@assets/IMG-20260409-WA0111_1775753795716.jpg";
import cakeHeartBirthday from "@assets/IMG-20260409-WA0112_1775753795766.jpg";
import cakeBlueBirthday from "@assets/IMG-20260409-WA0108_1775753795837.jpg";
import cakeWife from "@assets/IMG-20260409-WA0113_1775753795785.jpg";
import cakeCoupleHug from "@assets/IMG-20260409-WA0109_1775753795810.jpg";
import cakeRedVelvet from "@assets/IMG-20260326-WA0086_1775751113012.jpg";
import cakeButterscotch from "@assets/IMG-20260401-WA0006_1775751112757.jpg";
import cakePrincess from "@assets/IMG-20260331-WA0000_1775751113066.jpg";
import cakeCoupleRound from "@assets/IMG-20260409-WA0110_1775753795743.jpg";
import motherCake1 from "@assets/Screenshot_2026-05-03-12-19-19-25_40deb401b9ffe8e1df2f1cc5ba48_1777791019741.jpg";
import motherCake2 from "@assets/Screenshot_2026-05-03-12-19-31-11_40deb401b9ffe8e1df2f1cc5ba48_1777791019776.jpg";
import motherCake3 from "@assets/Screenshot_2026-05-03-12-19-43-76_40deb401b9ffe8e1df2f1cc5ba48_1777791019824.jpg";
import locationStrip from "@assets/IMG_20260503_121418_1777790767862.jpg";

const wa = (msg: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

const DEFAULT_ORDER_MSG = "Hi, I want to order a cake 🎂";

const CATEGORIES = [
  { label: "Mother's Day", img: motherCake1, href: "/menu?category=mothers-day" },
  { label: "Anniversary", img: cakeLoveCouple, href: "/menu?category=love" },
  { label: "Birthday", img: cakeBlueBirthday, href: "/menu?category=birthday" },
  { label: "Mango Cakes", img: cakeButterscotch, href: "/menu?category=fruit" },
];

const PRODUCTS = [
  { name: "Super Mom Mango Photo Cake", min: 1575, max: 1575, image: motherCake1 },
  { name: "Customised Chocolate Photo Cake For Mom", min: 475, max: 475, image: motherCake2 },
  { name: "The Bloom, Bake & Keepsake Box for Mom", min: 1499, max: 1499, image: motherCake3 },
  { name: "Chocolate Cream Best Mom Ever Eggless Cake", min: 649, max: 649, image: motherCake2 },
  { name: "Best Mum Eggless Chocolate Cream Cake", min: 675, max: 675, image: motherCake1 },
  { name: "Mother's Day Mango Celebration Eggless Cake", min: 1475, max: 1475, image: motherCake3 },
  { name: "Sweet Chocolate Thank You Bento Cake", min: 599, max: 599, image: motherCake1 },
  { name: "Butterscotch Eggless Cream Cake For Mom", min: 975, max: 975, image: motherCake3 },
  { name: "Mango Lush Eggless Cream Cake", min: 2299, max: 2299, image: motherCake2 },
  { name: "Creamy Mango Delight Cake", min: 849, max: 849, image: motherCake1 },
  { name: "Mango Celebration Mom Cake", min: 1199, max: 1199, image: motherCake2 },
  { name: "Happy Mom Floral Photo Cake", min: 1599, max: 1599, image: motherCake3 },
  { name: "Chocolate Heart Mom Cake", min: 899, max: 899, image: motherCake1 },
  { name: "Rose Flower Mom Cake", min: 999, max: 999, image: motherCake2 },
];

const TRUST_BADGES = [
  { Icon: BadgeCheck, title: "100% Smile Guaranteed", desc: "Unique Products – On time Delivery" },
  { Icon: ShieldCheck, title: "Safe & Secure Payments", desc: "UPI, Cash on Delivery & Cards" },
  { Icon: Truck, title: "100% Purchase Protection", desc: "Assured Quality, Fresh Daily" },
  { Icon: Clock, title: "Timely Delivery", desc: "60–90 min slots in Arrah" },
];

export default function Home() {
  return (
    <div className="max-w-lg mx-auto pb-24 relative bg-[#fdf8f3]">
      <div className="bg-[#fbf8eb] text-[#6d6a3a] px-4 py-4 border-b border-[#efe7c8]">
        <div className="flex items-center gap-3 text-[15px] font-semibold leading-tight">
          <MapPin size={22} className="flex-shrink-0" />
          <span>Enter Location to check availability</span>
          <ChevronRight size={22} className="ml-auto flex-shrink-0" />
        </div>
      </div>

      <div className="sticky top-16 z-40 bg-[#7a7f2a] text-white px-4 py-5 rounded-b-[28px] shadow-md mx-4 mt-4 overflow-hidden">
        <div className="flex items-center justify-between gap-4">
          <div>
            <div className="text-[28px] font-extrabold leading-none">FREE DELIVERY!!!</div>
            <div className="text-[17px] mt-2 opacity-95">On eligible delivery time slots.</div>
          </div>
          <div className="text-[54px] leading-none">🚚</div>
        </div>
      </div>

      <div className="mt-8 px-4">
        <div className="flex gap-4 overflow-x-auto pb-2" style={{ scrollbarWidth: "none" }}>
          {CATEGORIES.map((c) => (
            <Link key={c.label} href={c.href}>
              <div className="flex-shrink-0 w-[110px] text-center">
                <div className="w-[110px] h-[110px] rounded-[26px] overflow-hidden shadow-sm bg-white">
                  <img src={c.img} alt={c.label} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="text-[18px] font-semibold text-[#111] mt-3 leading-tight">
                  {c.label}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="pt-10 pb-4 px-4 text-center">
        <h2 className="text-xl font-extrabold text-[#5a2e1f] tracking-tight">Mother's Day Cakes</h2>
        <div className="w-12 h-0.5 bg-[#b8893a] mx-auto mt-2"></div>
      </div>

      <div className="px-4 grid grid-cols-2 gap-4">
        {PRODUCTS.map((p) => (
          <a
            key={p.name}
            href={wa(`Hi, I want to order *${p.name}* 🎂\n\nPlease share weight options & availability.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-md overflow-hidden shadow-sm border border-[#e8dccc] active:scale-[0.98] transition-transform"
          >
            <div className="aspect-square overflow-hidden bg-[#fdf8f3]">
              <img
                src={p.image}
                alt={`${p.name} - Kanha Home Bakery Arrah Bihar`}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-3 text-center">
              <div className="font-semibold text-[13px] text-[#5a2e1f] leading-snug min-h-[34px] flex items-center justify-center">
                {p.name}
              </div>
              <div className="text-[#b8893a] font-bold text-sm mt-1.5">
                ₹{p.min.toLocaleString()} – ₹{p.max.toLocaleString()}
              </div>
            </div>
          </a>
        ))}
      </div>

      <div className="text-center mt-6 px-4">
        <Link href="/menu">
          <button className="bg-[#5a2e1f] text-white px-8 py-3 rounded-md font-bold text-sm shadow-md tracking-wide active:scale-95 transition-transform">
            VIEW ALL CAKES
          </button>
        </Link>
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
        <img src={locationStrip} alt="Check availability and free delivery" className="w-full h-auto block" />
      </div>

      <div className="mt-10 mx-4 text-center">
        <h2 className="text-sm font-bold text-[#5a2e1f]">
          Best Cake Shop in Arrah, Bihar
        </h2>
        <p className="text-[11px] text-[#5a2e1f]/70 leading-relaxed mt-2">
          Kanha Home Bakery — Arrah ki sabse trusted homemade cake shop. Birthday, anniversary,
          wedding & custom design cakes — fresh, pure veg, doorstep delivery.
        </p>
        <p className="text-[11px] text-[#5a2e1f]/60 mt-2">
          📍 Police Line, M.P. Bagh, Arrah, Bihar – 802301 · 📞 +91 70502 56262
        </p>
      </div>

      <a
        href={wa(DEFAULT_ORDER_MSG)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white shadow-2xl flex items-center justify-center text-2xl active:scale-95 transition-transform"
        style={{ boxShadow: "0 8px 24px rgba(37, 211, 102, 0.5)" }}
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30"></span>
        <span className="relative">💬</span>
      </a>
    </div>
  );
}
