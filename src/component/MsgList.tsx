import { Button, Input } from 'antd';
import { useContext, useState } from 'react';
import { useTodo } from '../hooks';
import { ReduxContext } from '../redux';

const MsgList = ({ room }: any) => {
  const [msg, setMsg] = useState('');
  const { socket } = useTodo();
  const { state } = useContext(ReduxContext);

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(1, 1fr)',
        gap: 16,
        border: '1px dashed #666',
        padding: 16,
      }}
    >
      <Input value={msg} onChange={(e) => setMsg(e.target.value)} placeholder="请输入信息" />
      <Button
        onClick={() => {
          if (!room) return;
          socket.emit('sendMessageToRoom', {
            roomName: room,
            message: msg,
            userId: state.user?.id,
          });
          setMsg('');
        }}
      >
        发送
      </Button>
      {state.messages.map((item) => {
        return <div>{item.text}</div>;
      })}
    </div>
  );
};

export default MsgList;
