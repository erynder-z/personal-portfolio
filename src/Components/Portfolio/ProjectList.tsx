import projectImage1 from '../../assets/image.jpg';

const ProjectList: {
  id: number;
  title: string;
  imageURL: string;
  description: string;
  githubLink: string;
  liveLink: string;
}[] = [
  {
    id: 1,
    title: 'Robin Social Network',
    imageURL: projectImage1,
    description: 'A fully featured, twitter-like social network.',
    githubLink: 'https://github.com/erynder-z/robin-sn',
    liveLink: 'https://erynder-z.github.io/robin-sn',
  },
  {
    id: 2,
    title: 'Chatpack',
    imageURL: projectImage1,
    description: 'A realtime chatroom application.',
    githubLink: 'https://github.com/erynder-z/chatpack',
    liveLink: 'https://erynder-z.github.io/chatpack/',
  },
  {
    id: 3,
    title: '.find()',
    imageURL: projectImage1,
    description: 'A hidden object game.',
    githubLink: 'https://github.com/erynder-z/image-tagging-app',
    liveLink: 'https://erynder-z.github.io/image-tagging-app/',
  },
  {
    id: 4,
    title: 'JS_Todo',
    imageURL: projectImage1,
    description: 'A task-/organizer application.',
    githubLink: 'https://github.com/erynder-z/JS_Todo',
    liveLink: 'https://erynder-z.github.io/JS_Todo/',
  },
  {
    id: 5,
    title: 'Battleship',
    imageURL: projectImage1,
    description: 'A battleship game build via test-driven development.',
    githubLink: 'https://github.com/erynder-z/battleship',
    liveLink: 'https://erynder-z.github.io/battleship/',
  },
  {
    id: 6,
    title: 'Eryngi-CSS',
    imageURL: projectImage1,
    description: 'A bootstrap-like custom CSS-library build with SCSS.',
    githubLink: 'https://github.com/erynder-z/eryngi-css',
    liveLink: 'https://erynder-z.github.io/eryngi-css/',
  },
  {
    id: 7,
    title: 'Le-shop',
    imageURL: projectImage1,
    description: 'Frontend for a fake online shop.',
    githubLink: 'https://github.com/erynder-z/le-shop',
    liveLink: 'https://erynder-z.github.io/le-shop/',
  },
  {
    id: 8,
    title: 'CV-Creator',
    imageURL: projectImage1,
    description: 'Application to create and print your resumee/cv.',
    githubLink: 'https://github.com/erynder-z/cv-creator',
    liveLink: 'https://erynder-z.github.io/cv-creator/',
  },
  {
    id: 9,
    title: 'Just the weather',
    imageURL: projectImage1,
    description:
      ' A weather application using the OpenWeatherMap One Call API.',
    githubLink: 'https://github.com/erynder-z/just-the-weather',
    liveLink: 'https://erynder-z.github.io/just-the-weather/',
  },
];

export default ProjectList;
