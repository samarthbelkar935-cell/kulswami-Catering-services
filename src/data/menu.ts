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
    name: "Bharli Vangi",
    description: "Baby eggplants slow-cooked in a rich, nutty gravy made of roasted peanuts, toasted sesame seeds, coconut, and Kolhapuri spices.",
    category: "Traditional Maharashtrian",
    course: "Main Course"
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
    name: "Butter Naan & Laccha Paratha",
    description: "Soft, leavened clay-oven flatbreads brushed with premium butter, and multi-layered flaky whole wheat breads.",
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
    name: "Paniyaram (Appe)",
    description: "Fluffy, savory dumplings made from fermented rice-lentil batter, tempered with mustard seeds, curry leaves, and onions.",
    category: "South Indian Delights",
    course: "Starters"
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
