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

import Step1ImgSrc from '../../img/landing/steps/step1.png';
import Step2ImgSrc from '../../img/landing/steps/step2.png';
import Step3ImgSrc from '../../img/landing/steps/step3.png';
import Step4ImgSrc from '../../img/landing/steps/step4.png';
import WhySensoCarImgSrc from '../../img/landing/why-senso/car.png';

import FooterBg from '../../img/landing/footer/background.png';
import Instagram from '../../img/landing/footer/ig-icon.png';
import Facebook from '../../img/landing/footer/fb-icon.png';
import Linkedin from '../../img/landing/footer/li-icon.png';
import Twitter from '../../img/landing/footer/twitter-icon.png';
import Email from '../../img/landing/footer/mail.png';
import Phone from '../../img/landing/footer/phone.png';
import Location from '../../img/landing/footer/location.png';

import "./styles.scss";

const Chunk3Card = ({ num, imgSrc, title, desc }) =>
    <div className='card'>
        <p className='big-num'>{num}</p>
        <img src={imgSrc} />
        <h3 className='title'>{title}</h3>
        <p className='desc'>{desc}</p>
    </div>

const Chunk4Card = ({ imgSrc, title, desc }) =>
    <div className='card'>
        <div className='row'>
            <img src={imgSrc} />
            <h3>{title}</h3>
        </div>
        <p>{desc}</p>
    </div>

const FooterItem = ({ imgSrc, text, link }) =>
    <div className='item'>
        <img src={imgSrc} />
        <Link to={link} target='_blank'>{text}</Link>
    </div>;

const Home = () => {
    const history = useHistory();

    const submit = () => {
        history.push('/finance')
    }
    return (
        <div className='page' id='page-home'>
            <div className='bg'>
                <img src={TopBg} className='top' />
                <img src={RightBg} className='right' />
                <img src={LeftBg} className='left' />
            </div>

            <header>
                <Link className='logo-btn'>
                    <img src={SensoLogo} />
                </Link>

                <nav>
                    <Link className='nav-btn'>Product</Link>
                    <Link className='nav-btn'>About</Link>
                    <Link className='nav-btn'>Contact</Link>
                </nav>

                <button onClick={submit}>Let's go</button>
            </header>

            <div className='chunk chunk-0'>
                <div className='left'>
                    <h1>a <span>revolutionary</span> way to purchase cars.</h1>
                    <p>introducing <b>Senso Education</b>: informing car-buyers on the selection and financing of their vehicles, all in under five minutes.</p>
                    <div className='email-container'>
                        <input type='email' />
                        <button onClick={submit}>Let's go</button>
                    </div>
                    <div className='stats'>
                        <div className='stat'>
                            <img src={Stat1Img} />
                            <div className='stat-text'>
                                <h2>300K+</h2>
                                <p>active users trust Senso Education</p>
                            </div>
                        </div>
                        <div className='stat'>
                            <img src={Stat2Img} />
                            <div className='stat-text'>
                                <h2>100+</h2>
                                <p>cities across North America</p>
                            </div>
                        </div>
                    </div>
                </div>
                <img src={MainImg} className='hand' />
            </div>

            <div className='chunk chunk-1'>
                <img src={DetailCar} />
                <div className='text-container'>
                    <h3>buying a car is a <b>complicated decision</b>, and we're here to help.</h3>
                    <p>
                        Customers have inherent biases when buying cars, such as the choice between always buying second-hand cars versus always buying new vehicles.
                        As a consequence, they may make worse purchasing decisions (for instance, buying a new car when a used car may suffice in their situation),
                        which can create problems for retailers (e.g. having to order a custom car as opposed to moving a car out of their lot).
                        <b> Senso Education helps Mercedes retailers by educating customers in the choice between second-hand
                            models available in the dealer's lot, versus purchasing a new, custom car.</b>
                    </p>
                    <button onClick={submit}>Learn More</button>
                </div>
            </div>

            <div className='chunk chunk-2'>
                <h2>How it works</h2>
                <p> <b>The question: </b>
                    Let's say that you are looking for a new Mercedes SUV.
                    How do you choose between the GLB SUV (mid-range) and the GLS SUV (high-end),
                    or maybe between the GLS from 2018, versus the new GLS that was just released this year?
                    You could buy the GLS from this year (which maxes out your budget), or maybe you can pick the GLS AMG (the sports version) from 2018
                    with a premium interior, or possibly even the maxed-out GLB which ultimately comes in at the same price as the new GLS.
                </p>
            </div>

            <div className='chunk chunk-3'>
                <Chunk3Card num='1' imgSrc={Step1ImgSrc} title='the client visits the retailer, looking to buy a car' desc='They have an estimate of their budget & preferred cars.' />
                <Chunk3Card num='2' imgSrc={Step2ImgSrc} title='the salesperson inputs financial info into the app' desc='They are presented with cars that the client is eligible for.' />
                <Chunk3Card num='3' imgSrc={Step3ImgSrc} title='they select their preferred car (e.g. the new GLS)' desc='The salesperson also selects cars in a similar price range.' />
                <Chunk3Card num='4' imgSrc={Step4ImgSrc} title='Senso Education graphs difference between the cars' desc='The salesperson can sell to the client using the graphs as an aid.' />
            </div>

            <div className='chunk chunk-4'>
                <div className='left'>
                    <h2><b>Why</b> Senso Education</h2>
                    <p>
                        Buying a car is a complicated decision that takes into account various factors, such as your budget,
                        car lifespan expectancy, and so on.
                        Senso Education educates the customer on the <b>actual differences</b> between a base model,
                        a used model, and a specced-out model.
                    </p>
                    <div className='cards'>
                        <Chunk4Card imgSrc={Stat1Img} title='Empower the Customer' desc='Clients will be educated on the difference between new and second-hand cars, tiers, perks, etc.' />
                        <Chunk4Card imgSrc={Stat1Img} title='Empower the Retailer' desc='Senso Education enables retailers to move along their display cars as quickly as possible.' />
                        <Chunk4Card imgSrc={Stat1Img} title='Empower the Manufacturer' desc='Car manufacturers can maximize their ability to make and sell cars, particularly base models.' />
                        <Chunk4Card imgSrc={Stat1Img} title='Keep the Stakeholders Happy' desc='Senso Educations benefits investors, financial institutions, suppliers, partners, and much more!' />
                    </div>
                </div>
                <img src={WhySensoCarImgSrc} />
            </div>

            <div className='chunk chunk-5'>
                <p>connect with us</p>
                <img src={Instagram} />
                <img src={Facebook} />
                <img src={Linkedin} />
                <img src={Twitter} />
            </div>

            <footer className='chunk chunk-footer'>
                <img src={FooterBg} className='bg' />
                <div className='left'>
                    <h2>You made it all the way here!</h2>
                    <p>Thank you for visiting our website. Please give our product a try! We welcome all feedback. <br></br>
                        Made with <span>&#128151;</span> by Joanne, Anna, Callum, and Sophia for CSC207.</p>
                </div>
                <div className='right'>
                    <FooterItem imgSrc={Email} text='bilbobagginses@gmail.com' link='#' />
                    <FooterItem imgSrc={Phone} text='123-456-7890' link='#' />
                    <FooterItem imgSrc={Location} text='111 Neverland Drive' link='#' />
                </div>
            </footer>

        </div>
    )
}

export default Home
