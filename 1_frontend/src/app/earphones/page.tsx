'use client';

import AudioGearSection from '@/components/AudioGearSection';
import CategoryProduct from '@/components/CategoryProduct';
import ProductsNav from '@/components/ProductsNav';
import React from 'react';

const page = () => {
  return (
    <main className='flex flex-col gap-[120px]'>
      <section className='flex flex-col gap-[120px] mb-[80px]'>
        <CategoryProduct
          img='product-yx1-earphones'
          title='YX1 WIRELESS EARPHONES'
          description='Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.'
          isNew
        />
      </section>
      <ProductsNav />
      <AudioGearSection />
    </main>
  );
};

export default page;
