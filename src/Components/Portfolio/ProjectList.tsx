import imageRobin from '../../assets/images/robin.png';
import animationRobin from '../../assets/webps/robin_58538.webp';
import imageZ64 from '../../assets/images/z64.png';
import animationZ64 from '../../assets/webps/z64_61020.webp';
import imageChatpack from '../../assets/images/chatpack.png';
import animationChatpack from '../../assets/webps/chatpack_27031.webp';
import imageFind from '../../assets/images/find.png';
import animationFind from '../../assets/webps/find_32885.webp';
import imageJstodo from '../../assets/images/jstodo.png';
import animationjstodo from '../../assets/webps/jstodo_103976.webp';
import imageBattleship from '../../assets/images/battleship.png';
import animationBattleship from '../../assets/webps/battleship_59534.webp';
import imageEryngi from '../../assets/images/eryngi.png';
import animationEryngi from '../../assets/webps/eryngi_21048.webp';
import imageLeshop from '../../assets/images/leshop.png';
import animationLeshop from '../../assets/webps/leshop_37315.webp';
import imageCvcreator from '../../assets/images/cvcreator.png';
import animationCvcreator from '../../assets/webps/cvcreator_49531.webp';
import imageJustweather from '../../assets/images/justweather.png';
import animationJustweather from '../../assets/webps/justweather_29467.webp';

const ProjectList: {
  id: number;
  title: string;
  imageURL: string;
  animationURL: string;
  animationLength: number;
  description: string;
  githubLink: string;
  liveLink: string;
  technologies: string;
  year: number;
}[] = [
  {
    id: 1,
    title: 'Robin Social Network',
    imageURL: imageRobin,
    animationURL: animationRobin,
    animationLength: 58538,
    description:
      'A fully-featured, social network. Users can post, follow other users and customize their profile. The app uses Firebase as the backend.',
    githubLink: 'https://github.com/erynder-z/robin-sn',
    liveLink: 'https://erynder-z.github.io/robin-sn',
    technologies: 'React, JavaScript, Firebase',
    year: 2022,
  },
  {
    id: 2,
    title: 'Z64',
    imageURL: imageZ64,
    animationURL: animationZ64,
    animationLength: 61020,
    description:
      'A Commodore 64 game database. Users can view, edit and add new games to the database.',
    githubLink: 'https://github.com/erynder-z/c64-game-database',
    liveLink: 'https://c64-game-database.onrender.com/',
    technologies: 'Node.js, Express, MongoDB, EJS',
    year: 2022,
  },
  {
    id: 3,
    title: 'Chatpack',
    imageURL: imageChatpack,
    animationURL: animationChatpack,
    animationLength: 27031,
    description:
      'A realtime chatroom application with a simple interface. Users can log on using a Google, GitHub, Twitter or Microsoft account.',
    githubLink: 'https://github.com/erynder-z/chatpack',
    liveLink: 'https://erynder-z.github.io/chatpack/',
    technologies: 'React, Typescript, Firebase',
    year: 2022,
  },
  {
    id: 4,
    title: '.find()',
    imageURL: imageFind,
    animationURL: animationFind,
    animationLength: 32885,
    description:
      'A hidden object game where users have to find certain characters in a huge image. The app features an online leaderboard for the 10 fastest players. ',
    githubLink: 'https://github.com/erynder-z/image-tagging-app',
    liveLink: 'https://erynder-z.github.io/image-tagging-app/',
    technologies: 'React, JavaScript, Firebase',
    year: 2022,
  },
  {
    id: 5,
    title: 'JS_Todo',
    imageURL: imageJstodo,
    animationURL: animationjstodo,
    animationLength: 103976,
    description:
      'A task-/organizer application. Users can search, create and modify tasks, set priorities and deadlines. Tasks can be categorized in predefined or custom categories. Tasks can be stored locally or online via a Firebase backend.',
    githubLink: 'https://github.com/erynder-z/JS_Todo',
    liveLink: 'https://erynder-z.github.io/JS_Todo/',
    technologies: 'JavaScript, Firebase',
    year: 2022,
  },
  {
    id: 6,
    title: 'Battleship',
    imageURL: imageBattleship,
    animationURL: animationBattleship,
    animationLength: 59534,
    description:
      'A battleship game built via test-driven development. Game logic is tested using the Jest testing framework.',
    githubLink: 'https://github.com/erynder-z/battleship',
    liveLink: 'https://erynder-z.github.io/battleship/',
    technologies: 'JavaScript, Jest, SASS',
    year: 2022,
  },
  {
    id: 7,
    title: 'Eryngi-CSS',
    imageURL: imageEryngi,
    animationURL: animationEryngi,
    animationLength: 21048,
    description:
      'A bootstrap-like custom CSS library build with SCSS. Library can be used to quickly style a simple webpage.',
    githubLink: 'https://github.com/erynder-z/eryngi-css',
    liveLink: 'https://erynder-z.github.io/eryngi-css/',
    technologies: 'SASS',
    year: 2022,
  },
  {
    id: 8,
    title: 'Le-shop',
    imageURL: imageLeshop,
    animationURL: animationLeshop,
    animationLength: 37315,
    description:
      'Frontend for a fake online shop. Users can browse different product categories and add/remove items to/from the shopping cart. Shop items are fetched via an online API.',
    githubLink: 'https://github.com/erynder-z/le-shop',
    liveLink: 'https://erynder-z.github.io/le-shop/',
    technologies: 'React, JavaScript, Jest, Fake Store API',
    year: 2022,
  },
  {
    id: 9,
    title: 'CV-Creator',
    imageURL: imageCvcreator,
    animationURL: animationCvcreator,
    animationLength: 49531,
    description:
      'WYSIWYG-editor to create and print your resumee/cv. Users can add/remove sections of the cv as needed and the final document is updated in real-time.',
    githubLink: 'https://github.com/erynder-z/cv-creator',
    liveLink: 'https://erynder-z.github.io/cv-creator/',
    technologies: 'React, JavaScript',
    year: 2022,
  },
  {
    id: 10,
    title: 'Just the weather',
    imageURL: imageJustweather,
    animationURL: animationJustweather,
    animationLength: 29467,
    description:
      'A weather application using the OpenWeatherMap One Call API. Users can search for different cities and the app displays the current weather and optionally a 7-day forecast. Units can be shown in celsius or fahrenheit.',
    githubLink: 'https://github.com/erynder-z/just-the-weather',
    liveLink: 'https://erynder-z.github.io/just-the-weather/',
    technologies: 'JavaScript, OpenWeatherMap One Call API',
    year: 2022,
  },
];

export default ProjectList;
