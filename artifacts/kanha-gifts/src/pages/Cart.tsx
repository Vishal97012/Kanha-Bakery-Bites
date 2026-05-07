import { useState } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Trash2, Plus, Minus, Tag, Check, ShoppingBag, ChevronRight } from "lucide-react";
import { useCart } from "@/lib/cart";
import { WA_URL } from "@/lib/products";

const VALID_COUPONS: Record<string, number> = {
  FIRST10: 10,
};

export default function Cart() {
  const { items, removeFromCart, updateQty, clearCart, subtotal, itemCount } = useCart();
  const [coupon, setCoupon] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState<{ code: string; discount: number } | null>(null);
  const [couponError, setCouponError] = useState("");

  const applyCoupon = () => {
    const code = coupon.trim().toUpperCase();
    if (VALID_COUPONS[code]) {
      setAppliedCoupon({ code, discount: VALID_COUPONS[code] });
      setCouponError("");
    } else {
      setCouponError("Invalid coupon code. Try FIRST10 for 10% off.");
    }
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
    setCoupon("");
    setCouponError("");
  };

  const discountAmount = appliedCoupon ? Math.round((subtotal * appliedCoupon.discount) / 100) : 0;
  const total = subtotal - discountAmount;

  const buildWaMsg = () => {
    let msg = "Hi! I want to place an order from Kanha Gifts.\n\nOrder Details:\n";
    items.forEach((item) => {
      msg += `• ${item.name} x${item.qty} — ₹${(item.price * item.qty).toLocaleString()}\n`;
    });
    msg += `\nSubtotal: ₹${subtotal.toLocaleString()}`;
    if (appliedCoupon) {
      msg += `\nCoupon (${appliedCoupon.code}): -₹${discountAmount.toLocaleString()}`;
    }
    msg += `\nTotal: ₹${total.toLocaleString()}`;
    return msg;
  };

  if (items.length === 0) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-4">
        <div className="text-center">
          <div className="w-24 h-24 rounded-full bg-secondary flex items-center justify-center mx-auto mb-6">
            <ShoppingBag size={40} className="text-muted-foreground" />
          </div>
          <h2 className="font-serif text-3xl text-foreground mb-3">Your Cart is Empty</h2>
          <p className="text-muted-foreground mb-8">Discover beautiful gifts and add them to your cart.</p>
          <Link href="/products">
            <button
              data-testid="button-browse-gifts"
              className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-2xl hover:bg-primary/90 transition-colors text-sm"
            >
              Browse Gifts
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-10 px-4 max-w-5xl mx-auto">
      <div className="mb-8">
        <h1 className="font-serif text-4xl text-foreground mb-1">Your Cart</h1>
        <p className="text-muted-foreground text-sm">{itemCount} item{itemCount !== 1 ? "s" : ""} in your cart</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 items-start">
        {/* Items list */}
        <div className="md:col-span-2 space-y-4">
          <AnimatePresence>
            {items.map((item) => (
              <motion.div
                key={item.slug}
                data-testid={`cart-item-${item.slug}`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: -40, transition: { duration: 0.25 } }}
                className="bg-card border border-card-border rounded-2xl p-4 flex items-center gap-4"
              >
                {/* Icon */}
                <div className="w-16 h-16 rounded-xl bg-secondary flex items-center justify-center text-3xl flex-shrink-0">
                  {item.image}
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-serif font-semibold text-foreground text-sm leading-snug line-clamp-2">{item.name}</h3>
                  <p className="text-accent font-bold mt-0.5">₹{item.price.toLocaleString()}</p>
                </div>

                {/* Qty controls */}
                <div className="flex items-center gap-2 flex-shrink-0">
                  <button
                    data-testid={`button-decrease-qty-${item.slug}`}
                    onClick={() => item.qty === 1 ? removeFromCart(item.slug) : updateQty(item.slug, item.qty - 1)}
                    className="w-7 h-7 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary/10 transition-colors"
                  >
                    <Minus size={12} />
                  </button>
                  <span data-testid={`text-qty-${item.slug}`} className="w-6 text-center text-sm font-semibold text-foreground">{item.qty}</span>
                  <button
                    data-testid={`button-increase-qty-${item.slug}`}
                    onClick={() => updateQty(item.slug, item.qty + 1)}
                    className="w-7 h-7 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary/10 transition-colors"
                  >
                    <Plus size={12} />
                  </button>
                </div>

                {/* Subtotal */}
                <div className="text-right flex-shrink-0">
                  <p className="font-bold text-foreground text-sm">₹{(item.price * item.qty).toLocaleString()}</p>
                  <button
                    data-testid={`button-remove-${item.slug}`}
                    onClick={() => removeFromCart(item.slug)}
                    className="text-muted-foreground hover:text-destructive transition-colors mt-1"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          <button
            data-testid="button-clear-cart"
            onClick={clearCart}
            className="text-xs text-muted-foreground hover:text-destructive transition-colors flex items-center gap-1"
          >
            <Trash2 size={12} /> Clear cart
          </button>
        </div>

        {/* Summary */}
        <div className="bg-card border border-card-border rounded-2xl p-5 space-y-4 sticky top-20">
          <h2 className="font-serif font-semibold text-foreground text-lg">Order Summary</h2>

          {/* Coupon */}
          {!appliedCoupon ? (
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wide">Coupon Code</label>
              <div className="flex gap-2">
                <div className="flex-1 relative">
                  <Tag size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <input
                    data-testid="input-coupon"
                    type="text"
                    value={coupon}
                    onChange={(e) => { setCoupon(e.target.value.toUpperCase()); setCouponError(""); }}
                    placeholder="FIRST10"
                    className="w-full pl-8 pr-3 py-2.5 text-sm rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                  />
                </div>
                <button
                  data-testid="button-apply-coupon"
                  onClick={applyCoupon}
                  className="px-4 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors"
                >
                  Apply
                </button>
              </div>
              {couponError && <p data-testid="text-coupon-error" className="text-destructive text-xs mt-1.5">{couponError}</p>}
            </div>
          ) : (
            <div className="flex items-center justify-between bg-emerald-50 border border-emerald-200 rounded-xl px-4 py-3">
              <div className="flex items-center gap-2">
                <Check size={14} className="text-emerald-600" />
                <span data-testid="text-applied-coupon" className="text-sm font-semibold text-emerald-700">{appliedCoupon.code} applied!</span>
              </div>
              <button
                data-testid="button-remove-coupon"
                onClick={removeCoupon}
                className="text-xs text-muted-foreground hover:text-foreground"
              >
                Remove
              </button>
            </div>
          )}

          {/* Price breakdown */}
          <div className="space-y-2 pt-2 border-t border-border">
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Subtotal ({itemCount} items)</span>
              <span>₹{subtotal.toLocaleString()}</span>
            </div>
            {appliedCoupon && (
              <div className="flex justify-between text-sm text-emerald-600 font-medium">
                <span>Discount ({appliedCoupon.discount}% off)</span>
                <span>-₹{discountAmount.toLocaleString()}</span>
              </div>
            )}
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Delivery</span>
              <span className={subtotal >= 499 ? "text-emerald-600 font-medium" : ""}>
                {subtotal >= 499 ? "Free" : "₹49"}
              </span>
            </div>
            <div className="flex justify-between font-bold text-foreground text-base pt-2 border-t border-border">
              <span>Total</span>
              <span data-testid="text-total">₹{(total + (subtotal < 499 ? 49 : 0)).toLocaleString()}</span>
            </div>
          </div>

          {/* Order CTA */}
          <a
            href={`${WA_URL}?text=${encodeURIComponent(buildWaMsg())}`}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="button-order-whatsapp-cart"
            className="w-full py-4 bg-[#25D366] text-white font-semibold rounded-2xl text-sm flex items-center justify-center gap-2 hover:bg-[#20bc5a] transition-colors shadow-lg"
          >
            <span className="w-5 h-5">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            </span>
            Order on WhatsApp
            <ChevronRight size={16} />
          </a>

          {subtotal < 499 && (
            <p className="text-xs text-center text-muted-foreground">
              Add ₹{499 - subtotal} more for free delivery
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
