import { useState } from 'react';
import FormElements from './FormElements';
import ListQuestionData from './ListQuestionData';
import { OPTION_TYPE_SINGLE } from '../../constants/answers';

const FormBox = () => {
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
    <div style={{ padding: '0 20px' }}>
      <FormElements
        addAnswerData={handleAnswerData}
        active={answerData[activeIndex]}
        onChangeFormValue={onChangeFormValue}
      />
      <ListQuestionData
        answerData={answerData}
        handleClickEdit={setActiveIndex}
      />
    </div>
  );
};

export default FormBox;
