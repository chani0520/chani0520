import React, { useContext } from 'react';
import { QuestionData } from '../../data/formData';
import { MainContext } from '../../utils/store';

// 참고 : https://goddino.tistory.com/182?category=902116
const ChattingInnerHeader = () => {
  const { i } = useContext(MainContext);
  const progress = Math.floor((i / QuestionData.length) * 100);

  return (
    <div className='z-10 text-center'>
      <div className='pt-1'>질문 진행도...✏️</div>

      <div className='border-b-2 my-2 mx-3'>
        <div className='flex justify-between'>
          <div>
            <span className='text-xs font-semibold inline-block'>
              {i}/{QuestionData.length}
            </span>
          </div>
          <div className='text-right'>
            <span className='text-xs font-semibold inline-block'>
              {progress} %
            </span>
          </div>
        </div>
        <div className='overflow-hidden h-2 mb-2 text-xs flex rounded bg-blue-200'>
          <div
            style={{ width: progress + '%' }}
            className='shadow-none whitespace-nowrap rounded text-white justify-center bg-blue-500 h-20px'
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ChattingInnerHeader;
