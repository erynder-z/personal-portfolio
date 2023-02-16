import React, { FC, useState } from 'react';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiFirebase,
  SiSass,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiGit,
  SiGithub,
  SiJest,
} from 'react-icons/si';
import VisibleSectionEffect from '../VisibleSectionEffect/VisibleSectionEffect';
import './Skills.css';

interface Props {
  active: boolean;
}

const Skills: FC<Props> = ({ active }) => {
  const [heading, setHeading] = useState<string>(`[Skills]`);
  const [skills, setSkills] = useState([
    { name: 'HTML', icon: <SiHtml5 size="1.5rem" color="#e34f26" /> },
    { name: 'CSS', icon: <SiCss3 size="1.5rem" color="#264de4" /> },
    {
      name: 'JavaScript',
      icon: <SiJavascript size="1.5rem" color="#f7df1e" />,
    },
    {
      name: 'TypeScript',
      icon: <SiTypescript size="1.5rem" color="#3178c6" />,
    },
    { name: 'React', icon: <SiReact size="1.5rem" color="#61dbfb" /> },
    { name: 'Firebase', icon: <SiFirebase size="1.5rem" color="#FFCB2B" /> },
    { name: 'Sass', icon: <SiSass size="1.5rem" color="#cd669a" /> },
    { name: 'NodeJS', icon: <SiNodedotjs size="1.5rem" color="#68a063" /> },
    { name: 'MongoDB', icon: <SiMongodb size="1.5rem" color="#589636" /> },
    { name: 'Express', icon: <SiExpress size="1.5rem" color="#589636" /> },
    { name: 'Git', icon: <SiGit size="1.5rem" color="#f1502f" /> },
    { name: 'GitHub', icon: <SiGithub size="1.5rem" color="#fffff" /> },
    { name: 'Jest', icon: <SiJest size="1.5rem" color="#18df16" /> },
  ]);
  const [currentlyVisible, setCurrentlyVisible] = useState<boolean>(false);

  /* const getRandomIcon = (): JSX.Element => {
    const iconsArray = [
      <SiHtml5 size="1.5rem" color="#e34f26" />,
      <SiCss3 size="1.5rem" color="#264de4" />,
      <SiJavascript size="1.5rem" color="#f7df1e" />,
      <SiTypescript size="1.5rem" color="#3178c6" />,
      <SiReact size="1.5rem" color="#61dbfb" />,
      <SiFirebase size="1.5rem" color="#FFCB2B" />,
      <SiSass size="1.5rem" color="#cd669a" />,
      <SiNodedotjs size="1.5rem" color="#68a063" />,
      <SiMongodb size="1.5rem" color="#589636" />,
      <SiExpress size="1.5rem" color="#589636" />,
      <SiGit size="1.5rem" color="#f1502f" />,
      <SiGithub size="1.5rem" color="#fffff" />,
      <SiJest size="1.5rem" color="#18df16" />,
    ];

    return iconsArray[Math.floor(Math.random() * iconsArray.length)];
  }; */

  return (
    <div className="skills-container">
      <VisibleSectionEffect setCurrentlyVisible={setCurrentlyVisible}>
        <section className={!active ? 'hide' : ''}>
          <h2 className="skills-header"> {heading}</h2>
          <div className="skills-container">
            {skills.map((skill) => {
              return (
                <div key={skill.name} className="skill-item-wrapper">
                  <div className="skill-icon"> {skill.name}</div>
                  <div className="skill-icon"> {skill.icon}</div>
                </div>
              );
            })}
          </div>
        </section>
      </VisibleSectionEffect>
    </div>
  );
};

export default Skills;
