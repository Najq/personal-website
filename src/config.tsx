import { GithubIcon } from '@/components/icons/github';
import { LinkedInIcon } from '@/components/icons/linkedin';
import { XIcon } from '@/components/icons/x';

export const CONFIG = {
  name: 'Najeeb Qazi',
  headshot: '/headshot.jpg',
  title: 'Software Engineer',
  description: `Hi 👋, I'm Najeeb. I'm based in Vancouver, BC (absolutely lovely city). Currently building cloud application using AWS @ Caylent. Previously worked at Alida (Survey platform) and Statistics Canada.`,
  nowContent: `Shedding some light on what I'm working on currently and learning`,
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
      name: 'Word Guessing Game',
      slug: 'word-game',
      description: `A simple word game based on guessing the word based on the context that the words appear in.`,
      image: '/icons/guessword.png',
      link: 'https://www.guessword.link',
    },
    {
      featured: true,
      name: 'MicroServices in Go',
      slug: 'microservices-in-go',
      description:
        'Built a microservice architecture to send out emails based on a trigger',
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
      name: 'Caylent',
      description: 'Software Engineer',
      image: '/icons/caylent.png',
      link: '/work',
      dates: 'Currently work here',
    },

    {
      name: 'Alida',
      description: 'Software Engineer',
      image: '/icons/alida.png',
      link: '/work',
      dates: 'September 2021 - August 2024',
    },
    {
      name: 'Statistics Canada',
      description: 'Data Scientist',
      image: '/icons/statscan.jpg',
      link: '/work',
      dates: 'May 2020 - September 2021',
    },
    {
      name: 'ZS Associates',
      description: 'Software Engineer',
      image: '/icons/zs.png',
      link: '/work',
      dates: 'September 2017 - June 2019',
    },
  ],
};
