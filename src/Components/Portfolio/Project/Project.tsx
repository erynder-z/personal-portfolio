import React, { FC } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { MdPlayArrow, MdPlayDisabled } from 'react-icons/md';
import './Project.css';

interface Props {
  project: {
    title: string;
    imageURL: string;
    description: string;
    githubLink: string;
    liveLink: string;
    technologies: string;
    year: number;
  };
}

const Project: FC<Props> = ({ project }) => {
  const {
    title,
    imageURL,
    description,
    githubLink,
    liveLink,
    technologies,
    year,
  } = project;

  return (
    <div className="project-container">
      <h2 className="project-title">{title}</h2>
      <div className="image-container">
        <img src={imageURL} alt="Project Screenshot" />
        <button className="previewBtn">
          <MdPlayArrow size="2rem" className="playBtn" />
        </button>
      </div>
      <div className="text-container">
        <h3 className="project-description-heading">Summary</h3>
        <p className="project-description">{description}</p>
        <h3 className="project-technologies-heading">Technologies</h3>
        <p className="project-technologies">{technologies}</p>
        <h3 className="project-year-header">Year</h3>
        <p className="project-year">{year}</p>
        <div className="link-icons-container">
          <button className="github-link-button">
            <div className="circle"></div>
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
            >
              Source Code
              <FaGithub size="1.5rem" />
            </a>
          </button>
          <button className="live-link-button">
            <div className="circle"></div>
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="live-link"
            >
              Live
              <FaExternalLinkAlt size="1.5rem" />
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Project;
