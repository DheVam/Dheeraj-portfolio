import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Dheeraj | Web Dev', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Hello World', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hey People this is ',
  name: 'Dheeraj',
  subtitle: 'Front End Web Developer.',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'Hey all,This is Dheeraj Vamshi, an aspiring front end web developer looking for some cool projects. Iam a student currently in pursue of my bachelor’s degree in computer science and engineering. Computers and technology were always my most favorite interests, and that later pulled me towards software development. I consider web development especially UI development is one of the most skillful sector in software development and thereby I have chosen it. Being creative and logical are one of the most important needs of Web Development which pulled me towards it.',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'Visably.jpg',
    title: 'Visably',
    info: 'Visably tracks brand performance in search.Visably provides measurement, tracking, research, and list-building tools to improve your brand visibility in search.',
    info2: 'Visably bridges the gap between brand-owned channels and everything else that appears in organic search.',
    url: 'https://visably.com/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'RAMS.jpg',
    title: 'RAMS',
    info: 'Rams is a website which provides the infrastructure for hospitals and helps in managing reports and medical devices',
    info2: 'Rams is built on Vue JS as front end with java and nodeJS supporting the backend',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Ferofly.jpg',
    title: 'Ferofly',
    info: 'Ferofly is mocku-up website built by me to showcase my UI/UX skills,it was initially made for a client as a part of interview',
    info2: 'This website was built using ReactJS and Styled Components',
    url: 'https://ferofly-xi.vercel.app/',
    repo: 'https://github.com/DheVam/Ferofly', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'dheeraj.inspires@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/VamshiDheeraj',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/DheerajScript',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/dheeraj-vamshi-ba1067217/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/DheVam',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
