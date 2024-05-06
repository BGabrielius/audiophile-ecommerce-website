import React from 'react';

const AudioGearSection = () => {
  return (
    <section className='w-full 2xl:h-[588px] bg-white flex flex-col items-center 2xl:flex-row-reverse 2xl:justify-center gap-8 2xl:gap-[30px]'>
      <div className='2xl:w-2/4'>
        <picture>
          <source
            media='(min-width: 1440px)'
            srcSet='/assets/shared/desktop/image-best-gear.jpg'
          />
          <source
            media='(min-width: 640px)'
            srcSet='/assets/shared/tablet/image-best-gear.jpg'
          />
          <img
            src='/assets/shared/mobile/image-best-gear.jpg'
            className='h-[300px] 2xl:h-[588px] 2xl:w-full rounded-lg'
          />
        </picture>
      </div>
      <div className='2xl:w-2/4 2xl:pr-[95px]'>
        <div className='flex flex-col gap-8 2sm:max-w-[573px] 2xl:max-w-[445px] mt-2 2sm:mt-8 2xl:mt-0'>
          <h2 className='text-center font-bold text-[28px] tracking-[1px] 2sm:text-h2 2sm:leading-h2 2sm:tracking-h2 2xl:text-start'>
            BRINGING YOU THE
            <span className='text-orange-clay'> BEST</span> AUDIO GEAR
          </h2>
          <p className='text-black text-opacity-50 text-center text-body leading-body 2xl:text-start'>
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AudioGearSection;
