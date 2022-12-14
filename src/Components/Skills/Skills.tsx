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
  SiMongodb,
  SiExpress,
  SiGit,
  SiGithub,
  SiJest,
} from 'react-icons/si';
import './Skills.css';

interface Props {
  active: boolean;
  shuffleText: (text: string) => string;
}

const Skills: FC<Props> = ({ active, shuffleText }) => {
  const [chars, setChars] = useState({
    colon: ':',
    comma: ',',
    curlyBracesOpen: '{',
    curlyBracesClose: '}',
    bracketsOpen: '[',
    bracketsClose: ']',
  });

  const [heading, setHeading] = useState<string>(`skills = `);
  const [languages, setLanguages] = useState<{
    header: string;
    language1: string;
    language2: string;
    language3: string;
    language4: string;
    language1Icon: JSX.Element;
    language2Icon: JSX.Element;
    language3Icon: JSX.Element;
    language4Icon: JSX.Element;
  }>({
    header: 'Languages:',
    language1: 'HTML',
    language2: 'CSS',
    language3: 'JavaScript',
    language4: 'TypeScript',
    language1Icon: <SiHtml5 size="1.5rem" color="#e34f26" />,
    language2Icon: <SiCss3 size="1.5rem" color="#264de4" />,
    language3Icon: <SiJavascript size="1.5rem" color="#f7df1e" />,
    language4Icon: <SiTypescript size="1.5rem" color="#3178c6" />,
  });

  const [technologies, setTechnologies] = useState<{
    header: string;
    tech1: string;
    tech2: string;
    tech3: string;
    tech4: string;
    tech5: string;
    tech6: string;
    tech1Icon: JSX.Element;
    tech2Icon: JSX.Element;
    tech3Icon: JSX.Element;
    tech4Icon: JSX.Element;
    tech5Icon: JSX.Element;
    tech6Icon: JSX.Element;
  }>({
    header: 'Technologies:',
    tech1: 'React',
    tech2: 'Firebase',
    tech3: 'Sass',
    tech4: 'NodeJS',
    tech5: 'MongoDB',
    tech6: 'Express',
    tech1Icon: <SiReact size="1.5rem" color="#61dbfb" />,
    tech2Icon: <SiFirebase size="1.5rem" color="#FFCB2B" />,
    tech3Icon: <SiSass size="1.5rem" color="#cd669a" />,
    tech4Icon: <SiNodedotjs size="1.5rem" color="#68a063" />,
    tech5Icon: <SiMongodb size="1.5rem" color="#589636" />,
    tech6Icon: <SiExpress size="1.5rem" color="#589636" />,
  });

  const [tools, setTools] = useState<{
    header: string;
    tool1: string;
    tool2: string;
    tool3: string;
    tool1Icon: JSX.Element;
    tool2Icon: JSX.Element;
    tool3Icon: JSX.Element;
  }>({
    header: 'Tools:',
    tool1: 'Git',
    tool2: 'GitHub',
    tool3: 'Jest',
    tool1Icon: <SiGit size="1.5rem" color="#f1502f" />,
    tool2Icon: <SiGithub size="1.5rem" color="#fffff" />,
    tool3Icon: <SiJest size="1.5rem" color="#18df16" />,
  });

  const shuffleChars = (): void => {
    const caracterArray = [
      ',',
      ':',
      '{',
      '}',
      '[',
      ']',
      '#',
      '&',
      '$',
      '!',
      '"',
      '??',
      '+',
    ];
    const getRandomChar = (): string => {
      return caracterArray[Math.floor(Math.random() * caracterArray.length)];
    };

    setChars({
      colon: getRandomChar(),
      comma: getRandomChar(),
      curlyBracesOpen: getRandomChar(),
      curlyBracesClose: getRandomChar(),
      bracketsOpen: getRandomChar(),
      bracketsClose: getRandomChar(),
    });
  };

  const getRandomIcon = (): JSX.Element => {
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
  };

  useEffect(() => {
    const shuffle = (): void => {
      const shuffle = setInterval(() => {
        setHeading(shuffleText(heading));
        shuffleChars();
        setLanguages({
          header: shuffleText('Languages:'),
          language1: shuffleText('HTML'),
          language2: shuffleText('CSS'),
          language3: shuffleText('JavaScript'),
          language4: shuffleText('TypeScript'),
          language1Icon: getRandomIcon(),
          language2Icon: getRandomIcon(),
          language3Icon: getRandomIcon(),
          language4Icon: getRandomIcon(),
        });
        setTechnologies({
          header: shuffleText('Technologies:'),
          tech1: shuffleText('React'),
          tech2: shuffleText('Firebase'),
          tech3: shuffleText('Sass'),
          tech4: shuffleText('NodeJS'),
          tech5: shuffleText('mongoDB'),
          tech6: shuffleText('Express'),
          tech1Icon: getRandomIcon(),
          tech2Icon: getRandomIcon(),
          tech3Icon: getRandomIcon(),
          tech4Icon: getRandomIcon(),
          tech5Icon: getRandomIcon(),
          tech6Icon: getRandomIcon(),
        });

        setTools({
          header: shuffleText('Tools:'),
          tool1: shuffleText('Git'),
          tool2: shuffleText('GitHub'),
          tool3: shuffleText('Jest'),
          tool1Icon: getRandomIcon(),
          tool2Icon: getRandomIcon(),
          tool3Icon: getRandomIcon(),
        });
      }, 50);

      setTimeout(() => {
        clearInterval(shuffle);

        setHeading('skills = ');

        setChars({
          colon: ':',
          comma: ',',
          curlyBracesOpen: '{',
          curlyBracesClose: '}',
          bracketsOpen: '[',
          bracketsClose: ']',
        });

        setLanguages({
          header: 'Languages:',
          language1: 'HTML',
          language2: 'CSS',
          language3: 'JavaScript',
          language4: 'TypeScript',
          language1Icon: <SiHtml5 size="1.5rem" color="#e34f26" />,
          language2Icon: <SiCss3 size="1.5rem" color="#264de4" />,
          language3Icon: <SiJavascript size="1.5rem" color="#f7df1e" />,
          language4Icon: <SiTypescript size="1.5rem" color="#3178c6" />,
        });

        setTechnologies({
          header: 'Technologies:',
          tech1: 'React',
          tech2: 'Firebase',
          tech3: 'Sass',
          tech4: 'NodeJS',
          tech5: 'MongoDB',
          tech6: 'Express',
          tech1Icon: <SiReact size="1.5rem" color="#61dbfb" />,
          tech2Icon: <SiFirebase size="1.5rem" color="#FFCB2B" />,
          tech3Icon: <SiSass size="1.5rem" color="#cd669a" />,
          tech4Icon: <SiNodedotjs size="1.5rem" color="#68a063" />,
          tech5Icon: <SiMongodb size="1.5rem" color="#589636" />,
          tech6Icon: <SiExpress size="1.5rem" color="#589636" />,
        });

        setTools({
          header: 'Tools:',
          tool1: 'Git',
          tool2: 'GitHub',
          tool3: 'Jest',
          tool1Icon: <SiGit size="1.5rem" color="#f1502f" />,
          tool2Icon: <SiGithub size="1.5rem" color="#fffff" />,
          tool3Icon: <SiJest size="1.5rem" color="#18df16" />,
        });
      }, 1000);
    };

    if (active) {
      shuffle();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  return (
    <div className="skills-container">
      <section className={!active ? 'hide' : ''}>
        <h2 className="skills-header"> {heading}</h2>
        <div className="curlyOpen-outer">{chars.curlyBracesOpen}</div>
        <h3 className="languages-header">{languages.header}</h3>
        <div className="bracketOpen1">{chars.bracketsOpen}</div>
        <div className="languages-container">
          <div className="item-wrapper">
            <div className="curlyOpen-inner">{chars.curlyBracesOpen}</div>
            {languages.language1Icon} {chars.colon} {languages.language1}
            <div className="curlyClose-inner">{chars.curlyBracesClose}</div>
            {chars.comma}
          </div>
          <div className="item-wrapper">
            <div className="curlyOpen-inner">{chars.curlyBracesOpen}</div>
            {languages.language2Icon} {chars.colon} {languages.language2}
            <div className="curlyClose-inner">{chars.curlyBracesClose}</div>
            {chars.comma}
          </div>
          <div className="item-wrapper">
            <div className="curlyOpen-inner">{chars.curlyBracesOpen}</div>
            {languages.language3Icon} {chars.colon} {languages.language3}
            <div className="curlyClose-inner">{chars.curlyBracesClose}</div>
            {chars.comma}
          </div>
          <div className="item-wrapper">
            <div className="curlyOpen-inner">{chars.curlyBracesOpen}</div>
            {languages.language4Icon} {chars.colon} {languages.language4}
            <div className="curlyClose-inner">{chars.curlyBracesClose}</div>
          </div>
        </div>
        <div className="bracketClose1">
          {chars.bracketsClose} {chars.comma}
        </div>
        <h3 className="technologies-header">{technologies.header}</h3>
        <div className="bracketOpen2">{chars.bracketsOpen}</div>
        <div className="technologies-container">
          <div className="item-wrapper">
            <div className="curlyOpen-inner">{chars.curlyBracesOpen}</div>
            {technologies.tech1Icon} {chars.colon} {technologies.tech1}
            <div className="curlyClose-inner">{chars.curlyBracesClose}</div>
            {chars.comma}
          </div>
          <div className="item-wrapper">
            <div className="curlyOpen-inner">{chars.curlyBracesOpen}</div>
            {technologies.tech2Icon} {chars.colon} {technologies.tech2}
            <div className="curlyClose-inner">{chars.curlyBracesClose}</div>
            {chars.comma}
          </div>
          <div className="item-wrapper">
            <div className="curlyOpen-inner">{chars.curlyBracesOpen}</div>
            {technologies.tech3Icon} {chars.colon} {technologies.tech3}
            <div className="curlyClose-inner">{chars.curlyBracesClose}</div>
            {chars.comma}
          </div>
          <div className="item-wrapper">
            <div className="curlyOpen-inner">{chars.curlyBracesOpen}</div>
            {technologies.tech4Icon} {chars.colon} {technologies.tech4}
            <div className="curlyClose-inner">{chars.curlyBracesClose}</div>
          </div>
          <div className="item-wrapper">
            <div className="curlyOpen-inner">{chars.curlyBracesOpen}</div>
            {technologies.tech5Icon} {chars.colon} {technologies.tech5}
            <div className="curlyClose-inner">{chars.curlyBracesClose}</div>
          </div>
          <div className="item-wrapper">
            <div className="curlyOpen-inner">{chars.curlyBracesOpen}</div>
            {technologies.tech6Icon} {chars.colon} {technologies.tech6}
            <div className="curlyClose-inner">{chars.curlyBracesClose}</div>
          </div>
        </div>
        <div className="bracketClose2">
          {chars.bracketsClose} {chars.comma}
        </div>
        <h3 className="tools-header">{tools.header}</h3>
        <div className="bracketOpen3">{chars.bracketsOpen}</div>
        <div className="tools-container">
          <div className="item-wrapper">
            <div className="curlyOpen-inner">{chars.curlyBracesOpen}</div>
            {tools.tool1Icon} {chars.colon} {tools.tool1}
            <div className="curlyClose-inner">{chars.curlyBracesClose}</div>
            {chars.comma}
          </div>
          <div className="item-wrapper">
            <div className="curlyOpen-inner">{chars.curlyBracesOpen}</div>
            {tools.tool2Icon} {chars.colon} {tools.tool2}
            <div className="curlyClose-inner">{chars.curlyBracesClose}</div>
            {chars.comma}
          </div>
          <div className="item-wrapper">
            <div className="curlyOpen-inner">{chars.curlyBracesOpen}</div>
            {tools.tool3Icon} {chars.colon} {tools.tool3}
            <div className="curlyClose-inner">{chars.curlyBracesClose}</div>
            {chars.comma}
          </div>
        </div>
        <div className="bracketClose3">{chars.bracketsClose}</div>
        <div className="curlyClose-outer">{chars.curlyBracesClose}</div>
      </section>
    </div>
  );
};

export default Skills;
