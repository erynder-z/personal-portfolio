import React, { FC, useContext, useState } from 'react';
import { RandomReveal } from 'react-random-reveal';
import VisibleSectionEffect from '../../VisibleSectionEffect/VisibleSectionEffect';
import { FaAngleUp, FaAngleDown, FaExternalLinkAlt } from 'react-icons/fa';
import './Project.css';
import ProjectList from '../ProjectList';
import LanguageContext from '../../../contexts/LanguageContext';
import * as projectText from './getProjectText';
import { revealCharacters, ignoreCharacters } from '../../../utils/utils';
import Preview from './Preview/Preview';

interface Props {
  project: {
    id: number;
    title: string;
    previewVideoURL: string;
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
    previewVideoURL,
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
  const [currentlyVisible, setCurrentlyVisible] = useState<boolean>(false);

  // UI Elements
  const portfolioHeaderText: string =
    projectText.getPortfolioHeaderText(language);
  const projectListLength = ProjectList.length;

  // Project Text
  const projectTitle: string = title;
  const projectDescriptionText: string =
    projectText.getDescriptionHeadingText(language);
  const projectTechnologiesText: string =
    projectText.getTechnologiesHeadingText(language);
  const projectYearText: string = projectText.getYearHeadingText(language);

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
              <Preview
                previewVideoURL={previewVideoURL}
                githubLink={githubLink}
                liveLink={liveLink}
              />
            )}
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
                        language.code === 'DE'
                          ? description_DE
                          : language.code === 'JP'
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
