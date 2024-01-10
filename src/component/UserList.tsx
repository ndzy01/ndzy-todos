import { useMount, useVirtualList } from 'ahooks';
import { Button, Space, Popconfirm } from 'antd';
import dayjs from 'dayjs';
import { useContext, useRef } from 'react';
import { ReduxContext } from '../redux';
import { useTodo } from '../hooks';

const UserList = () => {
  const containerRef = useRef(null);
  const wrapperRef = useRef(null);
  const { users, delUser, getUsers } = useTodo();
  const { state } = useContext(ReduxContext);
  const [list] = useVirtualList(users, {
    containerTarget: containerRef,
    wrapperTarget: wrapperRef,
    itemHeight: 60,
    overscan: 10,
  });
  useMount(() => {
    getUsers();
  });
  return (
    <div ref={containerRef} style={{ height: window.innerHeight / 2, overflow: 'auto' }}>
      <div ref={wrapperRef}>
        {list.map((ele) => (
          <div
            style={{
              height: 52,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              border: '1px solid #e8e8e8',
              marginBottom: 8,
            }}
            key={ele.data.id}
          >
            <div className="between w-100">
              <div className="between">
                用户名：{ele.data.nickname}
                {state.user?.role === '0' && (
                  <Popconfirm title="删除将无法恢复,确定删除?" onConfirm={() => delUser(ele.data)}>
                    <Button> 删除</Button>
                  </Popconfirm>
                )}
              </div>
              <div>
                <Space>
                  <span>创建日期：{dayjs(ele.data.createdAt).subtract(8, 'h').format('YYYY-MM-DD')}</span>
                  <span>更新日期：{dayjs(ele.data.updatedAt).subtract(8, 'h').format('YYYY-MM-DD')}</span>
                </Space>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default UserList;
