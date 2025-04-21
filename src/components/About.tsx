import React from 'react';

const About: React.FC = () => {
  return (
    <section id="summary" className="mb-8">
      <h2 className="section-title">About me</h2>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
        I'm a <strong>Senior Frontend Engineer and Tech Lead</strong> with over 8 years of experience designing and building performant, maintainable web applications. I specialize in modern JavaScript frameworks like <strong>Vue 3</strong>, <strong>Nuxt 3</strong>, and <strong>TypeScript</strong>, and I’ve also worked with <strong>React</strong> in cross-functional environments.
      </p>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
        At <strong>Superthread</strong>, I lead a team of 10 engineers, guiding architectural decisions, mentoring developers, and driving product improvements with a strong focus on UX, accessibility, and performance. I’ve overseen major projects like migrating large-scale applications from Vue 2 to Vue 3 and implementing SSR for speed and SEO gains.
      </p>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
        Passionate about developer experience and continuous learning, I’m currently expanding into <strong>AI-enhanced interfaces</strong> and exploring how <strong>machine learning</strong> can reshape frontend tooling and interaction design.
      </p>
    </section>
  );
};

export default About;