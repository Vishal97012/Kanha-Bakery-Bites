export type Category = "chocolate-bouquet" | "photo-bouquet" | "hamper" | "couple" | "combo";
export type Occasion = "Birthday" | "Anniversary" | "Any";

export interface Product {
  slug: string;
  name: string;
  category: Category;
  occasion: Occasion;
  price: number;
  badge: string;
  desc: string;
  gradient: string;
  icon: string;
}

export const PRODUCTS: Product[] = [
  {
    slug: "chocolate-bouquet-red",
    name: "Red Rose Chocolate Bouquet",
    category: "chocolate-bouquet",
    occasion: "Birthday",
    price: 799,
    badge: "Best Seller",
    desc: "12 premium chocolates wrapped in red roses and satin ribbon. A stunning arrangement that combines the finest chocolates with fresh red roses, beautifully presented in a bouquet that impresses at first glance.",
    gradient: "from-rose-900 via-rose-700 to-pink-600",
    icon: "🌹",
  },
  {
    slug: "chocolate-bouquet-pink",
    name: "Pink Love Chocolate Bouquet",
    category: "chocolate-bouquet",
    occasion: "Anniversary",
    price: 699,
    badge: "Trending",
    desc: "Soft pink theme with Dairy Milk and Ferrero chocolates. Gentle pinks and warm gold tones make this bouquet a romantic favourite for anniversaries and special days.",
    gradient: "from-pink-800 via-rose-600 to-pink-400",
    icon: "🌸",
  },
  {
    slug: "photo-bouquet-heart",
    name: "Heart Shape Photo Bouquet",
    category: "photo-bouquet",
    occasion: "Anniversary",
    price: 999,
    badge: "Customizable",
    desc: "Upload your favourite photo — printed and set in a heart-shaped bouquet. A one-of-a-kind personalised gift that transforms your cherished memory into a beautiful keepsake arrangement.",
    gradient: "from-red-900 via-rose-700 to-red-400",
    icon: "❤️",
  },
  {
    slug: "photo-bouquet-rose",
    name: "Rose Frame Photo Bouquet",
    category: "photo-bouquet",
    occasion: "Birthday",
    price: 1199,
    badge: "Trending",
    desc: "Beautiful rose-framed photo bouquet, perfect for gifting. Your favourite photograph elegantly framed and surrounded by premium silk roses in a premium gift presentation.",
    gradient: "from-amber-900 via-rose-700 to-amber-500",
    icon: "📸",
  },
  {
    slug: "premium-hamper-luxury",
    name: "Luxury Gift Hamper",
    category: "hamper",
    occasion: "Any",
    price: 1999,
    badge: "Premium",
    desc: "Chocolates, dry fruits, scented candle, and a handwritten card in a premium gift box. Each item is carefully curated and arranged in a luxurious presentation box, making it a statement gift for any occasion.",
    gradient: "from-amber-900 via-yellow-700 to-amber-500",
    icon: "🎁",
  },
  {
    slug: "premium-hamper-birthday",
    name: "Birthday Surprise Hamper",
    category: "hamper",
    occasion: "Birthday",
    price: 1499,
    badge: "Best Seller",
    desc: "Personalized birthday hamper with 15 items including snacks, chocolates, and a card. A curated collection of birthday favourites packed in a festive box that makes the birthday person feel truly celebrated.",
    gradient: "from-violet-900 via-purple-700 to-pink-500",
    icon: "🎂",
  },
  {
    slug: "couple-gift-set",
    name: "Couple Gift Set",
    category: "couple",
    occasion: "Anniversary",
    price: 1299,
    badge: "Same Day Delivery",
    desc: "Matching keepsake frames, chocolates, and a red rose bouquet for couples. A thoughtfully designed set that celebrates love and togetherness with coordinated keepsakes they will treasure forever.",
    gradient: "from-red-900 via-rose-600 to-pink-400",
    icon: "💑",
  },
  {
    slug: "couple-surprise-box",
    name: "Couple Surprise Box",
    category: "couple",
    occasion: "Anniversary",
    price: 1599,
    badge: "Trending",
    desc: "A luxury box with personalized letters, chocolates, and couple accessories. Thoughtfully assembled to surprise and delight, this box celebrates the unique bond between two people with personalised keepsakes.",
    gradient: "from-rose-900 via-pink-700 to-red-400",
    icon: "💝",
  },
  {
    slug: "cake-gift-combo-basic",
    name: "Cake + Bouquet Combo",
    category: "combo",
    occasion: "Birthday",
    price: 1299,
    badge: "Combo Offer",
    desc: "1 kg custom cake + chocolate bouquet. Order together and save more. The perfect pairing for a birthday celebration — a beautifully decorated cake alongside a stunning chocolate bouquet.",
    gradient: "from-orange-900 via-amber-700 to-yellow-500",
    icon: "🎂",
  },
  {
    slug: "cake-gift-combo-premium",
    name: "Premium Cake + Hamper Combo",
    category: "combo",
    occasion: "Any",
    price: 2499,
    badge: "Best Value",
    desc: "Premium 2 kg designer cake + luxury hamper. Perfect for grand celebrations. An extraordinary combination for milestone moments — a stunning designer cake paired with an indulgent luxury gift hamper.",
    gradient: "from-yellow-900 via-amber-600 to-orange-400",
    icon: "👑",
  },
];

export const CATEGORY_LABELS: Record<Category | "all", string> = {
  all: "All Gifts",
  "chocolate-bouquet": "Chocolate Bouquets",
  "photo-bouquet": "Photo Bouquets",
  hamper: "Premium Hampers",
  couple: "Couple Gifts",
  combo: "Combo Offers",
};

export const OCCASION_LABELS: Record<Occasion | "all", string> = {
  all: "All Occasions",
  Birthday: "Birthday",
  Anniversary: "Anniversary",
  Any: "Any Occasion",
};

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getRelatedProducts(product: Product, count = 4): Product[] {
  return PRODUCTS.filter(
    (p) => p.slug !== product.slug && (p.category === product.category || p.occasion === product.occasion)
  ).slice(0, count);
}

export const WA_NUMBER = "917050256262";
export const WA_URL = `https://wa.me/${WA_NUMBER}`;
