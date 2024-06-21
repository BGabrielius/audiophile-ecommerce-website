import dynamic from 'next/dynamic';
export const ProductContentWrapper = dynamic(
  () => import('@/components/ComponentWrappers/ProductContentWrapper'),
  {
    ssr: false,
  }
);
const page = ({ params }: { params: { id: string } }) => {
  return <ProductContentWrapper params={params.id} category='earphones' />;
};

export default page;
