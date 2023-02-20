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
  description_EN: string;
  description_DE: string;
  description_JP: string;
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
    description_EN: 'A fully-featured social network.',
    description_DE: 'Ein komplettes soziales Netzwerk.',
    description_JP: 'フル機能のソーシャル ネットワーク。',
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
    description_EN: 'A Commodore 64 game database.',
    description_DE: 'Eine Commodore 64 Datenbank.',
    description_JP: 'Commodore 64 ゲーム データベース。',
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
    description_EN: 'A realtime chatroom application with a simple interface.',
    description_DE: 'Ein Echtzeit-Chat mit einem simplen Inferface.',
    description_JP: 'シンプルなUIのリアルタイム チャットルーム。',
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
    description_EN:
      'A hidden object game where users have to find certain characters in a huge image.',
    description_DE:
      'Ein Wimmelbild-Spiel bei dem bestimmte Charaktere in einem riesigen Bild gefunden werden müssen.',
    description_JP:
      '巨大な画像の中から特定のキャラクターを見つけ出さなければならないアイテム探しゲーム。',
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
    description_EN: 'A task-/organizer application.',
    description_DE: 'Ein Task-Organizer.',
    description_JP: 'タスク/オーガナイザー アプリケーション。',
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
    description_EN: 'A battleship game built via test-driven development.',
    description_DE:
      'Ein Schiffe-versenken-Spiel entwickelt via Test-Driven Development.',
    description_JP: 'TDDで構築された戦艦ゲーム。',
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
    description_EN: 'A bootstrap-like custom CSS library build with SCSS.',
    description_DE:
      'Ein mit SCSS erstelltes CSS framework für simpler Layouts.',
    description_JP:
      'SCSSで構築されたブートストラップのようなカスタム CSS ライブラリ。',
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
    description_EN: 'Frontend for a fake online shop.',
    description_DE: 'Frontend for a einen fake Onlineshop.',
    description_JP: '偽のオンライン ショップのフロントエンド。',
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
    description_EN: 'WYSIWYG-editor to create and print your resumee/cv.',
    description_DE:
      'WYSIWYG-Editor zum Erstellen und Ausdrucken eines Lebenslaufes.',
    description_JP: '履歴書を作成および印刷するための WYSIWYG エディター。',
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
    description_EN:
      'A weather application using the OpenWeatherMap One Call API.',
    description_DE:
      'Eine Wetter-App auf Basis der OpenWeatherMap One Call API.',
    description_JP:
      'OpenWeatherMap One Call API を使用した天気アプリケーション。',
    githubLink: 'https://github.com/erynder-z/just-the-weather',
    liveLink: 'https://erynder-z.github.io/just-the-weather/',
    technologies: 'JavaScript, OpenWeatherMap One Call API',
    year: 2022,
  },
];

export default ProjectList;
