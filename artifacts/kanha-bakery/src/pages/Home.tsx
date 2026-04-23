import { Link } from "wouter";
import { Star, MapPin, Phone, Instagram, ChevronRight, Clock, Truck, Wallet, ShieldCheck } from "lucide-react";
import { REVIEWS } from "@/lib/data";
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

const INSTAGRAM_URL = "https://www.instagram.com/kanhahomebakery?igsh=MW50b2M3NjEwY3E4ag==";

const wa = (msg: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

const DEFAULT_ORDER_MSG = "Hi, I want to order a cake 🎂";

const HERO_CAKES = [cakeChocolateTruffle, cakePinkLove, cakeHeartBirthday, cakeBlueBirthday];

const QUICK_ACTIONS = [
  { icon: "🎂", label: "Birthday Cake", color: "from-pink-500 to-rose-500", msg: "Hi, I want to order a Birthday Cake 🎂" },
  { icon: "❤️", label: "Anniversary", color: "from-rose-500 to-red-500", msg: "Hi, I want to order an Anniversary Cake ❤️" },
  { icon: "⚡", label: "Same Day", color: "from-amber-500 to-orange-500", msg: "Hi, I need same day cake delivery in Arrah ⚡" },
  { icon: "✨", label: "Custom Cake", color: "from-purple-500 to-violet-500", msg: "Hi, I want to order a Custom Designed Cake ✨" },
];

const CATEGORIES = [
  { label: "Cakes", emoji: "🎂", desc: "12+ flavors", href: "/menu", color: "from-pink-400 to-rose-500" },
  { label: "Love Cakes", emoji: "❤️", desc: "Anniversary special", href: "/menu", color: "from-red-400 to-pink-500" },
  { label: "Birthday", emoji: "🎉", desc: "Theme & custom", href: "/menu", color: "from-purple-400 to-violet-500" },
  { label: "Custom Cake", emoji: "✨", desc: "Design your own", href: "/custom-cake", color: "from-amber-400 to-orange-500" },
];

const FEATURED = [
  { name: "Chocolate Truffle Cake", weight: "1 Kg", price: 399, mrp: 499, image: cakeChocolateTruffle, badge: "Best Seller", rating: 4.9, reviews: 124 },
  { name: "Black Forest Cake",     weight: "1 Kg", price: 519, mrp: 650, image: cakeBlackForest,       badge: "Popular",     rating: 4.8, reviews: 98 },
  { name: "Oreo Cookie Cake",       weight: "1 Kg", price: 399, mrp: 499, image: cakeOreo,              badge: "Trending",    rating: 4.7, reviews: 76 },
  { name: "Strawberry Fresh Cake",  weight: "1 Kg", price: 799, mrp: 1000, image: cakeStrawberry,                          rating: 4.7, reviews: 56 },
  { name: "Butterscotch Crunch",    weight: "1 Kg", price: 579, mrp: 720, image: cakeButterscotch,                          rating: 4.8, reviews: 87 },
  { name: "Red Velvet Premium",     weight: "1 Kg", price: 679, mrp: 850, image: cakeRedVelvet,         badge: "New",         rating: 4.9, reviews: 43 },
];

const OFFERS = [
  { tag: "20% OFF", title: "All Classic Cakes", subtitle: "On selected flavors", color: "from-pink-500 to-rose-600" },
  { tag: "₹150 OFF", title: "Birthday Bundle", subtitle: "Cake + candles + card", color: "from-purple-500 to-violet-600" },
  { tag: "FREE", title: "Delivery Above ₹499", subtitle: "Inside Arrah city", color: "from-emerald-500 to-green-600" },
];

const GALLERY = [
  { img: cakePinkLove, label: "Love Cake" },
  { img: cakeLoveCouple, label: "I Love You" },
  { img: cakeHeartBirthday, label: "Heart Cake" },
  { img: cakeBlueBirthday, label: "Birthday" },
  { img: cakeWife, label: "Wife Special" },
  { img: cakeCoupleHug, label: "Couple Cake" },
];

const STEPS = [
  { n: 1, icon: "🎂", title: "Choose Cake", desc: "Browse our menu & pick your favorite" },
  { n: 2, icon: "💬", title: "WhatsApp Us", desc: "Send message with cake & delivery details" },
  { n: 3, icon: "🛵", title: "Get Delivered", desc: "Fresh cake at your doorstep in 60-90 min" },
];

export default function Home() {
  return (
    <div className="max-w-lg mx-auto pb-24 relative">
      {/* Sticky Top Offer Bar */}
      <div className="sticky top-16 z-40 bg-gradient-to-r from-rose-500 via-pink-500 to-rose-500 text-white text-[11px] font-semibold py-2 px-3 text-center shadow-md">
        🎉 Flat ₹100 OFF · Free Delivery Above ₹499 · Same Day Delivery
      </div>

      {/* Hero */}
      <div className="relative overflow-hidden bg-gradient-to-br from-pink-50 via-rose-50 to-amber-50 pt-7 pb-6 px-4 text-center">
        <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-pink-200 rounded-full px-3 py-1 mb-3">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          <span className="text-[11px] font-semibold text-foreground">Open Now · Arrah, Bihar</span>
        </div>

        <h1 className="text-[26px] font-extrabold text-primary leading-tight">
          Fresh Homemade Cakes <span className="inline-block">🎂</span>
        </h1>
        <p className="text-muted-foreground mt-1 text-sm">
          Baked with Pure Love ❤️
        </p>

        {/* Rating */}
        <div className="flex items-center justify-center gap-2 mt-3">
          <div className="flex items-center gap-1 bg-green-600 text-white px-2 py-0.5 rounded-md text-xs font-bold">
            <Star size={12} className="fill-white" /> 4.8
          </div>
          <span className="text-xs font-semibold text-foreground">500+ happy customers</span>
        </div>

        {/* CTA Buttons */}
        <div className="flex gap-3 mt-5 justify-center">
          <a href={wa(DEFAULT_ORDER_MSG)} target="_blank" rel="noopener noreferrer">
            <button className="bg-primary text-white px-6 py-3 rounded-2xl font-bold text-sm shadow-lg active:scale-95 transition-transform">
              🛒 Order Now
            </button>
          </a>
          <a href={wa(DEFAULT_ORDER_MSG)} target="_blank" rel="noopener noreferrer">
            <button className="bg-[#25D366] text-white px-6 py-3 rounded-2xl font-bold text-sm shadow-lg active:scale-95 transition-transform">
              💬 Chat WhatsApp
            </button>
          </a>
        </div>

        {/* Premium cake image strip */}
        <div className="flex gap-2 mt-5 overflow-hidden rounded-2xl h-28">
          {HERO_CAKES.map((img, i) => (
            <div key={i} className="flex-1 overflow-hidden rounded-xl">
              <img src={img} alt="featured cake" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>

      {/* Trust badges */}
      <div className="grid grid-cols-4 gap-2 px-4 mt-4">
        {[
          { icon: "🏠", label: "Home Made" },
          { icon: "✨", label: "Fresh Daily" },
          { icon: "💯", label: "Pure Veg" },
          { icon: "🚴", label: "Fast Delivery" },
        ].map((b) => (
          <div key={b.label} className="bg-white border border-border rounded-xl py-2.5 flex flex-col items-center gap-1 shadow-sm">
            <span className="text-xl">{b.icon}</span>
            <span className="text-[10px] font-semibold text-foreground text-center leading-tight">{b.label}</span>
          </div>
        ))}
      </div>

      {/* Quick Action Buttons */}
      <div className="px-4 mt-7">
        <h2 className="text-lg font-bold text-foreground mb-3">Order in 1 Click</h2>
        <div className="grid grid-cols-2 gap-3">
          {QUICK_ACTIONS.map((q) => (
            <a key={q.label} href={wa(q.msg)} target="_blank" rel="noopener noreferrer">
              <div className={`bg-gradient-to-br ${q.color} text-white rounded-2xl p-3.5 active:scale-95 transition-transform shadow-md flex items-center gap-3`}>
                <div className="w-10 h-10 rounded-xl bg-white/25 flex items-center justify-center text-2xl">
                  {q.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-bold text-sm leading-tight">{q.label}</div>
                  <div className="text-[10px] opacity-90 mt-0.5 flex items-center gap-1">
                    <span>WhatsApp</span> <ChevronRight size={11} />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="px-4 mt-7">
        <h2 className="text-lg font-bold text-foreground mb-3">Shop by Category</h2>
        <div className="grid grid-cols-2 gap-3">
          {CATEGORIES.map((cat) => (
            <Link key={cat.label} href={cat.href}>
              <div className={`bg-gradient-to-br ${cat.color} text-white rounded-2xl p-4 active:scale-95 transition-transform cursor-pointer shadow-md`}>
                <div className="text-3xl mb-1">{cat.emoji}</div>
                <div className="font-bold text-sm">{cat.label}</div>
                <div className="text-xs opacity-80 mt-0.5">{cat.desc}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Today's Offers */}
      <div className="px-4 mt-8">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-bold text-foreground">🔥 Today's Offers</h2>
          <span className="text-[10px] font-semibold text-rose-500 bg-rose-50 px-2 py-1 rounded-full">
            Limited Time
          </span>
        </div>
        <div className="flex gap-3 overflow-x-auto pb-2" style={{ scrollbarWidth: "none" }}>
          {OFFERS.map((o) => (
            <a key={o.title} href={wa(`Hi, I want to use offer: ${o.tag} - ${o.title} 🎂`)} target="_blank" rel="noopener noreferrer"
              className="flex-shrink-0 w-56">
              <div className={`bg-gradient-to-br ${o.color} text-white rounded-2xl p-4 shadow-md active:scale-95 transition-transform`}>
                <div className="inline-block bg-white/25 backdrop-blur-sm text-[10px] font-bold px-2 py-0.5 rounded-full mb-2">
                  {o.tag}
                </div>
                <div className="font-bold text-base leading-tight">{o.title}</div>
                <div className="text-[11px] opacity-90 mt-1">{o.subtitle}</div>
                <div className="text-[10px] mt-3 flex items-center gap-1 font-semibold">
                  Claim on WhatsApp <ChevronRight size={12} />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Urgency Strip */}
      <div className="mx-4 mt-5 bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-orange-200 rounded-2xl p-3 flex items-center gap-3">
        <div className="w-10 h-10 bg-orange-500 text-white rounded-xl flex items-center justify-center text-xl flex-shrink-0">
          ⏰
        </div>
        <div className="flex-1 min-w-0">
          <div className="font-bold text-sm text-orange-900">Only 5 delivery slots left today!</div>
          <div className="text-[11px] text-orange-700 mt-0.5">Book now to avoid disappointment</div>
        </div>
        <a href={wa("Hi, I want to book today's delivery slot 🎂")} target="_blank" rel="noopener noreferrer">
          <button className="bg-orange-500 text-white text-[11px] font-bold px-3 py-2 rounded-xl shadow active:scale-95">
            Book
          </button>
        </a>
      </div>

      {/* Featured Cakes */}
      <div className="px-4 mt-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-foreground">Featured Cakes</h2>
          <Link href="/menu">
            <span className="text-primary text-sm font-semibold flex items-center gap-0.5 cursor-pointer">
              View All <ChevronRight size={15} />
            </span>
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {FEATURED.map((cake) => {
            const discount = Math.round(((cake.mrp - cake.price) / cake.mrp) * 100);
            return (
              <div key={cake.name} className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden cake-card">
                <div className="relative h-40 overflow-hidden bg-pink-50">
                  <img src={cake.image} alt={`${cake.name} - Kanha Home Bakery Arrah Bihar`} loading="lazy" className="w-full h-full object-cover" />
                  {cake.badge && (
                    <div className="absolute top-1.5 left-1.5">
                      <span className="bg-amber-400 text-amber-900 text-[9px] font-bold px-1.5 py-0.5 rounded-full shadow">
                        ⭐ {cake.badge}
                      </span>
                    </div>
                  )}
                  {discount > 0 && (
                    <div className="absolute top-1.5 right-1.5">
                      <span className="bg-red-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full shadow">
                        {discount}% OFF
                      </span>
                    </div>
                  )}
                  <div className="absolute bottom-1.5 left-1.5 bg-black/60 backdrop-blur-sm rounded-md px-1.5 py-0.5">
                    <span className="text-white text-[9px] font-semibold">{cake.weight}</span>
                  </div>
                </div>
                <div className="p-2.5">
                  <div className="font-bold text-xs text-foreground leading-snug line-clamp-1">{cake.name}</div>
                  <div className="flex items-center gap-1 mt-1">
                    <div className="flex items-center gap-0.5 bg-green-600 text-white px-1 py-0.5 rounded">
                      <span className="text-[9px] font-bold">{cake.rating}</span>
                      <Star size={8} className="fill-white text-white" />
                    </div>
                    <span className="text-[9px] text-muted-foreground">({cake.reviews})</span>
                  </div>
                  <div className="flex items-baseline gap-1.5 mt-1.5">
                    <span className="text-primary font-bold text-base leading-none">₹{cake.price}</span>
                    <span className="text-[10px] text-muted-foreground line-through">₹{cake.mrp}</span>
                  </div>
                  <a href={wa(`Hi, I want to order *${cake.name}* (1 Kg - ₹${cake.price}) 🎂`)} target="_blank" rel="noopener noreferrer">
                    <button className="mt-2 w-full py-2 rounded-xl text-[11px] font-bold bg-[#25D366] text-white flex items-center justify-center gap-1 active:scale-95 transition-transform">
                      💬 Order on WhatsApp
                    </button>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* How to Order */}
      <div className="px-4 mt-9">
        <h2 className="text-lg font-bold text-foreground mb-4 text-center">How to Order in 3 Steps</h2>
        <div className="space-y-3">
          {STEPS.map((s, i) => (
            <div key={s.n} className="bg-white border border-border rounded-2xl p-4 flex items-center gap-3 shadow-sm relative">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-500 text-white rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 shadow-md">
                {s.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[10px] font-bold text-primary tracking-wider">STEP {s.n}</div>
                <div className="font-bold text-sm text-foreground">{s.title}</div>
                <div className="text-[11px] text-muted-foreground mt-0.5">{s.desc}</div>
              </div>
              {i < STEPS.length - 1 && (
                <ChevronRight className="text-muted-foreground/40 absolute -bottom-3 left-1/2 -translate-x-1/2 rotate-90 z-10 bg-background" size={18} />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Delivery Info */}
      <div className="mx-4 mt-7 bg-gradient-to-br from-pink-50 to-rose-50 border border-pink-100 rounded-2xl p-4">
        <h3 className="font-bold text-sm text-foreground mb-3 flex items-center gap-2">
          <Truck size={16} className="text-primary" /> Delivery Info
        </h3>
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-white rounded-xl p-3 text-center shadow-sm">
            <MapPin size={18} className="text-primary mx-auto" />
            <div className="text-[11px] font-bold text-foreground mt-1">Arrah</div>
            <div className="text-[9px] text-muted-foreground">& nearby</div>
          </div>
          <div className="bg-white rounded-xl p-3 text-center shadow-sm">
            <Clock size={18} className="text-primary mx-auto" />
            <div className="text-[11px] font-bold text-foreground mt-1">60-90 min</div>
            <div className="text-[9px] text-muted-foreground">Fast delivery</div>
          </div>
          <div className="bg-white rounded-xl p-3 text-center shadow-sm">
            <Wallet size={18} className="text-primary mx-auto" />
            <div className="text-[11px] font-bold text-foreground mt-1">COD</div>
            <div className="text-[9px] text-muted-foreground">Available</div>
          </div>
        </div>
      </div>

      {/* Custom Cake CTA */}
      <div className="mx-4 mt-7 relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-pink-500 to-rose-500 p-5 text-white shadow-xl">
        <div className="absolute -top-6 -right-6 text-7xl opacity-20">✨</div>
        <div className="relative">
          <div className="inline-block bg-white/25 backdrop-blur-sm text-[10px] font-bold px-2 py-0.5 rounded-full mb-2">
            CUSTOM ORDER
          </div>
          <h3 className="text-xl font-extrabold leading-tight">Design Your Dream Cake</h3>
          <p className="text-[12px] opacity-90 mt-1.5 leading-relaxed">
            Apni pasand ka flavor, design, size – sab kuch customize karein. Birthday, anniversary ya special occasion ke liye perfect.
          </p>
          <div className="flex gap-2 mt-4">
            <Link href="/custom-cake">
              <button className="bg-white text-primary font-bold text-xs px-4 py-2.5 rounded-xl shadow active:scale-95 transition-transform">
                🎨 Design Your Cake
              </button>
            </Link>
            <a href={wa("Hi, I want to order a Custom Cake. My requirements are:")} target="_blank" rel="noopener noreferrer">
              <button className="bg-[#1a8e4d] text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow active:scale-95 transition-transform">
                💬 WhatsApp
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Reviews */}
      <div className="px-4 mt-8">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-bold text-foreground">Customer Reviews</h2>
          <div className="flex items-center gap-1 bg-green-600 text-white px-2 py-1 rounded-md text-xs font-bold">
            <Star size={12} className="fill-white" /> 4.8
          </div>
        </div>
        <div className="flex flex-col gap-3">
          {REVIEWS.slice(0, 4).map((r, i) => (
            <div key={i} className="bg-white rounded-2xl border border-border shadow-sm p-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-xl flex-shrink-0">
                  {r.emoji}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-sm text-foreground">{r.name}</div>
                  <div className="flex items-center gap-0.5 mt-0.5">
                    {Array.from({ length: r.rating }).map((_, j) => (
                      <Star key={j} size={11} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
                <span className="text-xs text-muted-foreground flex-shrink-0">{r.date}</span>
              </div>
              <p className="text-xs text-foreground/80 leading-relaxed">{r.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* About Us */}
      <div className="mx-4 mt-8 bg-white border border-border rounded-2xl p-5 shadow-sm">
        <div className="flex items-center gap-2 mb-2">
          <ShieldCheck size={18} className="text-primary" />
          <h3 className="font-bold text-base text-foreground">About Kanha Home Bakery</h3>
        </div>
        <p className="text-xs text-muted-foreground leading-relaxed">
          Kanha Home Bakery, Arrah ki ek chhoti si family bakery hai jahan har cake ghar ke pyaar se banaya jaata hai.
          Hum sirf <strong className="text-foreground">fresh ingredients</strong>, <strong className="text-foreground">pure veg</strong> aur
          <strong className="text-foreground"> no artificial colors</strong> use karte hain. Aapki khushi hi humari sabse badi recipe hai 🎂❤️
        </p>
        <div className="flex gap-2 mt-3 flex-wrap">
          <span className="text-[10px] font-semibold text-primary bg-pink-50 px-2 py-1 rounded-full">100% Veg</span>
          <span className="text-[10px] font-semibold text-primary bg-pink-50 px-2 py-1 rounded-full">FSSAI Standards</span>
          <span className="text-[10px] font-semibold text-primary bg-pink-50 px-2 py-1 rounded-full">Made Daily</span>
          <span className="text-[10px] font-semibold text-primary bg-pink-50 px-2 py-1 rounded-full">Family Recipe</span>
        </div>
      </div>

      {/* Instagram Gallery */}
      <div className="px-4 mt-8">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-bold text-foreground">📸 Instagram Gallery</h2>
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer"
            className="text-pink-500 text-sm font-semibold flex items-center gap-0.5">
            Follow <ChevronRight size={15} />
          </a>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {GALLERY.map((g) => (
            <a key={g.label} href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer"
              className="relative rounded-2xl overflow-hidden aspect-square block">
              <img src={g.img} alt={g.label} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-1.5 left-2 right-1">
                <div className="text-white text-[10px] font-bold truncate">{g.label}</div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Footer Contact strip */}
      <div className="px-4 mt-8 flex gap-3">
        <a href={wa(DEFAULT_ORDER_MSG)} target="_blank" rel="noopener noreferrer"
          className="flex-1 bg-[#25D366] text-white rounded-2xl py-3.5 flex items-center justify-center gap-2 font-bold text-sm shadow active:scale-95 transition-transform">
          💬 WhatsApp
        </a>
        <a href={`tel:+91${WHATSAPP_NUMBER.slice(2)}`}
          className="flex-1 bg-primary text-white rounded-2xl py-3.5 flex items-center justify-center gap-2 font-bold text-sm shadow active:scale-95 transition-transform">
          <Phone size={16} /> Call Us
        </a>
        <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer"
          className="flex-1 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-2xl py-3.5 flex items-center justify-center gap-2 font-bold text-sm shadow active:scale-95 transition-transform">
          <Instagram size={16} />
        </a>
      </div>

      {/* Address */}
      <div className="mx-4 mt-4 bg-white border border-border rounded-2xl p-4 flex items-start gap-3 shadow-sm">
        <MapPin className="text-primary mt-0.5 flex-shrink-0" size={18} />
        <div>
          <div className="font-bold text-sm text-foreground">Find Us</div>
          <div className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
            Police Line, M.P. Bagh, Arrah, Bihar – 802301
          </div>
          <div className="text-xs text-primary font-medium mt-1">+91 70502 56262</div>
        </div>
      </div>

      {/* SEO Content Section */}
      <div className="mx-4 mt-6 bg-pink-50 border border-pink-100 rounded-2xl p-5">
        <h2 className="text-base font-bold text-foreground mb-2">
          🎂 Arrah, Bihar ka Best Cake Shop – Kanha Home Bakery
        </h2>
        <p className="text-xs text-muted-foreground leading-relaxed mb-3">
          <strong>Kanha Home Bakery</strong> – Arrah (Ara), Bihar mein sabse trusted homemade cake shop hai.
          Daily fresh cakes – Chocolate Truffle, Black Forest, Red Velvet, Butterscotch, Oreo, Strawberry aur bahut kuch.
          Birthday cake, anniversary cake, wedding cake aur custom design cakes Arrah mein doorstep delivery ke saath.
        </p>
        <h3 className="text-xs font-bold text-foreground mb-1">
          आरा बिहार में केक ऑर्डर करें – घर बैठे मंगाएं
        </h3>
        <p className="text-xs text-muted-foreground leading-relaxed">
          <strong>आरा / अर्रा, बिहार</strong> में सबसे अच्छे होममेड केक के लिए Kanha Home Bakery से संपर्क करें।
          बर्थडे, कस्टम, वेडिंग, एनिवर्सरी केक – ताज़ा और शुद्ध वेज। WhatsApp पर ऑर्डर करें। ₹399 से शुरू।
        </p>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href={wa(DEFAULT_ORDER_MSG)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white shadow-2xl flex items-center justify-center text-2xl active:scale-95 transition-transform hover:scale-105"
        style={{ boxShadow: "0 8px 24px rgba(37, 211, 102, 0.5)" }}
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30"></span>
        <span className="relative">💬</span>
      </a>
    </div>
  );
}
