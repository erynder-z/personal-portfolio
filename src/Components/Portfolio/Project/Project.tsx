import React, { FC, useEffect, useState } from 'react';
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

  const [reavealImage, setRevealImage] = useState<boolean>(false);
  const [playAnimatedGif, setPlayAnimatedGif] = useState<boolean>(false);
  const [projectImageURL, setProjectImageURL] = useState<string>(imageURL);
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
  const [previewPlay, setPreviewPlay] = useState<string>('[Preview]');
  const [previewSource, setPreviewSource] = useState<string>('[Source]');
  const [previewLive, setPreviewLive] = useState<string>('[Live]');

  const shuffle = (): void => {
    setRevealImage(true);
    const shuffle = setInterval(() => {
      setProjectTitle(shuffleText(projectTitle));
      setProjectDescription(shuffleText(projectDescription));
      setProjectTechnologies(shuffleText(projectTechnologies));
      setProjectYear(shuffleText(projectYear));
      setHeadingTitle(shuffleText(headingTitle));
      setHeadingTechnologies(shuffleText(headingTechnologies));
      setheadingYear(shuffleText(headingYear));
      setPreviewPlay(shuffleText(previewPlay));
      setPreviewSource(shuffleText(previewSource));
      setPreviewLive(shuffleText(previewLive));
    }, 50);

    setTimeout(() => {
      setRevealImage(false);
      clearInterval(shuffle);
      setProjectTitle(projectTitle);
      setProjectDescription(projectDescription);
      setProjectTechnologies(projectTechnologies);
      setProjectYear(projectYear);
      setHeadingTitle(headingTitle);
      setHeadingTechnologies(headingTechnologies);
      setheadingYear(headingYear);
      setPreviewPlay(previewPlay);
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

  useEffect(() => {
    if (playAnimatedGif) {
      setProjectImageURL(gifURL);
      const shuffle = setInterval(() => {
        setPreviewPlay(shuffleText('[Stop]'));
      }, 50);

      setTimeout(() => {
        clearInterval(shuffle);
        setPreviewPlay('[Stop]');
      }, 500);
    } else {
      setProjectImageURL(imageURL);
      const shuffle = setInterval(() => {
        setPreviewPlay(shuffleText('[Preview]'));
      }, 50);

      setTimeout(() => {
        clearInterval(shuffle);
        setPreviewPlay('[Preview]');
      }, 500);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playAnimatedGif]);

  useEffect(() => {
    if (active) {
      shuffle();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  return (
    <div className="project-container">
      <h4 className="project-title">{projectTitle}</h4>
      <div className="preview-container">
        <div className="image-container">
          <img
            src={projectImageURL}
            alt="Project Screenshot"
            className={`${reavealImage ? 'animate' : ''}`}
          />
          <div
            className={`border-overlay ${reavealImage ? 'animate' : ''}`}
          ></div>
          <div className={`overlay ${reavealImage ? 'animate' : ''}`}></div>
        </div>
        <div className="project-icons-container">
          <button className="previewBtn" onClick={handlePlayPreview}>
            <div className="previewBtn-wrapper">{previewPlay}</div>
          </button>

          <button className="github-link-button">
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
            >
              {previewSource}
            </a>
          </button>

          <button className="live-link-button">
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="live-link"
            >
              {previewLive}
            </a>
          </button>
        </div>
      </div>
      <div className="text-container">
        <h4 className="project-description-heading">{headingTitle}</h4>
        <p className="project-description">{projectDescription}</p>
        <h4 className="project-technologies-heading">{headingTechnologies}</h4>
        <p className="project-technologies">{projectTechnologies}</p>
        <h4 className="project-year-header">{headingYear}</h4>
        <p className="project-year">{projectYear}</p>
      </div>
    </div>
  );
};

export default Project;
