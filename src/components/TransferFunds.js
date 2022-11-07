import React, { useState } from 'react';
import validator from 'validator';
import { toast } from 'react-toastify';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import { FormControl, Select, InputLabel, MenuItem, FormGroup, FormControlLabel, Checkbox, Button } from '@mui/material';

const TransferFunds = () => {
  const [data, setData] = useState({
    fromAccNo: "",
    beneficiary: "",
    beneficiaryAccNo: "",
    beneficiaryIFSC: "",
    accountType: "",
    amount: "",
    remarks: "",
    checkbox: false
  });

  const onChangeHandler = (e) => setData({ ...data, [e.target.name]: e.target.value });

  const onClickHandler = (e) => {
    if (!validator.isNumeric(data.fromAccNo) || !validator.isNumeric(data.beneficiaryAccNo)) return toast.error("Invalid Account Number");
    if (!data.beneficiary) return toast.error("Please Select Beneficiary");
    if (!data.accountType) return toast.error("Please Select Account Type");
    if (!validator.isAlphanumeric(data.beneficiaryIFSC)) return toast.error("Invalid Beneficiary IFSC Code");
    if (!validator.isNumeric(data.amount)) return toast.error("Invalid Amount");
    if (!validator.isAlpha(data.remarks)) return toast.error("Invalid Remarks");
    if (!data.checkbox) return toast.error("Please agree to terms and conditions");
    setData({
      fromAccNo: "",
      beneficiary: "",
      beneficiaryAccNo: "",
      beneficiaryIFSC: "",
      accountType: "",
      amount: "",
      remarks: "",
      checkbox: false
    });
    return toast.success("Fund Transferred");
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
          Fund Transfer
        </Typography>
      </Grid>

      <Grid item xs={12} alignItems="center">
        <TextField
          required
          label="From Account"
          variant="standard"
          value={data.fromAccNo}
          name="fromAccNo"
          onChange={onChangeHandler}
          sx={{ display: 'block' }}
        />
      </Grid>

      <Grid item xs={12} sx={{ minWidth: '250px' }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Beneficiary</InputLabel>
          <Select
            label="Beneficiary"
            value={data.beneficiary}
            name="beneficiary"
            onChange={onChangeHandler}
          >
            <MenuItem value={"beneficiary-1"}>Beneficiary 1</MenuItem>
            <MenuItem value={"beneficiary-2"}>Beneficiary 2</MenuItem>
            <MenuItem value={"beneficiary-3"}>Beneficiary 3</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={12} alignItems="center">
        <TextField
          required
          label="Beneficiary Account Number"
          variant="standard"
          value={data.beneficiaryAccNo}
          name="beneficiaryAccNo"
          onChange={onChangeHandler}
          sx={{ display: 'block' }}
        />
      </Grid>

      <Grid item xs={12} alignItems="center">
        <TextField
          required
          label="Beneficiary IFSC Code"
          variant="standard"
          value={data.beneficiaryIFSC}
          name="beneficiaryIFSC"
          onChange={onChangeHandler}
          sx={{ display: 'block' }}
        />
      </Grid>

      <Grid item xs={12} sx={{ minWidth: '250px' }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Account Type</InputLabel>
          <Select
            label="Account Type"
            value={data.accountType}
            name="accountType"
            onChange={onChangeHandler}
          >
            <MenuItem value={"account-type-1"}>Account Type 1</MenuItem>
            <MenuItem value={"account-type-2"}>Account Type 2</MenuItem>
            <MenuItem value={"account-type-3"}>Account Type 3</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={12}>
        <TextField
          required
          label="Amount"
          type="number"
          variant="standard"
          value={data.amount}
          name="amount"
          onChange={onChangeHandler}
          sx={{ display: 'block' }}
        />
      </Grid>

      <Grid item xs={12}>
        <TextField
          required
          label="Remarks"
          variant="standard"
          value={data.remarks}
          name="remarks"
          onChange={onChangeHandler}
          sx={{ display: 'block' }}
        />
      </Grid>

      <Grid item xs={12}>
        <FormGroup>
          <FormControlLabel control={<Checkbox
            value={data.checkbox}
            onChange={e => setData({ ...data, checkbox: e.target.checked })} />}
            label="I have read and accepted the terms and conditions" />
        </FormGroup>
      </Grid>

      <Grid item xs={12}>
        <Button variant="contained" onClick={onClickHandler}>Register</Button>
      </Grid>
    </Grid>
  );
};

export default TransferFunds;