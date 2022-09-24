import React, { FC, useEffect, useRef, useState } from 'react';
import Contact from '../Contact/Contact';
import Intro from '../Intro/Intro';
import Portfolio from '../Portfolio/Portfolio';
import Skills from '../Skills/Skills';
import './Navigation.css';

interface Props {
  shuffleText: (text: string) => string;
  shuffleNav: (categories: string[]) => string[];
}

const Navigation: FC<Props> = ({ shuffleText, shuffleNav }) => {
  const [activePanel, setActivePanel] = useState<string>('intro');
  const [doShuffle, setDoShuffle] = useState<boolean>(true);
  const [categories, setCategories] = useState<string[]>([
    '[intro]',
    '[projects]',
    '[skills]',
    '[contact]',
  ]);

  const firstShuffle = (): void => {
    const shuffle = setInterval(() => {
      setCategories(shuffleNav(categories));
    }, 50);

    setTimeout(() => {
      clearInterval(shuffle);

      setCategories(['[!ntro]', '[proJects]', '[sk!lls]', '[contact]']);
    }, 2000);
  };

  const secondShuffle = (): void => {
    setTimeout(() => {
      const shuffleAgain = setInterval(() => {
        setCategories(shuffleNav(categories));
      }, 100);

      setTimeout(() => {
        clearInterval(shuffleAgain);

        setCategories(['[Intro]', '[ProJects]', '[Ski11s]', '[Contact]']);
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
        setCategories(['[Intro]', '[Projects]', '[Skills]', '[Contact]']);
        setDoShuffle(false);
      }, 1000);
    }, 5000);
  };

  const categoryChangeShuffle = (): void => {
    const shuffle = setInterval(() => {
      setCategories(shuffleNav(categories));
    }, 50);

    setTimeout(() => {
      clearInterval(shuffle);
      setCategories(['[Intro]', '[Projects]', '[Skills]', '[Contact]']);
    }, 2000);
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
          <h1 className="panel-heading-intro">{categories[0]}</h1>
          <Intro
            active={activePanel === 'intro' ? true : false}
            shuffleText={shuffleText}
            setActivePanel={setActivePanel}
          />
        </div>
        <div
          className={`panel projects ${
            activePanel === 'projects' ? 'open' : 'closed'
          }`}
          onClick={() => {
            setActivePanel('projects');
            if (activePanel !== 'projects') {
              categoryChangeShuffle();
            }
          }}
        >
          <h1 className="panel-heading-projects">{categories[1]}</h1>
          <Portfolio
            active={activePanel === 'projects' ? true : false}
            shuffleText={shuffleText}
          />
        </div>
        <div
          className={`panel skills ${
            activePanel === 'skills' ? 'open' : 'closed'
          }`}
          onClick={() => {
            setActivePanel('skills');
            if (activePanel !== 'skills') {
              categoryChangeShuffle();
            }
          }}
        >
          <h1 className="panel-heading-skills">{categories[2]}</h1>
          <Skills
            active={activePanel === 'skills' ? true : false}
            shuffleText={shuffleText}
          />
        </div>
        <div
          className={`panel contact ${
            activePanel === 'contact' ? 'open' : 'closed'
          }`}
          onClick={() => {
            setActivePanel('contact');
            if (activePanel !== 'contact') {
              categoryChangeShuffle();
            }
          }}
        >
          <h1 className="panel-heading-contact">{categories[3]}</h1>
          <Contact
            active={activePanel === 'contact' ? true : false}
            shuffleText={shuffleText}
          ></Contact>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
