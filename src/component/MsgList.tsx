import { Button } from 'antd';
import { useContext, useEffect, useRef, useState } from 'react';
import { useTodo } from '../hooks';
import { ReduxContext } from '../redux';
import Editor from '../component/Editor';
import { useFocusWithin, useHover, useInterval } from 'ahooks';
import { generateUUID } from '../utils';

const MsgList = () => {
  const ref = useRef(null);
  const isHovering = useHover(ref);
  const [t, seT] = useState<any>(undefined);
  const [msg, setMsg] = useState('');
  const { socket, getAllMessages, getMembers } = useTodo();
  const { state } = useContext(ReduxContext);
  useFocusWithin(() => document.getElementById('chat-input'), {
    onFocus: () => {
      seT(1500);
    },
    onBlur: () => {
      seT(undefined);
    },
  });

  useEffect(() => {
    getAllMessages({ name: state.room });
    getMembers({ name: state.room });
  }, []);

  useInterval(() => {
    getAllMessages({ name: state.room });
    getMembers({ name: state.room });
  }, t);

  useEffect(() => {
    if (isHovering) {
      seT(1500);
    } else {
      seT(undefined);
    }
  }, [isHovering]);

  return (
    <div className="chat-container">
      <div className="user-list">
        {state.members.map((item) => (
          <div id={item.id} className="user">
            {item.name}
          </div>
        ))}
      </div>
      <div className="chat-main" ref={ref}>
        <div className="chat-header">
          <h3>{state.room}</h3>
        </div>
        <div className="message-list">
          {state.messages.map((item) => {
            return (
              <div
                key={item.id}
                className="chat-messages"
                style={{ textAlign: state?.user?.name === item.sender.name ? 'right' : 'left' }}
              >
                <div className="message">
                  <div>
                    <span className="meta">
                      {item.sender.name} <span className="timestamp">{item.createdAt}</span>
                    </span>
                  </div>
                  <div
                    className="text"
                    style={{ padding: '0 8px' }}
                    id={`preview-${generateUUID()}`}
                    dangerouslySetInnerHTML={{ __html: item.text }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        <div className="chat-input">
          <Editor value={msg} onChange={(v: any) => setMsg(v)} placeholder="请输入" showToolbar={false} />
          <Button
            onClick={() => {
              if (!state.room) return;
              if (!state?.user) return;
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
        </div>
      </div>
    </div>
  );
};

export default MsgList;
