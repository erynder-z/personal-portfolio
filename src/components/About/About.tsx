import React, { FC, useContext } from 'react';
import './About.css';
import { RandomReveal } from 'react-random-reveal';
import LanguageContext from '../../contexts/LanguageContext';
import * as aboutText from './getAboutText';
import { revealCharacters, ignoreCharacters } from '../../utils/utils';

interface Props {
  active: boolean;
}

const About: FC<Props> = ({ active }) => {
  const { language } = useContext(LanguageContext);

  // Set vh for Chrome 100vh fix
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  const aboutTextArray: string[] = [
    aboutText.getAboutTextParagraph1(language),
    aboutText.getAboutTextParagraph2(language),
    aboutText.getAboutTextParagraph3(language),
    aboutText.getAboutTextParagraph4(language),
    aboutText.getAboutTextParagraph5(language),
  ];

  return (
    <div className={`about-container ${active ? 'active' : ''}`}>
      {active && (
        <section className="about-text">
          <h2 className="about-heading">
            <RandomReveal
              isPlaying
              duration={2}
              characters={aboutTextArray[0]}
              characterSet={revealCharacters}
              ignoreCharacterSet={ignoreCharacters}
            />
          </h2>
          {aboutTextArray.slice(1).map((paragraph: string, index: number) => (
            <p className="about-content" key={index}>
              <RandomReveal
                isPlaying
                duration={2}
                characters={paragraph}
                characterSet={revealCharacters}
                ignoreCharacterSet={ignoreCharacters}
              />
            </p>
          ))}
        </section>
      )}
    </div>
  );
};

export default About;