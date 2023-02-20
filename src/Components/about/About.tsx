import React, { FC, useContext } from 'react';
import './About.css';
import { RandomReveal } from 'react-random-reveal';
import LanguageContext from '../../contexts/LanguageContext';
import {
  getAboutTextParagraph1,
  getAboutTextParagraph2,
  getAboutTextParagraph3,
  getAboutTextParagraph4,
} from './getAboutText';

interface Props {
  active: boolean;
}

const About: FC<Props> = ({ active }) => {
  const { language } = useContext(LanguageContext);
  const revealCharacters = [...'░▒▓|'.split('')];
  const ignoreCharacters = [...' '.split('')];

  return (
    <div className="about-container">
      <div className={`about-wrapper ${!active ? 'hide' : ''}`}>
        {active && (
          <section className="about-text">
            <h2 className="about-heading">
              <RandomReveal
                isPlaying
                duration={2}
                characters={getAboutTextParagraph1(language)}
                characterSet={revealCharacters}
                ignoreCharacterSet={ignoreCharacters}
              />
            </h2>
            <p className={'about-content'}>
              <RandomReveal
                isPlaying
                duration={2}
                characters={getAboutTextParagraph2(language)}
                characterSet={revealCharacters}
                ignoreCharacterSet={ignoreCharacters}
              />
            </p>
            <p className={'about-content'}>
              <RandomReveal
                isPlaying
                duration={2}
                characters={getAboutTextParagraph3(language)}
                characterSet={revealCharacters}
                ignoreCharacterSet={ignoreCharacters}
              />
            </p>
            <p className={'about-content'}>
              <RandomReveal
                isPlaying
                duration={2}
                characters={getAboutTextParagraph4(language)}
                characterSet={revealCharacters}
                ignoreCharacterSet={ignoreCharacters}
              />
            </p>
          </section>
        )}
      </div>
    </div>
  );
};

export default About;
