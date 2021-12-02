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

import Temp from '../../img/landing/steps/temp.png';
import StepsLeftBg from '../../img/landing/steps/left-background.png';
import StepsCenterBg from '../../img/landing/steps/center-background.png';
import StepsRightBg from '../../img/landing/steps/right-background.png';

import AdvantagesCar from '../../img/landing/advantages/car.png';
import Temp2 from '../../img/landing/advantages/icon.png';

import Facebook from '../../img/landing/footer/fb-icon.png';
import Instagram from '../../img/landing/footer/ig-icon.png';
import LinkedIn from '../../img/landing/footer/li-icon.png';
import Twitter from '../../img/landing/footer/twitter-icon.png';
import FooterBg from '../../img/landing/footer/background.png';
import Location from '../../img/landing/footer/location.png';
import Phone from '../../img/landing/footer/phone.png';
import Email from '../../img/landing/footer/email.png';

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
            <div className='navbar'>
                <Link to='/' className='navbar__logo'>
                    <img className='navbar__logo-img' alt="logo" src={SensoLogo}/>
                </Link>
                <ul className='navbar__menu'>
                    <li className='navbar__item'>
                        <Link to='/' className='navbar__link'>
                            Product
                        </Link>
                    </li>
                    <li className='navbar__item'>
                        <Link to='/' className='navbar__link'>
                            About
                        </Link>
                    </li>
                    <li className='navbar__item'>
                        <Link to='/' className='navbar__link'>
                            Contact
                        </Link>
                    </li>
                </ul>
                <ul className='navbar__buttons'>
                    <li className='navbar__button'>
                        <button className='navbar__button--owner' onClick={submitBuyer}>Prospective Owner</button>
                    </li>
                    <li className='navbar__button'>
                        <button className='navbar__button--dealership' onClick={submitDealership}>Dealership</button>
                    </li>
                </ul>
            </div>

            <div className="header">
                <div className="header__background">
                    <img className="header__background-left" src={LeftBg} />
                    <img className="header__background-right" src={RightBg} />
                    <img className="header__background-top" src={TopBg} /> 
                    <img className="header__background-main" src={MainImg} />
                </div>
                <div className="header__text">
                    <h1 className="header__text-title">a <span className="emph">revolutionary</span> way to purchase cars.</h1>
                    <h3 className="header__text-subtitle">introducing <span className="bold">Senso Education</span>: informing car-buyers on the selection and financing of their vehicles, all in under five minutes.</h3>
                    <div className="header__form">
                        <input type="text" className="header__form-field" placeholder='Email'></input>
                        <Link to='/sign-up'>
                            <button type= "submit" className="header__form-button">
                                Let's Go!
                            </button>
                        </Link>
                    </div>
                    <div className="header__stats">
                        <div className="header__stats-1">
                            <img className="header__stats-img" src={Stat1Img} />
                            <div className="header__stats-text">
                                <h3 className="header__stats-figure">300K+</h3>
                                <p className="header__stats-detail">active users trust Senso Education</p>
                            </div>
                        </div>
                        <div className="header__stats-2">
                            <img className="header__stats-img" src={Stat2Img} />
                            <div className="header__stats-text">
                                <h3 className="header__stats-figure">100+</h3>
                                <p className="header__stats-detail">cities across North America</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='description'>
                <img className='description__img' src={DetailCar}></img>
                <div className="description__text">
                    <h2 className="subtitle" id="description__text-title">a tastier description with all the juicy details.</h2>
                    <p className="detail" id="description__text-detail">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                </div>
            </div>
            
            <div className='steps'>
                <div className='steps__text'>
                    <h2 className="subtitle" id="steps__text-title">how it works.</h2>
                    <p className="detail" id="steps__text-detail">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>

                <div className='steps__bg'>
                    <img className='steps__bg-left' alt="" src={StepsLeftBg}/>
                    <img className='steps__bg-center' alt="" src={StepsCenterBg}/>
                    <img className='steps__bg-right' alt="" src={StepsRightBg}/>
                </div>
                
                <div className="steps__grid">
                    <div className="steps__grid-item">
                        <img className='steps__grid-item-img' alt="" src={Temp}/>
                        <div className='steps__grid-info'>
                            <h3 className='steps__grid-info-title'>lorem ipsum dolor sit amet</h3>
                            <h3 className='steps__grid-info-detail'>Lorem ipsum dolor sit amet, consectetur.</h3>
                        </div>
                        <div className='steps__number'>
                            <p className='steps__number-fig'>1</p>
                        </div>
                    </div>

                    <div className="steps__grid-item">
                        <img className='steps__grid-item-img' alt="" src={Temp}/>
                        <div className='steps__grid-info'>
                            <h3 className='steps__grid-info-title'>lorem ipsum dolor sit amet</h3>
                            <h3 className='steps__grid-info-detail'>Lorem ipsum dolor sit amet, consectetur.</h3>
                        </div>
                        <div className='steps__number'>
                            <p className='steps__number-fig'>2</p>
                        </div>
                    </div>

                    <div className="steps__grid-item">
                        <img className='steps__grid-item-img' alt="" src={Temp}/>
                        <div className='steps__grid-info'>
                            <h3 className='steps__grid-info-title'>lorem ipsum dolor sit amet</h3>
                            <h3 className='steps__grid-info-detail'>Lorem ipsum dolor sit amet, consectetur.</h3>
                        </div>
                        <div className='steps__number'>
                            <p className='steps__number-fig'>3</p>
                        </div>
                    </div>

                    <div className="steps__grid-item">
                        <img className='steps__grid-item-img' alt="" src={Temp}/>
                        <div className='steps__grid-info'>
                            <h3 className='steps__grid-info-title'>lorem ipsum dolor sit amet</h3>
                            <h3 className='steps__grid-info-detail'>Lorem ipsum dolor sit amet, consectetur.</h3>
                        </div>
                        <div className='steps__number'>
                            <p className='steps__number-fig'>4</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="advantages">
                <img className='advantages__img' src={AdvantagesCar}></img>
                <div className='advantages__text'>
                    <h2 className="subtitle" id="advantages__text-title">Why Senso Education?</h2>
                    <p className="detail" id="advantages__text-detail">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>

                <div className="advantages__grid">
                    <div className="advantages__grid-item">
                        <img className='advantages__grid-item-img' alt="" src={Temp2}/>
                        <div className='advantages__grid-info'>
                            <h3 className='advantages__grid-info-title'>Lorem Ipsum</h3>
                            <h3 className='advantages__grid-info-detail'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididuntut lab.</h3>
                        </div>
                    </div>

                    <div className="advantages__grid-item">
                        <img className='advantages__grid-item-img' alt="" src={Temp2}/>
                        <div className='advantages__grid-info'>
                            <h3 className='advantages__grid-info-title'>Lorem Ipsum</h3>
                            <h3 className='advantages__grid-info-detail'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididuntut lab.</h3>
                        </div>
                    </div>

                    <div className="advantages__grid-item">
                        <img className='advantages__grid-item-img' alt="" src={Temp2}/>
                        <div className='advantages__grid-info'>
                            <h3 className='advantages__grid-info-title'>Lorem Ipsum</h3>
                            <h3 className='advantages__grid-info-detail'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididuntut lab.</h3>
                        </div>
                    </div>

                    <div className="advantages__grid-item">
                        <img className='advantages__grid-item-img' alt="" src={Temp2}/>
                        <div className='advantages__grid-info'>
                            <h3 className='advantages__grid-info-title'>Lorem Ipsum</h3>
                            <h3 className='advantages__grid-info-detail'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididuntut lab.</h3>
                        </div>
                    </div>
                </div>
            </div>

            <div id='footer-container'>
                <div id='socials'>
                    <p className='connect'>connect with us!</p>
                    <img className='socials-icon' alt="linkedin" src={LinkedIn}/>
                    <img className='socials-icon' alt="instagram" src={Instagram}/>
                    <img className='socials-icon' alt="facebook" src={Facebook}/>
                    <img className='socials-icon' alt="twitter" src={Twitter}/>
                </div>
                <div className='footer'>
                    <img className='footer-img' alt="footer" src={FooterBg}/>
                    <div id="footer-description">
                        <div id='footer-main'>
                            <h2 id="footer-title">Footer</h2>
                            <p id="footer-info">Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <div id="footer-contact">
                            <div className='contacts-container'>
                                <img className='contacts-icon' alt="location" src={Location}/>
                                <p className='contacts'>123 Wallaby Way</p>
                            </div>
                            <div className='contacts-container'>
                                <img className='contacts-icon' alt="phone" src={Phone}/>
                                <p className='contacts'>123-456-7890</p>
                            </div>
                            <div className='contacts-container'>
                                <img className='contacts-icon' alt="email" src={Email}/>
                                <p className='contacts'>info@form.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home
