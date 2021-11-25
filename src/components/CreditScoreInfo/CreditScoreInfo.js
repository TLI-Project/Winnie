import React, {useState} from "react";

const CreditScoreInfo = ({ setToken }) => {
    const [address, setAddress] = useState();
    const [city, setCity] = useState();
    const [creditScore, setCreditScore] = useState();
    const [SIN, setSIN] = useState();
    const [cardnum, setCreditCardNum] = useState();
    const [securitynum, setSecurityNum] = useState();
    const [postalCode, setPostalCode] = useState();

    const creditOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            "address": address,
            "city": city,
            "SIN": SIN,
            "cardnum": cardnum,
            "securitynum": securitynum,
            "postalCode": postalCode
        })
    };
    const submitCreditScoreInfo = (e) => {
        e.preventDefault()
        fetch('https://sensoeducation.link/creditScoreInfo', creditOptions)
            .then(response => console.log(response.json()))
    }



    return (
        <div>
            <h2>Fill in Your Financial Information</h2>
            <form>
                {/*<div>*/}
                {/*    Loan Amount:*/}
                {/*    <input  type="text" onChange={e => setLoanAmount(e.target.value)}/>*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*    Credit Score:*/}
                {/*    <input  type="text" onChange={e => setCreditScore(e.target.value)}/>*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*    Payment Budget:*/}
                {/*    <input  type="text" onChange={e => setPytBudget(e.target.value)}/>*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*    List Price:*/}
                {/*    <input  type="text" onChange={e => setListPrice(e.target.value)}/>*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*    Downpayment:*/}
                {/*    <input  type="text" onChange={e => setDownpayment(e.target.value)}/>*/}
                {/*</div>*/}
                <button type="submit" onClick={submitCreditScoreInfo}> Submit </button>
            </form>
        </div>
    )
}
export default CreditScoreInfo
