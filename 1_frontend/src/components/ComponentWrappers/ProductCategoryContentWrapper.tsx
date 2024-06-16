'use client';

import React, { useEffect } from 'react';
import ProductsNav from '../ProductsNav';
import AudioGearSection from '../AudioGearSection';
import CategoryProduct from '../CategoryProduct';
import Headline from '../Headline';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/redux/store';
import {
  ProductInfo,
  getCategorizedProducts,
} from '@/redux/Products/productsSlice';

const ProductCategoryContentWrapper: React.FC<{ category: string }> = ({
  category,
}) => {
  const products = useSelector((state: RootState) => state.products.products);
  const message = useSelector((state: RootState) => state.products.message);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (!products || products[0].category !== category) {
      dispatch(getCategorizedProducts(category));
    }
  }, [products]);

  return (
    <main className='flex flex-col justify-start gap-[120px]'>
      <Headline
        headline={message ? message.toUpperCase() : category.toUpperCase()}
      />
      <section className='flex flex-col gap-[120px] 2xl:gap-[160px]'>
        {products &&
          products.map(
            (product: ProductInfo) =>
              product.category === category && (
                <CategoryProduct
                  img={product.slug}
                  title={product.name}
                  description={product.description}
                  isNew={product.new}
                  swap={product.swap}
                  key={product.name}
                  action={`/${product.category}/${product.route}`}
                />
              )
          )}
      </section>
      {products && (
        <>
          <section className='w-full'>
            <ProductsNav />
          </section>
          <AudioGearSection />
        </>
      )}
    </main>
  );
};

export default ProductCategoryContentWrapper;
