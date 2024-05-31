'use client';

import AudioGearSection from '@/components/AudioGearSection';
import Gallery from '@/components/Gallery';
import Headline from '@/components/Headline';
import ProductsNav from '@/components/ProductsNav';
import React from 'react';

const page = ({ params }: { params: { id: string } }) => {
  return (
    <main className='flex justify-start gap-[120px]'>
      {params.id === 'xx99II' ? (
        <Gallery product='xx99-mark-two-headphones' />
      ) : params.id === 'xx99I' ? (
        <Gallery product='xx99-mark-one-headphones' />
      ) : params.id === 'xx59' ? (
        <Gallery product='xx59-headphones' />
      ) : (
        <Headline headline='Page not found' />
      )}
      <ProductsNav />
      <AudioGearSection />
    </main>
  );
};

export default page;
