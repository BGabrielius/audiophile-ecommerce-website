import ProductContentWrapper from '@/components/ComponentWrappers/ProductContentWrapper';

const page = ({ params }: { params: { id: string } }) => {
  return <ProductContentWrapper params={params.id} category='speakers' />;
};

export default page;
