import React from 'react';
interface Props {
  type: string;
  labelName?: string;
  placeholderName?: string;
}

const CheckoutInput: React.FC<Props> = ({
  labelName,
  placeholderName,
  type,
}) => {
  return (
    <>
      {labelName && (
        <label
          htmlFor={labelName}
          className='font-bold text-[12px] tracking-[-0.21px]'
        >
          {labelName}
        </label>
      )}
      <input
        id={labelName}
        name={labelName}
        type={type}
        placeholder={placeholderName}
        className='border rounded-lg h-14 min-w-full px-6 py-5 focus:outline-orange-clay'
      />
    </>
  );
};

export default CheckoutInput;
