import React from 'react';
import blueEllipse from '../../img/landing/background/Ellipse-blue.png';
import greenEllipse from '../../img/landing/background/Ellipse-green.png';
import {Line} from 'react-chartjs-2';
import {Graph1Model} from "./depreciation";


const Compare = () => {
    return (
        <div className="page page-compare">
            <img className="ellipse-blue" src={blueEllipse} />
            <img className="ellipse-green" src={greenEllipse} />
            <div className='detail-right'>
                <h1>Interpreting the Graph</h1>
                <p>View the Ammoritization graph: In order to understand what your monthly payments will look like
                    and how much of it will be going towards your interest and how much will be going towards your
                    capital. </p>
                <p>View the Depreciation graph: In order to understand what the resale value of your vehicle will be
                    after a specific amount of time. For example, if you plan to sell your vehicle after 5 years of
                    owning it is important to know how much value each model will lose and how much you will be able to
                resell each for</p>
                <h2>Instructions</h2>
                <p>Toggle on each model to remove it's data from the graph </p>
                <p>Hover above datapoints (circles on the graph) for further insights</p>
            </div>
           <Graph1Model newModelA = {{"listPrice": 27600, "model": "Honda CR-V",
            "depreciation": [0.78, 0.73, 0.72, 0.69, 0.61, 0.53, 0.44, 0.44, 0.38, 0.34]}} usedModelA = {{"listPrice":  27600, "model": "Honda Clarity",
            "depreciation": [0.86, 0.81, 0.78, 0.75, 0.72, 0.71, 0.69, 0.65, 0.61, 0.55]}} />


        </div>

    )
}

export default Compare