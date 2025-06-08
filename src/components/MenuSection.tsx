'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const menuCategories = [
  {
    id: 'all',
    label: 'All Items',
    items: [] // This will be populated dynamically
  },
  {
    id: 'buns',
    label: 'Buns',
    items: [
      { id: 'korean-cream-cheese', name: 'Korean Cream Cheese Buns', dietary: 'Eggless' },
      { id: 'cream-buns', name: 'Cream Buns', dietary: 'Eggless' }
    ]
  },
  {
    id: 'bombolinis',
    label: 'Bombolinis (Limited stock!)',
    items: [
      { id: 'bombolini-dark', name: 'Dark Chocolate Bombolini', dietary: 'Eggless' },
      { id: 'bombolini-milk', name: 'Milk Chocolate Bombolini', dietary: 'Eggless' },
      { id: 'bombolini-white', name: 'White Chocolate Bombolini', dietary: 'Eggless' },
      { id: 'bombolini-mango', name: 'Mango Cream Bombolini', dietary: 'Eggless' },
      { id: 'bombolini-strawberry', name: 'Strawberry Bombolini', dietary: 'Eggless' },
      { id: 'bombolini-blueberry', name: 'Blueberry Bombolini', dietary: 'Eggless' },
      { id: 'bombolini-nutella', name: 'Nutella Bombolini', dietary: 'Eggless' }
    ]
  },
  {
    id: 'brownies',
    label: 'Brownies',
    items: [
      { id: 'brownie-classic', name: 'Classic Brownie', dietary: 'Eggless' },
      { id: 'brownie-cookie', name: 'Cookie Crumble Brownie', dietary: 'Eggless' },
      { id: 'brownie-double', name: 'Double Chocolate Brownie', dietary: 'Eggless' },
      { id: 'brownie-nutella', name: 'Nutella Brownie', dietary: 'Eggless' },
      { id: 'brownie-biscoff', name: 'Biscoff Brownie', dietary: 'Eggless' }
    ]
  },
  {
    id: 'cheesecake',
    label: 'NYC-style Cheesecake',
    items: [
      { id: 'cheesecake-plain', name: 'Plain Cheesecake', dietary: 'Eggless' },
      { id: 'cheesecake-nutella', name: 'Nutella Cheesecake', dietary: 'Eggless' },
      { id: 'cheesecake-biscoff', name: 'Biscoff Cheesecake', dietary: 'Eggless' },
      { id: 'cheesecake-blueberry', name: 'Blueberry Cheesecake', dietary: 'Eggless' },
      { id: 'cheesecake-mango', name: 'Mango Cheesecake', dietary: 'Eggless' }
    ]
  },
  {
    id: 'muffins',
    label: 'Butter Muffins',
    items: [
      { id: 'muffin-almond', name: 'Almond Muffin', dietary: 'Eggless' },
      { id: 'muffin-chocochip', name: 'Chocochip Muffin', dietary: 'Eggless' }
    ]
  },
  {
    id: 'cookies',
    label: 'NYC Cookies',
    items: [
      { id: 'cookie-double', name: 'Double Chocolate Cookie', dietary: 'Contains Egg' },
      { id: 'cookie-chocochip', name: 'Chocochip Cookie', dietary: 'Contains Egg' }
    ]
  },
  {
    id: 'cakes',
    label: 'Cakes',
    description: '',
    items: [
      { id: 'classic-vanilla', name: 'Classic Vanilla Cake', dietary: '' },
      { id: 'biscoff-cake', name: 'Biscoff Cake', dietary: '' },
      { id: 'strawberry-cake', name: 'Strawberry Cake', dietary: '' },
      { id: 'blueberry-cake', name: 'Blueberry Cake', dietary: '' },
      { id: 'mango-cake', name: 'Mango Cake', dietary: '' },
      { id: 'chocolate-cake', name: 'Chocolate Cake', dietary: '' },
      { id: 'chocolate-mango-cake', name: 'Chocolate & Mango Cake', dietary: '' },
      { id: 'red-velvet-cream-cheese', name: 'Red Velvet with Cream Cheese Cake', dietary: '' },
      { id: 'almond-praline', name: 'Almond Praline Cake', dietary: '' },
    ]
  },
  {
    id: 'cheesecakes',
    label: 'Cheesecakes',
    description: '',
    items: [
      { id: 'plain-cheesecake', name: 'Plain Cheesecake', dietary: '' },
      { id: 'nutella-topping', name: 'Nutella Cheesecake', dietary: '' },
      { id: 'biscoff-topping', name: 'Biscoff Cheesecake', dietary: '' },
      { id: 'blueberry-topping', name: 'Blueberry Cheesecake', dietary: '' },
      { id: 'mango-topping', name: 'Mango Cheesecake (limited edition)', dietary: '' },
    ]
  },
  {
    id: 'breads',
    label: 'Breads',
    description: '',
    items: [
      { id: 'sourdough', name: 'Sourdough Cheesecake', dietary: '' },
      { id: 'whole-wheat-bread', name: 'Whole Wheat Bread', dietary: '' },
      { id: 'shokupan-bread', name: 'Shokupan Bread', dietary: '' },
    ]
  }
];

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0].id);
  const [showEgglessOnly, setShowEgglessOnly] = useState(false);

  // Get all items from all categories
  const allItems = menuCategories
    .filter(category => category.id !== 'all')
    .flatMap(category => category.items);

  // Update the 'all' category items
  menuCategories[0].items = allItems;

  // Filter items based on category and eggless preference
  const getFilteredItems = () => {
    const categoryItems = menuCategories
      .find((category) => category.id === activeCategory)
      ?.items || [];

    return showEgglessOnly
      ? categoryItems.filter(item => item.dietary === 'Eggless')
      : categoryItems;
  };

  const currentCategory = menuCategories.find((category) => category.id === activeCategory);

  return (
    <section id="menu" className="py-20 bg-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Our Menu
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
            All items are made fresh to order with a minimum 24-hour notice.
            Browse our selection of delicious treats below.
          </p>

          {/* Filter Buttons */}
          <div className="flex justify-center mb-8">
            <motion.button
              onClick={() => setShowEgglessOnly(!showEgglessOnly)}
              className={`px-6 py-2 rounded-full text-lg font-medium transition-colors ${
                showEgglessOnly
                  ? 'bg-green-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-green-100'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {showEgglessOnly ? '🍳 Show All Items' : '🥚 Show Eggless Only'}
            </motion.button>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {menuCategories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full text-lg font-medium transition-colors ${
                  activeCategory === category.id
                    ? 'bg-pink-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-pink-100'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.label}
              </motion.button>
            ))}
          </div>

          {/* Description */}
          {currentCategory?.description && (
            <p className="text-sm text-pink-700 mb-6 font-medium">{currentCategory.description}</p>
          )}

          {/* Menu Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getFilteredItems().map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {item.name}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-500 mb-4">
                    {item.dietary}
                  </p>
                  {item.id.includes('bombolini') && (
                    <p className="text-sm text-pink-600 font-medium">
                      Limited stock available!
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Order Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <a
              href="#order"
              className="inline-block bg-pink-600 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-pink-700 transition-colors"
            >
              Place Your Order
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 