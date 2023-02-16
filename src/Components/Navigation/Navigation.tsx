import React, { FC, useState } from 'react';
import Contact from '../Contact/Contact';
import Intro from '../Intro/Intro';
import Portfolio from '../Portfolio/Portfolio';
import Skills from '../Skills/Skills';
import './Navigation.css';

interface Props {
  isInitial: boolean;
  activePanel: string;
  setActivePanel: React.Dispatch<React.SetStateAction<string>>;
}

const Navigation: FC<Props> = ({ isInitial, activePanel, setActivePanel }) => {
  const categories = ['intro', 'projects', 'skills', 'contact'];
  const [categoriesText, setCategoriesText] = useState<string[]>([
    '[intro]',
    '[projects]',
    '[skills]',
    '[contact]',
  ]);

  return (
    <div className="panels">
      <div
        className={`panel intro ${
          activePanel === categories[0] ? 'open' : 'closed'
        }`}
        onClick={() => {
          if (activePanel !== categories[0]) {
            setActivePanel(categories[0]);
          }
        }}
      >
        <h1 className="panel-heading-intro">
          <span>{categoriesText[0]}</span>
        </h1>
        <Intro
          active={activePanel === categories[0] ? true : false}
          isInitial={isInitial}
        />
      </div>
      <div
        className={`panel projects ${
          activePanel === categories[1] ? 'open' : 'closed'
        }`}
        onClick={() => {
          setActivePanel(categories[1]);
          if (activePanel !== categories[1]) {
          }
        }}
      >
        <h1 className="panel-heading-projects">
          <span>{categoriesText[1]}</span>
        </h1>
        <Portfolio active={activePanel === categories[1] ? true : false} />
      </div>
      <div
        className={`panel skills ${
          activePanel === categories[2] ? 'open' : 'closed'
        }`}
        onClick={() => {
          setActivePanel(categories[2]);
          if (activePanel !== categories[2]) {
          }
        }}
      >
        <h1 className="panel-heading-skills">
          <span>{categoriesText[2]}</span>
        </h1>
        <Skills active={activePanel === categories[2] ? true : false} />
      </div>
      <div
        className={`panel contact ${
          activePanel === categories[3] ? 'open' : 'closed'
        }`}
        onClick={() => {
          setActivePanel(categories[3]);
          if (activePanel !== categories[3]) {
          }
        }}
      >
        <h1 className="panel-heading-contact">
          <span>{categoriesText[3]}</span>
        </h1>
        <Contact
          active={activePanel === categories[3] ? true : false}
        ></Contact>
      </div>
    </div>
  );
};

export default Navigation;
