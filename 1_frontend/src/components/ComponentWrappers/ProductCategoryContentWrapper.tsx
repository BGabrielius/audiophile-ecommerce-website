import { products, ProductInfo } from '@/tempData';

import React from 'react';
import ProductsNav from '../ProductsNav';
import AudioGearSection from '../AudioGearSection';
import CategoryProduct from '../CategoryProduct';
import Headline from '../Headline';

const ProductCategoryContentWrapper: React.FC<{ category: string }> = ({
  category,
}) => {
  return (
    <main className='flex flex-col gap-[120px]'>
      <Headline headline='HEADPHONES' />
      <section className='flex flex-col gap-[120px] 2xl:gap-[160px]'>
        {products.map(
          (product: ProductInfo) =>
            product.categoryType === category && (
              <CategoryProduct
                img={product.img}
                title={product.title}
                description={product.description}
                isNew={product.isNew}
                swap={product.swap}
                key={product.title}
                action={`/${product.categoryType}/${product.route}`}
              />
            )
        )}
      </section>
      <section className='w-full'>
        <ProductsNav />
      </section>
      <AudioGearSection />
    </main>
  );
};

export default ProductCategoryContentWrapper;
