import React from 'react';
interface Props {
  type: string;
  labelName: string;
  placeholderName: string;
}

const CheckoutInput: React.FC<Props> = ({
  labelName,
  placeholderName,
  type,
}) => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <label htmlFor={labelName}>{labelName}</label>
      <input type={type} placeholder={placeholderName} />
    </div>
  );
};

export default CheckoutInput;
