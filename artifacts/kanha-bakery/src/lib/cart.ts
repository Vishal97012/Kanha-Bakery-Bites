export interface CartItem {
  id: string;
  name: string;
  price: number;
  weight: string;
  quantity: number;
  imageEmoji: string;
  isCustom?: boolean;
  customDetails?: {
    flavor: string;
    weight: string;
    nameOnCake: string;
    message: string;
    deliveryDate: string;
    deliveryTime: string;
    specialInstructions: string;
    photoName?: string;
  };
}

const CART_KEY = "kanha_bakery_cart";

export function getCart(): CartItem[] {
  try {
    const raw = localStorage.getItem(CART_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveCart(cart: CartItem[]): void {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

export function addToCart(item: Omit<CartItem, "id">): CartItem[] {
  const cart = getCart();
  const existing = cart.find(
    (c) => c.name === item.name && c.weight === item.weight && !c.isCustom
  );
  if (existing) {
    existing.quantity += item.quantity;
    saveCart(cart);
    return cart;
  }
  const newItem: CartItem = { ...item, id: Date.now().toString() };
  const updated = [...cart, newItem];
  saveCart(updated);
  return updated;
}

export function removeFromCart(id: string): CartItem[] {
  const cart = getCart().filter((c) => c.id !== id);
  saveCart(cart);
  return cart;
}

export function updateQuantity(id: string, quantity: number): CartItem[] {
  const cart = getCart();
  const item = cart.find((c) => c.id === id);
  if (item) {
    if (quantity <= 0) {
      return removeFromCart(id);
    }
    item.quantity = quantity;
    saveCart(cart);
  }
  return cart;
}

export function clearCart(): void {
  localStorage.removeItem(CART_KEY);
}

export function getCartTotal(cart: CartItem[]): number {
  return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

export function getCartCount(cart: CartItem[]): number {
  return cart.reduce((sum, item) => sum + item.quantity, 0);
}

export function generateWhatsAppMessage(cart: CartItem[]): string {
  if (cart.length === 0) return "";

  let msg = "Hello Kanha Home Bakery! I would like to place an order:\n\n";

  cart.forEach((item, i) => {
    if (item.isCustom && item.customDetails) {
      const d = item.customDetails;
      msg += `${i + 1}. *Custom Cake*\n`;
      msg += `   Flavor: ${d.flavor}\n`;
      msg += `   Weight: ${d.weight}\n`;
      if (d.nameOnCake) msg += `   Name on Cake: ${d.nameOnCake}\n`;
      if (d.message) msg += `   Message: ${d.message}\n`;
      if (d.deliveryDate) msg += `   Delivery Date: ${d.deliveryDate}\n`;
      if (d.deliveryTime) msg += `   Delivery Time: ${d.deliveryTime}\n`;
      if (d.specialInstructions) msg += `   Special Instructions: ${d.specialInstructions}\n`;
      if (d.photoName) msg += `   Reference Photo: ${d.photoName}\n`;
      msg += `   Price: ₹${item.price}\n\n`;
    } else {
      msg += `${i + 1}. *${item.name}* (${item.weight})\n`;
      msg += `   Qty: ${item.quantity} x ₹${item.price} = ₹${item.price * item.quantity}\n\n`;
    }
  });

  const total = getCartTotal(cart);
  msg += `*Total: ₹${total}*\n\n`;
  msg += "Please confirm my order. Thank you!";

  return encodeURIComponent(msg);
}

export const WHATSAPP_NUMBER = "917050256262";
