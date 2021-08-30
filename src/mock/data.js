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
  subtitle: [
    {
      id: nanoid(),
      title: 'Web Developer',
    },
    {
      id: nanoid(),
      title: 'Hiker',
    },
    {
      id: nanoid(),
      title: 'Weight Lifter',
    },
    {
      id: nanoid(),
      title: 'Beer Enthusiast',
    },
  ],
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

// PROJECTS DATA
export const photosData = [
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
    type: 'Programming Languages',
    skills: [
      {
        id: nanoid(),
        name: 'Python',
        logo: '',
      },
      {
        id: nanoid(),
        name: 'PhP',
        logo: '',
      },
      {
        id: nanoid(),
        name: 'C#',
        logo: '',
      },
      {
        id: nanoid(),
        name: 'Java',
        logo: '',
      },
    ],
  },
  {
    id: nanoid(),
    type: 'Javascript Libraries',
    skills: [
      {
        id: nanoid(),
        name: 'Vue',
        logo: '',
      },
      {
        id: nanoid(),
        name: 'React',
        logo: '',
      },
      {
        id: nanoid(),
        name: 'Node',
        logo: '',
      },
    ],
  },
  {
    id: nanoid(),
    type: 'Styling',
    skills: [
      {
        id: nanoid(),
        name: 'SCSS',
        logo: '',
      },
      {
        id: nanoid(),
        name: 'Bootstrap',
        logo: '',
      },
      {
        id: nanoid(),
        name: 'Semantic',
        logo: '',
      },
      {
        id: nanoid(),
        name: 'Bulma',
        logo: '',
      },
    ],
  },
  {
    id: nanoid(),
    type: 'Data Management',
    skills: [
      {
        id: nanoid(),
        name: 'MySQL',
        logo: '',
      },
      {
        id: nanoid(),
        name: 'NoSQL',
        logo: '',
      },
    ],
  },
  {
    id: nanoid(),
    type: 'Version Control',
    skills: [
      {
        id: nanoid(),
        name: 'GIT',
        logo: '',
      },
      {
        id: nanoid(),
        name: 'Github',
        logo: '',
      },
    ],
  },
  {
    id: nanoid(),
    type: 'OS / CLI',
    skills: [
      {
        id: nanoid(),
        name: 'Linux',
        logo: '',
      },
      {
        id: nanoid(),
        name: 'Vim',
        logo: '',
      },
      {
        id: nanoid(),
        name: 'Nano',
        logo: '',
      },
    ],
  },
];

// TOOLS DATA
export const toolsData = [
  {
    id: nanoid(),
    name: 'Visual Studio Code',
    logo: '',
  },
  {
    id: nanoid(),
    name: 'Apache Airflow',
    logo: '',
  },
  {
    id: nanoid(),
    name: 'Cron',
    logo: '',
  },
  {
    id: nanoid(),
    name: 'npm',
    logo: '',
  },
  {
    id: nanoid(),
    name: 'Google Scripts',
    logo: '',
  },
  {
    id: nanoid(),
    name: 'Google API',
    logo: '',
  },
  {
    id: nanoid(),
    name: 'PhPMyAdmin',
    logo: '',
  },
  {
    id: nanoid(),
    name: 'MSSQL Server',
    logo: '',
  },
  {
    id: nanoid(),
    name: 'ElasticSearch',
    logo: '',
  },
];

export const educationData = [
  {
    id: nanoid(),
    school: 'Daemen College',
    degree: 'Master of Business Administration',
    date: 'December, 2021',
  },
  {
    id: nanoid(),
    school: 'Ithaca College',
    degree: 'Computer Science (BA)',
    date: 'May, 2019',
  },
];

// EXPEREIENCE DATA
export const experienceData = [
  {
    id: nanoid(),
    employer: 'Daemen College',
    location: 'Getzville, NY',
    roles: [
      {
        id: nanoid(),
        title: 'Web Developer',
        logo: '',
        start: 'April, 2020',
        end: 'Present',
        duties: [
          'System wide integrations with third party applications',
          'Data manipulation and automation with Apache Airflow',
          'Development and improvoment of student / faculty portal and included systems',
        ],
        description:
          "Throughout my time as a web developer I have worked on many exciting projects. From small minor tweaks and changes to established systems to leading development on large scale systmes like that of our COVID-19 Campus Clearance system. I am constantly looking for ways to improve UI/UX utilizing feedback responses from our student's and faculty. In my current role, my responsibilites have been extended through continuous development on our Apache Airflow server. Additionally, this role takes lead on all major system changes to our student / faculty portal.",
      },
      {
        id: nanoid(),
        title: 'Jr. Web Developer',
        logo: '',
        start: 'Octonber, 2019',
        end: 'April, 2020',
        duties: [
          'Full stack development using PhP interacting with our MySQL databases',
          'Utilizing SCSS and Vue.js to provide an interactive student / faculty portal',
        ],
        description: '',
      },
      {
        id: nanoid(),
        title: 'Jr. Software Developer',
        logo: '',
        start: 'Feburary, 2019',
        end: 'October, 2019',
        duties: [
          'Developed ASP.NET systems for higher education',
          'Created and analyzed reports utilizing Microsoft SQL Server and Informer Reporting Software',
        ],
        description:
          'My role in software development was primarly focused on backend processes for the college. Beyond managing and creating reports through Informer - my first main project was creating an Audit Database system. This system (created in Visual Studio utilizing ASP.NET in C#) would be used to track and document audits within our in-house and third party systems.',
      },
    ],
  },
  {
    id: nanoid(),
    employer: 'Mangia Restauranté',
    location: 'Orchard Park, NY',
    roles: [
      {
        id: nanoid(),
        title: 'Server',
        logo: '',
        start: 'June, 2018',
        end: 'Januaray, 2019',
        duties: [
          'Develop restaurant image by providing fast and courteous service to guests',
          'Problem-solve and resolve customer complaints and issues',
          'Provide excellent customer service and ensured that all of my guests were well taken care of',
        ],
        description: '',
      },
      {
        id: nanoid(),
        title: "Server's Assistant",
        logo: '',
        start: 'December, 2015',
        end: 'June, 2018',
        duties: [
          'Served anywhere from 20 to 60 guests per night',
          'Attended to the needs of 2 to 3 servers per night including all of their guests',
          'Ensured that guests had an enjoyable dining experience by providing quality customer service',
        ],
        description: '',
      },
    ],
  },
  {
    id: nanoid(),
    employer: "Orchard Height's",
    location: 'Orchard Park, NY',
    roles: [
      {
        id: nanoid(),
        title: 'Server',
        logo: '',
        start: 'June, 2013',
        end: 'August, 2018',
        duties: [
          'Assisted residents with making menu choices in an informative and helpful fashion',
          'Maintained knowledge of special diet restrictions',
        ],
        description: '',
      },
    ],
  },
];

// AWARDS DATA
export const awardsData = [
  {
    id: nanoid(),
    type: 'Athletics',
    awards: [
      {
        id: nanoid(),
        name: 'All-East Region D3 Football',
        year: '2018',
      },
      {
        id: nanoid(),
        name: 'All-Conference',
        year: '2017, 2018',
      },
    ],
  },
  {
    id: nanoid(),
    type: 'Academics',
    awards: [
      {
        id: nanoid(),
        name: "Daemen College Dean's List",
        year: '2019, 2020',
      },
      {
        id: nanoid(),
        name: 'NFF Hampshire Honor Society',
        year: '2019',
      },
      {
        id: nanoid(),
        name: "Ithaca College Dean's List",
        year: '2018',
      },
      {
        id: nanoid(),
        name: 'All-Conference Academic Team',
        year: '2016-2018',
      },
    ],
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Want to chat? Shoot me a message!',
  btn: "Let's Talk",
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
