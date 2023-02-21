import React, { useContext } from 'react';
import LanguageContext from '../../contexts/LanguageContext';
import { FaGlobeAmericas } from 'react-icons/fa';
import './LanguageSelector.css';

export default function LanguageSelector() {
  const { language, setLanguage } = useContext(LanguageContext);
  return (
    <div className="language-selector">
      <div className="dropdown-menu">
        <FaGlobeAmericas size="2rem" />
        {language === 'EN' && 'EN'}
        {language === 'DE' && 'DE'}
        {language === 'JP' && 'JP'}
      </div>
      <div className="language-content">
        <button
          type="button"
          onClick={() => {
            setLanguage('EN');
          }}
        >
          English
        </button>
        <button
          type="button"
          onClick={() => {
            setLanguage('DE');
          }}
        >
          Deutsch
        </button>
        <button
          type="button"
          onClick={() => {
            setLanguage('JP');
          }}
        >
          日本語
        </button>
      </div>
    </div>
  );
}
