import React, { useEffect, useState } from 'react';
import axios, { AxiosError } from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom'; 
import { Table, Button, Modal, message } from 'antd';
import { Club } from '../../interfaces/schoolInterfaces';

const ClubList: React.FC = () => {
  const [clubs, setClubs] = useState<Club[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchClubs = async () => {
      try {
        const response = await axios.get('http://localhost:3000/clubs');
        setClubs(response.data);
        setLoading(false);
      } catch (error) {
        setError('Không thể tải danh sách câu lạc bộ');
        setLoading(false);
        toast.error((error as AxiosError).message);
      }
    };

    fetchClubs();
  }, []);

  const handleDelete = async (id: number) => {
    Modal.confirm({
      title: 'Xác nhận xóa',
      content: 'Bạn có chắc chắn muốn xóa câu lạc bộ này?',
      okText: 'Xóa',
      okType: 'danger',
      cancelText: 'Hủy',
      onOk: async () => {
        try {
          await axios.delete(`http://localhost:3000/clubs/${id}`);
          setClubs(clubs.filter(club => club.id !== id)); 
          message.success('Xóa câu lạc bộ thành công');
        } catch (error) {
          message.error('Lỗi khi xóa câu lạc bộ');
        }
      },
    });
  };

  const handleEdit = (id: number) => {
    navigate(`/admin/clubs/edit/${id}`);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="text-danger">{error}</div>;
  }

  return (
    <div>
      <h1>Danh sách câu lạc bộ</h1>
      <Table
        dataSource={clubs}
        rowKey="id"
        columns={[
          { title: 'ID', dataIndex: 'id', key: 'id' },
          { title: 'Tên câu lạc bộ', dataIndex: 'titles', key: 'titles' },
          { title: 'Thành phố', dataIndex: 'city', key: 'city' },
          { title: 'Số danh hiệu', dataIndex: 'cup', key: 'cup' },
          {
            title: 'Hình ảnh',
            dataIndex: 'image',
            key: 'image',
            render: (image: string) => <img src={image} alt="Club Logo" width={50} />,
          },
          {
            title: 'Hành động',
            key: 'action',
            render: (_, record) => (
              <>
                <Button 
                  type="primary" 
                  onClick={() => handleEdit(record.id)} 
                  style={{ marginRight: 8 }}
                >
                  Sửa
                </Button>
                <Button 
                  type="primary" 
                  danger 
                  onClick={() => handleDelete(record.id)}
                >
                  Xóa
                </Button>
              </>
            ),
          },
        ]}
      />
    </div>
  );
};

export default ClubList;
