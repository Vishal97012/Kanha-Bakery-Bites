import { Link, useLocation } from "wouter";
import { ShoppingBag, Gift, Menu, X } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/lib/cart";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Gifts" },
  { href: "/custom-gift", label: "Custom Gift" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [location] = useLocation();
  const { itemCount } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? location === "/" : location.startsWith(href);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center gap-2 cursor-pointer group" data-testid="link-logo">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
              <Gift size={16} className="text-primary-foreground" />
            </div>
            <div>
              <div className="font-serif font-bold text-primary text-lg leading-none">Kanha Gifts</div>
              <div className="text-[10px] text-muted-foreground leading-none tracking-wide">Make Every Moment Special</div>
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((l) => (
            <Link key={l.href} href={l.href}>
              <span
                data-testid={`link-nav-${l.label.toLowerCase().replace(" ", "-")}`}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                  isActive(l.href)
                    ? "bg-primary/10 text-primary font-semibold"
                    : "text-foreground/70 hover:text-foreground hover:bg-secondary"
                }`}
              >
                {l.label}
              </span>
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {/* Cart */}
          <Link href="/cart">
            <button
              data-testid="button-cart"
              className="relative p-2 rounded-xl bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
            >
              <ShoppingBag size={20} />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-[10px] w-4.5 h-4.5 rounded-full flex items-center justify-center font-bold leading-none min-w-[18px] min-h-[18px] text-center">
                  {itemCount}
                </span>
              )}
            </button>
          </Link>

          {/* Mobile menu toggle */}
          <button
            data-testid="button-menu-toggle"
            className="md:hidden p-2 rounded-xl bg-secondary text-foreground"
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-background border-t border-border px-4 pb-4 space-y-1">
          {NAV_LINKS.map((l) => (
            <Link key={l.href} href={l.href}>
              <div
                data-testid={`link-mobile-nav-${l.label.toLowerCase().replace(" ", "-")}`}
                onClick={() => setMenuOpen(false)}
                className={`block px-4 py-3 rounded-xl text-sm font-medium cursor-pointer transition-colors ${
                  isActive(l.href)
                    ? "bg-primary/10 text-primary font-semibold"
                    : "text-foreground/70 hover:bg-secondary"
                }`}
              >
                {l.label}
              </div>
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
