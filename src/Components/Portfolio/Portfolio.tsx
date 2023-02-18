import React, { FC, useEffect, useRef, useState } from 'react';
import './Portfolio.css';
import ProjectList from './ProjectList';
import Project from './Project/Project';
import VisibleSectionEffect from '../VisibleSectionEffect/VisibleSectionEffect';
import { RandomReveal } from 'react-random-reveal';

interface Props {
  active: boolean;
}

const Portfolio: FC<Props> = ({ active }) => {
  const [projectList, setProjectList] = useState<
    | {
        id: number;
        title: string;
        imageURL: string;
        animationURL: string;
        animationLength: number;
        description: string;
        githubLink: string;
        liveLink: string;
        technologies: string;
        year: number;
      }[]
    | null
  >(null);

  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(
    null
  );
  const revealCharacters = [...'░▒▓|'.split('')];
  const ignoreCharacters = [...' '.split('')];

  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    setProjectList(ProjectList);
  }, []);

  useEffect(() => {
    if (selectedProjectId !== null && projectRefs.current[selectedProjectId]) {
      projectRefs.current[selectedProjectId]?.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
      });
    }
  }, [selectedProjectId]);

  const scrollToProject = (projectId: number) => {
    setSelectedProjectId(projectId);
  };

  return (
    <div className="portfolio-container">
      <h2 className="portfolio-header">
        <RandomReveal
          isPlaying={active}
          duration={1}
          characters="[projects]"
          characterSet={revealCharacters}
          ignoreCharacterSet={ignoreCharacters}
        />
      </h2>

      <section>
        <div className={`projects-wrapper ${!active ? 'hide' : ''}`}>
          {projectList?.map((project) => (
            <div
              key={project.id.toString()}
              ref={(el) => (projectRefs.current[project.id] = el)}
            >
              <Project project={project} scrollToProject={scrollToProject} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
