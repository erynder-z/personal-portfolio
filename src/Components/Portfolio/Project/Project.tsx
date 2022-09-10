import React, { FC, useEffect, useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { MdPlayArrow, MdStop } from 'react-icons/md';
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
  active: boolean;
  shuffleText: (text: string) => string;
}

const Project: FC<Props> = ({ project, active, shuffleText }) => {
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
  const [projectTitle, setProjectTitle] = useState<string>(title);
  const [projectDescription, setProjectDescription] =
    useState<string>(description);
  const [projectTechnologies, setProjectTechnologies] =
    useState<string>(technologies);
  const [projectYear, setProjectYear] = useState<string>(year.toString());
  const [headingTitle, setHeadingTitle] = useState<string>('Summary');
  const [headingTechnologies, setHeadingTechnologies] =
    useState<string>('Technologies');
  const [headingYear, setheadingYear] = useState<string>('Year');
  const [previewSource, setPreviewSource] = useState<string>('Source');
  const [previewLive, setPreviewLive] = useState<string>('Live');

  const shuffle = (): void => {
    const shuffle = setInterval(() => {
      setProjectTitle(shuffleText(projectTitle));
      setProjectDescription(shuffleText(projectDescription));
      setProjectTechnologies(shuffleText(projectTechnologies));
      setProjectYear(shuffleText(projectYear));
      setHeadingTitle(shuffleText(headingTitle));
      setHeadingTechnologies(shuffleText(headingTechnologies));
      setheadingYear(shuffleText(headingYear));
      setPreviewSource(shuffleText(previewSource));
      setPreviewLive(shuffleText(previewLive));
    }, 50);

    setTimeout(() => {
      clearInterval(shuffle);
      setProjectTitle(projectTitle);
      setProjectDescription(projectDescription);
      setProjectTechnologies(projectTechnologies);
      setProjectYear(projectYear);
      setHeadingTitle(headingTitle);
      setHeadingTechnologies(headingTechnologies);
      setheadingYear(headingYear);
      setPreviewSource(previewSource);
      setPreviewLive(previewLive);
    }, 2000);
  };

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

  useEffect(() => {
    if (active) {
      shuffle();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  return (
    <div className="project-container">
      <h4 className="project-title">{projectTitle}</h4>
      <div className="image-container">
        <img src={getPlayButton().previewImageURL} alt="Project Screenshot" />

        <button className="previewBtn" onClick={handlePlayPreview}>
          {getPlayButton().playButton}
        </button>
      </div>
      <div className="text-container">
        <h4 className="project-description-heading">{headingTitle}</h4>
        <p className="project-description">{projectDescription}</p>
        <h4 className="project-technologies-heading">{headingTechnologies}</h4>
        <p className="project-technologies">{projectTechnologies}</p>
        <h4 className="project-year-header">{headingYear}</h4>
        <p className="project-year">{projectYear}</p>
        <div className="link-icons-container">
          <button className="github-link-button">
            <div className="circle"></div>
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
            >
              {previewSource}
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
              {previewLive}
              <FaExternalLinkAlt size="1.5rem" />
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Project;
