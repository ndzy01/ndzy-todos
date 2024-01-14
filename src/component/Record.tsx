import { useContext } from 'react';
import { Button, Space, Input, Form, Typography } from 'antd';
import { MinusCircleOutlined } from '@ant-design/icons';
import { ReduxContext } from '../redux';
import { useTodo } from '../hooks';
import { useDeepCompareEffect } from 'ahooks';
const { Paragraph } = Typography;

const Record = () => {
  const [form] = Form.useForm();
  const { getAllRecord, addRecord, delRecord } = useTodo();
  const { state } = useContext(ReduxContext);

  useDeepCompareEffect(() => {
    getAllRecord();
  }, []);

  useDeepCompareEffect(() => {
    form.setFieldsValue({ name: '', txt: '', txtInfo: '' });
  }, [state.records]);

  const onFinish = (values: any) => {
    if (values) {
      addRecord(values);
    }
  };

  return (
    <>
      <Form variant="filled" style={{ maxWidth: 600 }} onFinish={onFinish} form={form}>
        <Form.Item label="name" name="name" rules={[{ required: true, message: '不能为空' }]}>
          <Input placeholder="请输入" />
        </Form.Item>
        <Form.Item label="txt" name="txt" rules={[{ required: true, message: '不能为空' }]}>
          <Input placeholder="请输入" />
        </Form.Item>
        <Form.Item label="txtInfo" name="txtInfo">
          <Input placeholder="请输入" />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
          <Button type="primary" htmlType="submit" loading={state.loading}>
            添加
          </Button>
        </Form.Item>
      </Form>
      {state.records.map((item) => {
        return (
          <Space key={item.id} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
            <Form.Item label="名称">
              <Paragraph copyable>{item.name}</Paragraph>
            </Form.Item>
            <Form.Item label="内容">
              <Paragraph copyable>{item.txt}</Paragraph>
            </Form.Item>
            <Form.Item label="描述">
              <Paragraph copyable>{item.txtInfo}</Paragraph>
            </Form.Item>
            <MinusCircleOutlined onClick={() => delRecord(item.id)} />
          </Space>
        );
      })}
    </>
  );
};
export default Record;
