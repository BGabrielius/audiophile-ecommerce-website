'use client';

import { useEffect, useState } from 'react';
import Button from './Button';
import { useRouter } from 'next/navigation';
interface Product {
  title: string;
  img: string;
  route: string;
}
const products: Product[] = [
  {
    title: 'XX99 MARK II',
    img: 'xx99-mark-two-headphones',
    route: '/headphones/xx99II',
  },
  {
    title: 'XX99 MARK I',
    img: 'xx99-mark-one-headphones',
    route: '/headphones/xx99I',
  },
  {
    title: 'XX59',
    img: 'xx59-headphones',
    route: '/headphones/xx59',
  },
  {
    title: 'ZX9',
    img: 'zx9-speaker',
    route: '/speakers/zx9',
  },
  {
    title: 'ZX7',
    img: 'zx7-speaker',
    route: '/speakers/zx7',
  },
  {
    title: 'YX1',
    img: 'yx1-earphones',
    route: '/earphones/yx1',
  },
];
const YouMayAlsoLikeSection: React.FC<{ currProduct: string }> = ({
  currProduct,
}) => {
  const [randomProducts, setRandomProducts] = useState<Product[]>();

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
    const randomItems: Product[] = filteredProducts
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);
    setRandomProducts(randomItems);
  };
  return (
    <section className='w-full'>
      <h3 className='text-center mb-10 2sm:mb-14 2xl:mb-16 font-bold text-[24px] leading-h3 tracking-[0.86px] 2sm:text-h3 2sm:tracking-h3'>
        YOU MAY ALSO LIKE
      </h3>
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
              />

              <h5 className='font-bold text-h5 tracking-h5 leading-h5'>
                {product.title}
              </h5>
              <Button
                text='SEE PRODUCT'
                type='primary'
                action={() => router.replace(product.route)}
              />
            </div>
          ))}
      </div>
    </section>
  );
};

export default YouMayAlsoLikeSection;
