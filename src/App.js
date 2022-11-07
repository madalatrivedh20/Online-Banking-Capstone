
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

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          {/* <Route exact path="/" element={<Home />} /> */}

          {/* <Route exact path="/login" element={<Login />} /> */}
          <Route exact path="/register" element={<Registration />} />
          <Route exact path="/changepin" element={<ChangePin />} />
          <Route exact path="/newfd" element={<NewFD />} />
          <Route exact path="/transferfunds" element={<TransferFunds />} />
          <Route exact path="/balance" element={<BalanceAndHistory />} />
          <Route exact path="/requestcheckbook" element={<RequestChequebook />} />
        </Routes>
      </Router>


    </div>


  );
}

export default App;
