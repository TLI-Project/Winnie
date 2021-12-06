import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom';
import blueEllipse from '../../img/landing/background/Ellipse-blue.png';
import greenEllipse from '../../img/landing/background/Ellipse-green.png';

const Selection = ({ finance }) => {
    // const print = () => {
    //     console.log(props.body)
    // }
    const [selected, setSelected] = useState([])
    const history = useHistory();

    const [processedData, setProcessedData] = useState(null);
    // const finance = props.body;

    // const inputData = {
    //     finance: finance,
    //     carIds: selected
    // }
    useEffect(() => {
        const fetchCarMeta = async () => {
            const res = await fetch('http://localhost:8080/carMetaData', requestOptions);
            const data = await res.json();
            console.log(data)
            console.log(finance)
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
            // console.log(finance)
            history.push('/compare')
            // history.push('/compare', JSON.stringify(inputData))
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
            {/* <button onClick={print}>AAAA</button> */}
        </div>
    )
}

export default Selection
