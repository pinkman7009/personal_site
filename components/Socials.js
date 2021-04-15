import React from 'react';
import { SocialWrapper } from '../elements/SocialElements';
import { Icon, InlineIcon } from '@iconify/react';
import mail20Filled from '@iconify/icons-fluent/mail-20-filled';
import linkedinRect from '@iconify/icons-brandico/linkedin-rect';
import githubFill from '@iconify/icons-akar-icons/github-fill';

const Socials = () => {
  return (
    <SocialWrapper>
      <a href='mailto: soumik.chaudhuri2000@gmail.com' target='_blank'>
        <Icon icon={mail20Filled} />
      </a>
      <a
        href='https://www.linkedin.com/in/soumik-chaudhuri-717bba18a/'
        target='_blank'
      >
        <Icon icon={linkedinRect} />
      </a>
      <a href='https://github.com/pinkman7009' target='_blank'>
        <Icon icon={githubFill} />
      </a>
    </SocialWrapper>
  );
};

export default Socials;
