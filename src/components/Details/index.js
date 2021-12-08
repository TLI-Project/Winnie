import React, { useState, useEffect, Fragment } from 'react'
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
                        <div className="left">
                            <div className="condition-year">
                                <h3>{carData.condition}</h3>
                                <h3>{carData.year}</h3>
                            </div>
                            <h1>{carData.model}</h1>
                            <div className="make-color">
                                <h2>{carData.make}</h2>
                                <h3>{carData.color}</h3>
                            </div>
                             
                             <h2>Specs:</h2>
                             <div className="specs">
                                 <button id="trigger-interior">{carData.interior}</button>
                                 <div class="hidden-interior">{carData.interiorDescription}</div>

                                 <button id="trigger-engine">{carData.engine}</button>
                                 <div class="hidden-engine">{carData.engineDescription}</div>

                                 <button id="trigger-performance">{carData.performancePackage}</button>
                                 <div class="hidden-performance">{carData.performancePackageDescription}</div>
                             </div>


                        </div>

                        <div className="right">
                            <img src={carData.imageUrl}/>
                            <div className="price-info">
                                <h2>{carData.listPrice}</h2>
                                <button id="trigger">+</button>
                                <div class="hidden">{carData.carDescription}</div>

                            </div>
                        </div>

                    </Fragment>
                }




            </main>
        </div>
    )
}

export default Details
