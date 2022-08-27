import React, { FC, useState } from 'react';
import './Navigation.css';

const Navigation: FC = () => {
  const [activePanel, setActivePanel] = useState<string>('intro');

  return (
    <nav>
      <div className="panels">
        <div
          className={`panel intro ${
            activePanel === 'intro' ? 'open' : 'closed'
          }`}
          onClick={() => {
            setActivePanel('intro');
          }}
        >
          <p>Intro</p>
          <p>Hello</p>
        </div>
        <div
          className={`panel portfolio ${
            activePanel === 'portfolio' ? 'open' : 'closed'
          }`}
          onClick={() => {
            setActivePanel('portfolio');
          }}
        >
          <p>Portfolio</p>
          <p>My stuff</p>
        </div>
        <div
          className={`panel skills ${
            activePanel === 'skills' ? 'open' : 'closed'
          }`}
          onClick={() => {
            setActivePanel('skills');
          }}
        >
          <p>Skills</p>
          <p>My skills</p>
        </div>
        <div
          className={`panel contact ${
            activePanel === 'contact' ? 'open' : 'closed'
          }`}
          onClick={() => {
            setActivePanel('contact');
          }}
        >
          <p>Contact</p>
          <p>Contact me</p>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
