import React from 'react';
import {
  ContactWrapper,
  ContactContent,
  ContactImageWrapper,
  Btn,
} from '../elements/ContactElements';
import { Icon, InlineIcon } from '@iconify/react';
import send16Filled from '@iconify/icons-fluent/send-16-filled';
import { P, H2 } from '../elements/TypographyElements';

const Contact = () => {
  return (
    <ContactWrapper id='contact'>
      <H2 size='large' textAlign='center' color='primary' smCenter='true'>
        Contact Me
      </H2>
      <ContactContent>
        <ContactImageWrapper>
          <img src='contact.svg' alt='soumik-contact' className='contact-img' />
        </ContactImageWrapper>

        <form method='POST' className='contact-form' data-netlify='true'>
          <input
            type='text'
            name='name'
            className='input-field'
            placeholder='name'
          />
          <input
            type='email'
            name='emailid'
            className='input-field'
            placeholder='email'
          />
          <input
            type='password'
            name='password'
            className='input-field'
            placeholder='password'
            style={{ display: 'none' }}
          />
          <textarea
            name='message'
            className='text-field'
            placeholder='send me a message'
          />

          <Btn>
            <input type='submit' className='btn' value='SEND' />

            <Icon icon={send16Filled} />
          </Btn>
        </form>
      </ContactContent>
      <P textAlign='center' smCenter='true' margin='0 0 1rem 0'>
        {' '}
        &copy; 2021 Soumik Chaudhuri
      </P>
    </ContactWrapper>
  );
};

export default Contact;
