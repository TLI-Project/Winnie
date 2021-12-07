import React from 'react';
import blueEllipse from '../../img/landing/background/Ellipse-blue.png';
import greenEllipse from '../../img/landing/background/Ellipse-green.png';
import { Link, useHistory, useLocation } from 'react-router-dom';
import {Line} from 'react-chartjs-2';
import {Graph1Model} from "./depreciation";


const Compare = () => {
    //passing states:
    const location = useLocation();
    const { state } = location;
    const finance = state.inputData;
    const carList = state.selected;
    console.log(carList)
    console.log(finance)

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



    return (
        <div className="page page-compare">
            <img className="ellipse-blue" src={blueEllipse} />
            <img className="ellipse-green" src={greenEllipse} />
            <div className="graphContainer" id="graphContainer ">
            <div className="section-container instruction-container">
            <div className='detail-right'>
                <div className="row">
                    <div className="rightcolumn">
                        <h2>Depreciation Graph</h2>
                <p>Depreciation is the difference between a car's value when you buy it and when you come to sell it.
                    This drop in value varies between makes and models and the depreciation of each model is depicted
                    on the graph for each year of ownership.</p>
                        <p>-Toggle on each model's name at the bottom to remove it's data from the graph </p>
                        <p>-Hover above datapoints (circles on the graph) for further insights</p>


                    </div>

                <div className= "leftcolumn"><h2>Ammoritization Graph</h2>
                <p>
                    Amortization describes the process of gradually paying off your auto loan. In an amortizing loan,
                    for each of your monthly payments, a portion is applied towards the amount of the loan – the
                    principal – and a portion of the payment is applied towards paying the finance charge –
                    the interest.</p>
                    <p>-Toggle on each model's name at the bottom to remove it's data from the graph </p>
                    <p>-Hover above datapoints (circles on the graph) for further insights</p>
                </div>
                 </div>
            </div>
            </div>
            </div>
           <Graph1Model newModelA = {{"listPrice": 27600, "model": "Honda CR-V",
            "depreciation": [0.78, 0.73, 0.72, 0.69, 0.61, 0.53, 0.44, 0.44, 0.38, 0.34]}} usedModelA = {{"listPrice":  27600, "model": "Honda Clarity",
            "depreciation": [0.86, 0.81, 0.78, 0.75, 0.72, 0.71, 0.69, 0.65, 0.61, 0.55]}} />



        </div>

    )
}

export default Compare