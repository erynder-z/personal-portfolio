import React, { FC, useEffect, useRef, useState } from 'react';
import './VisibleSectionEffect.css';

interface Props {
  children: JSX.Element;
}

const VisibleSectionEffect: FC<Props> = ({ children }) => {
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

  // if the child is a Project component: pass modified child. Else pass the unmodified child.
  const originalChild = children;
  const modifiedChild = React.cloneElement(children, { isVisible });

  return (
    <div
      ref={domRef}
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
    >
      {children.type.name === 'Project' ? modifiedChild : originalChild}
    </div>
  );
};

export default VisibleSectionEffect;
