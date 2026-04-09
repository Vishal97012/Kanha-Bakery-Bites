import { Link } from "wouter";
import { Star, MapPin, Truck, Clock, ChevronRight } from "lucide-react";
import { REVIEWS } from "@/lib/data";
import { WHATSAPP_NUMBER } from "@/lib/cart";

import cakeChocolateTruffle from "@assets/IMG-20260326-WA0090_1775751113041.jpg";
import cakeBlackForest from "@assets/IMG-20260326-WA0078_1775751112788.jpg";
import cakeButterscotch from "@assets/IMG-20260401-WA0006_1775751112757.jpg";
import cakeRedVelvet from "@assets/IMG-20260326-WA0086_1775751113012.jpg";
import cakePrincess from "@assets/IMG-20260331-WA0000_1775751113066.jpg";
import cakeMickey from "@assets/IMG-20260331-WA0003_1775751113096.jpg";

const INSTAGRAM_URL = "https://www.instagram.com/kanhahomebakery?igsh=MW50b2M3NjEwY3E4ag==";

const FEATURED = [
  {
    id: "c1",
    name: "Chocolate Truffle Cake",
    description: "Rich dark chocolate cake with silky truffle ganache — a choco lover's dream",
    price: 750,
    image: cakeChocolateTruffle,
    badge: "Best Seller",
    rating: 4.9,
    reviews: 124,
  },
  {
    id: "c2",
    name: "Black Forest Cake",
    description: "Classic chocolate cherry cake with whipped cream layers",
    price: 650,
    image: cakeBlackForest,
    badge: "Popular",
    rating: 4.8,
    reviews: 98,
  },
  {
    id: "c3",
    name: "Butterscotch Cake",
    description: "Crunchy butterscotch cake with caramel cream — irresistible!",
    price: 720,
    image: cakeButterscotch,
    rating: 4.7,
    reviews: 87,
  },
];

const GALLERY = [
  { img: cakeRedVelvet, label: "Red Velvet" },
  { img: cakePrincess, label: "Theme Cakes" },
  { img: cakeMickey, label: "Kids Cakes" },
];

export default function Home() {
  return (
    <div className="max-w-lg mx-auto pb-8">
      {/* Offer Banner */}
      <div className="offer-banner text-white text-center py-2.5 px-4 text-sm font-medium">
        🎉 Free delivery on orders above ₹799! Use code: <span className="font-bold underline">KANHA10</span> for 10% off
      </div>

      {/* Hero */}
      <div className="px-4 pt-8 pb-6 text-center bg-gradient-to-b from-pink-50 to-background">
        <div className="text-6xl mb-3 float-anim inline-block">🎂</div>
        <h1 className="text-3xl font-bold text-primary leading-tight">
          Kanha Home Bakery
        </h1>
        <p className="text-muted-foreground mt-2 text-base">
          Fresh Homemade Cakes — Baked with Love
        </p>
        <p className="text-sm text-muted-foreground mt-1">
          Arrah, Bihar · Custom cakes for every occasion
        </p>

        <div className="flex gap-3 mt-6 justify-center">
          <Link href="/menu">
            <button className="bg-primary text-white px-6 py-3.5 rounded-2xl font-bold text-base shadow-md active:scale-95 transition-transform">
              Order Now
            </button>
          </Link>
          <Link href="/custom-cake">
            <button className="border-2 border-primary text-primary px-6 py-3.5 rounded-2xl font-bold text-base active:scale-95 transition-transform bg-white">
              Custom Cake
            </button>
          </Link>
        </div>
      </div>

      {/* Trust badges */}
      <div className="grid grid-cols-3 gap-3 px-4 mt-2">
        {[
          { icon: "🏠", label: "Home Made" },
          { icon: "✨", label: "Fresh Daily" },
          { icon: "💯", label: "Pure Veg" },
        ].map((b) => (
          <div
            key={b.label}
            className="bg-white border border-border rounded-2xl py-3 flex flex-col items-center gap-1 shadow-sm"
          >
            <span className="text-2xl">{b.icon}</span>
            <span className="text-xs font-semibold text-foreground">{b.label}</span>
          </div>
        ))}
      </div>

      {/* Featured Cakes */}
      <div className="px-4 mt-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-foreground">Featured Cakes</h2>
          <Link href="/menu">
            <span className="text-primary text-sm font-semibold flex items-center gap-0.5 cursor-pointer">
              View All <ChevronRight size={16} />
            </span>
          </Link>
        </div>

        <div className="flex flex-col gap-4">
          {FEATURED.map((cake) => (
            <Link key={cake.id} href="/menu">
              <div className="cake-card bg-white rounded-2xl border border-border shadow-sm overflow-hidden flex cursor-pointer active:scale-[0.98] transition-transform">
                <div className="w-28 h-28 flex-shrink-0 overflow-hidden bg-pink-50">
                  <img
                    src={cake.image}
                    alt={cake.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 p-3 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-bold text-sm text-foreground">{cake.name}</span>
                      {cake.badge && (
                        <span className="bg-amber-100 text-amber-700 text-[10px] font-bold px-2 py-0.5 rounded-full">
                          ⭐ {cake.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">
                      {cake.description}
                    </p>
                    <div className="flex items-center gap-1 mt-1">
                      <Star size={12} className="fill-amber-400 text-amber-400" />
                      <span className="text-xs font-semibold text-foreground">{cake.rating}</span>
                      <span className="text-xs text-muted-foreground">({cake.reviews})</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-primary font-bold text-base">₹{cake.price}</span>
                    <span className="text-xs text-muted-foreground">per kg</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Photo Gallery */}
      <div className="px-4 mt-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-foreground">Our Creations</h2>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 text-sm font-semibold flex items-center gap-0.5"
          >
            See more <ChevronRight size={16} />
          </a>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {GALLERY.map((g) => (
            <div key={g.label} className="relative rounded-2xl overflow-hidden aspect-square">
              <img
                src={g.img}
                alt={g.label}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-2 py-1.5">
                <div className="text-white text-[10px] font-bold">{g.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Delivery Info */}
      <div className="px-4 mt-8">
        <h2 className="text-xl font-bold text-foreground mb-4">Delivery Info</h2>
        <div className="bg-white rounded-2xl border border-border shadow-sm p-4 flex flex-col gap-3">
          <div className="flex items-start gap-3">
            <Truck className="text-primary mt-0.5 flex-shrink-0" size={20} />
            <div>
              <div className="font-semibold text-sm text-foreground">Home Delivery Available</div>
              <div className="text-xs text-muted-foreground mt-0.5">We deliver fresh cakes to your doorstep in Arrah</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Clock className="text-primary mt-0.5 flex-shrink-0" size={20} />
            <div>
              <div className="font-semibold text-sm text-foreground">Order 1 Day in Advance</div>
              <div className="text-xs text-muted-foreground mt-0.5">Custom cakes need 24-48 hours notice</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <MapPin className="text-primary mt-0.5 flex-shrink-0" size={20} />
            <div>
              <div className="font-semibold text-sm text-foreground">Delivery Areas</div>
              <div className="text-xs text-muted-foreground mt-0.5">
                Police Line, M.P. Bagh, Sadar Bazar, Raja Bazar, Koilwar & nearby areas in Arrah, Bihar
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Customer Reviews */}
      <div className="px-4 mt-8">
        <h2 className="text-xl font-bold text-foreground mb-4">Customer Reviews</h2>
        <div className="flex flex-col gap-3">
          {REVIEWS.slice(0, 3).map((r, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-border shadow-sm p-4"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-xl">
                  {r.emoji}
                </div>
                <div>
                  <div className="font-semibold text-sm text-foreground">{r.name}</div>
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: r.rating }).map((_, j) => (
                      <Star key={j} size={12} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
                <span className="ml-auto text-xs text-muted-foreground">{r.date}</span>
              </div>
              <p className="text-sm text-foreground/80">{r.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* WhatsApp CTA */}
      <div className="px-4 mt-8">
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello Kanha Home Bakery! I would like to order a cake.")}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="bg-[#25D366] text-white rounded-2xl p-5 text-center shadow-md active:scale-95 transition-transform">
            <div className="text-2xl mb-1">💬</div>
            <div className="font-bold text-lg">Order via WhatsApp</div>
            <div className="text-sm opacity-90 mt-0.5">
              Chat with us directly at +91 70502 56262
            </div>
          </div>
        </a>
      </div>

      {/* Social Links */}
      <div className="px-4 mt-6 flex gap-3">
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-2xl py-3.5 text-center font-semibold flex items-center justify-center gap-2 active:scale-95 transition-transform"
        >
          <span>📸</span> Instagram
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-blue-600 text-white rounded-2xl py-3.5 text-center font-semibold flex items-center justify-center gap-2 active:scale-95 transition-transform"
        >
          <span>📘</span> Facebook
        </a>
      </div>
    </div>
  );
}
