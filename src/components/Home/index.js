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

import Step1 from '../../img/landing/steps/step1.png';
import Step2 from '../../img/landing/steps/step2.png';
import Step3 from '../../img/landing/steps/step3.png';
import Step4 from '../../img/landing/steps/step4.png';
import StepsLeftBg from '../../img/landing/steps/left-background.png';
import StepsCenterBg from '../../img/landing/steps/center-background.png';
import StepsRightBg from '../../img/landing/steps/right-background.png';

import AdvantagesCar from '../../img/landing/advantages/car.png';
import Customer from '../../img/landing/advantages/customer.png';
import Retailer from '../../img/landing/advantages/retailer.png';
import Manufacturer from '../../img/landing/advantages/manufacturer.png';
import Stakeholder from '../../img/landing/advantages/stakeholder.png';
import AdvantagesLeftBg from '../../img/landing/advantages/left-background.png';
import AdvantagesRightBg from '../../img/landing/advantages/right-background.png';

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
    
    const submit = () => {
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
                        <a href="#section1" className='navbar__link'>
                            Description
                        </a>
                    </li>
                    <li className='navbar__item'>
                        <a href="#section2" className='navbar__link'>
                            How it Works
                        </a>
                    </li>
                    <li className='navbar__item'>
                        <a href="#section3" className='navbar__link'>
                            Advantages
                        </a>
                    </li>
                </ul>
                <ul className='navbar__buttons'>
                    <li className='navbar__button'>
                        <button className='navbar__button--dealership' onClick={submitDealership}>Let's Go</button>
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
                    <h3 className="header__text-subtitle">introducing <span className="bold">Senso Education</span>: informing car-buyers on the selection and purchasing options of their vehicles, all in under five minutes.</h3>
                    <form className="header__form">
                        <input type="text" className="header__form-field" placeholder='Subscribe to our newsletter!'/>
                        <input type="reset" className="header__form-button" value="Subscribe" /> 
                    </form>

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

            <div className='description' id="section1">
                <img className='description__img' src={DetailCar}></img>
                <div className="description__text">
                    <h2 className="subtitle" id="description__text-title">buying a car is a <span className="bold">complicated decision</span>, and we're here to help.</h2>
                    <p className="detail" id="description__text-detail">
                        Customers have inherent biases when buying cars, such as the choice between always buying second-hand cars versus always buying new vehicles. 
                        As a consequence, they may make worse purchasing decisions (for instance, buying a new car when a used car may suffice in their situation), 
                        which can create problems for retailers (e.g. having to order a custom car as opposed to moving a car out of their lot). 
                        <span className="bold"> Senso Education helps Mercedes retailers by educating customers in the choice between second-hand 
                        models available in the dealer's lot, versus purchasing a new, custom car.</span>
                    </p>
                </div>
            </div>
            
            <div className='steps' id="section2">
                <div className='steps__text'>
                    <h2 className="subtitle" id="steps__text-title">how it works.</h2>
                    <p className="detail" id="steps__text-detail">
                        <span className="bold">The Question:</span> Let's say that you are looking for a new Mercedes SUV. 
                        How do you choose between the GLB SUV (mid-range) and the GLS SUV (high-end), 
                        or maybe between the GLS from 2018, versus the new GLS that was just released this year?
                        You could buy the GLS from this year (which maxes out your budget), or maybe you can pick the GLS AMG (the sports version) from 2018 
                        with a premium interior, or possibly even the maxed-out GLB which ultimately comes in at the same price as the new GLS.
                    </p>
                </div>

                <div className='steps__bg'>
                    <img className='steps__bg-left' alt="" src={StepsLeftBg}/>
                    <img className='steps__bg-center' alt="" src={StepsCenterBg}/>
                    <img className='steps__bg-right' alt="" src={StepsRightBg}/>
                </div>
                
                <div className="steps__grid">
                    <div className="steps__grid-item">
                        <img className='steps__grid-item-img' alt="" src={Step1}/>
                        <div className='steps__grid-info'>
                            <h3 className='steps__grid-info-title'>the client visits the retailer, looking to buy a car</h3>
                            <h3 className='steps__grid-info-detail'>They have an estimate of their budget & preferred cars.</h3>
                        </div>
                        <div className='steps__number'>
                            <p className='steps__number-fig'>1</p>
                        </div>
                    </div>

                    <div className="steps__grid-item">
                        <img className='steps__grid-item-img' alt="" src={Step2}/>
                        <div className='steps__grid-info'>
                            <h3 className='steps__grid-info-title'>the salesperson inputs financial info into the app</h3>
                            <h3 className='steps__grid-info-detail'>They are presented with cars that the client is eligible for.</h3>
                        </div>
                        <div className='steps__number'>
                            <p className='steps__number-fig'>2</p>
                        </div>
                    </div>

                    <div className="steps__grid-item">
                        <img className='steps__grid-item-img' alt="" src={Step3}/>
                        <div className='steps__grid-info'>
                            <h3 className='steps__grid-info-title'>they select the preferred car (e.g. the new GLS)</h3>
                            <h3 className='steps__grid-info-detail'>The salesperson also selects cars in a similar price range.</h3>
                        </div>
                        <div className='steps__number'>
                            <p className='steps__number-fig'>3</p>
                        </div>
                    </div>

                    <div className="steps__grid-item">
                        <img className='steps__grid-item-img' alt="" src={Step4}/>
                        <div className='steps__grid-info'>
                            <h3 className='steps__grid-info-title'>Senso Education graphs difference between the cars</h3>
                            <h3 className='steps__grid-info-detail'>The salesperson can sell to the client using the graphs as an aid.</h3>
                        </div>
                        <div className='steps__number'>
                            <p className='steps__number-fig'>4</p>
                        </div>
                    </div>
                </div>

            </div>

            <div className="advantages" id="section3">
                <div className='advantages__bg'>
                    <img className='advantages__bg-left' alt="" src={AdvantagesLeftBg}/>
                    <img className='advantages__bg-right' alt="" src={AdvantagesRightBg}/>

                <div className='right'>
                    <button onClick={submit}>Let's Go</button>

                </div>

                <img className='advantages__img' src={AdvantagesCar}></img>

                <div className='advantages__text'>
                    <h2 className="subtitle" id="advantages__text-title"><span className="bold">Why</span> Senso Education?</h2>
                    <p className="detail" id="advantages__text-detail">
                        Buying a car is a complicated decision that takes into account various factors, such as your budget, 
                        car lifespan expectancy, and so on.
                        Senso Education educates the customer on the <span className="bold">actual differences</span> between a base model, 
                        a used model, and a specced-out model.
                    </p>
                </div>

                <div className="advantages__grid">
                    <div className="advantages__grid-item">
                        <img className='advantages__grid-item-img' alt="" src={Customer}/>
                        <div className='advantages__grid-info'>
                            <h3 className='advantages__grid-info-title'>Empower the Customer</h3>
                            <h3 className='advantages__grid-info-detail'>
                                Clients will be educated on the difference between new and second-hand cars, tiers, perks, etc.
                            </h3>
                        </div>
                    </div>

                    <div className="advantages__grid-item">
                        <img className='advantages__grid-item-img' alt="" src={Retailer}/>
                        <div className='advantages__grid-info'>
                            <h3 className='advantages__grid-info-title'>Empower the Retailer</h3>
                            <h3 className='advantages__grid-info-detail'>
                                Senso Education enables retailers to move along their display cars as quickly as possible.
                            </h3>
                        </div>
                    </div>

                    <div className="advantages__grid-item">
                        <img className='advantages__grid-item-img' alt="" src={Manufacturer}/>
                        <div className='advantages__grid-info'>
                            <h3 className='advantages__grid-info-title'>Empower the Manufacturer</h3>
                            <h3 className='advantages__grid-info-detail'>
                                Car manufacturers can maximize their ability to make and sell cars, particularly base models.
                            </h3>
                        </div>
                    </div>

                    <div className="advantages__grid-item">
                        <img className='advantages__grid-item-img' alt="" src={Stakeholder}/>
                        <div className='advantages__grid-info'>
                            <h3 className='advantages__grid-info-title'>Keep the Stakeholders Happy</h3>
                            <h3 className='advantages__grid-info-detail'>
                                Senso Educations benefits investors, financial institutions, suppliers, partners, and much more! 
                            </h3>
                        </div>
                    </div>
                </div>
            </div>

            <div className='socials'>
                <p className='socials__text'>connect with us!</p>
                <img className='socials__icon' alt="linkedin" src={LinkedIn}/>
                <img className='socials__icon' alt="instagram" src={Instagram}/>
                <img className='socials__icon' alt="facebook" src={Facebook}/>
                <img className='socials__icon' alt="twitter" src={Twitter}/>
            </div>

            <div className='footer'>
                <img className='footer__img' alt="footer" src={FooterBg}/>
                <div className='footer__main'>
                    <h2 className='footer__main-title'>You made it all the way here! :)</h2>
                    <p className='footer__main-info'>
                        Thank you for visiting our website. Please give our product a try! We welcome all feedback. <br></br>
                        Made with <span>&#128151;</span> by Anna, Callum, Joanne, and Sophia for CSC207.
                    </p>
                </div>

                <div className="footer__contacts">
                    <div className='footer__contacts-container'>
                        <img className='footer__contacts-icon' alt="location" src={Location}/>
                        <p className='footer__contacts-text'>4 Privet Drive</p>
                    </div>
                    <div className='footer__contacts-container'>
                        <img className='footer__contacts-icon' alt="phone" src={Phone}/>
                        <p className='footer__contacts-text'>123-456-7890</p>
                    </div>
                    <div className='footer__contacts-container'>
                        <img className='footer__contacts-icon' alt="email" src={Email}/>
                        <p className='footer__contacts-text'>bilbobagginses@gmail.com</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home
