import React, { useState, useRef } from 'react';
import validator from 'validator';
import { toast } from 'react-toastify';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import { FormControl, Select, InputLabel, MenuItem, FormGroup, FormControlLabel, Checkbox, Button } from '@mui/material';

import FormHeader from './FormHeader';

import useAppState from '../AppStateContext';
import { transferFunds, getCurrentUser } from '../service/api';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const TransferFunds = () => {
  const navigate = useNavigate();
  const { user, allUsers } = useAppState();
  const toastId = useRef(null);

  const [data, setData] = useState({
    fromAccNo: "",
    beneficiary: "",
    beneficiaryAccNo: "Please Select Beneficiary",
    beneficiaryIFSC: "IFSC",
    accountType: "",
    amount: "",
    remarks: ""
  });

  const [loading, setLoading] = useState(false);

  const [checkbox, setCheckbox] = useState(false);

  useEffect(() => {
    (async () => {
      const response = await getCurrentUser(user.id);
      setData({ ...data, fromAccNo: response.accno, accountType: response.acctype });
    })();
  }, []);

  const onChangeHandler = (e) => setData({ ...data, [e.target.name]: e.target.value });

  const onBeneficiaryChange = (e) => {
    const user = allUsers.find(user => user.id === Number(e.target.value));
    setData({ ...data, beneficiary: user.id, beneficiaryAccNo: user.accno, beneficiaryIFSC: "IFSC", beneficiaryAccType: user.acctype });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (!validator.isNumeric(data.fromAccNo) || !validator.isNumeric(data.beneficiaryAccNo)) return toast.error("Invalid Account Number");
    if (!data.beneficiary) return toast.error("Please Select Beneficiary");
    if (!data.accountType) return toast.error("Please Select Account Type");
    if (!validator.isAlphanumeric(data.beneficiaryIFSC)) return toast.error("Invalid Beneficiary IFSC Code");
    if (!validator.isNumeric(data.amount)) return toast.error("Invalid Amount");
    if (!data.remarks) return toast.error("Invalid Remarks");
    if (!checkbox) return toast.error("Please agree to terms and conditions");

    toastId.current = toast.loading("Transacting...");
    setLoading(true);

    const { type, render } = await transferFunds({ ...data, fromUserId: user.id });

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
    <div className="forms">
      <FormHeader title="Transfer Funds" />
      <div>
        <form onSubmit={onSubmitHandler}>
          <div className="row">
            <label>From Account Number</label>
            <input disbaled
              required
              type="text"
              placeholder="From Account Number"
              value={data.fromAccNo}
              name="fromAccNo"
              onChange={onChangeHandler} />
          </div>

          <div className="row">
            <label>Beneficiary</label>
            <select value={data.beneficiary}
              name="beneficiary"
              onChange={onBeneficiaryChange}>
              <option value={0}>Select your Beneficiary</option>
              {allUsers
                .filter(({ id }) => user.id !== id)
                .map((user) => <option key={user.id} value={user.id}>{user.firstname}</option>)}
            </select>
          </div>

          <div className="row">
            <label>Beneficiary Account Number</label>
            <input required
              disabled type="text"
              value={data.beneficiaryAccNo}
              name="beneficiaryAccNo"
              onChange={onChangeHandler} />
          </div>

          <div className="row">
            <label>Beneficiary IFSC Code</label>
            <input required type="text" placeholder="Enter your City" disabled
              value={data.beneficiaryIFSC}
              name="beneficiaryIFSC"
              onChange={onChangeHandler} />
          </div>

          <div className="row">
            <label>Account Type</label>
            <input required type="text" disabled placeholder="Enter your Pincode"
              value={data.accountType}
              name="accountType"
              onChange={onChangeHandler} />
          </div>

          <div className="row">
            <label>Amount</label>
            <input required type="textarea" value={data.amount}
              name="amount"
              onChange={onChangeHandler}
              placeholder={"Enter Amount"} />
          </div>

          <div className="row">
            <label>Amount</label>
            <input required type="textarea"
              value={data.remarks}
              name="remarks"
              onChange={onChangeHandler}
              placeholder="Enter Remarks" />
          </div>

          <div className="row">
            <label>Please agree to the terms and conditions</label>
            <input required
              value={checkbox}
              name="checkbox"
              type={"checkbox"}
              onChange={e => setCheckbox(e.target.checked)}
              placeholder="Enter Remarks" />
          </div>

          <div id="button" className="row">
            <button>Transfer Funds</button>

          </div>
        </form>

      </div>
    </div>
  );
};

export default TransferFunds;