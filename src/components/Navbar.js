import * as React from 'react';
import useAppContext from '../AppStateContext';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { useNavigate, Link } from 'react-router-dom';


// Navbar component that contains the routes to all the components

function Navbar() {
  const auth = useAppContext();
  const navigate = useNavigate();

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
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
            VERTEX BANK GROUP
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
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
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
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
            VERTEX BANK GROUP
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Link to='/balance'>
              <Button
                key='balance_history'
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block', fontSize: 14 }}
              >
                Balance and History
              </Button>
            </Link>

            <Link to='/transferfunds'>
              <Button
                key='transfer_funds'
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block', fontSize: 14 }}
              >
                Transfer funds
              </Button>
            </Link>

            <Link to='/newfd'>
              <Button
                key='new_FD'
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block', fontSize: 14 }}
              >
                New FD
              </Button>
            </Link>

            <Link to='/newcheckbook'>
              <Button
                key='request_checkbook'
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block', fontSize: 14 }}
              >
                New checkbook
              </Button>
            </Link>

            <Link to='/events'>
              <Button
                key='events'
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block', fontSize: 14 }}
              >
                Events
              </Button>
            </Link>

            <Link to='/changepin'>
              <Button
                key='change_pin'
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block', fontSize: 14 }}
              >
                CHANGEPIN
              </Button>
            </Link>



            {
              (auth.isAuthenticated || auth.issocialAuthenticated) ?
                (<Button
                  key='logout'
                  onClick={e => { auth.setIsAuthenticated(false); auth.setIssocialAuthenticated(false); navigate('/'); }}
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
          </Box >
        </Toolbar >
      </Container >
    </AppBar >
  );
}
export default Navbar;
