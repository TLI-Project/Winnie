import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import blueEllipse from '../../img/landing/background/Ellipse-blue.png';
import greenEllipse from '../../img/landing/background/Ellipse-green.png';

import "./styles.scss";

/* Vehicle mileage should be 0*/
const Finance = () => {
  const [loanAmount, setLoanAmount] = useState('');
  const [monthlyBudget, setMonthlyBudget] = useState('');
  const [downPayment, setDownPayment] = useState('');
  const [address, setAddress] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [city, setCity] = useState('');
  const [province, setProvince] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [sinNumber, setSinNumber] = useState('');

  const history = useHistory();

  const handleLoanAmountChange = e => {
    setLoanAmount(e.target.value)
  }

  const handleAddressChange = e => {
    setAddress(e.target.value)
  }

  const handlePostalCodeChange = e => {
    setPostalCode(e.target.value)
  }

  const handleCityChange = e => {
    setCity(e.target.value)
  }

  const handleProvinceChange = e => {
    setProvince(e.target.value)
  }

  const handleDateOfBirthChange = e => {
    setDateOfBirth(e.target.value)
  }

  const handleSinNumberChange = e => {
    setSinNumber(e.target.value)
  }

  const handleMonthlyBudgetChange = e => {
    setMonthlyBudget(e.target.value)
  }

  const handleDownPaymentChange = e => {
    setDownPayment(e.target.value)
  }

  const inputData = {
    loanAmount: loanAmount,
    monthlyBudget: monthlyBudget,
    downPayment: downPayment,
    address: address,
    postalCode: postalCode,
    city: city,
    province: province,
    dateOfBirth: dateOfBirth,
    sinNumber: sinNumber



  }



  const submit = () => {
      history.push({
        pathname: '/catalogue', 
        state: { 
          inputData
        }
      })

  }

  return (
    <div className="page" id="page-finance">
      <img className="ellipse-blue" src={blueEllipse} />
      <img className="ellipse-green" src={greenEllipse} />
      <h1>Tell us a bit about yourself...</h1>
      {/* address */}
      <p>Address</p>
      <input type="text" onChange={handleAddressChange} value={address} />
      {/* city */}
      <p>City</p>
      <input type="text" onChange={handleCityChange} value={city} />
      {/* province */}
      <p>Province</p>
      <input type="text" onChange={handleProvinceChange} value={province} />
      {/* postal */}
      <p>Postal Code</p>
      <input type="text" onChange={handlePostalCodeChange} value={postalCode} />
      {/* bday */}
      <p>Date of Birth YYYY/MM/DD</p>
      <input type="text" onChange={handleDateOfBirthChange} value={dateOfBirth} />
      {/* sin no. */}
      <p>SIN Number</p>
      <input type="text" onChange={handleSinNumberChange} value={sinNumber} />
      {/* monthly budget */}
      <p>Monthly budget</p>
      <input type="text" onChange={handleMonthlyBudgetChange} value={monthlyBudget} />
      {/* down payment */}
      <p>Down payment</p>
      <input type="text" onChange={handleDownPaymentChange} value={downPayment} />

      <button onClick={submit}>Browse Cars</button>

    </div>
  )
}

export default Finance
