import React, { useState, useEffect } from 'react'
import blueEllipse from '../../img/landing/background/Ellipse-blue.png';
import greenEllipse from '../../img/landing/background/Ellipse-green.png';
import { Link, useHistory, useLocation } from 'react-router-dom';
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


            const loanRequestOptions = {
                method: 'POST',
                mode: 'cors',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(inputData)
            };
            const fetchData = async () => {
                const carOneLoan = await (await fetch('http://localhost:8080/userCarLoan', loanRequestOptions)).json()
                const carOneDepreciation = await (await fetch('http://localhost:8080/carDepreciation', depreciationRequestOptions)).json();
                setCar1({ loan: carOneLoan, depreciation: carOneDepreciation })
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
                setCar2({ loan: carTwoLoan, depreciation: carTwoDepreciation })
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
                setCar3({ loan: carThreeLoan, depreciation: carThreeDepreciation })
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
                setCar4({ loan: carFourLoan, depreciation: carFourDepreciation })
            }

            fetchData();


        }
    }, []);

    //test
    console.log(car1.loan)
    console.log(car2.loan)
    console.log(car1.depreciation)

    return (
        <div>
            {loading ?
                <p>Loading</p>
                :
                <div>
                    {/* All your content */}

                </div>
            }
        </div>
    )

    //*****How to access the financial information:*****
    //Address: finance.address
    //loanAmount: finance.loanAmount,
    //monthlyBudget: finance.monthlyBudget,
    //downPayment: finance.downPayment 
    //etc.

    //*****How to access the list of cars selected by user:*****
    //whole list of cars: carList
    //first car: carList[0]
    //...etc


    //     if (carList.length === 1) {
    //         //Depreciation
    //         var modelD = { "depreciation": carList[0].depreciation, "listPrice": carList[0].listPrice, "model": carList[0].model }
    //         // Ammoritization
    //         var modelA = { "remain": carList[0].remain, "model": carList[0].model }
    //         return (
    //             <div className="page" id="page-compare">
    //                 <img className="ellipse-blue" src={blueEllipse} />
    //                 <img className="ellipse-green" src={greenEllipse} />
    //                 <div className="graphContainer" id="graphContainer ">
    //                     <div className="section-container instruction-container">
    //                         <div className='detail-right'>
    //                             <div className="row">
    //                                 <div className="rightcolumn">
    //                                     <h2>Depreciation Graph</h2>
    //                                     <p>Depreciation is the difference between a car's value when you buy it and when you
    //                                         come to sell it.
    //                                         This drop in value varies between makes and models and the depreciation of each
    //                                         model is depicted
    //                                         on the graph for each year of ownership.</p>
    //                                     <p>-Toggle on each model's name at the bottom to remove it's data from the
    //                                         graph </p>
    //                                     <p>-Hover above datapoints (circles on the graph) for further insights</p>


    //                                 </div>

    //                                 <div className="leftcolumn"><h2>Ammoritization Graph</h2>
    //                                     <p>
    //                                         Amortization describes the process of gradually paying off your auto loan. In an
    //                                         amortizing loan,
    //                                         for each of your monthly payments, a portion is applied towards the amount of
    //                                         the loan – the
    //                                         principal – and a portion of the payment is applied towards paying the finance
    //                                         charge –
    //                                         the interest.</p>
    //                                     <p>-Toggle on each model's name at the bottom to remove it's data from the
    //                                         graph </p>
    //                                     <p>-Hover above datapoints (circles on the graph) for further insights</p>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>
    //                 <br>


    //                 </br>
    //                 <Graph1Model model={modelD} />
    //                 <GraphCapitalOneModel model={modelA} />



    //             </div>

    //         )
    //     }
    //     else if (carList.length === 2) {
    //         var modelD1 = {
    //             "depreciation": carList[0].depreciation, "listPrice": carList[0].listPrice,
    //             "model": carList[0].model
    //         }
    //         var modelD2 = {
    //             "depreciation": carList[1].depreciation, "listPrice": carList[1].listPrice,
    //             "model": carList[1].model
    //         }
    //         var modelA1 = { "remain": carList[0].remain, "model": carList[0].model }
    //         var modelA2 = { "remain": carList[1].remain, "model": carList[1].model }
    //         return (
    //             <div className="page page-compare">
    //                 <img className="ellipse-blue" src={blueEllipse} />
    //                 <img className="ellipse-green" src={greenEllipse} />
    //                 <div className="graphContainer" id="graphContainer ">
    //                     <div className="section-container instruction-container">
    //                         <div className='detail-right'>
    //                             <div className="row">
    //                                 <div className="rightcolumn">
    //                                     <h2>Depreciation Graph</h2>
    //                                     <p>Depreciation is the difference between a car's value when you buy it and when you
    //                                         come to sell it.
    //                                         This drop in value varies between makes and models and the depreciation of each
    //                                         model is depicted
    //                                         on the graph for each year of ownership.</p>
    //                                     <p>-Toggle on each model's name at the bottom to remove it's data from the
    //                                         graph </p>
    //                                     <p>-Hover above datapoints (circles on the graph) for further insights</p>


    //                                 </div>

    //                                 <div className="leftcolumn"><h2>Ammoritization Graph</h2>
    //                                     <p>
    //                                         Amortization describes the process of gradually paying off your auto loan. In an
    //                                         amortizing loan,
    //                                         for each of your monthly payments, a portion is applied towards the amount of
    //                                         the loan – the
    //                                         principal – and a portion of the payment is applied towards paying the finance
    //                                         charge –
    //                                         the interest.</p>
    //                                     <p>-Toggle on each model's name at the bottom to remove it's data from the
    //                                         graph </p>
    //                                     <p>-Hover above datapoints (circles on the graph) for further insights</p>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>
    //                 <br>


    //                 </br>
    //                 <Graph2Models model1={modelD1} model2={modelD2} />
    //                 <GraphCapitalTwoModels model1={modelA1} model2={modelA2} />



    //             </div>

    //         )
    //     }
    //     else if (carList.length === 3) {
    //         var modelD1 = {
    //             "depreciation": carList[0].depreciation, "listPrice": carList[0].listPrice,
    //             "model": carList[0].model
    //         }
    //         var modelD2 = {
    //             "depreciation": carList[1].depreciation, "listPrice": carList[1].listPrice,
    //             "model": carList[1].model
    //         }
    //         var modelD3 = {
    //             "depreciation": carList[2].depreciation, "listPrice": carList[2].listPrice,
    //             "model": carList[2].model
    //         }
    //         var modelA1 = { "remain": carList[0].remain, "model": carList[0].model }
    //         var modelA2 = { "remain": carList[1].remain, "model": carList[1].model }
    //         var modelA3 = { "remain": carList[2].remain, "model": carList[2].model }
    //         return (
    //             <div className="page page-compare">
    //                 <img className="ellipse-blue" src={blueEllipse} />
    //                 <img className="ellipse-green" src={greenEllipse} />
    //                 <div className="graphContainer" id="graphContainer ">
    //                     <div className="section-container instruction-container">
    //                         <div className='detail-right'>
    //                             <div className="row">
    //                                 <div className="rightcolumn">
    //                                     <h2>Depreciation Graph</h2>
    //                                     <p>Depreciation is the difference between a car's value when you buy it and when you
    //                                         come to sell it.
    //                                         This drop in value varies between makes and models and the depreciation of each
    //                                         model is depicted
    //                                         on the graph for each year of ownership.</p>
    //                                     <p>-Toggle on each model's name at the bottom to remove it's data from the
    //                                         graph </p>
    //                                     <p>-Hover above datapoints (circles on the graph) for further insights</p>


    //                                 </div>

    //                                 <div className="leftcolumn"><h2>Ammoritization Graph</h2>
    //                                     <p>
    //                                         Amortization describes the process of gradually paying off your auto loan. In an
    //                                         amortizing loan,
    //                                         for each of your monthly payments, a portion is applied towards the amount of
    //                                         the loan – the
    //                                         principal – and a portion of the payment is applied towards paying the finance
    //                                         charge –
    //                                         the interest.</p>
    //                                     <p>-Toggle on each model's name at the bottom to remove it's data from the
    //                                         graph </p>
    //                                     <p>-Hover above datapoints (circles on the graph) for further insights</p>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>
    //                 <br>


    //                 </br>
    //                 <Graph3Models model1={modelD1} model2={modelD2} model3={modelD3} />
    //                 <GraphCapitalThreeModels model1={modelA1} model2={modelA2} model3={modelA3} />



    //             </div>

    //         )
    //     }
    //     else {
    //         var modelD1 = {
    //             "depreciation": carList[0].depreciation, "listPrice": carList[0].listPrice,
    //             "model": carList[0].model
    //         }
    //         var modelD2 = {
    //             "depreciation": carList[1].depreciation, "listPrice": carList[1].listPrice,
    //             "model": carList[1].model
    //         }
    //         var modelD3 = {
    //             "depreciation": carList[2].depreciation, "listPrice": carList[2].listPrice,
    //             "model": carList[2].model
    //         }
    //         var modelD4 = {
    //             "depreciation": carList[3].depreciation, "listPrice": carList[3].listPrice,
    //             "model": carList[3].model
    //         }
    //         var modelA1 = { "remain": carList[0].remain, "model": carList[0].model }
    //         var modelA2 = { "remain": carList[1].remain, "model": carList[1].model }
    //         var modelA3 = { "remain": carList[2].remain, "model": carList[2].model }
    //         var modelA4 = { "remain": carList[3].remain, "model": carList[3].model }
    //         return (
    //             <div className="page page-compare">
    //                 <img className="ellipse-blue" src={blueEllipse} />
    //                 <img className="ellipse-green" src={greenEllipse} />
    //                 <div className="graphContainer" id="graphContainer ">
    //                     <div className="section-container instruction-container">
    //                         <div className='detail-right'>
    //                             <div className="row">
    //                                 <div className="rightcolumn">
    //                                     <h2>Depreciation Graph</h2>
    //                                     <p>Depreciation is the difference between a car's value when you buy it and when you
    //                                         come to sell it.
    //                                         This drop in value varies between makes and models and the depreciation of each
    //                                         model is depicted
    //                                         on the graph for each year of ownership.</p>
    //                                     <p>-Toggle on each model's name at the bottom to remove it's data from the
    //                                         graph </p>
    //                                     <p>-Hover above datapoints (circles on the graph) for further insights</p>


    //                                 </div>

    //                                 <div className="leftcolumn"><h2>Ammoritization Graph</h2>
    //                                     <p>
    //                                         Amortization describes the process of gradually paying off your auto loan. In an
    //                                         amortizing loan,
    //                                         for each of your monthly payments, a portion is applied towards the amount of
    //                                         the loan – the
    //                                         principal – and a portion of the payment is applied towards paying the finance
    //                                         charge –
    //                                         the interest.</p>
    //                                     <p>-Toggle on each model's name at the bottom to remove it's data from the
    //                                         graph </p>
    //                                     <p>-Hover above datapoints (circles on the graph) for further insights</p>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>
    //                 <br>


    //                 </br>
    //                 <Graph3Models model1={modelD1} model2={modelD2} model3={modelD3} model4={modelD4} />
    //                 <GraphCapitalThreeModels model1={modelA1} model2={modelA2} model3={modelA3} model4={modelA4} />



    //             </div>

    //         )
    //     }
}


export default Compare

