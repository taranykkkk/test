import FormBox from './component/FormBox';
import './App.css';
import { useState } from 'react';
import ListQuestionData from './component/ListQuestionData';
import { OPTION_TYPE_MULTI } from './constants/answers';
import { OPTION_TYPE_SINGLE } from './constants/answers';

function App() {
  const [answerData, setAnswerData] = useState([
    { name: 'test1', type: OPTION_TYPE_SINGLE, answer: 'Test1' },
  ]);
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAnswerData = (values) => {
    setAnswerData((prev) => [...prev, values]);
  };

  const onChangeFormValue = (values) => {
    setAnswerData((prev) => {
      let newValue = prev;
      newValue[activeIndex] = values;

      return [...newValue];
    });
  };

  return (
    <>
      <FormBox
        addAnswerData={handleAnswerData}
        active={answerData[activeIndex]}
        onChangeFormValue={onChangeFormValue}
      />
      <ListQuestionData
        answerData={answerData}
        handleClickEdit={setActiveIndex}
      />
    </>
  );
}

export default App;
