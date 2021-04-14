import React from 'react';
import { Icon, InlineIcon } from '@iconify/react';
import laptopCode from '@iconify/icons-fa-solid/laptop-code';
import bxsTerminal from '@iconify/icons-bx/bxs-terminal';
import {
  SkillsWrapper,
  SkillsContent,
  TechList,
  Heading,
  Tech,
} from '../elements/SkillElements';
import { H2, P } from '../elements/TypographyElements';

const Skills = () => {
  return (
    <SkillsWrapper id='skills'>
      <H2 size='large' textAlign='center' color='primary' smCenter='true'>
        My Skills
      </H2>

      <SkillsContent>
        <TechList>
          <Heading>
            <Icon icon={laptopCode} style={{ fontSize: '85px' }} />
            <H2 size='medium' textAlign='center' color='black' smCenter='true'>
              Frontend Development
            </H2>
          </Heading>
          <Tech>
            <P color='black' margin='0.5rem 0' weight='light'>
              HTML5
            </P>
            <P color='black' margin='0.5rem 0' weight='light'>
              CSS3
            </P>
            <P color='black' margin='0.5rem 0' weight='light'>
              Javascript ES6
            </P>
            <P color='black' margin='0.5rem 0' weight='light'>
              React.js
            </P>
            <P color='black' margin='0.5rem 0' weight='light'>
              Next.js
            </P>
            <P color='black' margin='0.5rem 0' weight='light'>
              Gatsby.js
            </P>
            <P color='black' margin='0.5rem 0' weight='light'>
              Styled Components
            </P>
            <P color='black' margin='0.5rem 0' weight='light'>
              TailwindCSS
            </P>
          </Tech>
        </TechList>
        <TechList>
          <Heading>
            <Icon icon={bxsTerminal} style={{ fontSize: '85px' }} />
            <H2 size='medium' textAlign='center' color='black' smCenter='true'>
              Backend Development
            </H2>
          </Heading>
          <Tech>
            <P color='black' margin='0.5rem 0' weight='light'>
              Node.js
            </P>
            <P color='black' margin='0.5rem 0' weight='light'>
              Express.js
            </P>
            <P color='black' margin='0.5rem 0' weight='light'>
              MongoDB
            </P>
            <P color='black' margin='0.5rem 0' weight='light'>
              RestFUL APIs
            </P>
            <P color='black' margin='0.5rem 0' weight='light'>
              JWT Authentication
            </P>
            <P color='black' margin='0.5rem 0' weight='light'>
              Firebase
            </P>
          </Tech>
        </TechList>
      </SkillsContent>
    </SkillsWrapper>
  );
};

export default Skills;
