export interface Cake {
  id: string;
  name: string;
  description: string;
  emoji: string;
  prices: { "500g": number; "1kg": number; "2kg": number };
  category: string;
  isBestSeller?: boolean;
  isNew?: boolean;
  rating: number;
  reviews: number;
}

export const CAKES: Cake[] = [
  {
    id: "choco",
    name: "Chocolate Cake",
    description: "Rich, moist chocolate cake with creamy ganache frosting. A timeless classic that melts in your mouth.",
    emoji: "🍫",
    prices: { "500g": 399, "1kg": 699, "2kg": 1299 },
    category: "classic",
    isBestSeller: true,
    rating: 4.9,
    reviews: 124,
  },
  {
    id: "black-forest",
    name: "Black Forest",
    description: "Layers of chocolate sponge, whipped cream, and cherries — the perfect celebration cake.",
    emoji: "🍒",
    prices: { "500g": 449, "1kg": 799, "2kg": 1499 },
    category: "classic",
    isBestSeller: true,
    rating: 4.8,
    reviews: 98,
  },
  {
    id: "butterscotch",
    name: "Butterscotch Cake",
    description: "Golden sponge with caramel butterscotch cream and crunchy toffee bits. Simply irresistible!",
    emoji: "🍮",
    prices: { "500g": 379, "1kg": 679, "2kg": 1249 },
    category: "classic",
    isBestSeller: true,
    rating: 4.7,
    reviews: 87,
  },
  {
    id: "pineapple",
    name: "Pineapple Cake",
    description: "Light, fluffy sponge with fresh pineapple cream and tropical flavors. A refreshing delight.",
    emoji: "🍍",
    prices: { "500g": 349, "1kg": 629, "2kg": 1149 },
    category: "fruit",
    rating: 4.6,
    reviews: 65,
  },
  {
    id: "red-velvet",
    name: "Red Velvet Cake",
    description: "Velvety red sponge with tangy cream cheese frosting. Elegant and decadent.",
    emoji: "❤️",
    prices: { "500g": 499, "1kg": 899, "2kg": 1699 },
    category: "special",
    isNew: true,
    rating: 4.9,
    reviews: 43,
  },
  {
    id: "vanilla",
    name: "Vanilla Cream Cake",
    description: "Classic soft vanilla sponge layered with light whipped cream. Perfect for all occasions.",
    emoji: "🎂",
    prices: { "500g": 299, "1kg": 549, "2kg": 1049 },
    category: "classic",
    rating: 4.5,
    reviews: 112,
  },
  {
    id: "strawberry",
    name: "Strawberry Cake",
    description: "Fresh strawberry sponge with strawberry cream and real fruit pieces. Bursting with freshness!",
    emoji: "🍓",
    prices: { "500g": 419, "1kg": 749, "2kg": 1399 },
    category: "fruit",
    rating: 4.7,
    reviews: 56,
  },
  {
    id: "truffle",
    name: "Chocolate Truffle",
    description: "Intense dark chocolate layers with silky truffle ganache. For the serious chocolate lover.",
    emoji: "🍰",
    prices: { "500g": 549, "1kg": 999, "2kg": 1899 },
    category: "special",
    rating: 4.9,
    reviews: 72,
  },
];

export const FLAVORS = [
  "Chocolate",
  "Vanilla",
  "Butterscotch",
  "Black Forest",
  "Pineapple",
  "Strawberry",
  "Red Velvet",
  "Mango",
  "Blueberry",
  "Lemon",
  "Coffee",
  "Caramel",
];

export const REVIEWS = [
  {
    name: "Priya Sharma",
    rating: 5,
    text: "Ordered a custom birthday cake and it was absolutely beautiful! The taste was amazing and delivery was on time. Will definitely order again!",
    date: "March 2024",
    emoji: "😍",
  },
  {
    name: "Rahul Kumar",
    rating: 5,
    text: "Best home bakery in the area! The chocolate cake was super moist and the price is very reasonable. Highly recommended!",
    date: "February 2024",
    emoji: "🎉",
  },
  {
    name: "Anita Verma",
    rating: 5,
    text: "Ordered the Black Forest for our anniversary. It was fresh, delicious and the presentation was gorgeous. Kanha ji makes the best cakes!",
    date: "January 2024",
    emoji: "❤️",
  },
  {
    name: "Sanjay Gupta",
    rating: 4,
    text: "Very tasty butterscotch cake, fresh and home-made feel. The WhatsApp ordering makes it super easy. Great service!",
    date: "March 2024",
    emoji: "👍",
  },
];

export const DELIVERY_AREAS = [
  "Sector 1 - 5",
  "Sector 6 - 10",
  "Sector 11 - 15",
  "Sector 16 - 20",
  "Civil Lines",
  "Lucknow Road",
  "Gandhi Nagar",
  "Shivaji Nagar",
];
