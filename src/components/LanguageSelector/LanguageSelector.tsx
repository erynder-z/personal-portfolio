import React, { useContext } from 'react';
import LanguageContext from '../../contexts/LanguageContext';
import { FaGlobeAmericas } from 'react-icons/fa';
import './LanguageSelector.css';

export default function LanguageSelector() {
  const { language, setLanguage } = useContext(LanguageContext);

  const languageOptions = [
    {
      name: 'English',
      code: 'EN',
    },
    {
      name: 'Deutsch',
      code: 'DE',
    },
    {
      name: '日本語',
      code: 'JP',
    },
  ];
  return (
    <div className="language-selector">
      <div className="dropdown-menu">
        <FaGlobeAmericas size="2rem" />
        {language.code}
      </div>
      <div className="language-content">
        {languageOptions.map((language) => (
          <button
            key={language.code}
            type="button"
            onClick={() => {
              setLanguage(language);
            }}
          >
            {language.name}
          </button>
        ))}
      </div>
    </div>
  );
}
