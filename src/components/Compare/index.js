import React from 'react';
import blueEllipse from '../../img/landing/background/Ellipse-blue.png';
import greenEllipse from '../../img/landing/background/Ellipse-green.png';
import {Line} from 'react-chartjs-2';

const Compare = () => {
    return (
        <div className="page page-compare">
            <img className="ellipse-blue" src={blueEllipse} />
            <img className="ellipse-green" src={greenEllipse} />

            export function Graph1Model(props) {

            //get the line chart canvas
            var yValuesNew = [];
            for (let i = 0; i < props.newModel["depreciation"].length; i++){
            yValuesNew.push(props.newModel["depreciation"][i]* props.newModel["listPrice"]);
            console.log(props.newModel["depreciation"][i]* props.newModel["listPrice"]);
        }

            var yValuesUsed = [];
            for (let i = 0; i < props.usedModel["depreciation"].length; i++){
            yValuesUsed.push(props.usedModel["depreciation"][i]* props.usedModel["listPrice"]);
            console.log(props.usedModel["depreciation"][i]* props.usedModel["listPrice"]);
            }
            //line chart data
            var data = {
            labels: ["Year 1", "Year 2", "Year 3", "Year 4", "Year 5", "Year 6", "Year 7", "Year 8", "Year 9", "Year 10"],
            datasets: [
        {
            label: "New",
            data: yValuesNew,
            backgroundColor: "blue",
            borderColor: "lightblue",
            fill: false,
            lineTension: 0,
            radius: 5
        },
        {
            label: "Used",
            data: yValuesUsed,
            backgroundColor: "green",
            borderColor: "lightgreen",
            fill: false,
            lineTension: 0,
            radius: 5
        }
            ]
        };

            //options
            var options = {
            responsive: true,
            title: {
            display: true,
            position: "top",
            text: "Vehicle Depreciation Projection",
            fontSize: 18,
            fontColor: "#111"
        },
            legend: {
            display: true,
            position: "bottom",
            labels: {
            fontColor: "#333",
            fontSize: 16
        }
        }
        }

            //create Chart class object
            return <Line options={options} data={data}  type={"line"}/>;

        }

}
        </div>

    )
}

export default Compare