import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod/v4";
import { Check, Upload, X } from "lucide-react";
import { WA_URL } from "@/lib/products";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const CHOCOLATE_OPTIONS = [
  "Dairy Milk Silk", "Ferrero Rocher", "Kitkat", "5 Star", "Munch", "Bounty",
  "Toblerone", "Milkybar", "Oreo", "Snickers",
];

const OCCASION_OPTIONS = [
  "Birthday", "Anniversary", "Valentine's Day", "Friendship Day", "Mother's Day",
  "Father's Day", "Graduation", "Wedding", "Baby Shower", "Just Because",
];

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  phone: z.string().regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit mobile number"),
  occasion: z.string().min(1, "Please select an occasion"),
  message: z.string().optional(),
  deliveryDate: z.string().min(1, "Please select a delivery date"),
  address: z.string().min(10, "Please enter your full delivery address"),
});

type FormValues = z.infer<typeof schema>;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.07, duration: 0.45, ease: "easeOut" } }),
};

export default function CustomGift() {
  const [selectedChocolates, setSelectedChocolates] = useState<string[]>([]);
  const [photoFiles, setPhotoFiles] = useState<File[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", phone: "", occasion: "", message: "", deliveryDate: "", address: "" },
  });

  const toggleChocolate = (c: string) => {
    setSelectedChocolates((prev) =>
      prev.includes(c) ? prev.filter((x) => x !== c) : [...prev, c]
    );
  };

  const onSubmit = (values: FormValues) => {
    let msg = `Hi! I want to create a Custom Gift.\n\n`;
    msg += `Name: ${values.name}\nPhone: ${values.phone}\n`;
    msg += `Occasion: ${values.occasion}\n`;
    if (selectedChocolates.length > 0) msg += `Chocolates/Items: ${selectedChocolates.join(", ")}\n`;
    if (values.message) msg += `Message on card: ${values.message}\n`;
    msg += `Delivery Date: ${values.deliveryDate}\n`;
    msg += `Delivery Address: ${values.address}\n`;
    if (photoFiles.length > 0) msg += `Photos: I will send ${photoFiles.length} photo(s) separately.`;

    window.open(`${WA_URL}?text=${encodeURIComponent(msg)}`, "_blank");
    setSubmitted(true);
  };

  const today = new Date().toISOString().split("T")[0];

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-sm"
        >
          <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-6">
            <Check size={36} className="text-emerald-600" />
          </div>
          <h2 className="font-serif text-3xl text-foreground mb-3">Request Sent!</h2>
          <p className="text-muted-foreground mb-6">
            Your custom gift request has been forwarded to WhatsApp. We'll get back to you shortly to confirm the details.
          </p>
          <button
            data-testid="button-order-again"
            onClick={() => setSubmitted(false)}
            className="px-6 py-3 bg-primary text-primary-foreground rounded-xl text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            Create Another Gift
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-10 px-4 max-w-2xl mx-auto">
      <motion.div initial="hidden" animate="visible">
        <motion.p custom={0} variants={fadeUp} className="text-accent font-medium text-sm tracking-widest uppercase mb-3">Fully Personalised</motion.p>
        <motion.h1 custom={1} variants={fadeUp} className="font-serif text-4xl text-foreground mb-3">Build Your Custom Gift</motion.h1>
        <motion.p custom={2} variants={fadeUp} className="text-muted-foreground mb-10 leading-relaxed">
          Tell us what you have in mind and we'll craft something truly special — just for your occasion.
        </motion.p>
      </motion.div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Name + Phone */}
          <div className="grid sm:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Name</FormLabel>
                  <FormControl>
                    <Input data-testid="input-name" placeholder="e.g. Priya Sharma" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mobile Number</FormLabel>
                  <FormControl>
                    <Input data-testid="input-phone" placeholder="10-digit mobile number" type="tel" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Occasion */}
          <FormField
            control={form.control}
            name="occasion"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Occasion</FormLabel>
                <FormControl>
                  <select
                    data-testid="input-occasion"
                    {...field}
                    className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                  >
                    <option value="">Select occasion</option>
                    {OCCASION_OPTIONS.map((o) => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Photo Upload */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Upload Photos (optional)
            </label>
            <div className="border-2 border-dashed border-border rounded-2xl p-6 text-center hover:border-primary/40 transition-colors">
              <input
                data-testid="input-photos"
                type="file"
                accept="image/*"
                multiple
                onChange={(e) => setPhotoFiles(Array.from(e.target.files ?? []))}
                className="hidden"
                id="photo-upload"
              />
              <label htmlFor="photo-upload" className="cursor-pointer">
                <Upload size={24} className="mx-auto text-muted-foreground mb-2" />
                <p className="text-sm text-muted-foreground">
                  {photoFiles.length > 0 ? `${photoFiles.length} photo(s) selected` : "Click to upload photos"}
                </p>
              </label>
              {photoFiles.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-3 justify-center">
                  {photoFiles.map((f, i) => (
                    <span key={i} className="inline-flex items-center gap-1 bg-secondary rounded-full px-3 py-1 text-xs text-foreground">
                      {f.name.slice(0, 20)}{f.name.length > 20 ? "..." : ""}
                      <button
                        type="button"
                        onClick={() => setPhotoFiles((prev) => prev.filter((_, j) => j !== i))}
                        className="text-muted-foreground hover:text-foreground"
                      >
                        <X size={12} />
                      </button>
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Chocolates */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-3">
              Select Chocolates / Items (optional)
            </label>
            <div className="flex flex-wrap gap-2">
              {CHOCOLATE_OPTIONS.map((c) => (
                <button
                  key={c}
                  type="button"
                  data-testid={`toggle-chocolate-${c.replace(/\s+/g, "-").toLowerCase()}`}
                  onClick={() => toggleChocolate(c)}
                  className={`px-4 py-2 rounded-full text-sm border font-medium transition-all ${
                    selectedChocolates.includes(c)
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-card border-border text-foreground/70 hover:border-primary/40"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* Card message */}
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message on Card (optional)</FormLabel>
                <FormControl>
                  <textarea
                    data-testid="input-message"
                    placeholder="Write a heartfelt message for the card..."
                    rows={3}
                    {...field}
                    className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground resize-none focus:outline-none focus:ring-2 focus:ring-primary/30"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Delivery date */}
          <FormField
            control={form.control}
            name="deliveryDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Preferred Delivery Date</FormLabel>
                <FormControl>
                  <Input data-testid="input-delivery-date" type="date" min={today} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Address */}
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Delivery Address</FormLabel>
                <FormControl>
                  <textarea
                    data-testid="input-address"
                    placeholder="Full delivery address with landmark..."
                    rows={3}
                    {...field}
                    className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground resize-none focus:outline-none focus:ring-2 focus:ring-primary/30"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <button
            type="submit"
            data-testid="button-submit-custom-gift"
            className="w-full py-4 bg-primary text-primary-foreground font-semibold rounded-2xl hover:bg-primary/90 transition-colors shadow-lg text-sm flex items-center justify-center gap-2"
          >
            <span className="w-5 h-5">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            </span>
            Send Order Request via WhatsApp
          </button>
        </form>
      </Form>
    </div>
  );
}
