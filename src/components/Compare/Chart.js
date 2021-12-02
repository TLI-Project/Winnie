

Chinwike Maduabuchi
Frontend developer passionate about software engineering.
    Using Chart.js in React
July 23, 2021  3 min read

Using Chart.js in React
Data visualization has always been an important part of software engineering and frontend development in particular. There’s always a need to visualize data for our users to help them better understand what is going on in our application.

    Chart.js is a popular JavaScript library used for creating flexible charts on websites, and in this tutorial, I’ll show you how to use Chart.js in a React environment.

    Rather than doing something straightforward like displaying a chart with makeshift data, we’re going to create an application that pulls cryptocurrency prices from an API and displays it in a bar chart.

    CoinCap’s API provides us with real-time cryptocurrency prices, which we’ll feed to our React component.

    Prerequisites
For this tutorial, you’ll need a basic understanding of the React framework. React’s documentation is a good place to start.

    Creating the project
I’ll be using CodeSandbox to set up a new React app as opposed to downloading the files locally using CRA. You can play around with the tutorial’s sandbox here.

    To quickly set up a React template in CodeSandbox, open up a new tab in your browser and type in react.new (thank me later 😉).

Next, in the dependencies section, add these two libraries:

    chart.js
react-chartjs-2
React-chartjs-2 is a React wrapper for Chart.js 2.0 and 3.0, letting us use Chart.js elements as React components.

    Fetching the data
From the file tree, open up App.js. In here, we’ll fetch the data from the API and pass the result to a separate component for rendering the chart.

    Replace the contents of App.js with the code below:

    import { useEffect } from "react"

export default function App() {
    useEffect(() => {
        const fetchPrices = async () => {
            const res = await fetch("https://api.coincap.io/v2/assets/?limit=5")
            const data = await res.json()
            console.log(data)
        }
        fetchPrices()
    }, []);

    return (
        <div className="App">
            Hello Codesandbox
        </div>
    );
}
We’ve created a function, fetchPrices, which makes a request to the CoinCap API.

    By default, the API returns an object with a data property that is an array of 100 cryptocurrency objects. Because we won’t be needing that many results, I’ve attached the limit parameter at the end of the URL, requesting only the first 5 objects.

    fetchPrices has also been called in a useEffect hook with an empty dependency array, which means that the function runs as soon as the App component is mounted.

    Let’s take a look at the result of the data we’ve fetched:

{data: Array(5), timestamp: 1625898595698}


data: Array(5)
1. ▶0: Object
id: "bitcoin"
rank: "1"
symbol: "BTC"
name: "Bitcoin"
priceUsd: "33692.0391437919079095"
2. ▶1: Object
// ...more data
We’ll only need the name and priceUsd properties from data to create our chart.

    Chart.js React components
The React components from react-chartjs-2 take in two main props: data and options. Here is a list of the acceptable props.

    The data prop takes in an object similar to the one below:

    const data = {
        labels: ['Red', 'Orange', 'Blue'],
        // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
        datasets: [
            {
                label: 'Popularity of colours'
                data: [55, 23, 96],
                // you can set indiviual colors for each bar
                backgroundColor: [
                    'rgba(255, 255, 255, 0.6)'
                    'rgba(255, 255, 255, 0.6)'
                    'rgba(255, 255, 255, 0.6)'
                ],
                borderWidth: 1,
            }
        ]
    }

import { useState, useEffect } from "react"

export default function App() {
    useEffect(() => {
        const fetchPrices = async () => {
            const res = await fetch("https://api.coincap.io/v2/assets/?limit=5")
            const data = await res.json()
            console.log(data)
        }
        fetchPrices()
    }, [])

    const [chartData, setChartData] = useState({})

    return (
        <div className="App">
            Hello Codesandbox
        </div>
    );
}

useEffect(() => {
    const fetchPrices = async () => {
        const res = await fetch("https://api.coincap.io/v2/assets/?limit=5")
        const data = await res.json()
        setChartData({
            labels: data.data.map((crypto) => crypto.name),
            datasets: [
                {
                    label: "Price in USD",
                    data: data.data.map((crypto) => crypto.priceUsd),
                    backgroundColor: [
                        "#ffbb11",
                        "#ecf0f1",
                        "#50AF95",
                        "#f3ba2f",
                        "#2a71d0"
                    ]
                }
            ]
        });
    };
    fetchPrices()
}, []);