'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

interface MenuItem {
  id: string;
  name: string;
  dietary: string;
  category: string;
  quantity: number;
}

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
    label: 'Bombolinis',
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
      { id: 'classic-vanilla', name: 'Classic Vanilla Cake', dietary: 'Eggless/Egg' },
      { id: 'biscoff-cake', name: 'Biscoff Cake', dietary: 'Eggless/Egg' },
      { id: 'strawberry-cake', name: 'Strawberry Cake', dietary: 'Eggless/Egg' },
      { id: 'blueberry-cake', name: 'Blueberry Cake', dietary: 'Eggless/Egg' },
      { id: 'mango-cake', name: 'Mango Cake', dietary: 'Eggless/Egg' },
      { id: 'chocolate-cake', name: 'Chocolate Cake', dietary: 'Eggless/Egg' },
      { id: 'chocolate-mango-cake', name: 'Chocolate & Mango Cake', dietary: 'Eggless/Egg' },
      { id: 'red-velvet-cream-cheese', name: 'Red Velvet with Cream Cheese Cake', dietary: 'Eggless/Egg' },
      { id: 'almond-praline', name: 'Almond Praline Cake', dietary: 'Eggless/Egg' },
    ]
  },
  {
    id: 'cheesecakes',
    label: 'Cheesecakes',
    description: '',
    items: [
      { id: 'plain-cheesecake', name: 'Plain Cheesecake', dietary: 'Eggless' },
      { id: 'nutella-topping', name: 'Nutella Cheesecake', dietary: 'Eggless' },
      { id: 'biscoff-topping', name: 'Biscoff Cheesecake', dietary: 'Eggless' },
      { id: 'blueberry-topping', name: 'Blueberry Cheesecake', dietary: 'Eggless' },
      { id: 'mango-topping', name: 'Mango Cheesecake (limited edition)', dietary: 'Eggless' },
    ]
  },
  {
    id: 'breads',
    label: 'Breads',
    description: '',
    items: [
      { id: 'sourdough', name: 'Sourdough Cheesecake', dietary: 'Eggless' },
      { id: 'whole-wheat-bread', name: 'Whole Wheat Bread', dietary: 'Eggless' },
      { id: 'shokupan-bread', name: 'Shokupan Bread', dietary: 'Eggless' },
    ]
  },
  {
    id: 'loafs',
    label: 'Loafs',
    description: '',
    items: [
      { id: 'banana-chocochip', name: 'Banana Chocochip Loaf', dietary: 'Eggless' },
      { id: 'banana-walnut', name: 'Banana Walnut Loaf', dietary: 'Eggless' },
      { id: 'chocolate', name: 'Chocolate Loaf', dietary: 'Eggless' },
      { id: 'vanilla', name: 'Vanilla Loaf', dietary: 'Eggless' },
      { id: 'carrot-creamcheese', name: 'Carrot Creamcheese', dietary: 'Eggless' },
      { id: 'marble', name: 'Marble Loaf', dietary: 'Eggless' },
      { id: 'lemon', name: 'Lemon Loaf', dietary: 'Eggless' },
    ]
  },
  {
    id: 'special',
    label: 'Special Items',
    description: 'Contact for flavours, quantity and availability',
    items: [
      { id: 'babka', name: 'Chocolate Babka', dietary: 'Contains Egg' },
      { id: 'macaroons', name: 'Assorted Macaroons', dietary: 'Contains Egg'},
      { id: 'tresleches', name: 'Tres Leches', dietary: 'Eggless' },
      { id: 'cinnamon-roll', name: 'Cinammon Roll', dietary: 'Contains Egg' },
      { id: 'granola', name: 'Granola', dietary: 'Eggless' },
      { id: 'overnight-oats', name: 'Overnight Oats', dietary: 'Eggless' },
      { id: 'pudding', name: 'Pudding', dietary: 'Eggless' },

    ]
  }
];

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0].id);
  const [showEgglessOnly, setShowEgglessOnly] = useState(false);
  const [selectedItems, setSelectedItems] = useState<MenuItem[]>([]);

  // Get all items from all categories
  const allItems = menuCategories
    .filter(category => category.id !== 'all')
    .flatMap(category => category.items);

  // Update the 'all' category items
  menuCategories[0].items = allItems;

  // Filter items based on category and eggless preference
  const getFilteredItems = () => {
    const allItems = menuCategories.flatMap(category =>
      category.items.map(item => ({
        ...item,
        category: category.label,
        quantity: 1
      }))
    );

    return allItems.filter(item => {
      const matchesCategory = activeCategory === 'all' || item.category === menuCategories.find(cat => cat.id === activeCategory)?.label;
      const matchesDietary = !showEgglessOnly || item.dietary === 'Eggless';
      return matchesCategory && matchesDietary;
    });
  };

  const currentCategory = menuCategories.find((category) => category.id === activeCategory);

  const toggleItemSelection = (item: MenuItem) => {
    const existingItemIndex = selectedItems.findIndex(selected => selected.id === item.id);
    
    if (existingItemIndex === -1) {
      // Add new item with quantity 1
      setSelectedItems([...selectedItems, { ...item, quantity: 1 }]);
    } else {
      // Remove item if it exists
      setSelectedItems(selectedItems.filter(selected => selected.id !== item.id));
    }
  };

  const updateItemQuantity = (itemId: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    setSelectedItems(selectedItems.map(item => 
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    ));
  };

  const handleOrderClick = () => {
    if (selectedItems.length === 0) return;

    const message = `Hi! I'd like to place an order for:\n\n${selectedItems
      .map(item => `• ${item.name} (${item.category}) - Quantity: ${item.quantity}`)
      .join('\n')}\n\nPlease let me know the availability and details.`;
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/919059888990?text=${encodedMessage}`, '_blank');
    setSelectedItems([]); // Clear selection after sending
  };

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
          <div className="flex justify-center gap-4 mb-8">
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
            {selectedItems.length > 0 && (
              <motion.button
                onClick={() => setSelectedItems([])}
                className="px-6 py-2 rounded-full text-lg font-medium bg-red-100 text-red-700 hover:bg-red-200 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                Clear Selection ({selectedItems.length})
              </motion.button>
            )}
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
            {getFilteredItems().map((item) => {
              const selectedItem = selectedItems.find(selected => selected.id === item.id);
              const isSelected = !!selectedItem;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className={`bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transition-all ${
                    isSelected ? 'ring-2 ring-green-500' : ''
                  }`}
                  onClick={() => toggleItemSelection(item)}
                >
                  <div className="p-6">
                    <div className="flex flex-col items-center text-center mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">
                        {item.name}
                      </h3>
                      {isSelected && (
                        <span className="text-green-500 text-xl mt-2">✓</span>
                      )}
                    </div>
                    <p className="text-sm text-gray-500 mb-4 text-center">
                      {item.dietary}
                    </p>
                    {isSelected && (
                      <div 
                        className="flex items-center justify-center gap-3 mb-4"
                        onClick={(e) => e.stopPropagation()} // Prevent item deselection when clicking quantity controls
                      >
                        <button
                          onClick={() => updateItemQuantity(item.id, (selectedItem?.quantity || 1) - 1)}
                          className="w-8 h-8 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center hover:bg-pink-200 transition-colors"
                        >
                          -
                        </button>
                        <span className="text-lg font-medium text-gray-900">
                          {selectedItem?.quantity || 1}
                        </span>
                        <button
                          onClick={() => updateItemQuantity(item.id, (selectedItem?.quantity || 1) + 1)}
                          className="w-8 h-8 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center hover:bg-pink-200 transition-colors"
                        >
                          +
                        </button>
                      </div>
                    )}
                    <p className="text-sm text-pink-600 text-center">
                      Click to {isSelected ? 'deselect' : 'select'} item
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Floating Order Button */}
          <AnimatePresence>
            {selectedItems.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="fixed bottom-8 right-8 z-50"
              >
                <motion.button
                  onClick={handleOrderClick}
                  className="bg-green-500 text-white px-8 py-4 rounded-full text-lg font-medium shadow-lg flex items-center gap-3 hover:bg-green-600 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-xl">📱</span>
                  Order {selectedItems.reduce((total, item) => total + item.quantity, 0)} Item{selectedItems.reduce((total, item) => total + item.quantity, 0) > 1 ? 's' : ''} on WhatsApp
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
} 