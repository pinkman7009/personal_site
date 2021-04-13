import React from 'react';
import { Ul } from '../../elements/NavbarElements';

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>About</li>
      <li>Projects</li>
      <li>Contact</li>
    </Ul>
  );
};

export default RightNav;
