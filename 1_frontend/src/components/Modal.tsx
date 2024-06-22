'use client';

import { CartItem } from '@/redux/Cart/cartSlice';
import { AppDispatch, RootState } from '@/redux/store';
import React, { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
interface Props {
  modalView: boolean;
}

const Modal: React.FC<Props> = ({ modalView }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const dispatch: AppDispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart.CartItems);
  useEffect(() => {
    if (modalView) dialogRef.current?.showModal();
    if (!modalView) dialogRef.current?.close();
    if (cart) console.log(cart, 'cart');
  }, [modalView, cart]);

  return (
    <dialog ref={dialogRef}>
      {cart ? (
        <>
          <div>
            <p className='font-bold text-[18px]'>CART ({cart.length})</p>
            <button className='text-body leading-body opacity-50'>
              Remove All
            </button>
          </div>
          <div>
            {cart.map((item: CartItem) => (
              <div></div>
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
