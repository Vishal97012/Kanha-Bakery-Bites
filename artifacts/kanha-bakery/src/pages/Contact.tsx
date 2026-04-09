import { Phone, MapPin, Clock, Instagram, Facebook } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/cart";

const INSTAGRAM_URL = "https://www.instagram.com/kanhahomebakery?igsh=MW50b2M3NjEwY3E4ag==";

const DELIVERY_AREAS = [
  "Police Line",
  "M.P. Bagh",
  "Sadar Bazar",
  "Raja Bazar",
  "Arrah City",
  "Koilwar",
  "Jagdishpur",
  "Bihia",
  "Shahpur",
  "Piro",
  "Sandesh",
  "Tarari",
  "Ara Junction",
  "Station Road",
];

export default function Contact() {
  return (
    <div className="max-w-lg mx-auto px-4 pb-8">
      <div className="pt-6 pb-4">
        <h1 className="text-2xl font-bold text-foreground">Contact Us</h1>
        <p className="text-muted-foreground text-sm mt-1">We'd love to hear from you!</p>
      </div>

      {/* Hero card */}
      <div className="bg-gradient-to-br from-pink-100 to-amber-50 rounded-2xl p-5 text-center mb-5 border border-pink-200">
        <div className="text-4xl mb-2">🎂</div>
        <div className="font-bold text-primary text-lg">Kanha Home Bakery</div>
        <div className="text-muted-foreground text-sm">Fresh Homemade Cakes, Baked with Love</div>
        <div className="text-muted-foreground text-xs mt-1">Arrah, Bihar</div>
      </div>

      {/* WhatsApp - primary CTA */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello Kanha Home Bakery! I'd like to enquire about your cakes.")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="block mb-4"
      >
        <div className="bg-[#25D366] text-white rounded-2xl p-5 flex items-center gap-4 shadow-md active:scale-95 transition-transform">
          <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center text-3xl flex-shrink-0">
            💬
          </div>
          <div>
            <div className="font-bold text-base">WhatsApp</div>
            <div className="text-sm opacity-90">+91 70502 56262</div>
            <div className="text-xs opacity-80 mt-0.5">Tap to chat with us</div>
          </div>
        </div>
      </a>

      {/* Phone */}
      <a href="tel:+917050256262" className="block mb-4">
        <div className="bg-white rounded-2xl p-4 flex items-center gap-4 border border-border shadow-sm active:scale-95 transition-transform">
          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
            <Phone className="text-primary" size={22} />
          </div>
          <div>
            <div className="font-bold text-sm text-foreground">Phone / Call</div>
            <div className="text-primary font-semibold text-base">+91 70502 56262</div>
            <div className="text-xs text-muted-foreground">Tap to call directly</div>
          </div>
        </div>
      </a>

      {/* Address */}
      <div className="bg-white rounded-2xl p-4 flex items-start gap-4 border border-border shadow-sm mb-4">
        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
          <MapPin className="text-primary" size={22} />
        </div>
        <div>
          <div className="font-bold text-sm text-foreground">Address</div>
          <div className="text-foreground text-sm mt-0.5 leading-relaxed">
            Kanha Home Bakery<br />
            Police Line, M.P. Bagh,<br />
            Arrah, Bihar
          </div>
          <div className="text-xs text-muted-foreground mt-1">Call for exact location pin</div>
        </div>
      </div>

      {/* Timings */}
      <div className="bg-white rounded-2xl p-4 flex items-start gap-4 border border-border shadow-sm mb-5">
        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
          <Clock className="text-primary" size={22} />
        </div>
        <div>
          <div className="font-bold text-sm text-foreground">Working Hours</div>
          <div className="text-sm text-foreground mt-1">
            <div>Mon – Sat: <span className="font-medium">9:00 AM – 9:00 PM</span></div>
            <div>Sunday: <span className="font-medium">10:00 AM – 6:00 PM</span></div>
          </div>
          <div className="text-xs text-muted-foreground mt-1">Order 24 hrs in advance for custom cakes</div>
        </div>
      </div>

      {/* Delivery Areas */}
      <div className="mb-5">
        <h2 className="font-bold text-lg text-foreground mb-3">Delivery Areas</h2>
        <div className="bg-white rounded-2xl border border-border shadow-sm p-4">
          <div className="grid grid-cols-2 gap-2">
            {DELIVERY_AREAS.map((area) => (
              <div
                key={area}
                className="flex items-center gap-2 text-sm text-foreground"
              >
                <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span>
                {area}
              </div>
            ))}
          </div>
          <div className="mt-3 pt-3 border-t border-border text-xs text-muted-foreground">
            Not in the list? Chat with us on WhatsApp — we'll try our best!
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div>
        <h2 className="font-bold text-lg text-foreground mb-3">Follow Us</h2>
        <div className="grid grid-cols-2 gap-3">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-br from-pink-500 to-purple-600 text-white rounded-2xl p-4 flex items-center gap-3 active:scale-95 transition-transform"
          >
            <Instagram size={24} />
            <div>
              <div className="font-bold text-sm">Instagram</div>
              <div className="text-xs opacity-80">@kanhahomebakery</div>
            </div>
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white rounded-2xl p-4 flex items-center gap-3 active:scale-95 transition-transform"
          >
            <Facebook size={24} />
            <div>
              <div className="font-bold text-sm">Facebook</div>
              <div className="text-xs opacity-80">Kanha Home Bakery</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
