import { createContext, useState } from 'react';
import { QuestionData } from '../data/formData';

export const MainContext = createContext({
  i: 0,
  onClickNext: () => {},
  onClickPrev: () => {},
  onSubmitForm: (symptom: any, answer: any) => {},
  onClickBack: () => {},
});

const Store = (props: any) => {
  let [i, setI] = useState(0);
  let [resultData, setResultData] = useState('');

  const onClickNext = () => {
    if (i < QuestionData.length - 1) {
      i = i + 1;
    } else if ((i = QuestionData.length - 1)) {
      return;
    }

    return setI(i);
  };

  const onClickPrev = () => {
    if (i > 0) {
      i = i - 1;
    } else if ((i = 0)) {
      i = QuestionData.length - 1;
    }

    return setI(i);
  };

  const onSubmitForm = (data: any) => {
    if (data === null) {
      return;
    } else {
      console.log(data);

      setResultData(resultData.concat(data));

      const resultSubmit = {
        id: '',
        ...data,
      };
    }
  };

  const onClickBack = () => {
    setI(0);
  };

  return (
    <MainContext.Provider
      value={{
        i,
        onClickNext,
        onClickPrev,
        onSubmitForm,
        onClickBack,
      }}
    >
      {props.children}
    </MainContext.Provider>
  );
};

export default Store;
