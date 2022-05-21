import { nanoid } from 'nanoid';

// NAVBAR DATA
export const navData = {
  link: 'fill',
};

// HEAD DATA
export const headData = {
  title: 'Edmond Ma | Portfolio',
  lang: 'en, es, fr, jp',
  description: 'Domain Expansion: Portfolio',
};

// HERO DATA
export const heroData = {
  title: "Hello there ✌🏼, I'm ",
  name: 'Edmond',
  subtitle: 'A ',
  cta: 'About Me',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    "Hey, I'm Edmond! I'm a Front-End Web Developer currently working in New York City. On the Winter of 2018, I fell in love with the capabilities of web development & software engineering after learning from various resources online such as FreeCodeCamp, Udemy, and YouTube. Since then I've been grateful to be on this life-long journey as a self-taught developer striving to improve day by day, little by little, getting 1% better everyday.",
  paragraphTwo:
    'I design and build UI components to enhance website applications performance and user experience using modern technologies like React, JavaScript, and SCSS. Also have been dabbling with Gatsby.js and Next.js for static sites, and Python for scripting/automation & web-scraping.',
  paragraphThree:
    'During my pastime, I am passionate about traveling the world and experiencing the vast nature & culture out there, some good food and the beautiful art of cooking, noodle-soup connoisseur & aficionado of the finest herbs, a touch of health & fitness, a sprinkle of gaming, and just a dash of anime but to me the most important of all, is spending time with loved ones & doggos 🐶.',
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
];

// CONTACT DATA
export const contactData = {
  cta: 'Please feel free to send me an email or connect with me on my social media links below. I will get back to you as soon as possible with some 🍵 and 🍪.',
  btn: "Let's Talk Business! 🤝🏼",
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
      url: 'https://www.instagram.com/edjunma/',
    },
    {
      id: nanoid(),
      title: 'CodePen',
      name: 'codepen',
      url: 'https://codepen.io/edjunma/',
    },
  ],
};
