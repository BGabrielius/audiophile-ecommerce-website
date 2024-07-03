'use client';

import React from 'react';
import CheckoutInput from './CheckoutInput';
import styled from 'styled-components';
const StyledCheckoutHeading = styled.p`
  font-size: 13px;
  line-height: 25px;
  letter-spacing: 0.93px;
  color: #bf5822;
  font-weight: bold;
`;

const CheckoutForm: React.FC = () => {
  return (
    <section className='flex items-center justify-center flex-col'>
      <h3 className='text-[28px] tracking-[1px] md:text-h3 md:leading-h3 md:tracking-h3 bold'>
        CHECKOUT
      </h3>
      <form>
        <div>
          <StyledCheckoutHeading>BILLING DETAILS</StyledCheckoutHeading>
          <CheckoutInput
            labelName='Name'
            placeholderName='Alexei Ward'
            type='text'
          />
          <CheckoutInput
            labelName='Email Address'
            placeholderName='alexei@mail.com'
            type='email'
          />
          <CheckoutInput
            labelName='Phone Number'
            placeholderName='+1 202-555-0136'
            type='text'
          />
        </div>
        <div>
          <StyledCheckoutHeading>SHIPPING INFO</StyledCheckoutHeading>
          <CheckoutInput
            labelName='Address'
            placeholderName='1137 Williams Avenue'
            type='text'
          />
          <CheckoutInput
            labelName='ZIP Code'
            placeholderName='10001'
            type='number'
          />
          <CheckoutInput
            labelName='City'
            placeholderName='New York'
            type='text'
          />
          <CheckoutInput
            labelName='Country'
            placeholderName='United States'
            type='text'
          />
        </div>
        <div>
          <StyledCheckoutHeading>PAYMENT DETAILS</StyledCheckoutHeading>
        </div>
      </form>
    </section>
  );
};

export default CheckoutForm;
