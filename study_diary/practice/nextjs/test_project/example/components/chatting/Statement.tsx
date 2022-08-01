import React from 'react';
import Image from 'next/image';

const Statement = (props: any) => {
  return (
    <div className='relative'>
      {/* TEXT Area */}
      <div className='relative ml-7'>
        <div className='border-2 border-blue-400 w-1/2 rounded text-white bg-blue-400 p-2'>
          {props.question}
        </div>
        <div className='absolute bottom-[3px] left-0 bg-blue-400'>
          <div className='absolute border-t-[10px] border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[0px] border-b-transparent border-blue-400 w-5 h-5' />
        </div>
      </div>
      {/* IMAGE Area */}
      <div className='absolute left-0'>
        <Image
          src='/pikachu.jpg'
          alt='pikachu.jpg'
          width={30}
          height={30}
          className='rounded-2xl'
        />
      </div>
    </div>
  );
};

export default Statement;
