import React from 'react';
import Burger from './Burger';
import { Nav, Logo } from '../../elements/NavbarElements';
import { Icon, InlineIcon } from '@iconify/react';
import codeIcon from '@iconify/icons-codicon/code';
const Navbar = () => {
  return (
    <Nav>
      <Logo>
        <Icon icon={codeIcon} style={{ fontSize: '70px' }} />
      </Logo>
      <Burger />
    </Nav>
  );
};

export default Navbar;
