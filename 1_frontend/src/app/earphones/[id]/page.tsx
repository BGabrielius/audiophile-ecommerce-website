'use client';

import Gallery from '@/components/Gallery';
import Headline from '@/components/Headline';
import React, { useEffect } from 'react';

const page = ({ params }: { params: { id: string } }) => {
  useEffect(() => {
    console.log(params.id);
  }, []);

  return (
    <main className='flex justify-start'>
      {params.id === 'yx1' ? (
        <Gallery product='yx1-earphones' />
      ) : (
        <Headline headline='Page not found' />
      )}
    </main>
  );
};

export default page;
