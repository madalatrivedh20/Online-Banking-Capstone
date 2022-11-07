
import './App.css';

import Login from './components/Login';
import Registration from './components/Registration';
import Home from './components/Home';
import BalanceAndHistory from './components/BalanceAndHistory';
import ChangePin from './components/ChangePin';
import Navbar from './components/Navbar';
import NewFD from './components/NewFD';
import RequestChequebook from './components/RequestChequebook';
import TransferFunds from './components/TransferFunds';
import { useState,useEffect } from 'react';


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate
} from "react-router-dom";




function App() {
/*   const [auth, setAuth] = useState(null);

  useEffect(() => {
    let user = localStorage.getItem("user");
    user && JSON.parse(user) ? setAuth(true) : setAuth(false);
  }, []);

  useEffect(() => {
    localStorage.setItem("user", auth);
  }, [auth]);
 */
  return (
    <div>
    <Router>
      <Routes>
     {/*  {!auth && (
  <> */}
      {/* <Route exact path="/" element={<Home />} /> */}
      
        <Route exact path="/login" element={<Login /* authenticate={() => setAuth(true)} *//>} />
        <Route exact path="/register" element={<Registration />} />
 {/* </>
      )} */}
     {/*  {auth && ( */}
       {/*  <> */}
        <Route exact path="/changepin" element={<ChangePin />} />
        <Route exact path="/newfd" element={<NewFD />} />
        <Route exact path="/transferfunds" element={<TransferFunds />} />
        <Route exact path="/balance" element={<BalanceAndHistory />} />
      {/*   </>
  
      ) */}
     
{/* } */}

{/* <Route path="*" element={<Navigate to={auth ? "/newfd" : "/login"} />} /> */}
      </Routes>
    </Router> 
  

    </div>

  
  );
}

export default App;
