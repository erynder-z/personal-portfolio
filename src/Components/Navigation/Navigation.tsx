import React, { FC, useState } from 'react';
import Intro from '../Intro/Intro';
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
          <h1>Intro</h1>
          <Intro active={activePanel === 'intro' ? true : false} />
        </div>
        <div
          className={`panel portfolio ${
            activePanel === 'portfolio' ? 'open' : 'closed'
          }`}
          onClick={() => {
            setActivePanel('portfolio');
          }}
        >
          <h1>Portfolio</h1>
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
          <h1>Skills</h1>
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
          <h1>Contact</h1>
          <p>Contact me</p>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
