import React from 'react';
import { motion } from 'framer-motion';

export const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 bg-gray-900 flex items-center justify-center z-50">
      <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full"
      />
    </div>
  );
};