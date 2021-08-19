import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Brien Pacholec | Web Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description:
    'Welcome to my personal website. Feel free to take a look around and learn a little bit more about me!', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: "Hey there I'm",
  name: 'Brien Pacholec',
  subtitle: 'I am a Web Developer',
  cta: 'About Me',
};

// ABOUT DATA
export const aboutData = {
  img: 'brien_1.jpg',
  paragraphOne:
    'I reign from Buffalo, New York home of the Buffalo Bills & the worlds best chicken wings! I graduated from Ithaca College where I played defensive tackle for the football team in 2019 with a bachelors degree in computer science. I am currently wrapping up my masters of buisness in administration at Daemen College.',
  paragraphTwo:
    'Currently work at Daemen College as a full-stack web developer. In my current role, I am responsible for development on our student & faculty web portal. I develop on the front-end of the stack using SCSS, Vue.JS, and HTML5. On the back-end of things, my days of development are spent utilizing MySQL, PhP, and Python.',
  paragraphThree:
    'Beyond my day-in day-outs I love to stay busy. I am an avid weight lifter, recently a skydiver, and traveling hiker. In the summer of 2021, my girlfriend and I spent 7 days hiking through southern Utah at a few national parks (Zion, Capitol Reef, Bryce Canyon, Grand Staircase Escalante).',
  paragraphFour:
    'I do find time to relax and take a break! In my free time I enjoy playing XBOX, grabbing some beers with my friends, reading some nonfiction, and binge watching some Anime.',
  resume: '/resume',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

export const resumeData = [
  {
    id: nanoid(),
    title: 'Skills'
  },
  {
    id: nanoid(),
    title: 'Experience'
  },
  {
    id: nanoid(),
    title: 'Awards'
  }
]

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'brienpacholec@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/brienpacholec/?hl=en',
    },

    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/brien-pacholec-a59b6ab4/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/brienpacholec/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
