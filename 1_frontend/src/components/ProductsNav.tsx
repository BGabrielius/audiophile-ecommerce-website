import { useRouter } from 'next/navigation';
import React from 'react';
import styled from 'styled-components';
import { ArrowRight } from './Svgs';

const StyledProductWrapper = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;

  width: 100%;
  height: 217px;

  @media (min-width: 1440px) {
    height: 284px;
  }
`;
const StyledProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;

  width: 100%;
  gap: 1em;
  padding-bottom: 16px;
  height: 170px;
  border-radius: 8px;
  background-color: #f1f1f1;

  @media (min-width: 1440px) {
    height: 204px;
    padding: 22px;
  }
`;

const ShopButton: React.FC<{ action: () => void; title: string }> = ({
  action,
  title,
}) => {
  return (
    <button
      className='flex items-center justify-center gap-2 text-black/60 font-bold text-sub tracking-sub hover:text-orange-clay'
      onClick={action}
      aria-label={`Navigate to ${title} page`}
    >
      <p>SHOP</p>
      <ArrowRight />
    </button>
  );
};

const ProductsLink: React.FC<{ title: string }> = ({ title }) => {
  const router = useRouter();
  return (
    <>
      <StyledProductWrapper>
        <StyledProductContainer>
          <img
            src={`/assets/shared/desktop/image-category-thumbnail-${title.toLowerCase()}.png`}
            alt={`${title} product`}
            className='h-[130px] 2xl:h-[170px]'
          />
          <p className='text-black text-body tracking-[1px] font-bold leading-sub 2xl:text-h6 2xl:leading-h6 2xl:tracking-h6'>
            {title}
          </p>

          <ShopButton
            action={() => router.push(`/${title.toLowerCase()}`)}
            title={title}
          />
        </StyledProductContainer>
      </StyledProductWrapper>
    </>
  );
};

const ProductsNav: React.FC<{ header?: boolean }> = ({ header }) => {
  return (
    <ul
      className={`w-full flex flex-col gap-4 2sm:gap-[10px] 2sm:flex-row ${
        header && 'py-8 2sm:pt-14 2sm:pb-16'
      } `}
    >
      <ProductsLink title='HEADPHONES' />
      <ProductsLink title='SPEAKERS' />
      <ProductsLink title='EARPHONES' />
    </ul>
  );
};

export default ProductsNav;
