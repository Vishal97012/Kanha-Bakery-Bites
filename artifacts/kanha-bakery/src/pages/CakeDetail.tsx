import { useLocation } from "wouter";
import { ArrowLeft, Star, ShieldCheck, Truck, Clock, Leaf } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/cart";
import { getProductBySlug, getRelatedProducts, ALL_PRODUCTS } from "@/lib/products";

const wa = (msg: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

export default function CakeDetail({ params }: { params: { slug: string } }) {
  const [, navigate] = useLocation();
  const product = getProductBySlug(params.slug);

  if (!product) {
    return (
      <div className="max-w-lg mx-auto px-4 py-20 text-center">
        <div className="text-5xl mb-4">🎂</div>
        <h2 className="text-lg font-bold text-[#5a2e1f]">Cake not found</h2>
        <button
          onClick={() => navigate("/")}
          className="mt-6 bg-[#5a2e1f] text-white px-6 py-3 rounded-xl font-bold"
        >
          Back to Home
        </button>
      </div>
    );
  }

  const mrp = Math.round(product.min / 0.9);
  const savings = mrp - product.min;
  const related = getRelatedProducts(product, 4);

  return (
    <div className="max-w-lg mx-auto pb-28 bg-[#fdf8f3]">
      <div className="relative">
        <img
          src={product.image}
          alt={`${product.name} – Kanha Home Bakery Arrah Bihar`}
          className="w-full aspect-square object-cover"
        />
        <button
          onClick={() => navigate(-1 as unknown as string)}
          className="absolute top-4 left-4 w-10 h-10 rounded-full bg-white/90 shadow-md flex items-center justify-center active:scale-95 transition-transform"
          aria-label="Go back"
        >
          <ArrowLeft size={20} className="text-[#5a2e1f]" />
        </button>
        {product.badge && (
          <div className="absolute top-4 right-4">
            <span className="bg-[#5a2e1f] text-white text-[11px] font-bold px-3 py-1.5 rounded-full shadow-md">
              {product.badge}
            </span>
          </div>
        )}
        <div className="absolute bottom-4 right-4 bg-[#25D366] text-white text-[11px] font-extrabold px-3 py-1.5 rounded-full shadow-md">
          10% OFF
        </div>
      </div>

      <div className="px-4 pt-5">
        <h1 className="text-xl font-extrabold text-[#5a2e1f] leading-snug">{product.name}</h1>

        <div className="flex items-center gap-3 mt-2">
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} size={14} fill="#b8893a" color="#b8893a" />
            ))}
          </div>
          <span className="text-[12px] text-[#6a5a4d]">Homemade · Arrah, Bihar</span>
        </div>

        <div className="flex items-baseline gap-3 mt-3">
          <span className="text-2xl font-extrabold text-[#5a2e1f]">
            ₹{product.min.toLocaleString()}
          </span>
          <span className="text-sm text-[#999] line-through">₹{mrp.toLocaleString()}</span>
          <span className="text-xs font-bold text-green-700 bg-green-100 px-2 py-0.5 rounded-full">
            Save ₹{savings}
          </span>
        </div>
        <p className="text-[11px] text-[#6a5a4d] mt-0.5">Starting price for 500g</p>
      </div>

      <div className="mx-4 mt-5 border-t border-[#e8dccc] pt-5">
        <h2 className="text-sm font-extrabold text-[#5a2e1f] mb-2">Description</h2>
        <p className="text-[13px] text-[#4a3a2d] leading-relaxed">{product.fullDesc}</p>
      </div>

      <div className="mx-4 mt-5">
        <h2 className="text-sm font-extrabold text-[#5a2e1f] mb-3">Highlights</h2>
        <div className="flex flex-wrap gap-2">
          {product.highlights.map((h) => (
            <span
              key={h}
              className="bg-[#f5ece0] text-[#5a2e1f] text-[12px] font-semibold px-3 py-1.5 rounded-full border border-[#e8dccc]"
            >
              {h}
            </span>
          ))}
        </div>
      </div>

      <div className="mx-4 mt-6">
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-[#f5ece0] rounded-xl p-3 flex items-start gap-2">
            <Leaf size={18} className="text-green-700 flex-shrink-0 mt-0.5" />
            <div>
              <div className="text-[11px] font-bold text-[#5a2e1f]">100% Pure Veg</div>
              <div className="text-[10px] text-[#6a5a4d] mt-0.5">No eggs, all halal ingredients</div>
            </div>
          </div>
          <div className="bg-[#f5ece0] rounded-xl p-3 flex items-start gap-2">
            <Clock size={18} className="text-[#5a2e1f] flex-shrink-0 mt-0.5" />
            <div>
              <div className="text-[11px] font-bold text-[#5a2e1f]">Fresh Daily</div>
              <div className="text-[10px] text-[#6a5a4d] mt-0.5">Made fresh on order, same day</div>
            </div>
          </div>
          <div className="bg-[#f5ece0] rounded-xl p-3 flex items-start gap-2">
            <Truck size={18} className="text-[#5a2e1f] flex-shrink-0 mt-0.5" />
            <div>
              <div className="text-[11px] font-bold text-[#5a2e1f]">Free Delivery</div>
              <div className="text-[10px] text-[#6a5a4d] mt-0.5">Orders above ₹499 in Arrah</div>
            </div>
          </div>
          <div className="bg-[#f5ece0] rounded-xl p-3 flex items-start gap-2">
            <ShieldCheck size={18} className="text-[#5a2e1f] flex-shrink-0 mt-0.5" />
            <div>
              <div className="text-[11px] font-bold text-[#5a2e1f]">Quality Assured</div>
              <div className="text-[10px] text-[#6a5a4d] mt-0.5">100% satisfaction guarantee</div>
            </div>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <div className="mt-8 px-4">
          <h2 className="text-sm font-extrabold text-[#5a2e1f] mb-3">You May Also Like</h2>
          <div className="grid grid-cols-2 gap-3">
            {related.map((p) => (
              <a
                key={p.slug}
                href={`${import.meta.env.BASE_URL}cake/${p.slug}`}
                className="bg-white rounded-xl overflow-hidden border border-[#e8dccc] shadow-sm active:scale-[0.98] transition-transform"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-2 text-center">
                  <div className="text-[11px] font-semibold text-[#5a2e1f] leading-tight">{p.name}</div>
                  <div className="text-[#b8893a] font-bold text-xs mt-1">₹{p.min.toLocaleString()}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}

      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-[#e8dccc] px-4 py-3 flex gap-3 shadow-lg max-w-lg mx-auto">
        <a
          href={wa(
            `Hi, I want to order *${product.name}* 🎂\n\n${product.desc}\n\nPlease share weight options & availability.`
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1"
        >
          <button className="w-full bg-[#25D366] text-white font-extrabold py-4 rounded-xl shadow-md active:scale-95 transition-transform text-[15px] tracking-wide">
            💬 Order on WhatsApp
          </button>
        </a>
      </div>
    </div>
  );
}
