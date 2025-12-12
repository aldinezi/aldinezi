import React from 'react';
import { Mail, Phone, Github as GitHub, Linkedin, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import profileImage from '../profile.jpeg';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-blue-100 to-blue-50 dark:from-blue-900 dark:to-blue-800 p-6 sm:p-8 relative overflow-hidden print:px-0 print:py-0">
      <motion.div
        className="flex flex-col md:flex-row print:flex-col justify-between md:items-center print:items-start print:justify-start print:gap-4 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex flex-col md:flex-row print:flex-row items-start md:items-center print:items-center gap-4 md:gap-6 print:gap-6">
          <img
            src={profileImage}
            alt="Aldin Nezirić"
            className="w-24 h-24 md:w-32 md:h-32 print:w-28 print:h-28 rounded-full object-cover border-4 border-white dark:border-gray-700 shadow-lg"
          />
          <div>
            <h1 className="text-3xl sm:text-4xl print:text-3xl font-bold text-gray-800 dark:text-white">
              Aldin Nezirić
            </h1>
            <h2 className="text-xl sm:text-2xl print:text-xl text-blue-600 dark:text-blue-300 font-medium mt-1">
              Senior Frontend Engineer | Team Lead
            </h2>
            <div className="flex items-center mt-2 text-gray-600 dark:text-gray-300">
              <MapPin size={16} className="mr-1" />
              <span>Jablanica, Bosnia and Herzegovina</span>
            </div>
          </div>
        </div>

        <div className="mt-6 md:mt-0 flex flex-col space-y-3 print:mt-4 print:grid print:grid-cols-2 print:gap-x-8 print:gap-y-2">
          <a href="mailto:aldinezi@gmail.com" className="contact-link print:whitespace-nowrap">
            <Mail size={16} className="mr-2" />
            aldinezi@gmail.com
          </a>
          <a href="tel:+38762681650" className="contact-link print:whitespace-nowrap">
            <Phone size={16} className="mr-2" />
            +387 62 681650
          </a>
          <a
            href="https://github.com/aldinezi"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link print:whitespace-nowrap"
          >
            <GitHub size={16} className="mr-2" />
            github.com/aldinezi
          </a>
          <a
            href="https://www.linkedin.com/in/aldinneziric"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link print:whitespace-nowrap"
          >
            <Linkedin size={16} className="mr-2" />
            linkedin.com/in/aldinneziric
          </a>
          <a
            href="mailto:aldinezi@gmail.com"
            className="mt-4 inline-flex items-center px-6 py-3 bg-blue-600 dark:bg-blue-500
                     text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600
                     transition-all duration-200 transform hover:scale-105
                     shadow-md hover:shadow-lg print:hidden"
          >
            Let's work together
          </a>
        </div>
      </motion.div>

      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
    </header>
  );
};

export default Header;