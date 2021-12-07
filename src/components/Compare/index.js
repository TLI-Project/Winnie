import React from 'react';
import blueEllipse from '../../img/landing/background/Ellipse-blue.png';
import greenEllipse from '../../img/landing/background/Ellipse-green.png';
import {Line} from 'react-chartjs-2';
import {Graph1Model, Graph2Models, Graph3Models, Graph4Models} from "./depreciation";
import {GraphCapitalOneModel, GraphCapitalTwoModels, GraphCapitalThreeModels, GraphCapitalFourModels} from "./ammoritization"

const Compare = () => {
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
            <br>


            </br>
           <Graph2Models model1 = {{"listPrice": 27600, "model": "Honda CR-V",
            "depreciation": [0.78, 0.73, 0.72, 0.69, 0.61, 0.53, 0.44, 0.44, 0.38, 0.34]}}  model2 = {{"listPrice":  27600, "model": "Honda Clarity",
            "depreciation": [0.86, 0.81, 0.78, 0.75, 0.72, 0.71, 0.69, 0.65, 0.61, 0.55]}} />
            <GraphCapitalTwoModels model1 = {{"installments":[{"capital":270.79,"interest":14.5,"installment":285.29,"remain":9729.21,"interestSum":14.5},{"capital":271.18,"interest":14.11,"installment":285.29,"remain":9458.029999999999,"interestSum":28.61},{"capital":271.58000000000004,"interest":13.71,"installment":285.29,"remain":9186.45,"interestSum":42.32},{"capital":271.97,"interest":13.32,"installment":285.29,"remain":8914.480000000001,"interestSum":55.64},{"capital":272.36,"interest":12.93,"installment":285.29,"remain":8642.119999999999,"interestSum":68.57},{"capital":272.76000000000005,"interest":12.53,"installment":285.29,"remain":8369.359999999999,"interestSum":81.1},{"capital":273.15000000000003,"interest":12.14,"installment":285.29,"remain":8096.210000000001,"interestSum":93.24},{"capital":273.55,"interest":11.74,"installment":285.29,"remain":7822.66,"interestSum":104.97999999999999},{"capital":273.95000000000005,"interest":11.34,"installment":285.29,"remain":7548.71,"interestSum":116.32},{"capital":274.34000000000003,"interest":10.95,"installment":285.29,"remain":7274.37,"interestSum":127.27},{"capital":274.74,"interest":10.55,"installment":285.29,"remain":6999.63,"interestSum":137.82},{"capital":275.14000000000004,"interest":10.15,"installment":285.29,"remain":6724.49,"interestSum":147.97},{"capital":275.54,"interest":9.75,"installment":285.29,"remain":6448.95,"interestSum":157.72},{"capital":275.94,"interest":9.35,"installment":285.29,"remain":6173.010000000001,"interestSum":167.07},{"capital":276.34000000000003,"interest":8.95,"installment":285.29,"remain":5896.67,"interestSum":176.01999999999998},{"capital":276.74,"interest":8.55,"installment":285.29,"remain":5619.93,"interestSum":184.57},{"capital":277.14000000000004,"interest":8.15,"installment":285.29,"remain":5342.79,"interestSum":192.72},{"capital":277.54,"interest":7.75,"installment":285.29,"remain":5065.25,"interestSum":200.47},{"capital":277.95000000000005,"interest":7.34,"installment":285.29,"remain":4787.3,"interestSum":207.81},{"capital":278.35,"interest":6.94,"installment":285.29,"remain":4508.95,"interestSum":214.75},{"capital":278.75,"interest":6.54,"installment":285.29,"remain":4230.2,"interestSum":221.29},{"capital":279.16,"interest":6.13,"installment":285.29,"remain":3951.04,"interestSum":227.42},{"capital":279.56,"interest":5.73,"installment":285.29,"remain":3671.48,"interestSum":233.14999999999998},{"capital":279.97,"interest":5.32,"installment":285.29,"remain":3391.5099999999993,"interestSum":238.46999999999997},{"capital":280.37,"interest":4.92,"installment":285.29,"remain":3111.1399999999994,"interestSum":243.38999999999996},{"capital":280.78000000000003,"interest":4.51,"installment":285.29,"remain":2830.359999999999,"interestSum":247.89999999999995},{"capital":281.19,"interest":4.1,"installment":285.29,"remain":2549.1699999999996,"interestSum":251.99999999999994},{"capital":281.59000000000003,"interest":3.7,"installment":285.29,"remain":2267.58,"interestSum":255.69999999999993},{"capital":282,"interest":3.29,"installment":285.29,"remain":1985.58,"interestSum":258.98999999999995},{"capital":282.41,"interest":2.88,"installment":285.29,"remain":1703.1699999999998,"interestSum":261.86999999999995},{"capital":282.82,"interest":2.47,"installment":285.29,"remain":1420.3500000000001,"interestSum":264.34},{"capital":283.23,"interest":2.06,"installment":285.29,"remain":1137.1200000000003,"interestSum":266.4},{"capital":283.64000000000004,"interest":1.65,"installment":285.29,"remain":853.4800000000007,"interestSum":268.04999999999995},{"capital":284.05,"interest":1.24,"installment":285.29,"remain":569.4300000000014,"interestSum":269.28999999999996},{"capital":284.46000000000004,"interest":0.83,"installment":285.29,"remain":284.9700000000021,"interestSum":270.11999999999995},{"capital":284.88,"interest":0.41,"installment":285.29,"remain":0,"interestSum":270.53}],"amount":10000,"interestSum":270.53,"capitalSum":10000,"sum":10270.53,"interestRate":1.74,"term":"36"}
            } model2 = {{"installments":[{"capital":159.63000000000002,"interest":14.7,"installment":174.33,"remain":5840.37,"interestSum":14.7},{"capital":160.02,"interest":14.31,"installment":174.33,"remain":5680.349999999999,"interestSum":29.009999999999998},{"capital":160.41000000000003,"interest":13.92,"installment":174.33,"remain":5519.9400000000005,"interestSum":42.93},{"capital":160.81,"interest":13.52,"installment":174.33,"remain":5359.129999999999,"interestSum":56.45},{"capital":161.20000000000002,"interest":13.13,"installment":174.33,"remain":5197.93,"interestSum":69.58},{"capital":161.60000000000002,"interest":12.73,"installment":174.33,"remain":5036.33,"interestSum":82.31},{"capital":161.99,"interest":12.34,"installment":174.33,"remain":4874.34,"interestSum":94.65},{"capital":162.39000000000001,"interest":11.94,"installment":174.33,"remain":4711.95,"interestSum":106.59},{"capital":162.79000000000002,"interest":11.54,"installment":174.33,"remain":4549.16,"interestSum":118.13},{"capital":163.18,"interest":11.15,"installment":174.33,"remain":4385.98,"interestSum":129.28},{"capital":163.58,"interest":10.75,"installment":174.33,"remain":4222.4,"interestSum":140.03},{"capital":163.99,"interest":10.34,"installment":174.33,"remain":4058.41,"interestSum":150.37},{"capital":164.39000000000001,"interest":9.94,"installment":174.33,"remain":3894.02,"interestSum":160.31},{"capital":164.79000000000002,"interest":9.54,"installment":174.33,"remain":3729.2299999999996,"interestSum":169.85},{"capital":165.19,"interest":9.14,"installment":174.33,"remain":3564.0399999999995,"interestSum":178.99},{"capital":165.60000000000002,"interest":8.73,"installment":174.33,"remain":3398.4399999999996,"interestSum":187.72},{"capital":166,"interest":8.33,"installment":174.33,"remain":3232.4399999999996,"interestSum":196.05},{"capital":166.41000000000003,"interest":7.92,"installment":174.33,"remain":3066.0299999999997,"interestSum":203.97},{"capital":166.82000000000002,"interest":7.51,"installment":174.33,"remain":2899.2099999999996,"interestSum":211.48},{"capital":167.23000000000002,"interest":7.1,"installment":174.33,"remain":2731.9799999999996,"interestSum":218.57999999999998},{"capital":167.64000000000001,"interest":6.69,"installment":174.33,"remain":2564.3399999999997,"interestSum":225.26999999999998},{"capital":168.05,"interest":6.28,"installment":174.33,"remain":2396.2899999999995,"interestSum":231.54999999999998},{"capital":168.46,"interest":5.87,"installment":174.33,"remain":2227.8299999999995,"interestSum":237.42},{"capital":168.87,"interest":5.46,"installment":174.33,"remain":2058.9599999999996,"interestSum":242.88},{"capital":169.29000000000002,"interest":5.04,"installment":174.33,"remain":1889.6699999999996,"interestSum":247.92},{"capital":169.70000000000002,"interest":4.63,"installment":174.33,"remain":1719.9699999999991,"interestSum":252.54999999999998},{"capital":170.12,"interest":4.21,"installment":174.33,"remain":1549.8499999999995,"interestSum":256.76},{"capital":170.53,"interest":3.8,"installment":174.33,"remain":1379.3199999999995,"interestSum":260.56},{"capital":170.95000000000002,"interest":3.38,"installment":174.33,"remain":1208.3699999999997,"interestSum":263.94},{"capital":171.37,"interest":2.96,"installment":174.33,"remain":1037,"interestSum":266.9},{"capital":171.79000000000002,"interest":2.54,"installment":174.33,"remain":865.21,"interestSum":269.44},{"capital":172.21,"interest":2.12,"installment":174.33,"remain":693,"interestSum":271.56},{"capital":172.63000000000002,"interest":1.7,"installment":174.33,"remain":520.37,"interestSum":273.26},{"capital":173.06,"interest":1.27,"installment":174.33,"remain":347.3099999999999,"interestSum":274.53},{"capital":173.48000000000002,"interest":0.85,"installment":174.33,"remain":173.82999999999947,"interestSum":275.38},{"capital":173.9,"interest":0.43,"installment":174.33,"remain":0,"interestSum":275.81}],"amount":6000,"interestSum":275.81,"capitalSum":6000,"sum":6275.81,"interestRate":2.94,"term":"36"}
            }
            />



        </div>

    )
}

export default Compare