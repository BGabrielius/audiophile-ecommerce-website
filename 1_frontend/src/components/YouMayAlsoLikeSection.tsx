'use client';

import { useEffect, useState } from 'react';
import Button from './Button';
import { useRouter } from 'next/navigation';

import { products, ProductInfo } from '@/tempData';

const YouMayAlsoLikeSection: React.FC<{ currProduct: string }> = ({
  currProduct,
}) => {
  const [randomProducts, setRandomProducts] = useState<ProductInfo[]>();

  const router = useRouter();

  useEffect(() => {
    if (!randomProducts) {
      removeSelectedProduct();
    }
  }, []);

  const removeSelectedProduct = () => {
    const filteredProducts = products.filter(
      (product) => product.title !== currProduct
    );
    const randomItems: ProductInfo[] = filteredProducts
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);
    setRandomProducts(randomItems);
  };
  return (
    <section className='w-full'>
      <h4 className='text-center mb-10 2sm:mb-14 2xl:mb-16 font-bold text-[24px] leading-h3 tracking-[0.86px] 2sm:text-h3 2sm:tracking-h3'>
        YOU MAY ALSO LIKE
      </h4>
      <div className='w-full flex flex-col 2sm:flex-row gap-14 2sm:gap-[11px] 2xl:gap-[30px]'>
        {randomProducts &&
          randomProducts.map((product) => (
            <div
              className='w-full flex flex-col items-center gap-8'
              key={product.title}
            >
              <img
                src={`/assets/product-${product.img}/desktop/image-category-page-preview.jpg`}
                className='w-full rounded-[8px] 2sm:mb-2 2sm:max-h-[318px]'
                alt={`${product.title} ${product.type} product`}
              />

              <h5 className='font-bold text-h5 tracking-h5 leading-h5'>
                {product.title}
              </h5>
              <Button
                text='SEE PRODUCT'
                type='primary'
                action={() =>
                  router.push(`/${product.categoryType}/${product.route}`)
                }
              />
            </div>
          ))}
      </div>
    </section>
  );
};

export default YouMayAlsoLikeSection;
