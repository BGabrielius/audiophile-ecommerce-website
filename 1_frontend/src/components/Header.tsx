'use client';

import styled from 'styled-components';
import { Hamburger, Logo, Cart } from './Svgs';
import { useState } from 'react';
import NavLinks from './NavLinks';
import ProductsNav from './ProductsNav';
import { useRouter } from 'next/navigation';

const StyledNav = styled.nav`
  padding: 0 1.5em;
  max-width: 1440px;

  @media screen and (min-width: 768px) {
    padding: 0 40px;
  }
  @media screen and (min-width: 1440px) {
    padding: 0 165px;
  }
`;

const StyledHeader = styled.header`
  min-height: 96px;
  padding-top: 2em;
  padding-bottom: 0.5em;
  background-color: black;
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 11;
  pointer-events: all;
`;

const Header: React.FC = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <StyledHeader className='px-6 md:px-10 2xl:px-40'>
        <nav className='w-full flex items-center justify-between'>
          <button
            onClick={() => setIsOpen(true)}
            className='2xl:hidden hover:cursor-pointer z-10'
            aria-label='Open navigation menu.'
          >
            <Hamburger />
          </button>
          <button
            className='z-10'
            onClick={() => router.replace('/')}
            aria-label='Navigate to home page.'
          >
            <Logo />
          </button>
          <ul className='hidden 2xl:flex 2xl:gap-8 2xl:mr-28 z-10'>
            <NavLinks />
          </ul>
          <button className='z-10' aria-label='Show cart'>
            <Cart />
          </button>
        </nav>
        {isOpen && (
          <StyledNav className='z-20 w-full bg-white rounded-[8px] absolute inset-x-0 top-[90px] flex flex-col flex-wrap justify-center items-center 2xl:hidden'>
            <ProductsNav header />
          </StyledNav>
        )}
      </StyledHeader>
      {isOpen && <Overlay onClick={() => setIsOpen(false)} />}
    </>
  );
};

export default Header;
