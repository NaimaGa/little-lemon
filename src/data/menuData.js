// Little Lemon Restaurant Menu Data
// Preserves all original dishes (Greek Salad, Bruschetta, Lemon Dessert)
// with additional authentic Mediterranean recipes.

export const menuCategories = [
  { id: 'all', label: 'All Items' },
  { id: 'starters', label: 'Starters' },
  { id: 'mains', label: 'Mains' },
  { id: 'desserts', label: 'Desserts' },
  { id: 'drinks', label: 'Drinks' },
];

export const menuDishes = [
  {
    id: 'greek-salad',
    name: 'Greek Salad',
    category: 'starters',
    price: 12.99,
    description:
      'The famous greek salad of crispy romaine, onions, olives, and feta cheese, garnished with crunchy garlic croutons and Greek olive oil.',
    image:
      'https://images.unsplash.com/photo-1546793665-c74683f339c1?auto=format&fit=crop&w=800&q=80',
    tags: ['Vegetarian', 'Signature'],
    calories: '320 cal',
  },
  {
    id: 'bruschetta',
    name: 'Bruschetta',
    category: 'starters',
    price: 5.99,
    description:
      'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt, fresh vine tomatoes, basil, and olive oil.',
    image:
      'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?auto=format&fit=crop&w=800&q=80',
    tags: ['Vegetarian', 'Popular'],
    calories: '240 cal',
  },
  {
    id: 'hummus-pita',
    name: 'Little Lemon Hummus & Pita',
    category: 'starters',
    price: 7.50,
    description:
      'Creamy homemade chickpea hummus infused with tahini, garlic, and fresh lemon juice, served with warm house-baked pita bread.',
    image:
      'https://images.unsplash.com/photo-1577906096429-f73c2c312435?auto=format&fit=crop&w=800&q=80',
    tags: ['Vegan', 'Vegetarian'],
    calories: '380 cal',
  },
  {
    id: 'spanakopita',
    name: 'Spanakopita Pastry',
    category: 'starters',
    price: 9.50,
    description:
      'Crispy golden phyllo pastry triangles loaded with fresh spinach, scallions, aged Greek feta, and garden dill.',
    image:
      'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80',
    tags: ['Vegetarian'],
    calories: '310 cal',
  },
  {
    id: 'sea-bass',
    name: 'Mediterranean Sea Bass',
    category: 'mains',
    price: 22.50,
    description:
      'Pan-seared Mediterranean sea bass fillet served over rosemary roasted fingerling potatoes, sauteed wild greens, and lemon-caper reduction.',
    image:
      'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80',
    tags: ['Gluten-Free', "Chef's Choice"],
    calories: '540 cal',
  },
  {
    id: 'lamb-souvlaki',
    name: "Mario's Lamb Souvlaki",
    category: 'mains',
    price: 18.99,
    description:
      'Tender marinated lamb skewers flame-grilled over open wood coals, served with cucumber tzatziki, lemon herb rice, and grilled pita.',
    image:
      'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    tags: ['Traditional'],
    calories: '680 cal',
  },
  {
    id: 'lemon-dessert',
    name: 'Lemon Dessert',
    category: 'desserts',
    price: 5.00,
    description:
      'This comes straight from grandma’s recipe book, every single ingredient has been sourced and is as authentic as can be.',
    image:
      'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=800&q=80',
    tags: ['Vegetarian', 'Signature'],
    calories: '290 cal',
  },
  {
    id: 'baklava',
    name: 'Traditional Baklava',
    category: 'desserts',
    price: 6.50,
    description:
      'Delicate layers of buttered phyllo pastry filled with crushed walnuts and aromatic spices, soaked in Meyer lemon honey syrup.',
    image:
      'https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&w=800&q=80',
    tags: ['Vegetarian'],
    calories: '350 cal',
  },
  {
    id: 'mint-lemonade',
    name: 'Fresh Mint Lemonade',
    category: 'drinks',
    price: 4.50,
    description:
      'Freshly squeezed Meyer lemons, crushed spearmint leaves, pure cane sugar, and chilled sparkling spring water.',
    image:
      'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80',
    tags: ['Vegan', 'Gluten-Free'],
    calories: '120 cal',
  },
  {
    id: 'citrus-spritz',
    name: 'Mediterranean Citrus Spritz',
    category: 'drinks',
    price: 5.50,
    description:
      'Handcrafted artisan cooler blending sparkling blood orange, grapefruit tonic, rosemary sprig, and lemon zest.',
    image:
      'https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=800&q=80',
    tags: ['Vegan', 'Gluten-Free'],
    calories: '90 cal',
  },
];
