'use client';

import React, { useEffect, useState } from 'react';
import InTheBox from './InTheBox';
import AudioGearSection from './AudioGearSection';
import ProductsNav from './ProductsNav';
import Headline from './Headline';
import YouMayAlsoLikeSection from './YouMayAlsoLikeSection';
import Gallery from './Gallery';
import ProductFeatures from './ProductFeatures';
import Product from './Product';
import { ProductInfo, products } from '@/tempData';
import { useRouter } from 'next/navigation';

const ProductContentWrapper: React.FC<{ params: string }> = ({ params }) => {
  const [productInfo, setProductInfo] = useState<ProductInfo>();
  const [pageNotFound, setPageNotFound] = useState<boolean>(false);

  const router = useRouter();

  useEffect(() => {
    selectedProduct();
  }, []);

  const selectedProduct = () => {
    let productFound: boolean = false;
    for (let i = 0; i < products.length; i++) {
      if (products[i].route === params) {
        setProductInfo(products[i]);
        productFound = true;
      }
    }
    if (!productFound) setPageNotFound(true);
  };
  return (
    <main className='flex justify-start gap-[120px]'>
      {productInfo ? (
        <>
          <section className='w-full flex items-start mb-[-96px] 2xl:mb-[-64px] mt-4 md:mt-8 2xl:mt-20'>
            <button
              className='text-body leading-body opacity-50 self-start hover:text-orange-clay'
              onClick={() => router.back()}
            >
              Go Back
            </button>
          </section>
          <Product
            img={productInfo.img}
            title={productInfo.title}
            type={productInfo.type}
            description={productInfo.description}
            price={productInfo.price}
            isNew={productInfo.isNew}
          />
          <section className='flex flex-col gap-[120px] 2xl:flex-row 2xl:justify-between'>
            <ProductFeatures
              p1={productInfo.ProductFeaturesP1}
              p2={productInfo.ProductFeaturesP2}
            />
            <InTheBox
              type={productInfo.type}
              children={productInfo.inTheBoxChildren}
            />
          </section>
          <Gallery product={productInfo.img} />
          <YouMayAlsoLikeSection currProduct={productInfo.title} />

          <ProductsNav />
          <AudioGearSection />
        </>
      ) : !pageNotFound ? (
        <Headline headline='LOADING...' />
      ) : (
        <Headline headline='PAGE NOT FOUND' />
      )}
    </main>
  );
};

export default ProductContentWrapper;
