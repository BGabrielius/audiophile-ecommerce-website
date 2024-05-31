'use client';

import AudioGearSection from '@/components/AudioGearSection';
import Gallery from '@/components/Gallery';
import Headline from '@/components/Headline';
import ProductsNav from '@/components/ProductsNav';
import React from 'react';

const page = ({ params }: { params: { id: string } }) => {
  return (
    <main className='flex justify-start gap-[120px]'>
      {params.id === 'zx9' ? (
        <Gallery product='zx9-speaker' />
      ) : params.id === 'zx7' ? (
        <Gallery product='zx7-speaker' />
      ) : (
        <Headline headline='Page not found' />
      )}
      <ProductsNav />
      <AudioGearSection />
    </main>
  );
};

export default page;
