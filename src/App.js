import { Button, Radio, Form, Input } from 'antd';

import './App.css';
import { useWatch } from 'antd/es/form/Form';
import { useState } from 'react';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

function App() {
  const [form] = Form.useForm();
  const typeAnswer = Form.useWatch('options', form);
  const [arrayInput, setArrayInput] = useState([1, 2, 3]);

  const handleDeleteInput = (value) => {
    setArrayInput(arrayInput.filter((elem) => elem !== value));
  };

  const handleAddInput = () => {
    const count = arrayInput.at(-1);
    setArrayInput((prev) => [...prev, count + 1]);
    console.log(arrayInput);
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}>
      <Form {...layout} form={form} name="control-hooks">
        <Form.Item
          name="question"
          label="Question"
          rules={[
            {
              required: true,
            },
          ]}>
          <Input />
        </Form.Item>

        <Form.Item label="Options" name="options">
          <Radio.Group>
            <Radio value="one"> One option </Radio>
            <Radio value="multi"> Multi option </Radio>
          </Radio.Group>
        </Form.Item>
        {typeAnswer === 'one' && (
          <Form.Item
            name="answer"
            label="Answer"
            rules={[
              {
                required: true,
              },
            ]}>
            <Input />
          </Form.Item>
        )}
        {typeAnswer === 'multi' && (
          <Form.Item label="Answers" name="answers">
            {arrayInput.map((input, i) => (
              <div
                key={i}
                style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
                <Input />
                <Button
                  type="primary"
                  htmlType="button"
                  onClick={() => handleDeleteInput(input)}>
                  X
                </Button>
              </div>
            ))}
            <Button type="primary" htmlType="button" onClick={handleAddInput}>
              Add
            </Button>
          </Form.Item>
        )}

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button htmlType="button">Reset</Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default App;
