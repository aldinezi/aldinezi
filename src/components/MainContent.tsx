import React from 'react';
import LeftColumn from './LeftColumn';
import RightColumn from './RightColumn';

const MainContent: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row print:flex-col">
        <LeftColumn />
        <RightColumn />
    </div>
  );
};

export default MainContent;