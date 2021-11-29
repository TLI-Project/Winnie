import React from "react";
import { Link, useHistory } from 'react-router-dom';
import Stat1Img from '../../img/landing/header/stat-1.png';
import Stat2Img from '../../img/landing/header/stat-2.png';
import MainImg from '../../img/landing/header/main-img.png';
import TopBg from '../../img/landing/header/top-background.png';
import LeftBg from '../../img/landing/header/left-background.png';
import RightBg from '../../img/landing/header/right-background.png';
import SensoLogo from '../../img/landing/navbar/logo.png';
import DetailCar from '../../img/landing/detail/car.png';

const Home = () => {
    const history = useHistory();
    const submitBuyer = () => {
        history.push('/login')
    }

    const submitDealership = () => {
        history.push('/finance')
    }
    return (
        <div className='page page-home'>
            <nav>
                <div className='left'>
                    <img className='senso-logo' src={SensoLogo} />
                </div>
                <div className='mid'>
                    <Link to='/'>Product</Link>
                    <Link to='/'>About</Link>
                    <Link to='/'>Contact</Link>
                </div>
                <div className='right'>
                    <button onClick={submitBuyer}>The Next Car Owner</button>
                    <button onClick={submitDealership}>Dealership</button>
                </div>
            </nav>
            <div className='wrapper'>
                <h1>A <span className='highlight'>revolutionary</span> way to purchase cars</h1>
                <p>introducing <b>Senso Education:</b> informing car-buyers on the selection and financing of their vehicles, all in under five minutes.</p>
                <div className='email-box'>
                    <input type='email' />
                    <button>Let's go</button>
                </div>
                <div className='stats'>
                    <div className='stats-box'>
                        <img src={Stat1Img} alt='a' />
                        <div className='stats-box-text'>
                            <h2>300K+</h2>
                            <p>active users trust Senso Education</p>
                        </div>
                    </div>
                    <div className='stats-box'>
                        <img src={Stat2Img} alt='a' />
                        <div className='stats-box-text'>
                            <h2>300K+</h2>
                            <p>active users trust Senso Education</p>
                        </div>
                    </div>
                </div>
                <img className='main-img' src={MainImg} alt='a' />
            </div>
            <img className='bg bg-top' src={TopBg} />
            <img className='bg bg-left' src={LeftBg} />
            <img className='bg bg-right' src={RightBg} />
            <img className='detail-car' src={DetailCar}></img>
            <div className='detail-right'>
                <h2>A tastier description with all the details.</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    Quam id leo in vitae. Non pulvinar neque laoreet suspendisse interdum libero id faucibus. Diam nulla porttitor massa id neque aliquam.</p>
            </div>

        </div>
    )
}

export default Home
