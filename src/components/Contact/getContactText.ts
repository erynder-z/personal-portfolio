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
      return { nameText: 'Name', emailText: 'Email', messageText: 'Nachricht' };

    case 'JP':
      return {
        nameText: 'お名前',
        emailText: 'メールアドレス',
        messageText: 'メッセージ',
      };

    default:
      return { nameText: 'Name', emailText: 'Email', messageText: 'Message' };
  }
};

export const getSendButtonText = (language: LanguageType) => {
  switch (language.code) {
    case 'DE':
      return 'Abschicken';

    case 'JP':
      return ' 送信 ';

    default:
      return 'Send';
  }
};
