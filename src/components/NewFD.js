import React from 'react';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import { FormControl, Select, InputLabel, MenuItem, FormGroup, FormControlLabel, Checkbox, Button } from '@mui/material';

const NewFD = () => {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      spacing={5}>
      <Grid item sx={{ marginTop: '1rem', width: '100%' }} F>
        <Typography variant="h3" align="center">
          Fixed Deposit
        </Typography>
      </Grid>

      <Grid item xs={12} alignItems="center">
        <TextField
          required
          label="From Account"
          variant="standard"
          sx={{ display: 'block' }}
        />
      </Grid>

      <Grid item xs={12} sx={{ minWidth: '250px' }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">FD Product</InputLabel>
          <Select
            label="FD Product"
          >
            <MenuItem value={10}>Product 1</MenuItem>
            <MenuItem value={20}>Product 2</MenuItem>
            <MenuItem value={30}>Product 3</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={12} sx={{ minWidth: '250px' }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">FD Period</InputLabel>
          <Select
            label="FD Period"
          >
            <MenuItem value={10}>Period 1</MenuItem>
            <MenuItem value={20}>Period 2</MenuItem>
            <MenuItem value={30}>Period 3</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={12}>
        <TextField
          required
          label="Amount"
          type="number"
          variant="standard"
          sx={{ display: 'block' }}
        />
      </Grid>

      <Grid item xs={12}>
        <FormGroup>
          <FormControlLabel control={<Checkbox />} label="I have read and accepted the terms and conditions" />
        </FormGroup>
      </Grid>

      <Grid item xs={12}>
        <Button variant="contained">Register</Button>
      </Grid>
    </Grid>
  );
};

export default NewFD;