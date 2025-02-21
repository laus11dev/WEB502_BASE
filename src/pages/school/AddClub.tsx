import React from 'react';
import { useForm } from 'react-hook-form';
import axios, { AxiosError } from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { FormValues } from '../../interfaces/clubInterfaces';

const AddClub: React.FC = () => {
  const navigate = useNavigate();
  
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    try {
      await axios.post('http://localhost:3000/clubs', data);
      toast.success('Thêm câu lạc bộ thành công');
      navigate('/admin/clubs');
    } catch (error) {
      toast.error((error as AxiosError).message);
    }
  };

  return (
    <div>
      <h1>Thêm câu lạc bộ</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        
        <div className="mb-3">
          <label htmlFor="titles" className="form-label">Tên câu lạc bộ</label>
          <input
            type="text"
            className="form-control"
            id="titles"
            {...register("titles", {
              required: "Tên câu lạc bộ không được để trống",
              minLength: {
                value: 6,
                message: "Tên câu lạc bộ phải có ít nhất 6 ký tự"
              }
            })}
          />
          {errors?.titles && <span className="text-danger">{errors?.titles?.message}</span>}
        </div>

        <div className="mb-3">
          <label htmlFor="city" className="form-label">Thành phố</label>
          <select
            className="form-select"
            id="city"
            {...register("city", { required: "Thành phố không được để trống" })}
          >
            <option value="">Chọn thành phố</option>
            <option value="Manchester">Manchester</option>
            <option value="London">London</option>
            <option value="Liverpool">Liverpool</option>
          </select>
          {errors?.city && <span className="text-danger">{errors?.city?.message}</span>}
        </div>

        <div className="mb-3">
          <label htmlFor="image" className="form-label">Hình ảnh</label>
          <input
            type="text"
            className="form-control"
            id="image"
            {...register("image", { required: "Hình ảnh không được để trống" })}
          />
          {errors?.image && <span className="text-danger">{errors?.image?.message}</span>}
        </div>

        <div className="mb-3">
          <label htmlFor="cup" className="form-label">Số danh hiệu</label>
          <input
            type="number"
            className="form-control"
            id="cup"
            {...register("cup", {
              required: "Số cup không được để trống",
              min: {
                value: 0,
                message: "Số cup không được âm"
              }
            })}
          />
          {errors?.cup && <span className="text-danger">{errors?.cup?.message}</span>}
        </div>

        <button type="submit" className="btn btn-primary">Thêm câu lạc bộ</button>
      </form>
    </div>
  );
};

export default AddClub;
