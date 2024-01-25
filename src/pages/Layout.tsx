import { Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { Button, Layout as AntLayout, Space, Dropdown } from 'antd';
import type { MenuProps } from 'antd';
import { ReduxContext } from '../redux';
import { useTodo } from '../hooks';
import ITag from '../component/Tag';
import Drawer from '../component/Drawer';
import Login from '../component/Login';
import Register from '../component/Register';

const { Header, Content } = AntLayout;
const Layout = () => {
  const { signOut, switchService, goPage } = useTodo();
  const { state } = useContext(ReduxContext);
  const items: MenuProps['items'] = [
    {
      key: '0',
      label: (
        <Drawer title="登陆" btnName="登陆">
          <Login />
        </Drawer>
      ),
    },
    {
      key: '1',
      label: (
        <Drawer title="注册" btnName="注册">
          <Register />
        </Drawer>
      ),
    },
    {
      key: '2',
      label: (
        <Button type="link" onClick={signOut}>
          登出
        </Button>
      ),
    },
    {
      key: '3',
      label: (
        <Button type="link" onClick={switchService}>
          {localStorage.getItem('USE_LOCAL_SERVICE') === '0' ? '本地环境' : '线上环境'}
        </Button>
      ),
    },
  ];

  return (
    <AntLayout className="ndzy-layout">
      <Header className="ndzy-header">
        <Space className="mb-16">
          {state.user ? (
            <div style={{ minWidth: 33 }} className="sky-blue center">
              {state.user.name || state.user.nickname}
            </div>
          ) : (
            <div style={{ minWidth: 33 }} className="sky-blue center">
              游客
            </div>
          )}

          <Button type="link" onClick={() => goPage('/ndzy-todos')}>
            home
          </Button>

          <Drawer title="标签" btnName="标签">
            <ITag />
          </Drawer>

          <Button type="link" onClick={() => goPage('/ndzy-todos/records')}>
            记录
          </Button>

          <Dropdown menu={{ items }}>
            <a onClick={(e) => e.preventDefault()}>其他</a>
          </Dropdown>
        </Space>
      </Header>
      <Content>
        <div className="layout-content p-16">
          <Outlet />
        </div>
      </Content>
    </AntLayout>
  );
};

export default Layout;
