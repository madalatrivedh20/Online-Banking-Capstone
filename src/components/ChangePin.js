import React, { useState, useEffect, useRef } from 'react';
import validator from 'validator';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';import FormHeader from './FormHeader';

import useAppContext from '../AppStateContext';
import { changeATMPIN } from '../service/api';

//Function called to change the pin of the user logged in
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

  //Validate the entered pin
  const checkValidations = (string) =>
    [validator.isNumeric, (str) => str.length === 4].reduce((preVal, func) => preVal && func(string), true);
    
  //Function invoked on submitting the request. Performs the validation and completes the request
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