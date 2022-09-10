import React, { FC, useEffect, useState } from 'react';
import Intro from '../Intro/Intro';
import Portfolio from '../Portfolio/Portfolio';
import './Navigation.css';

interface Props {
  shuffleText: (text: string, identifier: string) => string;
  shuffleNav: (categories: string[]) => string[];
}

const Navigation: FC<Props> = ({ shuffleText, shuffleNav }) => {
  const [activePanel, setActivePanel] = useState<string>('intro');
  const [doShuffle, setDoShuffle] = useState<boolean>(true);
  const [categories, setCategories] = useState<string[]>([
    'intro',
    'portfolio',
    'skills',
    'contact',
  ]);

  const firstShuffle = (): void => {
    const shuffle = setInterval(() => {
      setCategories(shuffleNav(categories));
    }, 50);

    setTimeout(() => {
      clearInterval(shuffle);

      setCategories(['!ntro', 'portfol!o', 'sk!lls', 'contact']);
    }, 2000);
  };

  const secondShuffle = (): void => {
    setTimeout(() => {
      const shuffleAgain = setInterval(() => {
        setCategories(shuffleNav(categories));
      }, 100);

      setTimeout(() => {
        clearInterval(shuffleAgain);

        setCategories(['Intro', 'Portfo1io', 'Ski11s', 'Contact']);
      }, 500);
    }, 3000);
  };

  const thirdShuffle = (): void => {
    setTimeout(() => {
      const finalshuffle = setInterval(() => {
        setCategories(shuffleNav(categories));
      }, 50);

      setTimeout(() => {
        clearInterval(finalshuffle);
        setCategories(['Intro', 'Portfolio', 'Skills', 'Contact']);
        setDoShuffle(false);
      }, 1000);
    }, 5000);
  };

  useEffect(() => {
    if (doShuffle) {
      firstShuffle();
      secondShuffle();
      thirdShuffle();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [doShuffle]);

  return (
    <nav>
      <div className="panels">
        <div
          className={`panel intro ${
            activePanel === 'intro' ? 'open' : 'closed'
          }`}
          onClick={() => {
            if (activePanel !== 'intro') {
              setActivePanel('intro');
              setDoShuffle(true);
            }
          }}
        >
          <h1>{categories[0]}</h1>
          <Intro
            active={activePanel === 'intro' ? true : false}
            shuffleText={shuffleText}
            setActivePanel={setActivePanel}
          />
        </div>
        <div
          className={`panel portfolio ${
            activePanel === 'portfolio' ? 'open' : 'closed'
          }`}
          onClick={() => {
            setActivePanel('portfolio');
          }}
        >
          <h1>{categories[1]}</h1>
          <Portfolio
            active={activePanel === 'portfolio' ? true : false}
            shuffleText={shuffleText}
            setActivePanel={setActivePanel}
          />
        </div>
        <div
          className={`panel skills ${
            activePanel === 'skills' ? 'open' : 'closed'
          }`}
          onClick={() => {
            setActivePanel('skills');
          }}
        >
          <h1>{categories[2]}</h1>
          <p>My skills</p>
        </div>
        <div
          className={`panel contact ${
            activePanel === 'contact' ? 'open' : 'closed'
          }`}
          onClick={() => {
            setActivePanel('contact');
          }}
        >
          <h1>{categories[3]}</h1>
          <p>Contact me</p>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
