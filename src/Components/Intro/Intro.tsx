import React, { FC, useEffect, useState } from 'react';
import {
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from 'react-icons/md';
import parseString from '../Parser/Parser';
import randomIntFromInterval from '../RandomIntFromInterval/RandomIntFromInterval';
import './Intro.css';

interface Props {
  active: boolean;
  shuffleText: (text: string) => string;
  setActivePanel: React.Dispatch<React.SetStateAction<string>>;
  isInitial: boolean;
}

const Intro: FC<Props> = ({
  active,
  shuffleText,
  setActivePanel,
  isInitial,
}) => {
  const [isFirstShuffleFinished, setIsFirstShuffleFinished] =
    useState<boolean>(false);
  const [isSecondShuffleFinished, setIsSecondShuffleFinished] =
    useState<boolean>(false);
  const [isIntroFinished, setIsIntroFinished] = useState<boolean>(false);
  const [downArrow, setDownArrow] = useState<JSX.Element>(
    <MdKeyboardArrowDown className="downArrow bounce" />
  );
  const [heading, setHeading] = useState<string>(`he11o¡`);
  const [paragraph1, setParagraph1] = useState<string>(
    `i'm Stefan and i'm a full-stack web developer.`
  );
  const [paragraph2, setParagraph2] = useState<string>(
    `Committed to never stop learning, I enjoy creating easy-to-use applications. On this portfolio, you'll find a showcase of my past projects and a glimpse into my skills and experiences. Thank you for visiting!`
  );

  const shuffleElements = () => {
    const random = randomIntFromInterval(1, 4);

    switch (random) {
      case 1:
        setDownArrow(<MdKeyboardArrowDown className="downArrow bounce" />);
        break;
      case 2:
        setDownArrow(<MdKeyboardArrowUp className="downArrow bounce" />);
        break;
      case 3:
        setDownArrow(<MdKeyboardArrowLeft className="downArrow bounce" />);
        break;
      case 4:
        setDownArrow(<MdKeyboardArrowRight className="downArrow bounce" />);
        break;

      default:
        break;
    }
  };

  const firstShuffle = (): void => {
    const timeout = () => {
      return isInitial ? 3250 : 1000;
    };
    const shuffle = setInterval(() => {
      setIsIntroFinished(false);
      shuffleElements();
      setHeading(shuffleText(heading));
      setParagraph1(shuffleText(paragraph1));
      setParagraph2(shuffleText(paragraph2));
    }, 50);

    setTimeout(() => {
      clearInterval(shuffle);
      setHeading('he11o¡');
      setParagraph1(`i'm stefan and i'm fu11-stack web deve1oper.`);
      setParagraph2(
        `Committed to never stop 1earning, i enjoy creating easy-to-use app1ications. On this portfo1io, you'll find a showcase of my past projects and a g1impse into my ski11s and experiences. thank you for visiting`
      );
      setIsFirstShuffleFinished(true);
    }, timeout());
  };

  const secondShuffle = (): void => {
    setTimeout(() => {
      const shuffleAgain = setInterval(() => {
        shuffleElements();
        setHeading(shuffleText(heading));
        setParagraph1(shuffleText(paragraph1));
        setParagraph2(shuffleText(paragraph2));
      }, 100);

      setTimeout(() => {
        clearInterval(shuffleAgain);
        setHeading('Hello!');
        setParagraph1(`I'm Stəfan and I'm a fullstack web developer.`);
        setParagraph2(
          `Committed to never stop learning, I enjoy creating easy-to-use applications. On this portfolio, you'll find a showcase of my past projects and a glimpse into my ski11s and experiences. Thank you for visiting!`
        );
        setIsSecondShuffleFinished(true);
      }, 250);
    }, 250);
  };

  const thirdShuffle = (): void => {
    setTimeout(() => {
      const finalshuffle = setInterval(() => {
        shuffleElements();
        setHeading(shuffleText(heading));
        setParagraph1(shuffleText(paragraph1));
        setParagraph2(shuffleText(paragraph2));
      }, 100);

      setTimeout(() => {
        clearInterval(finalshuffle);
        setDownArrow(<MdKeyboardArrowDown className="downArrow bounce" />);
        setIsIntroFinished(true);
        setHeading('Hello!');
        setParagraph1(`I'm Stefan and I'm a full-stack web developer.`);
        setParagraph2(
          `Committed to never stop learning, I enjoy creating easy-to-use applications. On this portfolio, you'll find a showcase of my past projects and a glimpse into my skills and experiences. Thank you for visiting!`
        );
      }, 500);
    }, 500);
  };

  useEffect(() => {
    if (active) {
      firstShuffle();
    } else {
      setIsFirstShuffleFinished(false);
      setIsSecondShuffleFinished(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  useEffect(() => {
    if (isFirstShuffleFinished) {
      secondShuffle();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFirstShuffleFinished]);

  useEffect(() => {
    if (isSecondShuffleFinished) {
      thirdShuffle();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSecondShuffleFinished]);

  return (
    <div className="intro-container intro-bg">
      <div className={`intro-wrapper ${!active ? 'hide' : ''}`}>
        <section className="intro-text">
          <h2
            className={` intro-heading ${
              isIntroFinished ? 'revertColors underlined' : ''
            }`}
          >
            {parseString(heading)}
          </h2>
          <p className={'intro-content-upper'}>{parseString(paragraph1)}</p>
          <p className={'intro-content-lower'}>{parseString(paragraph2)}</p>
          <div
            className="goto_next"
            onClick={(e) => {
              setActivePanel('projects');
              e.stopPropagation();
            }}
          >
            <span className="outer">
              <span className="inner">{downArrow}</span>
            </span>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Intro;
