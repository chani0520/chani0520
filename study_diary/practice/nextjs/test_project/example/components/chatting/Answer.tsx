import React from 'react';

const Answer = (props: any) => {
  return (
    <div className='text-center m-1 shadow rounded border-b-2 border-r-2'>
      {props.answer}
    </div>
  );
};

export default Answer;
