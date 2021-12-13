import React, { useState, useEffect } from 'react'
import blueEllipse from '../../img/landing/background/Ellipse-blue.png';
import greenEllipse from '../../img/landing/background/Ellipse-green.png';
import { useLocation } from 'react-router-dom';
import { Line } from 'react-chartjs-2';
import { Graph1Model, Graph2Models, Graph3Models, Graph4Models } from "./depreciation";
import { GraphCapitalOneModel, GraphCapitalTwoModels, GraphCapitalThreeModels, GraphCapitalFourModels } from "./ammoritization"

import "./styles.scss";

const Compare = () => {
    //passing states:
    const location = useLocation();
    const { state } = location;
    const finance = state.inputData;
    const carList = state.selected;
    console.log(carList)
    console.log(finance)

    const [car1, setCar1] = useState(null)
    const [car2, setCar2] = useState(null)
    const [car3, setCar3] = useState(null)
    const [car4, setCar4] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const car1Ok = carList[0] === null ? true : car1 !== null ? true : false;
        const car2Ok = carList[1] === null ? true : car2 !== null ? true : false;
        const car3Ok = carList[2] === null ? true : car3 !== null ? true : false;
        const car4Ok = carList[3] === null ? true : car4 !== null ? true : false;
        // if all ok, setloading to false

        if (car1Ok == true && car2Ok == true && car3Ok == true && car4Ok == true) {
            setLoading(false);
        }
    }, [car1, car2, car3, car4])

    //****/carDepreciation
    // returns a list of 10 values, where each one is the percentage of total value remaining responding to year
    //****/userCarLoan */
    // Senso api result

    useEffect(() => {
        if (carList[0] !== null) {

            const inputData = {
                carId: carList[0],
                loanAmount: finance.loanAmount,
                pytBudget: finance.monthlyBudget,
                downPayment: finance.downPayment,
                address: finance.address,
                postalCode: finance.postalCode,
                city: finance.city,
                province: finance.province,
                dateOfBirth: finance.dateOfBirth,
                sinNumber: finance.sinNumber
            }

            const depreciationRequestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: carList[0]
            };

            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: carList[0]
            };


            const loanRequestOptions = {
                method: 'POST',
                mode: 'cors',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(inputData)
            };
            const fetchData = async () => {
                const carOneLoan = await (await fetch('http://localhost:8080/userCarLoan', loanRequestOptions)).json()
                const carOneDepreciation = await (await fetch('http://localhost:8080/carDepreciation', depreciationRequestOptions)).json();
                const carOneModel = await (await fetch('http://localhost:8080/carDetails', requestOptions)).json();
                setCar1({ loan: carOneLoan, depreciation: carOneDepreciation, model: carOneModel })
            }

            fetchData();



        }
        if (carList[1] !== null) {

            const inputData = {
                carId: carList[1],
                loanAmount: finance.loanAmount,
                pytBudget: finance.monthlyBudget,
                downPayment: finance.downPayment,
                address: finance.address,
                postalCode: finance.postalCode,
                city: finance.city,
                province: finance.province,
                dateOfBirth: finance.dateOfBirth,
                sinNumber: finance.sinNumber
            }
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: carList[1]
            };
            const depreciationRequestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: carList[1]
            };


            const loanRequestOptions = {
                method: 'POST',
                mode: 'cors',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(inputData)
            };
            const fetchData = async () => {
                const carTwoLoan = await (await fetch('http://localhost:8080/userCarLoan', loanRequestOptions)).json()
                const carTwoDepreciation = await (await fetch('http://localhost:8080/carDepreciation', depreciationRequestOptions)).json();
                const carTwoModel = await (await fetch('http://localhost:8080/carDetails', requestOptions)).json();
                setCar2({ loan: carTwoLoan, depreciation: carTwoDepreciation, model: carTwoModel })
            }

            fetchData();



        }

        if (carList[2] !== null) {

            const inputData = {
                carId: carList[2],
                loanAmount: finance.loanAmount,
                pytBudget: finance.monthlyBudget,
                downPayment: finance.downPayment,
                address: finance.address,
                postalCode: finance.postalCode,
                city: finance.city,
                province: finance.province,
                dateOfBirth: finance.dateOfBirth,
                sinNumber: finance.sinNumber
            }
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: carList[2]
            };

            const depreciationRequestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: carList[2]
            };


            const loanRequestOptions = {
                method: 'POST',
                mode: 'cors',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(inputData)
            };
            const fetchData = async () => {
                const carThreeLoan = await (await fetch('http://localhost:8080/userCarLoan', loanRequestOptions)).json()
                const carThreeDepreciation = await (await fetch('http://localhost:8080/carDepreciation', depreciationRequestOptions)).json();
                const carThreeModel = await (await fetch('http://localhost:8080/carDetails', requestOptions)).json();
                setCar3({ loan: carThreeLoan, depreciation: carThreeDepreciation, model: carThreeModel })
            }

            fetchData();



        }
        if (carList[3] !== null) {

            const inputData = {
                carId: carList[3],
                loanAmount: finance.loanAmount,
                pytBudget: finance.monthlyBudget,
                downPayment: finance.downPayment,
                address: finance.address,
                postalCode: finance.postalCode,
                city: finance.city,
                province: finance.province,
                dateOfBirth: finance.dateOfBirth,
                sinNumber: finance.sinNumber
            }
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: carList[3]
            };

            const depreciationRequestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: carList[3]
            };


            const loanRequestOptions = {
                method: 'POST',
                mode: 'cors',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(inputData)
            };
            const fetchData = async () => {
                const carFourLoan = await (await fetch('http://localhost:8080/userCarLoan', loanRequestOptions)).json()
                const carFourDepreciation = await (await fetch('http://localhost:8080/carDepreciation', depreciationRequestOptions)).json();
                const carFourModel = await (await fetch('http://localhost:8080/carDetails', requestOptions)).json();
                setCar4({ loan: carFourLoan, depreciation: carFourDepreciation, model: carFourModel })
            }

            fetchData();



        }
    }, []);



    //TODO:
    // get the depreciaition list for each car
    // get the capital of the car (in order to multiple it by the depreciaition values for y axis)
    // get the model name for each car
    // Create a list of the remaining sum (use a for loop to iterate over


    if (!loading) {

        if (carList.length === 1) {
            // Depreciation
            var remainingSum = [];
            for (let i = 0; i < car1.loan["installments"].length; i++) {
                remainingSum.push(car1.loan["installments"][i]['remain'])
            }
            var modelD = {
                "depreciation": Object.values(car1.depreciation)[0],
                "listPrice": parseFloat(car1.loan["capitalSum"]),
                "model": JSON.stringify(car1.carModel)
            }
            var modelA = { "remain": remainingSum, "model": JSON.stringify(car1.carModel) }


            {/* All your content */
            }
            // return(<p> Hi</p>)
            return (
                <div>
                    {loading ?
                        <p>Loading</p>
                        :
                        <div>
                            <div className="page" id="page-compare">
                                <img className="ellipse-blue" src={blueEllipse} />
                                <img className="ellipse-green" src={greenEllipse} />
                                <div className="graphContainer" id="graphContainer ">
                                    <div className="section-container instruction-container">
                                        <div className='detail-right'>
                                            <div className="row">
                                                <div className="rightcolumn">
                                                    <h2>Depreciation Graph</h2>
                                                    <p>Depreciation is the difference between a car's value when
                                                        you buy it and when you
                                                        come to sell it.
                                                        This drop in value varies between makes and models and
                                                        the depreciation of each
                                                        model is depicted
                                                        on the graph for each year of ownership.</p>
                                                    <p>-Toggle on each model's name at the bottom to remove it's
                                                        data from the
                                                        graph </p>
                                                    <p>-Hover above datapoints (circles on the graph) for
                                                        further insights</p>


                                                </div>

                                                <div className="leftcolumn"><h2>Ammoritization Graph</h2>
                                                    <p>
                                                        Amortization describes the process of gradually paying
                                                        off your auto loan. In an
                                                        amortizing loan,
                                                        for each of your monthly payments, a portion is applied
                                                        towards the amount of
                                                        the loan – the
                                                        principal – and a portion of the payment is applied
                                                        towards paying the finance
                                                        charge –
                                                        the interest.</p>
                                                    <p>-Toggle on each model's name at the bottom to remove it's
                                                        data from the
                                                        graph </p>
                                                    <p>-Hover above datapoints (circles on the graph) for
                                                        further insights</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <br>


                                </br>
                                <Graph1Model model={modelD} />
                                <GraphCapitalOneModel model={modelA} />


                            </div>
                            }
                        </div>
                    }
                </div>

            )
        }
        else if (carList.length === 2) {
            // First car
            var remainingSum1 = [];
            for (let i = 0; i < car1.loan["installments"].length; i++) {
                remainingSum1.push(car1.loan["installments"][i]['remain'])
            }
            var modelD1 = {
                "depreciation": Object.values(car1.depreciation)[0],
                "listPrice": parseFloat(car1.loan["capitalSum"]),
                "model": JSON.stringify(car1.carModel)
            }
            var modelA1 = { "remain": remainingSum1, "model": JSON.stringify(car1.carModel) }

            // Second car
            var remainingSum2 = [];
            for (let i = 0; i < car2.loan["installments"].length; i++) {
                remainingSum2.push(car2.loan["installments"][i]['remain'])
            }
            var modelD2 = {
                "depreciation": Object.values(car2.depreciation)[0],
                "listPrice": parseFloat(car2.loan["capitalSum"]),
                "model": JSON.stringify(car2.carModel)
            }
            var modelA2 = { "remain": remainingSum2, "model": JSON.stringify(car2.carModel) }

            {/* All your content */
            }
            // return(<p> Hi</p>)
            return (
                <div>
                    {loading ?
                        <p>Loading</p>
                        :
                        <div>
                            <div className="page" id="page-compare">
                                <img className="ellipse-blue" src={blueEllipse} />
                                <img className="ellipse-green" src={greenEllipse} />
                                <div className="graphContainer" id="graphContainer ">
                                    <div className="section-container instruction-container">
                                        <div className='detail-right'>
                                            <div className="row">
                                                <div className="rightcolumn">
                                                    <h2>Depreciation Graph</h2>
                                                    <p>Depreciation is the difference between a car's value when
                                                        you buy it and when you
                                                        come to sell it.
                                                        This drop in value varies between makes and models and
                                                        the depreciation of each
                                                        model is depicted
                                                        on the graph for each year of ownership.</p>
                                                    <p>-Toggle on each model's name at the bottom to remove it's
                                                        data from the
                                                        graph </p>
                                                    <p>-Hover above datapoints (circles on the graph) for
                                                        further insights</p>


                                                </div>

                                                <div className="leftcolumn"><h2>Ammoritization Graph</h2>
                                                    <p>
                                                        Amortization describes the process of gradually paying
                                                        off your auto loan. In an
                                                        amortizing loan,
                                                        for each of your monthly payments, a portion is applied
                                                        towards the amount of
                                                        the loan – the
                                                        principal – and a portion of the payment is applied
                                                        towards paying the finance
                                                        charge –
                                                        the interest.</p>
                                                    <p>-Toggle on each model's name at the bottom to remove it's
                                                        data from the
                                                        graph </p>
                                                    <p>-Hover above datapoints (circles on the graph) for
                                                        further insights</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <br>


                                </br>
                                <Graph2Models model1={modelD1} model2={modelD2} />
                                <GraphCapitalTwoModels model1={modelA1} model2={modelA2} />


                            </div>
                            }
                        </div>
                    }
                </div>

            )
        }
        else if (carList.length === 3) {
            // First car
            var remainingSum1 = [];
            for (let i = 0; i < car1.loan["installments"].length; i++) {
                remainingSum1.push(car1.loan["installments"][i]['remain'])
            }
            var modelD1 = {
                "depreciation": Object.values(car1.depreciation)[0],
                "listPrice": parseFloat(car1.loan["capitalSum"]),
                "model": JSON.stringify(car1.carModel)
            }
            var modelA1 = { "remain": remainingSum1, "model": JSON.stringify(car1.carModel) }

            // Second car
            var remainingSum2 = [];
            for (let i = 0; i < car2.loan["installments"].length; i++) {
                remainingSum2.push(car2.loan["installments"][i]['remain'])
            }
            var modelD2 = {
                "depreciation": Object.values(car2.depreciation)[0],
                "listPrice": parseFloat(car2.loan["capitalSum"]),
                "model": JSON.stringify(car2.carModel)
            }
            var modelA2 = { "remain": remainingSum2, "model": JSON.stringify(car2.carModel) }


            // Third car
            var remainingSum3 = [];
            for (let i = 0; i < car3.loan["installments"].length; i++) {
                remainingSum3.push(car3.loan["installments"][i]['remain'])
            }
            var modelD3 = {
                "depreciation": Object.values(car3.depreciation)[0],
                "listPrice": parseFloat(car3.loan["capitalSum"]),
                "model": JSON.stringify(car3.carModel)
            }
            var modelA3 = { "remain": remainingSum3, "model": JSON.stringify(car3.carModel) }

            {/* All your content */
            }
            // return(<p> Hi</p>)
            return (
                <div>
                    {loading ?
                        <p>Loading</p>
                        :
                        <div>
                            <div className="page" id="page-compare">
                                <img className="ellipse-blue" src={blueEllipse} />
                                <img className="ellipse-green" src={greenEllipse} />
                                <div className="graphContainer" id="graphContainer ">
                                    <div className="section-container instruction-container">
                                        <div className='detail-right'>
                                            <div className="row">
                                                <div className="rightcolumn">
                                                    <h2>Depreciation Graph</h2>
                                                    <p>Depreciation is the difference between a car's value when
                                                        you buy it and when you
                                                        come to sell it.
                                                        This drop in value varies between makes and models and
                                                        the depreciation of each
                                                        model is depicted
                                                        on the graph for each year of ownership.</p>
                                                    <p>-Toggle on each model's name at the bottom to remove it's
                                                        data from the
                                                        graph </p>
                                                    <p>-Hover above datapoints (circles on the graph) for
                                                        further insights</p>


                                                </div>

                                                <div className="leftcolumn"><h2>Ammoritization Graph</h2>
                                                    <p>
                                                        Amortization describes the process of gradually paying
                                                        off your auto loan. In an
                                                        amortizing loan,
                                                        for each of your monthly payments, a portion is applied
                                                        towards the amount of
                                                        the loan – the
                                                        principal – and a portion of the payment is applied
                                                        towards paying the finance
                                                        charge –
                                                        the interest.</p>
                                                    <p>-Toggle on each model's name at the bottom to remove it's
                                                        data from the
                                                        graph </p>
                                                    <p>-Hover above datapoints (circles on the graph) for
                                                        further insights</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <br>


                                </br>
                                <Graph3Models model1={modelD1} model2={modelD2} model3={modelD3} />
                                <GraphCapitalThreeModels model1={modelA1} model2={modelA2} model3={modelA3} />


                            </div>
                            }
                        </div>
                    }
                </div>

            )
        }
        else if (carList.length === 4) {
            // First car
            var remainingSum1 = [];
            for (let i = 0; i < car1.loan["installments"].length; i++) {
                remainingSum1.push(car1.loan["installments"][i]['remain'])
            }
            var modelD1 = {
                "depreciation": Object.values(car1.depreciation)[0],
                "listPrice": parseFloat(car1.loan["capitalSum"]),
                "model": JSON.stringify(car1.carModel)
            }
            var modelA1 = { "remain": remainingSum1, "model": JSON.stringify(car1.carModel) }

            // Second car
            var remainingSum2 = [];
            for (let i = 0; i < car2.loan["installments"].length; i++) {
                remainingSum2.push(car2.loan["installments"][i]['remain'])
            }
            var modelD2 = {
                "depreciation": Object.values(car2.depreciation)[0],
                "listPrice": parseFloat(car2.loan["capitalSum"]),
                "model": JSON.stringify(car2.carModel)
            }
            var modelA2 = { "remain": remainingSum2, "model": JSON.stringify(car2.carModel) }


            // Third car
            var remainingSum3 = [];
            for (let i = 0; i < car3.loan["installments"].length; i++) {
                remainingSum3.push(car3.loan["installments"][i]['remain'])
            }
            var modelD3 = {
                "depreciation": Object.values(car3.depreciation)[0],
                "listPrice": parseFloat(car3.loan["capitalSum"]),
                "model": JSON.stringify(car3.carModel)
            }
            var modelA3 = { "remain": remainingSum3, "model": JSON.stringify(car3.carModel) }

            // Fourth car
            var remainingSum4 = [];
            for (let i = 0; i < car4.loan["installments"].length; i++) {
                remainingSum4.push(car4.loan["installments"][i]['remain'])
            }
            var modelD4 = {
                "depreciation": Object.values(car4.depreciation)[0],
                "listPrice": parseFloat(car4.loan["capitalSum"]),
                "model": JSON.stringify(car4.carModel)
            }
            var modelA4 = { "remain": remainingSum4, "model": JSON.stringify(car4.carModel) }
            {/* All your content */
            }
            // return(<p> Hi</p>)
            return (
                <div>
                    {loading ?
                        <p>Loading</p>
                        :
                        <div>
                            <div className="page" id="page-compare">
                                <img className="ellipse-blue" src={blueEllipse} />
                                <img className="ellipse-green" src={greenEllipse} />
                                <div className="graphContainer" id="graphContainer ">
                                    <div className="section-container instruction-container">
                                        <div className='detail-right'>
                                            <div className="row">
                                                <div className="rightcolumn">
                                                    <h2>Depreciation Graph</h2>
                                                    <p>Depreciation is the difference between a car's value when
                                                        you buy it and when you
                                                        come to sell it.
                                                        This drop in value varies between makes and models and
                                                        the depreciation of each
                                                        model is depicted
                                                        on the graph for each year of ownership.</p>
                                                    <p>-Toggle on each model's name at the bottom to remove it's
                                                        data from the
                                                        graph </p>
                                                    <p>-Hover above datapoints (circles on the graph) for
                                                        further insights</p>


                                                </div>

                                                <div className="leftcolumn"><h2>Ammoritization Graph</h2>
                                                    <p>
                                                        Amortization describes the process of gradually paying
                                                        off your auto loan. In an
                                                        amortizing loan,
                                                        for each of your monthly payments, a portion is applied
                                                        towards the amount of
                                                        the loan – the
                                                        principal – and a portion of the payment is applied
                                                        towards paying the finance
                                                        charge –
                                                        the interest.</p>
                                                    <p>-Toggle on each model's name at the bottom to remove it's
                                                        data from the
                                                        graph </p>
                                                    <p>-Hover above datapoints (circles on the graph) for
                                                        further insights</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <br>


                                </br>
                                <Graph4Models model1={modelD1} model2={modelD2} model3={modelD3} model4={modelD4} />
                                <GraphCapitalFourModels model1={modelA1} model2={modelA2} model3={modelA3} model4={modelA4} />


                            </div>
                            }
                        </div>
                    }
                </div>

            )
        }

    }
    else {
        return (<div></div>)
    }

}
export default Compare
