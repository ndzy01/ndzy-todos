import { Button, Input } from 'antd';
import { useContext, useState } from 'react';
import { useTodo } from '../hooks';
import { ReduxContext } from '../redux';

const CreateRoom = () => {
  const [room, setRoom] = useState('');
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
      <Input value={room} onChange={(e) => setRoom(e.target.value)} />
      <Button
        onClick={() => {
          if (!state.user || !room) return;

          socket.emit('createRoom', { roomName: room, userId: state.user?.id });
        }}
      >
        创建房间
      </Button>
    </div>
  );
};

export default CreateRoom;
