import { Link, useLocation } from "wouter";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { getCart, getCartCount } from "@/lib/cart";

export default function Navbar() {
  const [location] = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
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
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-border shadow-sm">
      <div className="max-w-lg mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" onClick={() => setMenuOpen(false)}>
          <div className="flex items-center gap-2 cursor-pointer">
            <span className="text-2xl">🎂</span>
            <div>
              <div className="font-bold text-primary text-base leading-tight">Kanha</div>
              <div className="text-[10px] text-muted-foreground leading-tight -mt-0.5">Home Bakery</div>
            </div>
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link key={l.href} href={l.href}>
              <span
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                  isActive(l.href)
                    ? "bg-primary/10 text-primary"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                {l.label}
              </span>
            </Link>
          ))}
        </div>

        {/* Cart + Mobile menu */}
        <div className="flex items-center gap-2">
          <Link href="/cart">
            <button className="relative p-2 rounded-xl bg-primary/10 text-primary">
              <ShoppingCart size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </button>
          </Link>
          <button
            className="md:hidden p-2 rounded-xl bg-muted text-foreground"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-border px-4 py-3 flex flex-col gap-1">
          {links.map((l) => (
            <Link key={l.href} href={l.href}>
              <span
                className={`block px-4 py-3 rounded-xl text-base font-medium cursor-pointer transition-colors ${
                  isActive(l.href)
                    ? "bg-primary/10 text-primary"
                    : "text-foreground hover:bg-muted"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </span>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
