import React from 'react';

const Headline: React.FC<{ headline: string }> = ({ headline }) => {
  return (
    <div className='w-full h-[102px] bg-black  2sm:px-10 2xl:px-[165px]'>
      <div className='w-full h-full border-t-2 border-white border-opacity-10 flex items-center justify-center'>
        <h2 className='text-white text-[28px] tracking-h1 2sm:text-h2 2sm:leading-h2 2sm:tracking-h2'>
          {headline}
        </h2>
      </div>
    </div>
  );
};

export default Headline;
