'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/redux/store';

import InTheBox from '../InTheBox';
import AudioGearSection from '../AudioGearSection';
import ProductsNav from '../ProductsNav';
import Headline from '../Headline';
import YouMayAlsoLikeSection from '../YouMayAlsoLikeSection';
import Gallery from '../Gallery';
import ProductFeatures from '../ProductFeatures';
import Product from '../Product';
import {
  Product as IProduct,
  getOneProduct,
  getOneProductParams,
} from '@/redux/Products/productsSlice';
import { useLocalStorage } from '@/hooks/useLocalStorage';

const ProductContentWrapper: React.FC<{ params: string; category: string }> = ({
  params,
  category,
}) => {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [features, setFeatures] = useState<string[] | undefined>(undefined);
  const [product, setProduct] = useState<IProduct>();

  const router = useRouter();

  const { setProductHook, getProductHook } = useLocalStorage(
    'products',
    params
  );

  const selectorProduct: IProduct | null = useSelector(
    (state: RootState) => state.products.product
  );
  const message = useSelector((state: RootState) => state.products.message);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (!product || product.about.route !== params) {
      const savedProduct = getProductHook();
      if (savedProduct && !isMounted) {
        applyProductData(savedProduct, true);
      } else if (!savedProduct && !isMounted) {
        const getOneParams: getOneProductParams = {
          category: category,
          productId: params,
        };
        dispatch(getOneProduct(getOneParams));
      }
    }
    if (
      selectorProduct &&
      !isMounted &&
      selectorProduct.about.route === params
    ) {
      applyProductData(selectorProduct, false);
    }
  }, [product, selectorProduct]);

  const applyProductData = (data: IProduct, saved: boolean) => {
    if (!saved) setProductHook(data);
    setProduct(data);
    setFeatures(data.about.features.split('*'));
    setIsMounted(true);
  };

  return (
    <main className='flex justify-start gap-[120px]' key={params}>
      {product && product.about.route === params ? (
        <>
          <section className='w-full flex items-start mb-[-96px] 2xl:mb-[-64px] mt-4 md:mt-8 2xl:mt-20'>
            <button
              className='text-body leading-body opacity-60 self-start hover:text-orange-clay'
              onClick={() => router.back()}
            >
              Go Back
            </button>
          </section>
          <Product
            img={product.about.slug}
            title={product.about.name}
            description={product.about.description}
            price={product.about.price}
            isNew={product.about.new}
          />
          <section className='flex flex-col gap-[120px] 2xl:flex-row 2xl:justify-between'>
            <ProductFeatures
              p1={features ? features[0] : ''}
              p2={features ? features[1] : ''}
            />
            <InTheBox items={product.items} />
          </section>
          <Gallery
            img={product.about.slug}
            title={product.about.name}
            type={product.about.category}
          />
          <YouMayAlsoLikeSection currProduct={product.about.name} />

          <ProductsNav />
          <AudioGearSection />
        </>
      ) : message ? (
        <Headline headline={message} />
      ) : (
        <Headline headline='' />
      )}
    </main>
  );
};

export default ProductContentWrapper;
