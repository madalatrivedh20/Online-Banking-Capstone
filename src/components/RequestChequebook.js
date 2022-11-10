import '../style/Login.css';
import useAppState from '../AppStateContext';
import { useState } from 'react';
import validator from 'validator';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';


// Component that handles raising a request for the new cheque book

const RequestChequebook = () => {
  const navigate = useNavigate();
  const FormHeader = props => (
    <div>
      <h2 id="headerTitle">{props.title}</h2>
    </div>
  );
  const { isAuthenticated, user } = useAppState();

// Function invoked on submission of the form with the details like address

  const submitHandler = (e) => {
    e.preventDefault();
    if (!validator.isAlpha(data['state'][0])) return toast.error("Invalid State");
    if (!validator.isAlpha(data['city'][0])) return toast.error("Invalid City");
    let user_id = user.id;
    let unique_id = uuid();
    let cheque_id = unique_id.slice(0, 8);
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
    let issue_date = `${current.getDate() + 3}/${current.getMonth() + 1}/${current.getFullYear()}`;

    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        'firstname': user.firstname, 'acctype': user.acctype,
        'accno': user.accno, 'email': user.email, 'password': user.password, 'sectype': user.sectype, 'secans': user.secans, 'transactions': [], 'balance': '30000$'
        , "cheque": {
          'accno': data['accno'][0], 'state': data['state'][0],
          'city': data['city'][0], 'zipcode': data['zipcode'][0], 'address': data['address'][0], 'priority': data['priority'][0],
          'chequebook_id': cheque_id, 'requested_date': date, 'issued_date': issue_date
        }
      })
    };
    fetch(`http://localhost:3000/users/${user_id}`, requestOptions)
      .then(response => response.json())
      .then(data => console.log(data));

    toast.success("Checkbook request raised Successfully");
    setData({
      accno: user.accno,
      state: "",
      city: "",
      zipcode: "",
      address: "",
      priority: "",
      checkbook_id: "",
      requested_date: "",
      issue_date: ""
    });

    navigate('/balance');



  };
  const [data, setData] = useState({
    accno: user.accno,
    state: "",
    city: "",
    zipcode: "",
    address: "",
    priority: ""
  });
  const changeHandler = e => {
    setData({ ...data, [e.target.name]: [e.target.value] });

  };


  return (
    <div className="forms">
      <FormHeader title="Request a New Checkbook" />
      <div>
        <form onSubmit={submitHandler}>
          <div className="row">
            <label>Account Number</label>
            <input disbaled required type="text" name="accno" placeholder="Account Number" value={user.accno} onChange={changeHandler} />
          </div>
          <FormHeader title="Billing Address" />
          <div className="row">
            <label>State</label>
            <input required type="text" name="state" placeholder="Enter your State" value={data.state} onChange={changeHandler} />
          </div>

          <div className="row">
            <label>City</label>
            <input required type="text" name="city" placeholder="Enter your City" value={data.city} onChange={changeHandler} />
          </div>

          <div className="row">
            <label>Zip code</label>
            <input required type="text" name="zipcode" placeholder="Enter your Pincode" value={data.zipcode} onChange={changeHandler} />
          </div>

          <div className="row">
            <label>Address</label>
            <input required type="textarea" name="address" placeholder="Enter your Address" value={data.address} onChange={changeHandler} />
          </div>
          <div className="row">
            <label>Priority</label>

            <select name="priority" required value={data.priority} onChange={changeHandler}>
              <option value={"Select your Priority"}>Select your Priority</option>
              <option value={"Urgent"}>Urgent (1-2 Days)</option>
              <option value={"High"}>High (3-5 Days)</option>
              <option value={"Medium"}>Medium (5-7 Days)</option>
            </select>
          </div>
          <div id="button" className="row">
            <button>Raise a request</button>

          </div>
        </form>

      </div>


    </div>

  );
};

export default RequestChequebook;