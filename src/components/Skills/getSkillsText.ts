import { LanguageType } from '../../interfaces/customTypes';

export const getSkillsHeaderText = (language: LanguageType) => {
  switch (language.code) {
    case 'DE':
      return '[Fähigkeiten]';

    case 'JP':
      return '[スキル]';

    default:
      return '[skills]';
  }
};
