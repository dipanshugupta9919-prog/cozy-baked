import { CakeCategory, GalleryItem, TreatItem } from './types';

export const BUSINESS_INFO = {
  name: 'Cozy Baked',
  category: 'Cake Shop',
  address: 'D-21, IIM Rd, Madhupuram Colony, Bhitauli, Lucknow, Uttar Pradesh 226013',
  addressLine1: 'D-21, IIM Rd, Madhupuram Colony, Bhitauli',
  addressLine2: 'Lucknow, Uttar Pradesh 226013',
  phone: '07007791342',
  phoneTel: 'tel:07007791342',
  whatsAppNumber: '917007791342',
  whatsAppUrl: 'https://wa.me/917007791342?text=Hi%20Cozy%20Baked!%20I%27d%20like%20to%20enquire%20about%20ordering%20a%20cake.',
  googleMapsUrl: 'https://maps.app.goo.gl/LygJXWCjxkbYjCk77',
  hours: 'Open Daily: 10:00 AM – 10:00 PM',
  serviceAreas: 'IIM Road, Bhitauli, Jankipuram, Aliganj & Lucknow NCR',
};

export const CAKE_CATEGORIES: CakeCategory[] = [
  {
    id: 'birthday-cakes',
    name: 'Birthday Cakes',
    tagline: 'Joyful centerpieces crafted for every milestone',
    description:
      'From whimsical pastel swirls to rich Belgian chocolate drips topped with fresh berries, our birthday creations bring pure delight to guests of all ages.',
    idealFor: ['First Birthdays', 'Milestone Decades', 'Surprise Gatherings'],
    imageSrc: '/images/signature_birthday_cake_1790333856256.jpg',
    badge: 'Celebration Favorite',
    flavorNotes: ['Belgian Truffle', 'Vanilla Bean Raspberry', 'Lotus Biscoff Crunch'],
    sizes: ['0.5 kg', '1.0 kg', '1.5 kg', '2.0 kg+'],
  },
  {
    id: 'anniversary-cakes',
    name: 'Anniversary Cakes',
    tagline: 'Romantic elegance honoring cherished chapters',
    description:
      'Delicately sculpted tiers featuring silky Swiss meringue buttercream, handcrafted edible floral cascades, and soft champagne or blush undertones.',
    idealFor: ['Silver & Golden Jubilees', 'Romantic Dinners', 'Annual Milestones'],
    imageSrc: '/images/anniversary_floral_cake_1790333868937.jpg',
    badge: 'Artisanal Elegance',
    flavorNotes: ['Rose Pistachio Cream', 'Red Velvet Cheesecake', 'White Chocolate Berry'],
    sizes: ['1.0 kg', '1.5 kg', '2-Tier (2.5 kg+)'],
  },
  {
    id: 'celebration-cakes',
    name: 'Celebration Cakes',
    tagline: 'Designed to elevate your most meaningful gatherings',
    description:
      'Modern aesthetics paired with balanced, unforgettable sweetness. Tailored for promotions, graduations, family reunions, and festive occasions.',
    idealFor: ['Graduations', 'Promotions', 'Family Feasts', 'Housewarmings'],
    imageSrc: '/images/celebration_moment_cake_1790333894985.jpg',
    badge: 'Crowd Favorite',
    flavorNotes: ['Hazelnut Praline', 'Salted Caramel Crunch', 'Dark Forest Gateau'],
    sizes: ['1.0 kg', '1.5 kg', '2.0 kg'],
  },
  {
    id: 'custom-cakes',
    name: 'Custom Cakes',
    tagline: 'Your imagination, transformed into edible art',
    description:
      'Collaborate with us to design a one-of-a-kind cake. Share your color palette, theme, or sketch, and we will bring your vision to life.',
    idealFor: ['Themed Parties', 'Bespoke Centerpieces', 'Personal Passions'],
    imageSrc: '/images/custom_designer_cake_1790333843632.jpg',
    badge: 'Bespoke Atelier',
    flavorNotes: ['Custom Flavor Pairing', 'Seasonal Fruit Preserves', 'Artisanal Ganache'],
    sizes: ['Any Custom Specification'],
  },
  {
    id: 'designer-cakes',
    name: 'Designer Cakes',
    tagline: 'Sculptural textures & contemporary haute patisserie',
    description:
      'Featuring modern palette-knife textures, geometric stenciling, edible gold foil leafing, and botanical touches that photograph exquisitely.',
    idealFor: ['Luxury Soirees', 'Intimate Cocktails', 'High-Fashion Events'],
    imageSrc: '/images/hero_luxury_cake_1790333825118.jpg',
    badge: 'Modern Aesthetic',
    flavorNotes: ['Almond Praline Buttercream', 'Espresso Kahlúa Ganache', 'Lemon Lavender'],
    sizes: ['1.5 kg', '2-Tier', '3-Tier'],
  },
  {
    id: 'special-occasion-cakes',
    name: 'Special Occasion Cakes',
    tagline: 'Festive treats for holidays, baby showers & weddings',
    description:
      'Celebratory showstoppers designed for baby announcements, engagement parties, festive pujas, and wedding functions with thoughtful warmth.',
    idealFor: ['Baby Showers', 'Ring Ceremonies', 'Diwali & Eid', 'Bridal Showers'],
    imageSrc: '/images/artisan_pastry_treats_1790333881625.jpg',
    badge: 'Festive Heritage',
    flavorNotes: ['Kesari Saffron Pistachio', 'Dark Truffle Noir', 'Cardamom Rose'],
    sizes: ['1.0 kg to Multi-Tier'],
  },
];

export const TREAT_SPECIALS: TreatItem[] = [
  {
    id: 'treat-signature',
    title: 'Signature Cakes',
    category: 'Cakes',
    description:
      'Multi-layered sponge infused with Madagascar vanilla bean or rich cacao, finished with silky Swiss meringue frosting.',
    highlights: ['Eggless options available', 'Fresh daily bake', 'Balanced sweetness'],
    serves: '4 to 12 servings',
    imageSrc: '/images/special_signature_cake_1790336200974.jpg',
  },
  {
    id: 'treat-pastries',
    title: 'Artisanal Pastries',
    category: 'Pastries',
    description:
      'Delicate layered patisserie slices, fruit-garnished tarts with house compote, and rich mousse cups crafted in small batches.',
    highlights: ['Crisp buttery crust', 'Real fruit purées', 'Velvety mousseline'],
    serves: 'Individual portions',
    imageSrc: '/images/special_french_pastries_1790336213238.jpg',
  },
  {
    id: 'treat-cupcakes',
    title: 'Gourmet Cupcakes',
    category: 'Cupcakes',
    description:
      'Moist sponge cakes crowned with piped buttercream swirls, Belgian chocolate curls, and hand-finished sprinkles.',
    highlights: ['Assorted flavor boxes', 'Custom color themes', 'Gift packaging'],
    serves: 'Boxes of 6 or 12',
    imageSrc: '/images/special_gourmet_cupcakes_1790336225065.jpg',
  },
  {
    id: 'treat-brownies',
    title: 'Sea Salt Dark Brownies',
    category: 'Brownies',
    description:
      'Ultra-fudgy Belgian dark chocolate squares baked with crisp crackly tops and finished with a pinch of flaky sea salt.',
    highlights: ['70% dark chocolate', 'Gooey center', 'Warm-and-serve friendly'],
    serves: 'Boxes of 4, 8, or 16',
    imageSrc: '/images/special_fudgy_brownies_1790336235932.jpg',
  },
  {
    id: 'treat-dessert-boxes',
    title: 'Celebration Dessert Boxes',
    category: 'Dessert Boxes',
    description:
      'Curated tasting hampers featuring mini tarts, brownies, macarons, and signature tea cookies tucked in luxury kraft boxes.',
    highlights: ['Bespoke ribbons', 'Greeting note card included', 'Perfect for gifting'],
    serves: 'Ideal for festive gifting',
    imageSrc: '/images/special_dessert_boxes_1790336247589.jpg',
  },
  {
    id: 'treat-celebration',
    title: 'Celebration Treats',
    category: 'Celebration Treats',
    description:
      'Cake pops, dessert shooters, and bite-sized sweet accompaniments coordinated to match your cake’s theme and aesthetic.',
    highlights: ['Party table styling', 'Child-friendly options', 'Color-matched'],
    serves: 'Catering bundles',
    imageSrc: '/images/special_party_treats_1790336259136.jpg',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Three-Tier Ivory & Gold Ranunculus',
    category: 'Designer Cakes',
    description: 'Swiss meringue buttercream with edible gold leaf foil accents and fresh botanical ranunculus blooms.',
    aspect: 'portrait',
    imageSrc: '/images/hero_luxury_cake_1790333825118.jpg',
    details: '3-tier handcrafted wedding cake on white fluted marble.',
  },
  {
    id: 'gal-2',
    title: 'Palette-Knife Sculptural Buttercream',
    category: 'Custom Cakes',
    description: 'Bespoke modern textured petals in shades of cream, mocha, and warm terracotta.',
    aspect: 'square',
    imageSrc: '/images/custom_designer_cake_1790333843632.jpg',
    details: 'Textured artisanal palette technique with dried botanicals.',
  },
  {
    id: 'gal-3',
    title: 'Fresh Wild Berry & Blackberry Rosette',
    category: 'Birthday Cakes',
    description: 'White chocolate buttercream rosettes paired with fresh wild blackberries and raspberries.',
    aspect: 'landscape',
    imageSrc: '/images/signature_birthday_cake_1790333856256.jpg',
    details: 'Decadent birthday gateau on artisanal ceramic plate.',
  },
  {
    id: 'gal-4',
    title: 'Two-Tier Romantic Pearl & Sugar Roses',
    category: 'Anniversary Cakes',
    description: 'Handcrafted sugar roses and delicate pearl piping over smooth ivory velvet frosting.',
    aspect: 'portrait',
    imageSrc: '/images/anniversary_floral_cake_1790333868937.jpg',
    details: 'Vintage brass stand presentation for a silver jubilee.',
  },
  {
    id: 'gal-5',
    title: 'Artisan Pastry & French Tart Collection',
    category: 'Specials',
    description: 'Glossy fruit tarts, chocolate sea salt brownies, and pistachio cupcakes in luxury presentation packaging.',
    aspect: 'landscape',
    imageSrc: '/images/artisan_pastry_treats_1790333881625.jpg',
    details: 'Fresh morning bake arranged in handcrafted kraft gift box.',
  },
  {
    id: 'gal-6',
    title: 'Twilight Candle Celebration Gateau',
    category: 'Celebration Cakes',
    description: 'Minimalist celebration cake with warm candle glow, champagne pairings, and evening ambiance.',
    aspect: 'square',
    imageSrc: '/images/celebration_moment_cake_1790333894985.jpg',
    details: 'Warm intimate milestone celebration in Lucknow.',
  },
];

export const WHY_COZY_BAKED = [
  {
    id: 'freshly-crafted',
    title: 'Freshly Crafted',
    description: 'Thoughtfully prepared cakes and baked treats made from scratch to order.',
    iconName: 'Sparkles',
  },
  {
    id: 'made-for-celebrations',
    title: 'Made for Celebrations',
    description: 'Beautiful creations designed around memorable moments and personal milestones.',
    iconName: 'PartyPopper',
  },
  {
    id: 'attention-to-detail',
    title: 'Attention to Detail',
    description: 'From delicate presentation to final finishing flourishes, every nuance matters.',
    iconName: 'Palette',
  },
  {
    id: 'made-with-care',
    title: 'Made With Care',
    description: 'A warm, personal approach to every order, tailored with patience and pride.',
    iconName: 'HeartHandshake',
  },
];

export const TRUST_PILLARS = [
  {
    title: 'Fresh Preparation',
    description:
      'We bake in small batches for your scheduled date, ensuring spongy moisture and vibrant flavor rather than chilled warehouse holding.',
  },
  {
    title: 'Quality Ingredients',
    description:
      'Pure dairy cream, Belgian couverture chocolates, real Madagascar vanilla beans, and seasonal orchard fruits define every recipe.',
  },
  {
    title: 'Beautiful Presentation',
    description:
      'Every cake is boxed with care, protective food-safe bases, and clean presentation ready to take center stage on your celebration table.',
  },
  {
    title: 'Personal Attention',
    description:
      'Direct conversation regarding flavor preferences, dietary needs, eggless requirements, and pickup or delivery timing.',
  },
  {
    title: 'Celebration-Focused Service',
    description:
      'We understand how important your celebration is, and we take heartfelt responsibility in making the centerpiece sweet and stress-free.',
  },
];
