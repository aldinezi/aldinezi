import React from 'react';
import About from './About';
import Experience from './Experience';
import Education from './Education';

const RightColumn: React.FC = () => {
  return (
    <div className="w-full lg:w-2/3 p-6 sm:p-8">
      <About />
      <Experience />
      <Education />
    </div>
  );
};

export default RightColumn;