import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './finance.scss';

/* Vehicle mileage should be 0*/
const Finance = ({ setToken }) => {
  const [preferredVehicle, setPreferredVehicle] = useState();
  const [preferredFeatures, setPreferredFeatures] = useState();
  const [loanAmount, setLoanAmount] = useState();
  const [creditScore, setCreditScore] = useState();
  const [pytBudget, setPytBudget] = useState();
  const [listPrice, setListPrice] = useState();
  const [downpayment, setDownpayment] = useState();

  const requestOptions = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      "loanAmount": loanAmount,
      "creditScore": creditScore,
      "pytBudget": pytBudget,
      "vehicleMake": "Honda",
      "vehicleModel": "Civic",
      "vehicleYear": 2021,
      "vehicleKms": 1000,
      "listPrice": listPrice,
      "downpayment": downpayment
    })
  };

  const submitHandler = (e) => {
    e.preventDefault()
    fetch('https://sensoeducation.link/userInputs', requestOptions)
        .then(response => console.log(response.json()))
  }

  return (
    <div className="Finance">
      <h1> Get started with Senso Education</h1>
      <form>
        <label>
          <p>Vehicle Make</p>
          <select name="dropdown">
            <option value="Ford">Ford</option>
            <option value="Mercedes">Mercedes</option>
            <option value="Kia">Kia</option>
            <option value="Dodge">Dodge</option>
            <option value="Toyota">Toyota</option> 
            <option value="GMC">GMC</option>
            <option value="Chrysler">Chrysler</option>
            <option value="Chevrolet">Chevrolet</option>
            <option value="Jeep">Jeep</option>
            <option value="Buick">Buick</option>
            <option value="BMW">BMW</option>
            <option value="Cadillac">Cadillac</option>
            <option value="Hyundai">Hyundai</option>
            <option value="Mazda">Mazda</option>
          </select>
        </label>
        <label>
          <p>Vehicle Model</p>
          <select name="dropdown">
            <option value="Civic">Civic</option>
            <option value="Malibu">Malibu</option>
            <option value="Mpv">Mpv</option>
            <option value="Chassis">Chassis</option>
          </select>
        </label>
        <label>
          <p>Vehicle Year</p>
          <select name="dropdown">
            <option value="2010">2010</option>
            <option value="2011">2011</option>
            <option value="2012">2012</option>
            <option value="2013">2013</option>
            <option value="2014">2014</option>
            <option value="2015">2015</option>
            <option value="2016">2016</option>
            <option value="2017">2017</option>
            <option value="2018">2018</option>
            <option value="2019">2019</option>

          </select>
        </label>
        <label>
          <p>Loan amount</p>
          <input  type="text" onChange={e => setLoanAmount(e.target.value)}/>
        </label>
        <label>
          <p>Credit score</p>
          <input  type="text" onChange={e => setCreditScore(e.target.value)}/>
        </label>
        <label>
          <p>Payment Budget</p>
          <input  type="text" onChange={e => setPytBudget(e.target.value)}/>
        </label>
        <label>
          <p>List Price</p>
          <input  type="text" onChange={e => setListPrice(e.target.value)}/>
        </label>
        {/* <div>
              <button type="submit">Get Breakdown</button>
          </div> */}
          <label>
          <p>Down payment</p>
            <input  type="text" onChange={e => setDownpayment(e.target.value)}/>
        </label>
        <label>
          <p>Show Senso Data in Console</p>
          <button type="submit" onClick={submitHandler}> Calculate </button>
        </label>
      </form>
      <Link to='/features'>
        <button className="btn">Show me the features!</button>
      </Link>
    </div>
  )
}

export default Finance
