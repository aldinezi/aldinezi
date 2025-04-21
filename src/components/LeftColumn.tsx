import React from 'react';
import Skills from './Skills';
import Languages from './Languages';

const LeftColumn: React.FC = () => {
  return (
    <div className="w-full lg:w-1/3 bg-gray-50 dark:bg-gray-800/50 p-6 sm:p-8">
      <Skills />
      <Languages />
    </div>
  );
};

export default LeftColumn;