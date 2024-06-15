import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { ProductItems } from '@/redux/Products/productsSlice';

export const StyledSpanContainer = styled.span`
  display: flex;
  align-items: flex-start;
  justify-content: center;

  gap: 21px;

  @media screen and (min-width: 1440px) {
    gap: 24px;
  }
`;

export const StyledItemAmount = styled.p`
  font-size: 15px;
  line-height: 25px;
  font-weight: bold;
  color: #bf5822;
`;
export const StyledItemName = styled.p`
  font-size: 15px;
  line-height: 25px;
  opacity: 0.6;
`;

const InTheBox: React.FC<{ items: ProductItems[] }> = ({ items }) => {
  return (
    <div className='flex items-start justify-start flex-col gap-6 2sm:gap-[165px] 2xl:gap-8 2sm:flex-row 2xl:flex-col 2xl:w-[350px]'>
      <h3 className='text-[24px] font-bold tracking-[0.86px] leading-h3 2sm:text-h3 2sm:tracking-h3'>
        IN THE BOX
      </h3>
      <div className='flex flex-col items-start justify-center'>
        {items &&
          items.map((item: ProductItems) => (
            <StyledSpanContainer key={item.id}>
              <StyledItemAmount>{item.quantity}x</StyledItemAmount>
              <StyledItemName>{item.item}</StyledItemName>
            </StyledSpanContainer>
          ))}
      </div>
    </div>
  );
};

export default InTheBox;
