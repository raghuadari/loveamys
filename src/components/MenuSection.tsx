'use client';

import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import LoadingSpinner from './LoadingSpinner';

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
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  // Monitor state changes
  useEffect(() => {
    console.log('State changed - activeCategory:', activeCategory, 'showEgglessOnly:', showEgglessOnly, 'searchQuery:', searchQuery);
  }, [activeCategory, showEgglessOnly, searchQuery]);

  // Debounced search effect
  useEffect(() => {
    if (searchQuery.trim()) {
      setIsSearching(true);
      const timer = setTimeout(() => {
        setIsSearching(false);
      }, 300);
      return () => clearTimeout(timer);
    } else {
      setIsSearching(false);
    }
  }, [searchQuery]);

  // Simulate loading on category change
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [activeCategory]);

  // Log menu data structure on mount
  useEffect(() => {
    console.log('=== MENU DATA STRUCTURE ===');
    console.log('Total categories:', menuCategories.length);
    menuCategories.forEach(category => {
      console.log(`${category.label} (${category.id}): ${category.items.length} items`);
    });
    console.log('=== END MENU DATA ===');
  }, []);

  // Keyboard navigation for category tabs
  const handleKeyDown = (event: React.KeyboardEvent, categoryId: string) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setActiveCategory(categoryId);
    }
  };

  // Keyboard navigation for filter buttons
  const handleFilterKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setShowEgglessOnly(!showEgglessOnly);
    }
  };

  // Memoized filtered items - this ensures React re-renders when state changes
  const filteredItems = useMemo(() => {
    console.log('=== FILTERING DEBUG ===');
    console.log('Active category:', activeCategory);
    console.log('Show eggless only:', showEgglessOnly);
    console.log('Search query:', searchQuery);
    
    let items: any[] = [];

    // Step 1: Get items based on category
    if (activeCategory === 'all') {
      console.log('Getting all items from all categories');
      // Get all items from all categories except 'all'
      const allCategories = menuCategories.filter(category => category.id !== 'all');
      console.log('Categories to process:', allCategories.map(c => c.label));
      
      items = allCategories.flatMap(category => {
        const categoryItems = category.items.map(item => ({
          ...item,
          category: category.label,
          quantity: 1
        }));
        console.log(`Items from ${category.label}:`, categoryItems.length);
        return categoryItems;
      });
    } else {
      console.log('Getting items from specific category:', activeCategory);
      const selectedCategory = menuCategories.find(cat => cat.id === activeCategory);
      if (selectedCategory) {
        items = selectedCategory.items.map(item => ({
          ...item,
          category: selectedCategory.label,
          quantity: 1
        }));
        console.log(`Items from ${selectedCategory.label}:`, items.length);
      } else {
        console.log('Selected category not found!');
      }
    }

    console.log('Items after category filtering:', items.length);

    // Step 2: Apply dietary filter
    if (showEgglessOnly) {
      console.log('Applying eggless filter...');
      const beforeCount = items.length;
      items = items.filter(item => {
        const isEggless = item.dietary && item.dietary.toLowerCase().includes('eggless');
        console.log(`${item.name}: ${item.dietary} -> ${isEggless ? 'INCLUDED' : 'EXCLUDED'}`);
        return isEggless;
      });
      console.log(`Eggless filter: ${beforeCount} -> ${items.length} items`);
    }

    // Step 3: Apply search filter
    if (searchQuery.trim()) {
      console.log('Applying search filter...');
      const beforeCount = items.length;
      const query = searchQuery.toLowerCase().trim();
      items = items.filter(item => {
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesCategory = item.category.toLowerCase().includes(query);
        const matchesDietary = item.dietary.toLowerCase().includes(query);
        const isMatch = matchesName || matchesCategory || matchesDietary;
        console.log(`${item.name}: ${isMatch ? 'MATCH' : 'NO MATCH'} (name: ${matchesName}, category: ${matchesCategory}, dietary: ${matchesDietary})`);
        return isMatch;
      });
      console.log(`Search filter: ${beforeCount} -> ${items.length} items`);
    }

    console.log('Final filtered items:', items);
    console.log('=== END FILTERING DEBUG ===');
    
    return items;
  }, [activeCategory, showEgglessOnly, searchQuery]); // Added searchQuery to dependencies

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
      .join('\n')}\n\nPlease let me know the availability, price and delivery details.`;
    
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

          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search by name, category, or dietary preference..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pl-12 pr-4 text-lg border-2 border-gray-200 rounded-full focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition-colors"
                aria-label="Search menu items"
              />
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                {isSearching ? (
                  <LoadingSpinner size="sm" color="pink" />
                ) : (
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                )}
              </div>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 focus:outline-none focus:text-gray-600 transition-colors"
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
                className="text-sm text-gray-600 mt-2 text-center"
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
              className={`px-6 py-3 rounded-full text-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 min-h-[48px] ${
                showEgglessOnly
                  ? 'bg-green-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-green-100'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onKeyDown={handleFilterKeyDown}
              tabIndex={0}
              role="button"
              aria-pressed={showEgglessOnly}
              aria-label={showEgglessOnly ? 'Show all items' : 'Show eggless items only'}
            >
              {showEgglessOnly ? '🍳 Show All Items' : '🥚 Show Eggless Only'}
            </motion.button>
            {selectedItems.length > 0 && (
              <motion.button
                onClick={() => setSelectedItems([])}
                className="px-6 py-3 rounded-full text-lg font-medium bg-red-100 text-red-700 hover:bg-red-200 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 min-h-[48px]"
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
          <div className="flex flex-nowrap overflow-x-auto scrollbar-thin scrollbar-thumb-pink-200 scrollbar-track-pink-50 sticky top-16 z-30 bg-pink-50/95 rounded-xl shadow-sm mb-12 gap-2 md:gap-4 px-2 md:px-0" role="tablist" aria-label="Menu categories">
            {menuCategories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex-shrink-0 px-6 py-3 md:py-2 rounded-full text-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 ${
                  activeCategory === category.id
                    ? 'bg-pink-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-pink-100'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                tabIndex={0}
                role="tab"
                aria-selected={activeCategory === category.id}
                aria-controls={`menu-panel-${category.id}`}
                onKeyDown={(event: React.KeyboardEvent) => handleKeyDown(event, category.id)}
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8" role="tabpanel" id={`menu-panel-${activeCategory}`} aria-label={`${currentCategory?.label || 'Menu'} items`}>
            {isLoading ? (
              <div className="col-span-full flex justify-center items-center py-16">
                <LoadingSpinner size="lg" color="pink" text="Loading menu items..." />
              </div>
            ) : filteredItems.length > 0 ? (
              <AnimatePresence mode="wait">
                {filteredItems.map((item, index) => {
                  const selectedItem = selectedItems.find(selected => selected.id === item.id);
                  const isSelected = !!selectedItem;
                  return (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -20, scale: 0.95 }}
                      transition={{ 
                        duration: 0.4, 
                        delay: index * 0.1,
                        ease: [0.4, 0, 0.2, 1]
                      }}
                      whileHover={{ 
                        y: -5, 
                        scale: 1.02,
                        transition: { duration: 0.2 }
                      }}
                      className={`bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transition-all min-h-[200px] md:min-h-[180px] ${
                        isSelected ? 'ring-2 ring-green-500 shadow-xl' : 'hover:shadow-xl'
                      }`}
                      onClick={() => toggleItemSelection(item)}
                      onKeyDown={(event: React.KeyboardEvent) => {
                        if (event.key === 'Enter' || event.key === ' ') {
                          event.preventDefault();
                          toggleItemSelection(item);
                        }
                      }}
                      tabIndex={0}
                      role="button"
                      aria-label={`${item.name} - ${item.dietary}. Click to ${isSelected ? 'deselect' : 'select'} item`}
                      aria-pressed={isSelected}
                    >
                      <div className="p-4 md:p-6 h-full flex flex-col justify-between">
                        <div className="flex flex-col items-center text-center mb-2">
                          <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                            {item.name}
                          </h3>
                          <div className="flex items-center gap-2 mb-2">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              item.dietary.toLowerCase().includes('eggless') 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-orange-100 text-orange-800'
                            }`}>
                              {item.dietary}
                            </span>
                            {isSelected && (
                              <motion.span 
                                className="text-green-500 text-xl"
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
                            onClick={(e: React.MouseEvent) => e.stopPropagation()} // Prevent item deselection when clicking quantity controls
                          >
                            <button
                              onClick={() => updateItemQuantity(item.id, (selectedItem?.quantity || 1) - 1)}
                              className="w-10 h-10 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center hover:bg-pink-200 transition-colors focus:outline-none focus:ring-2 focus:ring-pink-500"
                              aria-label="Decrease quantity"
                            >
                              -
                            </button>
                            <span className="text-lg font-medium text-gray-900 min-w-[2rem] text-center">
                              {selectedItem?.quantity || 1}
                            </span>
                            <button
                              onClick={() => updateItemQuantity(item.id, (selectedItem?.quantity || 1) + 1)}
                              className="w-10 h-10 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center hover:bg-pink-200 transition-colors focus:outline-none focus:ring-2 focus:ring-pink-500"
                              aria-label="Increase quantity"
                            >
                              +
                            </button>
                          </motion.div>
                        )}
                        <p className="text-sm text-pink-600 text-center mt-auto">
                          Click to {isSelected ? 'deselect' : 'select'} item
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
                >
                  🔍
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  No items found
                </h3>
                <p className="text-gray-600 mb-4">
                  {searchQuery 
                    ? `No items match "${searchQuery}". Try adjusting your search or filters.`
                    : 'No items available in this category with the current filters.'
                  }
                </p>
                {(searchQuery || showEgglessOnly) && (
                  <motion.button
                    onClick={() => {
                      setSearchQuery('');
                      setShowEgglessOnly(false);
                      setActiveCategory('all');
                    }}
                    className="px-6 py-2 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition-colors focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
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