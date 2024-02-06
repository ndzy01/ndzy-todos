import dayjs from 'dayjs';
import { useContext } from 'react';
import { ReduxContext } from './redux';
import service from './http';
import { encrypt, decrypt } from './utils';

export const useTodo = () => {
  const { dispatch } = useContext(ReduxContext);

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

  return {
    initUser,
    initTags,
    createTodo,
    editTodo,
    getAllTodo,
    finishTodo,
    delTodo,
    recoverTodo,
  };
};
