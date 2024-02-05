import { useContext } from 'react';
import MsgList from '../component/MsgList';
import { ReduxContext } from '../redux';

const Room = () => {
  const { state } = useContext(ReduxContext);

  return (
    <div>
      房间： {state.room}
      <MsgList />
    </div>
  );
};

export default Room;
