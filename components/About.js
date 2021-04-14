import React from 'react';
import {
  AboutWrapper,
  AboutContent,
  AboutImageWrapper,
  AboutText,
  Btn,
} from '../elements/AboutElements';
import { H2, P } from '../elements/TypographyElements';
import { Link } from 'react-scroll';

import Image from 'next/image';
const About = () => {
  return (
    <AboutWrapper id='about'>
      <H2 size='large' textAlign='center' color='primary' smCenter='true'>
        Who I am
      </H2>

      <AboutContent>
        <AboutImageWrapper>
          <Image
            src='/profilepic.png'
            height={450}
            width={380}
            alt='profilepic'
            layout='intrinsic'
          />
        </AboutImageWrapper>
        <AboutText>
          <H2 size='large' margin='2rem 0'>
            I’m Soumik Chaudhuri, a full stack web developer.
          </H2>
          <P margin='1rem 0' size='medium'>
            I’m a 2nd year Computer Science and Engineering student at SRM
            Institute of Science and Technology.
          </P>
          <P margin='1rem 0' size='medium'>
            Programming has always piqued my interest and technology continues
            to fascinate me everyday. I enjoy working in a team and I aim to
            learn and level up, one day at a time.{' '}
          </P>
          <Link to='skills' smooth={true}>
            <Btn>My Skills</Btn>
          </Link>
        </AboutText>
      </AboutContent>
    </AboutWrapper>
  );
};

export default About;
