import { Outlet } from 'react-router-dom';
import { Layout as AntLayout, Button } from 'antd';
import { useTodo } from '../hooks';
import { useEffect } from 'react';

const { Content } = AntLayout;
const Layout = () => {
  const { navigate, getAllRooms } = useTodo();

  useEffect(() => {
    getAllRooms();
  }, []);

  return (
    <AntLayout className="ndzy-layout">
      <Content>
        <div className="layout-content p-16">
          <Button onClick={() => navigate('/ndzy-todos')}>主页</Button>
          <Button onClick={() => navigate('/ndzy-todos/rooms')}>聊天</Button>
          <Outlet />
        </div>
      </Content>
    </AntLayout>
  );
};

export default Layout;
