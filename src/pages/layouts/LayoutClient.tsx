import { Link, Outlet } from 'react-router-dom';
import { Layout, Menu, Input } from 'antd';

const { Header, Content } = Layout;

function LayoutClient() {
  return (
    <Layout>
      <Header>
        
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="3">
            <Link to="/register">Đăng ký</Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="/login">Đăng nhập</Link>
          </Menu.Item>
        </Menu>
      </Header>

      <Content style={{ padding: '20px' }}>
        
        <Outlet />
      </Content>

    </Layout>
  );
}

export default LayoutClient;
