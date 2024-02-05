import { Button } from 'antd';
import { useContext, useEffect, useState, useRef } from 'react';
import { useTodo } from '../hooks';
import { ReduxContext } from '../redux';
import Editor from '../component/Editor';
import { useFocusWithin, useInterval } from 'ahooks';
import Drawer from './Drawer';
import { generateUUID } from '../utils';

const MsgList = () => {
  const [t, seT] = useState<any>(undefined);
  const [msg, setMsg] = useState('');
  const { socket, getAllMessages } = useTodo();
  const { state } = useContext(ReduxContext);
  const ref = useRef(null);
  const isFocusWithin = useFocusWithin(ref, {
    onFocus: () => {
      seT(1500);
    },
    onBlur: () => {
      seT(undefined);
    },
  });

  useEffect(() => {
    getAllMessages({ name: state.room });
  }, []);

  useInterval(() => {
    getAllMessages({ name: state.room });
  }, t);

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
      <div style={{ height: 600, overflow: 'scroll' }}>
        {state.messages.map((item) => {
          return (
            <div
              style={{
                borderBottom: '0.1px dashed #666',
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: 16,
                padding: 4,
              }}
            >
              <div>用户：{item.sender.nickname}</div>
              <div
                style={{ padding: '0 8px' }}
                id={`preview-${generateUUID()}`}
                className="ndzy-preview"
                dangerouslySetInnerHTML={{ __html: item.text }}
              />
              <div>{item.createdAt}</div>
            </div>
          );
        })}
      </div>

      <Drawer title="发送消息" btnName="发送消息">
        <Editor value={msg} onChange={(v: any) => setMsg(v)} placeholder="请输入" />
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
      </Drawer>
    </div>
  );
};

export default MsgList;
