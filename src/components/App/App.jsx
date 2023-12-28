import HomePage from 'pages/HomePage/HomePage';
import LoginPage from 'pages/LoginPage/LoginPage';
import SignUpPage from 'pages/SignUpPage/SignUpPage';
import { Route, Routes } from 'react-router-dom';
import PhonebookPage from 'pages/PhonebookPage/PhonebookPage';
import Layout from 'components/Layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { refreshThunk } from '../../redux/auth/operations';
import { PrivateRoute } from '../../guards/PrivateRoute';
import { PublicRoute } from '../../guards/PublicRoute';
import { selectError, selectIsRefreshing } from '../../redux/auth/selectors';
import Loader from 'components/Loader/Loader';
import { toast } from 'react-toastify';
import NotFound from 'components/NotFound/NotFound';

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(refreshThunk());
    if (error) {
      toast(error);
    }
  }, [dispatch, error]);
  return isRefreshing ? (
    <Loader />
  ) : (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />}></Route>
          <Route
            path="login"
            element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            }
          ></Route>
          <Route
            path="register"
            element={
              <PublicRoute>
                <SignUpPage />
              </PublicRoute>
            }
          ></Route>
          <Route
            path="contacts"
            element={
              <PrivateRoute>
                <PhonebookPage />
              </PrivateRoute>
            }
          ></Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
