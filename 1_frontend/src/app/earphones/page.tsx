'use client';

import AudioGearSection from '@/components/AudioGearSection';
import CategoryProduct from '@/components/CategoryProduct';
import Headline from '@/components/Headline';
import ProductsNav from '@/components/ProductsNav';
import React from 'react';

const page = () => {
  return (
    <main className='flex flex-col gap-[120px]'>
      <Headline headline='EARPHONES' />
      <section className='flex flex-col gap-[120px] 2xl:gap-[160px]'>
        <CategoryProduct
          img='product-yx1-earphones'
          title='YX1 WIRELESS EARPHONES'
          description='Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.'
          isNew
          action='/earphones/yx1'
        />
      </section>
      <section className='w-full'>
        <ProductsNav />
      </section>
      <AudioGearSection />
    </main>
  );
};

export default page;
