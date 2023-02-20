import React, { FC, useContext, useRef } from 'react';
import { RandomReveal } from 'react-random-reveal';
import profilePic from '../../../assets/profile.png';
import LanguageContext from '../../../contexts/LanguageContext';
import { getContactHeaderText } from '../getContactText';
import './HoverItemEffect.css';

const HoverItemEffect: FC = () => {
  const { language } = useContext(LanguageContext);
  const hoverElementRef = useRef<HTMLHeadingElement>(null);

  const revealCharacters = [...'░▒▓|'.split('')];
  const ignoreCharacters = [...' '.split('')];

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
    <h2
      ref={hoverElementRef}
      className="contact-hoverElement"
      onMouseMove={(e) => {
        followImageCursor(e, hoverElementRef.current);
      }}
    >
      <span
        data-menu-item-text={getContactHeaderText(language)}
        className="contact-hoverElement-title"
      >
        <RandomReveal
          isPlaying
          duration={1}
          characters={getContactHeaderText(language)}
          characterSet={revealCharacters}
          ignoreCharacterSet={ignoreCharacters}
        />
      </span>
      <span
        className="menu-item-hover-image"
        style={{
          backgroundImage: `url(${profilePic})`,
        }}
      ></span>
    </h2>
  );
};

export default HoverItemEffect;
