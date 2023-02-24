import imageRobin from '../../assets/webp/robin.webp';
import animationRobin from '../../assets/webm/robin.webm';
import imageZ64 from '../../assets/webp/z64.webp';
import animationZ64 from '../../assets/webm/z64.webm';
import imageCodeblog from '../../assets/webp/codeblog.webp';
import animationCodeblog from '../../assets/webm/codeblog.webm';
import imageChatpack from '../../assets/webp/chatpack.webp';
import animationChatpack from '../../assets/webm/chatpack.webm';
import imageFind from '../../assets/webp/find.webp';
import animationFind from '../../assets/webm/find.webm';
import imageJstodo from '../../assets/webp/jstodo.webp';
import animationjstodo from '../../assets/webm/jstodo.webm';
import imageBattleship from '../../assets/webp/battleship.webp';
import animationBattleship from '../../assets/webm/battleship.webm';
import imageEryngi from '../../assets/webp/eryngicss.webp';
import animationEryngi from '../../assets/webm/eryngicss.webm';
import imageLeshop from '../../assets/webp/leshop.webp';
import animationLeshop from '../../assets/webm/leshop.webm';
import imageCvcreator from '../../assets/webp/cvcreator.webp';
import animationCvcreator from '../../assets/webm/cvcreator.webm';
import imageJustweather from '../../assets/webp/justweather.webp';
import animationJustweather from '../../assets/webm/justweather.webm';

const ProjectList: {
  id: number;
  title: string;
  previewImageURL: string;
  previewVideoURL: string;
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
    previewImageURL: imageRobin,
    previewVideoURL: animationRobin,
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
    title: './code/blog',
    previewImageURL: imageCodeblog,
    previewVideoURL: animationCodeblog,
    description_EN:
      'A blog, complete with client, CMS and RESTful API backend.',
    description_DE:
      'Ein Blog, komplett mit Client, CMS und einer RESTful API im backend ',
    description_JP:
      'クライアント、CMS、RESTful API バックエンドを備えたブログ。',
    githubLink: 'https://github.com/erynder-z/code-blog',
    liveLink: 'https://erynder-z.github.io/code-blog/',
    technologies: 'React, TypeScript, Node.js, Express, MongoDB, JWT',
    year: 2023,
  },
  {
    id: 3,
    title: 'Z64',
    previewImageURL: imageZ64,
    previewVideoURL: animationZ64,
    description_EN: 'A Commodore 64 game database.',
    description_DE: 'Eine Commodore 64 Datenbank.',
    description_JP: 'Commodore 64 ゲーム データベース。',
    githubLink: 'https://github.com/erynder-z/c64-game-database',
    liveLink: 'https://c64-game-database.onrender.com/',
    technologies: 'Node.js, Express, MongoDB, EJS',
    year: 2022,
  },
  {
    id: 4,
    title: 'Chatpack',
    previewImageURL: imageChatpack,
    previewVideoURL: animationChatpack,
    description_EN: 'A realtime chatroom application with a simple interface.',
    description_DE: 'Ein Echtzeit-Chat mit einem simplen Inferface.',
    description_JP: 'シンプルなUIのリアルタイム チャットルーム。',
    githubLink: 'https://github.com/erynder-z/chatpack',
    liveLink: 'https://erynder-z.github.io/chatpack/',
    technologies: 'React, Typescript, Firebase',
    year: 2022,
  },
  {
    id: 5,
    title: '.find()',
    previewImageURL: imageFind,
    previewVideoURL: animationFind,
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
    id: 6,
    title: 'JS_Todo',
    previewImageURL: imageJstodo,
    previewVideoURL: animationjstodo,
    description_EN: 'A task-/organizer application.',
    description_DE: 'Ein Task-Organizer.',
    description_JP: 'タスク/オーガナイザー アプリケーション。',
    githubLink: 'https://github.com/erynder-z/JS_Todo',
    liveLink: 'https://erynder-z.github.io/JS_Todo/',
    technologies: 'JavaScript, Firebase',
    year: 2022,
  },
  {
    id: 7,
    title: 'Battleship',
    previewImageURL: imageBattleship,
    previewVideoURL: animationBattleship,
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
    id: 8,
    title: 'Eryngi-CSS',
    previewImageURL: imageEryngi,
    previewVideoURL: animationEryngi,
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
    id: 9,
    title: 'Le-shop',
    previewImageURL: imageLeshop,
    previewVideoURL: animationLeshop,
    description_EN: 'Frontend for a fake online shop.',
    description_DE: 'Frontend for a einen fake Onlineshop.',
    description_JP: '偽のオンライン ショップのフロントエンド。',
    githubLink: 'https://github.com/erynder-z/le-shop',
    liveLink: 'https://erynder-z.github.io/le-shop/',
    technologies: 'React, JavaScript, Jest, Fake Store API',
    year: 2022,
  },
  {
    id: 10,
    title: 'CV-Creator',
    previewImageURL: imageCvcreator,
    previewVideoURL: animationCvcreator,
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
    id: 11,
    title: 'Just the weather',
    previewImageURL: imageJustweather,
    previewVideoURL: animationJustweather,
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
