import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { loginThunk } from '../../redux/auth/operations';
import { toast } from 'react-toastify';
import { Container } from 'pages/SignUpPage/SignUpPage.styled';

const LoginPage = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const submit = data => {
    dispatch(loginThunk(data))
      .unwrap()
      .then(res => {
        toast.success(`Welcome ${res.user.name}`);
      });
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(submit)}>
        <label htmlFor="">
          <span>Email</span>
          <input {...register('email')} type="email" required />
        </label>
        <label htmlFor="">
          <span>Password</span>
          <input {...register('password')} type="password" required />
        </label>
        <button>Log In</button>
      </form>
    </Container>
  );
};

export default LoginPage;
