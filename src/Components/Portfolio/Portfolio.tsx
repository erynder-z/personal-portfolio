import React, { FC, useEffect, useRef, useState } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import './Portfolio.css';
import ProjectList from './ProjectList';
import Project from './Project/Project';
import VisibleSectionEffect from '../VisibleSectionEffect/VisibleSectionEffect';

interface Props {
  active: boolean;
  shuffleText: (text: string) => string;
  setActivePanel: React.Dispatch<React.SetStateAction<string>>;
  setCurrentBgColor: React.Dispatch<React.SetStateAction<string | null>>;
}

const Portfolio: FC<Props> = ({
  active,
  shuffleText,
  setActivePanel,
  setCurrentBgColor,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const [scrolled, setScrolled] = useState<number>(0);
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

  const shuffle = (): void => {
    const shuffle = setInterval(() => {
      setHeading(shuffleText(heading));
    }, 50);

    setTimeout(() => {
      clearInterval(shuffle);
      setHeading('[Projects] ');
    }, 2000);
  };

  const onScrollPage = () => {
    const anchor = document.querySelector('.portfolio-container');

    /*    console.log(scrolled); */
    setScrolled(anchor!.scrollTop);
    const element = containerRef.current;
    if (scrolled >= 0) {
      if (element) {
        element.style.backgroundColor = 'var(--project1)';
        element.style.transition = 'background-color 1000ms';
        setCurrentBgColor('var(--project1)');
      }
    }
    if (scrolled >= 500) {
      if (element) {
        element.style.backgroundColor = 'var(--project2)';
        element.style.transition = 'background-color 1000ms';
        setCurrentBgColor('var(--project2)');
      }
    }
    if (scrolled >= 1100) {
      if (element) {
        element.style.backgroundColor = 'var(--project3)';
        element.style.transition = 'background-color 1000ms';
        setCurrentBgColor('var(--project3)');
      }
    }
    if (scrolled >= 1800) {
      if (element) {
        element.style.backgroundColor = 'var(--project4)';
        element.style.transition = 'background-color 1000ms';
        setCurrentBgColor('var(--project4)');
      }
    }
    if (scrolled >= 2400) {
      if (element) {
        element.style.backgroundColor = 'var(--project5)';
        element.style.transition = 'background-color 1000ms';
        setCurrentBgColor('var(--project5)');
      }
    }
    if (scrolled >= 3000) {
      if (element) {
        element.style.backgroundColor = 'var(--project6)';
        element.style.transition = 'background-color 1000ms';
        setCurrentBgColor('var(--project6)');
      }
    }
    if (scrolled >= 3700) {
      if (element) {
        element.style.backgroundColor = 'var(--project7)';
        element.style.transition = 'background-color 1000ms';
        setCurrentBgColor('var(--project7)');
      }
    }
    if (scrolled >= 4300) {
      if (element) {
        element.style.backgroundColor = 'var(--project8)';
        element.style.transition = 'background-color 1000ms';
        setCurrentBgColor('var(--project8)');
      }
    }
    if (scrolled >= 5000) {
      if (element) {
        element.style.backgroundColor = 'var(--project9)';
        element.style.transition = 'background-color 1000ms';
        setCurrentBgColor('var(--project9)');
      }
    }
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
    <div
      ref={containerRef}
      className="portfolio-container"
      onScroll={() => {
        onScrollPage();
      }}
    >
      <section>
        <VisibleSectionEffect>
          <h2 className="portfolio-header">{heading}</h2>
        </VisibleSectionEffect>
        <div className="projects-wrapper">
          {projectList?.map((project) => (
            <VisibleSectionEffect key={project.id}>
              <Project
                key={project.id}
                project={project}
                active={active}
                shuffleText={shuffleText}
              />
            </VisibleSectionEffect>
          ))}
        </div>
      </section>
      {
        <VisibleSectionEffect>
          <a
            className="repo-link"
            href="https://github.com/erynder-z?tab=repositories"
          >
            View More <FaExternalLinkAlt size="1rem" />
          </a>
        </VisibleSectionEffect>
      }
    </div>
  );
};

export default Portfolio;
