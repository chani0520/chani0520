import React, { useEffect, useContext, useState } from 'react';
import { QuestionData, AnswerData } from '../../data/formData';
import { MainContext } from '../../utils/store';
import Answer from './Answer';
import Statement from './Statement';

// 참고 : https://goddino.tistory.com/182?category=902116
const ChattingInnerContents = () => {
  const [isAnswerArea, setIsAnswerArea] = useState(false);
  const { i } = useContext(MainContext);

  useEffect(() => {
    console.log('🔸 ChattingInnerContents is rendered...');
  }, []);

  const answerData = AnswerData[i].answer;
  const answerList = answerData.map((answer, index) => (
    <Answer key={index} answer={answer} />
  ));

  const questionData = QuestionData[i].question;

  const onClick = () => {
    setIsAnswerArea(!isAnswerArea);
  };

  const onChangeAnswer = (e: { target: { name: any; value: any } }) => {
    let answered = {
      [e.target.name]: e.target.value,
    };

    if (!answered) {
      return;
    } else {
      if (i < QuestionData.length - 1) {
      }
    }
  };

  return (
    // overflow-y-auto => overflow-y-hidden으로 테스트 중
    <div className='relative shadow-xl overflow-y-hidden h-[90%] p-8 rounded-md'>
      {/* question bar */}

      <div
        className={
          isAnswerArea
            ? 'overflow-y-auto h-[100%] transition-all'
            : 'overflow-y-auto h-[84%] transition-all'
        }
      >
        <Statement question={questionData} />
      </div>

      {/* answer bar */}
      <div
        className={
          isAnswerArea
            ? 'absolute w-2/3 bottom-0 left-1/2 translate-x-[-50%] transition translate-y-[100%]'
            : 'absolute w-2/3 bottom-0 left-1/2 translate-x-[-50%] transition translate-y-0'
        }
      >
        <button
          className={
            isAnswerArea
              ? 'absolute rounded right-0 translate-y-[-100%] top-0 text-xs bg-blue-400 bg-opacity-25 p-1 animate-pulse'
              : 'absolute rounded right-0 translate-y-[-100%] top-0 text-xs bg-red-400 bg-opacity-25 p-1'
          }
          onClick={onClick}
        >
          {isAnswerArea ? '열기' : '닫기'}
        </button>
        <div className='flex flex-col mx-auto w-full '>{answerList}</div>
      </div>
    </div>
  );
};

export default ChattingInnerContents;
