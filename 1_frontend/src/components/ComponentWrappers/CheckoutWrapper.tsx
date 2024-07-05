'use client';

import React from 'react';
import CheckoutForm from '../CheckoutForm';
import { useRouter } from 'next/navigation';
import CheckoutSummary from '../CheckoutSummary';

const CheckoutWrapper = () => {
  const router = useRouter();
  return (
    <main className='bg-light-gray flex flex-col'>
      <div className='w-full flex items-start px-6 pt-4 pb-6 md:px-10 md:pt-12 2xl:px-[165px] 2xl:pt-20 2xl:pb-[38px]'>
        <button
          className='text-body leading-body opacity-60 self-start hover:text-orange-clay'
          onClick={() => router.back()}
        >
          Go Back
        </button>
      </div>
      <section className='w-full flex flex-col'>
        <CheckoutForm />
        <CheckoutSummary />
      </section>
    </main>
  );
};

export default CheckoutWrapper;
