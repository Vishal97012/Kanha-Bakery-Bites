import { useState, useEffect } from "react";
import { Trash2, Plus, Minus, ShoppingBag } from "lucide-react";
import { Link } from "wouter";
import {
  CartItem,
  getCart,
  removeFromCart,
  updateQuantity,
  getCartTotal,
  generateWhatsAppMessage,
  WHATSAPP_NUMBER,
  clearCart,
} from "@/lib/cart";

export default function Cart() {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    setCart(getCart());
  }, []);

  const refresh = (newCart: CartItem[]) => {
    setCart(newCart);
    window.dispatchEvent(new Event("cart-updated"));
  };

  const handleRemove = (id: string) => {
    refresh(removeFromCart(id));
  };

  const handleQty = (id: string, qty: number) => {
    refresh(updateQuantity(id, qty));
  };

  const handleWhatsApp = () => {
    const msg = generateWhatsAppMessage(cart);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
  };

  const handleClear = () => {
    if (window.confirm("Clear all items from cart?")) {
      clearCart();
      refresh([]);
    }
  };

  const total = getCartTotal(cart);

  if (cart.length === 0) {
    return (
      <div className="max-w-lg mx-auto px-4 pt-16 text-center pb-8">
        <div className="text-6xl mb-4">🛒</div>
        <h2 className="text-xl font-bold text-foreground mb-2">Your cart is empty</h2>
        <p className="text-muted-foreground mb-6">Add some delicious cakes to get started!</p>
        <Link href="/menu">
          <button className="bg-primary text-white px-8 py-3.5 rounded-2xl font-bold text-base shadow-md">
            Browse Menu
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-lg mx-auto px-4 pb-8">
      <div className="pt-6 pb-4 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Your Cart</h1>
          <p className="text-muted-foreground text-sm mt-0.5">{cart.length} item{cart.length !== 1 ? "s" : ""}</p>
        </div>
        <button
          onClick={handleClear}
          className="text-sm text-destructive font-medium border border-destructive/30 rounded-xl px-3 py-1.5"
        >
          Clear All
        </button>
      </div>

      {/* Cart items */}
      <div className="flex flex-col gap-3 mb-5">
        {cart.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl border border-border shadow-sm p-4"
          >
            <div className="flex items-start gap-3">
              <div className="w-14 h-14 rounded-xl bg-pink-50 flex items-center justify-center text-3xl flex-shrink-0">
                {item.imageEmoji}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <div className="font-bold text-base text-foreground line-clamp-1">{item.name}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{item.weight}</div>
                    {item.isCustom && item.customDetails && (
                      <div className="text-xs text-primary mt-1 bg-primary/10 px-2 py-0.5 rounded-full inline-block">
                        {item.customDetails.flavor} · {item.customDetails.deliveryDate}
                      </div>
                    )}
                  </div>
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="text-muted-foreground hover:text-destructive transition-colors p-1 flex-shrink-0"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>

                <div className="flex items-center justify-between mt-3">
                  <div className="text-primary font-bold text-base">
                    ₹{item.price * item.quantity}
                  </div>
                  {!item.isCustom && (
                    <div className="flex items-center gap-3 bg-muted rounded-xl px-2 py-1">
                      <button
                        onClick={() => handleQty(item.id, item.quantity - 1)}
                        className="text-foreground w-7 h-7 flex items-center justify-center rounded-lg bg-white shadow-sm"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="font-bold text-sm text-foreground w-4 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => handleQty(item.id, item.quantity + 1)}
                        className="text-foreground w-7 h-7 flex items-center justify-center rounded-lg bg-white shadow-sm"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Order summary */}
      <div className="bg-white rounded-2xl border border-border shadow-sm p-4 mb-5">
        <h3 className="font-bold text-base text-foreground mb-3">Order Summary</h3>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Subtotal</span>
            <span className="font-medium text-foreground">₹{total}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Delivery</span>
            <span className="font-medium text-green-600">
              {total >= 799 ? "FREE" : "₹50"}
            </span>
          </div>
          {total < 799 && (
            <div className="text-xs text-primary bg-primary/10 rounded-xl px-3 py-2 mt-1">
              Add ₹{799 - total} more for free delivery!
            </div>
          )}
          <div className="border-t border-border pt-2 mt-1 flex justify-between">
            <span className="font-bold text-foreground">Total</span>
            <span className="font-bold text-primary text-lg">
              ₹{total >= 799 ? total : total + 50}
            </span>
          </div>
        </div>
      </div>

      {/* WhatsApp Order button */}
      <button
        onClick={handleWhatsApp}
        className="w-full bg-[#25D366] text-white py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 shadow-md active:scale-95 transition-transform"
      >
        <span className="text-xl">💬</span>
        Order via WhatsApp
      </button>
      <p className="text-center text-xs text-muted-foreground mt-2">
        Your order details will be sent to us on WhatsApp
      </p>

      {/* Continue shopping */}
      <Link href="/menu">
        <button className="w-full border-2 border-border text-foreground py-3.5 rounded-2xl font-semibold text-base mt-3 flex items-center justify-center gap-2">
          <ShoppingBag size={18} /> Continue Shopping
        </button>
      </Link>
    </div>
  );
}
