import ProductContentWrapper from '@/components/ComponentWrappers/ProductContentWrapper';
import React from 'react';

const page = ({ params }: { params: { id: string } }) => {
  return <ProductContentWrapper params={params.id} category='headphones' />;
};

export default page;
