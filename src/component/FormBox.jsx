import { Button, Radio, Form, Input, Checkbox, Row, Col } from 'antd';
import { useEffect } from 'react';
import { OPTION_TYPE_MULTI } from '../constants/answers';
import { OPTION_TYPE_SINGLE } from '../constants/answers';

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

function FormBox({ addAnswerData, active, onChangeFormValue }) {
  const [form] = Form.useForm();

  const typeAnswer = Form.useWatch('type', form);

  const onClearForm = () => {
    form.resetFields();
  };

  const handleSubmitForm = (values) => {
    if (active) {
      onChangeFormValue(values);
    } else {
      addAnswerData(values);
      onClearForm();
    }
  };

  useEffect(() => {
    form.setFieldsValue(active);
    console.log(active);
  }, [active]);
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // height: '100vh',
      }}>
      <Form
        {...layout}
        form={form}
        name="control-hooks"
        initialValues={{
          name: '',
          type: OPTION_TYPE_SINGLE,
          answers: [{ text: 'test', is_correct: false }],
        }}
        onFinish={(values) => {
          handleSubmitForm(values);
        }}>
        <Form.Item
          name="name"
          label="Question"
          rules={[
            {
              required: true,
            },
          ]}>
          <Input />
        </Form.Item>

        <Form.Item label="Type" name="type">
          <Radio.Group>
            <Radio value={OPTION_TYPE_SINGLE} name="one">
              One option
            </Radio>
            <Radio value={OPTION_TYPE_MULTI} name="multi">
              Multi option
            </Radio>
          </Radio.Group>
        </Form.Item>
        {typeAnswer === OPTION_TYPE_SINGLE && (
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
        {typeAnswer === OPTION_TYPE_MULTI && (
          <Form.List label="Answers" name="answers">
            {(data, { add, remove }) => {
              return (
                <div
                  style={{
                    border: '1px solid #4096FF',
                    padding: '10px',
                    borderRadius: '10px',
                    marginBottom: '20px',
                  }}>
                  {data.map((field, index) => {
                    return (
                      <Row gutter={[8, 8]} key={field.key}>
                        <Col span={24}>
                          <Form.Item name={[field.name, 'text']}>
                            <Input />
                          </Form.Item>
                        </Col>
                        <Col span={18}>
                          <Form.Item
                            name={[field.name, 'is_correct']}
                            valuePropName="checked"
                            initialValue={false}>
                            <Checkbox>Correct</Checkbox>
                          </Form.Item>
                        </Col>
                        <Col span={6}>
                          <Button
                            type="primary"
                            onClick={() => remove(field.name)}>
                            X
                          </Button>
                        </Col>
                      </Row>
                    );
                  })}
                  <Button
                    type="primary"
                    htmlType="button"
                    onClick={() => add()}>
                    Add
                  </Button>
                </div>
              );
            }}
          </Form.List>
        )}

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button htmlType="button">Next Question</Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default FormBox;
