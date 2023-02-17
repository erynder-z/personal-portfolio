import React, { FC, useRef, useState } from 'react';
import { RandomReveal } from 'react-random-reveal';
import profilePic from '../../../assets/profile.png';
import './HoverItemEffect.css';

const HoverItemEffect: FC = () => {
  const hoverElementRef = useRef<HTMLHeadingElement>(null);
  const [heading, setHeading] = useState<string>(`[contact]`);

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
        data-menu-item-text={heading}
        className="contact-hoverElement-title"
      >
        <RandomReveal
          isPlaying
          duration={1}
          characters={heading}
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
