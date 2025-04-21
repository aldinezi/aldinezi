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
        'Leading a frontend team of 10 engineers in building a real-time collaboration app',
        'Migrated monorepo from Vue 2 to Vue 3 with Nuxt 3 SSR',
        'Built 400+ reusable components and UX patterns for cards, boards, and editor UI',
        'Developed collaborative text editing using Tiptap + Codox',
        'Improved SEO and performance with structured data, Cloudflare caching, and lazy hydration',
        'Integrated CI/CD pipelines (GitHub Actions), observability (Sentry, SonarCloud, DebugBear)',
        'Managed OAuth (Slack), i18n, role-based access, and advanced deployment flows',
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