import React, { useState, useEffect } from 'react'
import './details.scss';
import { useParams } from 'react-router';
/*Needs car dataset to display the pictures, price points, model and name etc*/

const Details = () => {
    const { carId } = useParams()
    console.log(carId)

    const [carData, setCarData] = useState(null)
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: parseInt(carId)
    };

    useEffect(() => {
        // fetch data

        const fetchCarData = async () => {
            const res = await fetch('http://localhost:8080/carDetails', requestOptions);
            const data = await res.json();
            console.log(data)
            // set data as state
            const carData = {
                carId: data.carId,
                carModel: data.carModel,
                carMake: data.carMake,
                price: data.listPrice,
                year: data.year,
                kms: data.kms,
                color: data.color,
                condition: data.condition,
                imageUrl: data.imageURL,
                features: data.features
        // this.id = id;
        // this.carModel = carModel;
        // this.carMake = carMake;
        // this.listPrice = listPrice;
        // this.year = year;
        // this.kms = kms;
        // this.color = color;
        // this.condition = condition;
        // this.depreciation = depreciation;
        // this.imageURL = imageURL;
        // this.features = features;
            }
            setCarData(carData)
            console.log(carData)
        }
        fetchCarData();
    }, [])

    return (
        // render if data available
        <div className="Details">
            <main className="container">
                <div className="left-column">
                    <img src="https://affinitycarrentals.com/wp-content/uploads/bfi_thumb/MDX-p5ohmlyhg58ums62auoyx0gh32olvo8f4qs7xbxhno.png">
                    </img>
                </div>

                <div className="right-column">
                    <div className="product-description">
                        <span>Ford Car</span>
                        <h1>FORD Focus</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                            mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                            fugiat nulla pariatur.</p>
                    </div>
                    <div className="product-configuration">
                        <div className="product-color">
                            <span>Color</span>
                        </div>
                        <div className="cable-config">
                            <span>Cable configuration</span>

                            <div className="cable-choose">
                                <button>Straight</button>
                                <button>Coiled</button>
                                <button>Long-coiled</button>
                            </div>
                        </div>
                    </div>

                    <div className="product-price">
                        <span>148$</span>
                        <a href="#" className="cart-btn">Add to cart</a>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Details
