import React from 'react'


// Do it two ways, either (1) call the fetch with a different inputData json for each car (carID for each car), or
// let Callum know and we can do it so you send all the IDs and then get a dictionary in return with the JSON for each
// car.

// get carIDs, loanAmount, creditScore, monthlyBudget, and downPayment from state from finance and catalogue pages.

const inputData = {
    id: carID,
    loanAmount: loanAmount,
    creditScore: creditScore,
    pytBudget: monthlyBudget,
    downpayment: downPayment
}

const allRequestOptions = {
    method: "PUT",
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(inputData)
};

const submitHandler = (e) => {
    e.preventDefault()
    fetch('http://localhost:8080/userCarLoan', allRequestOptions)
        .then(response => console.log(response.json()))
}


const Graph = () => {
  return (
    //Insert Graph here
    <div>
      *Graph Here
    </div>
  )
}

export default Graph
