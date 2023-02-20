import { LanguageType } from '../../interfaces/customTypes';

export const getAboutTextParagraph1 = (language: LanguageType) => {
  switch (language) {
    case 'DE':
      return 'Hallo!';

    case 'JP':
      return 'こんにちは!';

    default:
      return 'Hello!';
  }
};

export const getAboutTextParagraph2 = (language: LanguageType) => {
  switch (language) {
    case 'DE':
      return 'Ich bin Stefan und ich bin Full-Stack Webentwickler!';

    case 'JP':
      return 'フルスタックの Web 開発者のStefanです。';

    default:
      return `I'm Stefan and I'm a full-stack web developer.`;
  }
};

export const getAboutTextParagraph3 = (language: LanguageType) => {
  switch (language) {
    case 'DE':
      return 'Ich liebe es leicht-zu-bedienende Webanwendungen zu erstellen.';

    case 'JP':
      return '使いやすい Web アプリケーションを作成することが好きです。';

    default:
      return `I enjoy creating easy-to-use web applications.`;
  }
};

export const getAboutTextParagraph4 = (language: LanguageType) => {
  switch (language) {
    case 'DE':
      return 'Auf dieser Webseite findes Du ein paar meiner vergangenen Projekte und einen Einblick in meine Fähigkeiten und Erfahrungen. Vielen Dank für Deinen Beusch!';

    case 'JP':
      return 'このウェブサイトでは、私の過去のプロジェクトのショーケースと、私のスキルと経験を垣間見ることができます。どうぞご覧ください!';

    default:
      return `On this website, you'll find a showcase of my past projects and a glimpse into my skills and experiences. Thank you for visiting!`;
  }
};
