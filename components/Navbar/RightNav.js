import React from 'react';
import { Ul } from '../../elements/NavbarElements';
import { Link } from 'react-scroll';
const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>
        <Link to='about' smooth={true}>
          About
        </Link>
      </li>
      <li>
        <Link to='projects' smooth={true}>
          Projects
        </Link>
      </li>
      <li>
        <Link to='contact' smooth={true}>
          Contact
        </Link>
      </li>
    </Ul>
  );
};

export default RightNav;
