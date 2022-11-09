import React, { useState, useEffect, useRef } from 'react';
import validator from 'validator';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import FormHeader from './FormHeader';

import useAppContext from '../AppStateContext';
import { changeATMPIN } from '../service/api';

const ChangePin = () => {
  const navigate = useNavigate();
  const { user } = useAppContext();
  const toastId = useRef(null);

  const [data, setData] = useState({
    oldPin: "",
    newPin: "",
    confirmNewPin: "",
  });

  const [loading, setLoading] = useState(false);

  const onChangeHandler = (e) => setData({ ...data, [e.target.name]: e.target.value });

  const checkValidations = (string) =>
    [validator.isNumeric, (str) => str.length === 4].reduce((preVal, func) => preVal && func(string), true);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (!data.oldPin || !data.newPin || !data.confirmNewPin) return toast.error("PIN should not be empty");
    if (!checkValidations(data.oldPin) || !checkValidations(data.newPin) || !checkValidations(data.confirmNewPin))
      return toast.error("PINs should be 4 characters long");
    if (data.newPin == data.oldPin) return toast.error("New PIN should be different than old PIN");
    if (data.newPin !== data.confirmNewPin) return toast.error("New PINS dont match");

    toastId.current = toast.loading("Changing ATM PIN...");
    setLoading(true);

    const { type, render } = await changeATMPIN(user.id, data.oldPin, data.newPin);

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

  return (
    // <Grid
    //   container
    //   direction="column"
    //   alignItems="center"
    //   justifyContent="center"
    //   spacing={5}>
    //   <Grid item sx={{ marginTop: '1rem', width: '100%' }}>
    //     <Typography variant="h3" align="center">
    //       Change ATM Pin
    //     </Typography>
    //   </Grid>

    //   <Grid item xs={12} alignItems="center">
    //     <TextField
    //       required
    //       label="Old PIN"
    //       variant="standard"
    //       name="oldPin"
    //       onChange={onChangeHandler}
    //       value={data.oldPin}
    //       sx={{ display: 'block' }}
    //     />
    //   </Grid>

    //   <Grid item xs={12}>
    //     <TextField
    //       required
    //       label="New Pin"
    //       variant="standard"
    //       name="newPin"
    //       value={data.newPin}
    //       onChange={onChangeHandler}
    //       sx={{ display: 'block' }}
    //     />
    //   </Grid>

    //   <Grid item xs={12}>
    //     <TextField
    //       required
    //       label="Confirm New PIN"
    //       variant="standard"
    //       name="confirmNewPin"
    //       value={data.confirmNewPin}
    //       onChange={onChangeHandler}
    //       sx={{ display: 'block' }}
    //     />
    //   </Grid>

    //   <Grid item xs={12}>
    //     <Button variant="contained"
    //       onClick={onSubmitHandler}
    //       disabled={loading}>Change</Button>
    //   </Grid>
    // </Grid >
    <div className="forms">
      <FormHeader title="Change PIN" />
      <div>
        <form onSubmit={onSubmitHandler}>
          <div className="row">
            <label>Old PIN</label>
            <input required type="text" placeholder="Enter old PIN"
              name="oldPin"
              onChange={onChangeHandler}
              value={data.oldPin} />
          </div>

          <div className="row">
            <label>New PIN</label>
            <input required type="text" placeholder="Enter new PIN"
              name="newPin"
              value={data.newPin}
              onChange={onChangeHandler} />
          </div>

          <div className="row">
            <label>Re-enter new PIN</label>
            <input required placeholder="Re-enter new PIN"
              type="text"
              name="confirmNewPin"
              value={data.confirmNewPin}
              onChange={onChangeHandler} />
          </div>

          <div id="button" className="row">
            <button>Change ATM PIN</button>

          </div>
        </form>

      </div>
    </div>
  );
};

export default ChangePin;