import { Outlet, Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import {
  HomeOutlined,
  AppstoreAddOutlined,
  UserAddOutlined,
  LoginOutlined,
  TrophyOutlined,
} from '@ant-design/icons';

const { Sider, Content, Footer } = Layout;

function LayoutAdmin() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider width={250} theme="dark" style={{ paddingTop: '20px' }}>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<HomeOutlined />}>
            <Link to="/admin/clubs">Danh sách CLB</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<AppstoreAddOutlined />}>
            <Link to="/admin/clubs/add">Thêm CLB</Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<UserAddOutlined />}>
            <Link to="/register">Đăng ký</Link>
          </Menu.Item>
          <Menu.Item key="5" icon={<LoginOutlined />}>
            <Link to="/login">Đăng nhập</Link>
          </Menu.Item>
        </Menu>
      </Sider>

      <Layout style={{ padding: '0 24px 24px' }}>
        <Content
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
            background: '#fff',
          }}
        >
          <Outlet />
        </Content>

        <Footer style={{ textAlign: 'center' }}>
          Hệ thống quản lý CLB bóng đá &copy; 2025
        </Footer>
      </Layout>
    </Layout>
  );
}

export default LayoutAdmin;
