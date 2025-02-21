import React, { useEffect, useState } from 'react';
import axios, { AxiosError } from 'axios';
import toast from 'react-hot-toast';
import { Club } from '../interfaces/clubInterfaces';

const ClubListClient: React.FC = () => {
  const [clubs, setClubs] = useState<Club[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  
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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="text-danger">{error}</div>;
  }

  return (
    <div>
      <h1>Danh sách câu lạc bộ</h1>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên câu lạc bộ</th>
            <th>Thành phố</th>
            <th>Số danh hiệu</th>
            <th>Logo</th>
          </tr>
        </thead>
        <tbody>
          {clubs.map((club) => (
            <tr key={club.id}>
              <td>{club.id}</td>
              <td>{club.titles}</td>
              <td>{club.city}</td>
              <td>{club.cup}</td>
              <td>
                <img src={club.image} alt={club.titles} width={50} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClubListClient;
