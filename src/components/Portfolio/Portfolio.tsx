import React, { FC, useEffect, useRef, useState } from 'react';
import './Portfolio.css';
import ProjectList from './ProjectList';
import Project from './Project/Project';

interface Props {
  active: boolean;
}

const Portfolio: FC<Props> = ({ active }) => {
  const [projectList, setProjectList] = useState(
    [] as {
      id: number;
      title: string;
      previewImageURL: string;
      previewVideoURL: string;
      description_EN: string;
      description_DE: string;
      description_JP: string;
      githubLink: string;
      liveLink: string;
      technologies: string;
      year: number;
    }[]
  );

  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(
    null
  );
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Set vh for Chrome 100vh fix
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  useEffect(() => {
    setProjectList(ProjectList);
  }, []);

  useEffect(() => {
    if (selectedProjectId != null) {
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
      <section>
        <div className={`projects-wrapper ${!active ? 'hide' : ''}`}>
          {projectList.map((project) => (
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
