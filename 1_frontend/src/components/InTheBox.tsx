import React, { ReactNode } from 'react';
import styled from 'styled-components';

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

const InTheBox: React.FC<{ type: string; children?: ReactNode }> = ({
  type,
  children,
}) => {
  return (
    <div className='flex items-start justify-start flex-col gap-6 2sm:gap-[165px] 2xl:gap-8 2sm:flex-row 2xl:flex-col 2xl:w-[350px]'>
      <h3 className='text-[24px] font-bold tracking-[0.86px] leading-h3 2sm:text-h3 2sm:tracking-h3'>
        IN THE BOX
      </h3>
      <div className='flex flex-col items-start justify-center'>
        {type === 'headphones' ? (
          <>
            <StyledSpanContainer>
              <StyledItemAmount>1x</StyledItemAmount>
              <StyledItemName>Headphone Unit</StyledItemName>
            </StyledSpanContainer>
            <StyledSpanContainer>
              <StyledItemAmount>2x</StyledItemAmount>
              <StyledItemName>Replacement Earcups</StyledItemName>
            </StyledSpanContainer>
            <StyledSpanContainer>
              <StyledItemAmount>1x</StyledItemAmount>
              <StyledItemName>User Manual</StyledItemName>
            </StyledSpanContainer>
            <StyledSpanContainer>
              <StyledItemAmount>1x</StyledItemAmount>
              <StyledItemName>3.5mm 5m Audio Cable</StyledItemName>
            </StyledSpanContainer>
            {children && children}
          </>
        ) : type === 'speakers' ? (
          <>
            <StyledSpanContainer>
              <StyledItemAmount>2x</StyledItemAmount>
              <StyledItemName>Speaker Unit</StyledItemName>
            </StyledSpanContainer>
            <StyledSpanContainer>
              <StyledItemAmount>2x</StyledItemAmount>
              <StyledItemName>Speaker Cloth Panel</StyledItemName>
            </StyledSpanContainer>
            <StyledSpanContainer>
              <StyledItemAmount>1x</StyledItemAmount>
              <StyledItemName>User Manual</StyledItemName>
            </StyledSpanContainer>
            {children && children}
          </>
        ) : (
          <>
            <StyledSpanContainer>
              <StyledItemAmount>2x</StyledItemAmount>
              <StyledItemName>Earphone Unit</StyledItemName>
            </StyledSpanContainer>
            <StyledSpanContainer>
              <StyledItemAmount>6x</StyledItemAmount>
              <StyledItemName>Multi-size Earplugs</StyledItemName>
            </StyledSpanContainer>
            <StyledSpanContainer>
              <StyledItemAmount>1x</StyledItemAmount>
              <StyledItemName>User Manual</StyledItemName>
            </StyledSpanContainer>
            <StyledSpanContainer>
              <StyledItemAmount>1x</StyledItemAmount>
              <StyledItemName>USB-C Charging Cable</StyledItemName>
            </StyledSpanContainer>
            <StyledSpanContainer>
              <StyledItemAmount>1x</StyledItemAmount>
              <StyledItemName>Travel Pouch</StyledItemName>
            </StyledSpanContainer>
            {children && children}
          </>
        )}
      </div>
    </div>
  );
};

export default InTheBox;
