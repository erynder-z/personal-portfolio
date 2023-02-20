import { LanguageType } from '../../../interfaces/customTypes';

export const getPortfolioHeaderText = (language: LanguageType) => {
  switch (language) {
    case 'DE':
      return '[Projekte]';

    case 'JP':
      return '[プロジェクト]';

    default:
      return '[projects]';
  }
};

export const getDescriptionHeadingText = (language: LanguageType) => {
  switch (language) {
    case 'DE':
      return 'Beschreibung';

    case 'JP':
      return '説明';

    default:
      return 'Description';
  }
};

export const getTechnologiesHeadingText = (language: LanguageType) => {
  switch (language) {
    case 'DE':
      return 'Technologien';

    case 'JP':
      return 'テク';

    default:
      return 'Technologies';
  }
};

export const getYearHeadingText = (language: LanguageType) => {
  switch (language) {
    case 'DE':
      return 'Jahr';

    case 'JP':
      return '年度';

    default:
      return 'Year';
  }
};

export const getPreviewButtonText = (language: LanguageType) => {
  switch (language) {
    case 'DE':
      return 'Vorschau';

    case 'JP':
      return 'プレビュー';

    default:
      return 'Preview';
  }
};

export const getSourceButtonText = (language: LanguageType) => {
  switch (language) {
    case 'DE':
      return 'Code';

    case 'JP':
      return 'ソース';

    default:
      return 'Source';
  }
};

export const getLiveButtonText = (language: LanguageType) => {
  switch (language) {
    case 'DE':
      return 'Live';

    case 'JP':
      return 'ライブ';

    default:
      return 'Live';
  }
};

export const getStopButtonText = (language: LanguageType) => {
  switch (language) {
    case 'DE':
      return 'Stop';

    case 'JP':
      return 'ストップ';

    default:
      return 'Stop';
  }
};

export const getProjectDescription = (language: LanguageType) => {
  switch (language) {
    case 'DE':
      return 'Stop';

    case 'JP':
      return 'ストップ';

    default:
      return 'Stop';
  }
};
