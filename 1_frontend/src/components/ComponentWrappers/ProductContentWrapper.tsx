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
  ProductInfo,
  getAllProducts,
  getOneProduct,
  getOneProductParams,
} from '@/redux/Products/productsSlice';
import { useLocalStorage } from '@/hooks/useLocalStorage';

const ProductContentWrapper: React.FC<{ params: string; category: string }> = ({
  params,
  category,
}) => {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [productFetched, setProductFetched] = useState<boolean>(false);
  const [uniqueProductsFetched, setUniqueProductsFetched] =
    useState<boolean>(false);
  const [features, setFeatures] = useState<string[] | undefined>(undefined);
  const [product, setProduct] = useState<IProduct>();
  const [uniqueProducts, setUniqueProducts] = useState<ProductInfo[]>();

  const router = useRouter();

  const { setProductHook, getProductHook } = useLocalStorage('product', params);
  const { getProductsHook, setProductsHook } = useLocalStorage(
    'products',
    params
  );

  const selectorProductsAll: ProductInfo[] | null = useSelector(
    (state: RootState) => state.products.all
  );
  const selectorProductOne: IProduct | null = useSelector(
    (state: RootState) => state.products.one
  );
  const message = useSelector((state: RootState) => state.products.message);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const savedProduct = getProductHook();
    const savedUnique = getProductsHook();

    if (savedProduct && !productFetched) {
      applyProductData(savedProduct, true);
      setProductFetched(true);
    }

    if (savedUnique && !uniqueProductsFetched) {
      applyUniqueProductsData(savedUnique, true);
      setUniqueProductsFetched(true);
    }

    if (!savedProduct && !productFetched) {
      const getOneParams: getOneProductParams = { category, productId: params };
      dispatch(getOneProduct(getOneParams));
      setProductFetched(true);
    }

    if (!savedUnique && !uniqueProductsFetched) {
      dispatch(getAllProducts());
      setUniqueProductsFetched(true);
    }
    if (selectorProductOne && !isMounted) {
      applyProductData(selectorProductOne, false);
    }
    if (selectorProductsAll && !isMounted) {
      applyUniqueProductsData(selectorProductsAll, false);
    }
    if (product && uniqueProducts) setIsMounted(true);
  }, [
    product,
    uniqueProducts,
    productFetched,
    uniqueProductsFetched,
    selectorProductOne,
    selectorProductsAll,
    getAllProducts,
  ]);
  const applyUniqueProductsData = (data: ProductInfo[], isSaved: boolean) => {
    if (!isSaved) setProductsHook(data);
    let threeUnique: ProductInfo[] = data
      .filter((product: ProductInfo) => product.route !== params)
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value)
      .splice(0, 3);

    for (let i = 0; i < threeUnique.length; i++) {
      threeUnique[i].name = threeUnique[i].name
        .replace('Wireless Earphones', '')
        .replace('Speaker', '')
        .replace('Headphones', '')
        .trim();
    }
    setUniqueProducts(threeUnique);
  };
  const applyProductData = (data: IProduct, isSaved: boolean) => {
    if (!isSaved) setProductHook(data);

    setProduct(data);
    setFeatures(data.about.features.split('*'));
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
          {uniqueProducts && (
            <YouMayAlsoLikeSection uniqueProducts={uniqueProducts} />
          )}

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
