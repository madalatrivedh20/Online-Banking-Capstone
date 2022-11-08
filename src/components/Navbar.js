import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Box } from '@mui/system';
import { Button, AppBar, MenuItem, Typography, Container, Toolbar, IconButton, Menu } from '@mui/material';

import useAuth from '../AuthContext';

const Navbar = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  return (
    <div style={{ display: 'flex', flexDirection: 'row', zIndex: '2000' }}>

      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              LOGO
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              >
                {/* <MenuIcon /> */}
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                <MenuItem key='balance_history'>
                  <Typography textAlign="center">Balance and History</Typography>
                </MenuItem>

                <MenuItem key='transfer_funds'>
                  <Typography textAlign="center">Transfer funds</Typography>
                </MenuItem>

                <MenuItem key='new_FD'>
                  <Typography textAlign="center">New FD</Typography>
                </MenuItem>

                <MenuItem key='request_checkbook'>
                  <Typography textAlign="center">Request checkbok</Typography>
                </MenuItem>

              </Menu>
            </Box>

            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              LOGO
            </Typography>
            
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Link to="/about" sx={{ my: 2, color: 'white', display: 'block' }}>Balance and History</Link> 
             {/*  <Button
                key='balance_history'
                href='/balance'
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Balance and History
              </Button> */}

            <Link to="/transferfunds" sx={{ my: 2, color: 'white', display: 'block' }}>Transfer Funds</Link>
    
          {/*   <Link>
              <Button
                key='transfer_funds'
                href='/transferfunds'
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Transfer funds
              </Button>
              </Link> */}
            <Link to="/newfd" sx={{ my: 2, color: 'white', display: 'block' }}>New FD</Link>
            {/*   <Button
                key='new_FD'
                href='newfd'
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                New FD
              </Button> */}

<Link to="/newcheckbook" sx={{ my: 2, color: 'white', display: 'block' }}>New Checkbook</Link>
             {/*  <Button
                key='request_checkbook'
                href='/requestcheckbook'
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                New checkbook
              </Button> */}

            </Box>
          </Toolbar>
        </Container>
      </AppBar >

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