import cakeChocolateTruffle from "@assets/IMG-20260326-WA0090_1775751113041.jpg";
import cakeBlackForest from "@assets/IMG-20260326-WA0078_1775751112788.jpg";
import cakeButterscotch from "@assets/IMG-20260401-WA0006_1775751112757.jpg";
import cakeRedVelvet from "@assets/IMG-20260326-WA0086_1775751113012.jpg";
import cakePineapple from "@assets/IMG-20260401-WA0005_1775751112723.jpg";
import cakeStrawberry from "@assets/IMG-20260326-WA0077(1)_1775751112809.jpg";
import cakeBlueberry from "@assets/IMG-20260326-WA0085_1775751112935.jpg";
import cakeVanilla from "@assets/IMG-20260326-WA0087_1775751112958.jpg";
import cakeOreo from "@assets/IMG-20260326-WA0081_1775751112893.jpg";
import cakeKitKat from "@assets/IMG-20260331-WA0001_1775751113122.jpg";
import cakeMango from "@assets/IMG-20260326-WA0079(1)_1775751112826.jpg";
import cakeCoffee from "@assets/IMG-20260326-WA0080(1)_1775751112856.jpg";
import cakeRose from "@assets/IMG-20260326-WA0083(1)_1775751112914.jpg";
import cakeWhiteForest from "@assets/IMG-20260326-WA0088(1)_1775751112981.jpg";
import cakePrincess from "@assets/IMG-20260331-WA0000_1775751113066.jpg";
import cakeMickey from "@assets/IMG-20260331-WA0003_1775751113096.jpg";
import cakePinkLove from "@assets/IMG-20260406-WA0146(1)_1775753795687.jpg";
import cakeBlueBirthday from "@assets/IMG-20260409-WA0108_1775753795837.jpg";
import cakeCoupleHug from "@assets/IMG-20260409-WA0109_1775753795810.jpg";
import cakeCoupleRound from "@assets/IMG-20260409-WA0110_1775753795743.jpg";
import cakeILoveYou from "@assets/IMG-20260409-WA0111_1775753795716.jpg";
import cakeHeartBirthday from "@assets/IMG-20260409-WA0112_1775753795766.jpg";
import cakeWife from "@assets/IMG-20260409-WA0113_1775753795785.jpg";
import motherCake1 from "@assets/FB_IMG_1777552283789_1777802679122.jpg";
import motherCake2 from "@assets/FB_IMG_1777552258854_1777802679157.jpg";
import motherCake3 from "@assets/FB_IMG_1777552244916_1777802679192.jpg";
import motherCake4 from "@assets/FB_IMG_1777552216065_1777802679229.jpg";
import motherCake5 from "@assets/FB_IMG_1777552207999_1777802679268.jpg";
import motherCake6 from "@assets/FB_IMG_1777552194438_1777802679299.jpg";
import motherCake7 from "@assets/FB_IMG_1777552153215_1777802679331.jpg";
import motherCake8 from "@assets/FB_IMG_1777552133594_1777802679366.jpg";
import motherCake9 from "@assets/FB_IMG_1777552121924_1777802679399.jpg";

import newCake1 from "@assets/FB_IMG_1777804964982_1777807043100.jpg";
import newCake2 from "@assets/FB_IMG_1777804969195_1777807043129.jpg";
import newCake3 from "@assets/FB_IMG_1777804958995_1777807043156.jpg";
import newCake4 from "@assets/FB_IMG_1777804954729_1777807043187.jpg";
import newCake5 from "@assets/FB_IMG_1777804950085_1777807043222.jpg";
import newCake6 from "@assets/FB_IMG_1777804940956_1777807043249.jpg";
import newCake7 from "@assets/FB_IMG_1777804936135_1777807043274.jpg";
import newCake8 from "@assets/FB_IMG_1777804925111_1777807043324.jpg";
import newCake9 from "@assets/FB_IMG_1777804907798_1777807043435.jpg";
import newCake10 from "@assets/FB_IMG_1777804902837_1777807043479.jpg";
import newCake11 from "@assets/FB_IMG_1777804890438_1777807043516.jpg";
import newCake12 from "@assets/FB_IMG_1777804886759_1777807043556.jpg";
import newCake13 from "@assets/FB_IMG_1777804388060_1777807043600.jpg";
import newCake14 from "@assets/FB_IMG_1777804882975_1777807043642.jpg";
import newCake15 from "@assets/FB_IMG_1777804876992_1777807043677.jpg";

export type Category = "all" | "mothers-day" | "anniversary" | "birthday" | "mango";

export interface Product {
  slug: string;
  name: string;
  min: number;
  image: string;
  category: Category;
  badge?: string;
  desc: string;
  fullDesc: string;
  highlights: string[];
}

function makeSlug(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

const raw: Omit<Product, "slug">[] = [
  // ── MOTHER'S DAY ──────────────────────────────────────────────
  {
    name: "Mother Special Rose Drip Cake",
    min: 2200,
    image: motherCake1,
    category: "mothers-day",
    badge: "💐 Mom Special",
    desc: "Rose drip design ke saath premium Mother's Day cake. Soft sponge aur beautiful floral finish.",
    fullDesc:
      "Is beautiful rose drip cake mein premium quality soft sponge layers hain aur upar gorgeous rose drip design kiya gaya hai. Mother's Day pe apni mom ko surprise dene ke liye yeh ek perfect choice hai. Fresh cream se bana yeh cake ek professional look deta hai lekin ghar jaise pyaar se bana hota hai. Isko aap custom message ke saath bhi order kar sakte hain.",
    highlights: ["Pure Veg 🌿", "Fresh Cream ✨", "Custom Message 📝", "Same Day Delivery 🚚"],
  },
  {
    name: "Mother Special Flower Square Cake",
    min: 2299,
    image: motherCake2,
    category: "mothers-day",
    desc: "Square floral cake jo Mom ke special day ko elegant bana de. Fresh cream finish.",
    fullDesc:
      "Yeh square-shaped floral cake Mother's Day ke liye specially design kiya gaya hai. Vibrant flowers ke saath decorated yeh cake bilkul unique aur elegant lagta hai. Soft vanilla ya chocolate base pe fresh cream se banaya gaya hai. Apni maa ke liye isse special message ke saath order karo.",
    highlights: ["Unique Design 🌸", "Pure Veg 🌿", "Fresh Daily ❤️", "Custom Message 📝"],
  },
  {
    name: "Heart Shape Mom Cake",
    min: 2500,
    image: motherCake3,
    category: "mothers-day",
    desc: "Heart-shaped romantic cake for Mom. Perfect gifting choice with premium look.",
    fullDesc:
      "Dil ke aakaar mein banaya gaya yeh special Mom Cake apni maa ke liye pyaar ka sabse sundar izhaar hai. Premium quality ingredients se banaya gaya hai, soft layers aur beautiful heart shape design ke saath. Gift box ke saath packaging available hai. Apni maa ko yeh unique cake gift karein aur unka din khaas bana dein.",
    highlights: ["Heart Shape ❤️", "Gift Packaging 🎁", "Pure Veg 🌿", "Custom Name 📝"],
  },
  {
    name: "Red Velvet Mom Special",
    min: 1600,
    image: motherCake4,
    category: "mothers-day",
    desc: "Classic red velvet cake with rich cream layers and smooth homemade taste.",
    fullDesc:
      "Classic red velvet cake ka yeh version specially Mother's Day ke liye taiyaar kiya gaya hai. Smooth cream cheese frosting aur rich red velvet layers ke saath yeh cake ek premium experience deta hai. Har bite mein soft texture aur balanced sweetness milti hai. Maa ko dedicate karo yeh khaas cake.",
    highlights: ["Red Velvet Base 🎂", "Cream Frosting ✨", "Pure Veg 🌿", "Homemade ❤️"],
  },
  {
    name: "Doll Cake Strawberry Mom",
    min: 2000,
    image: motherCake5,
    category: "mothers-day",
    desc: "Strawberry doll cake with attractive look, ideal for a sweet celebration.",
    fullDesc:
      "Yeh attractive doll cake strawberry flavor mein available hai aur dekhne mein bahut hi gorgeous lagta hai. Fresh strawberry cream se bana yeh cake Mom ke liye ek memorable surprise hai. Doll decoration ke saath yeh cake ek art piece ki tarah lagta hai. Isse sirf ek nazar mein dekh ke dil khush ho jaata hai.",
    highlights: ["Strawberry Flavor 🍓", "Doll Design 🎀", "Pure Veg 🌿", "Fresh Cream ✨"],
  },
  {
    name: "Vanilla Floral Cake",
    min: 1500,
    image: motherCake6,
    category: "mothers-day",
    desc: "Light vanilla floral cake with soft taste and pretty decorative finish.",
    fullDesc:
      "Soft aur light vanilla base ke saath yeh floral decorated cake Mom ke liye bilkul perfect hai. Flowers ki beautiful arrangement ise ek premium boutique cake ka look deti hai. Simple yet elegant design, jisme fresh vanilla cream aur decorative elements ka perfect balance hai. Mom ko yeh dekar unka chehra khil uttha hai.",
    highlights: ["Vanilla Flavor 🍦", "Floral Design 🌺", "Light & Soft 🎂", "Pure Veg 🌿"],
  },
  {
    name: "Vanilla Mom Special Cake",
    min: 1200,
    image: motherCake7,
    category: "mothers-day",
    desc: "Simple, fresh aur soft vanilla cake for Mom's loving celebration.",
    fullDesc:
      "Yeh simple aur beautiful vanilla cake Mom ke liye ghar ke pyaar se banaya gaya hai. Na zyada bhadak, na zyada plain — bilkul waise jaise maa ka pyaar hota hai. Soft sponge, fresh cream aur loving dedication ke saath. Kam budget mein bhi apni maa ke liye ek khaas tofa.",
    highlights: ["Affordable ₹", "Pure Veg 🌿", "Soft Sponge 🎂", "Fresh Daily ❤️"],
  },
  {
    name: "Vanilla Floral Rosette Cake",
    min: 1600,
    image: motherCake8,
    category: "mothers-day",
    desc: "Rosette flower decoration ke saath cream-filled vanilla special cake.",
    fullDesc:
      "Rosette piping technique se decorated yeh vanilla cake professional bakery look deta hai. Har rosette carefully fresh cream se bana hota hai, jo is cake ko visually stunning banata hai. Iske andar soft vanilla sponge layers hain jo mouth mein pighalta hai. Kisi bhi celebration ke liye ek perfect choice.",
    highlights: ["Rosette Design 🌹", "Vanilla Cream ✨", "Pure Veg 🌿", "Professional Look 🎂"],
  },
  {
    name: "Chocolate Drip Mom Cake",
    min: 2200,
    image: motherCake9,
    category: "mothers-day",
    desc: "Chocolate drip cake with rich taste and premium Mother's Day presentation.",
    fullDesc:
      "Rich chocolate drip ke saath yeh premium Mom cake Mother's Day ka sabse popular choice hai. Dark chocolate drip, soft chocolate sponge layers aur beautifully decorated top — yeh cake dekh ke hi munh mein paani aa jaata hai. Chocolate lovers ke liye yeh ek dream cake hai. Mom ko dedicate karo yeh special treat.",
    highlights: ["Chocolate Drip 🍫", "Rich & Moist 🎂", "Pure Veg 🌿", "Premium Look ✨"],
  },

  // ── ANNIVERSARY ───────────────────────────────────────────────
  {
    name: "Heart Shape Cake",
    min: 399,
    image: cakeHeartBirthday,
    category: "anniversary",
    desc: "Romantic heart cake for anniversaries and love celebrations.",
    fullDesc:
      "Apne partner ko surprise karo is romantic heart-shaped cake se. Soft cream layers, beautiful floral decoration aur dil ke aakaar ka design — yeh cake anniversary ke liye bilkul maana rakhta hai. Isme custom message bhi likhwa sakte hain. Ek perfect way to say 'I Love You' apne pyaare ko.",
    highlights: ["Heart Shape ❤️", "Custom Message 📝", "Pure Veg 🌿", "Gift Packaging 🎁"],
  },
  {
    name: "I Love You Cake",
    min: 349,
    image: cakeILoveYou,
    category: "anniversary",
    desc: "Cute love message cake for couples and special moments.",
    fullDesc:
      "'I Love You' likhaa yeh cute cake apne partner ke saath kisi bhi khaas moment ko aur khaas bana deta hai. Anniversary, date night, ya sirf surprise ke liye — yeh cake pyaar ka sabse meetha izhaar hai. Soft base, beautiful decoration aur affordable price mein available.",
    highlights: ["Love Message ❤️", "Affordable ₹", "Pure Veg 🌿", "Same Day Available 🚚"],
  },
  {
    name: "Couple Theme Round Cake",
    min: 349,
    image: cakeCoupleRound,
    category: "anniversary",
    desc: "Elegant couple-themed round cake with lovely celebration style.",
    fullDesc:
      "Couple theme se decorated yeh round cake anniversary celebrations ke liye ek elegant choice hai. Isme couple illustration ya custom design add karwa sakte hain. Smooth cream finish, soft layers aur beautiful presentation ke saath yeh cake ek memorable experience banata hai.",
    highlights: ["Couple Design 👫", "Customizable ✨", "Pure Veg 🌿", "Elegant Look 🎂"],
  },
  {
    name: "Couple Hug Cake",
    min: 349,
    image: cakeCoupleHug,
    category: "anniversary",
    desc: "Warm couple hug cake for anniversary and romantic gifting.",
    fullDesc:
      "Couple hug design wala yeh cake apne anniversary pe ya kisi bhi romantic occasion pe gift karo. Warm aur cozy design ke saath yeh cake rishte ki warmth ko celebrate karta hai. Soft sponge, fresh cream aur beautiful couple art ke saath — ek memorable gift idea.",
    highlights: ["Couple Art 🤗", "Fresh Cream ✨", "Pure Veg 🌿", "Gift Ready 🎁"],
  },

  // ── BIRTHDAY ──────────────────────────────────────────────────
  {
    name: "Blue Floral Birthday Cake",
    min: 1199,
    image: cakeBlueBirthday,
    category: "birthday",
    badge: "🎉 Popular",
    desc: "Bright birthday cake with floral design and premium cream finish.",
    fullDesc:
      "Yeh vibrant blue floral birthday cake Kanha Home Bakery ka sabse popular cake hai. Beautiful blue flowers, premium cream finish aur festive look ke saath yeh cake kisi bhi birthday celebration ko yaadgaar bana deta hai. Isme naam aur message likhwa sakte hain. Bachche ho ya adult — sabke liye perfect.",
    highlights: ["Most Popular ⭐", "Custom Name 📝", "Pure Veg 🌿", "Premium Design ✨"],
  },
  {
    name: "Mickey Mouse Cake",
    min: 959,
    image: cakeMickey,
    category: "birthday",
    desc: "Fun kids cake with Mickey theme for joyful birthday parties.",
    fullDesc:
      "Bachcho ke birthday ke liye Mickey Mouse theme cake ek perfect surprise hai! Colorful Mickey decoration, soft sponge base aur sweet cream ke saath yeh cake bachcho ki aankhon mein chamak la deta hai. Party mein sabka favorite cake ban jaata hai. Naam likhwaao aur bacche ko special feel karwao.",
    highlights: ["Kids Favorite 🎠", "Mickey Theme 🐭", "Pure Veg 🌿", "Custom Name 📝"],
  },
  {
    name: "Princess Theme Cake",
    min: 959,
    image: cakePrincess,
    category: "birthday",
    desc: "Pretty princess theme cake for little girls' birthday celebration.",
    fullDesc:
      "Apni chhoti si princess ke birthday pe yeh beautiful princess theme cake gift karo. Pink aur purple shades, crown decoration aur soft dreamy design ke saath yeh cake har ladki ka dream cake hai. Soft vanilla ya strawberry base available. Naam likhwaane ka option bhi hai.",
    highlights: ["Princess Design 👸", "Pink Theme 🌸", "Pure Veg 🌿", "Custom Name 📝"],
  },

  // ── MANGO & FRUIT ─────────────────────────────────────────────
  {
    name: "Mango Delight Cake",
    min: 599,
    image: cakeMango,
    category: "mango",
    badge: "🥭 Seasonal",
    desc: "Fresh mango flavor cake with fruity taste and seasonal vibes.",
    fullDesc:
      "Garmi ke mausam mein fresh Alphonso mango ke saath banaya gaya yeh Mango Delight Cake ek refreshing treat hai. Real mango pulp se bana yeh cake khane mein bahut hi fresh aur light lagta hai. Mango lovers ke liye yeh seasonal special cake ek must-try hai. Limited season mein available — jaldi order karo!",
    highlights: ["Real Mango 🥭", "Seasonal Special 🌞", "Pure Veg 🌿", "Refreshing & Light ✨"],
  },
  {
    name: "Butterscotch Crunch",
    min: 579,
    image: cakeButterscotch,
    category: "mango",
    desc: "Crunchy butterscotch cake with rich caramel-like homemade taste.",
    fullDesc:
      "Butterscotch ka rich caramel-like flavor aur crunchy toppings ke saath yeh cake ek irresistible treat hai. Soft sponge ke upar butterscotch cream aur crunchy crumbles ka combination bahut hi tasty hota hai. Yeh cake un logon ke liye perfect hai jinhe classic homemade flavors pasand hain. Affordable price mein premium taste!",
    highlights: ["Crunchy Topping 🍯", "Caramel Flavor ✨", "Pure Veg 🌿", "Bestseller 🎂"],
  },
  {
    name: "Pineapple Fresh Cake",
    min: 1199,
    image: cakePineapple,
    category: "mango",
    desc: "Soft pineapple cake with light cream and fresh fruity flavor.",
    fullDesc:
      "Classic pineapple cake jo ki India mein sabse zyada pasand kiya jaata hai. Fresh pineapple chunks, soft sponge layers aur light cream ke saath yeh cake ek perfect balance of sweet aur tangy hai. Kisi bhi occasion pe yeh cake sabka favorite ban jaata hai. Light aur refreshing taste ke saath yeh ek timeless classic hai.",
    highlights: ["Fresh Pineapple 🍍", "Light & Tangy ✨", "Pure Veg 🌿", "Classic Favorite 🎂"],
  },

  // ── SIGNATURE / ALL ───────────────────────────────────────────
  {
    name: "Chocolate Truffle Cake",
    min: 399,
    image: cakeChocolateTruffle,
    category: "all",
    badge: "⭐ Best Seller",
    desc: "Rich chocolate truffle cake with soft layers and premium taste.",
    fullDesc:
      "Kanha Home Bakery ka #1 bestselling cake! Rich dark chocolate truffle, soft moist sponge layers aur premium chocolate ganache ke saath yeh cake khane waale ko baar baar order karne pe majboor kar deta hai. Chocolate lovers ke liye yeh ek ultimate treat hai. Birthday ho ya anniversary — yeh cake kabhi fail nahi hota.",
    highlights: ["#1 Bestseller ⭐", "Rich Chocolate 🍫", "Pure Veg 🌿", "Moist & Soft 🎂"],
  },
  {
    name: "Black Forest Cake",
    min: 519,
    image: cakeBlackForest,
    category: "all",
    desc: "Classic black forest cake with fresh cream and chocolate shavings.",
    fullDesc:
      "International classic Black Forest cake ab Arrah mein homemade version mein available hai! Cherry compote, fresh whipped cream aur chocolate shavings ke saath yeh cake German bakery style ka authentic experience deta hai. Soft chocolate sponge, layers of cream aur sweet cherries — har bite mein khushi milti hai.",
    highlights: ["Classic Recipe 🍒", "Fresh Cream ✨", "Pure Veg 🌿", "Premium Quality 🎂"],
  },
  {
    name: "Red Velvet Cake",
    min: 679,
    image: cakeRedVelvet,
    category: "all",
    desc: "Smooth red velvet cake with creamy layers and elegant finish.",
    fullDesc:
      "Premium red velvet cake jo ki apne vibrant red color aur smooth cream cheese frosting ke liye jaana jaata hai. Yeh cake visually stunning hone ke saath saath khane mein bhi bahut hi delicious hai. Perfect for birthdays, anniversaries aur special occasions. Soft texture, mild cocoa flavor aur creamy layers — ek premium experience.",
    highlights: ["Vibrant Red Color ❤️", "Cream Cheese Frosting ✨", "Pure Veg 🌿", "Elegant 🎂"],
  },
  {
    name: "Oreo Cookie Cake",
    min: 399,
    image: cakeOreo,
    category: "all",
    desc: "Oreo lovers' cake with cookie crunch and creamy filling.",
    fullDesc:
      "Oreo fans ke liye yeh cake ek dream come true hai! Crushed Oreo cookies, creamy filling aur soft chocolate base ke saath yeh cake ek indulgent treat hai. Kids aur adults dono ko bahut pasand aata hai. Cookie crunch aur smooth cream ka perfect combination is cake ko unique banata hai. Affordable price mein premium taste!",
    highlights: ["Oreo Crunch 🍪", "Kids Favorite 🎠", "Pure Veg 🌿", "Affordable ₹"],
  },
  {
    name: "KitKat Chocolate Cake",
    min: 679,
    image: cakeKitKat,
    category: "all",
    desc: "Chocolate cake with KitKat decoration for a fun premium look.",
    fullDesc:
      "KitKat bars se decorated yeh chocolate cake ek wow factor wala cake hai jo party mein sabka dhyan kheenchta hai. Rich chocolate base, KitKat wafer sides aur fun toppings ke saath yeh cake ek premium gifting option bhi hai. Khane mein delicious aur dekhne mein stunning — double fun!",
    highlights: ["KitKat Decorated 🍫", "Party Special 🎉", "Pure Veg 🌿", "Gifting Perfect 🎁"],
  },
  {
    name: "Coffee Mocha Cake",
    min: 599,
    image: cakeCoffee,
    category: "all",
    desc: "Coffee mocha cake with balanced flavor for adult celebrations.",
    fullDesc:
      "Coffee lovers ke liye yeh mocha cake ek special treat hai. Rich espresso flavor, smooth mocha cream aur soft coffee-infused sponge ke saath yeh cake ek sophisticated dessert experience deta hai. Office parties, adult birthdays aur corporate gifting ke liye ek excellent choice. Ek sip coffee aur ek bite cake — perfect combo!",
    highlights: ["Coffee Flavor ☕", "Adults Favorite 🎂", "Pure Veg 🌿", "Premium Taste ✨"],
  },
  {
    name: "White Forest Cake",
    min: 639,
    image: cakeWhiteForest,
    category: "all",
    desc: "Soft white forest cake with cream and cherry-style presentation.",
    fullDesc:
      "Black Forest ka elegant white version — White Forest Cake! White chocolate shavings, fresh cream aur soft white sponge layers ke saath yeh cake ek sophisticated choice hai. Light aur not-too-sweet flavor profile ise un logon ke liye perfect banata hai jo heavy cakes prefer nahi karte. Elegant presentation ke saath gift karo.",
    highlights: ["White Chocolate ✨", "Light Flavor 🎂", "Pure Veg 🌿", "Elegant Design 🌸"],
  },
  {
    name: "Vanilla Cream Cake",
    min: 439,
    image: cakeVanilla,
    category: "all",
    desc: "Simple vanilla cream cake for everyday celebrations.",
    fullDesc:
      "Classic vanilla ka timeless charm! Soft vanilla sponge, fresh whipped cream aur simple yet beautiful decoration ke saath yeh cake har occasion ke liye suitable hai. Budget-friendly hone ke bawajood iska taste bilkul premium hai. Baccho ke lunchbox cake se lekar office celebrations tak — yeh cake kabhi disappoint nahi karta.",
    highlights: ["Classic Flavor 🍦", "Budget Friendly ₹", "Pure Veg 🌿", "Everyday Perfect 🎂"],
  },
  {
    name: "Strawberry Fresh Cake",
    min: 799,
    image: cakeStrawberry,
    category: "all",
    desc: "Fresh strawberry cake with fruity taste and soft texture.",
    fullDesc:
      "Fresh strawberries ke saath banaya gaya yeh cake ek fruity delight hai. Real strawberry pieces, strawberry cream frosting aur soft pink sponge layers — yeh cake dekhne mein jitna beautiful hai, khane mein utna hi delicious bhi. Girls aur kids ke liye ek all-time favorite. Refreshing fruity taste ke saath ek memorable bite.",
    highlights: ["Fresh Strawberry 🍓", "Pink Theme 🌸", "Pure Veg 🌿", "Kids Favorite 🎠"],
  },
  {
    name: "Blueberry Cream Cake",
    min: 799,
    image: cakeBlueberry,
    category: "all",
    desc: "Blueberry cream cake with vibrant look and light sweetness.",
    fullDesc:
      "Blueberry cream cake ek refreshing aur mildly sweet cake hai jo health-conscious cake lovers ke beech popular hai. Fresh blueberries, light whipped cream aur soft sponge ke saath yeh cake ek premium bakery experience ghar pe deta hai. Beautiful purple-blue tones ise visually appealing banate hain. Special occasions ke liye perfect.",
    highlights: ["Blueberry Flavor 🫐", "Light Sweetness ✨", "Pure Veg 🌿", "Premium Look 🎂"],
  },
  {
    name: "Pink Love Drip Cake",
    min: 959,
    image: cakePinkLove,
    category: "all",
    desc: "Pink drip cake made for romantic and cute special occasions.",
    fullDesc:
      "Yeh stunning pink drip cake Valentine's Day, anniversaries aur romantic occasions ke liye bilkul perfect hai. Beautiful pink color drip, heart decorations aur soft layers ke saath yeh cake dil jeet leta hai. Partner ko surprise do ya best friend ko gift karo — yeh cake ek unforgettable memory banata hai.",
    highlights: ["Pink Drip 💗", "Romantic Occasion ❤️", "Pure Veg 🌿", "Gift Perfect 🎁"],
  },
  {
    name: "Rose Cream Cake",
    min: 899,
    image: cakeRose,
    category: "all",
    desc: "Rose cream cake with floral decoration and soft homemade taste.",
    fullDesc:
      "Rose-scented cream aur beautiful floral rose decoration ke saath yeh cake ek romantic aur elegant choice hai. Soft sponge layers, rose flavored cream aur intricate piped roses ise ek premium boutique cake ka look dete hain. Weddings, engagements, anniversaries ya birthdays — yeh cake har special occasion pe perfectly fit hota hai.",
    highlights: ["Rose Flavor 🌹", "Floral Art ✨", "Pure Veg 🌿", "Boutique Style 🎂"],
  },
  {
    name: "Wife Special Cake",
    min: 1199,
    image: cakeWife,
    category: "all",
    desc: "Special surprise cake for wife with pretty and loving presentation.",
    fullDesc:
      "Apni patni ko surprise karo is specially designed Wife Special Cake se! Beautiful decoration, loving message aur premium presentation ke saath yeh cake rishte ki sweetness ko celebrate karta hai. Anniversary, birthday ya bas aise hi apna pyaar zaahir karne ke liye — yeh cake ek perfect romantic gesture hai. Uski aankhon mein khushi dekhna chahte ho? Yeh cake order karo!",
    highlights: ["Romantic Surprise 💕", "Custom Message 📝", "Pure Veg 🌿", "Premium Gift 🎁"],
  },

  // ── NEW PRODUCTS (15 items added by user) ─────────────────────
  {
    name: "Red Doll Cake",
    min: 2500,
    image: newCake1,
    category: "birthday",
    badge: "Doll Special",
    desc: "Red flavour 2 kg doll cake with butterfly wings and two-tier premium finish.",
    fullDesc:
      "Yeh stunning red doll cake do-tier design mein aata hai jisme ek beautiful fairy doll topper hai, saath mein colourful butterfly decorations aur red-white cream piping ka gorgeous combination hai. Girls ke birthday, theme parties aur grand celebrations ke liye yeh ek showstopper cake hai. Soft sponge ke andar rich red flavour cream hai jo khane mein utna hi delicious hai jitna dekhne mein. Custom naam bhi likhwa sakte hain.",
    highlights: ["Red Flavour ❤️", "Fairy Doll Topper 👗", "Two Tier 🎂", "Butterfly Decor 🦋"],
  },
  {
    name: "Red Heart Drip Cake",
    min: 2200,
    image: newCake2,
    category: "anniversary",
    desc: "Romantic red heart cake with drip finish for anniversaries and love celebrations.",
    fullDesc:
      "Yeh elegant red heart cake romantic occasions ke liye specially design kiya gaya hai. Dil ke shape mein bana yeh cake red drip, floral cream decorations aur beautiful pearl finish ke saath aata hai. Anniversary surprise ya Valentine's Day gift ke liye yeh ek perfect choice hai. Partner ka dil zaroor khush ho jaayega is cake ko dekh ke.",
    highlights: ["Heart Shape ❤️", "Red Drip Finish 🍒", "Romantic Look 💝", "Custom Message 📝"],
  },
  {
    name: "Chocolate Heart Celebration Cake",
    min: 1800,
    image: newCake3,
    category: "birthday",
    desc: "Chocolate flavour 2 kg two-tier cake with heart decorations.",
    fullDesc:
      "Rich chocolate flavour ka yeh 2 kg two-tier cake heart motifs, chocolate drip aur vibrant red-white detailing ke saath aata hai. Birthdays aur special celebrations ke liye yeh cake ek wow factor create karta hai. Soft chocolate sponge, smooth cream filling aur premium decoration — sab kuch ek saath.",
    highlights: ["Chocolate Flavour 🍫", "Two Tier 🎂", "Heart Decor ❤️", "2 Kg Party Size 🎉"],
  },
  {
    name: "Chocolate Doll Cake",
    min: 2500,
    image: newCake4,
    category: "birthday",
    badge: "Doll Special",
    desc: "Chocolate flavour 2 kg doll cake with rose decor and rich presentation.",
    fullDesc:
      "Chocolate flavour ka yeh premium doll cake red roses aur chocolate drip detailing ke saath aata hai. Stylish doll topper aur intricate decoration ise ek grand birthday cake banate hain. Rich chocolate taste aur beautiful presentation ka perfect combination — perfect for girls who love both chocolate and elegance.",
    highlights: ["Chocolate Base 🍫", "Doll Topper 👑", "Rose Decor 🌹", "2 Kg Grand Size 🎊"],
  },
  {
    name: "Strawberry Doll Cake",
    min: 2200,
    image: newCake5,
    category: "birthday",
    badge: "Doll Special",
    desc: "Strawberry flavour 2 kg doll cake with pink rose and pearl finish.",
    fullDesc:
      "Soft pink aur white shades mein bana yeh strawberry doll cake girls ke birthdays ke liye dream cake hai. Fresh strawberry cream, pink rosette piping aur cute doll topper ke saath yeh cake ek magical experience deta hai. Silver pearls ka decoration ise extra glamorous banata hai. Ek baar order karo, baar baar yaad aayega.",
    highlights: ["Strawberry Flavour 🍓", "Doll Topper 👗", "Pink Rosette 🌸", "2 Kg Premium 🎀"],
  },
  {
    name: "Red Velvet Premium Cake",
    min: 2500,
    image: newCake6,
    category: "all",
    badge: "Premium",
    desc: "Red velvet 2 kg cake with red rose decoration and elegant two-tier design.",
    fullDesc:
      "Yeh premium red velvet cake 2 kg mein aata hai aur iska two-tier design red roses, white cream aur intricate piping se decorated hai. Rich cocoa notes, smooth cream cheese filling aur vibrant red color — yeh cake har occasion ka centerpiece ban jaata hai. Weddings, birthdays aur anniversaries ke liye ek excellent choice.",
    highlights: ["Red Velvet ❤️", "2 Kg Premium 🎂", "Rose Decor 🌹", "Elegant Finish ✨"],
  },
  {
    name: "Heart Shape Vanilla Cake",
    min: 2200,
    image: newCake7,
    category: "anniversary",
    desc: "Vanilla flavour 2 kg heart shape cake with elegant red-white design.",
    fullDesc:
      "Vanilla flavour ka yeh gorgeous 2 kg heart shape cake red aur white shades mein banaya gaya hai. Beautiful floral cream work, premium finish aur heart-shaped tiers isse anniversary celebrations ke liye ek perfect showpiece banate hain. Soft vanilla sponge layers ke saath yeh cake taste mein bhi lajawaab hai.",
    highlights: ["Vanilla Flavour 🍦", "Heart Shape ❤️", "2 Kg Size 🎂", "Anniversary Special 💍"],
  },
  {
    name: "Strawberry Rainbow Cake",
    min: 999,
    image: newCake8,
    category: "birthday",
    desc: "Strawberry flavour 1.5 kg cake with red rosettes and rainbow topper.",
    fullDesc:
      "Yeh cute aur colourful strawberry cake 1.5 kg mein aata hai jisme red rosette cream work aur adorable rainbow topper hai. Birthday celebrations ke liye yeh ek playful aur delicious choice hai. Fresh strawberry cream aur soft sponge ke saath yeh cake khane mein jitna tasty hai, dekhne mein utna hi cute bhi.",
    highlights: ["Strawberry Flavour 🍓", "1.5 Kg Size 🎂", "Rainbow Topper 🌈", "Birthday Fun 🎉"],
  },
  {
    name: "Strawberry Rose Tier Cake",
    min: 1800,
    image: newCake9,
    category: "birthday",
    desc: "Strawberry flavour 2 kg premium two-tier cake with red roses and cherries.",
    fullDesc:
      "Strawberry flavour ka yeh 2 kg two-tier cake red roses, fresh cherries aur vibrant red drip ke saath aata hai. Premium celebration cake jo birthday, anniversary ya family function ke liye ideal hai. Har tier par beautiful cream roses piped hain jo ise ek art piece ki tarah banate hain.",
    highlights: ["Strawberry Flavour 🍓", "2 Kg Two Tier 🎂", "Red Rose Decor 🌹", "Cherry Topping 🍒"],
  },
  {
    name: "Blueberry Love Cake",
    min: 2500,
    image: newCake10,
    category: "birthday",
    desc: "Blueberry flavour 2 kg two-tier cake with butterfly decor and LOVE theme.",
    fullDesc:
      "Yeh vibrant blueberry cake 2 kg mein aata hai aur iska unique blue-white design butterflies aur LOVE heart topper ke saath decorated hai. Special occasions, birthdays ya valentines ke liye yeh ek standout choice hai. Fresh blueberry cream aur soft sponge ka perfect combination deta hai yeh cake.",
    highlights: ["Blueberry Flavour 🫐", "2 Kg Premium 🎂", "Butterfly Decor 🦋", "Love Theme ❤️"],
  },
  {
    name: "Butterscotch Chocolate Combo Cake",
    min: 2500,
    image: newCake11,
    category: "all",
    badge: "Combo Special",
    desc: "Butterscotch aur chocolate flavour 2 kg cake with premium lace design.",
    fullDesc:
      "Is unique cake mein butterscotch aur chocolate dono flavours ka combination hai. Chocolate lace work, wafer rolls aur yellow-brown dual tone design ise ek bakery-level premium cake banate hain. 2 kg mein available yeh cake large parties aur corporate events ke liye ek impressive choice hai. Taste mein rich, look mein stunning.",
    highlights: ["Butterscotch 🍯", "Chocolate 🍫", "2 Kg Combo 🎂", "Premium Lace Design ✨"],
  },
  {
    name: "Blueberry Butterfly Cake",
    min: 1500,
    image: newCake12,
    category: "birthday",
    desc: "Blueberry flavour 1.5 kg two-tier cake with butterflies and blue roses.",
    fullDesc:
      "Yeh beautiful blueberry cake 1.5 kg mein do-tier design ke saath aata hai. Blue roses, delicate butterfly decorations aur smooth ombre cream finish ise ek dream cake banate hain. Birthday celebrations aur gifting ke liye yeh ek elegant aur unique choice hai. Fresh blueberry taste aur premium look dono milte hain.",
    highlights: ["Blueberry Flavour 🫐", "1.5 Kg Two Tier 🎂", "Butterfly Decor 🦋", "Blue Rose Design 💙"],
  },
  {
    name: "Vanilla Heart Anniversary Cake",
    min: 1900,
    image: newCake13,
    category: "anniversary",
    desc: "Vanilla flavour heart shape anniversary cake with elegant two-tier design.",
    fullDesc:
      "Yeh romantic vanilla heart cake anniversary ke liye specially crafted hai. Red-white dual tone heart shape, chocolate curls aur white floral decorations ke saath yeh cake pyaar aur elegance ka perfect symbol hai. Soft vanilla layers aur smooth cream finish ke saath partner ko surprise karo is khaas cake se.",
    highlights: ["Vanilla Flavour 🍦", "Heart Shape ❤️", "Anniversary Special 💍", "Elegant Design ✨"],
  },
  {
    name: "Mango Celebration Cake",
    min: 1800,
    image: newCake14,
    category: "mango",
    badge: "Seasonal",
    desc: "Mango flavour 1.5 kg two-tier cake with pink roses and blue base.",
    fullDesc:
      "Fresh mango flavour ka yeh 1.5 kg cake pink roses aur blue cream base ke saath ek unique aur festive look deta hai. Summer celebrations aur birthdays ke liye yeh ek perfect seasonal special hai. Real mango taste aur beautiful floral decoration — ek cake jo sab ko yaad rahega.",
    highlights: ["Mango Flavour 🥭", "1.5 Kg Seasonal 🌞", "Floral Decor 🌸", "Fresh & Light ✨"],
  },
  {
    name: "White Chocolate Vanilla Cake",
    min: 2500,
    image: newCake15,
    category: "all",
    badge: "Elegant",
    desc: "Vanilla flavour 2 kg cake with white chocolate fondant and blue floral design.",
    fullDesc:
      "Vanilla flavour ka yeh premium 2 kg cake white chocolate inspired fondant aur beautiful blue floral pattern ke saath aata hai. Clean, elegant look aur sophisticated design ise weddings, milestone birthdays aur corporate gifting ke liye ideal banata hai. Soft vanilla sponge, smooth filling aur professional finish — ek cake jo impression chhod jaata hai.",
    highlights: ["Vanilla Flavour 🍦", "White Chocolate ✨", "2 Kg Premium 🎂", "Fondant Design 🤍"],
  },
];

export const ALL_PRODUCTS: Product[] = raw.map((p) => ({
  ...p,
  slug: makeSlug(p.name),
}));

export function getProductBySlug(slug: string): Product | undefined {
  return ALL_PRODUCTS.find((p) => p.slug === slug);
}

export function getRelatedProducts(product: Product, count = 4): Product[] {
  return ALL_PRODUCTS.filter(
    (p) => p.slug !== product.slug && (p.category === product.category || p.category === "all")
  ).slice(0, count);
}
