'use client';

import AudioGearSection from '@/components/AudioGearSection';
import CategoryProduct, {
  ICategoryProduct,
} from '@/components/CategoryProduct';
import Headline from '@/components/Headline';
import ProductsNav from '@/components/ProductsNav';
import React from 'react';

const categoryProducts: ICategoryProduct[] = [
  {
    img: 'product-zx9-speaker',
    title: 'ZX9 SPEAKER',
    description:
      'Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.',
    isNew: true,
    swap: false,
    action: '/speakers/zx9',
  },
  {
    img: 'product-zx7-speaker',
    title: 'ZX7 SPEAKER',
    description:
      'Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.',
    isNew: false,
    swap: true,
    action: '/speakers/zx7',
  },
];

const page = () => {
  return (
    <main className='flex flex-col gap-[120px]'>
      <Headline headline='SPEAKERS' />
      <section className='flex flex-col gap-[120px] 2xl:gap-[160px]'>
        {categoryProducts.map((product: ICategoryProduct) => (
          <CategoryProduct
            img={product.img}
            title={product.title}
            description={product.description}
            isNew={product.isNew}
            swap={product.swap}
            action={product.action}
            key={product.title}
          />
        ))}
      </section>
      <section className='w-full'>
        <ProductsNav />
      </section>
      <AudioGearSection />
    </main>
  );
};

export default page;
