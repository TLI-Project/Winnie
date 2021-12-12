import React from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);
export function GraphCapitalOneModel(props) {

    //get the line chart canvas
    var xValues = [];
    var yValuesM1 = [];
    const num_remain = props.model["remain"].length
    for(let i = 1; i <= num_remain; i++){
        xValues.push(i);
    }
    for (let i = 0; i < num_remain; i++){
        yValuesM1.push(props.model["remain"][i]);
    }
    console.log(yValuesM1)

    //line chart data
    var data = {
        labels: xValues,
        datasets: [
            {
                label: props.model["model"],
                data: yValuesM1,
                backgroundColor: "blue",
                borderColor: "lightblue",
                fill: false,
                lineTension: 0,
                radius: 5
            }
        ]
    };

    //options
    var options = {
        plugins: {
            responsive: true,
            title: {
                display: true,
                position: "top",
                text: "Vehicle Capital and Interest",
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
    };


    return <Line options={options} data={data}  type={"line"}/>;
}

export function GraphCapitalTwoModels(props) {

    //get the line chart canvas
    var xValues = [];
    var yValuesM1 = [];
    var yValuesM2 = [];
    const num_remain = props.model1["remain"].length
    for(let i = 1; i <= num_remain; i++){
        xValues.push(i);
    }
    for (let i = 0; i < num_remain; i++){
        yValuesM1.push(props.model1["remain"][i]);
        console.log(props.model1["remain"][i]);
    }
    for (let i = 0; i < num_remain; i++){
        yValuesM2.push(props.model2["remain"][i]);
        console.log(props.model2["remain"][i]);
    }
    console.log(yValuesM1)
    console.log(yValuesM2)

    //line chart data
    var data = {
        labels: xValues,
        datasets: [
            {
                label:  props.model1["model"],
                data: yValuesM1,
                backgroundColor: "blue",
                borderColor: "lightblue",
                fill: false,
                lineTension: 0,
                radius: 5
            },
            {
                label: props.model2["model"],
                data: yValuesM2,
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
        plugins: {
            responsive: true,
            title: {
                display: true,
                position: "top",
                text: "Vehicle Capital and Interest",
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
    };

    return <Line options={options} data={data}  type={"line"}/>;
}

export function GraphCapitalThreeModels(props) {

    //get the line chart canvas
    var xValues = [];
    var yValuesM1 = [];
    var yValuesM2 = [];
    var yValuesM3 = [];
    const num_remain = props.model1["remain"].length
    for(let i = 1; i <= num_remain; i++){
        xValues.push(i);
    }
    for (let i = 0; i < num_remain; i++){
        yValuesM1.push(props.model1["remain"][i]);
        console.log(props.model1["remain"][i]);
    }
    for (let i = 0; i < num_remain; i++){
        yValuesM2.push(props.model2["remain"][i]);
        console.log(props.model2["remain"][i]);
    }
    for (let i = 0; i < num_remain; i++){
        yValuesM3.push(props.model3["remain"][i]);
        console.log(props.model3["remain"][i]);
    }
    console.log(yValuesM1)
    console.log(yValuesM2)
    console.log(yValuesM3)

    //line chart data
    var data = {
        labels: xValues,
        datasets: [
            {
                label: props.model1["model"],
                data: yValuesM1,
                backgroundColor: "blue",
                borderColor: "lightblue",
                fill: false,
                lineTension: 0,
                radius: 5
            },
            {
                label: props.model2["model"],
                data: yValuesM2,
                backgroundColor: "green",
                borderColor: "lightgreen",
                fill: false,
                lineTension: 0,
                radius: 5
            },
            {
                label: props.model3["model"],
                data: yValuesM3,
                backgroundColor: "blue",
                borderColor: "darkblue",
                fill: false,
                lineTension: 0,
                radius: 5
            }
        ]
    };

    //options
    var options = {
        plugins: {
            responsive: true,
            title: {
                display: true,
                position: "top",
                text: "Vehicle Capital and Interest",
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
    };

    return <Line options={options} data={data}  type={"line"}/>;
}

export function GraphCapitalFourModels(props) {
// function graphCapitalFourModels(newModel1, newModel2, newModel3,newModel4, usedModel1, usedModel2, usedModel3, usedModel4){

    //get the line chart canvas
    var xValues = [];
    var yValuesM1 = [];
    var yValuesM2 = [];
    var yValuesM3 = [];
    var yValuesM4 = [];
    const num_remain = props.model1["remain"].length
    for(let i = 1; i <= num_remain; i++){
        xValues.push(i);
    }
    for (let i = 0; i < num_remain; i++){
        yValuesM1.push(props.model1["remain"][i]);
        console.log(props.model1["remain"][i]);
    }
    for (let i = 0; i < num_remain; i++){
        yValuesM2.push(props.model2["remain"][i]);
        console.log(props.model2["remain"][i]);
    }
    for (let i = 0; i < num_remain; i++){
        yValuesM3.push(props.model3["remain"][i]);
        console.log(props.model3["remain"][i]);
    }
    for (let i = 0; i < num_remain; i++){
        yValuesM4.push(props.model4["remain"][i]);
        console.log(props.model4["remain"][i]);
    }
    console.log(yValuesM1)
    console.log(yValuesM2)
    console.log(yValuesM3)
    console.log(yValuesM4)
    //line chart data
    var data = {
        labels: xValues,
        datasets: [
            {
                label: props.model1["model"],
                data: yValuesM1,
                backgroundColor: "blue",
                borderColor: "lightblue",
                fill: false,
                lineTension: 0,
                radius: 5
            },
            {
                label: props.model2["model"],
                data: yValuesM2,
                backgroundColor: "green",
                borderColor: "lightgreen",
                fill: false,
                lineTension: 0,
                radius: 5
            },
            {
                label: props.model3["model"],
                data: yValuesM3,
                backgroundColor: "blue",
                borderColor: "darkblue",
                fill: false,
                lineTension: 0,
                radius: 5
            },
            {
                label: props.model4["model"],
                data: yValuesM4,
                backgroundColor: "green",
                borderColor: "darkgreen",
                fill: false,
                lineTension: 0,
                radius: 5
            }
        ]
    };

    //options
    var options = {
        plugins: {
            responsive: true,
            title: {
                display: true,
                position: "top",
                text: "Vehicle Capital and Interest",
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
    };

    return <Line options={options} data={data}  type={"line"}/>;
}

