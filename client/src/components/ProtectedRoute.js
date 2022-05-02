import React from 'react';
import { Navigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { user, user1 } = UserAuth();

  if (!user & !user1) {
    return <Navigate to='/' />;
  }
  return children;
};

export default ProtectedRoute;