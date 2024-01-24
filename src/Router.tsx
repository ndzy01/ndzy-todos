import { Routes, Route } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import { useReducer } from 'react';
import zhCn from 'antd/locale/zh_CN';
import { initialState, reducer, ReduxContext } from './redux';
import Layout from './pages/Layout';
import Todo from './pages/Todo';
import NoMatch from './pages/NoMatch';
import Record from './pages/Records';

const Router = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ConfigProvider locale={zhCn}>
      <ReduxContext.Provider value={{ state, dispatch }}>
        <Routes>
          <Route path="/ndzy-todos/" element={<Layout />}>
            <Route index element={<Todo />} />
            <Route path="/ndzy-todos/records" element={<Record />} />
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </ReduxContext.Provider>
    </ConfigProvider>
  );
};

export default Router;
