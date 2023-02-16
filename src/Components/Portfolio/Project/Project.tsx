import React, { FC, useEffect, useState } from 'react';
import { RandomReveal } from 'react-random-reveal';
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
}

const Project: FC<Props> = ({ project }) => {
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
  const [revealImage, setRevealImage] = useState<boolean>(false);
  const [showImageEffect, setShowImageEffect] = useState<boolean>(false);
  const [playAnimatedGif, setPlayAnimatedGif] = useState<boolean>(false);
  const [projectImageURL, setProjectImageURL] = useState<string>(imageURL);
  const [projectTitle] = useState<string>(title);
  const [projectDescription] = useState<string>(description);
  const [projectTechnologies] = useState<string>(technologies);
  const [projectYear] = useState<string>(year.toString());
  const [headingTitle] = useState<string>('Summary');
  const [headingTechnologies] = useState<string>('Technologies');
  const [headingYear] = useState<string>('Year');
  const [previewPlay, setPreviewPlay] = useState<string>('[Preview]');
  const [previewSource, setPreviewSource] = useState<string>('[Source]');
  const [previewLive, setPreviewLive] = useState<string>('[Live]');
  const [currentlyVisible, setCurrentlyVisible] = useState<boolean>(false);
  const [isTextRevealTriggered2, setIsTextRevealTriggered2] =
    useState<boolean>(false);
  const [isTextRevealTriggered1, setIsTextRevealTriggered1] =
    useState<boolean>(true);

  const revealCharacters = [...'░▒▓|'.split('')];
  const ignoreCharacters = [...' '.split('')];

  const animate = (): void => {
    setShuffling(true);
    setRevealImage(true);

    setTimeout(() => {
      setShuffling(false);
      setRevealImage(false);

      setPreviewPlay(previewPlay);
      setPreviewSource(previewSource);
      setPreviewLive(previewLive);
    }, 1000);
  };

  const handlePlayPreview = (): void => {
    setPlayAnimatedGif(!playAnimatedGif);
    setIsTextRevealTriggered1(!isTextRevealTriggered1);
    setIsTextRevealTriggered2(!isTextRevealTriggered2);
    setTimeout(() => {
      setPlayAnimatedGif(false);
      setIsTextRevealTriggered2(!isTextRevealTriggered2);
    }, animationLength);
  };

  useEffect(() => {
    if (playAnimatedGif) {
      setProjectImageURL(animationURL);
      setPreviewPlay('[Stop]');
    } else {
      setProjectImageURL(imageURL);
      setPreviewPlay('[Preview]');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playAnimatedGif]);

  useEffect(() => {
    if (!shuffling) {
      animate();
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
        <h4 className="project-title">
          {currentlyVisible && (
            <RandomReveal
              isPlaying
              duration={1}
              characters={projectTitle}
              characterSet={revealCharacters}
              ignoreCharacterSet={ignoreCharacters}
            />
          )}
        </h4>
        <div className="preview-container">
          <div className="image-container">
            <img
              src={projectImageURL}
              alt="Project Screenshot"
              className={`${revealImage ? 'animate' : ''} ${
                showImageEffect ? 'showFilter' : ''
              }`}
            />
            {
              <div
                className={`placeholder-overlay ${
                  revealImage ? 'animate' : ''
                }`}
              ></div>
            }
            <div className={`overlay ${revealImage ? 'animate' : ''}`}></div>
          </div>
          <div className="project-icons-container">
            <button className="previewBtn" onClick={handlePlayPreview}>
              <div className="previewBtn-wrapper">
                {isTextRevealTriggered1 && currentlyVisible && (
                  <RandomReveal
                    isPlaying
                    duration={1}
                    characters={previewPlay}
                    characterSet={revealCharacters}
                    ignoreCharacterSet={ignoreCharacters}
                  />
                )}
                {!isTextRevealTriggered1 &&
                  isTextRevealTriggered2 &&
                  currentlyVisible && (
                    <RandomReveal
                      isPlaying={isTextRevealTriggered2}
                      duration={1}
                      characters={previewPlay}
                      characterSet={revealCharacters}
                      ignoreCharacterSet={ignoreCharacters}
                    />
                  )}
              </div>
            </button>

            <button className="github-link-button">
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="github-link"
              >
                {currentlyVisible && (
                  <RandomReveal
                    isPlaying
                    duration={1}
                    characters={previewSource}
                    characterSet={revealCharacters}
                    ignoreCharacterSet={ignoreCharacters}
                  />
                )}
              </a>
            </button>

            <button className="live-link-button">
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="live-link"
              >
                {currentlyVisible && (
                  <RandomReveal
                    isPlaying
                    duration={1}
                    characters={previewLive}
                    characterSet={revealCharacters}
                    ignoreCharacterSet={ignoreCharacters}
                  />
                )}
              </a>
            </button>
          </div>
        </div>
        <div className="text-container">
          <div className="description-container">
            <h4 className="project-description-heading">
              {currentlyVisible && (
                <RandomReveal
                  isPlaying
                  duration={1}
                  characters={headingTitle}
                  characterSet={revealCharacters}
                  ignoreCharacterSet={ignoreCharacters}
                />
              )}
            </h4>
            {
              <p className="project-description">
                {currentlyVisible && (
                  <RandomReveal
                    isPlaying
                    duration={1}
                    characters={projectDescription}
                    characterSet={revealCharacters}
                    ignoreCharacterSet={ignoreCharacters}
                  />
                )}
              </p>
            }
          </div>
          <div className="technologies-container">
            <h4 className="project-technologies-heading">
              {currentlyVisible && (
                <RandomReveal
                  isPlaying
                  duration={1}
                  characters={headingTechnologies}
                  characterSet={revealCharacters}
                  ignoreCharacterSet={ignoreCharacters}
                />
              )}
            </h4>
            <p className="project-technologies">
              {currentlyVisible && (
                <RandomReveal
                  isPlaying
                  duration={1}
                  characters={projectTechnologies}
                  characterSet={revealCharacters}
                  ignoreCharacterSet={ignoreCharacters}
                />
              )}
            </p>
          </div>
          <div className="year-container">
            <h4 className="project-year-heading">
              {currentlyVisible && (
                <RandomReveal
                  isPlaying
                  duration={1}
                  characters={headingYear}
                  characterSet={revealCharacters}
                  ignoreCharacterSet={ignoreCharacters}
                />
              )}
            </h4>
            <p className="project-year">
              {currentlyVisible && (
                <RandomReveal
                  isPlaying
                  duration={1}
                  characters={projectYear}
                  characterSet={revealCharacters}
                  ignoreCharacterSet={ignoreCharacters}
                />
              )}
            </p>
          </div>
        </div>
      </div>
    </VisibleSectionEffect>
  );
};

export default Project;
