// import React from 'react';
//
// export function GraphCapitalOneModel(props) {
//
//     //get the line chart canvas
//     var xValues = [];
//     var yValuesNM1 = [];
//     var yValuesUM1 = [];
//     const num_installments = props.newModel["installments"].length
//     console.log(num_installments)
//     const installments = props.newModel["installments"][0]["capital"]
//     console.log(installments)
//     for(let i = 1; i <= num_installments; i++){
//         xValues.push(i);
//     }
//     for (let i = 0; i < num_installments; i++){
//         yValuesNM1.push(props.newModel["installments"][i]["capital"]);
//         console.log(props.newModel["installments"][i]["capital"]);
//     }
//     for (let i = 0; i < num_installments; i++){
//         yValuesUM1.push(props.usedModel["installments"][i]["capital"]);
//         console.log(props.usedModel["installments"][i]["capital"]);
//     }
//     //line chart data
//     var data = {
//         labels: xValues,
//         datasets: [
//             {
//                 label: "New " + props.newModel["model"],
//                 data: yValuesNM1,
//                 backgroundColor: "blue",
//                 borderColor: "lightblue",
//                 fill: false,
//                 lineTension: 0,
//                 radius: 5
//             },
//             {
//                 label: "Used " + props.usedModel["model"],
//                 data: yValuesUM1,
//                 backgroundColor: "green",
//                 borderColor: "lightgreen",
//                 fill: false,
//                 lineTension: 0,
//                 radius: 5
//             }
//         ]
//     };
//
//     //options
//     var options = {
//         responsive: true,
//         title: {
//             display: true,
//             position: "top",
//             text: "Vehicle Capital and Interest",
//             fontSize: 18,
//             fontColor: "#111"
//         },
//         legend: {
//             display: true,
//             position: "bottom",
//             labels: {
//                 fontColor: "#333",
//                 fontSize: 16
//             }
//         }
//     };
//
//     // //create Chart class object
//     // var chart = new Chart(ctx, {
//     //     type: "line",
//     //     data: data,
//     //     options: options
//     // });
//     return <Line options={options} data={data}  type={"line"}/>;
// }
// //
// // export function GraphCapitalTwoModels(props) {
// //
// //     //get the line chart canvas
// //     var xValues = [];
// //     var yValuesNM1 = [];
// //     var yValuesUM1 = [];
// //     var yValuesNM2 = [];
// //     var yValuesUM2 = [];
// //     const num_installments = props.newModel1["installments"].length
// //     console.log(num_installments)
// //     const installments = props.newModel1["installments"][0]["capital"]
// //     console.log(installments)
// //     for(let i = 1; i <= num_installments; i++){
// //         xValues.push(i);
// //     }
// //     for (let i = 0; i < num_installments; i++){
// //         yValuesNM1.push(props.newModel1["installments"][i]["capital"]);
// //         console.log(props.newModel1["installments"][i]["capital"]);
// //     }
// //     for (let i = 0; i < num_installments; i++){
// //         yValuesUM1.push(props.usedModel1["installments"][i]["capital"]);
// //         console.log(props.usedModel1["installments"][i]["capital"]);
// //     }
// //     for (let i = 0; i < num_installments; i++){
// //         yValuesNM2.push(props.newModel2["installments"][i]["capital"]);
// //         console.log(props.newModel2["installments"][i]["capital"]);
// //     }
// //     for (let i = 0; i < num_installments; i++){
// //         yValuesUM2.push(props.usedModel2["installments"][i]["capital"]);
// //         console.log(props.usedModel2["installments"][i]["capital"]);
// //     }
// //     //line chart data
// //     var data = {
// //         labels: xValues,
// //         datasets: [
// //             {
// //                 label: "New " + props.newModel1["model"],
// //                 data: yValuesNM1,
// //                 backgroundColor: "blue",
// //                 borderColor: "lightblue",
// //                 fill: false,
// //                 lineTension: 0,
// //                 radius: 5
// //             },
// //             {
// //                 label: "Used " + props.usedModel1["model"],
// //                 data: yValuesUM1,
// //                 backgroundColor: "green",
// //                 borderColor: "lightgreen",
// //                 fill: false,
// //                 lineTension: 0,
// //                 radius: 5
// //             },
// //             {
// //                 label: "New " + props.newModel2["model"],
// //                 data: yValuesNM2,
// //                 backgroundColor: "blue",
// //                 borderColor: "darkblue",
// //                 fill: false,
// //                 lineTension: 0,
// //                 radius: 5
// //             },
// //             {
// //                 label: "Used " + props.usedModel2["model"],
// //                 data: yValuesUM2,
// //                 backgroundColor: "green",
// //                 borderColor: "darkgreen",
// //                 fill: false,
// //                 lineTension: 0,
// //                 radius: 5
// //             }
// //         ]
// //     };
// //
// //     //options
// //     var options = {
// //         responsive: true,
// //         title: {
// //             display: true,
// //             position: "top",
// //             text: "Vehicle Capital and Interest",
// //             fontSize: 18,
// //             fontColor: "#111"
// //         },
// //         legend: {
// //             display: true,
// //             position: "bottom",
// //             labels: {
// //                 fontColor: "#333",
// //                 fontSize: 16
// //             }
// //         }
// //     };
// //
// //     //create Chart class object
// //     // var chart = new Chart(ctx2, {
// //     //     type: "line",
// //     //     data: data,
// //     //     options: options
// //     // });
// //     return <Line options={options} data={data}  type={"line"}/>;
// // }
// //
// // export function GraphCapitalThreeModels(props) {
// //
// //     //get the line chart canvas
// //     var xValues = [];
// //     var yValuesNM1 = [];
// //     var yValuesUM1 = [];
// //     var yValuesNM2 = [];
// //     var yValuesUM2 = [];
// //     var yValuesNM3 = [];
// //     var yValuesUM3 = [];
// //     const num_installments = props.newModel1["installments"].length
// //     console.log(num_installments)
// //     const installments = props.newModel1["installments"][0]["capital"]
// //     console.log(installments)
// //     for(let i = 1; i <= num_installments; i++){
// //         xValues.push(i);
// //     }
// //     for (let i = 0; i < num_installments; i++){
// //         yValuesNM1.push(props.newModel1["installments"][i]["capital"]);
// //         console.log(props.newModel1["installments"][i]["capital"]);
// //     }
// //     for (let i = 0; i < num_installments; i++){
// //         yValuesUM1.push(props.usedModel1["installments"][i]["capital"]);
// //         console.log(props.usedModel1["installments"][i]["capital"]);
// //     }
// //     for (let i = 0; i < num_installments; i++){
// //         yValuesNM2.push(props.newModel2["installments"][i]["capital"]);
// //         console.log(props.newModel2["installments"][i]["capital"]);
// //     }
// //     for (let i = 0; i < num_installments; i++){
// //         yValuesUM2.push(props.usedModel2["installments"][i]["capital"]);
// //         console.log(props.usedModel2["installments"][i]["capital"]);
// //     }
// //     for (let i = 0; i < num_installments; i++){
// //         yValuesNM3.push(props.newModel3["installments"][i]["capital"]);
// //         console.log(props.newModel3["installments"][i]["capital"]);
// //     }
// //     for (let i = 0; i < num_installments; i++){
// //         yValuesUM3.push(props.usedModel3["installments"][i]["capital"]);
// //         console.log(props.usedModel3["installments"][i]["capital"]);
// //     }
// //
// //     //line chart data
// //     var data = {
// //         labels: xValues,
// //         datasets: [
// //             {
// //                 label: "New " + props.newModel1["model"],
// //                 data: yValuesNM1,
// //                 backgroundColor: "blue",
// //                 borderColor: "lightblue",
// //                 fill: false,
// //                 lineTension: 0,
// //                 radius: 5
// //             },
// //             {
// //                 label: "Used " + props.usedModel1["model"],
// //                 data: yValuesUM1,
// //                 backgroundColor: "green",
// //                 borderColor: "lightgreen",
// //                 fill: false,
// //                 lineTension: 0,
// //                 radius: 5
// //             },
// //             {
// //                 label: "New " + props.newModel2["model"],
// //                 data: yValuesNM2,
// //                 backgroundColor: "blue",
// //                 borderColor: "darkblue",
// //                 fill: false,
// //                 lineTension: 0,
// //                 radius: 5
// //             },
// //             {
// //                 label: "Used " + props.usedModel2["model"],
// //                 data: yValuesUM2,
// //                 backgroundColor: "green",
// //                 borderColor: "darkgreen",
// //                 fill: false,
// //                 lineTension: 0,
// //                 radius: 5
// //             },
// //             {
// //                 label: "New " + props.newModel3["model"],
// //                 data: yValuesNM3,
// //                 backgroundColor: "pink",
// //                 borderColor: "lightpink",
// //                 fill: false,
// //                 lineTension: 0,
// //                 radius: 5
// //             },
// //             {
// //                 label: "Used " + props.usedModel3["model"],
// //                 data: yValuesUM3,
// //                 backgroundColor: "gray",
// //                 borderColor: "darkgray",
// //                 fill: false,
// //                 lineTension: 0,
// //                 radius: 5
// //             }
// //         ]
// //     };
// //
// //     //options
// //     var options = {
// //         responsive: true,
// //         title: {
// //             display: true,
// //             position: "top",
// //             text: "Vehicle Capital and Interest",
// //             fontSize: 18,
// //             fontColor: "#111"
// //         },
// //         legend: {
// //             display: true,
// //             position: "bottom",
// //             labels: {
// //                 fontColor: "#333",
// //                 fontSize: 16
// //             }
// //         }
// //     };
// //
// //     //create Chart class object
// //     // var chart = new Chart(ctx3, {
// //     //     type: "line",
// //     //     data: data,
// //     //     options: options
// //     // });
// //     return <Line options={options} data={data}  type={"line"}/>;
// // }
// //
// // export function GraphCapitalFourModels(props) {
// // // function graphCapitalFourModels(newModel1, newModel2, newModel3,newModel4, usedModel1, usedModel2, usedModel3, usedModel4){
// //
// //     //get the line chart canvas
// //     var xValues = [];
// //     var yValuesNM1 = [];
// //     var yValuesUM1 = [];
// //     var yValuesNM2 = [];
// //     var yValuesUM2 = [];
// //     var yValuesNM3 = [];
// //     var yValuesUM3 = [];
// //     var yValuesNM4 = [];
// //     var yValuesUM4 = [];
// //     const num_installments = props.newModel1["installments"].length
// //     console.log(num_installments)
// //     const installments = props.newModel1["installments"][0]["capital"]
// //     console.log(installments)
// //     for(let i = 1; i <= num_installments; i++){
// //         xValues.push(i);
// //     }
// //     for (let i = 0; i < num_installments; i++){
// //         yValuesNM1.push(props.newModel1["installments"][i]["capital"]);
// //         console.log(props.newModel1["installments"][i]["capital"]);
// //     }
// //     for (let i = 0; i < num_installments; i++){
// //         yValuesUM1.push(props.usedModel1["installments"][i]["capital"]);
// //         console.log(props.usedModel1["installments"][i]["capital"]);
// //     }
// //     for (let i = 0; i < num_installments; i++){
// //         yValuesNM2.push(props.newModel2["installments"][i]["capital"]);
// //         console.log(props.newModel2["installments"][i]["capital"]);
// //     }
// //     for (let i = 0; i < num_installments; i++){
// //         yValuesUM2.push(props.usedModel2["installments"][i]["capital"]);
// //         console.log(props.usedModel2["installments"][i]["capital"]);
// //     }
// //     for (let i = 0; i < num_installments; i++){
// //         yValuesNM3.push(props.newModel3["installments"][i]["capital"]);
// //         console.log(props.newModel3["installments"][i]["capital"]);
// //     }
// //     for (let i = 0; i < num_installments; i++){
// //         yValuesUM3.push(props.usedModel3["installments"][i]["capital"]);
// //         console.log(props.usedModel3["installments"][i]["capital"]);
// //     }
// //     for (let i = 0; i < num_installments; i++){
// //         yValuesNM4.push(props.newModel4["installments"][i]["capital"]);
// //         console.log(props.newModel4["installments"][i]["capital"]);
// //     }
// //     for (let i = 0; i < num_installments; i++){
// //         yValuesUM4.push(props.usedModel4["installments"][i]["capital"]);
// //         console.log(props.usedModel4["installments"][i]["capital"]);
// //     }
// //
// //     //line chart data
// //     var data = {
// //         labels: xValues,
// //         datasets: [
// //             {
// //                 label: "New " + props.newModel1["model"],
// //                 data: yValuesNM1,
// //                 backgroundColor: "blue",
// //                 borderColor: "lightblue",
// //                 fill: false,
// //                 lineTension: 0,
// //                 radius: 5
// //             },
// //             {
// //                 label: "Used " + props.usedModel1["model"],
// //                 data: yValuesUM1,
// //                 backgroundColor: "green",
// //                 borderColor: "lightgreen",
// //                 fill: false,
// //                 lineTension: 0,
// //                 radius: 5
// //             },
// //             {
// //                 label: "New " + props.newModel2["model"],
// //                 data: yValuesNM2,
// //                 backgroundColor: "blue",
// //                 borderColor: "darkblue",
// //                 fill: false,
// //                 lineTension: 0,
// //                 radius: 5
// //             },
// //             {
// //                 label: "Used " + props.usedModel2["model"],
// //                 data: yValuesUM2,
// //                 backgroundColor: "green",
// //                 borderColor: "darkgreen",
// //                 fill: false,
// //                 lineTension: 0,
// //                 radius: 5
// //             },
// //             {
// //                 label: "New " + props.newModel3["model"],
// //                 data: yValuesNM3,
// //                 backgroundColor: "pink",
// //                 borderColor: "lightpink",
// //                 fill: false,
// //                 lineTension: 0,
// //                 radius: 5
// //             },
// //             {
// //                 label: "Used " + props.usedModel3["model"],
// //                 data: yValuesUM3,
// //                 backgroundColor: "gray",
// //                 borderColor: "darkgray",
// //                 fill: false,
// //                 lineTension: 0,
// //                 radius: 5
// //             },
// //             {
// //                 label: "New " + props.newModel4["model"],
// //                 data: yValuesNM4,
// //                 backgroundColor: "red",
// //                 borderColor: "darkred",
// //                 fill: false,
// //                 lineTension: 0,
// //                 radius: 5
// //             },
// //             {
// //                 label: "Used " + props.usedModel4["model"],
// //                 data: yValuesUM4,
// //                 backgroundColor: "gray",
// //                 borderColor: "lightgray",
// //                 fill: false,
// //                 lineTension: 0,
// //                 radius: 5
// //             }
// //         ]
// //     };
// //
// //     //options
// //     var options = {
// //         responsive: true,
// //         title: {
// //             display: true,
// //             position: "top",
// //             text: "Vehicle Capital and Interest",
// //             fontSize: 18,
// //             fontColor: "#111"
// //         },
// //         legend: {
// //             display: true,
// //             position: "bottom",
// //             labels: {
// //                 fontColor: "#333",
// //                 fontSize: 16
// //             }
// //         }
// //     };
// //
// //     //create Chart class object
// //     // var chart = new Chart(ctx4, {
// //     //     type: "line",
// //     //     data: data,
// //     //     options: options
// //     // });
// //     return <Line options={options} data={data}  type={"line"}/>;
// // }
//
//
// graphCapitalOneModel({
//     "installments": [{
//         "capital": 270.79,
//         "interest": 14.5,
//         "installment": 285.29,
//         "remain": 9729.21,
//         "interestSum": 14.5
//     }, {
//         "capital": 271.18,
//         "interest": 14.11,
//         "installment": 285.29,
//         "remain": 9458.029999999999,
//         "interestSum": 28.61
//     }, {
//         "capital": 271.58000000000004,
//         "interest": 13.71,
//         "installment": 285.29,
//         "remain": 9186.45,
//         "interestSum": 42.32
//     }, {
//         "capital": 271.97,
//         "interest": 13.32,
//         "installment": 285.29,
//         "remain": 8914.480000000001,
//         "interestSum": 55.64
//     }, {
//         "capital": 272.36,
//         "interest": 12.93,
//         "installment": 285.29,
//         "remain": 8642.119999999999,
//         "interestSum": 68.57
//     }, {
//         "capital": 272.76000000000005,
//         "interest": 12.53,
//         "installment": 285.29,
//         "remain": 8369.359999999999,
//         "interestSum": 81.1
//     }, {
//         "capital": 273.15000000000003,
//         "interest": 12.14,
//         "installment": 285.29,
//         "remain": 8096.210000000001,
//         "interestSum": 93.24
//     }, {
//         "capital": 273.55,
//         "interest": 11.74,
//         "installment": 285.29,
//         "remain": 7822.66,
//         "interestSum": 104.97999999999999
//     }, {
//         "capital": 273.95000000000005,
//         "interest": 11.34,
//         "installment": 285.29,
//         "remain": 7548.71,
//         "interestSum": 116.32
//     }, {
//         "capital": 274.34000000000003,
//         "interest": 10.95,
//         "installment": 285.29,
//         "remain": 7274.37,
//         "interestSum": 127.27
//     }, {
//         "capital": 274.74,
//         "interest": 10.55,
//         "installment": 285.29,
//         "remain": 6999.63,
//         "interestSum": 137.82
//     }, {
//         "capital": 275.14000000000004,
//         "interest": 10.15,
//         "installment": 285.29,
//         "remain": 6724.49,
//         "interestSum": 147.97
//     }, {
//         "capital": 275.54,
//         "interest": 9.75,
//         "installment": 285.29,
//         "remain": 6448.95,
//         "interestSum": 157.72
//     }, {
//         "capital": 275.94,
//         "interest": 9.35,
//         "installment": 285.29,
//         "remain": 6173.010000000001,
//         "interestSum": 167.07
//     }, {
//         "capital": 276.34000000000003,
//         "interest": 8.95,
//         "installment": 285.29,
//         "remain": 5896.67,
//         "interestSum": 176.01999999999998
//     }, {
//         "capital": 276.74,
//         "interest": 8.55,
//         "installment": 285.29,
//         "remain": 5619.93,
//         "interestSum": 184.57
//     }, {
//         "capital": 277.14000000000004,
//         "interest": 8.15,
//         "installment": 285.29,
//         "remain": 5342.79,
//         "interestSum": 192.72
//     }, {
//         "capital": 277.54,
//         "interest": 7.75,
//         "installment": 285.29,
//         "remain": 5065.25,
//         "interestSum": 200.47
//     }, {
//         "capital": 277.95000000000005,
//         "interest": 7.34,
//         "installment": 285.29,
//         "remain": 4787.3,
//         "interestSum": 207.81
//     }, {
//         "capital": 278.35,
//         "interest": 6.94,
//         "installment": 285.29,
//         "remain": 4508.95,
//         "interestSum": 214.75
//     }, {
//         "capital": 278.75,
//         "interest": 6.54,
//         "installment": 285.29,
//         "remain": 4230.2,
//         "interestSum": 221.29
//     }, {
//         "capital": 279.16,
//         "interest": 6.13,
//         "installment": 285.29,
//         "remain": 3951.04,
//         "interestSum": 227.42
//     }, {
//         "capital": 279.56,
//         "interest": 5.73,
//         "installment": 285.29,
//         "remain": 3671.48,
//         "interestSum": 233.14999999999998
//     }, {
//         "capital": 279.97,
//         "interest": 5.32,
//         "installment": 285.29,
//         "remain": 3391.5099999999993,
//         "interestSum": 238.46999999999997
//     }, {
//         "capital": 280.37,
//         "interest": 4.92,
//         "installment": 285.29,
//         "remain": 3111.1399999999994,
//         "interestSum": 243.38999999999996
//     }, {
//         "capital": 280.78000000000003,
//         "interest": 4.51,
//         "installment": 285.29,
//         "remain": 2830.359999999999,
//         "interestSum": 247.89999999999995
//     }, {
//         "capital": 281.19,
//         "interest": 4.1,
//         "installment": 285.29,
//         "remain": 2549.1699999999996,
//         "interestSum": 251.99999999999994
//     }, {
//         "capital": 281.59000000000003,
//         "interest": 3.7,
//         "installment": 285.29,
//         "remain": 2267.58,
//         "interestSum": 255.69999999999993
//     }, {
//         "capital": 282,
//         "interest": 3.29,
//         "installment": 285.29,
//         "remain": 1985.58,
//         "interestSum": 258.98999999999995
//     }, {
//         "capital": 282.41,
//         "interest": 2.88,
//         "installment": 285.29,
//         "remain": 1703.1699999999998,
//         "interestSum": 261.86999999999995
//     }, {
//         "capital": 282.82,
//         "interest": 2.47,
//         "installment": 285.29,
//         "remain": 1420.3500000000001,
//         "interestSum": 264.34
//     }, {
//         "capital": 283.23,
//         "interest": 2.06,
//         "installment": 285.29,
//         "remain": 1137.1200000000003,
//         "interestSum": 266.4
//     }, {
//         "capital": 283.64000000000004,
//         "interest": 1.65,
//         "installment": 285.29,
//         "remain": 853.4800000000007,
//         "interestSum": 268.04999999999995
//     }, {
//         "capital": 284.05,
//         "interest": 1.24,
//         "installment": 285.29,
//         "remain": 569.4300000000014,
//         "interestSum": 269.28999999999996
//     }, {
//         "capital": 284.46000000000004,
//         "interest": 0.83,
//         "installment": 285.29,
//         "remain": 284.9700000000021,
//         "interestSum": 270.11999999999995
//     }, {"capital": 284.88, "interest": 0.41, "installment": 285.29, "remain": 0, "interestSum": 270.53}],
//     "amount": 10000,
//     "interestSum": 270.53,
//     "capitalSum": 10000,
//     "sum": 10270.53,
//     "interestRate": 1.74,
//     "term": "36",
//     "model": "Honda Civic"
// }, {
//     "installments":[{"capital":268.02000000000004,"interest":20.33,"installment":288.35,"remain":9731.98,"interestSum":20.33},{"capital":268.56,"interest":19.79,"installment":288.35,"remain":9463.42,"interestSum":40.12},{"capital":269.11,"interest":19.24,"installment":288.35,"remain":9194.31,"interestSum":59.36},{"capital":269.65000000000003,"interest":18.7,"installment":288.35,"remain":8924.66,"interestSum":78.06},{"capital":270.20000000000005,"interest":18.15,"installment":288.35,"remain":8654.46,"interestSum":96.21000000000001},{"capital":270.75,"interest":17.6,"installment":288.35,"remain":8383.71,"interestSum":113.81},{"capital":271.3,"interest":17.05,"installment":288.35,"remain":8112.409999999999,"interestSum":130.86},{"capital":271.85,"interest":16.5,"installment":288.35,"remain":7840.5599999999995,"interestSum":147.36},{"capital":272.41,"interest":15.94,"installment":288.35,"remain":7568.15,"interestSum":163.3},{"capital":272.96000000000004,"interest":15.39,"installment":288.35,"remain":7295.19,"interestSum":178.69},{"capital":273.52000000000004,"interest":14.83,"installment":288.35,"remain":7021.67,"interestSum":193.52},{"capital":274.07000000000005,"interest":14.28,"installment":288.35,"remain":6747.6,"interestSum":207.8},{"capital":274.63,"interest":13.72,"installment":288.35,"remain":6472.97,"interestSum":221.52},{"capital":275.19,"interest":13.16,"installment":288.35,"remain":6197.78,"interestSum":234.68},{"capital":275.75,"interest":12.6,"installment":288.35,"remain":5922.03,"interestSum":247.28},{"capital":276.31,"interest":12.04,"installment":288.35,"remain":5645.719999999999,"interestSum":259.32},{"capital":276.87,"interest":11.48,"installment":288.35,"remain":5368.849999999999,"interestSum":270.8},{"capital":277.43,"interest":10.92,"installment":288.35,"remain":5091.419999999999,"interestSum":281.72},{"capital":278,"interest":10.35,"installment":288.35,"remain":4813.419999999999,"interestSum":292.07000000000005},{"capital":278.56,"interest":9.79,"installment":288.35,"remain":4534.859999999999,"interestSum":301.86000000000007},{"capital":279.13,"interest":9.22,"installment":288.35,"remain":4255.729999999999,"interestSum":311.0800000000001},{"capital":279.70000000000005,"interest":8.65,"installment":288.35,"remain":3976.029999999999,"interestSum":319.7300000000001},{"capital":280.27000000000004,"interest":8.08,"installment":288.35,"remain":3695.759999999999,"interestSum":327.81000000000006},{"capital":280.84000000000003,"interest":7.51,"installment":288.35,"remain":3414.9199999999983,"interestSum":335.32000000000005},{"capital":281.41,"interest":6.94,"installment":288.35,"remain":3133.5099999999984,"interestSum":342.26000000000005},{"capital":281.98,"interest":6.37,"installment":288.35,"remain":2851.5299999999984,"interestSum":348.63000000000005},{"capital":282.55,"interest":5.8,"installment":288.35,"remain":2568.9799999999987,"interestSum":354.43000000000006},{"capital":283.13,"interest":5.22,"installment":288.35,"remain":2285.8499999999985,"interestSum":359.6500000000001},{"capital":283.70000000000005,"interest":4.65,"installment":288.35,"remain":2002.1499999999985,"interestSum":364.30000000000007},{"capital":284.28000000000003,"interest":4.07,"installment":288.35,"remain":1717.8699999999988,"interestSum":368.37000000000006},{"capital":284.86,"interest":3.49,"installment":288.35,"remain":1433.0099999999989,"interestSum":371.86000000000007},{"capital":285.44,"interest":2.91,"installment":288.35,"remain":1147.5699999999983,"interestSum":374.7700000000001},{"capital":286.02000000000004,"interest":2.33,"installment":288.35,"remain":861.5499999999979,"interestSum":377.1000000000001},{"capital":286.6,"interest":1.75,"installment":288.35,"remain":574.9499999999974,"interestSum":378.8500000000001},{"capital":287.18,"interest":1.17,"installment":288.35,"remain":287.7699999999971,"interestSum":380.0200000000001},{"capital":287.76000000000005,"interest":0.59,"installment":288.35,"remain":0,"interestSum":380.61000000000007}],"amount":10000,"interestSum":380.61,"capitalSum":10000,"sum":10380.61,"interestRate":2.44,"term":"36", "model": "Honda Civic"}
// )
//
