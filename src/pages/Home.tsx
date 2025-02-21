import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Chào mừng đến với Ứng dụng Quản lý Câu lạc bộ Bóng đá</h1>
      <p>
        Ứng dụng này giúp bạn quản lý thông tin các câu lạc bộ bóng đá, danh hiệu và các hoạt động liên quan.
      </p>
      <div>
        <h3>Danh sách các chức năng:</h3>
        <ul>
          <li>
            <Link to="/clubs">Xem danh sách câu lạc bộ</Link>
          </li>
          <li>
            <Link to="/login">Đăng nhập</Link>
          </li>
          <li>
            <Link to="/register">Đăng ký</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
