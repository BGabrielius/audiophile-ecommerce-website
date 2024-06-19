'use client';

import dynamic from 'next/dynamic';
import React from 'react';

export const ProductCategoryContentWrapper = dynamic(
  () => import('@/components/ComponentWrappers/ProductCategoryContentWrapper'),
  {
    ssr: false,
  }
);

const page = () => {
  return <ProductCategoryContentWrapper category='headphones' />;
};

export default page;
