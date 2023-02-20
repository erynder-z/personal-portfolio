import { LanguageType } from '../../../interfaces/customTypes';

export const getScrollingTextHeading = (language: LanguageType) => {
  switch (language) {
    case 'DE':
      return 'Stets';

    case 'JP':
      return '常に';

    default:
      return 'Always';
  }
};

export const getScrollingTexMessages = (language: LanguageType) => {
  switch (language) {
    case 'DE':
      return [
        'Neues erschaffen',
        'lernen',
        'an Aufgaben wachsen',
        'coden',
        'Neues erschaffen',
      ];

    case 'JP':
      return ['作成', '学ぶ', '育つ', 'コーディングする', '作成'];

    default:
      return ['create', 'learn', 'grow', 'code', 'create'];
  }
};
