import React, { FC, useEffect, useRef, useState } from 'react';
import profilePic from '../../assets/profile1.png';
import './Contact.css';

interface Props {
  active: boolean;
  shuffleText: (text: string) => string;
}

const Contact: FC<Props> = ({ active, shuffleText }) => {
  const domRef = useRef<HTMLHeadingElement>(null);
  const [heading, setHeading] = useState<string>(`[contact]`);

  const shuffle = (): void => {
    const shuffle = setInterval(() => {
      setHeading(shuffleText(heading));
    }, 50);

    setTimeout(() => {
      clearInterval(shuffle);
      setHeading('[contact]');
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

  useEffect(() => {
    if (active) {
      shuffle();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  return (
    <div className="contact-container">
      <section>
        <h2 className="scrolling-text-container">
          Always
          <div className="scrolling-text-content">
            <span>
              <span className="item1 pink">create</span>
              <br />
              <span className="item2 red">learn</span>
              <br />
              <span className="item3 orange">code</span>
              <br />
              <span className="item4 blue">grow</span>
              <br />
              <span className="item5 pink">create</span>
            </span>
          </div>
        </h2>

        <h2
          ref={domRef}
          className="contact-hoverElement"
          onMouseMove={(e) => {
            followImageCursor(e, domRef.current);
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
      </section>
    </div>
  );
};

export default Contact;
