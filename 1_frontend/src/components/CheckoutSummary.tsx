'use client';

import { CartItem } from '@/redux/Cart/cartSlice';
import { RootState } from '@/redux/store';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Button from './Button';

const StyledDimmedParagraph = styled.p`
  font-size: 15px;
  line-height: 25px;
  opacity: 0.5;
  font-weight: bold;
`;
const StyledBoldenParagraph = styled.p`
  font-size: 18px;
  font-weight: bold;
`;
const StyledPriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CheckoutSummary = () => {
  const cart = useSelector((state: RootState) => state.cart.CartItems);
  const totalValue = useSelector((state: RootState) => state.cart.totalValue);

  const [vat, setVat] = useState<number>(0);

  useEffect(() => {
    if (totalValue) setVat(totalValue * 0.2);
  }, []);

  return (
    <div className='w-full 2xl:max-w-[350px] h-fit bg-white flex items-start justify-center flex-col rounded-lg gap-8 py-8 px-6 md:px-8'>
      <h6 className='font-bold text-h6 leading-h6 tracking-h6'>SUMMARY</h6>
      <div className='w-full flex flex-col gap-6'>
        {cart &&
          cart.map((item: CartItem) => (
            <div
              className='w-full flex items-center justify-between'
              key={item.name}
            >
              <div className='w-full flex gap-4 '>
                <img
                  src={`/assets/product-${item.slug}/mobile/image-category-page-preview.jpg`}
                  alt={item.name}
                  className='w-16 rounded-lg'
                />
                <div className='flex flex-col justify-center'>
                  <p className='text-body leading-body font-bold'>
                    {item.name}
                  </p>
                  <p className='text-body leading-body font-bold opacity-50'>
                    $ {item.originalPrice}
                  </p>
                </div>
              </div>
              <StyledDimmedParagraph>x{item.qty}</StyledDimmedParagraph>
            </div>
          ))}
      </div>
      <div className='w-full flex flex-col gap-2'>
        <StyledPriceContainer>
          <StyledDimmedParagraph>TOTAL</StyledDimmedParagraph>
          <StyledBoldenParagraph>
            $ {new Intl.NumberFormat().format(Math.round(totalValue))}
          </StyledBoldenParagraph>
        </StyledPriceContainer>
        <StyledPriceContainer>
          <StyledDimmedParagraph>SHIPPING</StyledDimmedParagraph>
          <StyledBoldenParagraph>$ 50</StyledBoldenParagraph>
        </StyledPriceContainer>
        <StyledPriceContainer>
          <StyledDimmedParagraph>VAT(INCLUDED)</StyledDimmedParagraph>
          <StyledBoldenParagraph>
            $ {new Intl.NumberFormat().format(Math.round(vat))}
          </StyledBoldenParagraph>
        </StyledPriceContainer>
        <StyledPriceContainer className='mb-6 mt-4'>
          <StyledDimmedParagraph>GRAND TOTAL</StyledDimmedParagraph>
          <StyledBoldenParagraph className='text-orange-clay'>
            ${new Intl.NumberFormat().format(Math.round(totalValue + 50 + vat))}
          </StyledBoldenParagraph>
        </StyledPriceContainer>
        <Button text='CONTINUE & PAY' type='primary' action={() => undefined} />
      </div>
    </div>
  );
};

export default CheckoutSummary;
