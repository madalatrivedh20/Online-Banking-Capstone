

import '../style/Login.css';
import { React, useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import validator from 'validator';
/* import pic from '../style/img_avatar2.png'; */
import pic from '../style/download.png';

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup,FacebookAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

import useAppContext from '../AppStateContext';

/*import { signInWithFaceBook } from './Firebase';
import { signInWithGoogle } from './Firebase';*/

const FormHeader = props => (
  <div>
    <div className='imgcontainer'>
      <img src={pic} alt="Avatar" className="avatar"></img>
    </div>
    <h2 id="headerTitle">{props.title}</h2>
  </div>
);

function Login() {

  const { setIsAuthenticated, setUser,issocialAuthenticated, setIssocialAuthenticated } = useAppContext();

  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: ""
  });

  let [users, setusers] = useState({});


  const changeHandler = e => {
    setData({ ...data, [e.target.name]: [e.target.value] });

  };

  const firebaseConfig = {
    apiKey: "AIzaSyAQaUwSVM1OSQoh5uS7qiniQO4beSNb1JM",
    authDomain: "online-banking-2.firebaseapp.com",
    projectId: "online-banking-2",
    storageBucket: "online-banking-2.appspot.com",
    messagingSenderId: "647396172156",
    appId: "1:647396172156:web:d876621f4a8bb6b12744f9",
    measurementId: "G-8VLQ6LQBVN"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);
  
  const go_provider = new GoogleAuthProvider();
  const fb_provider = new FacebookAuthProvider();

   const signInWithGoogle = () => {
    signInWithPopup(auth, go_provider)
      .then((result) => {
        const name = result.user.displayName;
        const email = result.user.email;
        const profilePic = result.user.photoURL;
  
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("profilePic", profilePic);
        setIssocialAuthenticated(true);
        navigate('/')
;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getUsers = async () => {
    try {
      const response = await fetch("http://localhost:3000/users/");
      const jsonData = await response.json();
      /* console.log(jsonData); */
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
    let email_str = data['email'][0];
    let password_str = data['password'][0];
    let checkemail = (validator.isEmail(email_str));

    function checkemailpassofuser(obj) {
      let flag = 0;
      if (obj.email === email_str && obj.password === password_str) {
        flag = 1;
      }
      return flag;


    }
    if (!checkemail) {
      toast.error("Please enter a valid e-mail");

    }

    if (checkemail) {
      const result = users.filter(checkemailpassofuser);
      /* console.log("result",result); */
      if (result[0]) {
        // alert("Welcome" + " " + result[0].firstname);
        // console.log(result[0]);
        const { id, accno, acctype } = result[0];
        setUser({ id, accno, acctype });
        setIsAuthenticated(true);
        toast.success("Logged In successfully");
        navigate('/balance');
        /*  console.log("Welcome"); */
      }
      else {
        toast.error("Wrong credentials");
        /* console.log("Wrong credentials"); */
      }
    }
  };

  return (
    <div id="loginform">
      <FormHeader title="Login" />
      <div>
        <form onSubmit={submitHandler}>
          <div className="row">
            <label>Email</label>
            <input autofocus required type="text" name="email" placeholder="Enter your Email" value={data.email} onChange={changeHandler} />
          </div>
          <div className="row">
            <label>Password</label>
            <input required type="password" name="password" placeholder="Enter your Password" value={data.password} onChange={changeHandler} />
          </div>
          <div id="button" className="row">
            <button>Log In</button>

          </div>
          <hr />
          <div id="button" className="row">
            <div style={{ "textAlign": "center", "marginLeft": "0px" }}>
              <ul>
               {/*<li style={{ "display": "inline" }}> <a href="#" onClick={signInWithFaceBook} class="fa fa-facebook"></a></li>*/}
                <li style={{ "display": "inline" }}> <a href="#" onClick={signInWithGoogle} class="fa fa-google"></a></li>
                <li style={{ "display": "inline" }}> <a href="#" onClick={signInWithGoogle} class="fa fa-twitter"></a></li>

              </ul>
            </div>
            {/*  <button >Sign in with google</button>
          <button onClick={signInWithFaceBook}>Sign in with fb</button> */}



          </div>
        </form>

      </div>



      <div className="container" style={{ "backgroundColor": "#f1f1f1", "height": "50px", "textAlign": "center" }}>
        New User ? <a href="/register">Register Here</a>
      </div>


    </div>
  );
}

export default Login;



