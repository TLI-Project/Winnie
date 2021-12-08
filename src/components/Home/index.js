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

                <Link className='cta-btn'>Let's go</Link>
            </header>

            <div className='chunk chunk-0'>
                <div className='left'>
                    <h1>a <span>revolutionary</span> way to purchase cars.</h1>
                    <p>introducing <b>Senso Education</b>: informing car-buyers on the selection and financing of their vehicles, all in under five minutes.</p>
                    <div className='email-container'>
                        <input type='email' />
                        <button>Let's go</button>
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
                    <h3>Lorem ipsum dolor amet avc abca cba cbac abc</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                    <Link>Learn more</Link>
                </div>
            </div>

            <div className='chunk chunk-2'>
                <h2>How it works</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>

            <div className='chunk chunk-3'>
                <Chunk3Card num='1' imgSrc={Step1ImgSrc} title='lorem ipsum dolor sit amet' desc='lorem ipsum dolor sit amet consectur' />
                <Chunk3Card num='2' imgSrc={Step2ImgSrc} title='lorem ipsum dolor sit amet' desc='lorem ipsum dolor sit amet consectur' />
                <Chunk3Card num='3' imgSrc={Step3ImgSrc} title='lorem ipsum dolor sit amet' desc='lorem ipsum dolor sit amet consectur' />
                <Chunk3Card num='4' imgSrc={Step4ImgSrc} title='lorem ipsum dolor sit amet' desc='lorem ipsum dolor sit amet consectur' />
            </div>

            <div className='chunk chunk-4'>
                <div className='left'>
                    <h2>Why Senso Education</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <div className='cards'>
                        <Chunk4Card imgSrc={Stat1Img} title='Lorem Ipsum' desc='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididuntut lab.' />
                        <Chunk4Card imgSrc={Stat1Img} title='Lorem Ipsum' desc='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididuntut lab.' />
                        <Chunk4Card imgSrc={Stat1Img} title='Lorem Ipsum' desc='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididuntut lab.' />
                        <Chunk4Card imgSrc={Stat1Img} title='Lorem Ipsum' desc='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididuntut lab.' />
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
