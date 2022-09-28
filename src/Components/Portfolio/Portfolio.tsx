import React, { FC, useEffect, useRef, useState } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import './Portfolio.css';
import ProjectList from './ProjectList';
import Project from './Project/Project';
import VisibleSectionEffect from '../VisibleSectionEffect/VisibleSectionEffect';

interface Props {
  active: boolean;
  shuffleText: (text: string) => string;
  setCurrentBgColor: React.Dispatch<React.SetStateAction<string | null>>;
}

const Portfolio: FC<Props> = ({ active, shuffleText, setCurrentBgColor }) => {
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

    const scrolledPerecentage =
      (anchor?.scrollTop! / anchor?.scrollHeight!) * 100;

    setScrolled(scrolledPerecentage);
    const element = containerRef.current;
    if (scrolled >= 0) {
      if (element) {
        element.style.backgroundColor = 'var(--project1)';
        element.style.transition = 'background-color 1000ms';
        setCurrentBgColor('var(--project1)');
      }
    }
    if (scrolled >= 10) {
      if (element) {
        element.style.backgroundColor = 'var(--project2)';
        element.style.transition = 'background-color 1000ms';
        setCurrentBgColor('var(--project2)');
      }
    }
    if (scrolled >= 20) {
      if (element) {
        element.style.backgroundColor = 'var(--project3)';
        element.style.transition = 'background-color 1000ms';
        setCurrentBgColor('var(--project3)');
      }
    }
    if (scrolled >= 30) {
      if (element) {
        element.style.backgroundColor = 'var(--project4)';
        element.style.transition = 'background-color 1000ms';
        setCurrentBgColor('var(--project4)');
      }
    }
    if (scrolled >= 40) {
      if (element) {
        element.style.backgroundColor = 'var(--project5)';
        element.style.transition = 'background-color 1000ms';
        setCurrentBgColor('var(--project5)');
      }
    }
    if (scrolled >= 50) {
      if (element) {
        element.style.backgroundColor = 'var(--project6)';
        element.style.transition = 'background-color 1000ms';
        setCurrentBgColor('var(--project6)');
      }
    }
    if (scrolled >= 60) {
      if (element) {
        element.style.backgroundColor = 'var(--project7)';
        element.style.transition = 'background-color 1000ms';
        setCurrentBgColor('var(--project7)');
      }
    }
    if (scrolled >= 70) {
      if (element) {
        element.style.backgroundColor = 'var(--project8)';
        element.style.transition = 'background-color 1000ms';
        setCurrentBgColor('var(--project8)');
      }
    }
    if (scrolled >= 80) {
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
      <h2 className="portfolio-header">{heading}</h2>
      <section>
        <div className={`projects-wrapper ${!active ? 'hide' : ''}`}>
          {projectList?.map((project) => (
            <VisibleSectionEffect key={project.id}>
              <Project
                key={project.id}
                project={project}
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
