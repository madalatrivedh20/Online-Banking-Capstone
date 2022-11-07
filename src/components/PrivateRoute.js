import React from 'react';
import { Navigate } from 'react-router-dom';

import useAuth from '../AuthContext';

const PrivateRoute = ({ children }) => {
  const auth = useAuth();

  return auth.isAuthenticated ? children : <Navigate to='/login' />;
  // return children; FOR DEV
};

export default PrivateRoute;