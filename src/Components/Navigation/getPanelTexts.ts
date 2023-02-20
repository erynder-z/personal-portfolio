import { LanguageType } from '../../interfaces/customTypes';

export const getAboutPanelText = (language: LanguageType) => {
  switch (language) {
    case 'DE':
      return '[Über_mich]';

    case 'JP':
      return '[私のついて]';

    default:
      return '[about_me]';
  }
};

export const getProjectsPanelText = (language: LanguageType) => {
  switch (language) {
    case 'DE':
      return '[Projekte]';

    case 'JP':
      return '[プロジェクト]';

    default:
      return '[projects]';
  }
};

export const getSkillsPanelText = (language: LanguageType) => {
  switch (language) {
    case 'DE':
      return '[Fähigkeiten]';

    case 'JP':
      return '[スキル]';

    default:
      return '[skills]';
  }
};

export const getContactPanelText = (language: LanguageType) => {
  switch (language) {
    case 'DE':
      return '[Kontakt]';

    case 'JP':
      return '[連絡]';

    default:
      return '[contact]';
  }
};
