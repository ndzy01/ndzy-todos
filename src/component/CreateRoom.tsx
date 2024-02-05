import { Button, Input } from 'antd';
import { useContext, useState } from 'react';
import { useTodo } from '../hooks';
import { ReduxContext } from '../redux';

const CreateRoom = () => {
  const [room, setRoom] = useState('');
  const { socket, getAllRooms } = useTodo();
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
      <Input value={room} onChange={(e) => setRoom(e.target.value)} placeholder="请输入房间号" />
      <Button
        onClick={() => {
          if (state.user && room) {
            socket.emit('createRoom', { roomName: room, userId: state.user?.id });
            getAllRooms();
            setRoom('');
          }
        }}
      >
        创建并加入房间
      </Button>
    </div>
  );
};

export default CreateRoom;
