import React from 'react';

interface Props {
  text: 'e-Money' | 'Cash on Delivery';
  selectPayment: (payment: 'e-Money' | 'Cash on Delivery') => void;
  selectedPaymentType: 'e-Money' | 'Cash on Delivery';
}

const SelectPaymentButton: React.FC<Props> = ({
  text,
  selectPayment,
  selectedPaymentType,
}) => {
  return (
    <button
      onClick={() => selectPayment(text)}
      className={`${
        selectedPaymentType === text && 'border-orange-clay'
      } border rounded-lg h-14 min-w-full md:w-[309px] px-6 py-4 focus:outline-orange-clay flex gap-4 font-bold text-[14px] tracking-[-0.25px]`}
      type='button'
    >
      <div className='size-[20px] rounded-[50%] border border-[#CFCFCF] p-[5px]'>
        {selectedPaymentType === text ? (
          <div className='size-full rounded-[50%] bg-orange-clay'></div>
        ) : (
          <></>
        )}
      </div>
      {text}
    </button>
  );
};

export default SelectPaymentButton;
