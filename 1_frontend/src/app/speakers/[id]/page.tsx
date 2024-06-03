'use client';

import AudioGearSection from '@/components/AudioGearSection';
import Gallery from '@/components/Gallery';
import Headline from '@/components/Headline';
import InTheBox, {
  StyledItemAmount,
  StyledItemName,
  StyledSpanContainer,
} from '@/components/InTheBox';
import Product from '@/components/Product';
import ProductFeatures from '@/components/ProductFeatures';
import ProductsNav from '@/components/ProductsNav';
import React from 'react';

const page = ({ params }: { params: { id: string } }) => {
  return (
    <main className='flex justify-start gap-[120px]'>
      {params.id === 'zx9' ? (
        <>
          <Product
            img='zx9-speaker'
            title='ZX9 SPEAKER'
            description='Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.'
            price={4500}
            isNew
          />
          <section className='flex flex-col gap-[120px] 2xl:flex-row 2xl:justify-between'>
            <ProductFeatures
              p1='Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).'
              p2='Discover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms.'
            />
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
          </section>
          <Gallery product='zx9-speaker' />
        </>
      ) : params.id === 'zx7' ? (
        <>
          <Product
            img='zx7-speaker'
            title='ZX7 SPEAKER'
            description='Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.'
            price={3500}
          />
          <section className='flex flex-col gap-[120px] 2xl:flex-row 2xl:justify-between'>
            <ProductFeatures
              p1='Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage.'
              p2='The ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience.'
            />
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
          </section>
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
