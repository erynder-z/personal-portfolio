import React, { FC, useEffect, useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import {
  MdKeyboardArrowDown,
  MdPlayArrow,
  MdPlayDisabled,
} from 'react-icons/md';
import './Portfolio.css';

import ProjectList from './ProjectList';
import Project from './Project/Project';
import FadeInSection from '../FadeinSection/FadeinSection';

interface Props {
  active: boolean;
  shuffleText: (text: string, identifier: string) => string;
  setActivePanel: React.Dispatch<React.SetStateAction<string>>;
}

const Portfolio: FC<Props> = ({ active, shuffleText, setActivePanel }) => {
  const [projectList, setProjectList] = useState<
    | {
        id: number;
        title: string;
        imageURL: string;
        description: string;
        githubLink: string;
        liveLink: string;
        technologies: string;
        year: number;
      }[]
    | null
  >(null);

  useEffect(() => {
    setProjectList(ProjectList);
  }, []);

  return (
    <div className="portfolio-container">
      <section>
        <FadeInSection>
          <h1 className="portfolio-header">My Stuff</h1>
        </FadeInSection>
        <div className="projects-wrapper">
          {projectList?.map((project) => (
            <FadeInSection key={project.id}>
              <Project key={project.id} project={project} />
            </FadeInSection>
          ))}
        </div>
      </section>
      <div
        className="goto_next"
        onClick={() => {
          setActivePanel('portfolio');
        }}
      >
        <span className="outer">
          <span className="inner">
            <MdKeyboardArrowDown className="downArrow bounce" />
          </span>
        </span>
      </div>
    </div>
  );
};

export default Portfolio;
