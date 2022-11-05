import '../style/Login.css';
import { React, useState, useEffect } from 'react';
import validator from 'validator';
import pic from '../style/img_avatar2.png';

const FormHeader = props => (
  <div>
    <div className='imgcontainer'>
      <img src={pic} alt="Avatar" className="avatar"></img>
    </div>
    <h2 id="headerTitle">{props.title}</h2>
  </div>
);

function Registration() {

  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    acctype: "",
    accno: "",
    email: "",
    password: "",
    repassword: ""
  })
  const [message, setMessage] = useState("");
  const checkemail = ''

  const { username, password } = data;
  let [users, setusers] = useState({});


  const changeHandler = e => {
    setData({ ...data, [e.target.name]: [e.target.value] });

  }

  const getUsers = async () => {
    try {
      const response = await fetch("http://localhost:3000/users/");
      const jsonData = await response.json();
      localStorage.setItem("users", JSON.stringify(jsonData));
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    getUsers();
    const users_ls = JSON.parse(localStorage.getItem("users"));
    setusers(users_ls);
  }, []);

  const submitHandler = e => {

    e.preventDefault();
    let email_str = data['email'][0];
    let password_str = data['password'][0];
    let repassword_str=data['repassword'][0];
    let checkemail = (validator.isEmail(email_str))


    
    if (!checkemail) {
      setMessage("Please enter a valid Email");

    }
    
    if (checkemail)
    {
      if(password_str===repassword_str) {
        const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 'firstname': data['firstname'][0], 'lastname': data['lastname'][0],'acctype':data['acctype'][0],
        'accno':data['accno'][0],'email':data['email'][0],'password':data['password'][0]
       })
    };
    fetch('http://localhost:3000/users/', requestOptions)
        .then(response => response.json())
        .then(data=>console.log(data));

    
  }
  else{
    alert("Passwords doesnt match")
  }
}
  }

  return (
    <div>
      <div id="loginform">
        <FormHeader title="Registration Form" />


        <form onSubmit={submitHandler}>
          <div class="columns">
            <div class="column-1">
              <div className="row">
                <label>First Name</label>
                <input required type="text" name="firstname" placeholder="Enter your First Nmae" value={data.firstname} onChange={changeHandler} />
              </div>

              <div className="row">
                <label>Last Name</label>
                <input required type="text" name="lastname" placeholder="Enter your Last Name" value={data.lastname} onChange={changeHandler} />
              </div>

              <div className="row">
                <label>Account Type</label>
                <input required type="text" name="acctype" placeholder="Enter your Account type" value={data.acctype} onChange={changeHandler} />
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
            <button>Log In</button>

          </div>
        </form>

      </div>

      {!checkemail > 0 &&
        <div id="message">
          {message}
        </div>

      }

      <div className="container" style={{ "backgroundColor": "#f1f1f1", "height": "50px" }}>
        New User ? <a href="#">Register Here</a>
      </div>


    </div>
  )
}

export default Registration
  ;





