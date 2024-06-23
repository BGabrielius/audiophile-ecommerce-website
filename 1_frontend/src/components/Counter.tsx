'use client';
import React, { useState } from 'react';
import styled from 'styled-components';

interface Props {
  count: number;
  adjustAmount: (type: '-' | '+') => void;
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

const Counter: React.FC<Props> = ({ count, adjustAmount }) => {
  return (
    <div className='flex items-center justify-between w-[120px] h-[48px] bg-light-gray'>
      <StyledButton
        className={count > 1 ? 'pointer-events-auto' : 'pointer-events-none'}
        onClick={() => adjustAmount('-')}
        aria-label='Decrease amount'
        aria-disabled={count <= 1}
        tabIndex={count > 1 ? 0 : -1}
      >
        -
      </StyledButton>
      <p role='status' aria-live='polite'>
        {count}
      </p>
      <StyledButton
        onClick={() => adjustAmount('+')}
        aria-label='Increase amount'
      >
        +
      </StyledButton>
    </div>
  );
};

export default Counter;
