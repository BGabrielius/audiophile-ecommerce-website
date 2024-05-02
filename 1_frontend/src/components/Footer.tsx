import NavLinks from './NavLinks';
import { Logo, Facebook, Instagram, Twitter } from './Svgs';

const Footer: React.FC = () => {
  return (
    <footer className='relative w-full h-[654px] sm:h-[400px] 2xl:h-[365px] flex flex-col items-center sm:items-start gap-12 sm:gap-8 px-6 sm:px-10 2xl:px-[165px] pb-[22px] sm:pb-8'>
      <div className='flex flex-col gap-12 sm:gap-8 2xl:flex-row 2xl:justify-between 2xl:w-full'>
        <div className='flex flex-col items-center sm:items-start gap-12 sm:gap-14 2xl:gap-[71px]'>
          <div className='bg-orange-clay w-[101px] h-1'></div>
          <Logo />
        </div>
        <nav className='flex flex-col items-center justify-center sm:flex-row gap-4 2xl:self-end'>
          <NavLinks />
        </nav>
      </div>
      <p className='text-center sm:text-start text-white text-opacity-50 font-body leading-body sm:mb-12 2xl:mb-6 2xl:max-w-[540px]'>
        Audiophile is an all in one stop to fulfill your audio needs. We're a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we're open 7 days a week.
      </p>
      <div className='w-full flex flex-col items-center sm:flex-row sm:justify-between gap-12 pb-4'>
        <p className='text-white text-opacity-50 font-body leading-body'>
          Copyright 2021. All Rights Reserved
        </p>
        <span className='flex gap-4 hover:cursor-pointer 2xl:absolute 2xl:right-[165px] 2xl:bottom-[136px]'>
          <Facebook />
          <Twitter />
          <Instagram />
        </span>
      </div>
    </footer>
  );
};

export default Footer;
