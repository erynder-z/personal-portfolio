import { LanguageType } from '../../interfaces/customTypes';

export const getContactHeaderText = (language: LanguageType) => {
  switch (language) {
    case 'DE':
      return '[Kontakt]';

    case 'JP':
      return '[連絡]';

    default:
      return '[contact]';
  }
};

export const getGreetingText = (language: LanguageType) => {
  switch (language) {
    case 'DE':
      return 'Interesse an einer Zusammenarbeit?';

    case 'JP':
      return '協力が必要ですか？';

    default:
      return 'Want to get in touch?';
  }
};
