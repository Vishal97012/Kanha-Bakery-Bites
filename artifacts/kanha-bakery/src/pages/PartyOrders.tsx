import { useState } from "react";
import { MapPin, Users, Star, CheckCircle, PartyPopper } from "lucide-react";

const WHATSAPP = "917050256262";

const PACKAGES = [
  {
    id: "basic",
    name: "Basic Package",
    price: 199,
    popular: false,
    emoji: "🌿",
    color: "border-[#e8dccc]",
    badge: "",
    items: [
      "Veg Pulao",
      "Paneer Sabzi",
      "Roti (4 per person)",
      "Salad",
    ],
  },
  {
    id: "standard",
    name: "Standard Package",
    price: 299,
    popular: true,
    emoji: "⭐",
    color: "border-[#5a2e1f]",
    badge: "Most Popular",
    items: [
      "Veg Pulao",
      "Paneer Butter Masala",
      "Mix Veg",
      "Roti (5 per person)",
      "Gulab Jamun (1 pc)",
    ],
  },
  {
    id: "premium",
    name: "Premium Package",
    price: 399,
    popular: false,
    emoji: "👑",
    color: "border-[#b8893a]",
    badge: "Premium",
    items: [
      "Jeera Rice",
      "Shahi Paneer",
      "Dal Makhani",
      "Roti (6 per person)",
      "Sweet (2 pcs)",
      "Salad + Raita",
    ],
  },
];

const EVENT_TYPES = ["Birthday", "Anniversary", "Party", "Other"];

export default function PartyOrders() {
  const [selected, setSelected] = useState("standard");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    event: "Birthday",
    people: "25",
    date: "",
    address: "",
    instructions: "",
  });

  const pkg = PACKAGES.find((p) => p.id === selected)!;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hi, I want to book catering for Kanha Home Bakery.

👤 Name: ${form.name}
📞 Phone: ${form.phone}
🎉 Event: ${form.event}
👥 People: ${form.people}
📦 Package: ${pkg.name} (₹${pkg.price}/person)
💰 Total (approx): ₹${Number(form.people) * pkg.price}
📅 Date: ${form.date}
📍 Address: ${form.address}${form.instructions ? `\n📝 Instructions: ${form.instructions}` : ""}`;
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <div className="max-w-lg mx-auto pb-28 bg-[#fdf8f3] min-h-screen">
      {/* Hero Banner */}
      <div className="bg-[#5a2e1f] text-white px-5 py-8 text-center">
        <div className="text-4xl mb-2">🍽️</div>
        <h1 className="text-2xl font-extrabold tracking-tight">Party Catering</h1>
        <p className="text-white/80 text-sm mt-1.5">Bulk orders for weddings, birthdays & events</p>
        <div className="flex items-center justify-center gap-2 mt-3 text-white/70 text-xs">
          <Users size={14} />
          <span>Minimum 20 people · Arrah & nearby areas</span>
        </div>
      </div>

      {/* Coming Soon Notice */}
      <div className="mx-4 mt-4 bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 flex items-center gap-3">
        <span className="text-2xl">🚧</span>
        <div>
          <div className="font-bold text-amber-800 text-sm">Coming Soon</div>
          <div className="text-amber-700 text-xs mt-0.5">Online booking aa raha hai — abhi WhatsApp pe book karein!</div>
        </div>
      </div>

      {/* Section Title */}
      <div className="px-4 pt-8 pb-4 text-center">
        <h2 className="text-lg font-extrabold text-[#5a2e1f]">Choose Your Package</h2>
        <div className="w-10 h-0.5 bg-[#b8893a] mx-auto mt-2" />
        <p className="text-xs text-[#5a2e1f]/60 mt-2">Price per person · Minimum 20 people</p>
      </div>

      {/* Package Cards */}
      <div className="px-4 flex flex-col gap-4">
        {PACKAGES.map((pkg) => (
          <button
            key={pkg.id}
            onClick={() => setSelected(pkg.id)}
            className={`w-full text-left rounded-2xl border-2 p-4 transition-all shadow-sm ${pkg.color} ${
              selected === pkg.id ? "bg-[#5a2e1f]/5 shadow-md scale-[1.01]" : "bg-white"
            }`}
          >
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="text-2xl">{pkg.emoji}</span>
                <div>
                  <div className="font-extrabold text-[#5a2e1f] text-base leading-tight">{pkg.name}</div>
                  <div className="text-[#b8893a] font-bold text-lg mt-0.5">₹{pkg.price} <span className="text-xs font-normal text-[#5a2e1f]/60">per person</span></div>
                </div>
              </div>
              <div className="flex flex-col items-end gap-1.5 flex-shrink-0">
                {pkg.popular && (
                  <span className="bg-[#5a2e1f] text-white text-[9px] font-bold px-2 py-0.5 rounded-full flex items-center gap-0.5">
                    <Star size={8} fill="white" /> Most Popular
                  </span>
                )}
                {pkg.badge && !pkg.popular && (
                  <span className="bg-[#b8893a] text-white text-[9px] font-bold px-2 py-0.5 rounded-full">
                    {pkg.badge}
                  </span>
                )}
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${selected === pkg.id ? "border-[#5a2e1f] bg-[#5a2e1f]" : "border-[#ccc]"}`}>
                  {selected === pkg.id && <CheckCircle size={12} className="text-white" fill="white" />}
                </div>
              </div>
            </div>
            <div className="mt-3 space-y-1.5">
              {pkg.items.map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-[#4a3a2d]">
                  <span className="text-green-500 text-base leading-none">✓</span>
                  {item}
                </div>
              ))}
            </div>
          </button>
        ))}
      </div>

      {/* Order Form */}
      <div className="px-4 pt-8">
        <div className="text-center mb-5">
          <h2 className="text-lg font-extrabold text-[#5a2e1f]">Book Your Event</h2>
          <div className="w-10 h-0.5 bg-[#b8893a] mx-auto mt-2" />
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-[#e8dccc] shadow-sm p-5 space-y-4">
          {/* Name */}
          <div>
            <label className="block text-xs font-bold text-[#5a2e1f] mb-1.5">Your Name *</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Aapka naam"
              className="w-full border border-[#e8dccc] rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#5a2e1f]/30 bg-[#fdf8f3]"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-xs font-bold text-[#5a2e1f] mb-1.5">Phone Number *</label>
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              type="tel"
              placeholder="10-digit mobile number"
              className="w-full border border-[#e8dccc] rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#5a2e1f]/30 bg-[#fdf8f3]"
            />
          </div>

          {/* Event Type */}
          <div>
            <label className="block text-xs font-bold text-[#5a2e1f] mb-1.5">Event Type *</label>
            <select
              name="event"
              value={form.event}
              onChange={handleChange}
              className="w-full border border-[#e8dccc] rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#5a2e1f]/30 bg-[#fdf8f3]"
            >
              {EVENT_TYPES.map((t) => <option key={t}>{t}</option>)}
            </select>
          </div>

          {/* People & Package */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-[#5a2e1f] mb-1.5">No. of People *</label>
              <input
                name="people"
                value={form.people}
                onChange={handleChange}
                required
                type="number"
                min="20"
                max="500"
                placeholder="e.g. 50"
                className="w-full border border-[#e8dccc] rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#5a2e1f]/30 bg-[#fdf8f3]"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-[#5a2e1f] mb-1.5">Package *</label>
              <select
                name="package"
                value={selected}
                onChange={(e) => setSelected(e.target.value)}
                className="w-full border border-[#e8dccc] rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#5a2e1f]/30 bg-[#fdf8f3]"
              >
                {PACKAGES.map((p) => (
                  <option key={p.id} value={p.id}>{p.name} ₹{p.price}/pp</option>
                ))}
              </select>
            </div>
          </div>

          {/* Estimated Total */}
          {form.people && (
            <div className="bg-[#5a2e1f]/5 rounded-xl px-4 py-3 flex items-center justify-between">
              <span className="text-xs text-[#5a2e1f]/70 font-medium">Estimated Total</span>
              <span className="text-[#5a2e1f] font-extrabold text-base">
                ₹{(Number(form.people) * pkg.price).toLocaleString()}
              </span>
            </div>
          )}

          {/* Event Date */}
          <div>
            <label className="block text-xs font-bold text-[#5a2e1f] mb-1.5">Event Date *</label>
            <input
              name="date"
              value={form.date}
              onChange={handleChange}
              required
              type="date"
              className="w-full border border-[#e8dccc] rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#5a2e1f]/30 bg-[#fdf8f3]"
            />
          </div>

          {/* Address */}
          <div>
            <label className="block text-xs font-bold text-[#5a2e1f] mb-1.5">Event Address *</label>
            <textarea
              name="address"
              value={form.address}
              onChange={handleChange}
              required
              rows={2}
              placeholder="Ghar ka address ya venue"
              className="w-full border border-[#e8dccc] rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#5a2e1f]/30 bg-[#fdf8f3] resize-none"
            />
          </div>

          {/* Special Instructions */}
          <div>
            <label className="block text-xs font-bold text-[#5a2e1f] mb-1.5">Special Instructions <span className="font-normal text-[#5a2e1f]/50">(optional)</span></label>
            <textarea
              name="instructions"
              value={form.instructions}
              onChange={handleChange}
              rows={2}
              placeholder="Koi special request ho toh yahan likhein"
              className="w-full border border-[#e8dccc] rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#5a2e1f]/30 bg-[#fdf8f3] resize-none"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-[#25D366] text-white font-extrabold text-base py-4 rounded-xl shadow-lg active:scale-[0.98] transition-transform flex items-center justify-center gap-2 mt-2"
          >
            <span className="text-xl">💬</span>
            Book on WhatsApp
          </button>
          <p className="text-center text-xs text-[#5a2e1f]/50 -mt-1">WhatsApp pe direct message jayega</p>
        </form>
      </div>

      {/* Info Note */}
      <div className="mx-4 mt-6 bg-[#f5ece0] rounded-2xl p-4 flex gap-3 items-start">
        <MapPin size={20} className="text-[#5a2e1f] flex-shrink-0 mt-0.5" />
        <div>
          <div className="font-bold text-sm text-[#5a2e1f]">Delivery Area</div>
          <div className="text-xs text-[#5a2e1f]/70 mt-1 leading-relaxed">
            Arrah aur 20 km radius mein catering service available hai. Minimum order 20 log. Advance booking zaroori hai.
          </div>
        </div>
      </div>

      {/* WhatsApp floating */}
      <a
        href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Hi, I want to enquire about party catering 🍽️")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white shadow-2xl flex items-center justify-center text-2xl active:scale-95 transition-transform hover:scale-105"
        style={{ boxShadow: "0 8px 24px rgba(37, 211, 102, 0.5)" }}
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
        <span className="relative">💬</span>
      </a>
    </div>
  );
}
