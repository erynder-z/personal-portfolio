import React, { FC, useEffect, useRef, useState } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import './Portfolio.css';
import ProjectList from './ProjectList';
import Project from './Project/Project';
import VisibleSectionEffect from '../VisibleSectionEffect/VisibleSectionEffect';
import { RandomReveal } from 'react-random-reveal';

interface Props {
  active: boolean;
}

const Portfolio: FC<Props> = ({ active }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [heading, setHeading] = useState<string>(`[projects]`);
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

  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const revealCharacters = [...'░▒▓|'.split('')];
  const ignoreCharacters = [...' '.split('')];

  useEffect(() => {
    if (active) {
      setIsAnimating(true);

      return () => {
        setIsAnimating(false);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  useEffect(() => {
    setProjectList(ProjectList);
  }, []);

  return (
    <div ref={containerRef} className="portfolio-container">
      <h2 className="portfolio-header">
        {isAnimating && (
          <RandomReveal
            isPlaying
            duration={1}
            characters={heading}
            characterSet={revealCharacters}
            ignoreCharacterSet={ignoreCharacters}
          />
        )}
      </h2>
      <section>
        <div className={`projects-wrapper ${!active ? 'hide' : ''}`}>
          {projectList?.map((project) => (
            <Project key={project.id.toString()} project={project} />
          ))}
        </div>
      </section>

      <VisibleSectionEffect>
        <a
          className="repo-link"
          href="https://github.com/erynder-z?tab=repositories"
        >
          View More <FaExternalLinkAlt size="1rem" />
        </a>
      </VisibleSectionEffect>
    </div>
  );
};

export default Portfolio;
