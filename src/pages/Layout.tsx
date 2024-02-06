import { Outlet } from 'react-router-dom';
import { Layout as AntLayout } from 'antd';

const { Content } = AntLayout;
const Layout = () => {
  return (
    <AntLayout className="ndzy-layout">
      <Content>
        <div className="layout-content">
          <Outlet />
        </div>
      </Content>
    </AntLayout>
  );
};

export default Layout;
