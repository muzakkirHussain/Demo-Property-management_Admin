import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../Store/Store';

const ProtectedRoutes = ({ children }) => {
  const navigate = useNavigate();
  const { token } = useStore((state) => ({
    user: state.user,
    token: state.token,
  }));
  useEffect(() => {
    if (token === '') {
      navigate('/login', { replace: true });
    }
  }, [token]);
  return children;
};

export default ProtectedRoutes;
