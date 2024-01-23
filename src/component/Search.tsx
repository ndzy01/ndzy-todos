import { Button, Form, Input, Select, Space } from 'antd';
import { useContext, useState } from 'react';
import { DownOutlined } from '@ant-design/icons';
import { formItemLayout, buttonItemLayout } from '../utils';
import { useTodo } from '../hooks';
import { ReduxContext } from '../redux';

const Search = ({ onClose }: any) => {
  const [expand, setExpand] = useState(false);
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
        Object.keys(values).map((item) => {
          if (!values[item]) {
            delete values[item];
          }
        });
        getAllTodo(values);
        onClose();
      }}
      scrollToFirstError
    >
      <Form.Item name="name" label="名称">
        <Input className="w-100" allowClear />
      </Form.Item>
      <div style={{ display: expand ? 'block' : 'none' }}>
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
              { label: '处理中', value: '0' },
              { label: '已完成', value: '1' },
            ]}
          />
        </Form.Item>
      </div>
      <Form.Item {...buttonItemLayout} style={{ display: 'flex', justifyContent: 'end' }}>
        <Space style={{ width: 240 }}>
          <Button loading={state.loading} type="primary" htmlType="submit">
            搜索
          </Button>

          <Button type="link" onClick={() => getAllTodo()}>
            重置
          </Button>
          <a
            style={{ fontSize: 12 }}
            onClick={() => {
              setExpand(!expand);
            }}
          >
            <DownOutlined rotate={expand ? 180 : 0} />
            {expand ? '收起' : '展开'}
          </a>
        </Space>
      </Form.Item>
    </Form>
  );
};

export default Search;
