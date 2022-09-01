import React, { FC, useEffect, useState } from 'react';
import profilePic from '../../assets/profile.png';
import {
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from 'react-icons/md';
import parseString from '../Parser/Parser';
import './Intro.css';
import { PixelateImage } from '../PixelateImage/PixelateImage';

interface Props {
  active: boolean;
}

const Intro: FC<Props> = ({ active }) => {
  const [pic, setPic] = useState<string>(profilePic);
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

  const shuffleArrow = () => {
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

  const shuffleText = (text: string, identifier: string): void => {
    const wordsArray: string[] = text.split(' ');
    const shuffledArray: string[] = wordsArray.map((word) => {
      return shuffleWord(word);
    });

    if (identifier === 'paragraph1') {
      setParagraph1(shuffledArray.join(' '));
    } else if (identifier === 'paragraph2') {
      setParagraph2(shuffledArray.join(' '));
    } else {
      setHeading(shuffledArray.join(' '));
    }
  };

  const shuffleWord = (s: string): string => {
    const getRandomInt = (n: number): number => {
      return Math.floor(Math.random() * n);
    };

    const arr: string[] = s.split('');
    const n: number = arr.length;

    for (let i = 0; i < n - 1; ++i) {
      const j: number = getRandomInt(n);

      let temp: string = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }

    s = arr.join('');
    return s;
  };

  const firstShuffle = (): void => {
    const shuffle = setInterval(() => {
      setPic(PixelateImage(pic, randomIntFromInterval(15, 25)));
      shuffleArrow();
      shuffleText(heading, 'heading');
      shuffleText(paragraph1, 'paragraph1');
      shuffleText(paragraph2, 'paragraph2');
    }, 50);

    setTimeout(() => {
      clearInterval(shuffle);
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
        shuffleArrow();
        setPic(PixelateImage(pic, randomIntFromInterval(12, 15)));
        shuffleText(heading, 'heading');
        shuffleText(paragraph1, 'paragraph1');
        shuffleText(paragraph2, 'paragraph2');
      }, 100);

      setTimeout(() => {
        clearInterval(shuffleAgain);
        setPic(PixelateImage(pic, randomIntFromInterval(10, 15)));
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
        shuffleArrow();
        setPic(PixelateImage(pic, randomIntFromInterval(5, 10)));
        shuffleText(heading, 'heading');
        shuffleText(paragraph1, 'paragraph1');
        shuffleText(paragraph2, 'paragraph2');
      }, 50);

      setTimeout(() => {
        clearInterval(finalshuffle);
        setDownArrow(<MdKeyboardArrowDown className="downArrow bounce" />);
        setPic(profilePic);
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
    <div className="intro-container">
      <div className="image-container">
        <img className="profilePic" src={pic} alt="pic of me" />
      </div>
      <section className="intro-text">
        <h2 className="intro-heading">{heading}</h2>
        <p className="intro-content">{parseString(paragraph1)}</p>
        <p className="intro-content">{paragraph2}</p>
      </section>

      <div className="goto_next">
        <span className="outer">
          <span className="inner">
            {downArrow}
            {/*  <MdKeyboardArrowDown size="5rem" className="downArrow bounce" /> */}
          </span>
        </span>
      </div>
    </div>
  );
};

export default Intro;
