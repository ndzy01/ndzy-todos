import { Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { Button, Layout as AntLayout, Space, Dropdown } from 'antd';
import type { MenuProps } from 'antd';
import { ReduxContext } from '../redux';
import { useTodo } from '../hooks';
import EditTodo from '../component/EditTodo';
import ITag from '../component/Tag';
import Drawer from '../component/Drawer';
import Login from '../component/Login';
import Register from '../component/Register';
import UserList from '../component/UserList';
import Search from '../component/Search';

const { Header, Content } = AntLayout;
const Layout = () => {
  const { signOut, getAllTodo, switchData, switchService } = useTodo();
  const { state } = useContext(ReduxContext);
  const items: MenuProps['items'] = [
    {
      key: '0',
      label: (
        <Drawer title="标签" btnName="标签">
          <ITag />
        </Drawer>
      ),
    },
    {
      key: '1',
      label: (
        <Drawer title="登陆" btnName="登陆">
          <Login />
        </Drawer>
      ),
    },
    {
      key: '2',
      label: (
        <Drawer title="注册" btnName="注册">
          <Register />
        </Drawer>
      ),
    },
    {
      key: '3',
      label: state.user && state.user.role === '0' && (
        <Drawer title="用户管理" btnName="用户管理">
          <UserList />
        </Drawer>
      ),
    },
    {
      key: '4',
      label: (
        <Button type="link" onClick={signOut}>
          登出
        </Button>
      ),
    },
    {
      key: '5',
      label: (
        <Button type="link" onClick={switchService}>
          {localStorage.getItem('USE_LOCAL_SERVICE') === '0' ? '本地环境' : '线上环境'}
        </Button>
      ),
    },
    {
      key: '6',
      label: (
        <Button type="link" onClick={switchData}>
          {localStorage.getItem('USE_LOCAL_DATA') === '0' ? '本地数据' : '接口数据'}
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

          <Drawer title="新建" btnName="新建">
            <EditTodo />
          </Drawer>

          <Drawer title="搜索" btnName="搜索">
            <Search />
          </Drawer>

          <Button type="link" onClick={() => getAllTodo()}>
            重置
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
