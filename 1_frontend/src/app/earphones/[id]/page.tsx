'use client';

import AudioGearSection from '@/components/AudioGearSection';
import Gallery from '@/components/Gallery';
import Headline from '@/components/Headline';
import InTheBox from '@/components/InTheBox';
import Product from '@/components/Product';
import ProductFeatures from '@/components/ProductFeatures';
import ProductsNav from '@/components/ProductsNav';
import YouMayAlsoLikeSection from '@/components/YouMayAlsoLikeSection';
import React from 'react';

const page = ({ params }: { params: { id: string } }) => {
  return (
    <main className='flex justify-start gap-[120px]'>
      {params.id === 'yx1' ? (
        <>
          <Product
            img='yx1-earphones'
            title='YX1 WIRELESS EARPHONES'
            description='Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.'
            price={599}
            isNew
          />
          <section className='flex flex-col gap-[120px] 2xl:flex-row 2xl:justify-between'>
            <ProductFeatures
              p1='Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound.'
              p2='The YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black.'
            />
            <InTheBox type='earphones' />
          </section>
          <Gallery product='yx1-earphones' />
          <YouMayAlsoLikeSection currProduct='YX1' />
        </>
      ) : (
        <Headline headline='Page not found' />
      )}
      <ProductsNav />
      <AudioGearSection />
    </main>
  );
};

export default page;
