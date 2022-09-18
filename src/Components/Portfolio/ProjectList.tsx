import imageRobin from '../../assets/images/robin.png';
import gifRobin from '../../assets/gifs/robin_26760.gif';
import imageChatpack from '../../assets/images/chatpack.png';
import gifChatpack from '../../assets/gifs/chatpack_14500.gif';
import imageFind from '../../assets/images/find.png';
import gifFind from '../../assets/gifs/find_13130.gif';
import imageJstodo from '../../assets/images/jstodo.png';
import gifjstodo from '../../assets/gifs/jstodo_57040.gif';
import imageBattleship from '../../assets/images/battleship.png';
import gifBattleship from '../../assets/gifs/battleship_32010.gif';
import imageEryngi from '../../assets/images/eryngi.png';
import gifEryngi from '../../assets/gifs/eryngi_13060.gif';
import imageLeshop from '../../assets/images/leshop.png';
import gifLeshop from '../../assets/gifs/leshop_9000.gif';
import imageCvcreator from '../../assets/images/cvcreator.png';
import gifCvcreator from '../../assets/gifs/cvcreator_31350.gif';
import imageJustweather from '../../assets/images/justweather.png';
import gifJustweather from '../../assets/gifs/justweather_30350.gif';

const ProjectList: {
  id: number;
  title: string;
  imageURL: string;
  gifURL: string;
  gifLength: number;
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
    gifURL: gifRobin,
    gifLength: 26760,
    description:
      'A fully featured, twitter-like social network. Users can post, follow other users and customize their profile. The app uses Firebase as the backend.',
    githubLink: 'https://github.com/erynder-z/robin-sn',
    liveLink: 'https://erynder-z.github.io/robin-sn',
    technologies: 'React, JavaScript, Firebase',
    year: 2022,
  },
  {
    id: 2,
    title: 'Chatpack',
    imageURL: imageChatpack,
    gifURL: gifChatpack,
    gifLength: 14500,
    description:
      'A realtime chatroom application with a simple interface. Users can log on using a Google, GitHub, Twitter or Microsoft account.',
    githubLink: 'https://github.com/erynder-z/chatpack',
    liveLink: 'https://erynder-z.github.io/chatpack/',
    technologies: 'React, Typescript, Firebase',
    year: 2022,
  },
  {
    id: 3,
    title: '.find()',
    imageURL: imageFind,
    gifURL: gifFind,
    gifLength: 13130,
    description:
      'A hidden object game where users have to find certain characters in a huge image. The app features an online leaderboard for the 10 fastest players. ',
    githubLink: 'https://github.com/erynder-z/image-tagging-app',
    liveLink: 'https://erynder-z.github.io/image-tagging-app/',
    technologies: 'React, JavaScript, Firebase',
    year: 2022,
  },
  {
    id: 4,
    title: 'JS_Todo',
    imageURL: imageJstodo,
    gifURL: gifjstodo,
    gifLength: 57040,
    description:
      'A task-/organizer application. Users can search, create and modify tasks, set priorities and deadlines. Tasks can be categorized in predefined or custom categories. Tasks can be stored locally or online via a Firebase backend.',
    githubLink: 'https://github.com/erynder-z/JS_Todo',
    liveLink: 'https://erynder-z.github.io/JS_Todo/',
    technologies: 'JavaScript, Firebase',
    year: 2022,
  },
  {
    id: 5,
    title: 'Battleship',
    imageURL: imageBattleship,
    gifURL: gifBattleship,
    gifLength: 32010,
    description:
      'A battleship game build via test-driven development. Game logic is tested using the Jest testing framework.',
    githubLink: 'https://github.com/erynder-z/battleship',
    liveLink: 'https://erynder-z.github.io/battleship/',
    technologies: 'JavaScript, Jest',
    year: 2022,
  },
  {
    id: 6,
    title: 'Eryngi-CSS',
    imageURL: imageEryngi,
    gifURL: gifEryngi,
    gifLength: 13060,
    description:
      'A bootstrap-like custom CSS-library build with SCSS. Library can be used to quickly style a simple webpage.',
    githubLink: 'https://github.com/erynder-z/eryngi-css',
    liveLink: 'https://erynder-z.github.io/eryngi-css/',
    technologies: 'SASS',
    year: 2022,
  },
  {
    id: 7,
    title: 'Le-shop',
    imageURL: imageLeshop,
    gifURL: gifLeshop,
    gifLength: 9000,
    description:
      'Frontend for a fake online shop. Users can browse different product categories and add/remove items to/from the shopping cart. Shop items are fetched via an online API.',
    githubLink: 'https://github.com/erynder-z/le-shop',
    liveLink: 'https://erynder-z.github.io/le-shop/',
    technologies: 'React, JavaScript, Jest, Fake Store API',
    year: 2022,
  },
  {
    id: 8,
    title: 'CV-Creator',
    imageURL: imageCvcreator,
    gifURL: gifCvcreator,
    gifLength: 31350,
    description:
      'WYSIWYG-editor to create and print your resumee/cv. Users can add/remove sections of the cv as needed and the final document is updated in real-time.',
    githubLink: 'https://github.com/erynder-z/cv-creator',
    liveLink: 'https://erynder-z.github.io/cv-creator/',
    technologies: 'React, JavaScript',
    year: 2022,
  },
  {
    id: 9,
    title: 'Just the weather',
    imageURL: imageJustweather,
    gifURL: gifJustweather,
    gifLength: 30350,
    description:
      'A weather application using the OpenWeatherMap One Call API. Users can search for different cities and the app displays the current weather and optionally a 7-day forecast. Units can be shown in celsius or fahrenheit.',
    githubLink: 'https://github.com/erynder-z/just-the-weather',
    liveLink: 'https://erynder-z.github.io/just-the-weather/',
    technologies: 'JavaScript, OpenWeatherMap One Call API',
    year: 2022,
  },
];

export default ProjectList;
