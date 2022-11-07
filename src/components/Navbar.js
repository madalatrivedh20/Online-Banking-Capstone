// import React from 'react';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { Container, Typography, Toolbar, Box, IconButton, Menu, Button } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import AdbIcon from '@mui/icons-material/Adb';


const Navbar = () => {

  return (
    <AppBar position="static">
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
              <MenuIcon />
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
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button
              key='balance_history'
              href='/balance'
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Balance and History
            </Button>

            <Button
              key='transfer_funds'
              href='/transferfunds'
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Transfer funds
            </Button>

            <Button
              key='new_FD'
              href='newfd'
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              New FD
            </Button>


            <Button
              key='request_checkbook'
              href='/requestcheckbook'
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              New checkbook
            </Button>

          </Box>
        </Toolbar>
      </Container>
    </AppBar >
  );
};

export default Navbar;