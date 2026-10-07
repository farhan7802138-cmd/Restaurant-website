export const restaurantInfo = {
  name: "CLEAN CREATIONS",
  tagline: "New Orleans Healthy Gourmet Kitchen & Dining",
  description: "Handcrafted chef-prepared gourmet dining made from fresh, whole, scratch ingredients. Designed to nourish your body and fuel your lifestyle without sacrificing rich, vibrant flavor.",
  phone: "(504) 309-5427",
  email: "customerservice@cleancreations.net",
  eventsEmail: "catering@cleancreations.net",
  address: {
    street: "1105 Lafayette St",
    city: "Gretna, LA 70053",
    neighborhood: "Greater New Orleans Area",
    valetNote: "Convenient storefront parking & curbside pickup available"
  },
  hours: [
    { days: "Monday – Friday", meal: "Breakfast & Lunch Cafe", time: "7:00 AM – 7:00 PM" },
    { days: "Saturday – Sunday", meal: "Weekend Kitchen & Cafe", time: "8:00 AM – 4:00 PM" },
    { days: "Daily", meal: "Curbside Pickup & Delivery", time: "Fresh Daily Service" },
    { days: "Catering & Private Dining", meal: "By Advance Reservation", time: "Tailored to Your Schedule" }
  ],
  stats: [
    { number: "10+", label: "Years of Culinary Mastery", subtext: "Founded by Barbara Bolotte Blank" },
    { number: "100%", label: "Scratch Kitchen", subtext: "Zero artificial preservatives or refined sugars" },
    { number: "50k+", label: "Healthy Meals Served", subtext: "Across Greater New Orleans & Gulf Coast" },
    { number: "99%", label: "Guest Satisfaction", subtext: "Based on 2,500+ verified customer reviews" }
  ]
};

export const featuredDishes = [
  {
    id: 1,
    name: "Chimichurri Grass-Fed Steak Medallions",
    category: "mains",
    categoryName: "Lean Land & Hearth",
    tag: "Customer Favorite",
    price: "$24",
    image: "/images/dish-wagyu.jpg",
    shortDesc: "Flame-seared grass-fed beef medallions, vibrant house chimichurri, roasted sweet potato mousseline, charred asparagus.",
    fullDesc: "Premium pasture-raised grass-fed flank steak grilled to tender perfection. Paired with our zesty, nutrient-dense house chimichurri crafted with cold-pressed olive oil, garlic, and garden herbs, accompanied by roasted sweet potato puree and tender seasonal greens.",
    dietary: ["Gluten-Free", "High-Protein", "Paleo"],
    winePairing: "Pressed Organic Blackberry Antioxidant Elixir",
    calories: "520 kcal",
    allergens: "None"
  },
  {
    id: 2,
    name: "Wild Atlantic Salmon & Lemon Herb Risotto",
    category: "seafood",
    categoryName: "Fresh Sea Harvest",
    tag: "Chef's Signature",
    price: "$22",
    image: "/images/dish-salmon.jpg",
    shortDesc: "Pan-crisped wild salmon fillet over cauliflower saffron risotto, charred Romanesco, preserved lemon dill glaze.",
    fullDesc: "Sustainably caught wild salmon seared golden crisp. Served over a rich, velvety cauliflower and arborio saffron risotto with ember-roasted Romanesco brassica and fresh Meyer lemon dill oil packed with natural omega-3s.",
    dietary: ["Gluten-Free", "Pescatarian", "Dairy-Free"],
    winePairing: "Cold-Pressed Citrus Turmeric Spritz",
    calories: "480 kcal",
    allergens: "Fish"
  },
  {
    id: 3,
    name: "Handcrafted Cauliflower Lobster Ravioli",
    category: "pasta",
    categoryName: "Artisan Healthy Pasta",
    tag: "Nutrient Dense",
    price: "$26",
    image: "/images/dish-ravioli.jpg",
    shortDesc: "Silky grain-free pasta pillows filled with butter-poached Maine lobster, coconut tarragon bisque, micro herbs.",
    fullDesc: "Freshly handmade gluten-free pasta filled with succulent wild Maine lobster. Swirled in an aromatic dairy-free coconut bisque reduction scented with French tarragon, shallots, and cold-pressed extra virgin olive oil.",
    dietary: ["Gluten-Free", "Dairy-Free Option"],
    winePairing: "Chilled Sparkling Hibiscus Green Tea",
    calories: "460 kcal",
    allergens: "Crustaceans"
  },
  {
    id: 4,
    name: "Herb-Roasted Lemon Thyme Chicken Breast",
    category: "mains",
    categoryName: "Lean Land & Hearth",
    tag: "High Protein",
    price: "$19",
    image: "/images/dish-duck.jpg",
    shortDesc: "Tender antibiotic-free roasted chicken breast, spiced butternut purée, sautéed French green beans, rosemary glaze.",
    fullDesc: "All-natural antibiotic-free chicken breast basted in cold-pressed olive oil, cracked pepper, and fresh thyme. Served alongside velvety roasted butternut squash puree and tender French haricots verts.",
    dietary: ["Gluten-Free", "Keto Friendly", "Dairy-Free"],
    winePairing: "Infused Cucumber Mint Collagen Quencher",
    calories: "410 kcal",
    allergens: "None"
  },
  {
    id: 5,
    name: "Clean Creations Superfood Burrata Harvest",
    category: "starters",
    categoryName: "Fresh Greens & Bowls",
    tag: "Farm to Table",
    price: "$16",
    image: "/images/dish-burrata.jpg",
    shortDesc: "Artisanal light burrata, heirloom garden tomatoes, Modena balsamic drizzle, roasted pepitas, seed cracker.",
    fullDesc: "Sun-ripened multi-color heirloom tomatoes, fresh artisanal burrata, sweet garden basil, and roasted pumpkin seed crunch drizzled with 18-year barrel-aged Modena balsamic and cold-pressed olive oil.",
    dietary: ["Vegetarian", "Gluten-Free"],
    winePairing: "House Cold-Pressed Green Glow Juice",
    calories: "340 kcal",
    allergens: "Dairy"
  },
  {
    id: 6,
    name: "Raw Dark Cacao & Espresso Protein Sphere",
    category: "desserts",
    categoryName: "Clean Patisserie",
    tag: "Zero Refined Sugar",
    price: "$12",
    image: "/images/dish-dessert.jpg",
    shortDesc: "85% Raw cacao mousse dome, almond butter caramel core, fresh raspberry reduction, toasted coconut flakes.",
    fullDesc: "Indulgent yet wholesome. A rich raw cacao sphere naturally sweetened with organic dates and pure maple syrup. Filled with a molten almond butter heart and served with antioxidant-rich raspberry coulis.",
    dietary: ["Vegan", "Gluten-Free", "Dairy-Free"],
    winePairing: "Artisanal Organic Cold Brew with Oat Milk",
    calories: "280 kcal",
    allergens: "Tree Nuts (Almonds)"
  }
];

export const fullMenuSections = [
  {
    title: "Fresh Bowls & Starters",
    items: [
      { name: "Superfood Harvest Burrata Bowl", desc: "Heirloom tomatoes, fresh burrata, roasted pepitas, aged balsamic, avocado", price: "$16", tag: "Signature" },
      { name: "Wild Gulf Shrimp Ceviche", desc: "Lime-marinated shrimp, diced cucumber, cilantro, jalapeno, cassava crisps", price: "$18", tag: "Pescatarian" },
      { name: "Smoked Turkey & Bacon Egg Bites", desc: "Cage-free pasture-raised eggs, nitrate-free bacon, roasted spinach", price: "$12", tag: "Keto" },
      { name: "Charred Street Corn & Kale Salad", desc: "Baby tuscan kale, roasted corn, cashew lime crema, pumpkin seeds", price: "$14", tag: "Vegan" }
    ]
  },
  {
    title: "Gourmet Healthy Entrees",
    items: [
      { name: "Chimichurri Grass-Fed Steak Medallions", desc: "Grass-fed flank, sweet potato mousseline, charred asparagus, chimichurri", price: "$24", tag: "High-Protein" },
      { name: "Wild Atlantic Salmon & Saffron Risotto", desc: "Pan-crisped salmon, cauliflower arborio risotto, preserved lemon dill oil", price: "$22", tag: "Omega-3" },
      { name: "Handcrafted Cauliflower Lobster Ravioli", desc: "Maine lobster, coconut tarragon bisque, microgreens, grain-free pasta", price: "$26", tag: "Artisan" },
      { name: "Herb Roasted Lemon Thyme Chicken Breast", desc: "Pasture-raised chicken, roasted butternut purée, sautéed green beans", price: "$19", tag: "Gluten-Free" }
    ]
  },
  {
    title: "Lifestyle Meal Packs & By The Pound",
    items: [
      { name: "Grass-Fed Flank Steak by the Pound", desc: "Cooked tender with house herbs, chilled and ready to heat or portion", price: "$28 / lb", tag: "By The Pound" },
      { name: "Grilled Herb Chicken Breast by the Pound", desc: "Juicy antibiotic-free grilled chicken breast portions", price: "$18 / lb", tag: "By The Pound" },
      { name: "Roasted Sweet Potato Mash by the Pound", desc: "Slow roasted with coconut butter and pink Himalayan salt", price: "$12 / lb", tag: "Sides" },
      { name: "Charred Seasonal Veggie Medley by the Pound", desc: "Broccoli, zucchini, bell peppers, carrots tossed in olive oil", price: "$14 / lb", tag: "Sides" }
    ]
  },
  {
    title: "Clean Patisserie & Cold Pressed",
    items: [
      { name: "Raw Dark Cacao & Espresso Protein Sphere", desc: "85% raw cacao, almond butter core, raspberry coulis, coconut crunch", price: "$12", tag: "Zero Sugar" },
      { name: "Lemon Blueberry Superfood Tart", desc: "Almond flour crust, cashew lemon curd, fresh organic blueberries", price: "$11", tag: "Gluten-Free" },
      { name: "Green Glow Cold-Pressed Elixir", desc: "Cucumber, celery, green apple, kale, lemon, ginger", price: "$9", tag: "Raw Juice" },
      { name: "Antioxidant Beet & Berry Spritz", desc: "Beetroot, strawberries, pomegranate, lime, sparkling mineral water", price: "$9", tag: "Raw Juice" }
    ]
  }
];

export const whyChooseUsFeatures = [
  {
    id: "fresh",
    icon: "Leaf",
    title: "100% Scratch-Cooked Freshness",
    desc: "Every meal is crafted from scratch using fresh, whole, nutrient-dense ingredients. Never frozen, no artificial shortcuts.",
    highlight: "Zero artificial additives"
  },
  {
    id: "quality",
    icon: "Flame",
    title: "Chef-Crafted Gourmet Flavor",
    desc: "Healthy eating should be an exquisite culinary experience. Our culinary team combines gourmet culinary techniques with clean whole foods.",
    highlight: "Gourmet flavor balance"
  },
  {
    id: "service",
    icon: "Award",
    title: "Custom Dietary Lifestyles",
    desc: "Seamless meal choices for Gluten-Free, Keto, Paleo, Dairy-Free, Pescatarian, and Plant-Based lifestyles without compromising taste.",
    highlight: "Nutritionist approved"
  },
  {
    id: "ambiance",
    icon: "Sparkles",
    title: "Clean Ingredients & Healthy Oils",
    desc: "Prepared using cold-pressed extra virgin olive oil and avocado oil, avoiding seed oils, refined sugars, and hydrogenated fats.",
    highlight: "Non-GMO & heart-healthy"
  },
  {
    id: "cellar",
    icon: "Wine",
    title: "New Orleans Local Pride",
    desc: "Proudly founded and operated in Gretna, Louisiana, serving high-performing athletes, families, and busy professionals across Greater NOLA.",
    highlight: "Local Louisiana business"
  },
  {
    id: "sustainable",
    icon: "ShieldCheck",
    title: "Dine-In Cafe & Doorstep Delivery",
    desc: "Visit our Gretna retail cafe and bistro for breakfast, smoothies, and bowls, or enjoy seamless doorstep meal prep delivery.",
    highlight: "Convenient healthy living"
  }
];

export const diningExperiences = [
  {
    id: "grand-hall",
    title: "The Clean Creations Cafe & Bistro",
    subtitle: "Warm, Welcoming Dining in Gretna",
    desc: "Our vibrant cafe on Lafayette Street in Gretna offers an inviting space to savor fresh smoothies, gourmet bowls, wholesome toasts, and handcrafted meals made to order.",
    image: "/images/restaurant-interior.jpg",
    features: ["Full grab-and-go retail coolers", "Fresh organic smoothie & coffee bar", "Comfortable indoor & outdoor seating", "Daily fresh breakfast & lunch service"]
  },
  {
    id: "chef-table",
    title: "The Kitchen Hearth & Prep Studio",
    subtitle: "Culinary Craftsmanship Led by Barbara Bolotte Blank",
    desc: "Watch our expert culinary brigade hand-dice local produce, roast lean pasture-raised proteins, and portion chef-designed meals with exacting standards.",
    image: "/images/chef-plating.jpg",
    features: ["Scratch culinary preparation daily", "Strict allergen segregation protocols", "Custom corporate catering prep", "Whole food nutrient-dense formulation"]
  },
  {
    id: "wine-cellar",
    title: "Wellness Elixirs & Juice Bar",
    subtitle: "Cold-Pressed Potions & Natural Tonics",
    desc: "Explore our bar of cold-pressed raw juices, wellness shots, adaptogen tonics, and antioxidant-rich herbal infusions designed to revitalize your vitality.",
    image: "/images/wine-experience.jpg",
    features: ["100% Raw cold-pressed juices", "Turmeric & ginger immunity shots", "Organic collagen and protein boosters", "Zero added refined sugar or syrups"]
  },
  {
    id: "private-salon",
    title: "Corporate & Event Catering",
    subtitle: "Elevated Health-Conscious Gatherings",
    desc: "Host your wellness retreat, corporate executive lunch, or milestone celebration with bespoke, beautifully displayed healthy catering by Clean Creations.",
    image: "/images/private-dining.jpg",
    features: ["Customized group menu selections", "Individual dietary labeling for guests", "Delivered hot or cold with full setup", "Available across Greater New Orleans"]
  }
];

export const customerReviews = [
  {
    id: 1,
    name: "Dr. Matthew & Sarah Broussard",
    role: "Gretna, LA Resident",
    rating: 5,
    title: "Clean Creations has completely transformed our family's weekly dinner routine.",
    comment: "Living in New Orleans, finding food that is this healthy yet bursting with flavor was impossible until Clean Creations. The chimichurri steak and salmon are restaurant quality, fresh, and guilt-free.",
    date: "March 2025",
    occasion: "Weekly Gourmet Meal Prep",
    avatar: "MB"
  },
  {
    id: 2,
    name: "Jessica Thibodeaux",
    role: "New Orleans Marathoner & Fitness Coach",
    rating: 5,
    title: "The highest quality, cleanest fuel for athletes in Greater New Orleans.",
    comment: "Barbara Bolotte Blank and her team truly understand nutrient timing and gourmet flavor. Macro counts are completely reliable and the food actually tastes incredible every single time.",
    date: "February 2025",
    occasion: "Performance Nutrition",
    avatar: "JT"
  },
  {
    id: 3,
    name: "Andre Delacroix",
    role: "New Orleans Corporate Executive",
    rating: 5,
    title: "Outstanding catering and wonderful in-store cafe experience in Gretna.",
    comment: "We used Clean Creations for our firm's executive retreat. The staff handled multiple dietary restrictions effortlessly. Everyone raved about the fresh lobster ravioli and energy bowls.",
    date: "January 2025",
    occasion: "Corporate Wellness Event",
    avatar: "AD"
  },
  {
    id: 4,
    name: "Amanda Landry",
    role: "Metairie Verified Customer",
    rating: 5,
    title: "Saved me 10 hours of cooking a week without sacrificing taste or nutrition.",
    comment: "The retail cafe in Gretna is adorable, the staff is extraordinarily helpful, and having delicious healthy food ready in minutes has been a lifesaver. Cannot recommend Clean Creations enough!",
    date: "February 2025",
    occasion: "Bistro & Grab-and-Go Diner",
    avatar: "AL"
  }
];
