import React, { FC, useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { MdPlayArrow, MdStop, MdMonitor, MdPhoneAndroid } from 'react-icons/md';
import './Project.css';

interface Props {
  project: {
    title: string;
    imageURL: string;
    gifURL: string;
    gifLength: number;
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
    gifURL,
    gifLength,
    description,
    githubLink,
    liveLink,
    technologies,
    year,
  } = project;

  const [playAnimatedGif, setPlayAnimatedGif] = useState<boolean>(false);

  const handlePlayPreview = (): void => {
    setPlayAnimatedGif(!playAnimatedGif);
    setTimeout(() => {
      setPlayAnimatedGif(false);
    }, gifLength);
  };

  const getPlayButton = () => {
    if (playAnimatedGif) {
      return {
        previewImageURL: gifURL,
        playButton: <MdStop size="2rem" className="playBtn" />,
      };
    } else {
      return {
        previewImageURL: imageURL,
        playButton: <MdPlayArrow size="2rem" className="playBtn" />,
      };
    }
  };

  return (
    <div className="project-container">
      <h4 className="project-title">{title}</h4>
      <div className="image-container">
        <img src={getPlayButton().previewImageURL} alt="Project Screenshot" />

        <button className="previewBtn" onClick={handlePlayPreview}>
          {getPlayButton().playButton}
        </button>
      </div>
      <div className="text-container">
        <h4 className="project-description-heading">Summary</h4>
        <p className="project-description">{description}</p>
        <h4 className="project-technologies-heading">Technologies</h4>
        <p className="project-technologies">{technologies}</p>
        <h4 className="project-year-header">Year</h4>
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
