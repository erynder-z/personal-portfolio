import React, { FC, useEffect, useState } from 'react';
import Contact from '../Contact/Contact';
import Intro from '../Intro/Intro';
import Portfolio from '../Portfolio/Portfolio';
import Skills from '../Skills/Skills';
import './Navigation.css';

interface Props {
  shuffleText: (text: string) => string;
  shuffleNav: (categories: string[]) => string[];
  isInitial: boolean;
}

const Navigation: FC<Props> = ({ shuffleText, shuffleNav, isInitial }) => {
  const categories = ['intro', 'projects', 'skills', 'contact'];
  const [activePanel, setActivePanel] = useState<string>(categories[0]);
  const [doShuffle, setDoShuffle] = useState<boolean>(true);
  const [categoriesText, setCategoriesText] = useState<string[]>([
    '[intro]',
    '[projects]',
    '[skills]',
    '[contact]',
  ]);

  const onScroll = (ref: React.RefObject<HTMLDivElement>): void => {
    if (ref.current) {
      const { scrollTop, scrollHeight, clientHeight } = ref.current;
      if (Math.ceil(scrollTop + clientHeight) === scrollHeight) {
        console.log('reached bottom');
        if (categories.indexOf(activePanel) < 3) {
          setActivePanel(categories[categories.indexOf(activePanel) + 1]);
        } else {
          setActivePanel(categories[0]);
        }
      }
      if (scrollTop === 0) {
        console.log('reached top');
        if (categories.indexOf(activePanel) >= 0) {
          setActivePanel(categories[categories.indexOf(activePanel) - 1]);
        } else {
          setActivePanel(categories[3]);
        }
      }
    }
  };

  const firstShuffle = (): void => {
    const timeout = () => {
      return isInitial ? 5000 : 2000;
    };
    const shuffle = setInterval(() => {
      setCategoriesText(shuffleNav(categoriesText));
    }, 50);

    setTimeout(() => {
      clearInterval(shuffle);

      setCategoriesText(['[!ntro]', '[proJects]', '[sk!lls]', '[contact]']);
    }, timeout());
  };

  const secondShuffle = (): void => {
    const timeout = () => {
      return isInitial ? 6000 : 3000;
    };
    setTimeout(() => {
      const shuffleAgain = setInterval(() => {
        setCategoriesText(shuffleNav(categoriesText));
      }, 100);

      setTimeout(() => {
        clearInterval(shuffleAgain);

        setCategoriesText(['[Intro]', '[ProJects]', '[Ski11s]', '[Contact]']);
      }, 500);
    }, timeout());
  };

  const thirdShuffle = (): void => {
    const timeout = () => {
      return isInitial ? 8000 : 5000;
    };
    setTimeout(() => {
      const finalshuffle = setInterval(() => {
        setCategoriesText(shuffleNav(categoriesText));
      }, 50);

      setTimeout(() => {
        clearInterval(finalshuffle);
        setCategoriesText(['[Intro]', '[Projects]', '[Skills]', '[Contact]']);
        setDoShuffle(false);
      }, 1000);
    }, timeout());
  };

  const categoryChangeShuffle = (): void => {
    const shuffle = setInterval(() => {
      setCategoriesText(shuffleNav(categoriesText));
    }, 50);

    setTimeout(() => {
      clearInterval(shuffle);
      setCategoriesText(['[Intro]', '[Projects]', '[Skills]', '[Contact]']);
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
            activePanel === categories[0] ? 'open' : 'closed'
          }`}
          onClick={() => {
            if (activePanel !== categories[0]) {
              setActivePanel(categories[0]);
              setDoShuffle(true);
            }
          }}
        >
          <h1 className="panel-heading-intro">{categoriesText[0]}</h1>
          <Intro
            active={activePanel === categories[0] ? true : false}
            shuffleText={shuffleText}
            setActivePanel={setActivePanel}
            onScroll={onScroll}
            isInitial={isInitial}
          />
        </div>
        <div
          className={`panel projects ${
            activePanel === categories[1] ? 'open' : 'closed'
          }`}
          onClick={() => {
            setActivePanel(categories[1]);
            if (activePanel !== categories[1]) {
              categoryChangeShuffle();
            }
          }}
        >
          <h1 className="panel-heading-projects">{categoriesText[1]}</h1>
          <Portfolio
            active={activePanel === categories[1] ? true : false}
            shuffleText={shuffleText}
            setActivePanel={setActivePanel}
            onScroll={onScroll}
          />
        </div>
        <div
          className={`panel skills ${
            activePanel === categories[2] ? 'open' : 'closed'
          }`}
          onClick={() => {
            setActivePanel(categories[2]);
            if (activePanel !== categories[2]) {
              categoryChangeShuffle();
            }
          }}
        >
          <h1 className="panel-heading-skills">{categoriesText[2]}</h1>
          <Skills
            active={activePanel === categories[2] ? true : false}
            shuffleText={shuffleText}
            setActivePanel={setActivePanel}
            onScroll={onScroll}
          />
        </div>
        <div
          className={`panel contact ${
            activePanel === categories[3] ? 'open' : 'closed'
          }`}
          onClick={() => {
            setActivePanel(categories[3]);
            if (activePanel !== categories[3]) {
              categoryChangeShuffle();
            }
          }}
        >
          <h1 className="panel-heading-contact">{categoriesText[3]}</h1>
          <Contact
            active={activePanel === categories[3] ? true : false}
            shuffleText={shuffleText}
            setActivePanel={setActivePanel}
            onScroll={onScroll}
          ></Contact>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
