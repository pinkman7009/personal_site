import React from 'react';
import { Icon, InlineIcon } from '@iconify/react';
import magnifyingGlass from '@iconify/icons-foundation/magnifying-glass';
import { Link } from 'react-scroll';
import {
  HeroWrapper,
  HeroContent,
  HeroImage,
  Btn,
} from '../elements/HeroElements';
import { H1, P } from '../elements/TypographyElements';

const Hero = () => {
  return (
    <HeroWrapper>
      <HeroContent>
        <H1 className='title' size='large' margin='3rem 0' smCenter='true'>
          Hey! I'm Soumik.
        </H1>
        <P size='large' smCenter='true'>
          a <span style={{ color: '#42ffa4' }}>web developer.</span>
        </P>
        <Link to='about' smooth={true}>
          <Btn>
            Let's Explore
            <Icon
              icon={magnifyingGlass}
              style={{ color: '#ffffff', fontSize: '35px' }}
            />
          </Btn>
        </Link>
      </HeroContent>

      <HeroImage>
        <img src='hero.svg' alt='soumik-avatar' className='hero-img' />
      </HeroImage>
    </HeroWrapper>
  );
};

export default Hero;
