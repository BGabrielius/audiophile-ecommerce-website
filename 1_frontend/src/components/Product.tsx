import React from 'react';
import Button from './Button';
import Counter from './Counter';

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
        <p className='max-w-[390px] lg:max-w-[445px] text-body leading-body opacity-50'>
          {description}
        </p>
        <p className='text-[18px] font-bold tracking-[1.3px]'>
          $ {new Intl.NumberFormat().format(price)}
        </p>
        <span className='mt-2 flex gap-4'>
          <Counter />
          <Button text='ADD TO CART' action={() => undefined} type='primary' />
        </span>
      </div>
    </section>
  );
};

export default Product;
