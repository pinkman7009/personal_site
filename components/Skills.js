import React from 'react';
import { SkillsWrapper } from '../elements/SkillElements';
import { H2 } from '../elements/TypographyElements';

const Skills = () => {
  return (
    <SkillsWrapper id='skills'>
      <H2 size='large' textAlign='center' color='primary' smCenter='true'>
        My Skills
      </H2>
    </SkillsWrapper>
  );
};

export default Skills;
