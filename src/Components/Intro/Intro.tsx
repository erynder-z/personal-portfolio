import React, { FC, useEffect, useState } from 'react';
import './Intro.css';
import { RandomReveal } from 'react-random-reveal';

interface Props {
  active: boolean;
  isInitial: boolean;
}

const Intro: FC<Props> = ({ active, isInitial }) => {
  const [introTextParagraph1] = useState<string>('Hello!');
  const [introTextParagraph2] = useState<string>(
    "I'm Stefan and I'm a full-stack web developer."
  );
  const [introTextParagraph3] = useState<string>(
    "Committed to never stop learning, I enjoy creating easy-to-use applications. On this portfolio, you'll find a showcase of my past projects and a glimpse into my skills and experiences. Thank you for visiting!"
  );

  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const revealCharacters = [...'░▒▓|'.split('')];
  const ignoreCharacters = [...' '.split('')];

  useEffect(() => {
    setTimeout(
      () => {
        setIsAnimating(true);
      },
      isInitial ? 2500 : 0
    );

    return () => {
      setIsAnimating(false);
    };
  }, [active]);

  return (
    <div className="intro-container">
      <div className={`intro-wrapper ${!active ? 'hide' : ''}`}>
        {isAnimating && (
          <section className="intro-text">
            <h2 className="intro-heading">
              <RandomReveal
                isPlaying={isAnimating}
                duration={2}
                characters={introTextParagraph1}
                characterSet={revealCharacters}
                ignoreCharacterSet={ignoreCharacters}
              />
            </h2>
            <p className={'intro-content-upper'}>
              <RandomReveal
                isPlaying={isAnimating}
                duration={2}
                characters={introTextParagraph2}
                characterSet={revealCharacters}
                ignoreCharacterSet={ignoreCharacters}
              />
            </p>
            <p className={'intro-content-lower'}>
              <RandomReveal
                isPlaying={isAnimating}
                duration={2}
                characters={introTextParagraph3}
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

export default Intro;
