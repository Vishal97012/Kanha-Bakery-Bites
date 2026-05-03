import { WHATSAPP_NUMBER } from "@/lib/cart";

const INSTAGRAM_URL = "https://www.instagram.com/kanhahomebakery?igsh=MW50b2M3NjEwY3E4ag==";

export default function Footer() {
  return (
    <footer className="bg-[#5a2e1f] text-white mt-12 py-8 px-4">
      <div className="max-w-lg mx-auto text-center">
        <div className="text-3xl mb-2">🎂</div>
        <div className="font-bold text-white text-lg">Kanha Home Bakery</div>
        <div className="text-white/70 text-sm mt-1">Fresh Homemade Cakes, Baked with Love</div>
        <div className="text-white/60 text-xs mt-0.5">Police Line, M.P. Bagh, Arrah, Bihar</div>

        <div className="flex justify-center gap-6 mt-5">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm font-medium text-pink-300 hover:text-pink-200 transition-colors"
          >
            <span className="text-xl">📸</span> Instagram
          </a>
          <a
            href="https://www.facebook.com/kanhahomebakery"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm font-medium text-blue-300 hover:text-blue-200 transition-colors"
          >
            <span className="text-xl">📘</span> Facebook
          </a>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm font-medium text-green-300 hover:text-green-200 transition-colors"
          >
            <span className="text-xl">💬</span> WhatsApp
          </a>
        </div>

        <div className="mt-5 pt-4 border-t border-white/20 text-xs text-white/50">
          © 2025 Kanha Home Bakery · Arrah, Bihar · +91 70502 56262
        </div>
      </div>
    </footer>
  );
}
