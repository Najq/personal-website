
import { GithubIcon } from '@/components/icons/github';
import { LinkedInIcon } from '@/components/icons/linkedin';
import { XIcon } from '@/components/icons/x';

export const CONFIG = {
  name: 'Najeeb Qazi',
  headshot: '/headshot.jpg',
  title: 'Software Engineer',
  description: `Hi 👋, I'm Najeeb. I'm based in Vancouver, BC (absolutely lovely city). Currently tweaking customer experience @ Alida. Previously worked as a Data Scientist at Statistics Canada.`,
  nowContent : `Shedding some light on what I'm working on currently. Focussed on building efficient APIs using Go and Node.js. Trying to get my hands dirty with some Jijutsu in the spare time.`,
  socials: [
    { platform: 'X', link: 'https://twitter.com/najeebqazii', icon: <XIcon /> },
    {
      platform: 'GitHub',
      link: 'https://github.com/najq',
      icon: <GithubIcon />,
    },
    {
      platform: 'LinkedIn',
      link: 'https://www.linkedin.com/in/najeeb-qazi/',
      icon: <LinkedInIcon />,
    },
  ],
  projects: [
    {
      featured: true,
      name: 'MicroServices in Go',
      slug: 'microservices-in-go',
      description: 'Built a microservice architecture to send out emails based on a trigger',
      image: '/icons/golang_icon.png',
      link: '#',
    },
    {
      featured: true,
      name: 'Screen temperature calculator',
      slug: 'tech-stack-finder',
      description: '',
      image: '/icons/calculator-icon.png',
      link: '#',
    },
    {
      featured: true,
      name: 'Question Answering application using LLMs',
      slug: 'qa_nlp',
      description: `An application based on LLMs that finds an answer based on the question's context `,
      image: '/icons/llm.png',
      link: '#',
    },
    {
      name: 'Demand Forecasting for Retailers',
      slug: 'demand-forecasting',
      description: 'Demand Forecasting for retailers',
      image: '/icons/open-graph-vault.png',
      link: '#',
    },
  ],
  workExperience: [
    {
      name: 'Alida',
      description: 'Software Engineer',
      image: '/icons/work-experience.jpg',
      link: '#',
    },
    {
      name: 'Statistics Canada',
      description: 'Data Scientist',
      image: '/icons/work-experience.jpg',
      link: '#',
    },
    {
      name: 'ZS Associates',
      description: 'Software Engineer',
      image: '/icons/work-experience.jpg',
      link: '#',
    },
  ]
};