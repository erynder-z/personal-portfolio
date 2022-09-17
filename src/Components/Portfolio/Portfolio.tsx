import React, { FC, useEffect, useRef, useState } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { FaExternalLinkAlt } from 'react-icons/fa';
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
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState<number>(0);
  const [heading, setHeading] = useState<string>(`[projects]`);
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
      setHeading('[Projects] ');
    }, 2000);
  };

  const onScrollPage = () => {
    const anchor = document.querySelector('.portfolio-container');

    console.log(scrolled);
    setScrolled(anchor!.scrollTop);
    const element = containerRef.current;
    if (scrolled >= 0) {
      if (element) {
        element.style.backgroundColor = '#242631';
        element.style.transition = 'background-color 1000ms';
      }
    }
    if (scrolled >= 500) {
      if (element) {
        element.style.backgroundColor = '#0F282E';
        element.style.transition = 'background-color 1000ms';
      }
    }
    if (scrolled >= 1100) {
      if (element) {
        element.style.backgroundColor = '#0F1F2E';
        element.style.transition = 'background-color 1000ms';
      }
    }
    if (scrolled >= 1800) {
      if (element) {
        element.style.backgroundColor = '#110E2A';
        element.style.transition = 'background-color 1000ms';
      }
    }
    if (scrolled >= 2400) {
      if (element) {
        element.style.backgroundColor = '#2A1236';
        element.style.transition = 'background-color 1000ms';
      }
    }
    if (scrolled >= 3000) {
      if (element) {
        element.style.backgroundColor = '#172845';
        element.style.transition = 'background-color 1000ms';
      }
    }
    if (scrolled >= 3700) {
      if (element) {
        element.style.backgroundColor = '#3a0c2c';
        element.style.transition = 'background-color 1000ms';
      }
    }
    if (scrolled >= 4300) {
      if (element) {
        element.style.backgroundColor = '#131839';
        element.style.transition = 'background-color 1000ms';
      }
    }
    if (scrolled >= 5000) {
      if (element) {
        element.style.backgroundColor = '#11320c';
        element.style.transition = 'background-color 1000ms';
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
      onScroll={onScrollPage}
    >
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
          View More <FaExternalLinkAlt size="1rem" />
        </a>
      </FadeInSection>
    </div>
  );
};

export default Portfolio;
