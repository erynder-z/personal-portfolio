import React, { FC, useEffect, useState } from 'react';
import { RandomReveal } from 'react-random-reveal';

import './ScrollingText.css';

const ScrollingText: FC = () => {
  const [scrollingText, setScrollingText] = useState<string>('Always');
  const [scrollingTextMessages, setScrollingTextMessages] = useState<{
    message1: string;
    message2: string;
    message3: string;
    message4: string;
    message5: string;
  }>({
    message1: 'create',
    message2: 'learn',
    message3: 'code',
    message4: 'grow',
    message5: 'create',
  });
  const [hideScrollingText, setHideScrollingText] = useState<boolean>(true);

  const revealCharacters = [...'░▒▓|'.split('')];
  const ignoreCharacters = [...' '.split('')];

  const animateScrollingText = (): void => {
    setHideScrollingText(true);

    setTimeout(() => {
      setScrollingText('Always');
      setScrollingTextMessages({
        message1: 'create',
        message2: 'learn',
        message3: 'code',
        message4: 'grow',
        message5: 'create',
      });
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
        characters={scrollingText}
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
              characters={scrollingTextMessages.message1}
              characterSet={revealCharacters}
              ignoreCharacterSet={ignoreCharacters}
            />
          </span>
          <br />
          <span className="item2 red">{scrollingTextMessages.message2}</span>
          <br />
          <span className="item3 orange">{scrollingTextMessages.message3}</span>
          <br />
          <span className="item4 blue">{scrollingTextMessages.message4}</span>
          <br />
          <span className="item5 pink">{scrollingTextMessages.message5}</span>
        </span>
      </div>
    </h2>
  );
};

export default ScrollingText;
