import { Link } from "wouter";
import { Gift, Instagram, Phone, MapPin } from "lucide-react";
import { WA_URL } from "@/lib/products";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <Gift size={16} className="text-primary-foreground" />
              </div>
              <span className="font-serif font-bold text-lg text-background">Kanha Gifts</span>
            </div>
            <p className="text-background/60 text-sm leading-relaxed">
              Make Every Moment Special. Handcrafted gifts and bouquets delivered with love in Arrah, Bihar.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif font-semibold text-background mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/products", label: "All Gifts" },
                { href: "/custom-gift", label: "Custom Gift" },
                { href: "/cart", label: "Cart" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>
                    <span className="text-background/60 text-sm hover:text-background transition-colors cursor-pointer">
                      {l.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif font-semibold text-background mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-background/60 text-sm">
                <MapPin size={14} className="mt-0.5 flex-shrink-0 text-accent" />
                Police Line, M.P. Bagh, Arrah, Bihar – 802301
              </li>
              <li>
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-background/60 text-sm hover:text-background transition-colors"
                  data-testid="link-whatsapp-footer"
                >
                  <Phone size={14} className="text-accent" />
                  +91 70502 56262
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/kanhahomebakery"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-background/60 text-sm hover:text-background transition-colors"
                  data-testid="link-instagram-footer"
                >
                  <Instagram size={14} className="text-accent" />
                  @kanhahomebakery
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-background/40 text-xs">© 2025 Kanha Gifts · Arrah, Bihar</p>
          <p className="text-background/40 text-xs">Free delivery above ₹499 · Same Day Available</p>
        </div>
      </div>
    </footer>
  );
}
