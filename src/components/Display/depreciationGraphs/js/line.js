import React from 'react';
import { Line } from 'react-chartjs-2';


export function graph1Model(props) {
//function graph1Model(newModel, usedModel){

    //get the line chart canvas
    var ctx = $("#line-chartcanvas");
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
    };

    //create Chart class object


        return <Line options={options} data={data}  type={"line"}/>;
    // return <graph1Model props />;
    // var chart = new Chart(ctx, {
    //     type: "line",
    //     data: data,
    //     options: options
    // });
}
//TEST
// return(graph1Model(newModel = {"listPrice": 27600, "model": "Honda CR-V",
//     "depreciation": [0.78, 0.73, 0.72, 0.69, 0.61, 0.53, 0.44, 0.44, 0.38, 0.34]}, usedModel = {"listPrice":  27600, "model": "Honda Clarity",
//     "depreciation": [0.86, 0.81, 0.78, 0.75, 0.72, 0.71, 0.69, 0.65, 0.61, 0.55]}))


export function graph2Models(props) {
    //get the line chart canvas
    var ctx1 = $("#line-chartcanvas");
    var yValuesNM1 = [];
    for (let i = 0; i < props.newModel1["depreciation"].length; i++){
        yValuesNM1.push(props.newModel1["depreciation"][i]* props.newModel1["listPrice"]);
        console.log(props.newModel1["depreciation"][i]* props.newModel1["listPrice"]);
    }

    var yValuesNM2 = [];
    for (let i = 0; i < props.newModel2["depreciation"].length; i++){
        yValuesNM2.push(props.newModel2["depreciation"][i]* props.newModel2["listPrice"]);
        console.log(props.newModel2["depreciation"][i]* props.newModel2["listPrice"]);
    }

    var yValuesUM1 = [];
    for (let i = 0; i < props.usedModel1["depreciation"].length; i++){
        yValuesUM1.push(props.usedModel1["depreciation"][i]* props.usedModel1["listPrice"]);
        console.log(props.usedModel1["depreciation"][i]* props.usedModel1["listPrice"]);
    }

    var yValuesUM2 = [];
    for (let i = 0; i < props.usedModel2["depreciation"].length; i++){
        yValuesUM2.push(props.usedModel2["depreciation"][i]* props.usedModel2["listPrice"]);
        console.log(props.usedModel2["depreciation"][i]* props.usedModel2["listPrice"]);
    }
    //line chart data
    var data = {
        labels: ["Year 1", "Year 2", "Year 3", "Year 4", "Year 5", "Year 6", "Year 7", "Year 8", "Year 9", "Year 10"],
        datasets: [
            {
                label: props.newModel1["model"]+ " New",
                data: yValuesNM1,
                backgroundColor: "blue",
                borderColor: "lightblue",
                fill: false,
                lineTension: 0,
                radius: 5
            },
            {
                label: props.newModel2["model"]+ " New",
                data: yValuesNM2,
                backgroundColor: "gray",
                borderColor: "lightgray",
                fill: false,
                lineTension: 0,
                radius: 5
            },
            {
                label: props.usedModel1["model"]+ " Used",
                data: yValuesUM1,
                backgroundColor: "pink",
                borderColor: "lightpink",
                fill: false,
                lineTension: 0,
                radius: 5
            },
            {
                label: props.usedModel2["model"]+ " Used",
                data: yValuesUM2,
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
    };
    return <Line options={options} data={data}  type={"line"}/>;
    //create Chart class object
    // var chart = new Chart(ctx1, {
    //     type: "line",
    //     data: data,
    //     options: options
    // });
}

// graph2Models({"listPrice": 27600, "model": "Honda CR-V",
//     "depreciation": [0.78, 0.73, 0.72, 0.69, 0.61, 0.53, 0.44, 0.44, 0.38, 0.34]}, {"listPrice": 27600, "model": "Honda CR-V",
//     "depreciation": [0.60, 0.53, 0.42, 0.39, 0.31, 0.23, 0.14, 0.14, 0.08, 0.04]}, {"listPrice":  27600, "model": "Honda Clarity",
//     "depreciation": [0.86, 0.81, 0.78, 0.75, 0.72, 0.71, 0.69, 0.65, 0.61, 0.55]}, {"listPrice": 27600, "model": "Honda CR-V",
//     "depreciation": [0.88, 0.83, 0.82, 0.79, 0.71, 0.63, 0.54, 0.54, 0.48, 0.44]})
export function graph3Models(props) {

    //get the line chart canvas
    var ctx2 = $("#line-chartcanvas");
    var yValuesNM1 = [];
    for (let i = 0; i < props.newModel1["depreciation"].length; i++){
        yValuesNM1.push(props.newModel1["depreciation"][i]* props.newModel1["listPrice"]);
        console.log(props.newModel1["depreciation"][i]* props.newModel1["listPrice"]);
    }

    var yValuesNM2 = [];
    for (let i = 0; i < props.newModel2["depreciation"].length; i++){
        yValuesNM2.push(props.newModel2["depreciation"][i]* props.newModel2["listPrice"]);
        console.log(props.newModel2["depreciation"][i]* props.newModel2["listPrice"]);
    }

    var yValuesNM3 = [];
    for (let i = 0; i < props.newModel3["depreciation"].length; i++){
        yValuesNM3.push(props.newModel3["depreciation"][i]* props.newModel3["listPrice"]);
        console.log(props.newModel3["depreciation"][i]* props.newModel3["listPrice"]);
    }

    var yValuesUM1 = [];
    for (let i = 0; i < props.usedModel1["depreciation"].length; i++){
        yValuesUM1.push(props.usedModel1["depreciation"][i]* props.usedModel1["listPrice"]);
        console.log(props.usedModel1["depreciation"][i]* props.usedModel1["listPrice"]);
    }

    var yValuesUM2 = [];
    for (let i = 0; i < props.usedModel2["depreciation"].length; i++){
        yValuesUM2.push(props.usedModel2["depreciation"][i]* props.usedModel2["listPrice"]);
        console.log(props.usedModel2["depreciation"][i]* props.usedModel2["listPrice"]);
    }

    var yValuesUM3 = [];
    for (let i = 0; i < props.usedModel3["depreciation"].length; i++){
        yValuesUM3.push(props.usedModel3["depreciation"][i]* props.usedModel3["listPrice"]);
        console.log(props.usedModel3["depreciation"][i]* props.usedModel3["listPrice"]);
    }

    //line chart data
    var data = {
        labels: ["Year 1", "Year 2", "Year 3", "Year 4", "Year 5", "Year 6", "Year 7", "Year 8", "Year 9", "Year 10"],
        datasets: [
            {
                label: props.newModel1["model"]+ " New",
                data: yValuesNM1,
                backgroundColor: "blue",
                borderColor: "lightblue",
                fill: false,
                lineTension: 0,
                radius: 5
            },
            {
                label: props.newModel2["model"]+ " New",
                data: yValuesNM2,
                backgroundColor: "gray",
                borderColor: "lightgray",
                fill: false,
                lineTension: 0,
                radius: 5
            },
            {
                label: props.newModel3["model"]+ " New",
                data: yValuesNM3,
                backgroundColor: "gray",
                borderColor: "darkgray",
                fill: false,
                lineTension: 0,
                radius: 5
            },
            {
                label: props.usedModel1["model"]+ " Used",
                data: yValuesUM1,
                backgroundColor: "pink",
                borderColor: "lightpink",
                fill: false,
                lineTension: 0,
                radius: 5
            },
            {
                label: props.usedModel2["model"]+ " Used",
                data: yValuesUM2,
                backgroundColor: "green",
                borderColor: "lightgreen",
                fill: false,
                lineTension: 0,
                radius: 5
            },
            {
                label: props.usedModel3["model"]+ " Used",
                data: yValuesUM3,
                backgroundColor: "black",
                borderColor: "darkgray",
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
    };
    return <Line options={options} data={data}  type={"line"}/>;
    // //create Chart class object
    // var chart = new Chart(ctx2, {
    //     type: "line",
    //     data: data,
    //     options: options
    // });
}
// graph3Models({"listPrice": 27600, "model": "Honda CR-V",
//     "depreciation": [0.78, 0.73, 0.72, 0.69, 0.61, 0.53, 0.44, 0.44, 0.38, 0.34]}, {"listPrice": 23600, "model": "Honda CR-V",
//     "depreciation": [0.60, 0.53, 0.42, 0.39, 0.31, 0.23, 0.14, 0.14, 0.08, 0.04]}, {"listPrice":  37600, "model": "Honda Clarity",
//     "depreciation": [0.86, 0.81, 0.78, 0.75, 0.72, 0.71, 0.69, 0.65, 0.61, 0.55]}, {"listPrice": 21600, "model": "Honda CR-V",
//     "depreciation": [0.85, 0.83, 0.81, 0.79, 0.73, 0.67, 0.64, 0.57, 0.48, 0.44]}, {"listPrice": 36600, "model": "Honda CR-V",
//     "depreciation": [0.88, 0.83, 0.82, 0.79, 0.71, 0.63, 0.54, 0.54, 0.48, 0.44]}, {"listPrice": 24600, "model": "Honda CR-V",
//     "depreciation": [0.91, 0.83, 0.82, 0.79, 0.71, 0.63, 0.54, 0.54, 0.48, 0.44]})
export function graph4Models(props) {
    //get the line chart canvas
    var ctx2 = $("#line-chartcanvas");
    var yValuesNM1 = [];
    for (let i = 0; i < props.newModel1["depreciation"].length; i++){
        yValuesNM1.push(props.newModel1["depreciation"][i]* props.newModel1["listPrice"]);
        console.log(props.newModel1["depreciation"][i]* props.newModel1["listPrice"]);
    }

    var yValuesNM2 = [];
    for (let i = 0; i < props.newModel2["depreciation"].length; i++){
        yValuesNM2.push(props.newModel2["depreciation"][i]* props.newModel2["listPrice"]);
        console.log(props.newModel2["depreciation"][i]* props.newModel2["listPrice"]);
    }

    var yValuesNM3 = [];
    for (let i = 0; i < props.newModel3["depreciation"].length; i++){
        yValuesNM3.push(props.newModel3["depreciation"][i]* props.newModel3["listPrice"]);
        console.log(props.newModel3["depreciation"][i]* props.newModel3["listPrice"]);
    }

    var yValuesNM4 = [];
    for (let i = 0; i < props.newModel4["depreciation"].length; i++){
        yValuesNM4.push(props.newModel4["depreciation"][i]* props.newModel4["listPrice"]);
        console.log(props.newModel4["depreciation"][i]* props.newModel4["listPrice"]);
    }

    var yValuesUM1 = [];
    for (let i = 0; i < props.usedModel1["depreciation"].length; i++){
        yValuesUM1.push(props.usedModel1["depreciation"][i]* props.usedModel1["listPrice"]);
        console.log(props.usedModel1["depreciation"][i]* props.usedModel1["listPrice"]);
    }

    var yValuesUM2 = [];
    for (let i = 0; i < usedModel2["depreciation"].length; i++){
        yValuesUM2.push(usedModel2["depreciation"][i]* usedModel2["listPrice"]);
        console.log(usedModel2["depreciation"][i]* usedModel2["listPrice"]);
    }

    var yValuesUM3 = [];
    for (let i = 0; i < props.usedModel3["depreciation"].length; i++){
        yValuesUM3.push(props.usedModel3["depreciation"][i]* props.usedModel3["listPrice"]);
        console.log(props.usedModel3["depreciation"][i]* props.usedModel3["listPrice"]);
    }

    var yValuesUM4 = [];
    for (let i = 0; i < props.usedModel4["depreciation"].length; i++){
        yValuesUM4.push(props.usedModel4["depreciation"][i]* props.usedModel4["listPrice"]);
        console.log(props.usedModel4["depreciation"][i]* props.usedModel4["listPrice"]);
    }

    //line chart data
    var data = {
        labels: ["Year 1", "Year 2", "Year 3", "Year 4", "Year 5", "Year 6", "Year 7", "Year 8", "Year 9", "Year 10"],
        datasets: [
            {
                label: props.newModel1["model"]+ " New",
                data: yValuesNM1,
                backgroundColor: "blue",
                borderColor: "lightblue",
                fill: false,
                lineTension: 0,
                radius: 5
            },
            {
                label: props.newModel2["model"]+ " New",
                data: yValuesNM2,
                backgroundColor: "gray",
                borderColor: "lightgray",
                fill: false,
                lineTension: 0,
                radius: 5
            },
            {
                label: props.newModel3["model"]+ " New",
                data: yValuesNM3,
                backgroundColor: "gray",
                borderColor: "darkgray",
                fill: false,
                lineTension: 0,
                radius: 5
            },
            {
                label: props.newModel4["model"]+ " New",
                data: yValuesNM4,
                backgroundColor: "green",
                borderColor: "darkgreen",
                fill: false,
                lineTension: 0,
                radius: 5
            },
            {
                label: props.usedModel1["model"]+ " Used",
                data: yValuesUM1,
                backgroundColor: "pink",
                borderColor: "lightpink",
                fill: false,
                lineTension: 0,
                radius: 5
            },
            {
                label: props.usedModel2["model"]+ " Used",
                data: yValuesUM2,
                backgroundColor: "green",
                borderColor: "lightgreen",
                fill: false,
                lineTension: 0,
                radius: 5
            },
            {
                label: props.usedModel3["model"]+ " Used",
                data: yValuesUM3,
                backgroundColor: "black",
                borderColor: "darkgray",
                fill: false,
                lineTension: 0,
                radius: 5
            },
            {
                label: props.usedModel4["model"]+ " Used",
                data: yValuesUM4,
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
    };

    //create Chart class object
    return <Line options={options} data={data}  type={"line"}/>;
    // var chart = new Chart(ctx2, {
    //     type: "line",
    //     data: data,
    //     options: options
    // });
}

// graph4Models({"listPrice": 27600, "model": "Honda CR-V",
//     "depreciation": [0.78, 0.73, 0.72, 0.69, 0.61, 0.53, 0.44, 0.44, 0.38, 0.34]}, {"listPrice": 23600, "model": "Honda CR-V",
//     "depreciation": [0.60, 0.53, 0.42, 0.39, 0.31, 0.23, 0.14, 0.14, 0.08, 0.04]}, {"listPrice":  37600, "model": "Honda Clarity",
//     "depreciation": [0.86, 0.81, 0.78, 0.75, 0.72, 0.71, 0.69, 0.65, 0.61, 0.55]}, {"listPrice": 21600, "model": "Honda CR-V",
//     "depreciation": [0.85, 0.83, 0.81, 0.76, 0.73, 0.67, 0.64, 0.57, 0.48, 0.46]}, {"listPrice": 36600, "model": "Honda CR-V",
//     "depreciation": [0.88, 0.83, 0.80, 0.74, 0.70, 0.66, 0.58, 0.52, 0.49, 0.47]}, {"listPrice": 24600, "model": "Honda CR-V",
//     "depreciation": [0.91, 0.83, 0.82, 0.79, 0.75, 0.63, 0.57, 0.54, 0.52, 0.45]}, {"listPrice": 46600, "model": "Honda CR-V",
//     "depreciation": [0.89, 0.86, 0.84, 0.78, 0.76, 0.65, 0.54, 0.53, 0.51, 0.40]}, {"listPrice": 26600, "model": "Honda CR-V",
//     "depreciation": [0.88, 0.84, 0.81, 0.77, 0.74, 0.64, 0.59, 0.51, 0.50, 0.38]})