import React from 'react';

interface Job {
  title: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
}

const Experience: React.FC = () => {
  const jobs: Job[] = [
    {
      title: 'Lead Frontend Engineer',
      company: 'Superthread',
      location: 'Remote / London, UK',
      period: 'Sep 2020 – Present',
      responsibilities: [
        'Led a team of 10 engineers delivering a complex real-time collaboration platform, driving consistent improvements across performance, UX, and developer velocity',
        'Orchestrated the migration from Vue 2 to Vue 3 with Nuxt 3 SSR, improving client-side render times by ~55% and significantly enhancing perceived responsiveness',
        'Designed and delivered a component architecture of 400+ reusable UI building blocks (cards, boards, editor UI), establishing clear conventions and contributing to a ~2× increase in development throughput, supported by improved AI-assisted workflows',
        'Delivered robust real-time editing experiences by implementing Tiptap + Codox, later migrating to Tiptap + Yjs, resulting in more stable collaborative sessions and higher user engagement',
        'Built and shipped the platform’s AI Chat feature end-to-end, including frontend interaction models and backend orchestration logic for request routing, context handling, security, and rate-limiting',
        'Implemented structured data, Cloudflare caching strategies, and hydration optimizations to strengthen performance and SEO foundations',
        'Integrated CI/CD pipelines (GitHub Actions), observability (Sentry, SonarCloud, DebugBear), improving release stability and error visibility',
        'Set up Cypress tests, improving regression detection and contributing to more reliable release cycles',
        'Established and maintained Jest test suites, later migrating to Vitest',
        'Improved unit test coverage to 65%, increasing confidence in refactoring and reducing production defects',
        'Reduced deployment time in AWS Amplify from 12 minutes to 4.5 minutes',
        'Owned major onboarding flow optimizations that increased hard-activated users by 60%, directly supporting growth and retention goals',
        'Managed OAuth, i18n, role-based access, and advanced deployment flows',
        'Worked on GoLang backend for multiple microservices',
      ]
    },
    {
      title: 'Frontend Developer',
      company: 'NSoft d.o.o.',
      location: 'Mostar, Bosnia and Herzegovina',
      period: 'Oct 2017 – Sep 2020',
      responsibilities: [
        'Developed scalable SPAs using Vue.js, React, and AngularJS',
        'Built responsive UIs from Sketch/PSD, optimized for mobile and web',
        'Consumed RESTful APIs and handled complex component state logic',
        'Mentored junior developers and introduced modern dev tooling'
      ]
    },
    {
      title: 'Web Developer',
      company: 'Mezet Agency',
      location: 'Sarajevo, Bosnia and Herzegovina',
      period: 'May 2016 – Sep 2017',
      responsibilities: [
        'Delivered Shopify, Magento, WordPress and ASP.NET websites',
        'Ensured cross-browser compatibility and responsiveness'
      ]
    },
    {
      title: 'Freelance Developer',
      company: 'Remote',
      location: '',
      period: 'Jan 2015 – May 2016',
      responsibilities: [
        'Built 20+ websites with Joomla, WordPress, and pure HTML/CSS',
        'Maintained 5.0 average client rating on Freelancer.com'
      ]
    },
    {
      title: 'Other Roles (Summary)',
      company: '',
      location: '',
      period: '',
      responsibilities: [
        'Project Manager at Mountaineering Club "Plasa" – Led UNDP-funded sustainability projects',
        'Regional Youth Mentor at OIA – Organized civic education workshops across Bosnia',
        'President of Jablanica Youth Council – Initiated reconciliation events and youth policy drafts',
        'Database Designer – Designed library system for local museum'
      ]
    }
  ];

  return (
    <section className="mb-8">
      <h2 className="section-title">Experience</h2>

      <div className="space-y-8">
        {jobs.map((job, index) => (
          <article key={index + job.title} className="group">
            <div className="flex flex-col sm:flex-row justify-between mb-2">
              <h3 className="job-title">
                {job.title} {job.company && `— ${job.company}`}
              </h3>
              {job.period && (
                <span className="job-period">
                  {job.period}
                </span>
              )}
            </div>

            {job.location && (
              <div className="job-location">{job.location}</div>
            )}

            <ul className="job-description">
              {job.responsibilities.map((responsibility, i) => (
                <li key={i + responsibility} className="leading-relaxed">{responsibility}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Experience;