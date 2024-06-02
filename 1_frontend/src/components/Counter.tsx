'use client';
import React, { useState } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  height: 100%;
  padding: 0 15px;

  &:hover {
    cursor: pointer;
    background-color: #fafafabe;
  }
`;

const Counter = () => {
  const [count, setCount] = useState<number>(1);

  const adjustAmount = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (e.currentTarget.firstChild?.nodeValue === '-') setCount(count - 1);
    if (e.currentTarget.firstChild?.nodeValue === '+') setCount(count + 1);
  };
  return (
    <div className='flex items-center justify-between w-[120px] h-[48px] bg-light-gray'>
      <StyledButton
        className={count > 1 ? 'pointer-events-auto' : 'pointer-events-none'}
        onClick={adjustAmount}
      >
        -
      </StyledButton>
      <p>{count}</p>
      <StyledButton onClick={adjustAmount}>+</StyledButton>
    </div>
  );
};

export default Counter;
