import React from 'react';
import blueEllipse from '../../img/landing/background/Ellipse-blue.png';
import greenEllipse from '../../img/landing/background/Ellipse-green.png';
import {Line} from 'react-chartjs-2';
import {Graph1Model} from "./depreciation";


const Compare = (props) => {
    const print = () => {
        console.log(props.body)
    }

    // const finance = { {...}

    // }
    // const carIds = { [...]

    // }

    return (
        <div className="page page-compare">
            <img className="ellipse-blue" src={blueEllipse} />
            <img className="ellipse-green" src={greenEllipse} />
            return <Graph1Model newModelA = {{"listPrice": 27600, "model": "Honda CR-V",
            "depreciation": [0.78, 0.73, 0.72, 0.69, 0.61, 0.53, 0.44, 0.44, 0.38, 0.34]}} usedModelA = {{"listPrice":  27600, "model": "Honda Clarity",
            "depreciation": [0.86, 0.81, 0.78, 0.75, 0.72, 0.71, 0.69, 0.65, 0.61, 0.55]}} />
            <button onClick={print}>AAAA</button>



        </div>

    )
}

export default Compare