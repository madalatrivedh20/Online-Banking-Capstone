
import './App.css';
import 'react-toastify/dist/ReactToastify.css';

import Login from './components/Login';
import Registration from './components/Registration';
import Home from './components/Home';
import BalanceAndHistory from './components/BalanceAndHistory';
import ChangePin from './components/ChangePin';
import Navbar from './components/Navbar';
import NewFD from './components/NewFD';
import RequestChequebook from './components/RequestChequebook';
import TransferFunds from './components/TransferFunds';
import Footer from './components/Footer';
import { useState, useEffect } from 'react';


import PrivateRoute from './components/PrivateRoute';

import useAppState, { AppStateProvider } from './AppStateContext';
import { ToastContainer } from 'react-toastify';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import { getAllUsers } from './service/api';



function App() {
  /*   const [auth, setAuth] = useState(null);
  
    useEffect(() => {
      let user = localStorage.getItem("user");
      user && JSON.parse(user) ? setAuth(true) : setAuth(false);
    }, []);
  
    */

  const { setAllUsers } = useAppState();

  useEffect(() => {
    (async () => {
      const resposne = await getAllUsers();
      setAllUsers(resposne);
    })();
  }, []);

  return (
    <>
      <ToastContainer />
      <Router>
        <Navbar />
        <div style={{ marginTop: '70px', marginBottom: '50px' }}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Registration />} />
            <Route exact path="/changepin" element={
              <PrivateRoute>
                <ChangePin />
              </PrivateRoute>
            } />
            <Route exact path="/newfd" element={
              <PrivateRoute>
                <NewFD />
              </PrivateRoute>
            } />
            <Route exact path="/transferfunds" element={
              <PrivateRoute>
                <TransferFunds />
              </PrivateRoute>
            } />
            <Route exact path="/balance" element={
              <PrivateRoute>
                <BalanceAndHistory />
              </PrivateRoute>
            } />
            <Route exact path="/newcheckbook" element={
              <PrivateRoute>
                <RequestChequebook />
              </PrivateRoute>
            } />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
