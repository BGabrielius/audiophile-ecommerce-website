'use client';

import AudioGearSection from '@/components/AudioGearSection';
import Button from '@/components/Button';
import ProductsNav from '@/components/ProductsNav';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  return (
    <main className='flex flex-col gap-[120px] 2sm:gap-24 2xl:gap-[200px]'>
      <section className='p-0 self-start flex items-center 2xl:justify-start justify-center w-full h-[510px] sm:min-h-[610px] 2sm:min-h-[510px] lg:min-h-[610px] 2lg:min-h-[710px] 2xl:min-h-[639px] 2xl:mb-[-100px]'>
        <div className='z-10 flex flex-col items-center justify-start gap-4 max-w-[328px] md:max-w-[379px] 2xl:items-start 2xl:pl-[165px] 2xl:max-w-[530px]'>
          <p className='text-white text-center text-overline leading-overline tracking-overline text-opacity-50'>
            NEW PRODUCT
          </p>
          <h1 className='text-white text-center 2xl:text-start font-bold text-[36px] leading-[40px] tracking-h6 2sm:text-h1 2sm:leading-h1 2sm:tracking-h1 mb-2'>
            XX99 MARK II HEADPHONES
          </h1>
          <p className='text-white text-center 2xl:text-start text-opacity-75 text-body leading-body mb-3'>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Button
            text='SEE PRODUCT'
            action={() => router.push('/headphones/xx99 mark II')}
            type='primary'
          />
        </div>
        <div className='z-0 absolute top-0 w-full'>
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
              className='h-[600px] sm:h-[700px] 2sm:h-[600px] lg:h-[700px] 2lg:h-[800px] 2xl:h-[729px] w-full'
            />
          </picture>
        </div>
      </section>
      <ProductsNav />
      <section className='flex flex-col items-center justify-center w-full gap-6 2sm:gap-8 2xl:gap-12 2xl:mt-[-32px]'>
        <div className='relative overflow-hidden bg-orange-clay w-full h-[600px] 2sm:h-[720px] 2xl:h-[560px] flex flex-col items-center justify-center 2xl:flex-row rounded-lg gap-8 2sm:gap-16 2xl:gap-[138px] py-[55px]'>
          <div className='z-0 absolute rounded-[50%] border border-white/25 size-[558px] top-[-121px] 2sm:size-[944px] 2sm:top-[-280px] 2xl:left-[-160px] 2xl:top-[-35px]'></div>
          <div className='z-0 absolute rounded-[50%] border border-white/25 size-[320px] top-0 2sm:size-[542px] 2sm:top-[-82px] 2xl:left-[45px] 2xl:top-[175px]'></div>
          <div className='z-0 absolute rounded-[50%] border border-white/25 size-[279px] top-6 2sm:size-[472px] 2sm:top-[-48px] 2xl:left-[80px] 2xl:top-[215px]'></div>
          <picture className='z-10'>
            <source
              media='(min-width: 1440px)'
              srcSet='/assets/home/desktop/image-speaker-zx9.png'
            />
            <source
              media='(min-width: 640px)'
              srcSet='/assets/home/tablet/image-speaker-zx9.png'
            />
            <img
              src='/assets/home/mobile/image-speaker-zx9.png'
              className=' w-[170px] h-[207px] 2sm:w-[197px] 2sm:h-[237px] 2xl:w-[369px] 2xl:h-[443px] 2xl:mt-36'
            />
          </picture>

          <div className='z-10 max-w-[315px] 2sm:max-w-[350px] flex flex-col items-center justify-center px-6 gap-6 2xl:mt-2 2xl:items-start'>
            <h2 className='max-w-[220px] text-white text-[36px] leading-[40px] tracking-[1.3px] font-bold 2sm:text-h1 2sm:leading-h1 2sm:tracking-h1 text-center 2xl:text-start'>
              ZX9 SPEAKER
            </h2>
            <p className='text-white text-body leading-body text-center 2xl:text-start'>
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <button
              onClick={() => router.push('/speakers/zx9')}
              className='text-white bg-black hover:bg-[#4C4C4C] text-[13px] tracking-[1px] font-bold py-[15px] px-[2.43em] 2sm:mt-4'
            >
              SEE PRODUCT
            </button>
          </div>
        </div>
        <div className='w-full relative'>
          <div className='z-10 h-[320px] relative flex flex-col justify-center items-start px-6 2sm:px-[62px] 2xl:px-[95px] gap-8'>
            <h4 className='text-h4 tracking-h4 leading-h4 font-bold'>
              ZX7 SPEAKER
            </h4>
            <Button
              text='SEE PRODUCT'
              action={() => router.push('/speakers/zx7')}
              type='secondary'
            />
          </div>
          <div className='absolute z-0 inset-0 w-full'>
            <picture>
              <source
                media='(min-width: 1440px)'
                srcSet='/assets/home/desktop/image-speaker-zx7.jpg'
              />
              <source
                media='(min-width: 640px)'
                srcSet='/assets/home/tablet/image-speaker-zx7.jpg'
              />
              <img
                src='/assets/home/mobile/image-speaker-zx7.jpg'
                className='rounded-lg w-full h-[320px]'
              />
            </picture>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center gap-6 2sm:gap-3 2xl:gap-8 w-full 2sm:flex-row'>
          <div className='w-full'>
            <picture>
              <source
                media='(min-width: 1440px)'
                srcSet='/assets/home/desktop/image-earphones-yx1.jpg'
              />
              <source
                media='(min-width: 640px)'
                srcSet='/assets/home/tablet/image-earphones-yx1.jpg'
              />
              <img
                src='/assets/home/mobile/image-earphones-yx1.jpg'
                className='rounded-lg w-full h-[200px] 2sm:h-[339px]'
              />
            </picture>
          </div>
          <div className='h-[200px] 2sm:h-[339px] w-full'>
            <div className='bg-light-gray rounded-lg w-full min-h-full flex flex-col justify-center items-start px-9 py-6 2sm:px-4 2xl:px-24 md:px-10 gap-8'>
              <h4 className='text-h4 tracking-h4 leading-h4 font-bold'>
                YX1 EARPHONES
              </h4>

              <Button
                text='SEE PRODUCT'
                action={() => router.push('earphones/yx1')}
                type='secondary'
              />
            </div>
          </div>
        </div>
      </section>
      <AudioGearSection />
    </main>
  );
}
