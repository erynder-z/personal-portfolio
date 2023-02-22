import { LanguageType } from '../../../interfaces/customTypes';

export const getPortfolioHeaderText = (language: LanguageType) => {
  switch (language.code) {
    case 'DE':
      return '[Projekte]';

    case 'JP':
      return '[プロジェクト]';

    default:
      return '[projects]';
  }
};

export const getDescriptionHeadingText = (language: LanguageType) => {
  switch (language.code) {
    case 'DE':
      return 'Beschreibung';

    case 'JP':
      return 'Description';

    default:
      return 'Description';
  }
};

export const getTechnologiesHeadingText = (language: LanguageType) => {
  switch (language.code) {
    case 'DE':
      return 'Technologien';

    case 'JP':
      return 'Technologies';

    default:
      return 'Technologies';
  }
};

export const getYearHeadingText = (language: LanguageType) => {
  switch (language.code) {
    case 'DE':
      return 'Jahr';

    case 'JP':
      return 'Year';

    default:
      return 'Year';
  }
};

export const getPreviewButtonText = (language: LanguageType) => {
  switch (language.code) {
    case 'DE':
      return '[Preview]';

    case 'JP':
      return '[Preview]';

    default:
      return '[Preview]';
  }
};

export const getSourceButtonText = (language: LanguageType) => {
  switch (language.code) {
    case 'DE':
      return '[Code]';

    case 'JP':
      return '[Source]';

    default:
      return '[Source]';
  }
};

export const getLiveButtonText = (language: LanguageType) => {
  switch (language.code) {
    case 'DE':
      return '[Live]';

    case 'JP':
      return '[Live]';

    default:
      return '[Live]';
  }
};

export const getStopButtonText = (language: LanguageType) => {
  switch (language.code) {
    case 'DE':
      return '[Stop]';

    case 'JP':
      return '[Stop]';

    default:
      return '[Stop]';
  }
};
