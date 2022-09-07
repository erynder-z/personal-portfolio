import projectImage1 from '../../assets/image.jpg';

const ProjectList: {
  id: number;
  title: string;
  imageURL: string;
  description: string;
  githubLink: string;
  liveLink: string;
  technologies: string;
  year: number;
}[] = [
  {
    id: 1,
    title: 'Robin Social Network',
    imageURL: projectImage1,
    description: 'A fully featured, twitter-like social network.',
    githubLink: 'https://github.com/erynder-z/robin-sn',
    liveLink: 'https://erynder-z.github.io/robin-sn',
    technologies: 'React, JavaScript, Firebase',
    year: 2022,
  },
  {
    id: 2,
    title: 'Chatpack',
    imageURL: projectImage1,
    description: 'A realtime chatroom application.',
    githubLink: 'https://github.com/erynder-z/chatpack',
    liveLink: 'https://erynder-z.github.io/chatpack/',
    technologies: 'React, Typescript, Firebase',
    year: 2022,
  },
  {
    id: 3,
    title: '.find()',
    imageURL: projectImage1,
    description: 'A hidden object game.',
    githubLink: 'https://github.com/erynder-z/image-tagging-app',
    liveLink: 'https://erynder-z.github.io/image-tagging-app/',
    technologies: 'React, JavaScript, Firebase',
    year: 2022,
  },
  {
    id: 4,
    title: 'JS_Todo',
    imageURL: projectImage1,
    description: 'A task-/organizer application.',
    githubLink: 'https://github.com/erynder-z/JS_Todo',
    liveLink: 'https://erynder-z.github.io/JS_Todo/',
    technologies: 'JavaScript, Firebase',
    year: 2022,
  },
  {
    id: 5,
    title: 'Battleship',
    imageURL: projectImage1,
    description: 'A battleship game build via test-driven development.',
    githubLink: 'https://github.com/erynder-z/battleship',
    liveLink: 'https://erynder-z.github.io/battleship/',
    technologies: 'JavaScript, Jest',
    year: 2022,
  },
  {
    id: 6,
    title: 'Eryngi-CSS',
    imageURL: projectImage1,
    description: 'A bootstrap-like custom CSS-library build with SCSS.',
    githubLink: 'https://github.com/erynder-z/eryngi-css',
    liveLink: 'https://erynder-z.github.io/eryngi-css/',
    technologies: 'SASS',
    year: 2022,
  },
  {
    id: 7,
    title: 'Le-shop',
    imageURL: projectImage1,
    description: 'Frontend for a fake online shop.',
    githubLink: 'https://github.com/erynder-z/le-shop',
    liveLink: 'https://erynder-z.github.io/le-shop/',
    technologies: 'React, JavaScript, Jest, Fake Store API',
    year: 2022,
  },
  {
    id: 8,
    title: 'CV-Creator',
    imageURL: projectImage1,
    description: 'Application to create and print your resumee/cv.',
    githubLink: 'https://github.com/erynder-z/cv-creator',
    liveLink: 'https://erynder-z.github.io/cv-creator/',
    technologies: 'React, JavaScript',
    year: 2022,
  },
  {
    id: 9,
    title: 'Just the weather',
    imageURL: projectImage1,
    description:
      ' A weather application using the OpenWeatherMap One Call API.',
    githubLink: 'https://github.com/erynder-z/just-the-weather',
    liveLink: 'https://erynder-z.github.io/just-the-weather/',
    technologies: 'JavaScript, OpenWeatherMap One Call API',
    year: 2022,
  },
];

export default ProjectList;
