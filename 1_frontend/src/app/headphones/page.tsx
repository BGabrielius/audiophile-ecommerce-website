'use client';

import AudioGearSection from '@/components/AudioGearSection';
import CategoryProduct, {
  ICategoryProduct,
} from '@/components/CategoryProduct';
import ProductsNav from '@/components/ProductsNav';
import React from 'react';

const categoryProducts: ICategoryProduct[] = [
  {
    img: 'product-xx99-mark-two-headphones',
    title: 'XX99 MARK II HEADPHONES',
    description:
      'The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.',
    isNew: true,
    swap: false,
  },
  {
    img: 'product-xx99-mark-one-headphones',
    title: 'XX99 MARK I HEADPHONES',
    description:
      'As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.',
    isNew: false,
    swap: true,
  },
  {
    img: 'product-xx59-headphones',
    title: 'XX59 HEADPHONES',
    description:
      'Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.',
    isNew: false,
    swap: false,
  },
];

const page = () => {
  return (
    <main className='flex flex-col gap-[120px]'>
      <section className='flex flex-col gap-[120px] mb-[80px]'>
        {categoryProducts.map((product: ICategoryProduct) => (
          <CategoryProduct
            img={product.img}
            title={product.title}
            description={product.description}
            isNew={product.isNew}
            swap={product.swap}
            key={product.title}
          />
        ))}
      </section>
      <ProductsNav />
      <AudioGearSection />
    </main>
  );
};

export default page;
