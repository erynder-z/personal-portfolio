import React, { FC } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { MdKeyboardArrowDown } from 'react-icons/md';
import projectImage1 from '../../assets/image.jpg';
import './Portfolio.css';

interface Props {
  active: boolean;
  shuffleText: (text: string, identifier: string) => string;
  setActivePanel: React.Dispatch<React.SetStateAction<string>>;
}

const Portfolio: FC<Props> = ({ active, shuffleText, setActivePanel }) => {
  return (
    <div className="portfolio-container">
      <section>
        <h1 className="portfolio-header">My Stuff</h1>
        <div className="projects-grid">
          <div className="project-container">
            <img src={projectImage1} alt="Project Screenshot" />
            <div className="title-container">
              <h2 className="project-title">Something</h2>
              <div className="title-icons-container">
                <FaGithub size="1.5rem" />
                <FaExternalLinkAlt size="1.5rem" />
              </div>
            </div>
            <p className="project-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="project-container">
            <img src={projectImage1} alt="Project Screenshot" />
            <div className="title-container">
              <h2 className="project-title">Something</h2>
              <div className="title-icons-container">
                <FaGithub size="1.5rem" />
                <FaExternalLinkAlt size="1.5rem" />
              </div>
            </div>
            <p className="project-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="project-container">
            <img src={projectImage1} alt="Project Screenshot" />
            <div className="title-container">
              <h2 className="project-title">Something</h2>
              <div className="title-icons-container">
                <FaGithub size="1.5rem" />
                <FaExternalLinkAlt size="1.5rem" />
              </div>
            </div>
            <p className="project-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="project-container">
            <img src={projectImage1} alt="Project Screenshot" />
            <div className="title-container">
              <h2 className="project-title">Something</h2>
              <div className="title-icons-container">
                <FaGithub size="1.5rem" />
                <FaExternalLinkAlt size="1.5rem" />
              </div>
            </div>
            <p className="project-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="project-container">
            <img src={projectImage1} alt="Project Screenshot" />
            <div className="title-container">
              <h2 className="project-title">Something</h2>
              <div className="title-icons-container">
                <FaGithub size="1.5rem" />
                <FaExternalLinkAlt size="1.5rem" />
              </div>
            </div>
            <p className="project-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="project-container">
            <img src={projectImage1} alt="Project Screenshot" />
            <div className="title-container">
              <h2 className="project-title">Something</h2>
              <div className="title-icons-container">
                <FaGithub size="1.5rem" />
                <FaExternalLinkAlt size="1.5rem" />
              </div>
            </div>
            <p className="project-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
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
