import { Button } from 'antd';
import { useContext, useEffect, useState, useRef } from 'react';
import { useTodo } from '../hooks';
import { ReduxContext } from '../redux';
import Editor from '../component/Editor';
import { useFocusWithin } from 'ahooks';

const MsgList = () => {
  const [msg, setMsg] = useState('');
  const { socket, getAllMessages } = useTodo();
  const { state } = useContext(ReduxContext);
  const ref = useRef(null);
  const isFocusWithin = useFocusWithin(ref, {
    onFocus: () => {
      getAllMessages({ name: state.room });
    },
    onBlur: () => {
      //
    },
  });

  useEffect(() => {
    getAllMessages({ name: state.room });
  }, []);

  return (
    <div
      ref={ref}
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(1, 1fr)',
        gap: 16,
        border: isFocusWithin ? '1px dashed #666' : '',
        padding: 16,
      }}
    >
      <div style={{ height: 200, overflow: 'scroll' }}>
        {state.messages.map((item) => {
          return (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: 16,
                padding: 4,
              }}
            >
              <div>用户：{item.sender.nickname}</div>
              <div>消息：{item.text}</div>
              <div>{item.createdAt}</div>
            </div>
          );
        })}
      </div>
      <Editor value={msg} onChange={(v: any) => setMsg(v)} placeholder="请输入信息" />
      <Button
        onClick={() => {
          if (!state.room) return;
          socket.emit('sendMessageToRoom', {
            roomName: state.room,
            message: msg,
            userId: state.user?.id,
          });
          getAllMessages({ name: state.room });
          setMsg('');
        }}
      >
        发送
      </Button>
    </div>
  );
};

export default MsgList;
