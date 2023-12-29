import React from 'react';
import { Navigate } from 'react-router-dom';
import { Dao, CookieDao } from '../utils/dao';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const dao: Dao = new CookieDao();

  const token = dao.read<boolean>('lgg');
  console.log(token);

  const isAuthenticated = token == true;
  console.log(isAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
