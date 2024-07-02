'use client';

import {
  CartItem,
  decreaseQuantity,
  increaseQuantity,
  removeAllFromCart,
} from '@/redux/Cart/cartSlice';
import { AppDispatch, RootState } from '@/redux/store';
import React, {
  forwardRef,
  ForwardRefRenderFunction,
  useEffect,
  useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Counter from './Counter';
import Button from './Button';

interface Props {
  position: { top: number; left: number; width: number };
}

const Modal: ForwardRefRenderFunction<HTMLDialogElement, Props> = (
  { position },
  ref
) => {
  const [calculatedLeft, setCalculatedLeft] = useState<number>(0);

  const cart = useSelector((state: RootState) => state.cart.CartItems);
  const totalValue = useSelector((state: RootState) => state.cart.totalValue);

  const dispatch: AppDispatch = useDispatch();

  const adjustAmount = (e: any, type: '-' | '+') => {
    if (type === '-') {
      dispatch(
        decreaseQuantity(
          e.target.parentNode.parentNode.getAttribute('data-item')
        )
      );
    }
    if (type === '+') {
      dispatch(
        increaseQuantity(
          e.target.parentNode.parentNode.getAttribute('data-item')
        )
      );
    }
  };
  useEffect(() => {
    setCalculatedLeft(position.left);
  }, [position]);
  return (
    <dialog
      ref={ref}
      style={{
        top: `${position.top}px`,
        left: `${calculatedLeft}px`,
      }}
      className={`fixed w-[327px] md:w-[350px] 2xl:w-[377px] bg-white rounded-lg ${
        calculatedLeft ? 'block' : 'hidden'
      }`}
    >
      <div className='flex flex-col gap-8 w-full h-full px-5 py-8'>
        {cart && cart.length !== 0 ? (
          <>
            <div className='flex justify-between'>
              <p className='font-bold text-[18px]'>CART ({cart.length})</p>
              <button
                className='text-body leading-body opacity-50 underline border-none'
                onClick={() => dispatch(removeAllFromCart())}
              >
                Remove All
              </button>
            </div>
            <div className='flex flex-col gap-6 '>
              {cart.map((item: CartItem) => (
                <div
                  className='flex items-center justify-between gap-4'
                  key={item.name}
                >
                  <div className='flex items-center gap-4'>
                    <img
                      src={`/assets/product-${item.slug}/mobile/image-category-page-preview.jpg`}
                      alt={item.name}
                      className='w-16 rounded-lg'
                    />
                    <div className='flex flex-col justify-between '>
                      <p className='text-body leading-body font-bold'>
                        {item.name}
                      </p>
                      <p className='text-body leading-body font-bold opacity-50'>
                        $ {item.originalPrice}
                      </p>
                    </div>
                  </div>
                  <div className='justify-self-end' data-item={item.name}>
                    <Counter
                      count={item.qty}
                      adjustAmount={adjustAmount}
                      cart
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className='w-full flex flex-col gap-6'>
              <div className='flex items-center justify-between'>
                <p className='text-body leading-body opacity-50'>Total</p>
                <p className='text-[18px] font-bold'>
                  $ {new Intl.NumberFormat().format(totalValue)}
                </p>
              </div>
              <Button
                text='CHECKOUT'
                type='primary'
                action={() => {
                  throw new Error('Function not implemented.');
                }}
              />
            </div>
          </>
        ) : (
          <p className='text-body leading-body font-bold opacity-50 tracking-sub'>
            Cart is empty
          </p>
        )}
      </div>
    </dialog>
  );
};

export default forwardRef(Modal);
