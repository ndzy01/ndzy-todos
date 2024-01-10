import { useMount, useVirtualList } from 'ahooks';
import { Button, Space, Popconfirm, Spin, Tag } from 'antd';
import { useContext, useRef } from 'react';
import { ReduxContext } from '../redux';
import { useTodo } from '../hooks';
import View from '../component/View';
import EditTodo from '../component/EditTodo';
import Drawer from '../component/Drawer';

const Todo = () => {
  const { state } = useContext(ReduxContext);
  const containerRef = useRef(null);
  const wrapperRef = useRef(null);
  const [list] = useVirtualList(state.list, {
    containerTarget: containerRef,
    wrapperTarget: wrapperRef,
    itemHeight: 60,
    overscan: 10,
  });
  const { initUser, initTags, getAllTodo, finishTodo, delTodo, recoverTodo, delLocalData, isLocal } = useTodo();
  useMount(() => {
    initUser();
    initTags();
    getAllTodo();
  });

  return (
    <div>
      <div className="center">{state.loading && <Spin />}</div>
      {list.length === 0 && <div className="center">暂无待办事项</div>}
      <div ref={containerRef} style={{ height: window.innerHeight * 0.88, overflow: 'auto' }}>
        <div ref={wrapperRef}>
          {list.map((ele) => (
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                border: '1px solid #e8e8e8',
                marginBottom: 8,
              }}
              key={ele.data.id}
            >
              <div className="between w-100 todo-item">
                <div>
                  <Space>
                    {ele.data.name}
                    <Tag color="pink">{ele.data.deadline}</Tag>
                    {!isLocal && <Tag color="green">{ele.data.tagName}</Tag>}
                  </Space>
                </div>
                <div>
                  <Space>
                    <View {...ele.data} />
                    {isLocal && (
                      <Drawer title="编辑" btnName="编辑" {...ele.data}>
                        <EditTodo />
                      </Drawer>
                    )}
                    {isLocal && (
                      <Button type="link" onClick={() => delLocalData(ele.data.id)}>
                        删除
                      </Button>
                    )}
                    {isLocal && (
                      <Button type="link" onClick={() => {}}>
                        同步
                      </Button>
                    )}
                    {Number(ele.data.isFinish) === 0 ? (
                      <Space>
                        <span style={{ color: 'red' }}>处理中</span>
                        <Drawer title="编辑" btnName="编辑" {...ele.data}>
                          <EditTodo />
                        </Drawer>
                        <Button type="link" onClick={() => finishTodo(ele.data)}>
                          完成
                        </Button>
                      </Space>
                    ) : Number(ele.data.isFinish) === 1 ? (
                      <Space>
                        <span style={{ color: 'green' }}>已完成</span>
                        <Button type="link" onClick={() => recoverTodo(ele.data)}>
                          恢复
                        </Button>
                        <Popconfirm title="删除将无法恢复,确定删除?" onConfirm={() => delTodo(ele.data)}>
                          <Button type="link"> 删除</Button>
                        </Popconfirm>
                      </Space>
                    ) : null}
                  </Space>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Todo;
