import React, { FC, useEffect, useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { MdPlayArrow, MdStop } from 'react-icons/md';
import randomIntFromInterval from '../../RandomIntFromInverval/RandomIntFromInverval';
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

  const [imageGlitch, setImageGlitch] = useState<string>('normal');
  const [makeImageGlitch, setMakeImageGlitch] = useState<boolean>(false);
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
  const [previewPlay, setPreviewPlay] = useState<string>('Preview');
  const [previewSource, setPreviewSource] = useState<string>('Source');
  const [previewLive, setPreviewLive] = useState<string>('Live');
  const [currentIndex, setCurrentIndex] = useState<number[]>([0, 1, 2]);

  const shuffle = (): void => {
    setMakeImageGlitch(true);
    const shuffle = setInterval(() => {
      setCurrentIndex(getRandomIndex());
      shufflePreviewImage();
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
      setMakeImageGlitch(false);
      clearInterval(shuffle);
      setCurrentIndex([0, 1, 2]);
      setImageGlitch('normal');
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

  const shufflePreviewImage = () => {
    const random = randomIntFromInterval(1, 5);

    switch (random) {
      case 1:
        setImageGlitch('normal');
        break;
      case 2:
        setImageGlitch('glitchUp');
        break;
      case 3:
        setImageGlitch('glitchDown');
        break;
      case 4:
        setImageGlitch('glitchLeft');
        break;
      case 5:
        setImageGlitch('glitchRight');
        break;
      default:
        break;
    }
  };

  function handlePlayPreview(): void {
    setPlayAnimatedGif(!playAnimatedGif);
    setTimeout(() => {
      setPlayAnimatedGif(false);
    }, gifLength);
  }

  function getPlayButton() {
    if (playAnimatedGif) {
      return {
        playButton: <MdStop size="2rem" className="playBtn" />,
      };
    } else {
      return {
        playButton: <MdPlayArrow size="2rem" className="playBtn" />,
      };
    }
  }

  const getRandomIndex = () => {
    let unshuffled = [0, 1, 2];

    let shuffled = unshuffled
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);

    return shuffled;
  };

  const buttons = [
    <button className="previewBtn" onClick={handlePlayPreview}>
      {<div className="circle"></div>}
      <div className="previewWrapper">
        {previewPlay} {getPlayButton().playButton}
      </div>
    </button>,
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
    </button>,
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
    </button>,
  ];

  useEffect(() => {
    if (playAnimatedGif) {
      setProjectImageURL(gifURL);
    } else {
      setProjectImageURL(imageURL);
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
      <div className="image-container">
        <img
          src={projectImageURL}
          alt="Project Screenshot"
          className={`${makeImageGlitch ? imageGlitch : ''}`}
        />

        <div className="project-icons-container">
          {buttons[currentIndex[0]]}
          {buttons[currentIndex[1]]}
          {buttons[currentIndex[2]]}
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
