'use client';

import React, { useState } from 'react';
import Button from './Button';
import Counter from './Counter';
import { CartItem, addToCart } from '@/redux/Cart/cartSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/redux/store';

interface Props {
  img: string;
  title: string;
  description: string;
  price: number;
  isNew?: boolean;
}

const Product: React.FC<Props> = ({
  img,
  title,
  description,
  price,
  isNew,
}) => {
  const [count, setCount] = useState<number>(1);
  const dispatch: AppDispatch = useDispatch();

  const adjustAmount = (_: any, type: '-' | '+') => {
    if (type === '-') setCount((prevCount) => Math.max(1, prevCount - 1));
    if (type === '+') setCount(count + 1);
  };
  const addToCartDispatch = () => {
    const shortenedName = title
      .replace('Wireless Earphones', '')
      .replace('Speaker', '')
      .replace('Headphones', '')
      .trim();
    const item: CartItem = {
      qty: count,
      name: shortenedName,
      slug: img,
      originalPrice: price,
      priceCombined: price * count,
    };
    console.log(item);
    dispatch(addToCart(item));
  };

  return (
    <section className='flex flex-col gap-8 md:gap-16 lg:gap-[125px] md:flex-row'>
      <picture className='md:w-[46%] lg:w-[50%]'>
        <source
          media='(min-width: 1024px)'
          srcSet={`/assets/product-${img}/desktop/image-product.jpg`}
        />
        <source
          media='(min-width: 768px)'
          srcSet={`/assets/product-${img}/tablet/image-product.jpg`}
        />
        <img
          src={`/assets/product-${img}/mobile/image-product.jpg`}
          className='rounded-[8px] max-h-[560px] md:max-h-[480px] w-full md:h-full'
          alt={`${title} product`}
        />
      </picture>
      <div className='flex flex-col items-start gap-6 md:justify-center md:w-[54%] lg:w-[50%]'>
        {isNew && (
          <p className='text-center text-orange-clay text-overline leading-overline tracking-overline'>
            NEW PRODUCT
          </p>
        )}
        <h2 className='max-w-[195px] lg:max-w-[272px] font-bold text-[28px] tracking-[1px] md:leading-[32px] lg:text-h2 lg:tracking-h2 lg:leading-h2'>
          {title}
        </h2>
        <p className='max-w-[390px] lg:max-w-[445px] text-body leading-body opacity-60'>
          {description}
        </p>
        <p className='text-[18px] font-bold tracking-[1.3px]'>
          $ {new Intl.NumberFormat().format(price)}
        </p>
        <span className='mt-2 flex gap-4'>
          <Counter count={count} adjustAmount={adjustAmount} cart={false} />
          <Button
            text='ADD TO CART'
            action={() => addToCartDispatch()}
            type='primary'
          />
        </span>
      </div>
    </section>
  );
};

export default Product;
