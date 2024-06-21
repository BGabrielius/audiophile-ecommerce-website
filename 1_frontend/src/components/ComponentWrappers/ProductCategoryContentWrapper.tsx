'use client';

import React, { useEffect, useState } from 'react';
import ProductsNav from '../ProductsNav';
import AudioGearSection from '../AudioGearSection';
import CategoryProduct from '../CategoryProduct';
import Headline from '../Headline';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/redux/store';
import { ProductInfo, getAllProducts } from '@/redux/Products/productsSlice';
import { useLocalStorage } from '@/hooks/useLocalStorage';

const ProductCategoryContentWrapper: React.FC<{ category: string }> = ({
  category,
}) => {
  const [products, setProducts] = useState<ProductInfo[]>();
  const [isMounted, setIsMounted] = useState<boolean>(false);

  const selectorProducts = useSelector(
    (state: RootState) => state.products.all
  );
  const message = useSelector((state: RootState) => state.products.message);
  const { setProductsHook, getProductsHook } = useLocalStorage(
    'products',
    category
  );

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const savedProducts = getProductsHook(category);
    if (!products) {
      if (savedProducts && !isMounted) {
        filterProducts(savedProducts, true);
      } else if (
        (!savedProducts && !isMounted) ||
        (!savedProducts && !isMounted)
      ) {
        dispatch(getAllProducts());
      }
    }
    if (selectorProducts && !products && !isMounted) {
      filterProducts(selectorProducts, false);
    }
  }, [isMounted, selectorProducts, products]);
  const filterProducts = (products: ProductInfo[], isSaved: boolean) => {
    setIsMounted(true);
    if (!isSaved) setProductsHook(products);

    setProducts(products);
  };

  return (
    <main className='flex flex-col justify-start gap-[120px] min-h-screen h-full'>
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
