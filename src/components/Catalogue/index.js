import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import blueEllipse from '../../img/landing/background/Ellipse-blue.png';
import greenEllipse from '../../img/landing/background/Ellipse-green.png';

const Selection = () => {
    const [carOne, setCarOne] = useState('')
    const [carTwo, setCarTwo] = useState('')
    const [carThree, setCarThree] = useState('')
    const [carFour, setCarFour] = useState('')
    const history = useHistory();

    const submit = () => {
        // fetch to verify, if ok, history.push
        if (carOne == '') {
            alert('please select a car')
        } else {
            history.push('/compare')
        }
    }

    return (
        <div className="page page-catalogue">
            <img className="ellipse-blue" src={blueEllipse} />
            <img className="ellipse-green" src={greenEllipse} />
            <h1> Browse for your desired vehicle</h1>
            <div className="container">
                <div className="gallery">
                    <a target="_blank" href="https://images.dealer.com/ddc/vehicles/2022/BMW/228%20Gran%20Coupe/Sedan/trim_i_sDrive_fb2469/color/Alpine%20White-300-233%2C238%2C232-640-en_US.jpg?impolicy=downsize_bkpt&imdensity=1&w=520">
                        <Link to="/details">
                            <img src="https://images.dealer.com/ddc/vehicles/2022/BMW/228%20Gran%20Coupe/Sedan/trim_i_sDrive_fb2469/color/Alpine%20White-300-233%2C238%2C232-640-en_US.jpg?impolicy=downsize_bkpt&imdensity=1&w=520" alt="Cinque Terre" width="600" height="400">
                            </img>
                        </Link>
                    </a>
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
