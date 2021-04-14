import React, { useState } from 'react';
import Burger from './Burger';
import { NavWrapper, Nav, Logo } from '../../elements/NavbarElements';
import { Icon, InlineIcon } from '@iconify/react';
import codeIcon from '@iconify/icons-codicon/code';

import Link from 'next/link';

const Navbar = () => {
  const [scroll, setScroll] = useState(false);

  const changeNavbar = () => {
    if (window.scrollY >= 80) setScroll(true);
    else setScroll(false);
  };

  if (typeof window !== 'undefined')
    window.addEventListener('scroll', changeNavbar);
  return (
    <NavWrapper scroll={scroll}>
      <Nav>
        <Logo>
          <Link href='/'>
            <Icon icon={codeIcon} style={{ fontSize: '70px' }} />
          </Link>
        </Logo>
        <Burger />
      </Nav>
    </NavWrapper>
  );
};

export default Navbar;
