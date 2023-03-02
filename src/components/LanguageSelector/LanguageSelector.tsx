import React, { useContext } from 'react';
import LanguageContext from '../../contexts/LanguageContext';
import { FaGlobeAmericas, FaGlobeEurope, FaGlobeAsia } from 'react-icons/fa';
import './LanguageSelector.css';

export default function LanguageSelector() {
  const { language, setLanguage } = useContext(LanguageContext);

  const languageOptions = [
    {
      name: 'English',
      code: 'EN',
      icon: <FaGlobeAmericas size="2rem" />,
    },
    {
      name: 'Deutsch',
      code: 'DE',
      icon: <FaGlobeEurope size="2rem" />,
    },
    {
      name: '日本語',
      code: 'JP',
      icon: <FaGlobeAsia size="2rem" />,
    },
  ];
  return (
    <div className="language-selector">
      <div className="dropdown-menu">
        {language.icon}
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
