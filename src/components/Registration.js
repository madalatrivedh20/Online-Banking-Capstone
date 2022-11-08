import '../style/Login.css';
import { React, useState, useEffect } from 'react';
import validator from 'validator';
import pic from '../style/download.png';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';

import { newATMPIN } from '../service/api';
import { genRandomPin } from '../service/util';

const FormHeader = props => (
  <div>
    <div className='imgcontainer'>
      <img src={pic} alt="Avatar" className="avatar"></img>
    </div>
    <h2 id="headerTitle">{props.title}</h2>
  </div>
);

function Registration() {

  const navigate = useNavigate();
  const [data, setData] = useState({
    firstname: "",
    acctype: "",
    accno: "",
    email: "",
    password: "",
    repassword: "",
    sectype: "",
    secans: "",
    balance: "30000"
  });
  const checkemail = '';

  const { username, password } = data;
  let [users, setusers] = useState({});


  const changeHandler = e => {
    setData({ ...data, [e.target.name]: [e.target.value] });

  };

  const getUsers = async () => {
    try {
      const response = await fetch("http://localhost:3000/users/");
      const jsonData = await response.json();
      localStorage.setItem("users", JSON.stringify(jsonData));
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getUsers();
    const users_ls = JSON.parse(localStorage.getItem("users"));
    setusers(users_ls);
  }, []);

  const submitHandler = e => {

    e.preventDefault();
    if (!validator.isAlpha(data['firstname'][0])) return toast.error("Invalid Firsname");
    if (!validator.isAlpha(data['secans'][0])) return toast.error("Invalid Answer");
    if (!validator.isAlpha(data['acctype'][0])) return toast.error("Invalid Account type");
    if (!validator.isNumeric(data['accno'][0])) return toast.error("Invalid Account Number");
    if (!validator.isEmail(data['email'][0])) return toast.error("Please enter a valid Email");

    // CHECK IF ACC NO ALRDY EXISTS

    let email_str = data['email'][0];
    let password_str = data['password'][0];
    let repassword_str = data['repassword'][0];
    let checkemail = (validator.isEmail(email_str));


    if (checkemail) {
      if (password_str === repassword_str) {
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            'firstname': data['firstname'][0] /* 'lastname': data['lastname'][0] */, 'acctype': data['acctype'][0],
            'accno': data['accno'][0], 'email': data['email'][0], 'password': data['password'][0], 'sectype': data['sectype'][0], 'secans': data['secans'][0],
            'balance': '30000', "cheque": {}
          })
        };
        fetch('http://localhost:3000/users/', requestOptions)
          .then(response => response.json())
          .then(data => newATMPIN(genRandomPin(), data.accno, data.id));
        toast.success("Registered Successfully");
        navigate('/login');

        // Try to use async/await, makes the code cleaner
        // Navigate only after registeration is done, use a loading state to signify creation of account, or looking into promise toasts from other components


      }
      else {
        return toast.error("Passwords doesnt match");
      }
    }
  };

  return (
    <div>
      <div id="loginform">
        <FormHeader title="Registration Form" />


        <form onSubmit={submitHandler}>
          <div class="columns">
            <div class="column-1">
              <div className="row">
                <label>First Name</label>
                <input required type="text" name="firstname" placeholder="Enter your First Name" value={data.firstname} onChange={changeHandler} />
              </div>

              {/* <div className="row">
                <label>Last Name</label>
                <input required type="text" name="lastname" placeholder="Enter your Last Name" value={data.lastname} onChange={changeHandler} />
              </div> */}

              <div className="row">
                <label>Account Type</label>

                <select name="acctype" required value={data.acctype} onChange={changeHandler}>
                  <option value={"None"}>None</option>
                  <option value={"Current"}>Current</option>
                  <option value={"Saving"}>Savings</option>
                </select>

              </div>

              <div className="row">
                <label>Security Question Type</label>

                <select name="sectype" required value={data.sectype} onChange={changeHandler}>
                  <option value={"In what city were you born?"}>In what city were you born</option>
                  <option value={"What is the name of your favorite pet?"}>What is the name of your favorite pet?</option>
                  <option value={"What high school did you attend?"}>What high school did you attend?</option>
                </select>

              </div>
              <div className="row">
                <label>Security Question Answer</label>
                <input required type="text" name="secans" placeholder="Enter your Security Question Answer" value={data.secans} onChange={changeHandler} />
              </div>
            </div>

            <div class="column-1">
              <div className="row">
                <label>Account Number</label>
                <input required type="text" name="accno" placeholder="Enter your Account Number" value={data.accno} onChange={changeHandler} />
              </div>

              <div className="row">
                <label>Email</label>
                <input required type="text" name="email" placeholder="Enter your Email" value={data.email} onChange={changeHandler} />
              </div>
              <div className="row">
                <label>Password</label>
                <input required type="password" name="password" placeholder="Enter your Password" value={data.password} onChange={changeHandler} />
              </div>
              <div className="row">
                <label>Re-enter your Password</label>
                <input required type="password" name="repassword" placeholder="Re-Enter your Password" value={data.repassword} onChange={changeHandler} />
              </div>


            </div>
          </div>
          <div id="button" className="row">
            <button>Register</button>

          </div>
        </form>

      </div>


    </div>
  );
}

export default Registration
  ;





