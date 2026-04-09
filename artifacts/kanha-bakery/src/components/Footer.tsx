import { WHATSAPP_NUMBER } from "@/lib/cart";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-border mt-12 py-8 px-4">
      <div className="max-w-lg mx-auto text-center">
        <div className="text-3xl mb-2">🎂</div>
        <div className="font-bold text-primary text-lg">Kanha Home Bakery</div>
        <div className="text-muted-foreground text-sm mt-1">Fresh Homemade Cakes</div>

        <div className="flex justify-center gap-6 mt-4">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm font-medium text-pink-500 hover:text-pink-600 transition-colors"
          >
            <span className="text-xl">📸</span> Instagram
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
          >
            <span className="text-xl">📘</span> Facebook
          </a>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm font-medium text-green-600 hover:text-green-700 transition-colors"
          >
            <span className="text-xl">💬</span> WhatsApp
          </a>
        </div>

        <div className="mt-4 text-xs text-muted-foreground">
          © 2024 Kanha Home Bakery. Made with ❤️ and lots of sugar.
        </div>
      </div>
    </footer>
  );
}
