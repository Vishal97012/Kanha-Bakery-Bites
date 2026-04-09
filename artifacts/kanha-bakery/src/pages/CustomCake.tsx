import { useState } from "react";
import { addToCart, WHATSAPP_NUMBER } from "@/lib/cart";
import { FLAVORS } from "@/lib/data";
import { Link } from "wouter";

const WEIGHTS = ["500g", "1kg", "1.5kg", "2kg", "3kg"];
const TIMES = [
  "9:00 AM - 11:00 AM",
  "11:00 AM - 1:00 PM",
  "1:00 PM - 3:00 PM",
  "3:00 PM - 5:00 PM",
  "5:00 PM - 7:00 PM",
  "7:00 PM - 9:00 PM",
];

const PRICE_MAP: Record<string, number> = {
  "500g": 399,
  "1kg": 749,
  "1.5kg": 1099,
  "2kg": 1399,
  "3kg": 1999,
};

export default function CustomCake() {
  const [flavor, setFlavor] = useState("");
  const [weight, setWeight] = useState("1kg");
  const [nameOnCake, setNameOnCake] = useState("");
  const [message, setMessage] = useState("");
  const [deliveryDate, setDeliveryDate] = useState("");
  const [deliveryTime, setDeliveryTime] = useState("");
  const [instructions, setInstructions] = useState("");
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [addedToCart, setAddedToCart] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!flavor) e.flavor = "Please select a flavor";
    if (!deliveryDate) e.deliveryDate = "Please select a delivery date";
    if (!deliveryTime) e.deliveryTime = "Please select a delivery time";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleAddToCart = () => {
    if (!validate()) return;
    addToCart({
      name: "Custom Cake",
      price: PRICE_MAP[weight],
      weight,
      quantity: 1,
      imageEmoji: "🎂",
      isCustom: true,
      customDetails: {
        flavor,
        weight,
        nameOnCake,
        message,
        deliveryDate,
        deliveryTime,
        specialInstructions: instructions,
        photoName: photoFile?.name,
      },
    });
    window.dispatchEvent(new Event("cart-updated"));
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const handleWhatsApp = () => {
    if (!validate()) return;
    let msg = "Hello Kanha Home Bakery! I want to order a *Custom Cake*:\n\n";
    msg += `Flavor: ${flavor}\n`;
    msg += `Weight: ${weight}\n`;
    if (nameOnCake) msg += `Name on Cake: ${nameOnCake}\n`;
    if (message) msg += `Cake Message: ${message}\n`;
    msg += `Delivery Date: ${deliveryDate}\n`;
    msg += `Delivery Time: ${deliveryTime}\n`;
    if (instructions) msg += `Special Instructions: ${instructions}\n`;
    if (photoFile) msg += `Reference Photo: ${photoFile.name}\n`;
    msg += `\nEstimated Price: ₹${PRICE_MAP[weight]}\n\nPlease confirm my order. Thank you!`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="max-w-lg mx-auto px-4 pb-8">
      <div className="pt-6 pb-4">
        <h1 className="text-2xl font-bold text-foreground">Custom Cake</h1>
        <p className="text-muted-foreground text-sm mt-1">
          Design your dream cake — we'll bake it fresh!
        </p>
      </div>

      {/* Price info */}
      <div className="bg-primary/10 rounded-2xl p-4 mb-5 flex items-center gap-3">
        <span className="text-2xl">🎂</span>
        <div>
          <div className="font-bold text-primary text-sm">Custom Cake Starting at</div>
          <div className="text-2xl font-bold text-primary">₹399 <span className="text-sm font-normal text-muted-foreground">for 500g</span></div>
        </div>
      </div>

      <div className="flex flex-col gap-5">
        {/* Flavor */}
        <div>
          <label className="block font-semibold text-sm text-foreground mb-2">
            Cake Flavor <span className="text-primary">*</span>
          </label>
          <select
            value={flavor}
            onChange={(e) => setFlavor(e.target.value)}
            className={`w-full border-2 rounded-xl px-4 py-3 text-base bg-white appearance-none focus:outline-none focus:border-primary transition-colors ${
              errors.flavor ? "border-destructive" : "border-border"
            }`}
          >
            <option value="">Select a flavor...</option>
            {FLAVORS.map((f) => (
              <option key={f} value={f}>{f}</option>
            ))}
          </select>
          {errors.flavor && <p className="text-destructive text-xs mt-1">{errors.flavor}</p>}
        </div>

        {/* Weight */}
        <div>
          <label className="block font-semibold text-sm text-foreground mb-2">Cake Weight</label>
          <div className="grid grid-cols-5 gap-2">
            {WEIGHTS.map((w) => (
              <button
                key={w}
                onClick={() => setWeight(w)}
                className={`py-2.5 rounded-xl text-xs font-bold border-2 transition-colors ${
                  weight === w
                    ? "border-primary bg-primary text-white"
                    : "border-border text-muted-foreground bg-white"
                }`}
              >
                {w}
              </button>
            ))}
          </div>
          <div className="mt-2 text-center">
            <span className="text-primary font-bold text-lg">₹{PRICE_MAP[weight]}</span>
            <span className="text-muted-foreground text-sm"> for {weight}</span>
          </div>
        </div>

        {/* Name on cake */}
        <div>
          <label className="block font-semibold text-sm text-foreground mb-2">
            Name on Cake <span className="text-muted-foreground font-normal">(optional)</span>
          </label>
          <input
            type="text"
            value={nameOnCake}
            onChange={(e) => setNameOnCake(e.target.value)}
            placeholder="e.g. Happy Birthday Rahul!"
            className="w-full border-2 border-border rounded-xl px-4 py-3 text-base bg-white focus:outline-none focus:border-primary transition-colors"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block font-semibold text-sm text-foreground mb-2">
            Cake Message <span className="text-muted-foreground font-normal">(optional)</span>
          </label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="e.g. Wishing you all the happiness..."
            rows={3}
            className="w-full border-2 border-border rounded-xl px-4 py-3 text-base bg-white focus:outline-none focus:border-primary transition-colors resize-none"
          />
        </div>

        {/* Photo upload */}
        <div>
          <label className="block font-semibold text-sm text-foreground mb-2">
            Reference Photo <span className="text-muted-foreground font-normal">(optional)</span>
          </label>
          <label className="flex flex-col items-center justify-center border-2 border-dashed border-border rounded-2xl p-6 cursor-pointer bg-muted/30 hover:border-primary/50 transition-colors">
            <span className="text-3xl mb-2">{photoFile ? "📷" : "📤"}</span>
            <span className="text-sm font-medium text-foreground">
              {photoFile ? photoFile.name : "Tap to upload photo"}
            </span>
            <span className="text-xs text-muted-foreground mt-1">
              {photoFile ? "Tap to change" : "JPG, PNG up to 5MB"}
            </span>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setPhotoFile(e.target.files?.[0] || null)}
              className="hidden"
            />
          </label>
        </div>

        {/* Delivery Date */}
        <div>
          <label className="block font-semibold text-sm text-foreground mb-2">
            Delivery Date <span className="text-primary">*</span>
          </label>
          <input
            type="date"
            value={deliveryDate}
            onChange={(e) => setDeliveryDate(e.target.value)}
            min={today}
            className={`w-full border-2 rounded-xl px-4 py-3 text-base bg-white focus:outline-none focus:border-primary transition-colors ${
              errors.deliveryDate ? "border-destructive" : "border-border"
            }`}
          />
          {errors.deliveryDate && <p className="text-destructive text-xs mt-1">{errors.deliveryDate}</p>}
        </div>

        {/* Delivery Time */}
        <div>
          <label className="block font-semibold text-sm text-foreground mb-2">
            Delivery Time <span className="text-primary">*</span>
          </label>
          <select
            value={deliveryTime}
            onChange={(e) => setDeliveryTime(e.target.value)}
            className={`w-full border-2 rounded-xl px-4 py-3 text-base bg-white appearance-none focus:outline-none focus:border-primary transition-colors ${
              errors.deliveryTime ? "border-destructive" : "border-border"
            }`}
          >
            <option value="">Select time slot...</option>
            {TIMES.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
          {errors.deliveryTime && <p className="text-destructive text-xs mt-1">{errors.deliveryTime}</p>}
        </div>

        {/* Special Instructions */}
        <div>
          <label className="block font-semibold text-sm text-foreground mb-2">
            Special Instructions <span className="text-muted-foreground font-normal">(optional)</span>
          </label>
          <textarea
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            placeholder="e.g. Eggless cake, fondant design, no nuts, etc."
            rows={3}
            className="w-full border-2 border-border rounded-xl px-4 py-3 text-base bg-white focus:outline-none focus:border-primary transition-colors resize-none"
          />
        </div>

        {/* Action buttons */}
        <div className="flex flex-col gap-3 pt-2">
          <button
            onClick={handleWhatsApp}
            className="w-full bg-[#25D366] text-white py-4 rounded-2xl font-bold text-base flex items-center justify-center gap-2 shadow-md active:scale-95 transition-transform"
          >
            <span className="text-xl">💬</span> Order via WhatsApp
          </button>
          <button
            onClick={handleAddToCart}
            className="w-full border-2 border-primary text-primary py-4 rounded-2xl font-bold text-base active:scale-95 transition-transform"
          >
            {addedToCart ? "✓ Added to Cart!" : "Add to Cart"}
          </button>
          {addedToCart && (
            <Link href="/cart">
              <button className="w-full bg-primary text-white py-3 rounded-2xl font-bold text-base">
                View Cart
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
