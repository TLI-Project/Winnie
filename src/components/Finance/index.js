import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './finance.scss';

/* Vehicle mileage should be 0*/
const Finance = ({ setToken }) => {
  const [preferredVehicle, setPreferredVehicle] = useState();
  const [preferredFeatures, setPreferredFeatures] = useState();
  const [creditScore, setCreditScore] = useState();
  const [yearlyIncome, setYearlyIncome] = useState();
  const [monthlyBudget, setMonthlyBudget] = useState();
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
          <input type="text" onChange={e => setMonthlyBudget(e.target.value)} />
        </label>
        <label>
          <p>Credit score</p>
          <input type="text" onChange={e => setCreditScore(e.target.value)} />
        </label>
        <label>
          <p>Yearly income</p>
          <input type="text" onChange={e => setYearlyIncome(e.target.value)} />
        </label>
        <label>
          <p>Monthly budget</p>
          <input type="text" onChange={e => setMonthlyBudget(e.target.value)} />
        </label>
        {/* <div>
              <button type="submit">Get Breakdown</button>
          </div> */}
          <label>
          <p>Down payment</p>
          <input type="text" onChange={e => setMonthlyBudget(e.target.value)} />
        </label>
      </form>
      <Link to='/features'>
        <button className="btn">Show me the features!</button>
      </Link>
    </div>
  )
}

export default Finance
