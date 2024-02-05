import { Button } from 'antd';
import { useContext } from 'react';
import { useTodo } from '../hooks';
import { ReduxContext } from '../redux';

const RoomList = () => {
  const { socket, navigate, setRoom } = useTodo();
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
      {state.rooms.map((item) => {
        return (
          <div key={item.id} style={{ color: state.room === item.name ? 'pink' : '' }}>
            房间：{item.name}&nbsp;&nbsp;
            <Button
              onClick={() => {
                setRoom(item.name);
                socket.emit('joinRoom', { roomName: item.name, userId: state.user?.id });
                navigate('/ndzy-todos/room');
              }}
            >
              加入
            </Button>
          </div>
        );
      })}
    </div>
  );
};

export default RoomList;
