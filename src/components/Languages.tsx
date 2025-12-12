import React from 'react';

interface Language {
  name: string;
  level: string;
}

const Languages: React.FC = () => {
  const languages: Language[] = [
    { name: 'Bosnian', level: 'Native' },
    { name: 'English', level: 'C2 Professional Fluency' }
  ];

  return (
    <section className="mb-8">
      <h2 className="section-title">Languages</h2>

      <div className="space-y-3">
        {languages.map((language, index) => (
          <div key={index} className="flex justify-between items-center">
            <span className="text-gray-800 dark:text-white font-medium">{language.name}</span>
            <span className="text-sm text-gray-600 dark:text-gray-300">{language.level}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Languages;