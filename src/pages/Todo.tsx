import { useMount } from 'ahooks';
import { Button, Space, Popconfirm, Spin, Table } from 'antd';
import type { TableProps } from 'antd';
import { useContext } from 'react';
import { ReduxContext } from '../redux';
import { useTodo } from '../hooks';
import View from '../component/View';
import EditTodo from '../component/EditTodo';
import Drawer from '../component/Drawer';

const Todo = () => {
  const { state } = useContext(ReduxContext);
  const { initUser, initTags, getAllTodo, finishTodo, delTodo, recoverTodo } = useTodo();
  useMount(() => {
    initUser();
    initTags();
    getAllTodo();
  });
  const columns: TableProps<any>['columns'] = [
    {
      title: '名称',
      dataIndex: 'name',
      width: 80,
    },
    {
      title: '进度',
      dataIndex: 'deadline',
      width: 80,
      render: (_text, record: any) => {
        if (Number(record.isFinish) === 0) {
          return <span style={{ color: 'red' }}>处理中</span>;
        }

        if (Number(record.isFinish) === 1) {
          return <span style={{ color: 'green' }}>已完成</span>;
        }
      },
    },
    {
      title: '截止日期',
      dataIndex: 'deadline',
      width: 80,
    },
    {
      title: '标签',
      dataIndex: 'tagName',
      width: 80,
    },
    {
      title: '用户',
      dataIndex: 'userName',
      width: 80,
    },
    {
      title: '创建时间',
      dataIndex: 'createdAt',
      width: 120,
    },
    {
      title: '更新时间',
      dataIndex: 'updatedAt',
      width: 120,
    },
    {
      title: '操作',
      width: 100,
      fixed: 'right',
      render: (_text, record: any) => (
        <Space>
          <View {...record} />
          {Number(record.isFinish) === 0 ? (
            <Space>
              <Drawer title="编辑" btnName="编辑" {...record}>
                <EditTodo />
              </Drawer>
              <Button type="link" onClick={() => finishTodo(record)}>
                完成
              </Button>
            </Space>
          ) : Number(record.isFinish) === 1 ? (
            <Space>
              <Button type="link" onClick={() => recoverTodo(record)}>
                恢复
              </Button>
              <Popconfirm title="删除将无法恢复,确定删除?" onConfirm={() => delTodo(record)}>
                <Button type="link"> 删除</Button>
              </Popconfirm>
            </Space>
          ) : null}
        </Space>
      ),
    },
  ];

  return (
    <div>
      <div className="center">{state.loading && <Spin />}</div>
      <Table
        virtual
        columns={columns}
        scroll={{ x: 2000, y: 600 }}
        rowKey="id"
        dataSource={state.list}
        pagination={false}
        locale={{ emptyText: <div className="center">暂无待办事项</div> }}
      />
    </div>
  );
};
export default Todo;
