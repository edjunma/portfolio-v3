/* eslint-disable max-len */
import { nanoid } from 'nanoid';

// NAVBAR DATA
export const navData = {
  link: 'fill',
};

// HEAD DATA
export const headData = {
  title: 'Edmond Ma | Portfolio',
  lang: 'en, es, fr, jp',
  description: 'Domain Expansion: Show me the Portfolio',
};

// HERO DATA
export const heroData = {
  title: "Hello there ✌🏼, I'm ",
  name: 'Edmond',
  subtitle: 'A ',
  cta: 'Click Me',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    "Hey, I'm Edmond! I'm a Front-End Web Developer currently in New York City. During the Winter of 2018, I stumbled upon various resources online to learn web development and programming such as FreeCodeCamp, CS50, and ZeroToMastery. As soon as I began, I was captivated by the infinite and creative capabilities of web development & programming. On that day, I've promised myself to travel along the life-long journey of a self-taught developer and become a permanent student of the craft striving to improve consistently, getting 1% better each and every day.",
  paragraphTwo:
    'I design and build UI components to enhance website application performance and user experience using modern technologies like React, JavaScript, and SCSS. Also have been dabbling with Gatsby.js and Next.js for static sites, and Python for scripting/automation & web-scraping.',
  paragraphThree:
    "When I'm not pushing 🅿️ixels & 👨‍💻code, you can catch me outside eating and exploring away at the vast nature & unique culture our world has to offer and then we take it back inside and I am passionate in the intricate process of cooking, mindfulness & exercise because health is wealth, a sprinkle of gaming, a dash of anime, and a big chunk of my time to go on adventures and create unforgettable memories with doggos 🐶 and with the people I ❤️.",
  resume: 'https://edjunma.github.io/EJM-Resume/',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project-1-ecommerce.jpg',
    title: 'CRWN-Clothing',
    info: 'E-commerce web application made with React, Redux, Stripe, Firebase, ContextAPI, and React Hooks. Consists of routes to different clothing categories, add/delete cart function, checkout with Stripe payment, sign-in/sign-out users, and a register user feature.',
    info2: '',
    url: 'https://ejm-crwn.herokuapp.com/',
    repo: 'https://github.com/edjunma/crwn-clothing', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project-2-face-recognition.jpg',
    title: 'Face Recognition App',
    info: "Full-Stack web application built using HTML5, CSS3, JavaScript, and React, for the front-end with the Clarifai API to detect faces from the user's image URL inputs which then calls to the back-end API created with Node.js, Express.js, and PostgreSQL database to record user entries and log user accounts.",
    info2: '',
    url: 'https://smart-brain-v2.herokuapp.com/',
    repo: 'https://github.com/edjunma/face-recognition-v2', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project-3-apex-legends-tracker.jpg',
    title: 'Apex Legends Stats Tracker',
    info: 'Full-Stack web application built using VueJS and Express utilizing the Tracker Network API from tracker.gg to track and display player stats from their respective platforms.',
    info2: '',
    url: 'https://apex-legends-tracker.herokuapp.com/',
    repo: 'https://github.com/edjunma/apex-legends-tracker', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project-4-portfolio.jpg',
    title: 'edmondma.dev Portfolio',
    info: 'Current and latest iteration of my portfolio built using Gatsby.js, React.js, and SASS.',
    info2: '',
    url: 'https://www.edmondma.dev',
    repo: 'https://github.com/edjunma/portfolio-v3', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project-5-blog.jpg',
    title: 'My Digital Garden',
    info: 'Blog made with Next.js. and styled with TailwindCSS',
    info2: '',
    url: 'https://blog-v3-five.vercel.app/',
    repo: 'https://github.com/edjunma/blog-v3', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Please feel free to send me an email or connect with me on my social media links below. I will get back to you as soon as possible with some 🍵 and 🍪.',
  btn: "Let's Talk Business 🤝🏼",
  email: 'edjunma@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      title: 'LinkedIn',
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/edjunma/',
    },
    {
      id: nanoid(),
      title: 'GitHub',
      name: 'github',
      url: 'https://github.com/edjunma',
    },
    {
      id: nanoid(),
      title: 'Twitter',
      name: 'twitter',
      url: 'https://twitter.com/edjunma',
    },
    {
      id: nanoid(),
      title: 'Instagram',
      name: 'instagram',
      url: 'https://www.instagram.com/edmondma.dev/',
    },
    {
      id: nanoid(),
      title: 'CodePen',
      name: 'codepen',
      url: 'https://codepen.io/edjunma/',
    },
  ],
};
