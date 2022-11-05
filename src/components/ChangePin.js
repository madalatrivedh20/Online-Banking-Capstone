import React from 'react';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const ChangePin = () => {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      spacing={5}>
      <Grid item sx={{ marginTop: '1rem', width: '100%' }} F>
        <Typography variant="h3" align="center">
          Change ATM Pin
        </Typography>
      </Grid>

      <Grid item xs={12} alignItems="center">
        <TextField
          required
          label="Old PIN"
          variant="standard"
          sx={{ display: 'block' }}
        />
      </Grid>

      <Grid item xs={12}>
        <TextField
          required
          label="New Pin"
          variant="standard"
          sx={{ display: 'block' }}
        />
      </Grid>

      <Grid item xs={12}>
        <TextField
          required
          label="Confirm New PIN"
          variant="standard"
          sx={{ display: 'block' }}
        />
      </Grid>

      <Grid item xs={12}>
        <Button variant="contained">Change</Button>
      </Grid>
    </Grid>
  );
};

export default ChangePin;