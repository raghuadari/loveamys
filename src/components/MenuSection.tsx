'use client';

import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import LoadingSpinner from './LoadingSpinner';
<<<<<<< HEAD

interface MenuItem {
  id: string;
  name: string;
  dietary: string;
  category: string;
  quantity: number;
}

const menuCategories = [
  { id: 'all', label: 'All Items', items: [] },
  { id: 'buns', label: 'Buns', items: [
    { id: 'korean-cream-cheese', name: 'Korean Cream Cheese Buns', dietary: 'Eggless' },
    { id: 'cream-buns', name: 'Cream Buns', dietary: 'Eggless' }
  ]},
  { id: 'bombolinis', label: 'Bombolinis', items: [
    { id: 'bombolini-dark', name: 'Dark Chocolate Bombolini', dietary: 'Eggless' },
    { id: 'bombolini-milk', name: 'Milk Chocolate Bombolini', dietary: 'Eggless' },
    { id: 'bombolini-white', name: 'White Chocolate Bombolini', dietary: 'Eggless' },
    { id: 'bombolini-mango', name: 'Mango Cream Bombolini', dietary: 'Eggless' },
    { id: 'bombolini-strawberry', name: 'Strawberry Bombolini', dietary: 'Eggless' },
    { id: 'bombolini-blueberry', name: 'Blueberry Bombolini', dietary: 'Eggless' },
    { id: 'bombolini-nutella', name: 'Nutella Bombolini', dietary: 'Eggless' }
  ]},
  { id: 'brownies', label: 'Brownies', items: [
    { id: 'brownie-classic', name: 'Classic Brownie', dietary: 'Eggless' },
    { id: 'brownie-cookie', name: 'Cookie Crumble Brownie', dietary: 'Eggless' },
    { id: 'brownie-double', name: 'Double Chocolate Brownie', dietary: 'Eggless' },
    { id: 'brownie-nutella', name: 'Nutella Brownie', dietary: 'Eggless' },
    { id: 'brownie-biscoff', name: 'Biscoff Brownie', dietary: 'Eggless' }
  ]},
  { id: 'cheesecake', label: 'NYC-style Cheesecake', items: [
    { id: 'cheesecake-plain', name: 'Plain Cheesecake', dietary: 'Eggless' },
    { id: 'cheesecake-nutella', name: 'Nutella Cheesecake', dietary: 'Eggless' },
    { id: 'cheesecake-biscoff', name: 'Biscoff Cheesecake', dietary: 'Eggless' },
    { id: 'cheesecake-blueberry', name: 'Blueberry Cheesecake', dietary: 'Eggless' },
    { id: 'cheesecake-mango', name: 'Mango Cheesecake', dietary: 'Eggless' }
  ]},
  { id: 'muffins', label: 'Butter Muffins', items: [
    { id: 'muffin-almond', name: 'Almond Muffin', dietary: 'Eggless' },
    { id: 'muffin-chocochip', name: 'Chocochip Muffin', dietary: 'Eggless' }
  ]},
  { id: 'cookies', label: 'NYC Cookies', items: [
    { id: 'cookie-double', name: 'Double Chocolate Cookie', dietary: 'Contains Egg' },
    { id: 'cookie-chocochip', name: 'Chocochip Cookie', dietary: 'Contains Egg' }
  ]},
  { id: 'cakes', label: 'Cakes', items: [
    { id: 'classic-vanilla', name: 'Classic Vanilla Cake', dietary: 'Eggless/Egg' },
    { id: 'biscoff-cake', name: 'Biscoff Cake', dietary: 'Eggless/Egg' },
    { id: 'strawberry-cake', name: 'Strawberry Cake', dietary: 'Eggless/Egg' },
    { id: 'blueberry-cake', name: 'Blueberry Cake', dietary: 'Eggless/Egg' },
    { id: 'mango-cake', name: 'Mango Cake', dietary: 'Eggless/Egg' },
    { id: 'chocolate-cake', name: 'Chocolate Cake', dietary: 'Eggless/Egg' },
    { id: 'chocolate-mango-cake', name: 'Chocolate & Mango Cake', dietary: 'Eggless/Egg' },
    { id: 'red-velvet-cream-cheese', name: 'Red Velvet with Cream Cheese Cake', dietary: 'Eggless/Egg' },
    { id: 'almond-praline', name: 'Almond Praline Cake', dietary: 'Eggless/Egg' },
  ]},
  { id: 'cheesecakes', label: 'Cheesecakes', items: [
    { id: 'plain-cheesecake', name: 'Plain Cheesecake', dietary: 'Eggless' },
    { id: 'nutella-topping', name: 'Nutella Cheesecake', dietary: 'Eggless' },
    { id: 'biscoff-topping', name: 'Biscoff Cheesecake', dietary: 'Eggless' },
    { id: 'blueberry-topping', name: 'Blueberry Cheesecake', dietary: 'Eggless' },
    { id: 'mango-topping', name: 'Mango Cheesecake (limited edition)', dietary: 'Eggless' },
  ]},
  { id: 'breads', label: 'Breads', items: [
    { id: 'sourdough', name: 'Sourdough Cheesecake', dietary: 'Eggless' },
    { id: 'whole-wheat-bread', name: 'Whole Wheat Bread', dietary: 'Eggless' },
    { id: 'shokupan-bread', name: 'Shokupan Bread', dietary: 'Eggless' },
  ]},
  { id: 'loafs', label: 'Loafs', items: [
    { id: 'banana-chocochip', name: 'Banana Chocochip Loaf', dietary: 'Eggless' },
    { id: 'banana-walnut', name: 'Banana Walnut Loaf', dietary: 'Eggless' },
    { id: 'chocolate', name: 'Chocolate Loaf', dietary: 'Eggless' },
    { id: 'vanilla', name: 'Vanilla Loaf', dietary: 'Eggless' },
    { id: 'carrot-creamcheese', name: 'Carrot Creamcheese', dietary: 'Eggless' },
    { id: 'marble', name: 'Marble Loaf', dietary: 'Eggless' },
    { id: 'lemon', name: 'Lemon Loaf', dietary: 'Eggless' },
  ]},
  { id: 'special', label: 'Special Items', description: 'Contact for flavours, quantity and availability', items: [
    { id: 'babka', name: 'Chocolate Babka', dietary: 'Contains Egg' },
    { id: 'macaroons', name: 'Assorted Macaroons', dietary: 'Contains Egg' },
    { id: 'tresleches', name: 'Tres Leches', dietary: 'Eggless' },
    { id: 'cinnamon-roll', name: 'Cinammon Roll', dietary: 'Contains Egg' },
    { id: 'granola', name: 'Granola', dietary: 'Eggless' },
    { id: 'overnight-oats', name: 'Overnight Oats', dietary: 'Eggless' },
    { id: 'pudding', name: 'Pudding', dietary: 'Eggless' },
  ]}
];
=======
import { menuCategories, type MenuItem } from '@/data/menu';
import { BUSINESS } from '@/lib/business';
>>>>>>> 97d1e2c (refactor: tech debt cleanup — server components, single source of truth (business.ts, config.ts, data/menu.ts), dead file removal, aria labels, magic number constants)

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0].id);
  const [showEgglessOnly, setShowEgglessOnly] = useState(false);
  const [selectedItems, setSelectedItems] = useState<MenuItem[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    if (searchQuery.trim()) {
      setIsSearching(true);
      const timer = setTimeout(() => setIsSearching(false), 300);
      return () => clearTimeout(timer);
    } else {
      setIsSearching(false);
    }
  }, [searchQuery]);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, [activeCategory]);

  const handleKeyDown = (event: React.KeyboardEvent, categoryId: string) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setActiveCategory(categoryId);
    }
  };

  const handleFilterKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setShowEgglessOnly(!showEgglessOnly);
    }
  };

  const filteredItems = useMemo(() => {
<<<<<<< HEAD
    let items: any[] = [];
=======
    let items: MenuItem[] = [];
>>>>>>> 97d1e2c (refactor: tech debt cleanup — server components, single source of truth (business.ts, config.ts, data/menu.ts), dead file removal, aria labels, magic number constants)
    if (activeCategory === 'all') {
      items = menuCategories
        .filter(c => c.id !== 'all')
        .flatMap(c => c.items.map(item => ({ ...item, category: c.label, quantity: 1 })));
    } else {
      const cat = menuCategories.find(c => c.id === activeCategory);
      if (cat) items = cat.items.map(item => ({ ...item, category: cat.label, quantity: 1 }));
    }
    if (showEgglessOnly) items = items.filter(i => i.dietary?.toLowerCase().includes('eggless'));
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      items = items.filter(i =>
        i.name.toLowerCase().includes(q) ||
        i.category.toLowerCase().includes(q) ||
        i.dietary.toLowerCase().includes(q)
      );
    }
    return items;
  }, [activeCategory, showEgglessOnly, searchQuery]);

  const currentCategory = menuCategories.find(c => c.id === activeCategory);

  const toggleItemSelection = (item: MenuItem) => {
    const idx = selectedItems.findIndex(s => s.id === item.id);
    if (idx === -1) {
      setSelectedItems([...selectedItems, { ...item, quantity: 1 }]);
    } else {
      setSelectedItems(selectedItems.filter(s => s.id !== item.id));
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
      .join('\n')}\n\nPlease let me know the availability, price and delivery details.`;
<<<<<<< HEAD
    window.open(`https://wa.me/919059888990?text=${encodeURIComponent(message)}`, '_blank');
=======
    window.open(`https://wa.me/${BUSINESS.phone.wa}?text=${encodeURIComponent(message)}`, '_blank');
>>>>>>> 97d1e2c (refactor: tech debt cleanup — server components, single source of truth (business.ts, config.ts, data/menu.ts), dead file removal, aria labels, magic number constants)
    setSelectedItems([]);
  };

  return (
    <section id="menu" className="py-20 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-brand-deep mb-8">
            Our Menu
          </h2>
          <p className="text-lg text-brand-dark mb-12 max-w-3xl mx-auto">
<<<<<<< HEAD
            All items are made fresh to order with a minimum 24-hour notice.
            Browse our selection of delicious treats below.
=======
            Everything is made fresh to order — just give us 24 hours' notice.
>>>>>>> 97d1e2c (refactor: tech debt cleanup — server components, single source of truth (business.ts, config.ts, data/menu.ts), dead file removal, aria labels, magic number constants)
          </p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
<<<<<<< HEAD
                placeholder="Search by name, category, or dietary preference..."
=======
                placeholder="Search the menu…"
>>>>>>> 97d1e2c (refactor: tech debt cleanup — server components, single source of truth (business.ts, config.ts, data/menu.ts), dead file removal, aria labels, magic number constants)
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pl-12 pr-4 text-lg border-2 border-brand-light rounded-full focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-gold transition-colors bg-white"
                aria-label="Search menu items"
              />
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                {isSearching ? (
                  <LoadingSpinner size="sm" color="brand" />
                ) : (
                  <svg className="h-5 w-5 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                )}
              </div>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-brand-gold hover:text-brand-dark focus:outline-none transition-colors"
                  aria-label="Clear search"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
            {searchQuery && (
              <motion.p
                className="text-sm text-brand-dark mt-2 text-center"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {isSearching ? 'Searching...' : `Showing ${filteredItems.length} result${filteredItems.length !== 1 ? 's' : ''} for "${searchQuery}"`}
              </motion.p>
            )}
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <motion.button
              onClick={() => setShowEgglessOnly(!showEgglessOnly)}
              className={`px-6 py-3 rounded-full text-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2 min-h-[48px] ${
                showEgglessOnly
                  ? 'bg-brand-primary text-white'
                  : 'bg-white text-brand-dark hover:bg-brand-light'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onKeyDown={handleFilterKeyDown}
              tabIndex={0}
              role="button"
              aria-pressed={showEgglessOnly}
              aria-label={showEgglessOnly ? 'Show all items' : 'Show eggless items only'}
            >
<<<<<<< HEAD
              {showEgglessOnly ? '🍳 Show All Items' : '🥚 Show Eggless Only'}
=======
              {showEgglessOnly ? 'Show All Items' : '🌿 Eggless Only'}
>>>>>>> 97d1e2c (refactor: tech debt cleanup — server components, single source of truth (business.ts, config.ts, data/menu.ts), dead file removal, aria labels, magic number constants)
            </motion.button>
            {selectedItems.length > 0 && (
              <motion.button
                onClick={() => setSelectedItems([])}
                className="px-6 py-3 rounded-full text-lg font-medium bg-brand-light text-brand-deep hover:bg-brand-gold hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2 min-h-[48px]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                tabIndex={0}
                role="button"
                aria-label={`Clear selection of ${selectedItems.length} items`}
              >
                Clear Selection ({selectedItems.length})
              </motion.button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="relative sticky top-16 z-30 mb-12">
            <div
              className="flex flex-nowrap overflow-x-auto scrollbar-thin scrollbar-thumb-brand scrollbar-track-brand bg-brand-cream/95 rounded-xl shadow-sm gap-2 md:gap-4 px-2 md:px-4 py-1"
              role="tablist"
              aria-label="Menu categories"
            >
            {menuCategories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex-shrink-0 px-6 py-3 md:py-2 rounded-full text-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2 ${
                  activeCategory === category.id
                    ? 'bg-brand-primary text-white'
                    : 'bg-white text-brand-dark hover:bg-brand-light'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                tabIndex={0}
                role="tab"
                aria-selected={activeCategory === category.id}
                aria-controls={`menu-panel-${category.id}`}
                onKeyDown={(e: React.KeyboardEvent) => handleKeyDown(e, category.id)}
              >
                {category.label}
              </motion.button>
            ))}
            </div>
            {/* Right fade to hint at more tabs */}
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-brand-cream to-transparent pointer-events-none rounded-r-xl" />
          </div>

          {/* Category description */}
<<<<<<< HEAD
          {(currentCategory as any)?.description && (
            <p className="text-sm text-brand-primary mb-6 font-medium">{(currentCategory as any).description}</p>
=======
          {currentCategory?.description && (
            <p className="text-sm text-brand-primary mb-6 font-medium">{currentCategory.description}</p>
>>>>>>> 97d1e2c (refactor: tech debt cleanup — server components, single source of truth (business.ts, config.ts, data/menu.ts), dead file removal, aria labels, magic number constants)
          )}

          {/* Menu Items Grid */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8"
            role="tabpanel"
            id={`menu-panel-${activeCategory}`}
            aria-label={`${currentCategory?.label || 'Menu'} items`}
          >
            {isLoading ? (
              <div className="col-span-full flex justify-center items-center py-16">
                <LoadingSpinner size="lg" color="brand" text="Loading menu items..." />
              </div>
            ) : filteredItems.length > 0 ? (
              <AnimatePresence mode="wait">
                {filteredItems.map((item, index) => {
                  const selectedItem = selectedItems.find(s => s.id === item.id);
                  const isSelected = !!selectedItem;
                  return (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -20, scale: 0.95 }}
<<<<<<< HEAD
                      transition={{ duration: 0.4, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
=======
                      transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.4), ease: [0.4, 0, 0.2, 1] }}
>>>>>>> 97d1e2c (refactor: tech debt cleanup — server components, single source of truth (business.ts, config.ts, data/menu.ts), dead file removal, aria labels, magic number constants)
                      whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.2 } }}
                      className={`bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transition-all min-h-[200px] md:min-h-[180px] ${
                        isSelected ? 'ring-2 ring-brand-primary shadow-xl' : 'hover:shadow-xl'
                      }`}
                      onClick={() => toggleItemSelection(item)}
                      onKeyDown={(e: React.KeyboardEvent) => {
                        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleItemSelection(item); }
                      }}
                      tabIndex={0}
                      role="button"
                      aria-label={`${item.name} - ${item.dietary}. Click to ${isSelected ? 'deselect' : 'select'} item`}
                      aria-pressed={isSelected}
                    >
                      <div className="p-4 md:p-6 h-full flex flex-col justify-between">
                        <div className="flex flex-col items-center text-center mb-2">
                          <h3 className="text-lg md:text-xl font-semibold text-brand-deep mb-2">
                            {item.name}
                          </h3>
                          <div className="flex items-center gap-2 mb-2">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              item.dietary.toLowerCase().includes('eggless')
                                ? 'bg-brand-light text-brand-dark'
                                : 'bg-brand-gold/20 text-brand-dark'
                            }`}>
                              {item.dietary}
                            </span>
                            {isSelected && (
                              <motion.span
                                className="text-brand-primary text-xl"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                              >
                                ✓
                              </motion.span>
                            )}
                          </div>
                        </div>
                        {isSelected && (
                          <motion.div
                            className="flex items-center justify-center gap-3 mb-4"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            onClick={(e: React.MouseEvent) => e.stopPropagation()}
                          >
                            <button
                              onClick={() => updateItemQuantity(item.id, (selectedItem?.quantity || 1) - 1)}
                              className="w-10 h-10 rounded-full bg-brand-light text-brand-primary flex items-center justify-center hover:bg-brand-gold hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-brand-primary"
                              aria-label="Decrease quantity"
                            >-</button>
                            <span className="text-lg font-medium text-brand-deep min-w-[2rem] text-center">
                              {selectedItem?.quantity || 1}
                            </span>
                            <button
                              onClick={() => updateItemQuantity(item.id, (selectedItem?.quantity || 1) + 1)}
                              className="w-10 h-10 rounded-full bg-brand-light text-brand-primary flex items-center justify-center hover:bg-brand-gold hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-brand-primary"
                              aria-label="Increase quantity"
                            >+</button>
                          </motion.div>
                        )}
                        <p className="text-sm text-brand-primary text-center mt-auto">
<<<<<<< HEAD
                          {isSelected ? '✓ Added — tap to remove' : 'Tap to add to WhatsApp order'}
=======
                          {isSelected ? '✓ Added · tap to remove' : 'Add to order'}
>>>>>>> 97d1e2c (refactor: tech debt cleanup — server components, single source of truth (business.ts, config.ts, data/menu.ts), dead file removal, aria labels, magic number constants)
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            ) : (
              <motion.div
                className="col-span-full text-center py-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  className="text-6xl mb-4"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                >🔍</motion.div>
                <h3 className="text-xl font-semibold text-brand-deep mb-2">No items found</h3>
                <p className="text-brand-dark mb-4">
                  {searchQuery
                    ? `No items match "${searchQuery}". Try adjusting your search or filters.`
                    : 'No items available in this category with the current filters.'
                  }
                </p>
                {(searchQuery || showEgglessOnly) && (
                  <motion.button
                    onClick={() => { setSearchQuery(''); setShowEgglessOnly(false); setActiveCategory('all'); }}
                    className="px-6 py-2 bg-brand-primary text-white rounded-full hover:bg-brand-dark transition-colors focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Clear All Filters
                  </motion.button>
                )}
              </motion.div>
            )}
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
                  className="bg-brand-primary text-white px-8 py-4 rounded-full text-lg font-medium shadow-lg flex items-center gap-3 hover:bg-brand-dark transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-xl">📱</span>
<<<<<<< HEAD
                  Order {selectedItems.reduce((t, i) => t + i.quantity, 0)} Item{selectedItems.reduce((t, i) => t + i.quantity, 0) > 1 ? 's' : ''} on WhatsApp
=======
                  {(() => { const qty = selectedItems.reduce((t, i) => t + i.quantity, 0); return `Order ${qty} ${qty === 1 ? 'item' : 'items'} on WhatsApp 📱`; })()}
>>>>>>> 97d1e2c (refactor: tech debt cleanup — server components, single source of truth (business.ts, config.ts, data/menu.ts), dead file removal, aria labels, magic number constants)
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
