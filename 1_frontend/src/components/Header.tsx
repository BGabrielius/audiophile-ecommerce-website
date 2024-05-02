'use client';

import styled from 'styled-components';
import { Hamburger, Logo, Cart } from './Svgs';
import { useState } from 'react';
import NavLinks from './NavLinks';

const StyledHeader = styled.header`
  min-height: 96px;
  padding-top: 2em;
  padding-bottom: 0.5em;
  background-color: black;
  border-bottom: 1px solid #979797;
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <StyledHeader className='px-6 md:px-10 2xl:px-40'>
      <div className='w-full flex items-center justify-between'>
        <div onClick={toggleNavbar} className='2xl:hidden hover:cursor-pointer'>
          <Hamburger />
        </div>
        <Logo />
        <nav className='hidden 2xl:flex 2xl:gap-8 2xl:mr-28'>
          <NavLinks />
        </nav>
        <div className='hover:cursor-pointer'>
          <Cart />
        </div>
      </div>
      {isOpen && (
        <nav className='flex flex-col flex-wrap justify-center items-center 2xl:hidden'>
          <NavLinks />
        </nav>
      )}
    </StyledHeader>
  );
};

export default Header;
