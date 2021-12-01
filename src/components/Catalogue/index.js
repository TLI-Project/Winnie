import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom';
import blueEllipse from '../../img/landing/background/Ellipse-blue.png';
import greenEllipse from '../../img/landing/background/Ellipse-green.png';

const Selection = () => {
    const [selected, setSelected] = useState([])
    const history = useHistory();

    const [processedData, setProcessedData] = useState(null);

    useEffect(() => {
        const fetchCarMeta = async () => {
            const res = await fetch('http://localhost:8080/carMetaData', requestOptions);
            const data = await res.json();
            console.log(data)
            const processed = []
            for (let i = 1; i < 12; i++) {
                processed.push(JSON.parse(data[i]))
            }
            setProcessedData(processed)
        }
        fetchCarMeta();
    }, [])



    const submit = () => {
        // fetch to verify, if ok, history.push
        if (selected.length == 0) {
            alert('please select a car')
        } else {
            history.push('/compare')
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
            <h1> Browse for your desired vehicle</h1>
            <div className="container">
                {processedData !== null &&
                    processedData.map(entry => (
                        <div className='gallery'>
                            <p>{selected.includes(entry.id) ? 'SELECTED' : 'NOT SELECTED'}</p>
                            <Link to={`/details/${entry.id}`}>
                                <img src={entry.imageURL} alt={entry.carModel} />
                            </Link>
                            <div className="desc">Add a description of the image here</div>
                            <button onClick={() => handleAddCar(entry.id)}></button>
                        </div>
                    ))
                }
                <div className="gallery">

                </div>
                <div className="gallery">
                    {/* <a target="_blank" href="https://images.dealer.com/ddc/vehicles/2022/BMW/228%20Gran%20Coupe/Sedan/trim_i_sDrive_fb2469/color/Alpine%20White-300-233%2C238%2C232-640-en_US.jpg?impolicy=downsize_bkpt&imdensity=1&w=520"> */}
                    <Link to="/details">
                        <img src="https://images.dealer.com/ddc/vehicles/2022/BMW/228%20Gran%20Coupe/Sedan/trim_i_sDrive_fb2469/color/Alpine%20White-300-233%2C238%2C232-640-en_US.jpg?impolicy=downsize_bkpt&imdensity=1&w=520" alt="Cinque Terre" width="600" height="400">
                        </img>
                    </Link>
                    {/* </a> */}
                    <div className="desc">Add a description of the image here</div>
                </div>
                <div className="gallery">
                    <a target="_blank" href="https://images.dealer.com/ddc/vehicles/2022/BMW/228%20Gran%20Coupe/Sedan/trim_i_sDrive_fb2469/color/Alpine%20White-300-233%2C238%2C232-640-en_US.jpg?impolicy=downsize_bkpt&imdensity=1&w=520">
                        <Link to="/details">
                            <img src="https://images.dealer.com/ddc/vehicles/2022/BMW/228%20Gran%20Coupe/Sedan/trim_i_sDrive_fb2469/color/Alpine%20White-300-233%2C238%2C232-640-en_US.jpg?impolicy=downsize_bkpt&imdensity=1&w=520" alt="Cinque Terre" width="600" height="400">
                            </img>
                        </Link>
                    </a>
                    <div className="desc">Add a description of the image here</div>
                </div>
            </div>
            <button className="btn" onClick={submit}>Next</button>
        </div>
    )
}

export default Selection
