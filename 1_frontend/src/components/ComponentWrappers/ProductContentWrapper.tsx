'use client';

import React, { useEffect, useState } from 'react';
import InTheBox from '../InTheBox';
import AudioGearSection from '../AudioGearSection';
import ProductsNav from '../ProductsNav';
import Headline from '../Headline';
import YouMayAlsoLikeSection from '../YouMayAlsoLikeSection';
import Gallery from '../Gallery';
import ProductFeatures from '../ProductFeatures';
import Product from '../Product';
import { ProductInfo, products } from '@/tempData';
import { useRouter } from 'next/navigation';

const ProductContentWrapper: React.FC<{ params: string; category: string }> = ({
  params,
  category,
}) => {
  const [productInfo, setProductInfo] = useState<ProductInfo>();
  const [pageNotFound, setPageNotFound] = useState<boolean>(false);

  const router = useRouter();

  useEffect(() => {
    selectedProduct();
  }, []);

  const selectedProduct = () => {
    let productFound: boolean = false;
    for (let i = 0; i < products.length; i++) {
      if (
        products[i].route === params &&
        products[i].categoryType === category
      ) {
        setProductInfo(products[i]);
        productFound = true;
      }
    }
    if (!productFound) setPageNotFound(true);
  };
  return (
    <>
      {products.map(
        (product: ProductInfo) =>
          product.categoryType === category &&
          product.route === params && (
            <main className='flex justify-start gap-[120px]' key={params}>
              <section className='w-full flex items-start mb-[-96px] 2xl:mb-[-64px] mt-4 md:mt-8 2xl:mt-20'>
                <button
                  className='text-body leading-body opacity-60 self-start hover:text-orange-clay'
                  onClick={() => router.back()}
                >
                  Go Back
                </button>
              </section>
              <Product
                img={product.img}
                title={product.title}
                type={product.type}
                description={product.description}
                price={product.price}
                isNew={product.isNew}
              />
              <section className='flex flex-col gap-[120px] 2xl:flex-row 2xl:justify-between'>
                <ProductFeatures
                  p1={product.ProductFeaturesP1}
                  p2={product.ProductFeaturesP2}
                />
                <InTheBox
                  type={product.type}
                  children={product.inTheBoxChildren}
                />
              </section>
              <Gallery
                img={product.img}
                title={product.title}
                type={product.type}
              />
              <YouMayAlsoLikeSection currProduct={product.title} />

              <ProductsNav />
              <AudioGearSection />
            </main>
          )
      )}
      {pageNotFound && (
        <main className='flex justify-start'>
          <Headline headline='PAGE NOT FOUND' />{' '}
        </main>
      )}
    </>
  );
};

export default ProductContentWrapper;
