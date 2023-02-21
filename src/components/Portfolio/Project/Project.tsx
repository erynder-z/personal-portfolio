import React, { FC, useContext, useEffect, useState } from 'react';
import { RandomReveal } from 'react-random-reveal';
import VisibleSectionEffect from '../../VisibleSectionEffect/VisibleSectionEffect';
import { FaAngleUp, FaAngleDown, FaExternalLinkAlt } from 'react-icons/fa';
import './Project.css';
import { useGlitch, GlitchHandle } from 'react-powerglitch';
import ProjectList from '../ProjectList';
import LanguageContext from '../../../contexts/LanguageContext';
import * as projectText from './getProjectText';
import { revealCharacters, ignoreCharacters } from '../../../utils/utils';

interface Props {
  project: {
    id: number;
    title: string;
    imageURL: string;
    animationURL: string;
    animationLength: number;
    description_EN: string;
    description_DE: string;
    description_JP: string;
    githubLink: string;
    liveLink: string;
    technologies: string;
    year: number;
  };
  scrollToProject: (projectId: number) => void;
}

const Project: FC<Props> = ({
  project: {
    id,
    title,
    imageURL,
    animationURL,
    animationLength,
    description_EN,
    description_DE,
    description_JP,
    githubLink,
    liveLink,
    technologies,
    year,
  },
  scrollToProject,
}) => {
  // Component Logic
  const { language } = useContext(LanguageContext);
  const [showPreviewImageEffect, setShowPreviewImageEffect] =
    useState<boolean>(false);
  const [playAnimatedGif, setPlayAnimatedGif] = useState<boolean>(false);
  const [currentlyVisible, setCurrentlyVisible] = useState<boolean>(false);
  const [isTextRevealTriggered2, setIsTextRevealTriggered2] =
    useState<boolean>(false);
  const [isTextRevealTriggered1, setIsTextRevealTriggered1] =
    useState<boolean>(true);

  // UI Elements
  const portfolioHeaderText: string =
    projectText.getPortfolioHeaderText(language);
  const [previewPlayButtonText, setPreviewPlayButtonText] = useState<string>(
    projectText.getLiveButtonText(language)
  );
  const sourceButtonText: string = projectText.getSourceButtonText(language);
  const liveButtonText: string = projectText.getPreviewButtonText(language);
  const projectListLength = ProjectList.length;

  // Project Text
  const projectTitle: string = title;
  const [projectImageURL, setProjectImageURL] = useState<string>(imageURL);
  const projectDescriptionText: string =
    projectText.getDescriptionHeadingText(language);
  const projectTechnologiesText: string =
    projectText.getTechnologiesHeadingText(language);
  const projectYearText: string = projectText.getYearHeadingText(language);

  const glitch: GlitchHandle = useGlitch({
    playMode: 'always',
    createContainers: true,
    hideOverflow: false,
    timing: {
      duration: 1000,
      iterations: 1,
      easing: 'ease-in-out',
    },
    glitchTimeSpan: {
      start: 0,
      end: 1,
    },
    shake: {
      velocity: 5,
      amplitudeX: 0.05,
      amplitudeY: 0.1,
    },
    slice: {
      count: 2,
      velocity: 11,
      minHeight: 0.15,
      maxHeight: 0.05,
      hueRotate: true,
    },
    pulse: false,
  });

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
    setShowPreviewImageEffect(true);
    setTimeout(() => {
      setShowPreviewImageEffect(false);
    }, 500);
    if (playAnimatedGif) {
      setProjectImageURL(animationURL);
      setPreviewPlayButtonText(projectText.getStopButtonText(language));
    } else {
      setProjectImageURL(imageURL);
      setPreviewPlayButtonText(projectText.getPreviewButtonText(language));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playAnimatedGif]);

  return (
    <VisibleSectionEffect setCurrentlyVisible={setCurrentlyVisible}>
      <div className="project-container">
        {id === 1 && currentlyVisible && (
          <h2 className="portfolio-header">
            <RandomReveal
              isPlaying
              duration={1}
              characters={portfolioHeaderText}
              characterSet={revealCharacters}
              ignoreCharacterSet={ignoreCharacters}
            />
          </h2>
        )}
        {id > 1 && (
          <button
            className="prev-project-button"
            onClick={() => {
              scrollToProject(id - 1);
            }}
          >
            <FaAngleUp size="2.5rem" />
          </button>
        )}
        <div className="project-card">
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
            {currentlyVisible && (
              <div>
                <div className="image-container" ref={glitch.ref}>
                  <img
                    src={projectImageURL}
                    alt="Project Screenshot"
                    className={` ${showPreviewImageEffect ? 'showFilter' : ''}`}
                  />
                </div>
              </div>
            )}
            <div className="project-icons-container">
              <button className="previewBtn" onClick={handlePlayPreview}>
                <div className="previewBtn-wrapper">
                  {isTextRevealTriggered1 && currentlyVisible && (
                    <RandomReveal
                      isPlaying
                      duration={1}
                      characters={previewPlayButtonText}
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
                        characters={previewPlayButtonText}
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
                      characters={sourceButtonText}
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
                      characters={liveButtonText}
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
                    characters={projectDescriptionText}
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
                      characters={
                        language === 'DE'
                          ? description_DE
                          : language === 'JP'
                          ? description_JP
                          : description_EN
                      }
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
                    characters={projectTechnologiesText}
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
                    characters={technologies}
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
                    characters={projectYearText}
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
                    characters={year.toString()}
                    characterSet={revealCharacters}
                    ignoreCharacterSet={ignoreCharacters}
                  />
                )}
              </p>
            </div>
          </div>
        </div>
        {id < projectListLength && (
          <button
            className="next-project-button"
            onClick={() => {
              scrollToProject(id + 1);
            }}
          >
            <FaAngleDown size="2.5rem" />
          </button>
        )}
        {id === projectListLength && (
          <a
            className="repo-link"
            href="https://github.com/erynder-z?tab=repositories"
          >
            View More <FaExternalLinkAlt size="1rem" />
          </a>
        )}
      </div>
    </VisibleSectionEffect>
  );
};

export default Project;
