import React, { FC, useEffect, useRef, useState } from 'react';
import './FadeinSection.css';

interface Props {
  children: JSX.Element;
}

const FadeInSection: FC<Props> = ({ children }) => {
  const [isVisible, setVisible] = useState<boolean>(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let currentRef: any = null;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    if (domRef.current) {
      currentRef = domRef.current;
      observer.observe(domRef.current);
    }

    return () => {
      observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
    >
      {children}
    </div>
  );
};

export default FadeInSection;
