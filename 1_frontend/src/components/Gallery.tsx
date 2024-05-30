import React from 'react';

const Gallery: React.FC<{ product: string }> = ({ product }) => {
  return (
    <section className='grid grid-cols-1 grid-rows-4 gap-5 2sm:gap-8'>
      <div>
        <picture>
          <source
            media='(min-width: 1440px)'
            srcSet={`/assets/product-${product}/desktop/image-gallery-1.jpg`}
          />
          <source
            media='(min-width: 640px)'
            srcSet={`/assets/product-${product}/tablet/image-gallery-1.jpg`}
          />
          <img
            src={`/assets/product-${product}/mobile/image-gallery-1.jpg`}
            className=''
          />
        </picture>
      </div>
      <div>
        <picture>
          <source
            media='(min-width: 1440px)'
            srcSet={`/assets/product-${product}/desktop/image-gallery-2.jpg`}
          />
          <source
            media='(min-width: 640px)'
            srcSet={`/assets/product-${product}/tablet/image-gallery-2.jpg`}
          />
          <img
            src={`/assets/product-${product}/mobile/image-gallery-2.jpg`}
            className=''
          />
        </picture>
      </div>
      <div>
        <picture>
          <source
            media='(min-width: 1440px)'
            srcSet={`/assets/product-${product}/desktop/image-gallery-3.jpg`}
          />
          <source
            media='(min-width: 640px)'
            srcSet={`/assets/product-${product}/tablet/image-gallery-3.jpg`}
          />
          <img
            src={`/assets/product-${product}/mobile/image-gallery-3.jpg`}
            className=''
          />
        </picture>
      </div>
    </section>
  );
};

export default Gallery;
