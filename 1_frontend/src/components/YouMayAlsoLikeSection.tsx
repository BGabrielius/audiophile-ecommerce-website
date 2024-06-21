'use client';

import Button from './Button';
import { useRouter } from 'next/navigation';

import { ProductInfo } from '@/redux/Products/productsSlice';

const YouMayAlsoLikeSection: React.FC<{ uniqueProducts: ProductInfo[] }> = ({
  uniqueProducts,
}) => {
  const router = useRouter();

  return (
    <section className='w-full'>
      <h4 className='text-center mb-10 2sm:mb-14 2xl:mb-16 font-bold text-[24px] leading-h3 tracking-[0.86px] 2sm:text-h3 2sm:tracking-h3'>
        YOU MAY ALSO LIKE
      </h4>
      <div className='w-full flex flex-col 2sm:flex-row gap-14 2sm:gap-[11px] 2xl:gap-[30px]'>
        {uniqueProducts &&
          uniqueProducts.map((product) => (
            <div
              className='w-full flex flex-col items-center gap-8'
              key={product.name}
            >
              <img
                src={`/assets/product-${product.slug}/desktop/image-category-page-preview.jpg`}
                className='w-full rounded-[8px] 2sm:mb-2 2sm:max-h-[318px]'
                alt={`${product.name} ${product.category} product`}
              />

              <h5 className='font-bold text-h5 tracking-h5 leading-h5'>
                {product.name}
              </h5>
              <Button
                text='SEE PRODUCT'
                type='primary'
                action={() =>
                  router.push(`/${product.category}/${product.route}`)
                }
              />
            </div>
          ))}
      </div>
    </section>
  );
};

export default YouMayAlsoLikeSection;
