import { useContext } from 'react';
import { useTodo } from '../hooks';
import { ReduxContext } from '../redux';
import './index.css';

const RoomList = () => {
  const { socket, navigate, setRoom } = useTodo();
  const { state } = useContext(ReduxContext);

  return (
    <div className="room-selection">
      <h2>选择聊天室</h2>
      <div className="room-list">
        {state.rooms.map((item) => {
          return (
            <button
              key={item.id}
              className="room-button"
              onClick={() => {
                setRoom(item.name);
                socket.emit('joinRoom', { roomName: item.name, userId: state.user?.id });
                navigate('/ndzy-todos/room');
              }}
            >
              {item.name}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default RoomList;
