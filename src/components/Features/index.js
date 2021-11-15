import React from 'react'
import { Link } from 'react-router-dom';
import './features.scss';

const Features = () => {
  return (
    <div className="Features">
      <h1> Browse add ons </h1>
      <Link to='/features-breakdown'>
      <div className="gallery">
                <a target="_blank" href="img_mounhttps://images.dealer.com/ddc/vehicles/2022/BMW/228%20Gran%20Coupe/Sedan/trim_i_sDrive_fb2469/color/Alpine%20White-300-233%2C238%2C232-640-en_US.jpg?impolicy=downsize_bkpt&imdensity=1&w=520">
                    <Link to="display">
                        <img src="https://images.dealer.com/ddc/vehicles/2022/BMW/228%20Gran%20Coupe/Sedan/trim_i_sDrive_fb2469/color/Alpine%20White-300-233%2C238%2C232-640-en_US.jpg?impolicy=downsize_bkpt&imdensity=1&w=520" alt="Cinque Terre" width="600" height="400">
                        </img>
                    </Link>
                </a>
                <div className="desc">This is an add on</div>
            </div>

        <button className='btn2'>Show me the breakdown of the features!</button>
      </Link>
    </div>
  )
}

export default Features

/*Need to fudge data regarding add ons ticket SE-47*/