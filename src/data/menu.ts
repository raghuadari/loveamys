/**
 * Menu data for Love, Amy's Bakery.
 * Edit here to add, rename, or remove items — no component changes needed.
 */

export interface MenuItemBase {
  id: string;
  name: string;
  dietary: string;
}

export interface MenuCategory {
  id: string;
  label: string;
  /** Optional note shown below the category tab (e.g. special availability) */
  description?: string;
  items: MenuItemBase[];
}

export interface MenuItem extends MenuItemBase {
  category: string;
  quantity: number;
}

export const menuCategories: MenuCategory[] = [
  { id: 'all', label: 'All Items', items: [] },

  { id: 'buns', label: 'Buns', items: [
    { id: 'korean-cream-cheese', name: 'Korean Cream Cheese Buns', dietary: 'Eggless' },
    { id: 'cream-buns',          name: 'Cream Buns',               dietary: 'Eggless' },
  ]},

  { id: 'bombolinis', label: 'Bombolinis', items: [
    { id: 'bombolini-dark',       name: 'Dark Chocolate Bombolini',   dietary: 'Eggless' },
    { id: 'bombolini-milk',       name: 'Milk Chocolate Bombolini',   dietary: 'Eggless' },
    { id: 'bombolini-white',      name: 'White Chocolate Bombolini',  dietary: 'Eggless' },
    { id: 'bombolini-mango',      name: 'Mango Cream Bombolini',      dietary: 'Eggless' },
    { id: 'bombolini-strawberry', name: 'Strawberry Bombolini',       dietary: 'Eggless' },
    { id: 'bombolini-blueberry',  name: 'Blueberry Bombolini',        dietary: 'Eggless' },
    { id: 'bombolini-nutella',    name: 'Nutella Bombolini',          dietary: 'Eggless' },
  ]},

  { id: 'brownies', label: 'Brownies', items: [
    { id: 'brownie-classic', name: 'Classic Brownie',         dietary: 'Eggless' },
    { id: 'brownie-cookie',  name: 'Cookie Crumble Brownie',  dietary: 'Eggless' },
    { id: 'brownie-double',  name: 'Double Chocolate Brownie', dietary: 'Eggless' },
    { id: 'brownie-nutella', name: 'Nutella Brownie',          dietary: 'Eggless' },
    { id: 'brownie-biscoff', name: 'Biscoff Brownie',          dietary: 'Eggless' },
  ]},

  { id: 'cheesecake', label: 'NYC-style Cheesecake', items: [
    { id: 'cheesecake-plain',      name: 'Plain Cheesecake',      dietary: 'Eggless' },
    { id: 'cheesecake-nutella',    name: 'Nutella Cheesecake',    dietary: 'Eggless' },
    { id: 'cheesecake-biscoff',    name: 'Biscoff Cheesecake',    dietary: 'Eggless' },
    { id: 'cheesecake-blueberry',  name: 'Blueberry Cheesecake',  dietary: 'Eggless' },
    { id: 'cheesecake-mango',      name: 'Mango Cheesecake',      dietary: 'Eggless' },
  ]},

  { id: 'muffins', label: 'Butter Muffins', items: [
    { id: 'muffin-almond',    name: 'Almond Muffin',    dietary: 'Eggless' },
    { id: 'muffin-chocochip', name: 'Chocochip Muffin', dietary: 'Eggless' },
  ]},

  { id: 'cookies', label: 'NYC Cookies', items: [
    { id: 'cookie-double',    name: 'Double Chocolate Cookie', dietary: 'Contains Egg' },
    { id: 'cookie-chocochip', name: 'Chocochip Cookie',        dietary: 'Contains Egg' },
  ]},

  { id: 'cakes', label: 'Cakes', items: [
    { id: 'classic-vanilla',        name: 'Classic Vanilla Cake',               dietary: 'Eggless/Egg' },
    { id: 'biscoff-cake',           name: 'Biscoff Cake',                        dietary: 'Eggless/Egg' },
    { id: 'strawberry-cake',        name: 'Strawberry Cake',                     dietary: 'Eggless/Egg' },
    { id: 'blueberry-cake',         name: 'Blueberry Cake',                      dietary: 'Eggless/Egg' },
    { id: 'mango-cake',             name: 'Mango Cake',                          dietary: 'Eggless/Egg' },
    { id: 'chocolate-cake',         name: 'Chocolate Cake',                      dietary: 'Eggless/Egg' },
    { id: 'chocolate-mango-cake',   name: 'Chocolate & Mango Cake',              dietary: 'Eggless/Egg' },
    { id: 'red-velvet-cream-cheese', name: 'Red Velvet with Cream Cheese Cake',  dietary: 'Eggless/Egg' },
    { id: 'almond-praline',         name: 'Almond Praline Cake',                 dietary: 'Eggless/Egg' },
  ]},

  { id: 'breads', label: 'Breads', items: [
    { id: 'sourdough',         name: 'Sourdough Bread',   dietary: 'Eggless' },
    { id: 'whole-wheat-bread', name: 'Whole Wheat Bread', dietary: 'Eggless' },
    { id: 'shokupan-bread',    name: 'Shokupan Bread',    dietary: 'Eggless' },
  ]},

  { id: 'loafs', label: 'Loafs', items: [
    { id: 'banana-chocochip',  name: 'Banana Chocochip Loaf', dietary: 'Eggless' },
    { id: 'banana-walnut',     name: 'Banana Walnut Loaf',    dietary: 'Eggless' },
    { id: 'chocolate',         name: 'Chocolate Loaf',         dietary: 'Eggless' },
    { id: 'vanilla',           name: 'Vanilla Loaf',           dietary: 'Eggless' },
    { id: 'carrot-creamcheese', name: 'Carrot Creamcheese',    dietary: 'Eggless' },
    { id: 'marble',            name: 'Marble Loaf',            dietary: 'Eggless' },
    { id: 'lemon',             name: 'Lemon Loaf',             dietary: 'Eggless' },
  ]},

  {
    id: 'special',
    label: 'Special Items',
    description: 'Contact for flavours, quantity and availability',
    items: [
      { id: 'babka',         name: 'Chocolate Babka',    dietary: 'Contains Egg' },
      { id: 'macaroons',     name: 'Assorted Macaroons', dietary: 'Contains Egg' },
      { id: 'tresleches',    name: 'Tres Leches',         dietary: 'Eggless' },
      { id: 'cinnamon-roll', name: 'Cinammon Roll',       dietary: 'Contains Egg' },
      { id: 'granola',       name: 'Granola',             dietary: 'Eggless' },
      { id: 'overnight-oats', name: 'Overnight Oats',    dietary: 'Eggless' },
      { id: 'pudding',       name: 'Pudding',             dietary: 'Eggless' },
    ],
  },
];
