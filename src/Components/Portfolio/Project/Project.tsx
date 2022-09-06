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
  };
}

const Project: FC<Props> = ({ project }) => {
  const { title, imageURL, description, githubLink, liveLink } = project;

  return (
    <div className="project-container">
      <h2 className="project-title">{title}</h2>
      <div className="image-container">
        <img src={imageURL} alt="Project Screenshot" />
        <MdPlayArrow size="1.5rem" />
      </div>
      <div className="text-container">
        <p className="project-description">{description}</p>
        <div className="link-icons-container">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            <FaGithub size="1.5rem" />
          </a>
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            <FaExternalLinkAlt size="1.5rem" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
