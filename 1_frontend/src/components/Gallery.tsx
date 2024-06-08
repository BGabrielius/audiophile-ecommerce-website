import React from 'react';
import styled from 'styled-components';

// const StyledImageContainer = styled.div`
//   border-radius: 8px;
// `;
const StyledImage = styled.img`
  border-radius: 8px;
  width: 100%;
  height: 100%;
`;

const Gallery: React.FC<{ img: string; title: string; type: string }> = ({
  img,
  title,
  type,
}) => {
  return (
    <section className='h-[756px] 2xl:w-full 2sm:h-[368px] 2xl:h-[592px] grid grid-cols-1 2sm:grid-cols-2 grid-rows-4 2sm:grid-rows-2 gap-5 2xl:gap-8'>
      <div>
        <picture>
          <source
            media='(min-width: 1440px)'
            srcSet={`/assets/product-${img}/desktop/image-gallery-1.jpg`}
          />
          <source
            media='(min-width: 640px)'
            srcSet={`/assets/product-${img}/tablet/image-gallery-1.jpg`}
          />
          <StyledImage
            src={`/assets/product-${img}/mobile/image-gallery-1.jpg`}
            alt={`${title} ${type} product`}
          />
        </picture>
      </div>
      <div className='row-start-3 row-end-5 2sm:col-start-2 2sm:row-start-1 2sm:row-end-3 '>
        <picture>
          <source
            media='(min-width: 1440px)'
            srcSet={`/assets/product-${img}/desktop/image-gallery-3.jpg`}
          />
          <source
            media='(min-width: 640px)'
            srcSet={`/assets/product-${img}/tablet/image-gallery-3.jpg`}
          />
          <StyledImage
            src={`/assets/product-${img}/mobile/image-gallery-3.jpg`}
            alt={`${title} ${type} product`}
          />
        </picture>
      </div>
      <div>
        <picture>
          <source
            media='(min-width: 1440px)'
            srcSet={`/assets/product-${img}/desktop/image-gallery-2.jpg`}
          />
          <source
            media='(min-width: 640px)'
            srcSet={`/assets/product-${img}/tablet/image-gallery-2.jpg`}
          />
          <StyledImage
            src={`/assets/product-${img}/mobile/image-gallery-2.jpg`}
            alt={`${title} ${type} product`}
          />
        </picture>
      </div>
    </section>
  );
};

export default Gallery;
