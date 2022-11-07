import React, { useState } from 'react';
import validator from 'validator';
import { toast } from 'react-toastify';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const ChangePin = () => {
  const [data, setData] = useState({
    oldPin: "",
    newPin: "",
    confirmNewPin: "",
  });

  const onChangeHandler = (e) => setData({ ...data, [e.target.name]: e.target.value });

  const checkValidations = (string) =>
    [validator.isNumeric, (str) => str.length === 4].reduce((preVal, func) => preVal && func(string), true);

  const onSubmitHandler = (e) => {
    if (!data.oldPin || !data.newPin || !data.confirmNewPin) return toast.error("PIN should not be empty");
    if (!checkValidations(data.oldPin) || !checkValidations(data.newPin) || !checkValidations(data.confirmNewPin))
      return toast.error("PIN should only be 4 characters long");
    if (data.newPin == data.oldPin) return toast.error("New PIN should be different than old PIN");
    if (data.newPin !== data.confirmNewPin) return toast.error("New PINS dont match");
    return toast.success("Changed PIN Successfully");
  };

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      spacing={5}>
      <Grid item sx={{ marginTop: '1rem', width: '100%' }}>
        <Typography variant="h3" align="center">
          Change ATM Pin
        </Typography>
      </Grid>

      <Grid item xs={12} alignItems="center">
        <TextField
          required
          label="Old PIN"
          variant="standard"
          name="oldPin"
          onChange={onChangeHandler}
          value={data.oldPin}
          sx={{ display: 'block' }}
        />
      </Grid>

      <Grid item xs={12}>
        <TextField
          required
          label="New Pin"
          variant="standard"
          name="newPin"
          value={data.newPin}
          onChange={onChangeHandler}
          sx={{ display: 'block' }}
        />
      </Grid>

      <Grid item xs={12}>
        <TextField
          required
          label="Confirm New PIN"
          variant="standard"
          name="confirmNewPin"
          value={data.confirmNewPin}
          onChange={onChangeHandler}
          sx={{ display: 'block' }}
        />
      </Grid>

      <Grid item xs={12}>
        <Button variant="contained"
          onClick={onSubmitHandler}>Change</Button>
      </Grid>
    </Grid >
  );
};

export default ChangePin;