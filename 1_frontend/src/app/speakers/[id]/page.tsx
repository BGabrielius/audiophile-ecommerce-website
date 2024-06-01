'use client';

import AudioGearSection from '@/components/AudioGearSection';
import Gallery from '@/components/Gallery';
import Headline from '@/components/Headline';
import InTheBox, {
  StyledItemAmount,
  StyledItemName,
  StyledSpanContainer,
} from '@/components/InTheBox';
import ProductsNav from '@/components/ProductsNav';
import React from 'react';

const page = ({ params }: { params: { id: string } }) => {
  return (
    <main className='flex justify-start gap-[120px]'>
      {params.id === 'zx9' ? (
        <>
          <InTheBox
            type='speakers'
            children={
              <>
                <StyledSpanContainer>
                  <StyledItemAmount>1x</StyledItemAmount>
                  <StyledItemName>3.5mm 10m Audio Cable</StyledItemName>
                </StyledSpanContainer>
                <StyledSpanContainer>
                  <StyledItemAmount>1x</StyledItemAmount>
                  <StyledItemName>10m Optical Cable</StyledItemName>
                </StyledSpanContainer>
              </>
            }
          />
          <Gallery product='zx9-speaker' />
        </>
      ) : params.id === 'zx7' ? (
        <>
          <InTheBox
            type='speakers'
            children={
              <>
                <StyledSpanContainer>
                  <StyledItemAmount>1x</StyledItemAmount>
                  <StyledItemName>3.5mm 7.5m Audio Cable</StyledItemName>
                </StyledSpanContainer>
                <StyledSpanContainer>
                  <StyledItemAmount>1x</StyledItemAmount>
                  <StyledItemName>7.5m Optical Cable</StyledItemName>
                </StyledSpanContainer>
              </>
            }
          />
          <Gallery product='zx7-speaker' />
        </>
      ) : (
        <Headline headline='Page not found' />
      )}
      <ProductsNav />
      <AudioGearSection />
    </main>
  );
};

export default page;
