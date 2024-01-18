import { useContext } from 'react';
import { Button, Input, Form, Typography, Popconfirm, Table } from 'antd';
import { MinusCircleOutlined } from '@ant-design/icons';
import type { TableProps } from 'antd';
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
  const columns: TableProps<any>['columns'] = [
    {
      title: '名称',
      dataIndex: 'name',
      width: 60,
      render: (t) => <Paragraph copyable>{t}</Paragraph>,
    },

    {
      title: 'txt',
      dataIndex: 'txt',
      width: 120,
      render: (t) => <Paragraph copyable>{t}</Paragraph>,
    },
    {
      title: '描述',
      dataIndex: 'txtInfo',
      width: 20,
    },
    {
      title: '操作',
      width: 20,
      fixed: 'right',
      render: (_text, record: any) =>
        state.user?.role === '0' && (
          <Popconfirm title="删除将无法恢复,确定删除?" onConfirm={() => delRecord(record.id)}>
            <MinusCircleOutlined />
          </Popconfirm>
        ),
    },
  ];

  return (
    <div>
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
      <Table
        virtual
        columns={columns}
        scroll={{ y: 600 }}
        rowKey="id"
        dataSource={state.records}
        pagination={false}
        locale={{ emptyText: <div className="center">暂无待办事项</div> }}
      />
    </div>
  );
};
export default Record;
