import { useContext } from 'react';
import MsgList from '../component/MsgList';
import { ReduxContext } from '../redux';

const Room = () => {
  const { state } = useContext(ReduxContext);

  return (
    <div>
      <div className="center"> 房间： {state.room}</div>
      <MsgList />
    </div>
  );
};

export default Room;
