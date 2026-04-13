import { Link } from "wouter";
import { Star, MapPin, Phone, Instagram, ChevronRight } from "lucide-react";
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

const HERO_CAKES = [cakeChocolateTruffle, cakePinkLove, cakeHeartBirthday, cakeBlueBirthday];

const FEATURED = [
  { name: "Chocolate Truffle", price: 499, image: cakeChocolateTruffle, badge: "Best Seller", rating: 4.9 },
  { name: "Black Forest", price: 650, image: cakeBlackForest, badge: "Popular", rating: 4.8 },
  { name: "Oreo Cake", price: 499, image: cakeOreo, badge: "Trending", rating: 4.7 },
  { name: "Strawberry Cake", price: 1000, image: cakeStrawberry, rating: 4.7 },
  { name: "Butterscotch Cake", price: 720, image: cakeButterscotch, rating: 4.8 },
  { name: "Red Velvet Cake", price: 850, image: cakeRedVelvet, badge: "New", rating: 4.9 },
];

const GALLERY = [
  { img: cakePinkLove, label: "Love Cake" },
  { img: cakeLoveCouple, label: "I Love You" },
  { img: cakeHeartBirthday, label: "Heart Cake" },
  { img: cakeBlueBirthday, label: "Birthday" },
  { img: cakeWife, label: "Wife Special" },
  { img: cakeCoupleHug, label: "Couple Cake" },
];

const CATEGORIES = [
  { label: "Cakes", emoji: "🎂", desc: "14+ varieties", href: "/menu", color: "from-pink-400 to-rose-500" },
  { label: "Love Cakes", emoji: "❤️", desc: "Anniversary & couple", href: "/menu", color: "from-red-400 to-pink-500" },
  { label: "Birthday", emoji: "🎉", desc: "Theme & custom", href: "/menu", color: "from-purple-400 to-violet-500" },
  { label: "Custom Cake", emoji: "✨", desc: "Design your own", href: "/custom-cake", color: "from-amber-400 to-orange-500" },
];

export default function Home() {
  return (
    <div className="max-w-lg mx-auto pb-8">
      {/* Offer Banner */}
      <div className="offer-banner text-white text-center py-2.5 px-4 text-sm font-medium">
        🎉 Free delivery on orders above ₹799! Code: <span className="font-bold underline">KANHA10</span> for 10% off
      </div>

      {/* Hero */}
      <div className="relative overflow-hidden bg-gradient-to-br from-pink-50 via-rose-50 to-amber-50 pt-8 pb-6 px-4 text-center">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm border border-pink-200 rounded-full px-4 py-1.5 mb-4">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-xs font-semibold text-foreground">Open Now · Arrah, Bihar</span>
          </div>
          <h1 className="text-3xl font-bold text-primary leading-tight">
            Kanha Home Bakery
          </h1>
          <p className="text-muted-foreground mt-2 text-sm">
            ✨ Fresh Homemade Cakes · Baked with Pure Love ✨
          </p>

          <div className="flex gap-3 mt-5 justify-center">
            <Link href="/menu">
              <button className="bg-primary text-white px-7 py-3 rounded-2xl font-bold text-sm shadow-lg active:scale-95 transition-transform">
                🛒 Order Now
              </button>
            </Link>
            <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello! I want to order a cake.")}`} target="_blank" rel="noopener noreferrer">
              <button className="bg-[#25D366] text-white px-7 py-3 rounded-2xl font-bold text-sm shadow-lg active:scale-95 transition-transform">
                💬 WhatsApp
              </button>
            </a>
          </div>
        </div>

        {/* Floating cake strip */}
        <div className="flex gap-2 mt-5 overflow-hidden rounded-2xl h-28">
          {HERO_CAKES.map((img, i) => (
            <div key={i} className="flex-1 overflow-hidden rounded-xl">
              <img src={img} alt="cake" className="w-full h-full object-cover" />
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
          { icon: "🚴", label: "Delivery" },
        ].map((b) => (
          <div key={b.label} className="bg-white border border-border rounded-xl py-2.5 flex flex-col items-center gap-1 shadow-sm">
            <span className="text-xl">{b.icon}</span>
            <span className="text-[10px] font-semibold text-foreground text-center leading-tight">{b.label}</span>
          </div>
        ))}
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
          {FEATURED.map((cake) => (
            <Link key={cake.name} href="/menu">
              <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden cake-card cursor-pointer active:scale-[0.97] transition-transform">
                <div className="relative h-36 overflow-hidden bg-pink-50">
                  <img src={cake.image} alt={cake.name} className="w-full h-full object-cover" />
                  {cake.badge && (
                    <div className="absolute top-1.5 left-1.5">
                      <span className="bg-amber-400 text-amber-900 text-[9px] font-bold px-1.5 py-0.5 rounded-full">
                        ⭐ {cake.badge}
                      </span>
                    </div>
                  )}
                  <div className="absolute bottom-1.5 right-1.5 bg-white/90 rounded-lg px-2 py-0.5 shadow">
                    <span className="text-primary font-bold text-sm">₹{cake.price}</span>
                  </div>
                </div>
                <div className="p-2.5">
                  <div className="font-bold text-xs text-foreground leading-snug">{cake.name}</div>
                  <div className="flex items-center gap-1 mt-1">
                    <Star size={10} className="fill-amber-400 text-amber-400" />
                    <span className="text-[10px] font-medium text-foreground">{cake.rating}</span>
                    <span className="text-[10px] text-muted-foreground">· 1kg</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Gallery */}
      <div className="px-4 mt-8">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-bold text-foreground">Our Creations</h2>
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer"
            className="text-pink-500 text-sm font-semibold flex items-center gap-0.5">
            Instagram <ChevronRight size={15} />
          </a>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {GALLERY.map((g) => (
            <div key={g.label} className="relative rounded-2xl overflow-hidden aspect-square">
              <img src={g.img} alt={g.label} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-1.5 left-2 right-1">
                <div className="text-white text-[10px] font-bold truncate">{g.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Reviews */}
      <div className="px-4 mt-8">
        <h2 className="text-lg font-bold text-foreground mb-3">Customer Reviews</h2>
        <div className="flex flex-col gap-3">
          {REVIEWS.slice(0, 3).map((r, i) => (
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

      {/* Contact strip */}
      <div className="px-4 mt-8 flex gap-3">
        <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer"
          className="flex-1 bg-[#25D366] text-white rounded-2xl py-3.5 flex items-center justify-center gap-2 font-bold text-sm shadow active:scale-95 transition-transform">
          💬 WhatsApp
        </a>
        <a href="tel:+917050256262"
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
            Police Line, M.P. Bagh, Arrah, Bihar
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
          Hum daily fresh cakes bake karte hain – Chocolate Truffle, Black Forest, Red Velvet, Butterscotch, Oreo, 
          Strawberry aur bahut kuch. Birthday cake, anniversary cake, wedding cake, aur fully custom design cakes 
          Arrah mein doorstep delivery ke saath milti hain. Pure veg ingredients, no artificial colours.
        </p>
        <h3 className="text-xs font-bold text-foreground mb-1">
          आरा बिहार में केक ऑर्डर करें – घर बैठे मंगाएं
        </h3>
        <p className="text-xs text-muted-foreground leading-relaxed mb-3">
          <strong>आरा / अर्रा, बिहार</strong> में सबसे अच्छे होममेड केक के लिए Kanha Home Bakery से संपर्क करें। 
          बर्थडे केक, कस्टम डिज़ाइन केक, वेडिंग केक, एनिवर्सरी केक – सब कुछ ताज़ा और शुद्ध वेज मिलता है। 
          WhatsApp पर ऑर्डर करें और घर पर डिलीवरी पाएं। ₹499 से शुरू।
        </p>
        <div className="grid grid-cols-2 gap-2 text-[10px] text-muted-foreground">
          <div>📍 Police Line, M.P. Bagh, Arrah, Bihar 802301</div>
          <div>📞 +91 70502 56262</div>
          <div>⏰ Open: 8 AM – 9 PM (All Days)</div>
          <div>🛵 Home Delivery in Arrah & nearby</div>
          <div>🌿 100% Pure Veg & Fresh Daily</div>
          <div>💰 Starting ₹499 | Custom orders available</div>
        </div>
      </div>

      {/* SEO Keywords (visually soft, contextually rich) */}
      <div className="mx-4 mt-3 mb-2">
        <p className="text-[9px] text-muted-foreground/60 leading-relaxed text-center">
          Best cake shop in Arrah · Cake in Ara Bihar · Birthday cake Arrah · Custom cake Arrah Bihar · 
          Homemade cake Arrah · Chocolate cake Arrah · Red velvet Arrah · Black forest cake Bihar · 
          आरा में केक · बिहार में केक · अर्रा केक शॉप · आरा बिहार बेकरी
        </p>
      </div>
    </div>
  );
}
