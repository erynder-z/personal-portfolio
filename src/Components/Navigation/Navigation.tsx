import React, { FC, useContext } from 'react';
import Contact from '../Contact/Contact';
import About from '../about/About';
import Portfolio from '../Portfolio/Portfolio';
import Skills from '../Skills/Skills';
import './Navigation.css';
import LanguageContext from '../../contexts/LanguageContext';
import {
  getAboutPanelText,
  getContactPanelText,
  getProjectsPanelText,
  getSkillsPanelText,
} from './getPanelTexts';

interface Props {
  activePanel: string;
  setActivePanel: React.Dispatch<React.SetStateAction<string>>;
}

const Navigation: FC<Props> = ({ activePanel, setActivePanel }) => {
  const { language } = useContext(LanguageContext);

  return (
    <div className="panels">
      <div
        className={`panel about ${activePanel === 'about' ? 'open' : 'closed'}`}
        onClick={() => {
          if (activePanel !== 'about') {
            setActivePanel('about');
          }
        }}
      >
        <h1 className="panel-heading-about">
          <span>{getAboutPanelText(language)}</span>
        </h1>
        <About active={activePanel === 'about' ? true : false} />
      </div>
      <div
        className={`panel projects ${
          activePanel === 'projects' ? 'open' : 'closed'
        }`}
        onClick={() => {
          setActivePanel('projects');
          if (activePanel !== 'projects') {
          }
        }}
      >
        <h1 className="panel-heading-projects">
          <span>{getProjectsPanelText(language)}</span>
        </h1>
        <Portfolio active={activePanel === 'projects' ? true : false} />
      </div>
      <div
        className={`panel skills ${
          activePanel === 'skills' ? 'open' : 'closed'
        }`}
        onClick={() => {
          setActivePanel('skills');
          if (activePanel !== 'skills') {
          }
        }}
      >
        <h1 className="panel-heading-skills">
          <span>{getSkillsPanelText(language)}</span>
        </h1>
        <Skills active={activePanel === 'skills' ? true : false} />
      </div>
      <div
        className={`panel contact ${
          activePanel === 'contact' ? 'open' : 'closed'
        }`}
        onClick={() => {
          setActivePanel('contact');
          if (activePanel !== 'contact') {
          }
        }}
      >
        <h1 className="panel-heading-contact">
          <span>{getContactPanelText(language)}</span>
        </h1>
        <Contact active={activePanel === 'contact' ? true : false}></Contact>
      </div>
    </div>
  );
};

export default Navigation;
