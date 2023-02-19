import React, { FC, useState } from 'react';
import './About.css';
import { RandomReveal } from 'react-random-reveal';

interface Props {
  active: boolean;
  isInitial: boolean;
}

const Intro: FC<Props> = ({ active }) => {
  const [aboutTextParagraph1] = useState<string>('Hello!');
  const [aboutTextParagraph2] = useState<string>(
    "I'm Stefan and I'm a full-stack web developer."
  );
  const [aboutTextParagraph3] = useState<string>(
    "Committed to never stop learning, I enjoy creating easy-to-use applications. On this portfolio, you'll find a showcase of my past projects and a glimpse into my skills and experiences. Thank you for visiting!"
  );

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
                characters={aboutTextParagraph1}
                characterSet={revealCharacters}
                ignoreCharacterSet={ignoreCharacters}
              />
            </h2>
            <p className={'about-content-upper'}>
              <RandomReveal
                isPlaying
                duration={2}
                characters={aboutTextParagraph2}
                characterSet={revealCharacters}
                ignoreCharacterSet={ignoreCharacters}
              />
            </p>
            <p className={'about-content-lower'}>
              <RandomReveal
                isPlaying
                duration={2}
                characters={aboutTextParagraph3}
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
