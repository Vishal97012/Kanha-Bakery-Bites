import { useLocation } from "wouter";
import { ShoppingBag, MessageCircle } from "lucide-react";
import { type Product, WA_URL } from "@/lib/products";
import { useCart } from "@/lib/cart";

interface ProductCardProps {
  product: Product;
}

const BADGE_COLORS: Record<string, string> = {
  "Best Seller": "bg-primary text-primary-foreground",
  "Trending": "bg-accent text-white",
  "Premium": "bg-amber-700 text-white",
  "Customizable": "bg-violet-700 text-white",
  "Same Day Delivery": "bg-emerald-700 text-white",
  "Combo Offer": "bg-orange-700 text-white",
  "Best Value": "bg-amber-600 text-white",
};

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const [, setLocation] = useLocation();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart({ slug: product.slug, name: product.name, price: product.price, qty: 1, image: product.icon });
  };

  const waMsg = `Hi, I want to order a gift.\nProduct: ${product.name}\nPrice: ₹${product.price}`;

  return (
    <div
      data-testid={`card-product-${product.slug}`}
      onClick={() => setLocation(`/product/${product.slug}`)}
      className="group bg-card border border-card-border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1.5"
    >
      {/* Photo */}
      <div className="relative h-52 overflow-hidden bg-secondary">
        <img
          src={product.photo}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {product.badge && (
          <span className={`absolute top-3 left-3 text-[10px] font-bold px-2.5 py-1 rounded-full shadow-lg ${BADGE_COLORS[product.badge] ?? "bg-primary text-primary-foreground"}`}>
            {product.badge}
          </span>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
      </div>

      {/* Info */}
      <div className="p-4">
        <h3 className="font-serif font-semibold text-base text-foreground leading-snug line-clamp-2 min-h-[2.5rem]">
          {product.name}
        </h3>
        <p className="text-muted-foreground text-xs mt-1.5 line-clamp-2 leading-relaxed">
          {product.desc}
        </p>

        <div className="flex items-center justify-between mt-4">
          <div>
            <span className="text-accent font-bold text-lg">₹{product.price.toLocaleString()}</span>
            <div className="text-muted-foreground text-[10px]">Free delivery above ₹499</div>
          </div>
          <div className="flex gap-2">
            <button
              data-testid={`button-add-cart-${product.slug}`}
              onClick={handleAddToCart}
              className="p-2.5 rounded-xl bg-secondary text-primary hover:bg-primary hover:text-primary-foreground transition-colors shadow-sm"
              title="Add to cart"
            >
              <ShoppingBag size={16} />
            </button>
            <a
              href={`${WA_URL}?text=${encodeURIComponent(waMsg)}`}
              target="_blank"
              rel="noopener noreferrer"
              data-testid={`button-whatsapp-${product.slug}`}
              onClick={(e) => e.stopPropagation()}
              className="p-2.5 rounded-xl bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366] hover:text-white transition-colors shadow-sm"
              title="Order on WhatsApp"
            >
              <MessageCircle size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
