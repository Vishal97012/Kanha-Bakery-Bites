import { Link, useLocation } from "wouter";
import { ShoppingCart } from "lucide-react";
import { useState, useEffect } from "react";
import { getCart, getCartCount } from "@/lib/cart";

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

  const links = [
    { href: "/", label: "Home" },
    { href: "/menu", label: "Menu" },
    { href: "/custom-cake", label: "Custom Cake" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href: string) =>
    href === "/" ? location === "/" : location.startsWith(href);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#e8dccc] shadow-sm">
      <div className="max-w-lg mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <div className="flex items-center gap-2 cursor-pointer">
            <span className="text-2xl">🎂</span>
            <div>
              <div className="font-bold text-[#5a2e1f] text-base leading-tight">Kanha</div>
              <div className="text-[10px] text-[#6a5a4d] leading-tight -mt-0.5">Home Bakery</div>
            </div>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link key={l.href} href={l.href}>
              <span
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                  isActive(l.href)
                    ? "bg-[#5a2e1f]/10 text-[#5a2e1f] font-semibold"
                    : "text-[#4a3a2d] hover:bg-[#f5ece0]"
                }`}
              >
                {l.label}
              </span>
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Link href="/cart">
            <button className="relative p-2 rounded-xl bg-[#5a2e1f]/10 text-[#5a2e1f]">
              <ShoppingCart size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#5a2e1f] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </button>
          </Link>
        </div>
      </div>

      <div className="md:hidden border-t border-[#e8dccc] bg-white px-3 py-2">
        <div className="grid grid-cols-4 gap-2">
          {links.map((l) => (
            <Link key={l.href} href={l.href}>
              <span
                className={`block text-center rounded-2xl px-2 py-2 text-[11px] font-semibold transition-colors ${
                  isActive(l.href)
                    ? "bg-[#5a2e1f] text-white"
                    : "bg-[#f5ece0] text-[#5a2e1f]"
                }`}
              >
                {l.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
