import React, { FC, useContext, useEffect, useState } from 'react';
import { RandomReveal } from 'react-random-reveal';
import LanguageContext from '../../../contexts/LanguageContext';
import {
  getScrollingTexMessages,
  getScrollingTextHeading,
} from './getScrollingText';

import './ScrollingText.css';

const ScrollingText: FC = () => {
  const { language } = useContext(LanguageContext);

  const [hideScrollingText, setHideScrollingText] = useState<boolean>(true);

  const revealCharacters = [...'░▒▓|'.split('')];
  const ignoreCharacters = [...' '.split('')];

  const animateScrollingText = (): void => {
    setTimeout(() => {
      setHideScrollingText(false);
    }, 1000);
  };

  useEffect(() => {
    animateScrollingText();
  }, []);

  return (
    <h2 className="scrolling-text-container">
      <RandomReveal
        isPlaying
        duration={1}
        characters={getScrollingTextHeading(language)}
        characterSet={revealCharacters}
        ignoreCharacterSet={ignoreCharacters}
      />

      <div
        className={`scrolling-text-content ${!hideScrollingText ? 'show' : ''}`}
      >
        <span>
          <span className="item1 pink">
            <RandomReveal
              isPlaying
              duration={1}
              characters={getScrollingTexMessages(language)[0]}
              characterSet={revealCharacters}
              ignoreCharacterSet={ignoreCharacters}
            />
          </span>
          <br />
          <span className="item2 red">
            {getScrollingTexMessages(language)[1]}
          </span>
          <br />
          <span className="item3 orange">
            {getScrollingTexMessages(language)[2]}
          </span>
          <br />
          <span className="item4 blue">
            {getScrollingTexMessages(language)[3]}
          </span>
          <br />
          <span className="item5 pink">
            {getScrollingTexMessages(language)[4]}
          </span>
        </span>
      </div>
    </h2>
  );
};

export default ScrollingText;
