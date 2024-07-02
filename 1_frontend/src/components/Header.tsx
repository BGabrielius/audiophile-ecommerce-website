'use client';

import styled from 'styled-components';
import { Hamburger, Logo, Cart } from './Svgs';
import { useState, useEffect, useRef } from 'react';
import NavLinks from './NavLinks';
import ProductsNav from './ProductsNav';
import { useRouter } from 'next/navigation';
import Modal from './Modal';

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
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [cartButtonPosition, setCartButtonPosition] = useState<{
    top: number;
    left: number;
    width: number;
  }>({ top: 0, left: 0, width: 0 });

  const modalRef = useRef<HTMLDialogElement>(null);
  const cartButtonRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (isModalOpen) {
      modalRef.current?.showModal();

      updateCartModalPosition();
      window.addEventListener('resize', updateCartModalPosition);
      document.addEventListener('click', handleClickOutside);
    } else if (!isModalOpen) {
      window.removeEventListener('resize', updateCartModalPosition);
      document.removeEventListener('click', handleClickOutside);
    }
    return () => {
      window.removeEventListener('resize', updateCartModalPosition);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isModalOpen]);

  const toggleModal = () => {
    if (!isModalOpen) {
      updateCartModalPosition();
      setIsModalOpen(true);
    } else if (isModalOpen) {
      modalRef.current?.close();
      setIsModalOpen(false);
    }
  };
  const handleClickOutside = (e: any) => {
    e.stopPropagation();

    if (e.target === modalRef.current) toggleModal();
    else if (e.target !== modalRef.current) return;
  };

  const updateCartModalPosition = () => {
    if (cartButtonRef.current) {
      const rect = cartButtonRef.current.getBoundingClientRect();
      setCartButtonPosition({
        top: rect.bottom + window.scrollY + 60,
        left: rect.left + window.scrollX - 295,
        width: rect.width,
      });
    }
  };

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
          <button
            ref={cartButtonRef}
            className='z-10'
            aria-label='Show cart'
            onClick={toggleModal}
          >
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

      {isModalOpen && <Modal ref={modalRef} position={cartButtonPosition} />}
    </>
  );
};

export default Header;
