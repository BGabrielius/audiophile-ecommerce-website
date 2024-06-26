'use client';

import { CartItem } from '@/redux/Cart/cartSlice';
import { RootState } from '@/redux/store';
import React, { forwardRef, ForwardRefRenderFunction } from 'react';
import { useSelector } from 'react-redux';
import Counter from './Counter';

const Modal: ForwardRefRenderFunction<HTMLDialogElement> = (props, ref) => {
  const cart = useSelector((state: RootState) => state.cart.CartItems);
  return (
    <dialog
      ref={ref}
      className='fixed w-[327px] md:w-[377px] bg-white top-28 left-[70%] rounded-lg'
    >
      <div className='w-full h-full px-7 py-8'>
        {cart ? (
          <>
            <div className='flex justify-between'>
              <p className='font-bold text-[18px]'>CART ({cart.length})</p>
              <button className='text-body leading-body opacity-50 underline border-none'>
                Remove All
              </button>
            </div>
            <div>
              {cart &&
                cart.map((item: CartItem) => (
                  <div
                    className='flex items-center justify-between gap-4'
                    key={item.name}
                  >
                    <img
                      src={`/assets/product-${item.slug}/mobile/image-category-page-preview.jpg`}
                      alt={item.name}
                      className='w-16 rounded-lg'
                    />
                    <div className='flex flex-col justify-between'>
                      <p className='text-body leading-body font-bold'>
                        {item.name}
                      </p>
                      <p className='text-body leading-body font-bold opacity-50'>
                        $ {item.originalPrice}
                      </p>
                    </div>
                    <Counter
                      count={item.qty}
                      adjustAmount={function (type: '-' | '+'): void {
                        throw new Error('Function not implemented.');
                      }}
                    />
                  </div>
                ))}
            </div>
          </>
        ) : (
          <p>Your cart is empty</p>
        )}
      </div>
    </dialog>
  );
};

export default forwardRef(Modal);
