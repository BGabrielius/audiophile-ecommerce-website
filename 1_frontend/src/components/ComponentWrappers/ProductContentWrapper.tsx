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
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/redux/store';
import {
  Product as IProduct,
  getOneProduct,
  getOneProductParams,
} from '@/redux/Products/productsSlice';

const ProductContentWrapper: React.FC<{ params: string; category: string }> = ({
  params,
  category,
}) => {
  const [pageNotFound, setPageNotFound] = useState<boolean>(false);

  const router = useRouter();

  const product: IProduct | null = useSelector(
    (state: RootState) => state.products.product
  );
  const message = useSelector((state: RootState) => state.products.message);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const getOneParams: getOneProductParams = {
      category: category,
      productId: params,
    };
    if (!product || product.about.route !== params) {
      dispatch(getOneProduct(getOneParams));
    }
    if (product) console.log(product);
  }, [product]);

  // const selectedProduct = () => {
  //   let productFound: boolean = false;
  //   for (let i = 0; i < products.length; i++) {
  //     if (
  //       products[i].route === params &&
  //       products[i].categoryType === category
  //     ) {
  //       productFound = true;
  //     }
  //   }
  //   if (!productFound) setPageNotFound(true);
  // };
  return (
    <>
      (
      {product ? (
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
            img={product.about.slug}
            title={product.about.name}
            description={product.about.description}
            price={product.about.price}
            isNew={product.about.new}
          />
          <section className='flex flex-col gap-[120px] 2xl:flex-row 2xl:justify-between'>
            <ProductFeatures
              p1={product.about.features}
              p2={product.about.features}
            />
            <InTheBox
              type={product.about.category}
              children={product.items.item}
            />
          </section>
          <Gallery
            img={product.about.slug}
            title={product.about.name}
            type={product.about.category}
          />
          <YouMayAlsoLikeSection currProduct={product.about.name} />

          <ProductsNav />
          <AudioGearSection />
        </main>
      ) : (
        message
      )}
      )
      {pageNotFound && (
        <main className='flex justify-start'>
          <Headline headline='PAGE NOT FOUND' />{' '}
        </main>
      )}
    </>
  );
};

export default ProductContentWrapper;
