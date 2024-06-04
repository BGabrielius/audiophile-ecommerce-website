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
import YouMayAlsoLikeSection from '@/components/YouMayAlsoLikeSection';
import React from 'react';
import styled from 'styled-components';

const page = ({ params }: { params: { id: string } }) => {
  return (
    <main className='flex justify-start gap-[120px]'>
      {params.id === 'xx99II' ? (
        <>
          <Product
            img='xx99-mark-two-headphones'
            title='XX99 MARK II HEADPHONES'
            description='The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.'
            price={2999}
            isNew
          />
          <section className='flex flex-col gap-[120px] 2xl:flex-row 2xl:justify-between'>
            <ProductFeatures
              p1='Featuring a genuine leather head strap and premium earcups, these
        headphones deliver superior comfort for those who like to enjoy endless
        listening. It includes intuitive controls designed for any situation.
        Whether you’re taking a business call or just in your own personal
        space, the auto on/off and pause features ensure that you’ll never miss
        a beat.'
              p2='The advanced Active Noise Cancellation with built-in equalizer allow you
        to experience your audio world on your terms. It lets you enjoy your
        audio in peace, but quickly interact with your surroundings when you
        need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour
        battery life, the XX99 Mark II headphones gives you superior sound,
        cutting-edge technology, and a modern design aesthetic.'
            />
            <InTheBox
              type='headphones'
              children={
                <StyledSpanContainer>
                  <StyledItemAmount>1x</StyledItemAmount>
                  <StyledItemName>Travel Bag</StyledItemName>
                </StyledSpanContainer>
              }
            />
          </section>
          <Gallery product='xx99-mark-two-headphones' />
          <YouMayAlsoLikeSection currProduct='XX99 MARK II' />
        </>
      ) : params.id === 'xx99I' ? (
        <>
          <Product
            img='xx99-mark-one-headphones'
            title='XX99 MARK I HEADPHONES'
            description='As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go. '
            price={1750}
          />
          <section className='flex flex-col gap-[120px] 2xl:flex-row 2xl:justify-between'>
            <ProductFeatures
              p1='As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz.'
              p2='From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is included with a balanced gold connector.'
            />
            <InTheBox type='headphones' />
          </section>
          <Gallery product='xx99-mark-one-headphones' />
          <YouMayAlsoLikeSection currProduct='XX99 MARK I' />
        </>
      ) : params.id === 'xx59' ? (
        <>
          <Product
            img='xx59-headphones'
            title='XX59 HEADPHONES'
            description='Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move. '
            price={899}
          />
          <section className='flex flex-col gap-[120px] 2xl:flex-row 2xl:justify-between'>
            <ProductFeatures
              p1='These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.'
              p2='More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.'
            />
            <InTheBox type='headphones' />
          </section>
          <Gallery product='xx59-headphones' />
          <YouMayAlsoLikeSection currProduct='XX59' />
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
