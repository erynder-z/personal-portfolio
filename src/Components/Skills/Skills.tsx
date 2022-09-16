import React, { FC, useEffect, useState } from 'react';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiFirebase,
  SiSass,
  SiNodedotjs,
  SiGit,
  SiGithub,
  SiJest,
  SiWebpack,
  SiStackoverflow,
} from 'react-icons/si';
import { MdKeyboardArrowDown } from 'react-icons/md';
import './Skills.css';

interface Props {
  active: boolean;
  shuffleText: (text: string) => string;
  setActivePanel: React.Dispatch<React.SetStateAction<string>>;
}

const Skills: FC<Props> = ({ active, shuffleText, setActivePanel }) => {
  const [heading, setHeading] = useState<string>(`let skills = `);
  const [languages, setLanguages] = useState<{
    header: string;
    language1: string;
    language2: string;
    language3: string;
    language4: string;
  }>({
    header: 'Languages:',
    language1: 'HTML',
    language2: 'CSS',
    language3: 'JavaScript',
    language4: 'TypeScript',
  });

  const [technologies, setTechnologies] = useState<{
    header: string;
    tech1: string;
    tech2: string;
    tech3: string;
    tech4: string;
  }>({
    header: 'Technologies:',
    tech1: 'React',
    tech2: 'Firebase',
    tech3: 'Sass',
    tech4: 'NodeJS',
  });

  const [tools, setTools] = useState<{
    header: string;
    tool1: string;
    tool2: string;
    tool3: string;
    tool4: string;
    tool5: string;
  }>({
    header: 'Tools:',
    tool1: 'Git',
    tool2: 'GitHub',
    tool3: 'Jest',
    tool4: 'Webpack',
    tool5: 'StackOverflow',
  });

  useEffect(() => {
    const shuffle = (): void => {
      const shuffle = setInterval(() => {
        setHeading(shuffleText(heading));
        setLanguages({
          header: shuffleText('Languages:'),
          language1: shuffleText('HTML'),
          language2: shuffleText('CSS'),
          language3: shuffleText('JavaScript'),
          language4: shuffleText('TypeScript'),
        });
        setTechnologies({
          header: shuffleText('Technologies:'),
          tech1: shuffleText('React'),
          tech2: shuffleText('Firebase'),
          tech3: shuffleText('Sass'),
          tech4: shuffleText('NodeJS'),
        });

        setTools({
          header: shuffleText('Tools:'),
          tool1: shuffleText('Git'),
          tool2: shuffleText('GitHub'),
          tool3: shuffleText('Jest'),
          tool4: shuffleText('Webpack'),
          tool5: shuffleText('StackOverflow'),
        });
      }, 50);

      setTimeout(() => {
        clearInterval(shuffle);
        setHeading('let skills = ');
        setLanguages({
          header: 'Languages:',
          language1: 'HTML',
          language2: 'CSS',
          language3: 'JavaScript',
          language4: 'TypeScript',
        });
        setTechnologies({
          header: 'Technologies:',
          tech1: 'React',
          tech2: 'Firebase',
          tech3: 'Sass',
          tech4: 'NodeJS',
        });

        setTools({
          header: 'Tools:',
          tool1: 'Git',
          tool2: 'GitHub',
          tool3: 'Jest',
          tool4: 'Webpack',
          tool5: 'StackOverflow',
        });
      }, 2000);
    };

    if (active) {
      shuffle();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  return (
    <div className="skills-container">
      <section>
        <h2 className="skills-header"> {heading}</h2>
        <div className="curlyOpen-outer">&#123;</div>

        <h3 className="languages-header">{languages.header}</h3>
        <div className="bracketOpen1">&#91;</div>
        <div className="languages-container">
          <div className="item-wrapper">
            <div className="curlyOpen-inner">&#123;</div>
            <SiHtml5 size="2rem" />
            {languages.language1}
            <div className="curlyClose-inner">&#125;</div>,
          </div>
          <div className="item-wrapper">
            <div className="curlyOpen-inner">&#123;</div>
            <SiCss3 size="2rem" />
            {languages.language2}
            <div className="curlyClose-inner">&#125;</div>,
          </div>
          <div className="item-wrapper">
            <div className="curlyOpen-inner">&#123;</div>
            <SiJavascript size="2rem" />
            {languages.language3}
            <div className="curlyClose-inner">&#125;</div>,
          </div>
          <div className="item-wrapper">
            <div className="curlyOpen-inner">&#123;</div>
            <SiTypescript size="2rem" />
            {languages.language4}
            <div className="curlyClose-inner">&#125;</div>
          </div>
        </div>
        <div className="bracketClose1">&#93; ,</div>
        <h3 className="technologies-header">{technologies.header}</h3>
        <div className="bracketOpen2">&#91;</div>
        <div className="technologies-container">
          <div className="item-wrapper">
            <div className="curlyOpen-inner">&#123;</div>
            <SiReact size="2rem" />
            {technologies.tech1}
            <div className="curlyClose-inner">&#125;</div>,
          </div>
          <div className="item-wrapper">
            <div className="curlyOpen-inner">&#123;</div>
            <SiFirebase size="2rem" />
            {technologies.tech2}
            <div className="curlyClose-inner">&#125;</div>,
          </div>
          <div className="item-wrapper">
            <div className="curlyOpen-inner">&#123;</div>
            <SiSass size="2rem" />
            {technologies.tech3}
            <div className="curlyClose-inner">&#125;</div>,
          </div>
          <div className="item-wrapper">
            <div className="curlyOpen-inner">&#123;</div>
            <SiNodedotjs size="2rem" />
            {technologies.tech4}
            <div className="curlyClose-inner">&#125;</div>
          </div>
        </div>
        <div className="bracketClose2">&#93; ,</div>
        <h3 className="tools-header">{tools.header}</h3>
        <div className="bracketOpen3">&#91;</div>
        <div className="tools-container">
          <div className="item-wrapper">
            <div className="curlyOpen-inner">&#123;</div>
            <SiGit size="2rem" />
            {tools.tool1}
            <div className="curlyClose-inner">&#125;</div>,
          </div>
          <div className="item-wrapper">
            <div className="curlyOpen-inner">&#123;</div>
            <SiGithub size="2rem" />
            {tools.tool2}
            <div className="curlyClose-inner">&#125;</div>,
          </div>
          <div className="item-wrapper">
            <div className="curlyOpen-inner">&#123;</div>
            <SiJest size="2rem" />
            {tools.tool3}
            <div className="curlyClose-inner">&#125;</div>,
          </div>
          <div className="item-wrapper">
            <div className="curlyOpen-inner">&#123;</div>
            <SiWebpack size="2rem" />
            {tools.tool4}
            <div className="curlyClose-inner">&#125;</div>,
          </div>
          <div className="item-wrapper">
            <div className="curlyOpen-inner">&#123;</div>
            <SiStackoverflow size="2rem" />
            {tools.tool5}
            <div className="curlyClose-inner">&#125;</div>
          </div>
        </div>
        <div className="bracketClose3">&#93;</div>
        <div className="curlyClose-outer">&#125;</div>
      </section>

      <div
        className="goto_next"
        onClick={(e) => {
          setActivePanel('contact');
          e.stopPropagation();
        }}
      >
        <span className="outer">
          <span className="inner">
            <MdKeyboardArrowDown className="downArrow bounce" />
          </span>
        </span>
      </div>
    </div>
  );
};

export default Skills;
