'use client';

import React, { useEffect, useState } from 'react';
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
import { useLocalStorage } from '@/hooks/useLocalStorage';

const ProductCategoryContentWrapper: React.FC<{ category: string }> = ({
  category,
}) => {
  const [products, setProducts] = useState<ProductInfo[]>();
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [currentCategory, setCurrentCategory] = useState<string | null>(null);

  const selectorProducts = useSelector(
    (state: RootState) => state.products.products
  );
  const message = useSelector((state: RootState) => state.products.message);
  const { setProductsHook, getProductsHook } = useLocalStorage(
    'products',
    category
  );

  const dispatch = useDispatch<AppDispatch>();

  // useEffect(() => {
  //   if (!isMounted) {
  //     const savedProducts = getProductsHook();
  //     if (savedProducts && savedProducts.length > 0) {
  //       setProducts(savedProducts);
  //     } else {
  //       dispatch(getCategorizedProducts(category));
  //     }
  //     setIsMounted(true);
  //   } else if (selectorProducts && !products) {
  //     setProducts(selectorProducts);
  //     setProductsHook(selectorProducts);
  //   }
  // }, [
  // dispatch,
  // category,
  // isMounted,
  // selectorProducts,
  // products,
  // getProductsHook,
  // setProductsHook,
  // ]);
  useEffect(() => {
    // if (products) {
    //   console.log('products,', products);
    //   console.log('isMounted,', isMounted);
    // }
    if (!products) {
      const savedProduct = getProductsHook();
      if (savedProduct.length > 0 && !isMounted) {
        console.log(savedProduct);
        setIsMounted(true);
        setProducts(savedProduct);
      } else if (!savedProduct && !isMounted) {
        dispatch(getCategorizedProducts(category));
      }
    }
    if (selectorProducts && !isMounted) {
      setProducts(selectorProducts);
      setIsMounted(true);
      setProductsHook(selectorProducts);
    }
  }, [
    category,
    dispatch,
    isMounted,
    selectorProducts,
    products,
    getProductsHook,
    setProductsHook,
  ]);

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
