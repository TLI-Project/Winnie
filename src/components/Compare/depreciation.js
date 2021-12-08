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


export function Graph1Model(props) {
    //get the line chart canvas
    var yValues = [];
    for (let i = 0; i < props.model["depreciation"].length; i++){
        yValues.push(props.model["depreciation"][i]* props.model["listPrice"]);
        console.log(props.model["depreciation"][i]* props.model["listPrice"]);
    }

    //line chart data
    var data = {
        labels: ["Year 1", "Year 2", "Year 3", "Year 4", "Year 5", "Year 6", "Year 7", "Year 8", "Year 9", "Year 10"],
        datasets: [
            {
                label: props.model["model"],
                data: yValues,
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
    };



        return <Line options={options} data={data}  type={"line"}/>;

}

export function Graph2Models(props) {
    //get the line chart canvas
    var yValuesM1 = [];
    // Initialize the least depreciating variable to be the first model's final depreciation value
    var leastDepreciating = [props.model1["depreciation"][props.model1["depreciation"].length -1],
        props.model1["model"]];
    var ranking = "";
    for (let i = 0; i < props.model1["depreciation"].length; i++){
        yValuesM1.push(props.model1["depreciation"][i]* props.model1["listPrice"]);
        console.log(props.model1["depreciation"][i]* props.model1["listPrice"]);
    }

    var yValuesM2 = [];
    for (let i = 0; i < props.model2["depreciation"].length; i++){
        yValuesM2.push(props.model2["depreciation"][i]* props.model2["listPrice"]);
        console.log(props.model2["depreciation"][i]* props.model2["listPrice"]);
        if (i === props.model2["depreciation"].length -1){
            if(props.model2["depreciation"][i] > leastDepreciating[0]){
                leastDepreciating = [props.model2["depreciation"][props.model2["depreciation"].length -1],
                    props.model2["model"]];
            }
        }
    }

    for (let i = 0; i < ranking.length; i++){


    }

    //line chart data
    var data = {
        labels: ["Year 1", "Year 2", "Year 3", "Year 4", "Year 5", "Year 6", "Year 7", "Year 8", "Year 9", "Year 10"],
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
                backgroundColor: "gray",
                borderColor: "lightgray",
                fill: false,
                lineTension: 0,
                radius: 5
            },

        ]
    };

    //options
    var options = {
        plugins: {
            responsive: true,
            title: {
                display: true,
                position: "top",
                text: "Vehicle Depreciation Projection \n Best Option Over 10 Years: " + leastDepreciating[1],
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

export function Graph3Models(props) {

    //get the line chart canvas
    var yValuesM1 = [];
    for (let i = 0; i < props.model1["depreciation"].length; i++){
        yValuesM1.push(props.model1["depreciation"][i]* props.model1["listPrice"]);
        console.log(props.model1["depreciation"][i]* props.model1["listPrice"]);
    }

    var yValuesM2 = [];
    for (let i = 0; i < props.model2["depreciation"].length; i++){
        yValuesM2.push(props.model2["depreciation"][i]* props.model2["listPrice"]);
        console.log(props.model2["depreciation"][i]* props.model2["listPrice"]);
    }

    var yValuesM3 = [];
    for (let i = 0; i < props.model3["depreciation"].length; i++){
        yValuesM3.push(props.model3["depreciation"][i]* props.model3["listPrice"]);
        console.log(props.model3["depreciation"][i]* props.model3["listPrice"]);
    }


    //line chart data
    var data = {
        labels: ["Year 1", "Year 2", "Year 3", "Year 4", "Year 5", "Year 6", "Year 7", "Year 8", "Year 9", "Year 10"],
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
                backgroundColor: "gray",
                borderColor: "lightgray",
                fill: false,
                lineTension: 0,
                radius: 5
            },
            {
                label: props.model3["model"],
                data: yValuesM3,
                backgroundColor: "gray",
                borderColor: "darkgray",
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
    };
    return <Line options={options} data={data}  type={"line"}/>;

}

export function Graph4Models(props) {
    //get the line chart canvas
    var yValuesM1 = [];
    for (let i = 0; i < props.model1["depreciation"].length; i++){
        yValuesM1.push(props.model1["depreciation"][i]* props.model1["listPrice"]);
        console.log(props.model1["depreciation"][i]* props.model1["listPrice"]);
    }

    var yValuesM2 = [];
    for (let i = 0; i < props.model2["depreciation"].length; i++){
        yValuesM2.push(props.model2["depreciation"][i]* props.model2["listPrice"]);
        console.log(props.model2["depreciation"][i]* props.model2["listPrice"]);
    }

    var yValuesM3 = [];
    for (let i = 0; i < props.model3["depreciation"].length; i++){
        yValuesM3.push(props.model3["depreciation"][i]* props.model3["listPrice"]);
        console.log(props.model3["depreciation"][i]* props.model3["listPrice"]);
    }

    var yValuesM4 = [];
    for (let i = 0; i < props.model4["depreciation"].length; i++){
        yValuesM4.push(props.model4["depreciation"][i]* props.model4["listPrice"]);
        console.log(props.model4["depreciation"][i]* props.model4["listPrice"]);
    }


    //line chart data
    var data = {
        labels: ["Year 1", "Year 2", "Year 3", "Year 4", "Year 5", "Year 6", "Year 7", "Year 8", "Year 9", "Year 10"],
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
                backgroundColor: "gray",
                borderColor: "lightgray",
                fill: false,
                lineTension: 0,
                radius: 5
            },
            {
                label: props.model3["model"],
                data: yValuesM3,
                backgroundColor: "gray",
                borderColor: "darkgray",
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
    };

    //create Chart class object
    return <Line options={options} data={data}  type={"line"}/>;

}
