import React, { useState, useRef } from 'react';
import validator from 'validator';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { FormControl, Select, InputLabel, MenuItem, FormGroup, FormControlLabel, Checkbox, Button } from '@mui/material';

import { createFD } from '../service/api';
import useAppContext from '../AppStateContext';

const NewFD = () => {
  const navigate = useNavigate();
  const { user } = useAppContext();
  const toastId = useRef(null);

  const [data, setData] = useState({
    accNo: user.accno,
    FDProduct: "",
    FDPeriod: "",
    amount: ""
  });

  const [checkbox, setCheckbox] = useState(false);

  const [loading, setLoading] = useState(false);

  const onChangeHandler = (e) => setData({ ...data, [e.target.name]: e.target.value });

  const onSubmitHandler = async (e) => {
    if (!validator.isNumeric(data.accNo)) return toast.error("Invalid Account Number");
    if (!data.FDProduct) return toast.error("Please select FD Product");
    if (!data.FDPeriod) return toast.error("Please select FD Period");
    if (!validator.isNumeric(data.amount)) return toast.error("Invalid Amount");
    if (!checkbox) return toast.error("Please agree to terms and conditions");
    // if (Number(data.amount) > Number(user.balance)) return toast.error("You have insufficient balance!");

    toastId.current = toast.loading("Creating Fixed Deposit...");
    const { type, render } = await createFD({ ...data, userId: user.id, accno: user.accno, acctype: user.acctype });

    toast.update(toastId.current, {
      type,
      render,
      isLoading: false,
      autoClose: 5000,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });

    if (type === "success") {
      return navigate("/balance");
    } else {
      setLoading(false);
    }
  };
  ;

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
          disabled
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
            <MenuItem value={"Standard"}>Standard</MenuItem>
            <MenuItem value={"Corporate"}>Corporate</MenuItem>
            <MenuItem value={"Cumulative"}>Cumulative</MenuItem>
            <MenuItem value={"Tax-Saving"}>Tax-Saving</MenuItem>
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
            <MenuItem value={"3 Months"}>3 Months</MenuItem>
            <MenuItem value={"6 Months"}>6 Months</MenuItem>
            <MenuItem value={"9 Months"}>9 Months</MenuItem>
            <MenuItem value={"12 Months"}>12 Months</MenuItem>
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
          <FormControlLabel
            control={
              <Checkbox
                required
                checked={checkbox}
                onChange={e => setCheckbox(e.target.checked)} />
            }
            label="I have read and accepted the terms and conditions" />
        </FormGroup>
      </Grid>

      <Grid item xs={12}>
        <Button variant="contained" onClick={onSubmitHandler} disabled={loading}>Register</Button>
      </Grid>
    </Grid>
  );
};

export default NewFD;