import React, { useState, useEffect, Fragment } from 'react'
// import './details.scss';
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
                id: data.id,
                carModel: data.carModel,
                carDescription: data.carDescription,
                carMake: data.carMake,
                price: data.listPrice,
                year: data.year,
                kms: data.kms,
                color: data.color,
                condition: data.condition,
                depreciation: data.depreciation,
                imageUrl: data.imageURL,
                interior: data.interior,
                interiorDescription: data.interiorDescription,
                engine: data.engine,
                engineDescription: data.engineDescription,
                performancePackage: data.performancePackage,
                performancePackageDescription: data.performancePackageDescription
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
                {carData !== null &&
                    <Fragment>
                        <div className="left-column">
                            <img src={carData.imageUrl}>
                            </img>
                        </div>

                        <div className="right-column">
                            <div className="product-description">
                                <span>{carData.carMake}</span>
                                <h1>{carData.carModel}</h1>
                                <h1>{carData.interior}</h1>
                                <h1>{carData.carDescription}</h1>
                                <p>{carData.features}</p>
                            </div>


                            <div className="product-price">
                                <span>${carData.price}</span>
                            </div>
                        </div>

                    </Fragment>
                }




            </main>
        </div>
    )
}

export default Details
