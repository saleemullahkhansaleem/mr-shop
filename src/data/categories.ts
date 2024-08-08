import {
  AutomotiveIcon,
  BeautyIcon,
  BooksIcon,
  ClothingIcon,
  ElectronicsIcon,
  HealthIcon,
  HomeIcon,
  OfficeSuppliesIcon,
  SportsIcon,
  ToysGamesIcon,
} from "@/components/icons";

export const categories = [
  {
    name: "Electronics",
    title: "Electronics - All Things Tech",
    url: "/categories/electronics",
    icon: ElectronicsIcon,
    subcategories: [
      {
        name: "Mobile Phones",
        title: "Mobile Phones - Latest Models",
        url: "/categories/electronics/mobile-phones",
      },
      {
        name: "Laptops",
        title: "Laptops - Top Brands",
        url: "/categories/electronics/laptops",
      },
      {
        name: "Cameras",
        title: "Cameras - Capture Moments",
        url: "/categories/electronics/cameras",
      },
      {
        name: "Televisions",
        title: "Televisions - Ultra HD",
        url: "/categories/electronics/televisions",
      },
      {
        name: "Headphones",
        title: "Headphones - Quality Sound",
        url: "/categories/electronics/headphones",
      },
      {
        name: "Wearable Technology",
        title: "Wearables - Stay Connected",
        url: "/categories/electronics/wearable-technology",
      },
      {
        name: "Smart Home Devices",
        title: "Smart Home - Modern Living",
        url: "/categories/electronics/smart-home-devices",
      },
      {
        name: "Gaming Consoles",
        title: "Gaming - Play On",
        url: "/categories/electronics/gaming-consoles",
      },
    ],
  },
  {
    name: "Fashion",
    title: "Fashion - Style Yourself",
    url: "/categories/fashion",
    icon: ClothingIcon,
    subcategories: [
      {
        name: "Men's Clothing",
        title: "Men's Clothing - Latest Trends",
        url: "/categories/fashion/mens-clothing",
      },
      {
        name: "Women's Clothing",
        title: "Women's Clothing - New Arrivals",
        url: "/categories/fashion/womens-clothing",
      },
      {
        name: "Kids' Clothing",
        title: "Kids' Clothing - Cute & Comfy",
        url: "/categories/fashion/kids-clothing",
      },
      {
        name: "Shoes",
        title: "Shoes - Step in Style",
        url: "/categories/fashion/shoes",
      },
      {
        name: "Accessories",
        title: "Accessories - Complete the Look",
        url: "/categories/fashion/accessories",
      },
      {
        name: "Jewelry",
        title: "Jewelry - Shine Bright",
        url: "/categories/fashion/jewelry",
      },
      {
        name: "Watches",
        title: "Watches - Timeless Pieces",
        url: "/categories/fashion/watches",
      },
    ],
  },
  {
    name: "Home",
    title: "Home & Kitchen - Make it Cozy",
    url: "/categories/home-kitchen",
    icon: HomeIcon,
    subcategories: [
      {
        name: "Furniture",
        title: "Furniture - Comfortable Living",
        url: "/categories/home-kitchen/furniture",
      },
      {
        name: "Home Decor",
        title: "Home Decor - Beautify Your Space",
        url: "/categories/home-kitchen/home-decor",
      },
      {
        name: "Bedding",
        title: "Bedding - Sweet Dreams",
        url: "/categories/home-kitchen/bedding",
      },
      {
        name: "Kitchen Appliances",
        title: "Kitchen Appliances - Modern Cooking",
        url: "/categories/home-kitchen/kitchen-appliances",
      },
      {
        name: "Cookware",
        title: "Cookware - Quality Tools",
        url: "/categories/home-kitchen/cookware",
      },
      {
        name: "Storage Solutions",
        title: "Storage - Organized Living",
        url: "/categories/home-kitchen/storage-solutions",
      },
      {
        name: "Cleaning Supplies",
        title: "Cleaning - Keep it Tidy",
        url: "/categories/home-kitchen/cleaning-supplies",
      },
    ],
  },
  {
    name: "Beauty",
    title: "Beauty & Personal Care - Look & Feel Great",
    url: "/categories/beauty-personal-care",
    icon: BeautyIcon,
    subcategories: [
      {
        name: "Skincare",
        title: "Skincare - Radiant Skin",
        url: "/categories/beauty-personal-care/skincare",
      },
      {
        name: "Haircare",
        title: "Haircare - Healthy Hair",
        url: "/categories/beauty-personal-care/haircare",
      },
      {
        name: "Makeup",
        title: "Makeup - Enhance Your Beauty",
        url: "/categories/beauty-personal-care/makeup",
      },
      {
        name: "Fragrances",
        title: "Fragrances - Smell Wonderful",
        url: "/categories/beauty-personal-care/fragrances",
      },
      {
        name: "Bath & Body",
        title: "Bath & Body - Relax & Refresh",
        url: "/categories/beauty-personal-care/bath-body",
      },
      {
        name: "Men's Grooming",
        title: "Men's Grooming - Look Sharp",
        url: "/categories/beauty-personal-care/mens-grooming",
      },
      {
        name: "Oral Care",
        title: "Oral Care - Bright Smiles",
        url: "/categories/beauty-personal-care/oral-care",
      },
    ],
  },
  {
    name: "Sports",
    title: "Sports & Outdoors - Get Active",
    url: "/categories/sports-outdoors",
    icon: SportsIcon,
    subcategories: [
      {
        name: "Exercise & Fitness",
        title: "Fitness - Stay Fit",
        url: "/categories/sports-outdoors/exercise-fitness",
      },
      {
        name: "Outdoor Recreation",
        title: "Outdoor Fun - Explore Nature",
        url: "/categories/sports-outdoors/outdoor-recreation",
      },
      {
        name: "Cycling",
        title: "Cycling - Ride On",
        url: "/categories/sports-outdoors/cycling",
      },
      {
        name: "Team Sports",
        title: "Team Sports - Play Together",
        url: "/categories/sports-outdoors/team-sports",
      },
      {
        name: "Water Sports",
        title: "Water Sports - Make a Splash",
        url: "/categories/sports-outdoors/water-sports",
      },
      {
        name: "Camping & Hiking",
        title: "Camping - Adventure Awaits",
        url: "/categories/sports-outdoors/camping-hiking",
      },
      {
        name: "Fishing",
        title: "Fishing - Catch the Big One",
        url: "/categories/sports-outdoors/fishing",
      },
    ],
  },
  {
    name: "Toys & Games",
    title: "Toys & Games - Fun for All Ages",
    url: "/categories/toys-games",
    icon: ToysGamesIcon,
    subcategories: [
      {
        name: "Action Figures",
        title: "Action Figures - Heroes & Villains",
        url: "/categories/toys-games/action-figures",
      },
      {
        name: "Dolls",
        title: "Dolls - Classic & Modern",
        url: "/categories/toys-games/dolls",
      },
      {
        name: "Puzzles",
        title: "Puzzles - Challenge Yourself",
        url: "/categories/toys-games/puzzles",
      },
      {
        name: "Board Games",
        title: "Board Games - Family Fun",
        url: "/categories/toys-games/board-games",
      },
      {
        name: "Educational Toys",
        title: "Educational - Learn & Play",
        url: "/categories/toys-games/educational-toys",
      },
      {
        name: "Building Sets",
        title: "Building Sets - Construct & Create",
        url: "/categories/toys-games/building-sets",
      },
      {
        name: "Outdoor Play",
        title: "Outdoor Play - Fun in the Sun",
        url: "/categories/toys-games/outdoor-play",
      },
    ],
  },
  {
    name: "Automotive",
    title: "Automotive - Everything for Your Vehicle",
    url: "/categories/automotive",
    icon: AutomotiveIcon,
    subcategories: [
      {
        name: "Car Electronics",
        title: "Car Electronics - Upgrade Your Ride",
        url: "/categories/automotive/car-electronics",
      },
      {
        name: "Car Accessories",
        title: "Car Accessories - Style & Comfort",
        url: "/categories/automotive/car-accessories",
      },
      {
        name: "Replacement Parts",
        title: "Replacement Parts - Quality & Value",
        url: "/categories/automotive/replacement-parts",
      },
      {
        name: "Tires & Wheels",
        title: "Tires & Wheels - Smooth Ride",
        url: "/categories/automotive/tires-wheels",
      },
      {
        name: "Motorcycle Accessories",
        title: "Motorcycle - Gear & More",
        url: "/categories/automotive/motorcycle-accessories",
      },
      {
        name: "Tools & Equipment",
        title: "Tools - Fix It Yourself",
        url: "/categories/automotive/tools-equipment",
      },
      {
        name: "Car Care",
        title: "Car Care - Keep It Clean",
        url: "/categories/automotive/car-care",
      },
    ],
  },
  {
    name: "Books",
    title: "Books - Dive into Reading",
    url: "/categories/books",
    icon: BooksIcon,
    subcategories: [
      {
        name: "Fiction",
        title: "Fiction - Stories to Tell",
        url: "/categories/books/fiction",
      },
      {
        name: "Non-Fiction",
        title: "Non-Fiction - Learn & Explore",
        url: "/categories/books/non-fiction",
      },
      {
        name: "Children's Books",
        title: "Children's Books - For Young Readers",
        url: "/categories/books/childrens-books",
      },
      {
        name: "Educational",
        title: "Educational - Expand Your Knowledge",
        url: "/categories/books/educational",
      },
      {
        name: "Mystery & Thriller",
        title: "Mystery & Thriller - Page Turners",
        url: "/categories/books/mystery-thriller",
      },
      {
        name: "Science Fiction & Fantasy",
        title: "Sci-Fi & Fantasy - Imaginary Worlds",
        url: "/categories/books/science-fiction-fantasy",
      },
      {
        name: "Biographies",
        title: "Biographies - Lives to Know",
        url: "/categories/books/biographies",
      },
    ],
  },
  {
    name: "Health",
    title: "Health & Wellness - Live Better",
    url: "/categories/health-wellness",
    icon: HealthIcon,
    subcategories: [
      {
        name: "Vitamins & Supplements",
        title: "Vitamins - Boost Your Health",
        url: "/categories/health-wellness/vitamins-supplements",
      },
      {
        name: "Medical Supplies",
        title: "Medical - Essential Items",
        url: "/categories/health-wellness/medical-supplies",
      },
      {
        name: "Personal Care",
        title: "Personal Care - Daily Essentials",
        url: "/categories/health-wellness/personal-care",
      },
      {
        name: "Fitness Equipment",
        title: "Fitness - Stay Active",
        url: "/categories/health-wellness/fitness-equipment",
      },
      {
        name: "Wellness & Relaxation",
        title: "Wellness - Relax & Rejuvenate",
        url: "/categories/health-wellness/wellness-relaxation",
      },
      {
        name: "Weight Management",
        title: "Weight Management - Reach Your Goals",
        url: "/categories/health-wellness/weight-management",
      },
      {
        name: "Nutrition",
        title: "Nutrition - Eat Right",
        url: "/categories/health-wellness/nutrition",
      },
    ],
  },
  {
    name: "Office Supplies",
    title: "Office Supplies - Work Smarter",
    url: "/categories/office-supplies",
    icon: OfficeSuppliesIcon,
    subcategories: [
      {
        name: "Office Furniture",
        title: "Furniture - Comfortable Workspace",
        url: "/categories/office-supplies/office-furniture",
      },
      {
        name: "Stationery",
        title: "Stationery - Write & Organize",
        url: "/categories/office-supplies/stationery",
      },
      {
        name: "Printers & Accessories",
        title: "Printers - Quality Prints",
        url: "/categories/office-supplies/printers-accessories",
      },
      {
        name: "Office Electronics",
        title: "Electronics - Boost Productivity",
        url: "/categories/office-supplies/office-electronics",
      },
      {
        name: "Writing Instruments",
        title: "Writing - Pens & Pencils",
        url: "/categories/office-supplies/writing-instruments",
      },
      {
        name: "Calendars & Planners",
        title: "Calendars - Plan Ahead",
        url: "/categories/office-supplies/calendars-planners",
      },
      {
        name: "Office Organization",
        title: "Organization - Keep It Tidy",
        url: "/categories/office-supplies/office-organization",
      },
    ],
  },
];
