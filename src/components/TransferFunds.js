import React from 'react';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import { FormControl, Select, InputLabel, MenuItem, FormGroup, FormControlLabel, Checkbox, Button } from '@mui/material';

const TransferFunds = () => {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      spacing={5}>
      <Grid item sx={{ marginTop: '1rem', width: '100%' }} F>
        <Typography variant="h3" align="center">
          Fund Transfer
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
          <InputLabel id="demo-simple-select-label">Beneficiary</InputLabel>
          <Select
            label="Beneficiary"
          >
            <MenuItem value={10}>Beneficiary 1</MenuItem>
            <MenuItem value={20}>Beneficiary 2</MenuItem>
            <MenuItem value={30}>Beneficiary 3</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={12} alignItems="center">
        <TextField
          required
          label="Beneficiary Account"
          variant="standard"
          sx={{ display: 'block' }}
        />
      </Grid>

      <Grid item xs={12} alignItems="center">
        <TextField
          required
          label="Beneficiary IFSC Code"
          variant="standard"
          sx={{ display: 'block' }}
        />
      </Grid>

      <Grid item xs={12} sx={{ minWidth: '250px' }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Account Type</InputLabel>
          <Select
            label="Account Type"
          >
            <MenuItem value={10}>Account Type 1</MenuItem>
            <MenuItem value={20}>Account Type 2</MenuItem>
            <MenuItem value={30}>Account Type 3</MenuItem>
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
        <TextField
          required
          label="Remarks"
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

export default TransferFunds;