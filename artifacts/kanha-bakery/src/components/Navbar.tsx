import { Link, useLocation } from "wouter";
import { Home, UtensilsCrossed, Cake, Phone, ShoppingCart, PartyPopper } from "lucide-react";
import { useState, useEffect } from "react";
import { getCart, getCartCount } from "@/lib/cart";

const NAV_ITEMS = [
  { href: "/", label: "Home", Icon: Home },
  { href: "/menu", label: "Menu", Icon: UtensilsCrossed },
  { href: "/party-orders", label: "Party", Icon: PartyPopper },
  { href: "/custom-cake", label: "Custom", Icon: Cake },
  { href: "/contact", label: "Contact", Icon: Phone },
];

export default function Navbar() {
  const [location] = useLocation();
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const update = () => setCartCount(getCartCount(getCart()));
    update();
    window.addEventListener("storage", update);
    window.addEventListener("cart-updated", update);
    return () => {
      window.removeEventListener("storage", update);
      window.removeEventListener("cart-updated", update);
    };
  }, []);

  const isActive = (href: string) =>
    href === "/" ? location === "/" : location.startsWith(href);

  return (
    <>
      {/* Top header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#e8dccc] shadow-sm">
        <div className="max-w-lg mx-auto px-4 h-14 flex items-center justify-between">
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer">
              <span className="text-2xl">🎂</span>
              <div>
                <div className="font-bold text-[#5a2e1f] text-base leading-tight">Kanha</div>
                <div className="text-[10px] text-[#6a5a4d] leading-tight -mt-0.5">Home Bakery</div>
              </div>
            </div>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((l) => (
              <Link key={l.href} href={l.href}>
                <span
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                    isActive(l.href)
                      ? "bg-[#5a2e1f]/10 text-[#5a2e1f] font-semibold"
                      : "text-[#4a3a2d] hover:bg-[#f5ece0]"
                  }`}
                >
                  {l.label === "Custom" ? "Custom Cake" : l.label}
                </span>
              </Link>
            ))}
          </div>

          {/* Cart icon (top bar) */}
          <Link href="/cart">
            <button className="relative p-2 rounded-xl bg-[#5a2e1f]/10 text-[#5a2e1f]">
              <ShoppingCart size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#5a2e1f] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold leading-none">
                  {cartCount}
                </span>
              )}
            </button>
          </Link>
        </div>
      </header>

      {/* Mobile bottom tab bar */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-[#e8dccc] shadow-[0_-4px_20px_rgba(90,46,31,0.10)]">
        <div className="grid grid-cols-6 max-w-lg mx-auto">
          {NAV_ITEMS.map(({ href, label, Icon }) => {
            const active = isActive(href);
            return (
              <Link key={href} href={href}>
                <div className={`flex flex-col items-center justify-center py-2 gap-0.5 cursor-pointer transition-colors ${active ? "text-[#5a2e1f]" : "text-[#9a8a7d]"}`}>
                  <div className={`p-1.5 rounded-xl transition-all ${active ? "bg-[#5a2e1f]/10 scale-110" : ""}`}>
                    <Icon size={20} strokeWidth={active ? 2.2 : 1.7} />
                  </div>
                  <span className={`text-[10px] font-semibold leading-none ${active ? "text-[#5a2e1f]" : "text-[#9a8a7d]"}`}>
                    {label}
                  </span>
                </div>
              </Link>
            );
          })}

          {/* Cart tab */}
          <Link href="/cart">
            <div className={`flex flex-col items-center justify-center py-2 gap-0.5 cursor-pointer transition-colors relative ${isActive("/cart") ? "text-[#5a2e1f]" : "text-[#9a8a7d]"}`}>
              <div className={`p-1.5 rounded-xl transition-all relative ${isActive("/cart") ? "bg-[#5a2e1f]/10 scale-110" : ""}`}>
                <ShoppingCart size={20} strokeWidth={isActive("/cart") ? 2.2 : 1.7} />
                {cartCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 bg-[#5a2e1f] text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold leading-none">
                    {cartCount}
                  </span>
                )}
              </div>
              <span className={`text-[10px] font-semibold leading-none ${isActive("/cart") ? "text-[#5a2e1f]" : "text-[#9a8a7d]"}`}>
                Cart
              </span>
            </div>
          </Link>
        </div>
      </nav>
    </>
  );
}
