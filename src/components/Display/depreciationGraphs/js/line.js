$(document).ready(function graph2(){

    //get the line chart canvas
    var ctx = $("#line-chartcanvas");
    input1 = {"listPrice": 27600, "model": "Honda CR-V",
        "depreciation": [0.78, 0.73, 0.72, 0.69, 0.61, 0.53, 0.44, 0.44, 0.38, 0.34]}
    input2 = {"listPrice":  27600, "model": "Honda Clarity",
            "depreciation": [0.86, 0.81, 0.78, 0.75, 0.72, 0.71, 0.69, 0.65, 0.61, 0.55]}
    var yValues1 = [];
    for (let i = 0; i < input1["depreciation"].length; i++){
        yValues1.push(input1["depreciation"][i]* input1["listPrice"]);
        console.log(input1["depreciation"][i]* input1["listPrice"]);
    }

    var yValues2 = [];
    for (let i = 0; i < input2["depreciation"].length; i++){
        yValues2.push(input2["depreciation"][i]* input2["listPrice"]);
        console.log(input2["depreciation"][i]* input2["listPrice"]);
    }
    //line chart data
    var data = {
        labels: ["Year 1", "Year 2", "Year 3", "Year 4", "Year 5", "Year 6", "Year 7", "Year 8", "Year 9", "Year 10"],
        datasets: [
            {
                label: input1["model"],
                data: yValues1,
                backgroundColor: "blue",
                borderColor: "lightblue",
                fill: false,
                lineTension: 0,
                radius: 5
            },
            {
                label: input2["model"],
                data: yValues2,
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
    var chart = new Chart(ctx, {
        type: "line",
        data: data,
        options: options
    });
});

graph(input1 = {"listPrice": 27600, "model": "Honda CR-V",
        "depreciation": [0.78, 0.73, 0.72, 0.69, 0.61, 0.53, 0.44, 0.44, 0.38, 0.34]},
    input2 = {"listPrice":  27600, "model": "Honda Clarity",
        "depreciation": [0.78, 0.73, 0.72, 0.69, 0.61, 0.53, 0.44, 0.44, 0.38, 0.34]})
