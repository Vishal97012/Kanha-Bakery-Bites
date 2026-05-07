import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { Filter } from "lucide-react";
import { PRODUCTS, CATEGORY_LABELS, OCCASION_LABELS, type Category, type Occasion } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

const CATEGORIES = ["all", "chocolate-bouquet", "photo-bouquet", "hamper", "couple", "combo"] as const;
const OCCASIONS = ["all", "Birthday", "Anniversary", "Any"] as const;

type CatFilter = typeof CATEGORIES[number];
type OccFilter = typeof OCCASIONS[number];

const stagger = { visible: { transition: { staggerChildren: 0.07 } } };
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function Products() {
  const [, params] = useLocation();
  const searchParams = new URLSearchParams(params);
  const initialCat = (searchParams.get("category") ?? "all") as CatFilter;

  const [cat, setCat] = useState<CatFilter>(initialCat);
  const [occ, setOcc] = useState<OccFilter>("all");

  useEffect(() => {
    setCat(initialCat);
  }, [initialCat]);

  const filtered = PRODUCTS.filter(
    (p) =>
      (cat === "all" || p.category === cat) &&
      (occ === "all" || p.occasion === occ || p.occasion === "Any")
  );

  return (
    <div className="min-h-screen py-10 px-4 max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-10">
        <p className="text-accent font-medium text-sm tracking-widest uppercase mb-2">Our Collection</p>
        <h1 className="font-serif text-4xl text-foreground mb-3">All Gifts</h1>
        <p className="text-muted-foreground max-w-lg">
          Browse our full collection of handcrafted gifts — from chocolate bouquets to luxury hampers.
        </p>
      </div>

      {/* Filters */}
      <div className="mb-8 space-y-4">
        {/* Category chips */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Filter size={14} className="text-muted-foreground" />
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Category</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                data-testid={`filter-category-${c}`}
                onClick={() => setCat(c)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all border ${
                  cat === c
                    ? "bg-primary text-primary-foreground border-primary shadow-sm"
                    : "bg-card border-border text-foreground/70 hover:border-primary/40 hover:text-foreground"
                }`}
              >
                {CATEGORY_LABELS[c as Category | "all"]}
              </button>
            ))}
          </div>
        </div>

        {/* Occasion chips */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Filter size={14} className="text-muted-foreground" />
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Occasion</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {OCCASIONS.map((o) => (
              <button
                key={o}
                data-testid={`filter-occasion-${o}`}
                onClick={() => setOcc(o)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all border ${
                  occ === o
                    ? "bg-accent text-white border-accent shadow-sm"
                    : "bg-card border-border text-foreground/70 hover:border-accent/40 hover:text-foreground"
                }`}
              >
                {OCCASION_LABELS[o as Occasion | "all"]}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results count */}
      <p className="text-muted-foreground text-sm mb-6">
        Showing <span className="text-foreground font-semibold">{filtered.length}</span> gifts
      </p>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-24 text-muted-foreground">
          <p className="text-4xl mb-4">🎁</p>
          <p className="font-serif text-xl text-foreground mb-2">No gifts found</p>
          <p className="text-sm">Try adjusting your filters.</p>
        </div>
      ) : (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          key={`${cat}-${occ}`}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
        >
          {filtered.map((product) => (
            <motion.div key={product.slug} variants={fadeUp}>
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
}
