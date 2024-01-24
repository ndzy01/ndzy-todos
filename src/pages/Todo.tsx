import { useMount, useSize } from 'ahooks';
import { Button, Space, Popconfirm, Spin, Table, List } from 'antd';
import type { TableProps } from 'antd';
import VirtualList from 'rc-virtual-list';
import { useContext, useRef } from 'react';
import { ReduxContext } from '../redux';
import { useTodo } from '../hooks';
import View from '../component/View';
import EditTodo from '../component/EditTodo';
import Drawer from '../component/Drawer';
import Search from '../component/Search';

const Todo = () => {
  const ContainerHeight = 400;
  const ref = useRef(null);
  const size = useSize(ref);
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
      width: 100,
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
      width: 100,
    },
    {
      title: '标签',
      dataIndex: 'tagName',
      width: 100,
    },
    {
      title: '用户',
      dataIndex: 'userName',
      width: 100,
    },
    {
      title: '创建时间',
      dataIndex: 'createdAt',
      width: 100,
    },
    {
      title: '更新时间',
      dataIndex: 'updatedAt',
      width: 100,
    },
    {
      title: '操作',
      width: 120,
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
    <div ref={ref}>
      <div className="center">{state.loading && <Spin />}</div>

      <Search />

      {Number(size?.width) > 800 ? (
        <Table
          virtual
          columns={columns}
          scroll={{ x: 900, y: 600 }}
          rowKey="id"
          dataSource={state.list}
          pagination={false}
          locale={{ emptyText: <div className="center">暂无待办事项</div> }}
        />
      ) : (
        <List>
          <VirtualList data={state.list} height={ContainerHeight} itemHeight={40} itemKey="email">
            {(item) => (
              <List.Item
                key={item.id}
                actions={[
                  <View {...item} />,

                  ...(Number(item.isFinish) === 0
                    ? [
                        <Drawer title="编辑" btnName="编辑" {...item}>
                          <EditTodo />
                        </Drawer>,

                        <Button type="link" onClick={() => finishTodo(item)}>
                          完成
                        </Button>,
                      ]
                    : [
                        <Button type="link" onClick={() => recoverTodo(item)}>
                          恢复
                        </Button>,

                        <Popconfirm title="删除将无法恢复,确定删除?" onConfirm={() => delTodo(item)}>
                          <Button type="link"> 删除</Button>
                        </Popconfirm>,
                      ]),
                  ...(Number(item.isFinish) === 0 ? [] : []),
                ]}
              >
                <List.Item.Meta title={item.name} description={item.deadline} />

                <div>{Number(item.isFinish) === 0 && <span style={{ color: 'red' }}>处理中</span>}</div>

                <div>{Number(item.isFinish) === 1 && <span style={{ color: 'green' }}>已完成</span>}</div>
              </List.Item>
            )}
          </VirtualList>
        </List>
      )}
    </div>
  );
};

export default Todo;
