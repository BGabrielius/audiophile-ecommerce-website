'use client';

import AudioGearSection from '@/components/AudioGearSection';
import Gallery from '@/components/Gallery';
import Headline from '@/components/Headline';
import ProductsNav from '@/components/ProductsNav';
import React from 'react';

const page = ({ params }: { params: { id: string } }) => {
  return (
    <main className='flex justify-start'>
      {params.id === 'yx1' ? (
        <Gallery product='yx1-earphones' />
      ) : (
        <Headline headline='Page not found' />
      )}
      <ProductsNav />
      <AudioGearSection />
    </main>
  );
};

export default page;
