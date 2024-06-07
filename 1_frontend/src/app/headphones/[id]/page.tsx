import ProductContentWrapper from '@/components/ProductContentWrapper';
import React from 'react';

const page = ({ params }: { params: { id: string } }) => {
  return <ProductContentWrapper params={params.id} />;
};

export default page;
