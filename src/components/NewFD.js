import React, { useState } from 'react';
import validator from 'validator';
import { toast } from 'react-toastify';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import { FormControl, Select, InputLabel, MenuItem, FormGroup, FormControlLabel, Checkbox, Button } from '@mui/material';

const NewFD = () => {
  const [data, setData] = useState({
    accNo: "",
    FDProduct: "",
    FDPeriod: "",
    amount: "",
    checkbox: false
  });

  const onChangeHandler = (e) => setData({ ...data, [e.target.name]: e.target.value });

  const onSubmitHandler = (e) => {
    if (!validator.isNumeric(data.accNo)) return toast.error("Invalid Account Number");
    if (!data.FDProduct) return toast.error("Please select FD Product");
    if (!data.FDPeriod) return toast.error("Please select FD Period");
    if (!validator.isNumeric(data.amount)) return toast.error("Invalid Amount");
    if (!data.checkbox) return toast.error("Please agree to terms and conditions");
    setData({
      accNo: "",
      FDProduct: "",
      FDPeriod: "",
      amount: "",
      checkbox: false
    });
    return toast.success("FD Created");
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
          Fixed Deposit
        </Typography>
      </Grid>

      <Grid item xs={12} alignItems="center">
        <TextField
          required
          label="From Account"
          variant="standard"
          name="accNo"
          onChange={onChangeHandler}
          value={data.accNo}
          sx={{ display: 'block' }}
        />
      </Grid>

      <Grid item xs={12} sx={{ minWidth: '250px' }}>
        <FormControl fullWidth>
          <InputLabel
            id="demo-simple-select-label">
            FD Product
          </InputLabel>
          <Select
            label="FD Product"
            onChange={onChangeHandler}
            name="FDProduct"
            value={data.FDProduct}
          >
            <MenuItem value={"product-1"}>Product 1</MenuItem>
            <MenuItem value={"product-2"}>Product 2</MenuItem>
            <MenuItem value={"product-3"}>Product 3</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={12} sx={{ minWidth: '250px' }}>
        <FormControl fullWidth>
          <InputLabel
            id="demo-simple-select-label">
            FD Period
          </InputLabel>
          <Select
            label="FD Period"
            onChange={onChangeHandler}
            name="FDPeriod"
            value={data.FDPeriod}
          >
            <MenuItem value={"period-1"}>Period 1</MenuItem>
            <MenuItem value={"period-2"}>Period 2</MenuItem>
            <MenuItem value={"period-3"}>Period 3</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={12}>
        <TextField
          required
          label="Amount"
          type="number"
          variant="standard"
          name="amount"
          onChange={onChangeHandler}
          value={data.amount}
          sx={{ display: 'block' }}
        />
      </Grid>

      <Grid item xs={12}>
        <FormGroup>
          <FormControlLabel control={<Checkbox
            value={data.checkbox}
            onChange={e => setData({ ...data, checkbox: e.target.checked })} />} label="I have read and accepted the terms and conditions" />
        </FormGroup>
      </Grid>

      <Grid item xs={12}>
        <Button variant="contained" onClick={onSubmitHandler}>Register</Button>
      </Grid>
    </Grid>
  );
};

export default NewFD;