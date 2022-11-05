import logo from './logo.svg';
import './App.css';

import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import BalanceAndHistory from './components/BalanceAndHistory';
import ChangePin from './components/ChangePin';
import Navbar from './components/Navbar';
import NewFD from './components/NewFD';
import RequestChequebook from './components/RequestChequebook';
import TransferFunds from './components/TransferFunds';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/changepin" element={<ChangePin />} />
        <Route exact path="/newfd" element={<NewFD />} />
        <Route exact path="/transferfunds" element={<TransferFunds />} />
        <Route exact path="/balance" element={<BalanceAndHistory />} />
      </Routes>
    </Router>
  );
}

export default App;
