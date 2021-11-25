import React, { useState } from 'react'
import { Link } from 'react-router-dom';
// import './finance.scss';

/* Vehicle mileage should be 0*/
const Finance = ({ setToken }) => {
  const [preferredVehicle, setPreferredVehicle] = useState();
  const [preferredFeatures, setPreferredFeatures] = useState();
  const [creditScore, setCreditScore] = useState();
  const [yearlyIncome, setYearlyIncome] = useState();
  const [monthlyBudget, setMonthlyBudget] = useState();
  return (
    <div className="page page-finance">
      <h1>Tell us a bit about yourself...</h1>
      <form>
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
      <Link to='/catalogue'>
        <button className="btn">Browse Cars!</button>
      </Link>
    </div>
  )
}

export default Finance
