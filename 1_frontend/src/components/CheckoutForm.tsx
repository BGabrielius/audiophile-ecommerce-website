'use client';

import React, { useState } from 'react';
import CheckoutInput from './CheckoutInput';
import styled from 'styled-components';
import SelectPaymentButton from './SelectPaymentButton';
import { CashOnDelivery } from './Svgs';
const StyledCheckoutHeading = styled.p`
  font-size: 13px;
  line-height: 25px;
  letter-spacing: 0.93px;
  color: #bf5822;
  font-weight: bold;
`;
const StyledInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 16px;
  width: 100%;
`;
const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0px;
    column-gap: 16px;
    row-gap: 24px;
  }
`;
const StyledPaymentSelectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1rem;
`;

const StyledInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
  width: 100%;
`;

const CheckoutForm: React.FC = () => {
  const [paymentMethod, setPaymentMethod] = useState<
    'e-Money' | 'Cash on Delivery'
  >('e-Money');

  const togglePaymentMethod = (paymentType: 'e-Money' | 'Cash on Delivery') => {
    if (paymentType === paymentMethod) return;
    else setPaymentMethod(paymentType);
  };
  const onSubmit = () => {};
  return (
    <form
      onSubmit={onSubmit}
      className='w-full bg-white flex items-start justify-center flex-col rounded-lg p-6 md:p-7 2xl:p-12 gap-8 md:gap-10'
    >
      <h3 className='text-[28px] tracking-[1px] md:text-h3 md:leading-h3 md:tracking-h3 font-bold'>
        CHECKOUT
      </h3>
      <StyledInputWrapper className='md:mb-[37px]'>
        <StyledCheckoutHeading>BILLING DETAILS</StyledCheckoutHeading>
        <StyledInputContainer className='grid-rows-2'>
          <StyledInput>
            <CheckoutInput
              labelName='Name'
              placeholderName='Alexei Ward'
              type='text'
            />
          </StyledInput>
          <StyledInput>
            <CheckoutInput
              labelName='Email Address'
              placeholderName='alexei@mail.com'
              type='email'
            />
          </StyledInput>
          <StyledInput>
            <CheckoutInput
              labelName='Phone Number'
              placeholderName='+1 202-555-0136'
              type='tel'
            />
          </StyledInput>
        </StyledInputContainer>
      </StyledInputWrapper>
      <StyledInputWrapper className='md:mb-[45px] grid grid-rows-3'>
        <StyledCheckoutHeading>SHIPPING INFO</StyledCheckoutHeading>
        <StyledInputContainer>
          <StyledInput className='col-span-full'>
            <CheckoutInput
              labelName='Address'
              placeholderName='1137 Williams Avenue'
              type='text'
            />
          </StyledInput>
          <StyledInput>
            <CheckoutInput
              labelName='ZIP Code'
              placeholderName='10001'
              type='number'
            />
          </StyledInput>
          <StyledInput>
            <CheckoutInput
              labelName='City'
              placeholderName='New York'
              type='text'
            />
          </StyledInput>
          <StyledInput>
            <CheckoutInput
              labelName='Country'
              placeholderName='United States'
              type='text'
            />
          </StyledInput>
        </StyledInputContainer>
      </StyledInputWrapper>
      <StyledInputWrapper>
        <StyledCheckoutHeading>PAYMENT DETAILS</StyledCheckoutHeading>
        <div className='w-full flex flex-col md:flex-row justify-between gap-4'>
          <label className='font-bold text-[12px] tracking-[-0.21px]'>
            Payment Method
          </label>
          <StyledPaymentSelectionContainer>
            <SelectPaymentButton
              text='e-Money'
              selectPayment={togglePaymentMethod}
              selectedPaymentType={paymentMethod}
            />
            <SelectPaymentButton
              text='Cash on Delivery'
              selectPayment={togglePaymentMethod}
              selectedPaymentType={paymentMethod}
            />
          </StyledPaymentSelectionContainer>
        </div>
        {paymentMethod === 'e-Money' ? (
          <StyledInputContainer>
            <StyledInput>
              <CheckoutInput
                labelName='e-Money Number'
                placeholderName='238521993'
                type='number'
              />
            </StyledInput>
            <StyledInput>
              <CheckoutInput
                labelName='e-Money PIN'
                placeholderName='6891'
                type='number'
              />
            </StyledInput>
          </StyledInputContainer>
        ) : (
          <div className='flex flex-col max-w-[730px] sm:flex-row items-center gap-8 mt-4'>
            <div>
              <CashOnDelivery />
            </div>
            <p className='opacity-50 text-body leading-body text-start'>
              The ‘Cash on Delivery’ option enables you to pay in cash when our
              delivery courier arrives at your residence. Just make sure your
              address is correct so that your order will not be cancelled.
            </p>
          </div>
        )}
      </StyledInputWrapper>
    </form>
  );
};

export default CheckoutForm;
