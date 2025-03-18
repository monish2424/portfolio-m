import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

export const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formState);
  };

  return (
    <motion.form
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto space-y-6"
    >
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-300">
          Name
        </label>
        <input
          type="text"
          id="name"
          value={formState.name}
          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
          className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-gray-100 focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50"
          required
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={formState.email}
          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
          className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-gray-100 focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50"
          required
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          value={formState.message}
          onChange={(e) => setFormState({ ...formState, message: e.target.value })}
          className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-gray-100 focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50"
          required
        />
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        type="submit"
        className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
      >
        <Send className="w-5 h-5 mr-2" />
        Send Message
      </motion.button>
    </motion.form>
  );
};