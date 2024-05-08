import FormBox from './component/FormBox/FormBox';
import './App.css';
import { useState } from 'react';
import ListQuestionData from './component/FormBox/ListQuestionData';
import { OPTION_TYPE_SINGLE } from './constants/answers';
import TableBox from './component/TableBox/TableBox';
import MenuBox from './component/MenuBox/MenuBox';
import Main from './component/Main/Main';
import { Routes, Route } from 'react-router-dom';

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
      <MenuBox />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/form"
          element={
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
          }
        />
        <Route path="/table" element={<TableBox />} />
      </Routes>
    </>
  );
}

export default App;
