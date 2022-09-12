import React, { FC, useEffect, useState } from 'react';
import {
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from 'react-icons/md';
import parseString from '../Parser/Parser';
import './Intro.css';

interface Props {
  active: boolean;
  shuffleText: (text: string) => string;
  setActivePanel: React.Dispatch<React.SetStateAction<string>>;
}

const Intro: FC<Props> = ({ active, shuffleText, setActivePanel }) => {
  const [isIntroFinished, setIsIntroFinished] = useState<boolean>(false);
  /* const [showStatic, setShowStatic] = useState<boolean>(false); */
  const [downArrow, setDownArrow] = useState<JSX.Element>(
    <MdKeyboardArrowDown className="downArrow bounce" />
  );
  const [heading, setHeading] = useState<string>(`e11o¡`);
  const [paragraph1, setParagraph1] = useState<string>(
    `i'm Stefan and i'm a frontend web developer.`
  );
  const [paragraph2, setParagraph2] =
    useState<string>(`Committed to never stop learning, I'm on my way to become a full-stack web developer.
    I enjoy creating easy-to-use applications with JavaScript and React and I love adding new tools to my skillset every day!`);

  const randomIntFromInterval = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

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
    const shuffle = setInterval(() => {
      /*      setIsIntroFinished(false); */
      /*setShowStatic(true) */
      shuffleElements();
      setHeading(shuffleText(heading));
      setParagraph1(shuffleText(paragraph1));
      setParagraph2(shuffleText(paragraph2));
    }, 50);

    setTimeout(() => {
      clearInterval(shuffle);
      /*     setShowStatic(false); */
      setHeading('he11o¡');
      setParagraph1(`i'm stefan and i'm a frontənd web deve1oper.`);
      setParagraph2(
        `committed to never stop 1earning, i'm on my way to become a fu11-stack web deve1oper.
        i enjoy creating easy-to-use app1ications with javascript and react and i 1ove adding new too1s to my ski11set every day!`
      );
    }, 2000);
  };

  const secondShuffle = (): void => {
    setTimeout(() => {
      const shuffleAgain = setInterval(() => {
        /*     setShowStatic(true); */
        shuffleElements();
        setHeading(shuffleText(heading));
        setParagraph1(shuffleText(paragraph1));
        setParagraph2(shuffleText(paragraph2));
      }, 75);

      setTimeout(() => {
        clearInterval(shuffleAgain);
        /*       setShowStatic(false); */
        setHeading('Hello!');
        setParagraph1(`I'm Stəfan and I'm a frontənd web developer.`);
        setParagraph2(
          `Committed to never stop learning, I'm on my way to become a full-stack web developer.
    I enjoy creating easy-to-use applications with JavaScript and React and I love adding new tools to my skillset every day!`
        );
      }, 500);
    }, 3000);
  };

  const thirdShuffle = (): void => {
    setTimeout(() => {
      const finalshuffle = setInterval(() => {
        shuffleElements();
        /*    setShowStatic(true); */
        setHeading(shuffleText(heading));
        setParagraph1(shuffleText(paragraph1));
        setParagraph2(shuffleText(paragraph2));
      }, 50);

      setTimeout(() => {
        clearInterval(finalshuffle);
        /*   setShowStatic(false); */
        setDownArrow(<MdKeyboardArrowDown className="downArrow bounce" />);
        setIsIntroFinished(true);
        setHeading('Hello!');
        setParagraph1(`I'm Stefan and I'm a frontend web developer.`);
        setParagraph2(
          `Committed to never stop learning, I'm on my way to become a full-stack web developer.
      I enjoy creating easy-to-use applications with JavaScript and React and I love adding new tools to my skillset every day!`
        );
      }, 1000);
    }, 5000);
  };

  useEffect(() => {
    if (active) {
      firstShuffle();
      secondShuffle();
      thirdShuffle();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  return (
    <div
      className={`intro-container intro-bg ${
        isIntroFinished ? 'tv-static' : ''
      }`}
    >
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
        onClick={() => {
          setActivePanel('portfolio');
        }}
      >
        <span className="outer">
          <span className="inner">{downArrow}</span>
        </span>
      </div>
    </div>
  );
};

export default Intro;
