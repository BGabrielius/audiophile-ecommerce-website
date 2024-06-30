'use client';
import React, { useState } from 'react';
import styled from 'styled-components';

interface Props {
  count: number;
  adjustAmount: (e: any, type: '-' | '+') => void;
  cart: boolean;
}

const StyledButton = styled.button`
  height: 100%;
  padding: 0 15px;
  opacity: 0.25;

  &:hover {
    cursor: pointer;
    background-color: #fafafabe;
    opacity: 1;
  }
`;

const Counter: React.FC<Props> = ({ count, adjustAmount, cart }) => {
  return (
    <div className='flex items-center justify-between w-[120px] h-[48px] bg-light-gray'>
      <StyledButton
        className={
          count === 1 && !cart ? 'pointer-events-none' : 'pointer-events-auto'
        }
        onClick={(e) => adjustAmount(e, '-')}
        aria-label='Decrease amount'
        aria-disabled={count <= 1 && !cart}
        tabIndex={count <= 1 && cart ? 0 : -1}
      >
        -
      </StyledButton>
      <p role='status' aria-live='polite'>
        {count}
      </p>
      <StyledButton
        onClick={(e) => adjustAmount(e, '+')}
        aria-label='Increase amount'
      >
        +
      </StyledButton>
    </div>
  );
};

export default Counter;
