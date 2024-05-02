'use client';
import AudioGearSection from '@/components/AudioGearSection';
import Button from '@/components/Button';

export default function Home() {
  return (
    <main>
      <div className='relative flex items-center justify-center bg-black w-full'>
        <div className='absolute inset-0 flex flex-col items-center justify-center gap-4'>
          <p className='text-white text-center text-overline leading-overline tracking-overline text-opacity-50'>
            NEW PRODUCT
          </p>
          <h1 className='text-white text-center font-bold text-[36px] leading-[40px] tracking-h6 sm:text-h1 sm:leading-h1 sm:tracking-h1 mb-2'>
            XX99 MARK II HEADPHONES
          </h1>
          <p className='text-white text-center text-opacity-75 text-body leading-body mb-3'>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Button text='SEE PRODUCT' action={() => undefined} type='primary' />
        </div>
        <picture>
          <source
            media='(min-width: 1440px)'
            srcSet='/assets/home/desktop/image-hero.jpg'
          />
          <source
            media='(min-width: 640px)'
            srcSet='/assets/home/tablet/image-header.jpg'
          />
          <img
            src='/assets/home/mobile/image-header.jpg'
            className='bg-cover h-[510px] w-full 2xl:h-[588px] 2xl:w-full rounded-lg'
          />
        </picture>
      </div>
      {/* <AudioGearSection /> */}
    </main>
  );
}
