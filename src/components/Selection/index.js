import React from 'react'
import { Link } from 'react-router-dom';
import './selection.scss';

const Selection = () => {
    return (
        <div className="Selection">
            <h1> User browses and select wanted cars here: </h1>
            <h3> After they pick the cars they want, they fill out their financing info.</h3>
            <Link to='/finance'>
                <button>Fill in my info</button>
            </Link>
            <div className="gallery">
                <a target="_blank" href="https://images.dealer.com/ddc/vehicles/2022/BMW/228%20Gran%20Coupe/Sedan/trim_i_sDrive_fb2469/color/Alpine%20White-300-233%2C238%2C232-640-en_US.jpg?impolicy=downsize_bkpt&imdensity=1&w=520">
                    <Link to="display">
                        <img src="https://images.dealer.com/ddc/vehicles/2022/BMW/228%20Gran%20Coupe/Sedan/trim_i_sDrive_fb2469/color/Alpine%20White-300-233%2C238%2C232-640-en_US.jpg?impolicy=downsize_bkpt&imdensity=1&w=520" alt="Cinque Terre" width="600" height="400">
                        </img>
                    </Link>
                </a>
                <div className="desc">Add a description of the image here</div>
            </div>

            <div className="gallery">
                <a target="_blank" href="https://images.dealer.com/ddc/vehicles/2022/BMW/228%20Gran%20Coupe/Sedan/trim_i_sDrive_fb2469/color/Alpine%20White-300-233%2C238%2C232-640-en_US.jpg?impolicy=downsize_bkpt&imdensity=1&w=520">
                    <Link to="display">
                        <img src="https://images.dealer.com/ddc/vehicles/2022/BMW/228%20Gran%20Coupe/Sedan/trim_i_sDrive_fb2469/color/Alpine%20White-300-233%2C238%2C232-640-en_US.jpg?impolicy=downsize_bkpt&imdensity=1&w=520" alt="Cinque Terre" width="600" height="400">
                        </img>
                    </Link>
                </a>
                <div className="desc">Add a description of the image here</div>
            </div>

            <div className="gallery">
                <a target="_blank" href="https://images.dealer.com/ddc/vehicles/2022/BMW/228%20Gran%20Coupe/Sedan/trim_i_sDrive_fb2469/color/Alpine%20White-300-233%2C238%2C232-640-en_US.jpg?impolicy=downsize_bkpt&imdensity=1&w=520">
                    <Link to="display">
                        <img src="https://images.dealer.com/ddc/vehicles/2022/BMW/228%20Gran%20Coupe/Sedan/trim_i_sDrive_fb2469/color/Alpine%20White-300-233%2C238%2C232-640-en_US.jpg?impolicy=downsize_bkpt&imdensity=1&w=520" alt="Cinque Terre" width="600" height="400">
                        </img>
                    </Link>
                </a>
                <div className="desc">Add a description of the image here</div>
            </div>

            <div className="gallery">
                <a target="_blank" href="img_mounhttps://images.dealer.com/ddc/vehicles/2022/BMW/228%20Gran%20Coupe/Sedan/trim_i_sDrive_fb2469/color/Alpine%20White-300-233%2C238%2C232-640-en_US.jpg?impolicy=downsize_bkpt&imdensity=1&w=520">
                    <Link to="display">
                        <img src="https://images.dealer.com/ddc/vehicles/2022/BMW/228%20Gran%20Coupe/Sedan/trim_i_sDrive_fb2469/color/Alpine%20White-300-233%2C238%2C232-640-en_US.jpg?impolicy=downsize_bkpt&imdensity=1&w=520" alt="Cinque Terre" width="600" height="400">
                        </img>
                    </Link>
                </a>
                <div className="desc">Add a description of the image here</div>
            </div>

            <div className="gallery">
                <a target="_blank" href="img_mounhttps://images.dealer.com/ddc/vehicles/2022/BMW/228%20Gran%20Coupe/Sedan/trim_i_sDrive_fb2469/color/Alpine%20White-300-233%2C238%2C232-640-en_US.jpg?impolicy=downsize_bkpt&imdensity=1&w=520">
                    <Link to="display">
                        <img src="https://images.dealer.com/ddc/vehicles/2022/BMW/228%20Gran%20Coupe/Sedan/trim_i_sDrive_fb2469/color/Alpine%20White-300-233%2C238%2C232-640-en_US.jpg?impolicy=downsize_bkpt&imdensity=1&w=520" alt="Cinque Terre" width="600" height="400">
                        </img>
                    </Link>
                </a>
                <div className="desc">Add a description of the image here</div>
            </div>
            <div className="gallery">
                <a target="_blank" href="img_mounhttps://images.dealer.com/ddc/vehicles/2022/BMW/228%20Gran%20Coupe/Sedan/trim_i_sDrive_fb2469/color/Alpine%20White-300-233%2C238%2C232-640-en_US.jpg?impolicy=downsize_bkpt&imdensity=1&w=520">
                    <Link to="display">
                        <img src="https://images.dealer.com/ddc/vehicles/2022/BMW/228%20Gran%20Coupe/Sedan/trim_i_sDrive_fb2469/color/Alpine%20White-300-233%2C238%2C232-640-en_US.jpg?impolicy=downsize_bkpt&imdensity=1&w=520" alt="Cinque Terre" width="600" height="400">
                        </img>
                    </Link>
                </a>
                <div className="desc">Add a description of the image here</div>
            </div>
        </div>
    )
}

export default Selection
