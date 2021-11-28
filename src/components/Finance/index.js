import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';

/* Vehicle mileage should be 0*/
const Finance = ({ setToken }) => {
  const [loanAmount, setLoanAmount] = useState('');
  const [creditScore, setCreditScore] = useState('');
  const [yearlyIncome, setYearlyIncome] = useState('');
  const [monthlyBudget, setMonthlyBudget] = useState('');
  const [downPayment, setDownPayment] = useState('');
  const history = useHistory();

  const handleLoanAmountChange = e => {
    setLoanAmount(e.target.value)
  }

  const handleCreditScoreChange = e => {
    setCreditScore(e.target.value)
  }

  const handleYearlyIncomeChange = e => {
    setYearlyIncome(e.target.value)
  }

  const handleMonthlyBudgetChange = e => {
    setMonthlyBudget(e.target.value)
  }

  const handleDownPaymentChange = e => {
    setDownPayment(e.target.value)
  }

  const submit = () => {
    // fetch to verify, if ok, history.push
    if (!(300 <= creditScore <= 900)) {
      console.log('please enter a valid credit score');
    } else if (!(loanAmount > 0)) {
      console.log('please enter a valid loan amount');
    } else if (!(monthlyBudget > 0)) {
      console.log('please enter a valid monthly budget');
    } else if (!(yearlyIncome > 0)) {
      console.log('please enter a valid yearly income');
    } else if (!(downPayment > 0)) {
      console.log('please enter a valid down payment amount')
    } else {
      history.push('/catalogue')
    }

  }

  return (
    <div className="page page-finance">
      <h1>Tell us a bit about yourself...</h1>

      <p>Loan amount</p>
      <input type="text" onChange={handleLoanAmountChange} value={loanAmount} />

      <p>Credit score</p>
      <input type="text" onChange={handleCreditScoreChange} value={creditScore} />

      <p>Yearly income</p>
      <input type="text" onChange={handleYearlyIncomeChange} value={yearlyIncome} />

      <p>Monthly budget</p>
      <input type="text" onChange={handleMonthlyBudgetChange} value={monthlyBudget} />

      <p>Down payment</p>
      <input type="text" onChange={handleDownPaymentChange} value={downPayment} />

      <button onClick={submit}>Browse Cars</button>

    </div>
  )
}

export default Finance
