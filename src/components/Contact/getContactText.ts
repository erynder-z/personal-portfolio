import { LanguageType } from '../../interfaces/customTypes';

export const getContactHeaderText = (language: LanguageType) => {
  switch (language.code) {
    case 'DE':
      return '[Kontakt]';

    case 'JP':
      return '[連絡]';

    default:
      return '[contact]';
  }
};

export const getGreetingText = (language: LanguageType) => {
  switch (language.code) {
    case 'DE':
      return 'Interesse an einer Zusammenarbeit?';

    case 'JP':
      return '協力が必要ですか？';

    default:
      return 'Want to get in touch?';
  }
};

export const getContactFormText = (language: LanguageType) => {
  switch (language.code) {
    case 'DE':
      return { name: 'Name', email: 'Email', message: 'Nachricht' };

    case 'JP':
      return { name: 'お名前', email: 'メールアドレス', message: 'メッセージ' };

    default:
      return { name: 'Name', email: 'Email', message: 'Message' };
  }
};
