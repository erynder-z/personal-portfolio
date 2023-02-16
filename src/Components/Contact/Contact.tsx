import React, { FC, useEffect, useRef, useState } from 'react';
import profilePic from '../../assets/profile.png';
import resumee from '../../assets/resumee.pdf';
import { FaEnvelope, FaGithub, FaLinkedin, FaFilePdf } from 'react-icons/fa';
import Mailto from '../Mailto/Mailto';
import './Contact.css';
import { RandomReveal } from 'react-random-reveal';

interface Props {
  active: boolean;
}

const Contact: FC<Props> = ({ active }) => {
  const hoverElementRef = useRef<HTMLHeadingElement>(null);
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
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const revealCharacters = [...'░▒▓|'.split('')];
  const ignoreCharacters = [...' '.split('')];

  const animateScrollingText = (): void => {
    setHideScrollingText(true);

    setTimeout(() => {
      setScrollingText('Always');
      setScrollingTextMessages({
        message1: 'create',
        message2: 'learn',
        message3: 'code',
        message4: 'grow',
        message5: 'create',
      });
      setHideScrollingText(false);
    }, 1000);
  };

  useEffect(() => {
    if (active) {
      animateScrollingText();

      setIsAnimating(true);

      return () => {
        setIsAnimating(false);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

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

  return (
    <div className="contact-container">
      <section className={!active ? 'hide' : ''}>
        <h2 className="scrolling-text-container">
          {isAnimating && (
            <RandomReveal
              isPlaying
              duration={1}
              characters={scrollingText}
              characterSet={revealCharacters}
              ignoreCharacterSet={ignoreCharacters}
            />
          )}
          <div
            className={`scrolling-text-content ${
              !hideScrollingText ? 'show' : ''
            }`}
          >
            <span>
              <span className="item1 pink">
                {isAnimating && (
                  <RandomReveal
                    isPlaying
                    duration={1}
                    characters={scrollingTextMessages.message1}
                    characterSet={revealCharacters}
                    ignoreCharacterSet={ignoreCharacters}
                  />
                )}
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
          <h2 className="contact-main-heading">
            {isAnimating && (
              <RandomReveal
                isPlaying
                duration={1}
                characters={text}
                characterSet={revealCharacters}
                ignoreCharacterSet={ignoreCharacters}
              />
            )}
          </h2>
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
              {isAnimating && (
                <RandomReveal
                  isPlaying
                  duration={1}
                  characters={heading}
                  characterSet={revealCharacters}
                  ignoreCharacterSet={ignoreCharacters}
                />
              )}
            </span>
            <span
              className="menu-item-hover-image"
              style={{
                backgroundImage: `url(${profilePic})`,
              }}
            ></span>
          </h2>
          <div className="contact-icons">
            <Mailto
              email="stfn.bgr@gmail.com"
              subject="Contact from website"
              body=""
            >
              <FaEnvelope className="contact-btn" size="5rem" />
            </Mailto>
            <a
              href="https://github.com/erynder-z"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="contact-btn" size="5rem" />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="contact-btn" size="5rem" />
            </a>
            <a href={resumee} target="_blank" rel="noreferrer">
              <FaFilePdf className="contact-btn" size="5rem" />
            </a>
          </div>
        </div>
        <h3 className="contact-footer">
          {isAnimating && (
            <RandomReveal
              isPlaying
              duration={1}
              characters={footerText}
              characterSet={revealCharacters}
              ignoreCharacterSet={ignoreCharacters}
            />
          )}
        </h3>
      </section>
    </div>
  );
};

export default Contact;
