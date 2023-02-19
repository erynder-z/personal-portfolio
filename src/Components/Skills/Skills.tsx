import React, { FC, useEffect, useState } from 'react';

import VisibleSectionEffect from '../VisibleSectionEffect/VisibleSectionEffect';
import SkillList from './SkillList';
import './Skills.css';

interface Props {
  active: boolean;
}

const Skills: FC<Props> = ({ active }) => {
  const [skills, setSkills] = useState(SkillList);
  const [currentlyVisible, setCurrentlyVisible] = useState<boolean>(false);

  useEffect(() => {
    const skillItems = document.querySelectorAll('.skill-item-wrapper');

    skillItems.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add('skill-item-fadeIn');
      }, 200 * (index + 1));
    });
  }, [currentlyVisible]);

  return (
    <VisibleSectionEffect setCurrentlyVisible={setCurrentlyVisible}>
      <section className={` skills-container ${!active ? 'hide' : ''}`}>
        <h2 className="skills-header"> [skills]</h2>
        {currentlyVisible && (
          <div className="skills-list">
            {skills.map((skill) => {
              return (
                <div key={skill.name} className="skill-item-wrapper">
                  <div className="skill-icon">{skill.icon}</div>
                  <div className="skill-name" style={{ color: skill.color }}>
                    {skill.name}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>
    </VisibleSectionEffect>
  );
};

export default Skills;
