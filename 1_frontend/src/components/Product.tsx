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
    <section>
      <picture className='2xl:w-1/2'>
        <source
          media='(min-width: 1440px)'
          srcSet={`/assets/product-${img}/desktop/image-product.jpg`}
        />
        <source
          media='(min-width: 640px)'
          srcSet={`/assets/product-${img}/tablet/image-product.jpg`}
        />
        <img
          src={`/assets/product-${img}/mobile/image-product.jpg`}
          className='rounded-[8px] max-h-[560px] 2xl:w-full 2xl:h-full'
        />
      </picture>
      <div>
        {isNew && <p>NEW PRODUCT</p>}
        <p>{title}</p>
        <p>{description}</p>
        <p>{price}</p>
        <span>
          <Counter />
          <Button text='ADD TO CART' action={() => undefined} type='primary' />
        </span>
      </div>
    </section>
  );
};

export default Product;
