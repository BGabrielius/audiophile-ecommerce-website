import ProductContentWrapper from '@/components/ProductContentWrapper';

const page = ({ params }: { params: { id: string } }) => {
  return <ProductContentWrapper params={params.id} />;
};

export default page;
