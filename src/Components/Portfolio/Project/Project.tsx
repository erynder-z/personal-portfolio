import React, { FC, useContext, useEffect, useState } from 'react';
import { RandomReveal } from 'react-random-reveal';
import VisibleSectionEffect from '../../VisibleSectionEffect/VisibleSectionEffect';
import { FaAngleUp, FaAngleDown, FaExternalLinkAlt } from 'react-icons/fa';
import './Project.css';
import { useGlitch, GlitchHandle } from 'react-powerglitch';
import ProjectList from '../ProjectList';
import LanguageContext from '../../../contexts/LanguageContext';
import {
  getDescriptionHeadingText,
  getLiveButtonText,
  getPortfolioHeaderText,
  getPreviewButtonText,
  getSourceButtonText,
  getStopButtonText,
  getTechnologiesHeadingText,
  getYearHeadingText,
} from './getProjectText';

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

const Project: FC<Props> = ({ project, scrollToProject }) => {
  const {
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
  } = project;
  const { language } = useContext(LanguageContext);
  const [shuffling, setShuffling] = useState<boolean>(false);
  const [showImageEffect, setShowImageEffect] = useState<boolean>(false);
  const [playAnimatedGif, setPlayAnimatedGif] = useState<boolean>(false);
  const [projectImageURL, setProjectImageURL] = useState<string>(imageURL);
  const [projectTitle] = useState<string>(title);
  const [previewPlay, setPreviewPlay] = useState<string>('');
  const [previewSource, setPreviewSource] = useState<string>('');
  const [previewLive, setPreviewLive] = useState<string>('');
  const [currentlyVisible, setCurrentlyVisible] = useState<boolean>(false);
  const [isTextRevealTriggered2, setIsTextRevealTriggered2] =
    useState<boolean>(false);
  const [isTextRevealTriggered1, setIsTextRevealTriggered1] =
    useState<boolean>(true);

  const projectListLength = ProjectList.length;

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

  const revealCharacters = [...'░▒▓|'.split('')];
  const ignoreCharacters = [...' '.split('')];

  const animate = (): void => {
    setShuffling(true);

    setTimeout(() => {
      setShuffling(false);

      setPreviewPlay(getPreviewButtonText(language));
      setPreviewSource(getSourceButtonText(language));
      setPreviewLive(getLiveButtonText(language));
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
      setPreviewPlay(getStopButtonText(language));
    } else {
      setProjectImageURL(imageURL);
      setPreviewPlay(getPreviewButtonText(language));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playAnimatedGif]);

  useEffect(() => {
    if (!shuffling) {
      animate();
    }

    setPreviewPlay(getPreviewButtonText(language));
    setPreviewSource(getSourceButtonText(language));
    setPreviewLive(getLiveButtonText(language));

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
        {project.id === 1 && currentlyVisible && (
          <h2 className="portfolio-header">
            <RandomReveal
              isPlaying
              duration={1}
              characters={getPortfolioHeaderText(language)}
              characterSet={revealCharacters}
              ignoreCharacterSet={ignoreCharacters}
            />
          </h2>
        )}
        {project.id > 1 && (
          <button
            className="prev-project-button"
            onClick={() => {
              scrollToProject(project.id - 1);
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
                    className={` ${showImageEffect ? 'showFilter' : ''}`}
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
                    characters={getDescriptionHeadingText(language)}
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
                    characters={getTechnologiesHeadingText(language)}
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
                    characters={getYearHeadingText(language)}
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
        {project.id < projectListLength && (
          <button
            className="next-project-button"
            onClick={() => {
              scrollToProject(project.id + 1);
            }}
          >
            <FaAngleDown size="2.5rem" />
          </button>
        )}
        {project.id === projectListLength && (
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
