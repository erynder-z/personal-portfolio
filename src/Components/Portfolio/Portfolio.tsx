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
  shuffleText: (text: string) => string;
  setActivePanel: React.Dispatch<React.SetStateAction<string>>;
}

const Portfolio: FC<Props> = ({ active, shuffleText, setActivePanel }) => {
  const [heading, setHeading] = useState<string>(`projects`);
  const [projectList, setProjectList] = useState<
    | {
        id: number;
        title: string;
        imageURL: string;
        gifURL: string;
        gifLength: number;
        description: string;
        githubLink: string;
        liveLink: string;
        technologies: string;
        year: number;
      }[]
    | null
  >(null);

  const shuffle = (): void => {
    const shuffle = setInterval(() => {
      setHeading(shuffleText(heading));
    }, 50);

    setTimeout(() => {
      clearInterval(shuffle);
      setHeading('Projects ');
    }, 2000);
  };

  useEffect(() => {
    if (active) {
      shuffle();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  useEffect(() => {
    setProjectList(ProjectList);
  }, []);

  return (
    <div className="portfolio-container">
      <section>
        <FadeInSection>
          <h2 className="portfolio-header">{heading}</h2>
        </FadeInSection>
        <div className="projects-wrapper">
          {projectList?.map((project) => (
            <FadeInSection key={project.id}>
              <Project
                key={project.id}
                project={project}
                active={active}
                shuffleText={shuffleText}
              />
            </FadeInSection>
          ))}
        </div>
      </section>
      <FadeInSection>
        <a
          className="repo-link"
          href="https://github.com/erynder-z?tab=repositories"
        >
          View More
        </a>
      </FadeInSection>
      <FadeInSection>
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
      </FadeInSection>
    </div>
  );
};

export default Portfolio;
