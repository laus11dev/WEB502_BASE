import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { RegisterFormValues } from '../interfaces/userInterfaces';

const Register: React.FC = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm<RegisterFormValues>();

  const onSubmit = async (dataInput: RegisterFormValues) => {
    try {
      const { data } = await axios.post('http://localhost:3000/register', dataInput);
      if (data) {
        toast.success('Đăng ký thành công');
        navigate('/login'); 
      }
    } catch (error: any) {
      toast.error(error.response?.data || 'Đăng ký không thành công');
    }
  };

  return (
    <div>
      <h1>Đăng ký</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        
        {/* Email */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            {...register('email', {
              required: 'Email là bắt buộc',
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: 'Sai định dạng email'
              }
            })}
          />
          {errors?.email && <span className="text-danger">{errors?.email?.message}</span>}
        </div>

        {/* Password */}
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Mật khẩu</label>
          <input
            type="password"
            className="form-control"
            id="password"
            {...register('password', {
              required: 'Mật khẩu là bắt buộc',
              minLength: {
                value: 6,
                message: 'Mật khẩu phải có ít nhất 6 ký tự'
              }
            })}
          />
          {errors?.password && <span className="text-danger">{errors?.password?.message}</span>}
        </div>

        {/* Xác nhận mật khẩu */}
        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">Xác nhận mật khẩu</label>
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            {...register('confirmPassword', {
              required: 'Xác nhận mật khẩu là bắt buộc',
              validate: value =>
                value === watch('password') || 'Mật khẩu không khớp'
            })}
          />
          {errors?.confirmPassword && <span className="text-danger">{errors?.confirmPassword?.message}</span>}
        </div>

        <button type="submit" className="btn btn-primary">
          Đăng ký
        </button>
      </form>
    </div>
  );
};

export default Register;
