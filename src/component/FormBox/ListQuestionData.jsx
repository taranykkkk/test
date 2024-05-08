import { Button } from 'antd';
import React from 'react';
import { OPTION_TYPE_MULTI } from '../../constants/answers';
import { OPTION_TYPE_SINGLE } from '../../constants/answers';

function ListQuestionData({ answerData, handleClickEdit }) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'start',
        flexDirection: 'column',
        padding: '0 25px',
      }}>
      {answerData?.map((elem, index) => (
        <ul
          key={index}
          style={{
            listStyleType: 'none',
            border: '1px solid #4096FF',
            borderRadius: '10px',
            padding: '20px',
          }}>
          <li>Name question: {elem.name} </li>
          <li>Type Answer: {elem.type}</li>
          {elem.type === OPTION_TYPE_SINGLE && <li>Answer: {elem.answer}</li>}
          {elem.type === OPTION_TYPE_MULTI &&
            elem?.answers.map((answer, index) => (
              <ul key={index}>
                Answer {index + 1}
                <li>{answer.text}</li>
                <li>{answer.is_correct.toString()}</li>
              </ul>
            ))}
          <Button onClick={() => handleClickEdit(index)}>editing</Button>
        </ul>
      ))}
    </div>
  );
}

export default ListQuestionData;
