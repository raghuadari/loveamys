'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const menuCategories = [
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
    id: 'cakes',
    label: 'Cakes',
    items: [
      { id: 'classic-vanilla', name: 'Classic Vanilla Cake', dietary: '' },
      { id: 'biscoff-cake', name: 'Biscoff Cake', dietary: '' },
      { id: 'strawberry-cake', name: 'Strawberry Cake', dietary: '' },
      { id: 'blueberry-cake', name: 'Blueberry Cake', dietary: '' },
      { id: 'mango-cake', name: 'Mango Cake', dietary: '' },
      { id: 'chocolate-cake', name: 'Chocolate Cake', dietary: '' },
      { id: 'chocolate-mango-cake', name: 'Chocolate & Mango Cake', dietary: '' },
      { id: 'red-velvet-cream-cheese', name: 'Red Velvet with Cream Cheese Cake', dietary: '' },
      { id: 'almond-praline', name: 'Almond Praline Cake', dietary: '' }
    ]
  },
  {
    id: 'cheesecakes',
    label: 'Cheesecakes',
    items: [
      { id: 'plain-cheesecake', name: 'Plain Cheesecake', dietary: '' },
      { id: 'nutella-topping', name: 'Nutella Cheesecake', dietary: '' },
      { id: 'biscoff-topping', name: 'Biscoff Cheesecake', dietary: '' },
      { id: 'blueberry-topping', name: 'Blueberry Cheesecake', dietary: '' },
      { id: 'mango-topping', name: 'Mango Cheesecake (limited edition)', dietary: '' }
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
    id: 'breads',
    label: 'Breads',
    items: [
      { id: 'sourdough', name: 'Sourdough', dietary: '' },
      { id: 'whole-wheat-bread', name: 'Whole Wheat Bread', dietary: '' },
      { id: 'shokupan-bread', name: 'Shokupan Bread', dietary: '' }
    ]
  }
];

export default function OrderForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: '',
    item: '',
    date: '',
    quantity: '1',
    details: '',
    dietary: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      const response = await fetch('/.netlify/functions/send-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit order');
      }

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        category: '',
        item: '',
        date: '',
        quantity: '1',
        details: '',
        dietary: ''
      });
    } catch (error) {
      console.error('Error submitting order:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const selectedCategory = menuCategories.find(cat => cat.id === formData.category);
  const selectedItem = selectedCategory?.items.find(item => item.id === formData.item);

  return (
    <section id="order" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Place Your Order
          </h2>
          <div className="mb-8">
            <p className="text-lg text-gray-600 mb-4 max-w-2xl mx-auto">
              Ready to order? Fill out the form below and we'll get back to you within 24 hours to confirm your order details.
            </p>
            <div className="bg-pink-50 border border-pink-200 rounded-lg p-4 max-w-2xl mx-auto">
              <p className="text-pink-700 font-medium flex items-center justify-center gap-2">
                <span className="text-xl">✨</span>
                All items are made fresh to order with a minimum 24-hour notice
                <span className="text-xl">✨</span>
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 text-left">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                />
              </div>

              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                  Category *
                </label>
                <select
                  id="category"
                  name="category"
                  required
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                >
                  <option value="">Select a category</option>
                  {menuCategories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="item" className="block text-sm font-medium text-gray-700 mb-1">
                  Item *
                </label>
                <select
                  id="item"
                  name="item"
                  required
                  value={formData.item}
                  onChange={handleChange}
                  disabled={!formData.category}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 disabled:bg-gray-100"
                >
                  <option value="">Select an item</option>
                  {selectedCategory?.items.map(item => (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                  Preferred Pickup/Delivery Date *
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  required
                  value={formData.date}
                  onChange={handleChange}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                />
              </div>

              <div>
                <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">
                  Quantity
                </label>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  min="1"
                  value={formData.quantity}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                />
              </div>
            </div>

            {selectedItem && selectedCategory && (
              <div className="bg-pink-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Selected Item:</span> {selectedItem.name}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Dietary:</span> {selectedItem.dietary}
                </p>
                {selectedCategory.id === 'bombolinis' && (
                  <p className="text-sm text-pink-600 font-medium mt-1">
                    Note: Limited stock available!
                  </p>
                )}
              </div>
            )}

            <div>
              <label htmlFor="details" className="block text-sm font-medium text-gray-700 mb-1">
                Additional Details
              </label>
              <textarea
                id="details"
                name="details"
                rows={4}
                value={formData.details}
                onChange={handleChange}
                placeholder="Please provide any specific details about your order, such as dietary restrictions, special requests, or delivery instructions..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
              />
            </div>

            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-50 text-green-800 p-4 rounded-lg"
              >
                Thank you for your order! We'll contact you shortly to confirm the details.
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-50 text-red-800 p-4 rounded-lg"
              >
                There was an error submitting your order. Please try again.
              </motion.div>
            )}

            <div className="text-center">
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`px-8 py-3 bg-pink-600 text-white rounded-full text-lg font-medium transition-colors ${
                  isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:bg-pink-700'
                }`}
              >
                {isSubmitting ? 'Submitting...' : 'Place Order'}
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
} 