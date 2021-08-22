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

// SKILLS DATA
export const skillsData = [
  {
    id: nanoid(),
    name: "Python",
    logo: '',
  },
  {
    id: nanoid(),
    name: "PhP",
    logo: "",
  },
  {
    id: nanoid(),
    name: "Vue.js",
    logo: "",
  },
  {
    id: nanoid(),
    name: "Node.js",
    logo: "",
  },
  {
    id: nanoid(),
    name: "React",
    logo: "",
  },
  {
    id: nanoid(),
    name: "SCSS",
    logo: "",
  },
  {
    id: nanoid(),
    name: "SQL",
    logo: "",
  },
  {
    id: nanoid(),
    name: "",
    logo: "",
  },
  
];

// TOOLS DATA
export const toolsData = [
  {
    id: nanoid(),
    name: "Apache Airflow",
    logo: '',
  },
  {
    id: nanoid(),
    name: "Google Scipting",
    logo: "",
  },
  {
    id: nanoid(),
    name: "Google API",
    logo: "",
  },
  {
    id: nanoid(),
    name: "Visual Studio Code",
    logo: "",
  },
  {
    id: nanoid(),
    name: "MSSQL Server",
    logo: "",
  },
  {
    id: nanoid(),
    name: "PhPMyAdmin",
    logo: "",
  },
  {
    id: nanoid(),
    name: "Cron",
    logo: "",
  },
];

// EXPEREIENCE DATA
export const experienceData = [
  {
    id: nanoid(),
    role: "Web Developer",
    logo: "",
    employer: "Daemen College",
    start: "April, 2020",
    end: "Present",
    duties: [
      "System wide integrations with third party applications",
      "Data manipulation and automation with Apache Airflow",
      "Development and improvoment of student / faculty portal and included systems",
    ],
    description: "",
  },
  {
    id: nanoid(),
    role: "Jr. Web Developer",
    logo: "",
    employer: "Daemen College",
    start: "Octonber, 2019",
    end: "April, 2020",
    duties: [
      "Full stack development using PhP interacting with our MySQL databases",
      "Utilizing SCSS and Vue.js to provide an interactive student / faculty portal"
    ],
    description: "Throughout my time as a web developer I have worked on many exciting projects. From small minor tweaks and changes to established systems to leading development on large scale systmes like that of our COVID-19 Campus Clearance system. I am constantly looking for ways to improve UI/UX utilizing feedback responses from our student's and faculty. Recently, my work has comprised of converting all of our automated scripts from PhP to Python on our more secure Apache Airflow server.",
  },
  {
    id: nanoid(),
    role: "Jr. Software Developer",
    logo: "",
    employer: "Daemen College",
    start: "Feburary, 2019",
    end: "October, 2019",
    duties: [
      "Developed ASP.NET systems for higher education",
      "Created and analyzed reports utilizing Microsoft SQL Server and Informer Reporting Software",
    ],
    description: "My role in software development was primarly focused on backend processes for the college. Beyond managing and creating reports through Informer - my first main project was creating an Audit Database system. This system (created in Visual Studio utilizing ASP.NET in C#) would be used to track and document audits within our in-house and third party systems.",
  },
  {
    id: nanoid(),
    role: "",
    logo: "",
    employer: "",
    start: "",
    end: "",
    duties: [
      "",
      ""
    ],
    description: "",
  },
  {
    id: nanoid(),
    role: "",
    logo: "",
    employer: "",
    start: "",
    end: "",
    duties: [
      "",
      ""
    ],
    description: "",
  },
  {
    id: nanoid(),
    role: "",
    logo: "",
    employer: "",
    start: "",
    end: "",
    duties: [
      "",
      ""
    ],
    description: "",
  },
  
  
  
];

// AWARDS DATA
export const awardsData = [
  {
    id: nanoid(),
    name: "Python",
    logo: "",
  },
  {
    id: nanoid(),
    name: "PhP",
    logo: "",
  },
  {
    id: nanoid(),
    name: "HTML",
    logo: "",
  },
];

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
