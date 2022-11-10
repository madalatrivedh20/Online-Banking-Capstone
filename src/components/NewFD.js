import React, { useState, useRef } from 'react';
import validator from 'validator';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import FormHeader from './FormHeader';
import { createFD } from '../service/api';
import useAppContext from '../AppStateContext';


// Component to create new FD and update the balance

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


  // Function invoked on submission of the form with the details of the deposit

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (!validator.isNumeric(data.accNo)) return toast.error("Invalid Account Number");
    if (!data.FDProduct) return toast.error("Please select FD Product");
    if (!data.FDPeriod) return toast.error("Please select FD Period");
    if (!validator.isNumeric(data.amount)) return toast.error("Invalid Amount");
    if (!checkbox) return toast.error("Please agree to terms and conditions");


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
    <div className="forms">
      <FormHeader title="Fixed Deposit" />
      <div>
        <form onSubmit={onSubmitHandler}>
          <div className="row">
            <label>From Account</label>
            <input required type="text" placeholder="Enter your account no" name="accNo"
              disabled
              onChange={onChangeHandler}
              value={data.accNo} />
          </div>

          <div className="row">
            <label>FD Type</label>
            <select value={data.FDProduct}
              placeholder="Select FD Type"
              onChange={onChangeHandler}
              name="FDProduct">
              <option value={""}>Select FD Type</option>
              <option value={"Standard"}>Standard</option>
              <option value={"Corporate"}>Corporate</option>
              <option value={"Cumulative"}>Cumulative</option>
              <option value={"Tax-Saving"}>Tax-Saving</option>
            </select>
          </div>

          <div className="row">
            <label>FD Period</label>
            <select value={data.FDPeriod}
              placeholder="Select FD Period"
              onChange={onChangeHandler}
              name="FDPeriod">
              <option value={""}>Select FD Period</option>
              <option value={"3 Months"}>3 Months</option>
              <option value={"6 Months"}>6 Months</option>
              <option value={"9 Months"}>9 Months</option>
              <option value={"12 Months"}>12 Months</option>
            </select>
          </div>

          <div className="row">
            <label>Amount</label>
            <input required
              type="text"
              name="amount"
              onChange={onChangeHandler}
              placeholder="Enter amounr"
              value={data.amount} />
          </div>

          <div className="row" style={{ flexDirection: "row" }}>
            <input required
              style={{ display: "inline", width: "min-content", marginLeft: '50px' }}
              value={checkbox}
              name="checkbox"
              id="checkbox"
              type={"checkbox"}
              onChange={e => setCheckbox(e.target.checked)}
              placeholder="Enter Remarks" />
            <label style={{ paddingLeft: '5px', color: "black" }}>Please agree to the terms and conditions</label>
          </div>

          <div id="button" className="row">
            <button>Create Fixed Deposit</button>

          </div>
        </form>

      </div >
    </div >
  );
};

export default NewFD;