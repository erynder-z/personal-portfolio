import React, { FC, useEffect, useState } from 'react';
import VisibleSectionEffect from '../../VisibleSectionEffect/VisibleSectionEffect';
import './Project.css';

interface Props {
  project: {
    title: string;
    imageURL: string;
    animationURL: string;
    animationLength: number;
    description: string;
    githubLink: string;
    liveLink: string;
    technologies: string;
    year: number;
  };
  shuffleText: (text: string) => string;
}

const Project: FC<Props> = ({ project, shuffleText }) => {
  const {
    title,
    imageURL,
    animationURL,
    animationLength,
    description,
    githubLink,
    liveLink,
    technologies,
    year,
  } = project;

  const [shuffling, setShuffling] = useState<boolean>(false);
  const [reavealImage, setRevealImage] = useState<boolean>(false);
  const [showImageEffect, setShowImageEffect] = useState<boolean>(false);
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
  const [previewPlay, setPreviewPlay] = useState<string>('[Play preview]');
  const [previewSource, setPreviewSource] = useState<string>('[Source]');
  const [previewLive, setPreviewLive] = useState<string>('[Live]');
  const [currentlyVisible, setCurrentlyVisible] = useState<boolean>(false);

  const shuffle = (): void => {
    setShuffling(true);
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
      setShuffling(false);
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
    }, 1000);
  };

  const handlePlayPreview = (): void => {
    setPlayAnimatedGif(!playAnimatedGif);
    setTimeout(() => {
      setPlayAnimatedGif(false);
    }, animationLength);
  };

  useEffect(() => {
    if (playAnimatedGif) {
      setProjectImageURL(animationURL);
      const shuffle = setInterval(() => {
        setPreviewPlay(shuffleText('[Stop preview]'));
      }, 50);

      setTimeout(() => {
        clearInterval(shuffle);
        setPreviewPlay('[Stop preview]');
      }, 500);
    } else {
      setProjectImageURL(imageURL);
      const shuffle = setInterval(() => {
        setPreviewPlay(shuffleText('[Play preview]'));
      }, 50);

      setTimeout(() => {
        clearInterval(shuffle);
        setPreviewPlay('[Play preview]');
      }, 500);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playAnimatedGif]);

  useEffect(() => {
    if (!shuffling) {
      shuffle();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentlyVisible]);

  useEffect(() => {
    setShowImageEffect(true);
    setTimeout(() => {
      setShowImageEffect(false);
    }, 500);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playAnimatedGif]);

  return (
    <VisibleSectionEffect setCurrentlyVisible={setCurrentlyVisible}>
      <div className="project-container">
        <h4 className="project-title">{projectTitle}</h4>
        <div className="preview-container">
          <div className="image-container">
            <img
              src={projectImageURL}
              alt="Project Screenshot"
              className={`${reavealImage ? 'animate' : ''} ${
                showImageEffect ? 'showFilter' : ''
              }`}
            />
            {
              <div
                className={`placeholder-overlay ${
                  reavealImage ? 'animate' : ''
                }`}
              ></div>
            }
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
          <h4 className="project-technologies-heading">
            {headingTechnologies}
          </h4>
          <p className="project-technologies">{projectTechnologies}</p>
          <h4 className="project-year-heading">{headingYear}</h4>
          <p className="project-year">{projectYear}</p>
        </div>
      </div>
    </VisibleSectionEffect>
  );
};

export default Project;
