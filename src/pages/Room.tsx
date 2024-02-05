import { useContext } from 'react';
import MsgList from '../component/MsgList';
import { ReduxContext } from '../redux';
import { Space, Tooltip } from 'antd';

const Room = () => {
  const { state } = useContext(ReduxContext);

  return (
    <div>
      <div className="center">
        房间： {state.room}&nbsp;&nbsp;用户：
        <Tooltip title={<Space>{state.members.map((item) => item.name)}</Space>}>
          <Space>{state.members.map((item) => item.name)}</Space>
        </Tooltip>
      </div>

      <MsgList />
    </div>
  );
};

export default Room;
