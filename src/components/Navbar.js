import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Box } from '@mui/system';
import { Button, AppBar, MenuItem, Typography, Container, Toolbar, IconButton, Menu } from '@mui/material';

import useAppContext from '../AppStateContext';

const Navbar = () => {
  const auth = useAppContext();
  console.log(auth);
  const navigate = useNavigate();

  return (
    <div style={{ display: 'flex', flexDirection: 'row', zIndex: '2000' }}>

      <AppBar position="fixed">
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
                fontWeight: 600,
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              VERTEX BANK GROUP
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              >

              </IconButton>
              <Menu
                id="menu-appbar"
                open={false}
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
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} className="navLinksContainer">
              <Link to='/balance'>
                <Button
                  key='balance_history'
                  sx={{ my: 2, color: 'white', display: 'block', fontSize: 14 }}
                >
                  Balance and History
                </Button>
              </Link>

              <Link to='/transferfunds'>
                <Button
                  key='transfer_funds'

                  sx={{ my: 2, color: 'white', display: 'block', fontSize: 14 }}
                >
                  Transfer funds
                </Button>
              </Link>

              <Link to='/newfd'>
                <Button
                  key='new_FD'
                  sx={{ my: 2, color: 'white', display: 'block', fontSize: 14 }}
                >
                  New FD
                </Button>
              </Link>

              <Link to='/newcheckbook'>
                <Button
                  key='request_checkbook'
                  sx={{ my: 2, color: 'white', display: 'block', fontSize: 14 }}
                >
                  New checkbook
                </Button>
              </Link>

              <Link to='/changepin'>
                <Button
                  key='change_pin'
                  sx={{ my: 2, color: 'white', display: 'block', fontSize: 14 }}
                >
                  CHANGEPIN
                </Button>
              </Link>

              {" "}
              {
                auth.isAuthenticated ?
                  (<Button
                    key='logout'
                    onClick={e => { auth.setIsAuthenticated(false); navigate('/'); }}
                    sx={{ my: 2, color: 'white', display: 'block', fontSize: 14 }}
                  >
                    Logout
                  </Button>)
                  :
                  (<Link to='/login'>
                    <Button
                      key='change_pin'
                      onClick={e => navigate('/login')}
                      sx={{ my: 2, color: 'white', display: 'block', fontSize: 14 }}
                    >
                      Login
                    </Button>
                  </Link>)
              }

            </Box>
          </Toolbar>
        </Container>
      </AppBar >

      {/* {" "}
      {
        auth.isAuthenticated ?
          (<button onClick={e => { auth.setIsAuthenticated(false); navigate('/'); }}>
            Log out
          </button>)
          :
          (<button onClick={e => navigate('/login')}>
            Log In
          </button>)
      } */}
    </div >
  );
};

export default Navbar;