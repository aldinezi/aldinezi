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
      className="max-w-6xl mx-auto p-4 sm:p-6 md:p-8 font-sans print:p-0 print:m-0"
    >
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden print:shadow-none print:rounded-none print:border-none">
        <Header />
        <MainContent />
      </div>
      <footer className="text-center text-sm text-gray-500 dark:text-gray-400 mt-6 print:hidden">
        &copy; {new Date().getFullYear()} Aldin Nezirić - All Rights Reserved
      </footer>
    </motion.div>
  );
};

export default CV;