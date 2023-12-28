import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { signUpThunk } from '../../redux/auth/operations';
import { toast } from 'react-toastify';
import { Container } from './SignUpPage.styled';

const SignUpPage = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const submit = data => {
    dispatch(signUpThunk(data))
      .unwrap()
      .then(res => {
        toast.success(`Welcome ${res.user.name}`);
      });
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(submit)}>
        <label htmlFor="">
          <span>Name </span>
          <input {...register('name')} type="text" required />
        </label>
        <label htmlFor="">
          <span>Email </span>
          <input {...register('email')} type="email" required />
        </label>
        <label htmlFor="">
          <span>Password </span>
          <input {...register('password')} type="password" required />
        </label>
        <button>Sign Up</button>
      </form>
    </Container>
  );
};

export default SignUpPage;
