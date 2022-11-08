import React from 'react';
import { Navigate } from 'react-router-dom';

import useAppContext from '../AppStateContext';

const PrivateRoute = ({ children }) => {
  const auth = useAppContext();

  return auth.isAuthenticated ? children : <Navigate to='/login' />;
  // return children; FOR DEV
};

export default PrivateRoute;