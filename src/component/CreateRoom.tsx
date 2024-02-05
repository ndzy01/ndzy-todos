import { Button, Input } from 'antd';
import { useContext, useState } from 'react';
import { useTodo } from '../hooks';
import { ReduxContext } from '../redux';
import './index.css';

const CreateRoom = () => {
  const [room, setRoom] = useState('');
  const { socket, getAllRooms } = useTodo();
  const { state } = useContext(ReduxContext);

  return (
    <div className="create-room">
      <h2>创建新聊天室</h2>

      <Input value={room} onChange={(e) => setRoom(e.target.value)} placeholder="输入聊天室名称" />

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
