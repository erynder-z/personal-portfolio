import React, { FC, useEffect, useRef, useState } from 'react';
import profilePic from '../../assets/profile1.png';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import Mailto from '../Mailto/Mailto';
import './Contact.css';

interface Props {
  active: boolean;
  shuffleText: (text: string) => string;
}

const Contact: FC<Props> = ({ active, shuffleText }) => {
  const hoverElementRef = useRef<HTMLHeadingElement>(null);
  const [currentIndex, setCurrentIndex] = useState<number[]>([0, 1, 2]);
  const [heading, setHeading] = useState<string>(`[contact]`);
  const [text, setText] = useState<string>(`Want to get in touch?`);
  const [scrollingText, setScrollingText] = useState<string>('Always');
  const [scrollingTextMessages, setScrollingTextMessages] = useState<{
    message1: string;
    message2: string;
    message3: string;
    message4: string;
    message5: string;
  }>({
    message1: 'create',
    message2: 'learn',
    message3: 'code',
    message4: 'grow',
    message5: 'create',
  });
  const [footerText, setFooterText] = useState<string>(
    '© 2022 | Stefan Bamberger'
  );
  const [hideScrollingText, setHideScrollingText] = useState<boolean>(true);

  const shuffle = (): void => {
    const shuffle = setInterval(() => {
      setHeading(shuffleText(heading));
      setText(shuffleText(text));
      setScrollingText(shuffleText(scrollingText));
      setScrollingTextMessages({
        message1: shuffleText(scrollingTextMessages.message1),
        message2: shuffleText(scrollingTextMessages.message2),
        message3: shuffleText(scrollingTextMessages.message3),
        message4: shuffleText(scrollingTextMessages.message4),
        message5: shuffleText(scrollingTextMessages.message5),
      });
      setFooterText(shuffleText(footerText));
      setHideScrollingText(true);
      setCurrentIndex(getRandomIndex());
    }, 50);

    setTimeout(() => {
      clearInterval(shuffle);
      setHeading('[contact]');
      setText(`Want to get in touch?`);
      setScrollingText('Always');
      setScrollingTextMessages({
        message1: 'create',
        message2: 'learn',
        message3: 'code',
        message4: 'grow',
        message5: 'create',
      });
      setFooterText('© 2022 | Stefan Bamberger');
      setHideScrollingText(false);
      setCurrentIndex([0, 1, 2]);
    }, 2000);
  };

  const followImageCursor = (
    e: React.MouseEvent,
    menuItem: HTMLElement | null
  ): void => {
    if (menuItem) {
      const contentBox = menuItem.getBoundingClientRect();
      const dx = e.pageX - contentBox.x;
      const dy = e.pageY - contentBox.y;
      (
        menuItem.children[1] as HTMLElement
      ).style.transform = `translate(${dx}px, ${dy}px)`;
    }
  };

  const getRandomIndex = () => {
    let unshuffled = [0, 1, 2];

    let shuffled = unshuffled
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);

    return shuffled;
  };

  const buttons = [
    <Mailto email="stfn.bgr@gmail.com" subject="Contact from website" body="">
      <FaEnvelope size="5rem" />
    </Mailto>,
    <a
      href="https://github.com/erynder-z"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaGithub size="5rem" />
    </a>,
    <a
      href="https://www.linkedin.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaLinkedin size="5rem" />
    </a>,
  ];

  useEffect(() => {
    if (active) {
      shuffle();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  return (
    <div className="contact-container">
      <section className={!active ? 'hide' : ''}>
        <h2 className="scrolling-text-container">
          {scrollingText}
          <div
            className={`scrolling-text-content ${
              !hideScrollingText ? 'show' : ''
            }`}
          >
            <span>
              <span className="item1 pink">
                {scrollingTextMessages.message1}
              </span>
              <br />
              <span className="item2 red">
                {scrollingTextMessages.message2}
              </span>
              <br />
              <span className="item3 orange">
                {scrollingTextMessages.message3}
              </span>
              <br />
              <span className="item4 blue">
                {scrollingTextMessages.message4}
              </span>
              <br />
              <span className="item5 pink">
                {scrollingTextMessages.message5}
              </span>
            </span>
          </div>
        </h2>

        <div className="contact-main">
          <h2 className="contact-main-heading">{text}</h2>
        </div>
        <div className="lower-container">
          <h2
            ref={hoverElementRef}
            className="contact-hoverElement"
            onMouseMove={(e) => {
              followImageCursor(e, hoverElementRef.current);
            }}
          >
            <span
              data-menu-item-text={heading}
              className="contact-hoverElement-title"
            >
              {heading}
            </span>
            <span
              className="menu-item-hover-image"
              style={{
                backgroundImage: `url(${profilePic})`,
              }}
            ></span>
          </h2>
          <div className="contact-icons">
            {buttons[currentIndex[0]]}
            {buttons[currentIndex[1]]}
            {buttons[currentIndex[2]]}
          </div>
        </div>
        <h3 className="contact-footer">{footerText}</h3>
      </section>
    </div>
  );
};

export default Contact;
