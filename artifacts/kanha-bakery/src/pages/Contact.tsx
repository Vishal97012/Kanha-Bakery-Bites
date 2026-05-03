import { Phone, MapPin, Clock, Instagram, Facebook } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/cart";

const INSTAGRAM_URL = "https://www.instagram.com/kanhahomebakery?igsh=MW50b2M3NjEwY3E4ag==";

const DELIVERY_AREAS = [
  "Police Line", "M.P. Bagh", "Sadar Bazar", "Raja Bazar",
  "Arrah City", "Koilwar", "Jagdishpur", "Bihia",
  "Shahpur", "Piro", "Sandesh", "Tarari",
  "Ara Junction", "Station Road",
];

export default function Contact() {
  return (
    <div className="max-w-lg mx-auto pb-28 bg-[#fdf8f3]">
      <div className="bg-[#5a2e1f] text-white px-4 py-5 rounded-b-[28px] shadow-md mx-4 mt-4 mb-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <div className="text-[22px] font-extrabold leading-none">Contact Us</div>
            <div className="text-[14px] mt-1.5 opacity-90">We'd love to hear from you!</div>
          </div>
          <div className="text-[48px] leading-none select-none">📞</div>
        </div>
      </div>

      <div className="px-4 flex flex-col gap-4">
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello Kanha Home Bakery! I'd like to enquire about your cakes.")}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="bg-[#25D366] text-white rounded-2xl p-5 flex items-center gap-4 shadow-md active:scale-95 transition-transform">
            <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center text-3xl flex-shrink-0">
              💬
            </div>
            <div>
              <div className="font-bold text-base">WhatsApp Order</div>
              <div className="text-sm opacity-90">+91 70502 56262</div>
              <div className="text-xs opacity-80 mt-0.5">Tap to chat &amp; place order now</div>
            </div>
          </div>
        </a>

        <a href="tel:+917050256262">
          <div className="bg-white rounded-2xl p-4 flex items-center gap-4 border border-[#e8dccc] shadow-sm active:scale-95 transition-transform">
            <div className="w-12 h-12 bg-[#5a2e1f]/10 rounded-xl flex items-center justify-center flex-shrink-0">
              <Phone className="text-[#5a2e1f]" size={22} />
            </div>
            <div>
              <div className="font-bold text-sm text-[#5a2e1f]">Phone / Call</div>
              <div className="text-[#b8893a] font-semibold text-base">+91 70502 56262</div>
              <div className="text-xs text-[#6a5a4d]">Tap to call directly</div>
            </div>
          </div>
        </a>

        <div className="bg-white rounded-2xl p-4 flex items-start gap-4 border border-[#e8dccc] shadow-sm">
          <div className="w-12 h-12 bg-[#5a2e1f]/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
            <MapPin className="text-[#5a2e1f]" size={22} />
          </div>
          <div>
            <div className="font-bold text-sm text-[#5a2e1f]">Address</div>
            <div className="text-[#4a3a2d] text-sm mt-0.5 leading-relaxed">
              Kanha Home Bakery<br />
              Police Line, M.P. Bagh,<br />
              Arrah, Bihar – 802301
            </div>
            <div className="text-xs text-[#6a5a4d] mt-1">Call for exact location pin</div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-4 flex items-start gap-4 border border-[#e8dccc] shadow-sm">
          <div className="w-12 h-12 bg-[#5a2e1f]/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
            <Clock className="text-[#5a2e1f]" size={22} />
          </div>
          <div>
            <div className="font-bold text-sm text-[#5a2e1f]">Working Hours</div>
            <div className="text-sm text-[#4a3a2d] mt-1 space-y-0.5">
              <div>Mon – Sat: <span className="font-semibold">9:00 AM – 9:00 PM</span></div>
              <div>Sunday: <span className="font-semibold">10:00 AM – 6:00 PM</span></div>
            </div>
            <div className="text-xs text-[#6a5a4d] mt-1.5 bg-[#f5ece0] rounded-lg px-2 py-1 inline-block">
              Order 24 hrs in advance for custom cakes
            </div>
          </div>
        </div>

        <div>
          <h2 className="font-extrabold text-base text-[#5a2e1f] mb-3">Delivery Areas</h2>
          <div className="bg-white rounded-2xl border border-[#e8dccc] shadow-sm p-4">
            <div className="grid grid-cols-2 gap-y-2 gap-x-2">
              {DELIVERY_AREAS.map((area) => (
                <div key={area} className="flex items-center gap-2 text-sm text-[#4a3a2d]">
                  <span className="w-1.5 h-1.5 bg-[#5a2e1f] rounded-full flex-shrink-0" />
                  {area}
                </div>
              ))}
            </div>
            <div className="mt-3 pt-3 border-t border-[#e8dccc] text-xs text-[#6a5a4d]">
              Not in the list? Chat with us on WhatsApp — we'll try our best! 💬
            </div>
          </div>
        </div>

        <div>
          <h2 className="font-extrabold text-base text-[#5a2e1f] mb-3">Follow Us</h2>
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
              href="https://www.facebook.com/kanhahomebakery"
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

        <div className="text-center mt-2 pb-2">
          <p className="text-[11px] text-[#5a2e1f]/60 leading-relaxed">
            📍 Police Line, M.P. Bagh, Arrah, Bihar – 802301 · 📞 +91 70502 56262
          </p>
        </div>
      </div>
    </div>
  );
}
