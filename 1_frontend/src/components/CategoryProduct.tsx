'use client';

import React from 'react';
import Button from './Button';

export interface ICategoryProduct {
  img: string;
  title: string;
  description: string;
  isNew?: boolean;
  swap?: boolean;
}

const CategoryProduct: React.FC<ICategoryProduct> = ({
  img,
  title,
  description,
  isNew,
  swap,
}) => {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-8 2sm:gap-[52px] 2xl:gap-[84px] ${
        swap ? '2xl:flex-row-reverse' : '2xl:flex-row '
      }`}
    >
      <picture className='2xl:w-1/2'>
        <source
          media='(min-width: 1440px)'
          srcSet={`/assets/${img}/desktop/image-category-page-preview.jpg`}
        />
        <source
          media='(min-width: 640px)'
          srcSet={`/assets/${img}/tablet/image-category-page-preview.jpg`}
        />
        <img
          src={`/assets/${img}/mobile/image-category-page-preview.jpg`}
          className='rounded-[8px] max-h-[560px] 2xl:w-full 2xl:h-full'
        />
      </picture>
      <div className='flex flex-col items-center justify-center gap-6 2sm:px-[56px] 2xl:items-start 2xl:w-1/2'>
        {isNew && (
          <p className='text-center text-orange-clay text-overline leading-overline tracking-overline'>
            NEW PRODUCT
          </p>
        )}
        <h2 className='max-w-[350px] text-center text-[28px] tracking-[1px] font-bold 2sm:mb-2 2sm:text-h2 2sm:leading-h2 2sm:tracking-h2 2xl:text-left'>
          {title}
        </h2>
        <p className='text-center text-body leading-body opacity-60 2xl:text-left 2sm:max-w-[560px]'>
          {description}
        </p>
        <Button text='SEE PRODUCT' action={() => undefined} type='primary' />
      </div>
    </div>
  );
};

export default CategoryProduct;
