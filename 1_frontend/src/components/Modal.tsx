'use client';

import { CartItem } from '@/redux/Cart/cartSlice';
import { AppDispatch, RootState } from '@/redux/store';
import React, { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Counter from './Counter';
interface Props {
  modalView: boolean;
}

const Modal: React.FC<Props> = ({ modalView }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const cart = useSelector((state: RootState) => state.cart.CartItems);
  useEffect(() => {
    if (modalView) dialogRef.current?.showModal();
    if (!modalView) dialogRef.current?.close();
    if (cart) console.log(cart, 'cart');
  }, [modalView, cart]);

  return (
    <dialog
      ref={dialogRef}
      className='w-[450px] bg-white px-7 py-8 top-28 right-0 rounded-lg'
    >
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
    </dialog>
  );
};

export default Modal;
