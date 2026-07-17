export interface MenuItem {
  name: string;
  description: string;
  category: string;
  course: "Starters" | "Main Course" | "Desserts" | "Beverages";
  isPopular?: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  features: string[];
  image: string;
  category: "Weddings" | "Corporate" | "Traditional";
}

export const MENU_CATEGORIES = [
  "Traditional Maharashtrian",
  "Royal North Indian",
  "South Indian Delights",
  "Indo-Chinese Specials",
  "Exquisite Desserts & Beverages"
];

export const MENU_ITEMS: MenuItem[] = [
  // Maharashtrian
  {
    name: "Puran Poli with Sajuk Tup",
    description: "Classic sweet flatbread made of wheat flour and stuffed with a sweetened chana dal filling, served with warm, pure clarified butter.",
    category: "Traditional Maharashtrian",
    course: "Desserts",
    isPopular: true
  },
  {
    name: "Masale Bhat",
    description: "Fragrant, long-grain basmati rice cooked with fresh ivy gourd (Tondli), cashews, and a special blend of traditional Goda masala.",
    category: "Traditional Maharashtrian",
    course: "Main Course"
  },
  {
    name: "Kothimbir Vadi",
    description: "Savory, crispy-fried cakes made from fresh coriander leaves and chickpea flour, seasoned with sesame seeds and green chilies.",
    category: "Traditional Maharashtrian",
    course: "Starters",
    isPopular: true
  },
  {
    name: "Thalipeeth Bites",
    description: "Multi-grain savory spiced griddle cakes cooked with homemade white butter and served alongside fresh, thick curd.",
    category: "Traditional Maharashtrian",
    course: "Starters",
    isPopular: true
  },
  {
    name: "Misal Pav Shot",
    description: "Fiery, robust sprouted moth bean curry garnished with crispy sev, chopped onions, and lemon, served in miniature portions with soft buttered buns.",
    category: "Traditional Maharashtrian",
    course: "Starters"
  },
  {
    name: "Bharli Vangi",
    description: "Baby eggplants slow-cooked in a rich, nutty gravy made of roasted peanuts, toasted sesame seeds, coconut, and Kolhapuri spices.",
    category: "Traditional Maharashtrian",
    course: "Main Course"
  },
  {
    name: "Alu Vadi",
    description: "Colocasia (taro) leaves spread with spiced chickpea batter, rolled, steamed, and sliced into crispy-fried golden rounds.",
    category: "Traditional Maharashtrian",
    course: "Starters",
    isPopular: true
  },
  {
    name: "Pithla Bhakri",
    description: "Thick, flavorful spiced gram flour curry seasoned with garlic and mustard seeds, served with rustic, warm pearl millet flatbread (bhakri).",
    category: "Traditional Maharashtrian",
    course: "Main Course"
  },
  {
    name: "Amti and Indrayani Rice",
    description: "A sweet-and-sour spiced lentil soup flavored with Goda masala and sour kokum, paired with aromatic, sticky-cooked Indrayani rice.",
    category: "Traditional Maharashtrian",
    course: "Main Course"
  },
  {
    name: "Batata Vada",
    description: "Crispy deep-fried golden chickpea batter-coated spiced potato dumplings, served with dry garlic chutney.",
    category: "Traditional Maharashtrian",
    course: "Starters"
  },
  {
    name: "Kesari Shrikhand & Amrakhand",
    description: "Velvety smooth, hung curd sweet dessert infused with saffron, green cardamom, or premium Alphonso mango pulp.",
    category: "Traditional Maharashtrian",
    course: "Desserts"
  },
  {
    name: "Solkadhi",
    description: "Refreshing, digestive pink drink made from fresh coconut milk, kokum extract, garlic, and green chilies.",
    category: "Traditional Maharashtrian",
    course: "Beverages"
  },
  
  // North Indian
  {
    name: "Paneer Pasanda",
    description: "Delectable paneer sandwiches filled with green chutney and dry fruits, cooked in a rich, velvety cashew tomato gravy.",
    category: "Royal North Indian",
    course: "Main Course",
    isPopular: true
  },
  {
    name: "Shahi Paneer Tikka Masala",
    description: "Tandoor-grilled cottage cheese skewers marinated in spiced yogurt and slow-simmered in a robust, creamy tomato-onion gravy.",
    category: "Royal North Indian",
    course: "Main Course",
    isPopular: true
  },
  {
    name: "Paneer Malai Tikka",
    description: "Melt-in-the-mouth cottage cheese chunks marinated in cashew paste, fresh cream, and cardamon, charcoal-grilled to golden perfection.",
    category: "Royal North Indian",
    course: "Starters",
    isPopular: true
  },
  {
    name: "Veg Diwani Handi",
    description: "A colorful assortment of fresh farm vegetables simmered in a creamy, mildly spiced gravy of cashews and spinach.",
    category: "Royal North Indian",
    course: "Main Course"
  },
  {
    name: "Shahi Dal Makhani",
    description: "Slow-cooked black lentils and red kidney beans simmered overnight on low charcoal heat, finished with fresh butter and cream.",
    category: "Royal North Indian",
    course: "Main Course"
  },
  {
    name: "Dal Tadka Punjabi",
    description: "Yellow lentils double-tempered with roasted garlic, cumin seeds, whole dry red chilies, and fresh clarified butter.",
    category: "Royal North Indian",
    course: "Main Course"
  },
  {
    name: "Malai Kofta",
    description: "Rich, velvety dumplings crafted with premium cottage cheese and mashed potatoes, simmered in a creamy, buttery cashew onion gravy.",
    category: "Royal North Indian",
    course: "Main Course",
    isPopular: true
  },
  {
    name: "Amritsari Chole Bhature",
    description: "Warm, fluffy deep-fried sourdough leavened breads served with spicy dark chickpeas simmered in authentic Punjabi spices.",
    category: "Royal North Indian",
    course: "Main Course"
  },
  {
    name: "Veg Hara Bhara Kabab",
    description: "Delicate shallow-fried patties crafted from pureed spinach, garden peas, and mashed potatoes, seasoned with toasted spices.",
    category: "Royal North Indian",
    course: "Starters"
  },
  {
    name: "Butter Naan & Laccha Paratha",
    description: "Soft, leavened clay-oven flatbreads brushed with premium butter, and multi-layered flaky whole wheat breads.",
    category: "Royal North Indian",
    course: "Main Course"
  },
  {
    name: "Jeera Rice",
    description: "Light and fluffy long-grain basmati rice tempered with whole cumin seeds, pure ghee, and fresh coriander leaves.",
    category: "Royal North Indian",
    course: "Main Course"
  },
  {
    name: "Aromatic Veg Biryani",
    description: "Layered basmati rice and garden-fresh vegetables slow-cooked in a sealed handi with saffron, mint, and rose water.",
    category: "Royal North Indian",
    course: "Main Course"
  },
 
  // South Indian
  {
    name: "Medu Vada & Ghee Idli",
    description: "Crispy, golden lentil donuts and melt-in-the-mouth steamed rice cakes served with steaming hot, spice-rich Sambar and fresh coconut chutney.",
    category: "South Indian Delights",
    course: "Starters"
  },
  {
    name: "Mysore Masala Dosa",
    description: "Crisp, golden rice and lentil crepes lined with a fiery garlic-red chili paste, stuffed with spiced potato mash.",
    category: "South Indian Delights",
    course: "Main Course"
  },
  {
    name: "Rava Masala Dosa",
    description: "Paper-thin, ultra-crisp semolina and rice flour crepes tempered with green chilies, peppercorns, and stuffed with mashed potatoes.",
    category: "South Indian Delights",
    course: "Main Course"
  },
  {
    name: "Paniyaram (Appe)",
    description: "Fluffy, savory dumplings made from fermented rice-lentil batter, tempered with mustard seeds, curry leaves, and onions.",
    category: "South Indian Delights",
    course: "Starters"
  },
  {
    name: "Gunpowder Idli Bites",
    description: "Mini steamed button rice cakes tossed in a spicy, aromatic roasted lentil powder (podi) and pure hot ghee.",
    category: "South Indian Delights",
    course: "Starters",
    isPopular: true
  },
  {
    name: "Vazhaipoo Cutlet",
    description: "Unique, savory croquettes made from cleaned banana blossom, potatoes, and crushed peanuts, coated in crispy toasted breadcrumbs.",
    category: "South Indian Delights",
    course: "Starters"
  },
  {
    name: "Malabar Veg Kurma",
    description: "A luxurious South Indian vegetable curry simmered in a finely ground coconut, cashew, and fennel seed gravy.",
    category: "South Indian Delights",
    course: "Main Course"
  },
  {
    name: "Veg Kothu Parotta",
    description: "Flaky shredded flatbreads stir-fried vigorously on a cast-iron griddle with diced fresh vegetables, curry leaves, ginger, and a spicy coconut gravy.",
    category: "South Indian Delights",
    course: "Main Course"
  },
  {
    name: "Fragrant Coconut Rice",
    description: "Soft basmati rice tossed with fresh scraped coconut, mustard seeds, green chilies, golden cashews, and a splash of coconut oil.",
    category: "South Indian Delights",
    course: "Main Course"
  },
 
  // Chinese (Indo-Chinese)
  {
    name: "Veg Manchurian Dry",
    description: "Crispy-fried mixed vegetable balls wok-tossed with fresh ginger, garlic, green chilies, soy sauce, and green onions.",
    category: "Indo-Chinese Specials",
    course: "Starters",
    isPopular: true
  },
  {
    name: "Paneer Chilli Dry",
    description: "Soft cottage cheese cubes wok-tossed with green bell peppers, red onions, ginger, and green chilies in a spicy dark soy-garlic glaze.",
    category: "Indo-Chinese Specials",
    course: "Starters",
    isPopular: true
  },
  {
    name: "Crispy Veg Spring Rolls",
    description: "Deep-fried golden wrappers packed with seasoned julienned cabbage, carrots, bell peppers, and served with sweet chili sauce.",
    category: "Indo-Chinese Specials",
    course: "Starters"
  },
  {
    name: "Honey Chilli Potato",
    description: "Crispy, double-fried hand-cut potato wedges glazed with a sweet-and-spicy honey-chili sauce and sprinkled with toasted white sesame.",
    category: "Indo-Chinese Specials",
    course: "Starters",
    isPopular: true
  },
  {
    name: "Schezwan Hakka Noodles",
    description: "Stir-fried noodles with crisp vegetables in a fiery, house-crafted Schezwan chili garlic sauce.",
    category: "Indo-Chinese Specials",
    course: "Main Course"
  },
  {
    name: "Gobi Manchurian Gravy",
    description: "Fresh cauliflower florets crispy batter-fried, tossed in a balanced sweet, sour, and mildly spicy soy-onion gravy.",
    category: "Indo-Chinese Specials",
    course: "Main Course"
  },
  {
    name: "Veg Fried Rice",
    description: "Fragrant stir-fried jasmine rice loaded with finely chopped garden vegetables, light soy sauce, and toasted sesame oil.",
    category: "Indo-Chinese Specials",
    course: "Main Course"
  },
  {
    name: "Chilli Garlic Fried Rice",
    description: "Fiery wok-tossed rice flavored with generous amounts of minced garlic, red chili paste, soy sauce, and fresh scallions.",
    category: "Indo-Chinese Specials",
    course: "Main Course"
  },
 
  // Desserts
  {
    name: "Sajuk Tup Gajar Halwa",
    description: "Slow-simmered freshly grated carrots in sweet milk, enriched with homemade ghee, cardamom, and toasted pistachios.",
    category: "Exquisite Desserts & Beverages",
    course: "Desserts",
    isPopular: true
  },
  {
    name: "Gulab Jamun with Rabdi",
    description: "Warm, juicy golden-fried berry-sized milk dumplings paired with chilled, slow-reduced cardamon-flavored sweet milk cream.",
    category: "Exquisite Desserts & Beverages",
    course: "Desserts"
  },
  {
    name: "Kesar Pista Basundi",
    description: "Thickened, sweetened milk flavored with premium Kashmiri saffron, cardamom, and slivered almonds and pistachios.",
    category: "Exquisite Desserts & Beverages",
    course: "Desserts",
    isPopular: true
  },
  {
    name: "Pista Khoya Kulfi",
    description: "Luxurious, dense, slow-cooked caramelized milk ice cream infused with cardamom and crushed salted pistachios.",
    category: "Exquisite Desserts & Beverages",
    course: "Desserts"
  },
  {
    name: "Angoori Rasmalai",
    description: "Delicate, grape-sized spongy cottage cheese balls soaked in a sweet, saffron-infused creamy milk reduction.",
    category: "Exquisite Desserts & Beverages",
    course: "Desserts"
  },
  {
    name: "Royal Kulfi Falooda",
    description: "Rich, dense saffron-pistachio kulfi topped with sweetened cornstarch vermicelli, rose syrup, and sweet basil seeds.",
    category: "Exquisite Desserts & Beverages",
    course: "Desserts",
    isPopular: true
  },
  {
    name: "Dry Fruit Shrikhand Cup",
    description: "Thick, creamy sweetened yogurt flavored with premium saffron strands, green cardamom, and packed with chopped dry fruits.",
    category: "Exquisite Desserts & Beverages",
    course: "Desserts"
  },
  {
    name: "Saffron Badam Milk",
    description: "A velvety, chilled dairy beverage infused with real saffron threads, cardamom powder, and abundant crushed almonds.",
    category: "Exquisite Desserts & Beverages",
    course: "Beverages",
    isPopular: true
  },
  {
    name: "Chilled Mango Lassi",
    description: "Traditional yogurt beverage whipped with ripe Alphonso mango pulp, a touch of cardamom, and served chilled with nuts.",
    category: "Exquisite Desserts & Beverages",
    course: "Beverages"
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: "weddings",
    title: "Grand Royal Weddings",
    description: "A majestic culinary experience for your lifetime milestone. We offer beautifully curated traditional and modern menus with stunning buffet themes and flawless table services.",
    features: [
      "Custom royal buffet counters",
      "Traditional Maharashtrian Pangat service option",
      "Signature welcome drinks and live mocktail stations",
      "Dedicated hospitality staff"
    ],
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
    category: "Weddings"
  },
  {
    id: "engagements",
    title: "Engagements & Pre-Wedding Events",
    description: "Perfect setups for Roka, Haldi, Mehendi, and Sangeet ceremonies. Designed with vibrant themes and interactive food options that keep the celebrations lively.",
    features: [
      "Interactive Indian street food & chaat stations",
      "Gourmet finger food and pass-around appetizers",
      "Theme-based dessert layouts",
      "Strict hygiene standards"
    ],
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800",
    category: "Traditional"
  },
  {
    id: "corporate",
    title: "Corporate Banquets & Lunches",
    description: "Professional, punctual, and highly elegant catering solutions designed for seminars, corporate celebrations, annual general meetings, and executive lunches.",
    features: [
      "Punctual delivery and set up",
      "Menu configurations suitable for working hours",
      "Professional and formal presentation",
      "High-grade disposable and premium cutlery options"
    ],
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800",
    category: "Corporate"
  },
  {
    id: "celebrations",
    title: "Social Gatherings & Birthdays",
    description: "Intimate or grand celebrations with friends and family. We curate menus that are loved by kids and adults alike, featuring vibrant colors and outstanding tastes.",
    features: [
      "Customizable live counters (Chaat, Appe, Dosa)",
      "Kid-friendly portions and menu selections",
      "Elegant house-warming custom menus",
      "Warm, personalized hospitality"
    ],
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80&w=800",
    category: "Traditional"
  }
];

export const REVIEWS = [
  {
    author: "Ramesh Deshmukh",
    role: "Bride's Father",
    text: "Kulswami Catering made my daughter's wedding absolutely memorable. The Puran Poli was authentic and served warm with ghee. Every single guest praised the taste and service!",
    event: "Wedding Ceremony"
  },
  {
    author: "Priyanka Joshi",
    role: "Event Organizer",
    text: "Extremely professional catering service in Aurangabad. Their attention to detail, presentation, and taste is peerless. The Masale Bhat was an absolute hit at our corporate retreat.",
    event: "Corporate Annual Meet"
  },
  {
    author: "Aniket Kulkarni",
    role: "Host",
    text: "For my son's Upanayan (Munj) ceremony, we wanted strict traditional cuisine. Kulswami Catering delivered exactly that, preserving the purity and authentic Maharashtrian flavors. Incredible service!",
    event: "Traditional Ceremony"
  }
];
