import React, { FC, useEffect, useRef, useState } from 'react';
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
  const [currentBgColor, setCurrentBgColor] = useState<string | null>(null);
  const navRefIntro = useRef<HTMLDivElement>(null);
  const navRefprojects = useRef<HTMLDivElement>(null);
  const navRefSkills = useRef<HTMLDivElement>(null);
  const navRefContact = useRef<HTMLDivElement>(null);
  const [activePanel, setActivePanel] = useState<string>(categories[0]);
  const [doShuffle, setDoShuffle] = useState<boolean>(true);
  const [categoriesText, setCategoriesText] = useState<string[]>([
    '[intro]',
    '[projects]',
    '[skills]',
    '[contact]',
  ]);

  const firstShuffle = (): void => {
    const timeout = () => {
      return isInitial ? 3250 : 1000;
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
      return isInitial ? 3500 : 1250;
    };
    setTimeout(() => {
      const shuffleAgain = setInterval(() => {
        setCategoriesText(shuffleNav(categoriesText));
      }, 100);

      setTimeout(() => {
        clearInterval(shuffleAgain);

        setCategoriesText(['[Intro]', '[ProJects]', '[Ski11s]', '[Contact]']);
      }, 250);
    }, timeout());
  };

  const thirdShuffle = (): void => {
    const timeout = () => {
      return isInitial ? 4250 : 2000;
    };
    setTimeout(() => {
      const finalshuffle = setInterval(() => {
        setCategoriesText(shuffleNav(categoriesText));
      }, 100);

      setTimeout(() => {
        clearInterval(finalshuffle);
        setCategoriesText(['[Intro]', '[Projects]', '[Skills]', '[Contact]']);
        setDoShuffle(false);
      }, 500);
    }, timeout());
  };

  const categoryChangeShuffle = (): void => {
    const shuffle = setInterval(() => {
      setCategoriesText(shuffleNav(categoriesText));
    }, 50);

    setTimeout(() => {
      clearInterval(shuffle);
      setCategoriesText(['[Intro]', '[Projects]', '[Skills]', '[Contact]']);
    }, 1000);
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
          ref={navRefIntro}
          style={
            activePanel === categories[1]
              ? {
                  backgroundColor: currentBgColor!,
                  transition: 'background-color 1000ms',
                }
              : {}
          }
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
            isInitial={isInitial}
          />
        </div>
        <div
          ref={navRefprojects}
          style={
            activePanel === categories[1]
              ? {
                  backgroundColor: currentBgColor!,
                  transition: 'background-color 1000ms',
                }
              : {}
          }
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
            setCurrentBgColor={setCurrentBgColor}
          />
        </div>
        <div
          ref={navRefSkills}
          style={
            activePanel === categories[1]
              ? {
                  backgroundColor: currentBgColor!,
                  transition: 'background-color 1000ms',
                }
              : {}
          }
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
          />
        </div>
        <div
          ref={navRefContact}
          style={
            activePanel === categories[1]
              ? {
                  backgroundColor: currentBgColor!,
                  transition: 'background-color 1000ms',
                }
              : {}
          }
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
          ></Contact>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
