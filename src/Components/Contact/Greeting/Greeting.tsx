import React, { FC, useContext } from 'react';
import { RandomReveal } from 'react-random-reveal';
import LanguageContext from '../../../contexts/LanguageContext';
import { getGreetingText } from '../getContactText';

import './Greeting.css';

const Greeting: FC = () => {
  const { language } = useContext(LanguageContext);
  const revealCharacters = [...'░▒▓|'.split('')];
  const ignoreCharacters = [...' '.split('')];
  return (
    <h2 className="contact-main-greeting">
      <RandomReveal
        isPlaying
        duration={1}
        characters={getGreetingText(language)}
        characterSet={revealCharacters}
        ignoreCharacterSet={ignoreCharacters}
      />
    </h2>
  );
};

export default Greeting;
