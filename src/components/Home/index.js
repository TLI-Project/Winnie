import React from "react";
import { Link } from 'react-router-dom';
import Header from "./../Header";
// import "./home.scss";
import Stat1Img from '../../img/landing/header/stat-1.png';
import Stat2Img from '../../img/landing/header/stat-2.png';
import MainImg from '../../img/landing/header/main-img.png';
import TopBg from '../../img/landing/header/top-background.png';
import LeftBg from '../../img/landing/header/left-background.png';
import RightBg from '../../img/landing/header/right-background.png';
import SensoLogo from '../../img/landing/navbar/logo.png';

const Home = () => {
    return (
        <div className='page page-home'>
            <nav>
                <div className='left'>
                    <img className='senso-logo' src={SensoLogo}/>
                </div>
                <div className='mid'>
                    <Link to='/'>Product</Link>
                    <Link to='/'>About</Link>
                    <Link to='/'>Contact</Link>
                </div>
                <div className='right'>
                    <Link to='/login'>Login</Link>
                    <Link to='/signup'>Sign Up</Link>
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
            <img className='bg bg-top' src={TopBg}/>
            <img className='bg bg-left' src={LeftBg}/>
            <img className='bg bg-right' src={RightBg}/>
        </div>
    )
}

export default Home
