import React, { useState, useEffect } from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom';
import blueEllipse from '../../img/landing/background/Ellipse-blue.png';
import greenEllipse from '../../img/landing/background/Ellipse-green.png';

const Selection = () => {
    const [selected, setSelected] = useState([])
    const history = useHistory();
    const location = useLocation();
    const { state } = location;
    console.log(state)
    const inputData = state.inputData
    console.log(inputData)
    const [processedData, setProcessedData] = useState(null);

    useEffect(() => {
        const fetchCarMeta = async () => {
            const res = await fetch('http://localhost:8080/carMetaData', requestOptions);
            const data = await res.json();
            console.log(data)
            const processed = []
            for (let i = 1; i < 13; i++) {
                processed.push(JSON.parse(data[i]))
            }
            console.log(processed)
            setProcessedData(processed)
        }
        fetchCarMeta();
    }, [])



    const submit = () => {
        // fetch to verify, if ok, history.push
        if (selected.length == 0) {
            alert('please select a car')
        } else {
            history.push({
                pathname: '/compare',
                state: {
                    inputData,
                    selected
                }
            })
        }
    }


    const handleAddCar = id => {
        if (selected.includes(id)) {
            setSelected(selected.filter(x => x !== id));
        } else {
            if (selected.length === 4) {
                alert('no')
            } else {
                setSelected(selected.concat([id]))
            }
        }
    }


    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    };

    return (
        <div className="page page-catalogue">
            <img className="ellipse-blue" src={blueEllipse} />
            <img className="ellipse-green" src={greenEllipse} />
            <h1>Browse for your desired vehicle</h1>
            <div className="container">
                {processedData !== null &&
                    processedData.map(entry => (
                        <div className='gallery' key={entry.id + entry.carMake + entry.carModel}>
                            {selected.includes(entry.id) &&
                                <div className='checkmark'>✔️</div>}
                            <Link to={`/details/${entry.id}`}>
                                <img src={entry.imageURL} alt={entry.carModel} />
                            </Link>
                            <h2 className="name">{`${entry.year} ${entry.carMake} ${entry.carModel}`}</h2>
                            <div className='price-btn-container'>
                                <p className='price'>{entry.listPrice}</p>
                                <button onClick={() => handleAddCar(entry.id)}>Select</button>
                            </div>
                        </div>
                    ))
                }
            </div>
            <button className="btn" onClick={submit}>Next</button>

        </div>
    )
}


export default Selection
