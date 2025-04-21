import React from 'react';
import { motion } from 'framer-motion';
import Header from './Header';
import MainContent from './MainContent';

const CV: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-6xl mx-auto p-4 sm:p-6 md:p-8 font-sans"
    >
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden">
        <Header />
        <MainContent />
      </div>
      <footer className="text-center text-sm text-gray-500 dark:text-gray-400 mt-6">
        &copy; {new Date().getFullYear()} Aldin Nezirić - All Rights Reserved
      </footer>
    </motion.div>
  );
};

export default CV;