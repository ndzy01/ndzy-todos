import dayjs from 'dayjs';
import { useContext } from 'react';
import io from 'socket.io-client';
import { ReduxContext } from './redux';
import serviceAxios, { wxService } from './http';
import { encrypt, decrypt } from './utils';
import { useNavigate } from 'react-router-dom';

const socket = io('https://ndzy-service-89589-7-1307521321.sh.run.tcloudbase.com');

export const useTodo = () => {
  const navigate = useNavigate();
  const service = (localStorage.getItem('USE_LOCAL_SERVICE') || '0') === '0' ? serviceAxios : wxService;
  const { dispatch } = useContext(ReduxContext);

  const setRoom = (room: string) => {
    dispatch({ type: 'UPDATE', payload: { room } });
  };

  const initUser = () => {
    dispatch({ type: 'UPDATE', payload: { loading: true } });
    service({ url: '/users/loginInfo', method: 'GET' })
      .then((res: any) => {
        dispatch({ type: 'UPDATE', payload: { user: res.data, loading: false } });
      })
      .catch(() => {
        dispatch({ type: 'UPDATE', payload: { loading: false } });
      });
  };

  const initTags = () => {
    dispatch({ type: 'UPDATE', payload: { loading: true } });
    service({ url: '/tags', method: 'GET' })
      .then((res: any) => {
        dispatch({ type: 'UPDATE', payload: { tags: res.data, loading: false } });
      })
      .catch(() => {
        dispatch({ type: 'UPDATE', payload: { loading: false } });
      });
  };

  const getAllTodo = (params: { tagId?: string } = {}) => {
    dispatch({ type: 'UPDATE', payload: { loading: true } });
    service({ url: '/todos', method: 'GET', params })
      .then((res: any) => {
        dispatch({
          type: 'UPDATE',
          payload: {
            list: res.data.map((item: any) => ({
              ...item,
              detail: decrypt(item.detail, item.keyBase, item.ivBase),
            })),
            loading: false,
          },
        });
      })
      .catch(() => {
        dispatch({ type: 'UPDATE', payload: { loading: false } });
      });
  };

  const createTodo = (values: any, cb?: any) => {
    dispatch({ type: 'UPDATE', payload: { loading: true } });
    const { text, keyBase, ivBase } = encrypt(values.detail);
    service({
      url: '/todos',
      method: 'POST',
      data: {
        ...values,
        deadline: dayjs(values.deadline).format('YYYY-MM-DD'),
        operationSource: 'h5',
        detail: text,
        keyBase,
        ivBase,
      },
    })
      .then(() => {
        dispatch({ type: 'UPDATE', payload: { loading: false } });
        getAllTodo();
        cb && cb();
      })
      .catch(() => {
        dispatch({ type: 'UPDATE', payload: { loading: false } });
      });
  };

  const editTodo = (values: any, state: { id: string }, cb?: any) => {
    dispatch({ type: 'UPDATE', payload: { loading: true } });
    const { text, keyBase, ivBase } = encrypt(values.detail);
    service({
      url: `/todos/${state.id}`,
      method: 'PATCH',
      data: {
        name: values.name,
        detail: text,
        keyBase,
        ivBase,
        deadline: dayjs(values.deadline).format('YYYY-MM-DD'),
        tagId: values.tagId,
      },
    })
      .then(() => {
        dispatch({ type: 'UPDATE', payload: { loading: false } });
        getAllTodo();
        cb && cb();
      })
      .catch(() => {
        dispatch({ type: 'UPDATE', payload: { loading: false } });
      });
  };

  const finishTodo = (item: ITodo) => {
    dispatch({ type: 'UPDATE', payload: { loading: true } });
    service({
      url: `/todos/${item.id}`,
      method: 'PATCH',
      data: {
        isFinish: true,
      },
    })
      .then(() => {
        getAllTodo();
      })
      .catch(() => {
        dispatch({ type: 'UPDATE', payload: { loading: false } });
      });
  };

  const delTodo = (item: ITodo) => {
    dispatch({ type: 'UPDATE', payload: { loading: true } });
    service({
      url: `/todos/${item.id}`,
      method: 'DELETE',
      data: {
        isFinish: true,
      },
    })
      .then(() => {
        getAllTodo();
      })
      .catch(() => {
        dispatch({ type: 'UPDATE', payload: { loading: false } });
      });
  };

  const recoverTodo = (item: ITodo) => {
    dispatch({ type: 'UPDATE', payload: { loading: true } });
    service({
      url: `/todos/${item.id}`,
      method: 'PATCH',
      data: {
        isFinish: false,
      },
    })
      .then(() => {
        getAllTodo();
      })
      .catch(() => {
        dispatch({ type: 'UPDATE', payload: { loading: false } });
      });
  };

  const switchService = () => {
    if (localStorage.getItem('USE_LOCAL_SERVICE') === '0') {
      localStorage.setItem('USE_LOCAL_SERVICE', '1');
    } else {
      localStorage.setItem('USE_LOCAL_SERVICE', '0');
    }
    window.location.reload();
  };

  const getAllRooms = () => {
    service({ url: '/chats/rooms', method: 'GET' }).then((res: any) => {
      dispatch({
        type: 'UPDATE',
        payload: {
          rooms: res.data,
        },
      });
    });
  };

  const getAllMessages = (params: { name?: string }) => {
    service({ url: '/chats', method: 'GET', params }).then((res: any) => {
      dispatch({
        type: 'UPDATE',
        payload: {
          messages: res.data,
        },
      });
    });
  };

  const getMembers = (params: { name?: string }) => {
    service({ url: '/chats/room/members', method: 'GET', params }).then((res: any) => {
      dispatch({
        type: 'UPDATE',
        payload: {
          members: res.data,
        },
      });
    });
  };

  return {
    initUser,
    initTags,
    createTodo,
    editTodo,
    getAllTodo,
    finishTodo,
    delTodo,
    recoverTodo,
    switchService,
    getAllRooms,
    getAllMessages,
    socket,
    setRoom,
    navigate,
    getMembers,
  };
};
