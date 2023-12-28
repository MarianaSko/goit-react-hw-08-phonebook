import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserEmail } from '../../redux/auth/selectors';
import { logoutThunk } from '../../redux/auth/operations';
import { StyledWrapper } from './UserMenu.styled';

const UserMenu = () => {
  const userEmail = useSelector(selectUserEmail);
  const dispatch = useDispatch();
  return (
    <StyledWrapper>
      <p>{userEmail}</p>
      <button
        onClick={() => {
          dispatch(logoutThunk());
        }}
      >
        Logout
      </button>
    </StyledWrapper>
  );
};

export default UserMenu;
