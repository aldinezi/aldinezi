import React, { useState } from 'react';
import { Code2, Terminal, Globe, PenTool as Tool, ChevronDown } from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

const Skills: React.FC = () => {
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});

  const toggleCategory = (title: string) => {
    setExpandedCategories(prev => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  const skillCategories: SkillCategory[] = [
    {
      title: 'Languages & Frameworks',
      icon: <Code2 className="w-5 h-5 text-blue-500" />,
      skills: ['Vue.js (2 & 3)', 'Nuxt 3', 'Node' , 'React', 'TypeScript', 'GoLang', 'JavaScript', 'HTML5', 'CSS3', 'Sass']
    },
    {
      title: 'Tooling',
      icon: <Tool className="w-5 h-5 text-green-500" />,
      skills: ['Vite', 'Webpack', 'Lerna', 'Vuex', 'Tiptap', 'GitHub Actions']
    },
    {
      title: 'Platforms',
      icon: <Globe className="w-5 h-5 text-purple-500" />,
      skills: ['AWS Amplify', 'Netlify', 'Cloudflare Workers']
    },
    {
      title: 'Other',
      icon: <Terminal className="w-5 h-5 text-orange-500" />,
      skills: ['Agile/Scrum', 'Code Reviews', 'Team Mentoring', 'Accessibility', 'SSR', 'CI/CD', 'OAuth', 'SEO']
    }
  ];

  return (
    <section className="mb-8">
      <h2 className="section-title">Skills</h2>

      <div className="space-y-8">
        {skillCategories.map((category) => (
          <div key={category.title} className="group">
            <button
              onClick={() => toggleCategory(category.title)}
              className="w-full flex items-center justify-between gap-2 mb-3 md:mb-3 md:justify-start"
            >
              <div className="flex items-center gap-2">
                {category.icon}
                <h3 className="text-lg font-medium text-blue-600 dark:text-blue-400">
                  {category.title}
                </h3>
              </div>
              <ChevronDown
                className={`w-5 h-5 text-gray-500 transition-transform duration-200 md:hidden ${
                  expandedCategories[category.title] ? 'rotate-180' : ''
                }`}
              />
            </button>
            <div
              className={`transition-all duration-200 ease-in-out md:block ${
                expandedCategories[category.title] ? 'block' : 'hidden md:block'
              }`}
            >
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;