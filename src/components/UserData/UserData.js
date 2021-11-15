import React, {useState} from "react";

const UserData = ({ setToken }) => {
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
        <div>
            <h2>Fill in Your Financial Information</h2>
            <form>
                <div>
                    Loan Amount:
                    <input  type="text" onChange={e => setLoanAmount(e.target.value)}/>
                </div>
                <div>
                    Credit Score:
                    <input  type="text" onChange={e => setCreditScore(e.target.value)}/>
                </div>
                <div>
                    Payment Budget:
                    <input  type="text" onChange={e => setPytBudget(e.target.value)}/>
                </div>
                <div>
                    List Price:
                    <input  type="text" onChange={e => setListPrice(e.target.value)}/>
                </div>
                <div>
                    Downpayment:
                    <input  type="text" onChange={e => setDownpayment(e.target.value)}/>
                </div>
                <button type="submit" onClick={submitHandler}> Submit </button>
            </form>
        </div>
    )
}
export default UserData
