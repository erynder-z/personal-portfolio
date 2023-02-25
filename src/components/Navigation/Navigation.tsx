import React, { FC, useContext } from 'react';
import Contact from '../Contact/Contact';
import About from '../About/About';
import Portfolio from '../Portfolio/Portfolio';
import Skills from '../Skills/Skills';
import './Navigation.css';
import LanguageContext from '../../contexts/LanguageContext';
import * as panelText from './getPanelTexts';

interface Panel {
  id: string;
  title: string;
  component: React.ReactElement;
}

interface Props {
  activePanel: string;
  setActivePanel: React.Dispatch<React.SetStateAction<string>>;
}

const Navigation: FC<Props> = ({ activePanel, setActivePanel }) => {
  const { language } = useContext(LanguageContext);

  // Set vh for Chrome 100vh fix
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  const panels: Panel[] = [
    {
      id: 'about',
      title: 'getAboutPanelText',
      component: <About active={activePanel === 'about' ? true : false} />,
    },
    {
      id: 'projects',
      title: 'getProjectsPanelText',
      component: (
        <Portfolio active={activePanel === 'projects' ? true : false} />
      ),
    },
    {
      id: 'skills',
      title: 'getSkillsPanelText',
      component: <Skills active={activePanel === 'skills' ? true : false} />,
    },
    {
      id: 'contact',
      title: 'getContactPanelText',
      component: <Contact active={activePanel === 'contact' ? true : false} />,
    },
  ];

  return (
    <div className="panels">
      {panels.map(({ id, title, component }) => {
        const panelTextFn = panelText[title as keyof typeof panelText];
        const panelTextValue = panelTextFn(language);

        return (
          <div
            key={id}
            className={`panel ${id} ${activePanel === id ? 'open' : 'closed'}`}
            onClick={() => {
              if (activePanel !== id) {
                setActivePanel(id);
              }
            }}
          >
            <h1 className={`panel-heading-${id}`}>
              <span>{panelTextValue}</span>
            </h1>
            {component}
          </div>
        );
      })}
    </div>
  );
};

export default Navigation;
