import React, { FC, useEffect, useState } from 'react';
import {
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from 'react-icons/md';
import parseString from '../Parser/Parser';
import randomIntFromInterval from '../RandomIntFromInverval/RandomIntFromInverval';
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
    `i'm Stefan and i'm a frontend web developer.`
  );
  const [paragraph2, setParagraph2] =
    useState<string>(`Committed to never stop learning, I'm on my way to become a full-stack web developer.
    I enjoy creating easy-to-use applications with JavaScript and React and I love adding new tools to my skillset every day!`);

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
      return isInitial ? 4000 : 1000;
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
      setParagraph1(`i'm stefan and i'm a frontənd web deve1oper.`);
      setParagraph2(
        `committed to never stop 1earning, i'm on my way to become a fu11-stack web deve1oper.
        i enjoy creating easy-to-use app1ications with javascript and react and i 1ove adding new too1s to my ski11set every day!`
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
        setParagraph1(`I'm Stəfan and I'm a frontənd web developer.`);
        setParagraph2(
          `Committed to never stop learning, I'm on my way to become a full-stack web developer.
    I enjoy creating easy-to-use applications with JavaScript and React and I love adding new tools to my skillset every day!`
        );
        setIsSecondShuffleFinished(true);
      }, 250);
    }, 500);
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
        setParagraph1(`I'm Stefan and I'm a frontend web developer.`);
        setParagraph2(
          `Committed to never stop learning, I'm on my way to become a full-stack web developer.
      I enjoy creating easy-to-use applications with JavaScript and React and I love adding new tools to my skillset every day!`
        );
      }, 500);
    }, 750);
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
          <p className={'intro-content'}>{parseString(paragraph1)}</p>
          <p className={'intro-content'}>{parseString(paragraph2)}</p>
        </section>
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
      </div>
    </div>
  );
};

export default Intro;
