import { Button, Input, Form, Select, DatePicker, Affix } from 'antd';
import dayjs from 'dayjs';
import { useContext } from 'react';
import Editor from '../component/Editor';
import { disabledDate } from '../utils';
import { ReduxContext } from '../redux';
import { useTodo } from '../hooks';

const EditTodo = (props: any) => {
  const { createTodo, editTodo } = useTodo();
  const { state } = useContext(ReduxContext);
  const onFinish = (values: any) =>
    props.id ? editTodo(values, { id: props.id }, props.onClose) : createTodo(values, props.onClose);

  return (
    <Form
      initialValues={{
        name: props.name,
        deadline: props.deadline ? dayjs(props.deadline) : dayjs(),
        detail: props.detail,
        tagId: props.tagId,
      }}
      preserve={false}
      name="edit"
      onFinish={onFinish}
      scrollToFirstError
    >
      <Form.Item
        name="name"
        label="名称"
        rules={[
          {
            required: true,
            message: '名称不能为空',
          },
        ]}
      >
        <Input.TextArea rows={1} />
      </Form.Item>
      <Form.Item
        name="deadline"
        label="终止时间"
        rules={[
          {
            required: true,
            message: '终止时间不能为空',
          },
        ]}
      >
        <DatePicker className="w-100" format="YYYY-MM-DD" disabledDate={disabledDate} />
      </Form.Item>
      <Form.Item
        name="detail"
        label="详情"
        rules={[
          {
            required: true,
            message: '详情不能为空',
          },
        ]}
      >
        <Editor />
      </Form.Item>
      <Form.Item
        name="tagId"
        label="标签"
        rules={[
          {
            required: true,
            message: '请选择一个标签',
          },
        ]}
      >
        <Select options={state.tags.map((item) => ({ label: `${item.name}-(${item.userName})`, value: item.id }))} />
      </Form.Item>
      <Form.Item>
        <Affix offsetBottom={16}>
          <Button loading={state.loading} type="primary" htmlType="submit">
            {props.id ? '保存' : '创建'}
          </Button>
        </Affix>
      </Form.Item>
    </Form>
  );
};

export default EditTodo;
