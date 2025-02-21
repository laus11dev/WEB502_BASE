import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { LoginFormValues } from '../interfaces/userInterfaces';

const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>();
  const navigate = useNavigate();

  const onSubmit = async (dataInput: LoginFormValues) => {
    try {
      const { data } = await axios.post('http://localhost:3000/login', dataInput);
      if (data) {
        localStorage.setItem('token', data.accessToken); 
        toast.success('Đăng nhập thành công');
        navigate('/'); 
      }
    } catch (error: any) {
      toast.error(error.response?.data || 'Đăng nhập không thành công');
    }
  };

  return (
    <div>
      <h1>Đăng nhập</h1>
      <form onSubmit={handleSubmit(onSubmit)}>

        {/* Email */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            {...register('email', {
              required: 'Không để trống email',
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
              required: 'Không để trống mật khẩu',
              minLength: {
                value: 6,
                message: 'Mật khẩu phải có ít nhất 6 ký tự'
              }
            })}
          />
          {errors?.password && <span className="text-danger">{errors?.password?.message}</span>}
        </div>

        <button type="submit" className="btn btn-primary">
          Đăng nhập
        </button>
      </form>
    </div>
  );
};

export default Login;
