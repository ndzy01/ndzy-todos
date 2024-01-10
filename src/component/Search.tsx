import { Button, Form, Input, Select } from 'antd';
import { useContext } from 'react';
import { formItemLayout, buttonItemLayout } from '../utils';
import { useTodo } from '../hooks';
import { ReduxContext } from '../redux';

const Search = ({ onClose }: any) => {
  const { getAllTodo } = useTodo();
  const { state } = useContext(ReduxContext);
  return (
    <Form
      initialValues={{
        operationSource: 'h5',
        isFinish: '0',
      }}
      {...formItemLayout}
      name="search"
      onFinish={(values: any) => {
        getAllTodo(values);
        onClose();
      }}
      scrollToFirstError
    >
      <Form.Item name="name" label="名称">
        <Input className="w-100" />
      </Form.Item>
      <Form.Item name="tagId" label="标签">
        <Select
          className="w-100"
          options={state.tags.map((item) => ({ label: `${item.name}-(${item.userName})`, value: item.id }))}
        />
      </Form.Item>
      <Form.Item name="operationSource" label="来源">
        <Select
          className="w-100"
          options={[
            { label: 'h5', value: 'h5' },
            { label: '微信', value: 'wx' },
          ]}
        />
      </Form.Item>
      <Form.Item name="isFinish" label="状态">
        <Select
          className="w-100"
          options={[
            { label: '进行中', value: '0' },
            { label: '已完成', value: '1' },
          ]}
        />
      </Form.Item>
      <Form.Item {...buttonItemLayout}>
        <Button loading={state.loading} type="primary" htmlType="submit">
          搜索
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Search;
