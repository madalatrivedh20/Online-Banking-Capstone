
// To provide access to the user only if he/she logs in through credentials or social media account
 
import React from 'react';
import { Navigate } from 'react-router-dom';

import useAppContext from '../AppStateContext';

const SocialRoute = ({ children }) => {
  const auth = useAppContext();

  return (auth.issocialAuthenticated || auth.isAuthenticated) ? children : <Navigate to='/login' />;
  // return children; FOR DEV
};

export default SocialRoute;