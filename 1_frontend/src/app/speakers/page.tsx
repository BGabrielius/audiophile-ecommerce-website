'use client';

import React from 'react';
import dynamic from 'next/dynamic';
export const ProductCategoryContentWrapper = dynamic(
  () => import('@/components/ComponentWrappers/ProductCategoryContentWrapper'),
  {
    ssr: false,
  }
);

const page = () => {
  return <ProductCategoryContentWrapper category='speakers' />;
};

export default page;
