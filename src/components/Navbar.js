import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

import useAuth from '../AuthContext';

const Navbar = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  return (
    <div style={{ display: 'flex', flexDirection: 'row', zIndex: '2000' }}>
      <div>
        <Link to='/'>HOME</Link>|{" "}
        <Link to='/balance'>Balance</Link>|{" "}
        <Link to='/newfd'>New FD</Link>|{" "}
        <Link to='/transferfunds'>Transfer Funds</Link>|{" "}
        <Link to='/changepin'>Change Pin</Link>
      </div>
      {" "}
      {auth.isAuthenticated ?
        <button onClick={e => { auth.setIsAuthenticated(false); navigate('/'); }}>
          Log out
        </button>
        :
        <button onClick={e => navigate('/login')}>
          Log In
        </button>
      }
    </div>
  );
};

export default Navbar;